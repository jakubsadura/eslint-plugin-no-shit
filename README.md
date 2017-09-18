![1_primary_logo_on_transparent_295x65](https://user-images.githubusercontent.com/802781/30567713-ecf55048-9cd1-11e7-9737-ff13b1c35406.png)

The plugin will warn ⚠️ you if it finds words like `fuck` and `shit` 💪 in your codebase (variable declarations, function declarations and even comments 💯).
If you believe that clean code === code without swearing (even in comments!) you should give this plugin a try.

## Usage

<img width="670" alt="screen shot 2017-09-19 at 00 24 42" src="https://user-images.githubusercontent.com/802781/30567719-f2a96060-9cd1-11e7-8b1b-f9a051166ba9.png">

Let's assume you are already using [ESLint](http://eslint.org).

1) Install `eslint-plugin-no-shit` into your dev dependencies:

```
$ npm install eslint-plugin-no-shit --save-dev
```

2) Add `no-shit` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-shit"
    ]
}
```

3) Add 'be-polite' rule to the rules section. If you intend to use the plugin at work pass `nsfw: true` option in following way:

```json
{
    "rules": {
        "no-shit/be-polite": ["warn", {"nsfw": true}]
    }
}
```

## How

I created this plugin after watching great Frontend Masters "Abstract Syntax Trees" course by @kentcdodds - you can check it out at https://github.com/kentcdodds/asts-workshop/

# LICENSE

MIT
