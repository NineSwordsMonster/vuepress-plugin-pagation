# @nines/vuepress-plugin-pagation
![GitHub last commit](https://img.shields.io/github/last-commit/NineSwordsMonster/vuepress-plugin-pagation)

![NPM](https://img.shields.io/npm/l/@nines/vuepress-plugin-pagation)
![npm (scoped)](https://img.shields.io/npm/v/@nines/vuepress-plugin-pagation)
![npm](https://img.shields.io/npm/dt/@nines/vuepress-plugin-pagation)

> Pagation plugin for vuepress

## 使用

|使用位置|值|
|-|-|
|plugin name|@nines/vuepress-plugin-pagationa|
|component name|Pagation（主题开发时使用）|

```sh
npm install @nines/vuepress-plugin-pagationa
```

## 参数

|name|类型|默认值|
|----|----|----|
|total|number|10|
|perPage|number|10|
|currentPage|number|1|
|getCurrentPage|function|参数 currentPage: 当前页码|

```vue
<Pagation :total="22", :perPage="20" :currentPage="1" @getCurrentPage="get"></Pagation>
```