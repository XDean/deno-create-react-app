# Deno Create React App

Create React apps with Deno

## Quick Start

```
deno install -A --unstable -n deno-create-react-app https://deno.land/x/create_react_app/mod.ts
deno-create-react-app init my-app
cd my-app
deno-create-react-app run
```

## Commands

### Installation

```
deno install -A --unstable -n deno-create-react-app https://deno.land/x/create_react_app/mod.ts
```

command `deno-create-react-app` will install on your desktop

### Init

```
deno-create-react-app init <name>
```

a sample project will init into folder `<name>`

### Run

```
deno-create-react-app run <-w> <-p>
```

run the project locally

- `-w, --watch`, watch file change to rebuild, default is true
- `-p, --port`, server port, default is 8000

### Build

```
deno-create-react-app build
```

build the project to `dist/build`, your app is ready to deploy

## Project Structure

```
- my-app
  - dist/           # this folder is generated when run/build
  - static/         # put static files here, like css/image
  - index.html      # required
  - index.tsx       # required
  - tsconfig.json   # required
```