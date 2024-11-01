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
