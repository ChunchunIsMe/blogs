(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{336:function(t,s,n){"use strict";n.r(s);var a=n(9),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vue2-x源码分析-virtual-dom实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x源码分析-virtual-dom实现","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue2.x源码分析 - Virtual DOM实现")]),t._v(" "),n("p",[t._v("Vue Virtual DOM实现是基于snabbdom库改造的，所以理解snabbdom源码有助于我们更好的看懂Vue源码（实际上Vue源码中有非常多相似的地方，比如diff算法、hooks应用等）。snabbdom源码更纯粹，也更容易理解，具体可以看笔者另外一篇文章："),n("router-link",{attrs:{to:"/vue/vue-code-2.snabbdom.html"}},[t._v("虚拟dom算法库 - snabbdom")]),t._v("。以下我们对比看下Virtual DOM在Vue源码中的应用。")],1),t._v(" "),n("h2",{attrs:{id:"基本数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本数据结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本数据结构")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("VNode "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tag"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 标签tag")]),t._v("\n  data"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VNodeData "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 数据，包括事件监听、class、style等")]),t._v("\n  children"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("Array"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("VNode"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 子VNodes")]),t._v("\n  text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 文本")]),t._v("\n  elm"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Node "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// VNode对应的真实DOM")]),t._v("\n  ns"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" number "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 唯一key")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 组件")]),t._v("\n  context"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// rendered in this component's scope")]),t._v("\n  functionalContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// only for functional component root nodes")]),t._v("\n  componentOptions"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VNodeComponentOptions "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  componentInstance"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// component instance")]),t._v("\n\n  parent"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VNode "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// component placeholder node")]),t._v("\n  raw"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// contains raw HTML? (server only)")]),t._v("\n  isStatic"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 标记为静态")]),t._v("\n  isRootInsert"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// necessary for enter transition check")]),t._v("\n  isComment"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// empty comment placeholder?")]),t._v("\n  isCloned"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// is a cloned node?")]),t._v("\n  isOnce"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// is a v-once node?")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("VNodeData "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  key"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" number"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  slot"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ref"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  is"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  pre"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  tag"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  staticClass"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  staticStyle"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  style"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Object"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  normalizedStyle"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  props"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  attrs"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  domProps"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  hook"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  on"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Array"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Function"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  nativeOn"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Array"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Function"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  transition"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  show"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// marker for v-show")]),t._v("\n  inlineTemplate"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    render"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    staticRenderFns"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Function"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  directives"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("VNodeDirective"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  keepAlive"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  scopedSlots"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  model"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    value"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    callback"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"源码笔记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#源码笔记","aria-hidden":"true"}},[t._v("#")]),t._v(" 源码笔记")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("src/core/vdom/vnode.js")]),t._v(": 对应snabbdom/vnode.ts源码")]),t._v(" "),n("ul",[n("li",[t._v("定义VNode数据结构，并有创建VNode实例基础方法。")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("src/core/vdom/create-element.js")]),t._v(": 对应snabbdom/h.ts")]),t._v(" "),n("ul",[n("li",[t._v("应用层新建一个VNode实例，包含一些数据预处理。")]),t._v(" "),n("li",[t._v("vue在snabbdom基础上，增加了Component System。")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 应用层说明")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("createElement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// {String | Object | Function}")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'div'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// {Object}")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 一个与模板中属性对应的数据对象。可选。")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// (详情见下面)")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// {String | Array}")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 也可以使用字符串来生成“文本虚拟节点”。可选。")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'先写一些文字'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("createElement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'h1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'一则头条'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("createElement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      props"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        someProp"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'foobar'")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 源码解释")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("createElement")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  context"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tag"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  normalizationType"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  alwaysNormalize"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VNode "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Array"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("VNode"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// data可省略，会判断参数类型，data非object会被认为省略")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("isArray")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isPrimitive")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    normalizationType "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" children\n    children "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data\n    data "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" undefined\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("isTrue")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alwaysNormalize"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    normalizationType "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ALWAYS_NORMALIZE")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_createElement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" normalizationType"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("platforms/web/runtime/node-ops.js")]),t._v(": 对应snabbdom/htmldomapi.ts源码")]),t._v(" "),n("ul",[n("li",[t._v("封装DOM API")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("src/core/vdom/patch.js")]),t._v(": 对应snabbdom/snabbdom.ts")]),t._v(" "),n("ul",[n("li",[t._v("vdom diff核心内容。diff算法与snabbdom大同小异")]),t._v(" "),n("li",[t._v("vue patch.js里面的createPatchFunction方法，等同于snabbdom.ts的init方法，会默认注入一些模块。")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("platforms/web/runtime/modules文件夹")]),t._v(": 对应snabbdom/modules文件夹")]),t._v(" "),n("ul",[n("li",[t._v("注入默认模块，在dom合适的时间调用这些模块的hook")]),t._v(" "),n("li",[n("code",[t._v("attrs.js")]),t._v(": 根据"),n("code",[t._v("VNode.data.attrs")]),t._v("值。设置html的属性，能反应到html元素上")]),t._v(" "),n("li",[n("code",[t._v("dom-props.js")]),t._v(" 根据"),n("code",[t._v("VNode.data.domProps")]),t._v("值。设置dom的属性")]),t._v(" "),n("li",[n("code",[t._v("class.js")]),t._v(": 根据"),n("code",[t._v("VNode.data.class")]),t._v("值。 设置html className。"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/class-and-style.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue官方API"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("code",[t._v("style.js")]),t._v(": 根据"),n("code",[t._v("VNode.data.style")]),t._v("值。设置html style。"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/class-and-style.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue官方API"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("code",[t._v("event.js")]),t._v(": 根据"),n("code",[t._v("VNode.data.on")]),t._v("值。设置html event事件。"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/events.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue官方API"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("code",[t._v("src/core/vdom/modules/directives.js")]),t._v(" 根据"),n("code",[t._v("VNode.data.directives")]),t._v("值。绑定指令（指令hook如bind、update回调应用也在这）。"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/custom-directive.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue官方API"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("code",[t._v("src/core/vdom/modules/ref.js")]),t._v(" 根据"),n("code",[t._v("VNode.data.ref/refInFor")]),t._v("值。注册ref，使得通过vm.$refs[key]能拿到VNode.elm(VNode一般不会暴露给外面)")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 与 `v-bind:class` 的 API 相同，")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 接受一个字符串、对象或字符串和对象组成的数组")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'class'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 与 `v-bind:style` 的 API 相同，")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 接受一个字符串、对象，或对象组成的数组")]),t._v("\n  style"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    color"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'red'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fontSize"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'14px'")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 普通的 HTML 特性")]),t._v("\n  attrs"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'foo'")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 组件 prop")]),t._v("\n  props"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    myProp"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'bar'")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// DOM 属性")]),t._v("\n  domProps"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    innerHTML"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'baz'")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 事件监听器在 `on` 属性内，")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 但不再支持如 `v-on:keyup.enter` 这样的修饰器。")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 需要在处理函数中手动检查 keyCode。")]),t._v("\n  on"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    click"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clickHandler\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 仅用于组件，用于监听原生事件，而不是组件内部使用")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// `vm.$emit` 触发的事件。")]),t._v("\n  nativeOn"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    click"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativeClickHandler\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 自定义指令。注意，你无法对 `binding` 中的 `oldValue`")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 赋值，因为 Vue 已经自动为你进行了同步。")]),t._v("\n  directives"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'my-custom-directive'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      value"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'2'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      expression"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'1 + 1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      arg"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'foo'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      modifiers"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 作用域插槽的格式为")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// { name: props => VNode | Array<VNode> }")]),t._v("\n  scopedSlots"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" props "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("createElement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'span'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果组件是其它组件的子组件，需为插槽指定名称")]),t._v("\n  slot"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'name-of-slot'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 其它特殊顶层属性")]),t._v("\n  key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'myKey'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ref"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'myRef'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果你在渲染函数中给多个元素都应用了相同的 ref 名，")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 那么 `$refs.myRef` 会变成一个数组。")]),t._v("\n  refInFor"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])},[],!1,null,null,null);o.options.__file="vue-code-3.vdom.md";s.default=o.exports}}]);