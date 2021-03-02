import {oak,fs} from '../deps.ts'
import {bundleIndex} from "../build/bundle.ts";

const bundleOutput = 'build/run/static/js/main.js'

export async function run(options: { port: number, watch: boolean }) {
  if(!await fs.exists('index.tsx')){
    console.error(`there is no 'index.tsx', it's not created by deno-create-react-app`)
    return null
  }
  if(!await bundleIndex(bundleOutput)){
    console.error(`fail to bundle 'index.tsx', exit`)
    return null
  }
  if (options.watch) {
    watch()
  }
  await runServer(options.port)
}

export async function watch() {
  for await (const event of Deno.watchFs('.')){
    console.log(event)
  }
}

export async function runServer(port: number) {
  const router = new oak.Router();
  router
    .get('/ping', ctx => {
      ctx.response.body = 'pong'
    })
    .get('/', async ctx => {
      await oak.send(ctx, 'index.html');
    })
    .get('/static/js/main.js', async ctx => {
      await oak.send(ctx, bundleOutput);
    })
    .get('/static/:path(.*)', async ctx => {
      await oak.send(ctx, ctx.request.url.pathname);
    })

  const app = new oak.Application();
  app.use(async (ctx, next) => {
    const query = oak.helpers.getQuery(ctx)
    try {
      await next();
    } catch (err) {
      if (oak.isHttpError(err)) {
        ctx.response.body = {
          code: err.status,
          message: err.message,
          stack: query.trace == undefined ? undefined : err.stack,
        }
        ctx.response.status = err.status
      } else {
        throw err;
      }
    }
  })
  app.use(router.routes());
  app.use(router.allowedMethods());

  console.log(`server started at port ${port}`)
  return app.listen({port: port});
}