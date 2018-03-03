# Fractal hands-on

スタイルガイドツール "Fractal" のハンズオン資料です。

## Table of Contents

- [Fractalについて](#fractal%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
  - [特徴](#%E7%89%B9%E5%BE%B4)
- [プロジェクトの作成](#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90)

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
- とりあえずスタイルガイド作りたい

Fractal -> デザインシステム用のUIを別途構築 -> リリース

## Fractalをさわってみる

### Get started

1なくても動きます。
nodejs強い方は2から始めてください。

1. ツールをインストール: `npm install --save @frctl/fractal`
1. fractalで新しいプロジェクトを作成: `npx fractal new {{ your project name }}`
1. `cd {{ your project name }}`
1. `npx fractal start`

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./&depth=1) -->
```
fractal/
├── sample-project/
├── scripts/
├── markdown.config.js
├── package-lock.json
├── package.json
└── README.md
```
<!-- AUTO-GENERATED-CONTENT:END -->
