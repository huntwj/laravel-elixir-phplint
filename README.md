# laravel-elixir-phplint

## Install

```bash
$ npm install laravel-elixir-phplint --save-dev
```

## Usage

### Example Gulpfile

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-phplint');

elixir(function(mix) {
  mix.phpLint();
}
```
### Advanced Example

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-phplint');

elixir(function(mix) {
  mix.phpLint([
    'app/**/*.php',
    'test/**/*.php'
  ]);
}
```

## Credits

The general form and structure as well as some code snippets of this plugin were borrowed 
(or viciously stolen?) from the ponko2/laravel-elixir-eslint project on Github.

