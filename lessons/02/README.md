# Fractalの設定

fractalの設定を行います。

## fractal.jsの中身

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../01/fractal.js) -->
<!-- The below code snippet is automatically added from ../01/fractal.js -->
```js
'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Sample Project');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));
```
<!-- AUTO-GENERATED-CONTENT:END -->

設定は4タイプあり、それぞれがもつ `set()`メソッドで行う。

- fractal.set(): プロジェクト情報の設定 
- fractal.components.set(): コンポーネントの設定
- fractal.docs.set(): ドキュメントの設定
- fractal.web.set(): スタイルガイドのUIに対する設定

[🔗 詳しくはこちら](https://fractal.build/guide/project-settings)

## 設定を変更する

### Nunjucksを使う

使い勝手のよい、nunjucksに変更します。  
(Handlbarsはifにtrue/falseしか使えないし、他にも..)

https://github.com/frctl/nunjucks

```sh
npm i @frctl/nunjucks --save
```

fractal.jsに追加

```js
fractal.components.engine('@frctl/nunjucks'); // テンプレートエンジンにnunjucksをセット
fractal.components.set('ext', '.njk'); // 拡張子を変更する
```

hbsファイルの拡張子を`.njk`に変更する

### Preview layoutを設置する

css, jsを読み込むために `_preview.njk`を設置します。

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/_partials/_preview.njk) -->
<!-- The below code snippet is automatically added from ./components/_partials/_preview.njk -->
```njk
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="{{ '/assets/main.css' | path }}">
    <title>Preview</title>
</head>
<body>

{{ yield }}

<script src="{{ '/assets/main.js' | path }}"></script>
</body>
</html>
```
<!-- AUTO-GENERATED-CONTENT:END -->

- `_`がつくファイルはナビゲーションに表示されない
- `{{ yield }}`: にコンポーネントが表示される

fractal.jsにpreviewの設定を追加する。

```js
fractal.components.set('default.preview', '@preview');
```

表示を確認

## Buttonを作る

### ファイルの準備

### コードを書く

### `variants` でパターン別コンポーネントをシュッとつくる
