# vue-toc [![Build Status](https://travis-ci.org/isy/vue-toc.svg?branch=master)](https://travis-ci.org/isy/vue-toc)
> Vue.js component that automatically generates a table of contents.

## Install
`$ npm install vue-toc`

Register the component
```
import Vue from 'vue'
import VueToc from 'vue-toc'

Vue.component('vue-toc', VueToc)
```

## Options

|key|description|default|val|
|:---|---|---|---|
|`target`|Specify the location of the heading|`none`|`String`|
|`h2Class`|Specify css class in table of contents(h2)|`toc-2`|`String`|
|`h3Class`|Specify css class in table of contents(h3)|`toc-3`|`String`|
