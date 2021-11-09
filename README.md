# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## drop console

> yarn add babel-plugin-transform-remove-console --dev

```ts
// /config/config.ts

import { defineConfig } from 'umi';

export default defineConfig({
  extraBabelPlugins: ['transform-remove-console'],
});
```
