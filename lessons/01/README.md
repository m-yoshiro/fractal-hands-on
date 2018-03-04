# Fractalをさわってみる

- sample.config.yml: コンポーネントの設定
- sample.hbs: htmlを書くファイル。config.ymlの値を参照できる。

hbsは

hbsよりnunjucksの使用をおすすめします。

## sampleコンポーネントをいじる

1. hbsをいじる。config.ymlのtextをいじる
1. 表示を確認する

## sampleコンポーネントをbuttonに変更してみる

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./components) -->
```
components/
├─┬ button/
│ ├── button.config.yml
│ └── button.hbs
└─┬ example/
  ├── example.config.yml
  └── example.hbs
```
<!-- AUTO-GENERATED-CONTENT:END -->

#### buttonに変更してみる

1. sampleをコピペ
1. ディレクトリ名・配下のファイル名を `sample -> button` に変更

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/button/button.hbs) -->
<!-- The below code snippet is automatically added from ./components/button/button.hbs -->
```hbs
<p>{{ text }}</p>
```
<!-- AUTO-GENERATED-CONTENT:END -->