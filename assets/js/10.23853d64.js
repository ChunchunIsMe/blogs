(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{339:function(t,a,s){"use strict";s.r(a);var n=s(9),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"canvas基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canvas基础","aria-hidden":"true"}},[t._v("#")]),t._v(" Canvas基础")]),t._v(" "),s("p",[t._v("canvas 看起来和 img 元素很相像，唯一的不同就是它并没有 src 和 alt 属性。实际上，canvas 标签只有两个属性—— width和height。")]),t._v(" "),s("p",[t._v("canvas 元素创造了一个固定大小的画布，canvas起初是空白的。为了展示，首先脚本需要找到渲染上下文，然后在它的上面绘制。你可以通过使用它的getContext() 方法来访问绘画上下文。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" canvas "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'tutorial'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctx "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getContext")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'2d'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 画图基础")]),t._v("\n")])])]),s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("h3",{attrs:{id:"xy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xy","aria-hidden":"true"}},[t._v("#")]),t._v(" xy")]),t._v(" "),s("p",[t._v("栅格的起点为左上角（坐标为（0,0））。所有元素的位置都相对于原点定位。\n"),s("img",{attrs:{src:"https://mdn.mozillademos.org/files/224/Canvas_default_grid.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"绘制形状"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绘制形状","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制形状")]),t._v(" "),s("h3",{attrs:{id:"_1-绘制矩形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-绘制矩形","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 绘制矩形")]),t._v(" "),s("p",[t._v("canvas只支持一种原生的图形绘制（马上显现在canvas上，即时生效）：矩形。所有其他的图形的绘制都至少需要生成一条路径。canvas提供了三种方法绘制矩形：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("fillRect(x, y, width, height)")]),t._v("\n绘制一个填充的矩形")]),t._v(" "),s("li",[s("code",[t._v("strokeRect(x, y, width, height)")]),t._v("\n绘制一个矩形的边框")]),t._v(" "),s("li",[s("code",[t._v("clearRect(x, y, width, height)")]),t._v("\n清除指定矩形区域，让清除部分完全透明。")])]),t._v(" "),s("blockquote",[s("p",[t._v("x与y指定了在canvas画布上所绘制的矩形的左上角（相对于原点）的坐标。width和height设置矩形的尺寸。")])]),t._v(" "),s("h3",{attrs:{id:"_2-绘制路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-绘制路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 绘制路径")]),t._v(" "),s("p",[t._v("路径绘制图形步骤：")]),t._v(" "),s("ul",[s("li",[t._v("首先，你需要创建路径起始点。")]),t._v(" "),s("li",[t._v("然后你使用画图命令去画出路径。")]),t._v(" "),s("li",[t._v("之后你把路径封闭。")]),t._v(" "),s("li",[t._v("一旦路径生成，你就能通过描边或填充路径区域来渲染图形。")])]),t._v(" "),s("p",[t._v("函数")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("beginPath()")]),t._v("，路径的第一步。\n新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。")]),t._v(" "),s("li",[s("code",[t._v("closePath()")]),t._v("，不是必需的。\n闭合路径。")]),t._v(" "),s("li",[s("code",[t._v("stroke()")]),t._v("，没有闭合的形状不会自动闭合。\n通过线条来绘制图形轮廓。")]),t._v(" "),s("li",[s("code",[t._v("fill()")]),t._v("，没有闭合的形状都会自动闭合。\n通过填充路径的内容区域生成实心的图形。")])]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ol",[s("li",[t._v("画矩形\n"),s("ul",[s("li",[t._v("fillRect")])])]),t._v(" "),s("li",[t._v("画路径\n"),s("ul",[s("li",[t._v("基础\n"),s("ul",[s("li",[t._v("beginPath()。常和moveTo（将笔触移动到指定的坐标x以及y上）搭配")]),t._v(" "),s("li",[t._v("closePath() 和开始路径形成闭合路径。")]),t._v(" "),s("li",[t._v("fill() 填充")]),t._v(" "),s("li",[t._v("stroke() 画线")])])]),t._v(" "),s("li",[t._v("画图形\n"),s("ul",[s("li",[t._v("arc(x, y, radius, startAngle, endAngle, anticlockwise)")]),t._v(" "),s("li",[t._v("lineTo(x, y) 绘制直线")])])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("画路径，一定是遇到stroke/fill方法，才开始绘制。")])]),t._v(" "),s("blockquote",[s("p",[t._v("生成闭合路径（如三角形边框），需要closePath + stroke()组合。当然，如果你本身是不需要闭合的图形，则直接使用stroke即可。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctx "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getContext")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'2d'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("beginPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("moveTo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("75")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("50")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("lineTo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("75")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("lineTo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("25")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("fill")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"样式和颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式和颜色","aria-hidden":"true"}},[t._v("#")]),t._v(" 样式和颜色")]),t._v(" "),s("ul",[s("li",[t._v("颜色\n"),s("ul",[s("li",[s("code",[t._v("fillStyle")])]),t._v(" "),s("li",[s("code",[t._v("strokeStyle")])])])]),t._v(" "),s("li",[t._v("样式\n"),s("ul",[s("li",[s("code",[t._v("globalAlpha")])]),t._v(" "),s("li",[s("code",[t._v("lineWidth")])]),t._v(" "),s("li",[s("code",[t._v("globalCompositeOperation")]),t._v(" 遮盖策略")])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 这些 fillStyle 的值均为 '橙色'")]),t._v("\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"orange"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"#FFA500"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"rgb(255,165,0)"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"rgba(255,165,0,1)"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 设置透明度值")]),t._v("\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalAlpha "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0.2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 当前绘线的粗细")]),t._v("\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lineWidth "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 设置遮盖策略：交集清除")]),t._v("\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalCompositeOperation "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'destination-out'")]),t._v("\n")])])]),s("h2",{attrs:{id:"绘制元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绘制元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制元素")]),t._v(" "),s("ol",[s("li",[t._v("图片\n"),s("ul",[s("li",[s("code",[t._v("drawImage(imageOrCanvas, x, y)")]),t._v("。image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。")])])]),t._v(" "),s("li",[t._v("文本\n"),s("ul",[s("li",[s("code",[t._v("fillText(text, x, y [, maxWidth])")]),t._v("\n在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.")]),t._v(" "),s("li",[s("code",[t._v("strokeText(text, x, y [, maxWidth])")]),t._v("\n在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.")])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Image")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'images/backdrop.png'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("drawImage")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"48px serif"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("fillText")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Hello world"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("50")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);e.options.__file="canvas-base.md";a.default=e.exports}}]);