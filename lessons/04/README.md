# 応用編

## Templateをつくる

Nunjucksの機能を使ってテンプレートを簡単に作れます。  
これを利用して、レイアウト別のテンプレートを用意しておくと便利です。


### ファイルの準備

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./components/templates/&depth=1) -->
```
templates/
├── _layout.njk
└── column-layout.njk
```
<!-- AUTO-GENERATED-CONTENT:END -->

### コード

extend, block の二つを使う。

**_layout.njk**

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/templates/_layout.njk) -->
<!-- The below code snippet is automatically added from ./components/templates/_layout.njk -->
```njk
<div class="wrapper">
  <div class="column-layout">
    <div class="main-column">
    {% block main %}
      main
    {% endblock %}
    </div>
    <div class="sub-column">
    {% block sub %}
      sub
    {% endblock %}
    </div>
  </div>
</div>
```
<!-- AUTO-GENERATED-CONTENT:END -->

**column-layout.njk**

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./components/templates/column-layout.njk) -->
<!-- The below code snippet is automatically added from ./components/templates/column-layout.njk -->
```njk
{% extends "@layout" %}

{% block main %}
Mainを上書き
{% endblock %}

{% block sub %}
subを上書き
{% endblock %}
```
<!-- AUTO-GENERATED-CONTENT:END -->

## config.ymlで読みこむコンポーネントを指定

### ファイルの準備

```
render/
├── render.config.yml
└── render.njk
```

### コード

**render.config.yml**

```yml
title: rendertest
context:
  contents:
    - component: button
      config:
        - text: buttttttton
    - component: form
```

**render.njk**

```njk
<section>
  {% for component in contents %}
    {% render "@" + component, config%}
  {% endfor %}
</section>
```