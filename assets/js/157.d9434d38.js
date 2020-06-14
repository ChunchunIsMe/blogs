(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{664:function(e,v,_){"use strict";_.r(v);var i=_(9),t=Object(i.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h3",{attrs:{id:"小程序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小程序"}},[e._v("#")]),e._v(" 小程序")]),e._v(" "),_("p",[e._v("互联网生态演进：超级 APP + 小程序成为「轻应用时代」下的新生态。")]),e._v(" "),_("ul",[_("li",[e._v("双线程原因：对小程序的架构设计时的要求只有一个，就是要"),_("code",[e._v("快")]),e._v("，包括要渲染快、加载快等。\n"),_("ul",[_("li",[e._v("native方案不可能，要随wechat发版")]),e._v(" "),_("li",[e._v("web方案不可能，ui渲染和js都在单线程中执行，容易逻辑任务抢占UI渲染资源。")]),e._v(" "),_("li",[e._v("以前Hybrid方案不可能：1. Hybrid都是浏览器内核渲染，逻辑与渲染混合在一起，慢。2. RN渲染底层使用原生渲染，坑多，不推荐。")])])]),e._v(" "),_("li",[e._v("小程序方案：小程序是基于"),_("code",[e._v("双线程模型")]),e._v("的（变种的Hybrid方案），在这个模型中，小程序的逻辑层与渲染层分开在不同的线程运行，这跟传统的Web 单线程模型有很大的不同，使得小程序架构上多了一些复杂度，也多了一些限制。\n"),_("ul",[_("li",[e._v("安全。ui和渲染隔离，使得不能通过js去获取ui的数据")]),e._v(" "),_("li",[e._v("同时也能防止js跳转一些web页面")])])]),e._v(" "),_("li",[e._v("双线程模型\n"),_("ul",[_("li",[e._v("客户端系统有JavaScript 的解释引擎（在iOS下是用内置的 JavaScriptCore框架，在安卓则是用腾讯x5内核提供的JsCore环境），我们可以创建一个单独的线程去执行 JavaScript，在这个环境下执行的都是有关小程序业务逻辑的代码，也就是我们前面一直提到的逻辑层。而界面渲染相关的任务全都在WebView线程里执行，通过逻辑层代码去控制渲染哪些界面，那么这一层当然就是所谓的渲染层。这就是小程序双线程模型的由来。")])])]),e._v(" "),_("li",[e._v("双线程影响\n"),_("ul",[_("li",[_("code",[e._v("每个小程序页面都是用不同的WebView去渲染")]),e._v("（所以最多不能超过6页）\n"),_("ul",[_("li",[e._v("提供更好的交互体验，更贴近原生体验，避免单个webview任务过重。")])])]),e._v(" "),_("li",[e._v("天生的延时")])])])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://zhaomenghuan.js.org/assets/img/wechat-miniprogram-framework.ad156d1c.png",alt:""}})]),e._v(" "),_("p",[_("img",{attrs:{src:"https://zhaomenghuan.js.org/assets/img/weapp-architecture.7e7b2004.png",alt:""}})]),e._v(" "),_("h2",{attrs:{id:""}},[_("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" "),_("img",{attrs:{src:"https://zhaomenghuan.js.org/assets/img/lifecycle.45dd5c41.png",alt:""}})]),e._v(" "),_("p",[e._v("小程序以离线包方式下载到本地，通过微信客户端载入和启动，开发规范简洁，技术封装彻底，自成开发体系，有 Native 和 H5 的影子，但又绝不雷同。小程序本身定位为一个简单的逻辑视图层框架。")]),e._v(" "),_("ol",[_("li",[e._v("原理：\n"),_("ul",[_("li",[e._v("小程序本质就是一个"),_("code",[e._v("单页面应用")]),e._v("，所有的页面渲染和事件处理，都在一个页面内进行，但又可以通过微信客户端调用原生的各种接口；")]),e._v(" "),_("li",[e._v("它的架构，是"),_("code",[e._v("数据驱动的架构模式")]),e._v("，它的UI和数据是分离的，所有的页面更新，都需要通过对数据的更改来实现；")]),e._v(" "),_("li",[_("code",[e._v("功能可分为webview和appService两个部分")]),e._v("；\nwebview用来展现UI，appService有来处理业务逻辑、数据及接口调用；\n两个部分在两个进程中运行，通过系统层JSBridge实现通信，实现UI的渲染、事件的处理等。(this.data的属性是不可以同步到视图的，必须调用this.setData()方法)")])])]),e._v(" "),_("li",[e._v("生命周期函数：\n"),_("ul",[_("li",[e._v("onLoad() 页面加载时触发，只会调用一次，可获取当前页面路径中的参数。")]),e._v(" "),_("li",[e._v("onShow() 页面显示/切入前台时触发，一般用来发送数据请求；")]),e._v(" "),_("li",[e._v("onReady() 页面初次渲染完成时触发, 只会调用一次，代表页面已可和视图层进行交互。")]),e._v(" "),_("li",[e._v("onHide() 页面隐藏/切入后台时触发, 如底部 tab 切换到其他页面或小程序切入后台等。")]),e._v(" "),_("li",[e._v("onUnload() 页面卸载时触发，如redirectTo或navigateBack到其他页面时。")])])]),e._v(" "),_("li",[_("code",[e._v("bind事件")]),e._v("绑定"),_("code",[e._v("不会阻止冒泡")]),e._v("事件向上冒泡，"),_("code",[e._v("catch事件")]),e._v("绑定可以"),_("code",[e._v("阻止")]),e._v("冒泡事件向上冒泡。")]),e._v(" "),_("li",[_("code",[e._v("mpvue")]),e._v(" 修改了 Vue.js 的 "),_("code",[e._v("运行时框架 runtime")]),e._v(" 和"),_("code",[e._v("代码编译器 compiler")]),e._v(" 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 Vue.js 开发体验。\n"),_("ul",[_("li",[_("code",[e._v("生命周期和数据同步")]),e._v("。在 Vue.js 触发数据更新时实现数据同步。数据更新发端于小程序，处理自 Vue.js，Vue.js 数据变更后再同步到小程序。")]),e._v(" "),_("li",[_("code",[e._v("事件代理机制")]),e._v("。小程序组件节点上触发事件后，只要找到虚拟 DOM 上对应的节点，触发对应的事件。另一方面，Vue.js 事件响应如果触发了数据更新，其生命周期函数更新将自动触发，在此函数上同步更新小程序数据，数据同步也就实现了。")])])])]),e._v(" "),_("ul",[_("li",[_("p",[e._v("https://developers.weixin.qq.com/ebook?action=get_post_info&docid=0006a2289c8bb0bb0086ee8c056c0a")])]),e._v(" "),_("li",[_("p",[e._v("https://zhaomenghuan.js.org/blog/wechat-miniprogram-principle-analysis.html")])])]),e._v(" "),_("h3",{attrs:{id:"electron"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#electron"}},[e._v("#")]),e._v(" Electron")]),e._v(" "),_("p",[e._v("官网里这么说："),_("code",[e._v("electron 提供了一个 Nodejs 的运行时，专注于构建桌面应用，同时使用 web 页面来作为应用的 GUI")]),e._v("。你可以将其看作是一个由 JavaScript 控制的迷你版的 Chromium 浏览器。")]),e._v(" "),_("p",[e._v("翻译一下：它是一个运行时，可以像 Node 一样这样执行：electron app.js；也是一个使用 html + css + JavaScript 构建跨平台原生桌面应用的框架。本质上，electron 就是一个带了 Chrome 浏览器的壳子（无需考虑兼容性的问题）。")]),e._v(" "),_("p",[e._v("electron 用 web 页面作为它的 GUI，而不是绑定了 GUI 库的 JavaScript。它结合了 Chromium、Node.js 和用于调用操作系统本地功能的 APIs（如打开文件窗口、通知、图标等）。")]),e._v(" "),_("p",[_("code",[e._v("具有两个进程，分别是主进程，以及渲染进程")]),e._v("。")])])}),[],!1,null,null,null);v.default=t.exports}}]);