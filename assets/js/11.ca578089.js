(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{279:function(e,t,s){"use strict";s.r(t);var a=s(38),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"使用-vuepress-搭建博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-vuepress-搭建博客","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 VuePress 搭建博客")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("前排提醒:")]),e._v(" 你也许需要一定的前端基础（非传统前端）才能读懂此篇文章的内容。")])]),e._v(" "),s("p",[e._v("我认为 Vue 的生态是有够好的了——有 Router，有 Vuex，还有更多，都是非常有用处的。其中就包含 VuePress，原本是尤雨溪先生用来提高写文档效率而写的一个小作品，现在被发展后可以用作电子书/教程编写和博客的编写。本篇文章介绍的是后者，实际上两者是相通的。")]),e._v(" "),s("h2",{attrs:{id:"流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流程","aria-hidden":"true"}},[e._v("#")]),e._v(" 流程")]),e._v(" "),s("p",[e._v("VuePress 与其它静态博客软件的发布流程基本一样——写完文章后 "),s("code",[e._v("build")]),e._v(" 成为静态文件。所以如果是 Hexo 或者 Hugo 用户看到这篇文章中的流程也许会感觉很熟悉，不过这里还是提到一下。")]),e._v(" "),s("p",[e._v("也正因为是静态文件，所以可以使用 GitHub 托管——当然也可以使用你自己的主机，仅需将网站根目录设置为 "),s("code",[e._v("build")]),e._v(" 产生的静态文件的目录即可。这会在下文中提到。")]),e._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),s("p",[e._v("首先选择一个你想要用来作为博客源代码放置之处的文件夹，"),s("strong",[e._v("下文中如果没有特殊声明，所有的文件、目录均指创建在此文件夹里")]),e._v("。")]),e._v(" "),s("p",[e._v("通过 npm 和 yarn 均可安装。本文主要使用 npm。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -D vuepress\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 或者 yarn add -D vuepress")]),e._v("\n")])])]),s("p",[e._v("需要注意的一点是，这种方式是以本地依赖（dependencies）的形式安装 VuePress，它会在当前目录生成一个 "),s("code",[e._v("node_modules")]),e._v(" 文件夹并自动安装 JavaScript、Vue 等所需要的依赖。")]),e._v(" "),s("p",[e._v("在本文后面出现的指令均无法以 "),s("code",[e._v("vuepress")]),e._v(" 开头，因为 VuePress 没有被全局安装。")]),e._v(" "),s("p",[e._v("安装完成之后，就可以开始搭建了。")]),e._v(" "),s("h2",{attrs:{id:"搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建","aria-hidden":"true"}},[e._v("#")]),e._v(" 搭建")]),e._v(" "),s("p",[e._v("个人还是建议将你的博客的源代码托管到 GitHub 上，哪怕私有也好。当然，你也可以选择部署到自己的 Git 服务器上。这样做就有这些好处")]),e._v(" "),s("ol",[s("li",[e._v("一个算是比较简单的双重备份吧，当你的数据消失后，可以通过 Git Log 找到；")]),e._v(" "),s("li",[e._v("一些插件需要通过 Git 的提交日志获得你提交某篇文章的具体时刻，然后才能够显示日期或者 XX ago。")])]),e._v(" "),s("p",[e._v("那么首先我们创建一个专门放置「文章」的目录（区分于「独立页面」，这样做可以避免混淆），名称可以自取，例如 "),s("code",[e._v("archives")]),e._v("、"),s("code",[e._v("articles")]),e._v("、"),s("code",[e._v("posts")]),e._v("、"),s("code",[e._v("docs")]),e._v(" 等均可表达这个意思，也是传统博客程序中常用的。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" posts\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" posts\n")])])]),s("p",[e._v("然后就可以在这个文件夹里进行写作了，写作仅需在此文件夹里建立不同的 Markdown 文件，VuePress 会自动识别到你的文章。")]),e._v(" "),s("p",[e._v("VuePress 的写作使用 Markdown 文件进行，路由会自动将你的 Markdown 文件名称在实际 production 中转换成文件名 + "),s("code",[e._v(".html")]),e._v(" 的形式。")]),e._v(" "),s("p",[e._v("例如 "),s("code",[e._v("docs/Hello-World.md")]),e._v(" 将会被转化为 "),s("code",[e._v("docs/Hello-World.html")]),e._v("，而在根目录的 "),s("code",[e._v("Hello.md")]),e._v(" 将会被转化为 "),s("code",[e._v("Hello.html")]),e._v("，这也是为什么需要专门创建一个文件夹用来放置文章的原因，根目录里只需要放置独立页面即可，这样从路由层面看来会更加友好。")]),e._v(" "),s("p",[e._v("到目前为止，你的博客目录应该为这个样子")]),e._v(" "),s("div",{staticClass:"language-tree extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".\n├─package-lock.json\n├─package.json\n├─node_modules\n└─posts\n")])])]),s("h2",{attrs:{id:"写作与发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写作与发布","aria-hidden":"true"}},[e._v("#")]),e._v(" 写作与发布")]),e._v(" "),s("p",[e._v("如果你的环境已经搭建完毕，那么你可以选择在纯 Markdown 下进行写作，然后直接 "),s("code",[e._v("push")]),e._v(" 到你的仓库中去。")]),e._v(" "),s("p",[e._v("而如果你想要实时预览自己的文章在博客上的样子，或者调试一些应用层面的东西，你就需要启动开发服务器。")]),e._v(" "),s("p",[e._v("与 Vue 的开发服务器相同，VuePress 的服务器也是支持热重载的。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果之前 npm install 为全局安装")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# npm install -D -g vuepress")]),e._v("\nvuepress dev "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果之前 npm install 是以本地依赖安装")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# npm install -D vuepress")]),e._v("\nnpx vuepress dev "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),s("p",[e._v("这样，在默认情况下会在 "),s("a",{attrs:{href:"https://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://localhost:8080"),s("OutboundLink")],1),e._v(" 开放你的开发服务器，访问即可看到你的网站。")]),e._v(" "),s("p",[e._v("最后，写完了就可以进行构建了——将你的网站样式和内容编译成静态网页。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("vuepress build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\nnpx vuepress build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),s("p",[e._v("默认情况下这个静态网页会被保存到 "),s("code",[e._v(".vuepress/dist")]),e._v(" 内，在后文会介绍修改方法。")]),e._v(" "),s("h2",{attrs:{id:"配置、主题、插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置、主题、插件","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置、主题、插件")]),e._v(" "),s("p",[e._v("VuePress 之所以适合开发者，是因为它可以通过配置、主题和插件三方面高程度个性化——当然，是在你会 Vue 而且会看 VuePress 的 API 的前提下。")]),e._v(" "),s("p",[e._v("VuePress 的配置文件存储在 "),s("code",[e._v(".vuepress")]),e._v(" 里，一般情况下是没有这个文件夹的，我们可以自己创建。")]),e._v(" "),s("p",[e._v("进入后，创建 "),s("code",[e._v("config.js")]),e._v("，这就是 VuePress 的配置文件。")]),e._v(" "),s("p",[s("code",[e._v("config.js")]),e._v(" 在写入一个语句之后即可当作一般的 JSON 文件来使用——它比 JSON 要宽松得多。")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("export "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Subilan\'s Blog"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("具体配置项目可以参考 VuePress 官方文档的"),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/basic-config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[e._v("配置"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("要切换主题，首先使用 npm 安装你想要的主题，比如")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" vuepress-theme-example --save-dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# yarn add vuepress-theme-example --dev")]),e._v("\n")])])]),s("p",[e._v("然后在 "),s("code",[e._v("config.js")]),e._v(" 里添加一行")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("export "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n    theme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("即可。")]),e._v(" "),s("p",[e._v("在这里需要注意的一点是，VuePress 的所有主题、Plugin，根据官方的建议，均是以 "),s("code",[e._v("vuepress-theme-")]),e._v(" 和 "),s("code",[e._v("vuepress-plugin-")]),e._v(" 开头。也正因此，安装以他们开头的主题或插件，在填写的时候则可以省略 "),s("code",[e._v("vuepress-theme-")]),e._v(" 这样的开头。当然，这只是一般情况，具体请以你所看到的主题或插件为准。")]),e._v(" "),s("p",[e._v("关于 VuePress 原版主题的相关配置可以看官方文档的"),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/default-theme-config/",target:"_blank",rel:"noopener noreferrer"}},[e._v("默认主题"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("p",[e._v("这是阅读完文章后，我个人推荐去参考的一些文档，以及一些可能需要的插件。")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[e._v("config.js 里完整的配置项有多少、哪些，有何作用？"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.google.com/search?q=vuepress-theme+site%3Agithub.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google 搜索 VuePress 的主题"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/meteorlxy/awesome-vuepress",target:"_blank",rel:"noopener noreferrer"}},[e._v("meteorlxy/awesome-vuepress"),s("OutboundLink")],1),e._v(" - 丰富的 VuePress 周边生态推荐")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuejs/vuepress/packages/@vuepress"),s("OutboundLink")],1),e._v(" - VuePress 官方开发的插件")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuepress/vuepress-plugin-mathjax",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-plugin-mathjax"),s("OutboundLink")],1),e._v(" - 在你的博客里写 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.488ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"6.179ex",height:"2.108ex",viewBox:"0 -716.3 2731.3 931.8"}},[s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("path",{attrs:{"data-c":"4C",d:"M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"}})]),s("g",{attrs:{"data-mml-node":"mspace",transform:"translate(681, 0)"}}),s("g",{attrs:{"data-mml-node":"mpadded",transform:"translate(356, 0)"}},[s("g",{attrs:{transform:"translate(0, 210)"}},[s("g",{attrs:{"data-mml-node":"TeXAtom"}},[s("g",{attrs:{"data-mml-node":"mstyle",transform:"scale(0.707)"}},[s("g",{attrs:{"data-mml-node":"TeXAtom"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("path",{attrs:{"data-c":"41",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})])])])])])]),s("g",{attrs:{"data-mml-node":"mspace",transform:"translate(886.3, 0)"}}),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(716.3, 0)"}},[s("path",{attrs:{"data-c":"54",d:"M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"}})]),s("g",{attrs:{"data-mml-node":"mspace",transform:"translate(1420.3, 0)"}}),s("g",{attrs:{"data-mml-node":"mpadded",transform:"translate(1280.3, 0)"}},[s("g",{attrs:{transform:"translate(0, -215.5)"}},[s("g",{attrs:{"data-mml-node":"TeXAtom"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("path",{attrs:{"data-c":"45",d:"M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"}})])])])]),s("g",{attrs:{"data-mml-node":"mspace",transform:"translate(2018.3, 0)"}}),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(1903.3, 0)"}},[s("path",{attrs:{"data-c":"58",d:"M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"}})])])])])]),e._v(" 公式。")],1),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-last-updated",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-plugin-last-updated"),s("OutboundLink")],1),e._v(" - 根据 Git Log 显示文章最后修改时间")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-pwa",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-plugin-pwa"),s("OutboundLink")],1),e._v(" - 将你的博客变成具有 PWA 性质的 Web App")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/Subilan/Blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("Subilan/Blog"),s("OutboundLink")],1),e._v(" - 本博客的 GitHub 仓库")])])])},[],!1,null,null,null);t.default=r.exports}}]);