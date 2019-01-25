(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{212:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("PostCSS 本身是一个功能比较单一的工具。它提供了一种方式用 JavaScript 代码来处理 CSS。它负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由插件来进行处理。PostCSS 的强大之处在于其不断发展的插件体系。")]),t._v(" "),n("p",[t._v("开发者一个常见的误解是，PostCSS是另一个像SASS和LESS的预处理器。相信很多人使用PostCSS插件，会把注意力放到模仿其它预处理特性上，如变量，条件语句，循环和混入。随着PostCSS的发展，许多其他功能的插件被开发出来，有许多完全和传统的预处理器不同的新特性被引入。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer"}},[t._v("autoprefixer"),n("OutboundLink")],1),t._v(" 给css加前缀")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/jonathantneal/precss",target:"_blank",rel:"noopener noreferrer"}},[t._v("precss"),n("OutboundLink")],1),t._v(" 提供类似sass语法，告别sass包")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/MoOx/postcss-cssnext",target:"_blank",rel:"noopener noreferrer"}},[t._v("cssnext"),n("OutboundLink")],1),t._v(" 将未来CSS特性编译为现今支持的特性")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/songsiqi/px2rem-postcss",target:"_blank",rel:"noopener noreferrer"}},[t._v("px2rem-postcss"),n("OutboundLink")],1),t._v(" 将px转为rem工具。"),n("code",[t._v("移动端强烈推荐")])])]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("如下例子，webpack配置了precss和autoprefixer插件：")]),t._v(" "),t._m(5),t._m(6),t._v(" "),n("p",[t._v("如果你对PostCSS的各种特性很感兴趣，但又不想放弃熟练使用的Sass。不用担心，你可以完全把Sass与PostCSS结合使用.")]),t._v(" "),t._m(7)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"postcss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postcss","aria-hidden":"true"}},[this._v("#")]),this._v(" PostCSS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 概念")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("你可以把PostCSS，当成像SASS和LESS这样的预处理器使用，你也可以用一些像SASS,LESS的扩展，来升级你的工具集。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"常用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"webpack配置postcss插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack配置postcss插件","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack配置PostCSS插件")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// Wepack 4.x in webpack.config.js")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),n("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                use"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'style-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'css-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'postcss-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// postcss.config.js")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v('"precss"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v('"autoprefixer"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 或者")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                use"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),n("span",{attrs:{class:"token string"}},[t._v("'style-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{attrs:{class:"token string"}},[t._v("'css-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        loader"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'postcss-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        options"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            ident"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'postcss'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                                "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'precss'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'autoprefixer'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                            "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"与sass配合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与sass配合","aria-hidden":"true"}},[this._v("#")]),this._v(" 与Sass配合")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("安装LibSass：npm install node-sass --save-dev")]),this._v(" "),s("li",[this._v("在配置文件中先对.scss文件进行处理后再用PostCSS进行处理")])])}],!1,null,null,null);e.options.__file="PostCSS.md";s.default=e.exports}}]);