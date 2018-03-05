# コンポーネントの作成


## Buttonを作る


### ファイルの準備

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./components/button/&depth=1) -->
```
button/
├── button.config.yml
└── button.njk
```
<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./components/button/&depth=1) -->
<!-- AUTO-GENERATED-CONTENT:END -->

### コードを書く

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/button/button.njk) -->
<!-- The below code snippet is automatically added from ./components/button/button.njk -->
```njk
<button class="button{% if mod %} button--{{ mod }}{% endif %}">{{ text }}</button>
```
<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/button/button.njk) -->
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/button/button.config.yml) -->
<!-- The below code snippet is automatically added from ./components/button/button.config.yml -->
```yml
title: Button
collated: true
context:
    text: Button
    mod: false
variants:
    - name: Secondary
      context:
        text: secondary button
        mod: secondary
```
<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/button/button.config.yml) -->
<!-- AUTO-GENERATED-CONTENT:END -->

### `variants` でパターン別コンポーネントをシュッとつくる