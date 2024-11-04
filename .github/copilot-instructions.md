# DIRECTION

## Rules

### Always use the "Angular Commit Format Reference Sheet" to write commit messages.

### in typescript and javascript code use esm format (export/import) instead of any amd code.

### in typescript and code refactoring change from amd to esm where possible.

### Never add extra comments in the package.json file.

## Refactor

### In the package.json file, ask other contributors to use pnpm as the package manager.

- `pnpm i only-allow -SE`
- modify `package.json`:

  ```diff
  {
    "scripts": {
  +   "preinstall": "npx only-allow pnpm"
    },
    "devDependencies": {
  +   "only-allow": "1.2.1"
    }
  }
  ```

### in the package.json file, if the "exports" field is a conditional reference, then

- always make sure that "types" is listed first (entry-point for TypeScript resolution - must occur first!)
- always make sure that "default" is listed at the end (as generic fallback that always matches)

> see https://www.typescriptlang.org/docs/handbook/modules/reference.html#example-explicit-types-condition

> [!TIP]
>
> also see https://github.com/bluwy/publint
>
> or you can run `npx publint` to check

👍 this is good

```json
{
  "name": "pkg",
  "exports": {
    "./subpath": {
      "import": {
        "types": "./types/subpath/index.d.mts",
        "default": "./es/subpath/index.mjs"
      },
      "require": {
        "types": "./types/subpath/index.d.cts",
        "default": "./cjs/subpath/index.cjs"
      }
    }
  }
}
```

⛔ this bad

```json
{
  "name": "pkg",
  "exports": {
    "./subpath": {
      "import": {
        "default": "./es/subpath/index.mjs",
        "types": "./types/subpath/index.d.mts"
      },
      "require": {
        "default": "./cjs/subpath/index.cjs",
        "types": "./types/subpath/index.d.cts"
      }
    }
  }
}
```
