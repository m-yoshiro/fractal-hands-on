# Fractalの設定

fractal.jsを編集し、プロジェクトの設定を行います。

## fractal.jsの内容を確認する

`fractal new` fractal.jsが生成されます。中身は以下の通り。


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

- `fractal.set()`: プロジェクト情報の設定 
- `fractal.components.set()`: コンポーネントの設定
- `fractal.docs.set()`: ドキュメントの設定
- `fractal.web.set()`: スタイルガイドのUIに対する設定

[🔗 詳しくはドキュメント](https://fractal.build/guide/project-settings)

## 設定を変更する

css,jsを反映させるには、いくつか作業が必要です。
また、htmlのテンプレートエンジンはNunjucksがおススメです。

この設定を行なっていきます。

### テンプレートエンジンを変更する

上でオススメした、nunjucksに変更します。  
fractalの提供するプラグインをインストールします。

https://github.com/frctl/nunjucks

1. インストール
    ```sh
    npm i @frctl/nunjucks --save
    ```
1. fractal.jsに追加
    ```js
    fractal.components.engine('@frctl/nunjucks'); // テンプレートエンジンにnunjucksをセット
    fractal.components.set('ext', '.njk'); // 拡張子を変更する
    ```
1. components配下の`.hbs`ファイルを`.njk`に変更する


表示を確認しましょう。

### cssやjsを読み込む

デフォルトでは、cssやjsを参照でません。  
ドキュメントの [Preview layouts](https://fractal.build/guide/components/preview-layouts) でも記載の通り、そもそもHTMLマークアップもない裸の状態です。  
これは自前で用意する必要があり、**preview layouts** という設定が用意されています。


#### preview layouts の用意

1. `/components/_partials/_preview.njk` を以下内容で作成
    ```njk
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="{{ '/main.css' | path }}">
        <title>Preview</title>
    </head>
    <body>

    {{ yield }}

    <script src="{{ '/main.js' | path }}"></script>
    </body>
    </html>
    ```

1. fractal.jsにpreviewの設定を追加する。
    ```js
    fractal.components.set('default.preview', '@preview');
    ```

1. ブラウザの開発者ツールでタグの挿入を確認

はい、まだファイル参照できてないはずです。

#### Assetsファイルのディレクトリを用意する

最後です。ファイルを参照するためには、`static.path`にディレクトリを指定する必要があります。  

1. static.pathを指定する
    ```js
    fractal.web.set('static.path', path.join(__dirname, 'assets'));
    ```
1. 上で指定したディレクトリにcss, jsを追加
1. プラウザチェック！

---

- 次のレッスン: [Lesson03: コンポーネントの作成](../03/)