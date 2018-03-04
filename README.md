# Fractal hands-on

スタイルガイドツール "Fractal" のハンズオン資料です。

## Table of Contents

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Fractalについて](#fractal%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
  * [特徴](#%E7%89%B9%E5%BE%B4)
  * [使い所](#%E4%BD%BF%E3%81%84%E6%89%80)
- [Get started](#get-started)
  * [ディレクトリ構造](#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E9%80%A0)
- [Lessons](#lessons)
<!-- AUTO-GENERATED-CONTENT:END -->

## Fractalについて

Fractal はnodejs製のスタイルガイドツールです。

🔗 https://fractal.build/

### 特徴

**🌞 Pros**

- スピーディーに作業できる
- 設定も（比較的）簡単！
- スタイルガイド内でコンポーネントを使いまわせる
- プロダクトとの依存関係を最小化できる
- すぐ導入できる・すぐ捨てれる

**☁ Cons**

- UIのデザイン変更が難しい
- UIの拡張は基本できない。
	- 配布されてるthemaプラグインをfolkすればできそう？
- **デザインシステム** として社外公開するには非力

### 使い所

- 開発初期のスタイルガイド作成
- 既存プロダクトのスタイルガイド作成
- とりあえずスタイルガイド作## Fractalをさわってみる

Fractal -> デザインシステム用のUIを別途構築 -> リリース

## Get started

fractalのコマンドを使う方法。  
グローバルにfractalをインストールしても良いのですが、
使い切りで良いのでnpxコマンド使います。

1. `npx @frctl/fractal new {{ your Project name }}`
1. `cd {{ Your project name }}`
1. `node_modules/.bin/@frctl/fractal/fractal start --sync`
1. http://localhost:3000 を開く


💡 **npx コマンドについて**

TODO: 書く


### ディレクトリ構造

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./sample-project/&depth=1) -->
```
sample-project/
├── assets/
├── components/
├── docs/
├── public/
├── fractal.js
├── package-lock.json
└── package.json
```
<!-- AUTO-GENERATED-CONTENT:END -->

- fractal.js: fractalの設定ファイル
- components/: htmlやcssなどコンポーネント管理
- docs/: ドキュメント
- public/: 公開ファイルのbuild先

## Lessons

- [lesson1](./lessons/01/README.md)
- [lesson2](./lessons/02/README.md)

