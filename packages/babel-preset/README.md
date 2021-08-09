# @test-pkg-remove-me/babel-preset

Automatically load the css for the @test-pkg-remove-me design system.

## Installation

```sh
npm i --save-dev @test-pkg-remove-me/babel-preset
# or
yarn add -D @test-pkg-remove-me/babel-preset
```

## Usage

.babelrc:

```json
{
  "presets": ["@test-pkg-remove-me/babel-preset"]
}
```

## Example

Input:

```js
import Card from '@test-pkg-remove-me/card';
```

Output:

```js
import Card from '@test-pkg-remove-me/card';
import '@test-pkg-remove-me/card/dist/main.css';
```
