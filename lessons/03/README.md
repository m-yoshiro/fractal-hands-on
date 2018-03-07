# コンポーネントの作成


## Buttonを作る


### ファイルの準備

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./components/button/&depth=1) -->
```
button/
├── button.config.yml
└── button.njk
```
<!-- AUTO-GENERATED-CONTENT:END -->

### コードを書く

njk, configファイルに次をコピペ。


**button.config.yml**

```yml
title: Button
context:
    text: Button
    mod: false
```

**button.njk**


<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/button/button.njk) -->
<!-- The below code snippet is automatically added from ./components/button/button.njk -->
```njk
<button class="button{% if mod %} button--{{ mod }}{% endif %}">{{ text }}</button>
```
<!-- AUTO-GENERATED-CONTENT:END -->

`{% if mod %} ... {% endif %}`: nunjucksのif文。fractalの場合、config.ymlの **context** 配下の値を条件にできる。  


### 複数パターンをシュッとつくる

**variants** というfractalの機能を使います。
モディファイアのサンプル作成に便利です。

次のconfig.ymlをコピペして表示結果をご覧ください

**button.config.yml**

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
    - name: Secondary
      context:
        text: warning button
        mod: warning
```
<!-- AUTO-GENERATED-CONTENT:END -->

variantsで指定した数だけ、パターンを生成します。  
各配下にも context が存在し、ここで値を上書きできます。

### コンポーネントを別ファイルから参照する

コンポーネントを使いまわします。方法は2種類。
hands-onではrenderのみ使います。

- `{% include "@{{ component名 }}" %}`: Nunjucksにもともとある機能
- `{% render "@{{ component名 }}" %}`: fractalが独自実装した機能

新たにコンポーネントを作成。

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./components/form/&depth=1) -->
```
form/
├── form.config.yml
└── form.njk
```
<!-- AUTO-GENERATED-CONTENT:END -->

**form.config.yml**
<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/form/form.config.yml) -->
<!-- The below code snippet is automatically added from ./components/form/form.config.yml -->
```yml
title: Form
context:
  button:
    text: Form button
    mod: secondary
  buttons:
    - text: Form button
      mod: secondary
    - text: Form button
      mod: secondary
    - text: Form button
      mod: secondary
    - text: Form button
      mod: secondary
    - text: Form button
      mod: secondary
    - text: Form button
      mod: secondary
```
<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/form/form.config.yml) -->
<!-- AUTO-GENERATED-CONTENT:END -->

**form.njk**
<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/form/form.njk) -->
<!-- The below code snippet is automatically added from ./components/form/form.njk -->
```njk
<form action="">
  <input type="text">
  {% render "@button" %}

  {# variantsを直接指定 #}
  {% render "@button--warning" %}

  {# form.config.ymlの値を挿入する #}
  {% render "@button", button %}

  {# ループもできる #}
  {% for button in buttons %}
    {% render "@button", button %}
  {% endfor %}

</form>
```
<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/form/form.njk) -->
<!-- AUTO-GENERATED-CONTENT:END -->

---

- 次のレッスン: [Lesson04: 応用編](../04/)