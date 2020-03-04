# Shareable Configs for Angular projects

These rules are the most stringent, which allow you to control all types of data in your project, as well as more
strictly determine the order of imports.

### Quick start

```bash
$ npm install @angular-ru/eslint-config -D
```

Add to your `.eslintrc.json`:

```json
{
    "extends": "@angular-ru/eslint-config"
}
```

Check out eslint:

```
$ eslint "**/*.ts"
```

### Override rules

`.eslintrc.json`:

```json5
{
    extends: '@angular-ru/eslint-config',
    rules: {
        // override extended rules
    }
}
```
