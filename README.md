## .d.ts emission bug minimal repro

To test:

1. Install packages: `yarn`
2. `yarn build`

Result:

```
src/index.tsx → dist/index.js...
[!] (plugin rpt2) Error: /Users/davidgolightly/dev/react-select-repro/src/select.tsx(3,14): semantic error TS4023: Exported variable 'SelectTheme' has or is using name 'ThemeSpacing' from external module "/Users/davidgolightly/dev/react-select-repro/node_modules/react-select/dist/declarations/src/types" but cannot be named.
src/select.tsx
Error: /Users/davidgolightly/dev/react-select-repro/src/select.tsx(3,14): semantic error TS4023: Exported variable 'SelectTheme' has or is using name 'ThemeSpacing' from external module "/Users/davidgolightly/dev/react-select-repro/node_modules/react-select/dist/declarations/src/types" but cannot be named.
    at error (/Users/davidgolightly/dev/react-select-repro/node_modules/rollup/dist/shared/rollup.js:158:30)
    at throwPluginError (/Users/davidgolightly/dev/react-select-repro/node_modules/rollup/dist/shared/rollup.js:21741:12)
    at Object.error (/Users/davidgolightly/dev/react-select-repro/node_modules/rollup/dist/shared/rollup.js:22415:20)
    at Object.error (/Users/davidgolightly/dev/react-select-repro/node_modules/rollup/dist/shared/rollup.js:21917:38)
    at RollupContext.error (/Users/davidgolightly/dev/react-select-repro/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:17241:30)
    at /Users/davidgolightly/dev/react-select-repro/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:25064:23
    at arrayEach (/Users/davidgolightly/dev/react-select-repro/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:549:11)
    at Function.forEach (/Users/davidgolightly/dev/react-select-repro/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:9401:14)
    at printDiagnostics (/Users/davidgolightly/dev/react-select-repro/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:25037:12)
    at /Users/davidgolightly/dev/react-select-repro/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:30114:21

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Expected:

No error, types are correctly generated