(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{178:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("ul",[e("li",[t._v("HtmlWebpackPlugin")]),t._v(" "),e("li",[t._v("ExtractTextWebpackPlugin 拆分css样式的插件(webapck4已废弃)。由于webpack4以后对css模块支持的逐步完善和commonchunk插件的移除，在处理css文件提取的计算方式上也做了些调整，之前我们首选使用的extract-text-webpack-plugin也完成了其历史使命，将让位于"),e("a",{attrs:{href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("mini-css-extract-plugin"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("module.exports = {\n    mode: 'development',     // 模式配置,4.0新增\n    entry: '',               // 入口文件\n    output: {},              // 出口文件\n    plugins: [],             // 对应的插件\n    devServer: {}            // 开发服务器配置\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader","aria-hidden":"true"}},[this._v("#")]),this._v(" Loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css","aria-hidden":"true"}},[this._v("#")]),this._v(" css")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("style-loader")]),this._v(" "),s("li",[this._v("css-loader")]),this._v(" "),s("li",[this._v("postcss-loader")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"webpack插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack插件","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级","aria-hidden":"true"}},[this._v("#")]),this._v(" 升级")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("安装webpack")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install --save-dev webpack webpack-cli\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("0配置\n默认的入口为'./src/'和默认出口'./dist'；\n对压缩(optimization.minimize)的设置，默认在production时开启，在development时关闭。")]),t._v(" "),e("li",[t._v("移除loaders，必须使用rules")]),t._v(" "),e("li",[t._v("使用mode/–mode\n"),e("ul",[e("li",[t._v("production\n"),e("ul",[e("li",[t._v("开启所有的优化代码")]),t._v(" "),e("li",[t._v("更小的bundle大小")]),t._v(" "),e("li",[t._v("去除掉只在开发阶段运行的代码")]),t._v(" "),e("li",[t._v("Scope hoisting和Tree-shaking")])])])])]),t._v(" "),e("li",[t._v("使用CommonsChunkPlugin替换为optimization.splitChunks\n"),e("ul",[e("li",[t._v("NoEmitOnErrorsPlugin 废弃，使用optimization.noEmitOnErrors替代，在生产环境中默认开启该插件。")]),t._v(" "),e("li",[t._v("ModuleConcatenationPlugin 废弃，使用optimization.concatenateModules替代，在生产环境默认开启该插件。")]),t._v(" "),e("li",[t._v("NamedModulesPlugin 废弃，使用optimization.namedModules替代，在生产环境默认开启。")]),t._v(" "),e("li",[t._v("uglifyjs-webpack-plugin升级到了v1.0版本, 默认开启缓存和并行功能。")])])]),t._v(" "),e("li",[t._v("支持ES6的方式导入JSON文件，并且可以过滤无用的代码")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" jsonData "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("require")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'./data.json'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" jsonData "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'./data.json'")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" first "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'./data.json'")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="Webpack4 配置.md";s.default=n.exports}}]);