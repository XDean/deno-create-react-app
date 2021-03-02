import {oak} from '../deps.ts'

export async function runServer(port: number) {
  const router = new oak.Router();
  router
    .get('/ping', ctx => {
      ctx.response.body = 'pong'
    })
    .get('/', async ctx => {
      await oak.send(ctx, 'index.html', {root: '.',});
    })
    .get('/static/:path(.*)', async ctx => {
      await oak.send(ctx, ctx.request.url.pathname, {root: '.'});
    })
    .get('/static/js/main.js', async ctx => {
      await oak.send(ctx, ctx.request.url.pathname, {root: 'build'});
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