(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{36:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._m(1),e("p",[t._v("所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 "),e("router-link",{attrs:{to:"../config/#markdownanchor"}},[e("code",[t._v("markdown.anchor")])]),t._v(" 来配置。")],1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),e("p",[t._v("如果你想要链接到另一个 markdown 文件：")]),t._m(7),t._m(8),e("p",[t._v("以如下的文件结构为例：")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),e("p",[t._v("JSON front matter 需要以花括号开头和结尾：")]),t._m(22),e("p",[t._v("TOML front matter 需要显式地标注为 TOML：")]),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),e("p",[t._v("🎉 💯")]),t._m(33),t._m(34),t._m(35),t._m(36),e("p"),t._m(37),e("p"),e("p",[t._v("目录（Table of Contents）的渲染可以通过  "),e("router-link",{attrs:{to:"../config/#markdowntoc"}},[e("code",[t._v("markdown.toc")])]),t._v(" 选项来配置。")],1),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),e("p",[t._v("你也可以自定义块中的标题：")]),t._m(45),t._m(46),t._m(47),t._m(48),t._m(49),t._m(50),t._m(51),t._m(52),t._m(53),t._m(54)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"markdown-拓展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-拓展","aria-hidden":"true"}},[this._v("#")]),this._v(" Markdown 拓展")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"header-anchors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header-anchors","aria-hidden":"true"}},[this._v("#")]),this._v(" Header Anchors")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 链接")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"内部链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内部链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 内部链接")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("内部的、并以 "),s("code",[this._v(".md")]),this._v(" or "),s("code",[this._v(".html")]),this._v(" 结尾的链接，将会被转换成 "),s("code",[this._v("<router-link>")]),this._v(" 用于 SPA 导航。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("站内的每一个子文件夹都应当有一个 "),s("code",[this._v("README.md")]),this._v(" 文件，它会被自动编译为 "),s("code",[this._v("index.html")]),this._v("。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),e("p",[t._v("在链接到一个文件夹的 "),e("code",[t._v("index.html")]),t._v(" 时，确保你的链接以 "),e("code",[t._v("/")]),t._v(" 结尾，否则该链接将导致 404。比如，用 "),e("code",[t._v("/config/")]),t._v(" 而不是 "),e("code",[t._v("/config")]),t._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("确保链接以 "),s("code",[this._v(".html")]),this._v(" 或 "),s("code",[this._v(".md")]),this._v(" 结尾；")]),s("li",[this._v("确保路径大小写正确，因为路径的匹配是大小写敏感的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n├─ README.md\n├─ foo\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{attrs:{class:"token url"}},[t._v("[Home](/)")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到根部的 README.md --\x3e")]),t._v("\n"),e("span",{attrs:{class:"token url"}},[t._v("[foo](/foo/)")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到 foo 文件夹的 index.html --\x3e")]),t._v("\n"),e("span",{attrs:{class:"token url"}},[t._v("[foo heading anchor](/foo/#heading)")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到 foo/index.html 的特定 anchor 位置 --\x3e")]),t._v("\n"),e("span",{attrs:{class:"token url"}},[t._v("[foo - one](/foo/one.html)")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 具体文件可以使用 .html 结尾 --\x3e")]),t._v("\n"),e("span",{attrs:{class:"token url"}},[t._v("[foo - two](/foo/two.md)")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 也可以用 .md --\x3e")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"外部链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外部链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 外部链接")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("外部的链接将会被自动地设置为  "),s("code",[this._v('target="_blank"')]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[this._v("vuejs.org")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[this._v("VuePress on GitHub")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"front-matter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#front-matter","aria-hidden":"true"}},[this._v("#")]),this._v(" Front Matter")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("VuePress 提供了对 "),s("a",{attrs:{href:"https://jekyllrb.com/docs/frontmatter/",target:"_blank",rel:"noopener noreferrer"}},[this._v("YAML front matter")]),this._v(" 开箱即用的支持:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{attrs:{class:"token key atrule"}},[t._v("title")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blogging Like a Hacker\n"),e("span",{attrs:{class:"token key atrule"}},[t._v("lang")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这些数据可以在当前页的正文中使用，在任意的自定义或主题组件中，它可以通过 "),s("code",[this._v("$page")]),this._v(" 来访问。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("title")]),this._v(" 和 "),s("code",[this._v("lang")]),this._v(" 的 meta 将会被自动地注入到当前的页面中，当然你也可以指定一些额外需要注入的 meta：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{attrs:{class:"token key atrule"}},[t._v("meta")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" description\n    "),e("span",{attrs:{class:"token key atrule"}},[t._v("content")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keywords\n    "),e("span",{attrs:{class:"token key atrule"}},[t._v("content")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" super duper SEO\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"其他格式的-front-matter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他格式的-front-matter","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他格式的 Front Matter")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("除了 YAML 之外，VuePress 也支持 JSON 或者 "),s("a",{attrs:{href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"}},[this._v("TOML")]),this._v(" 格式的 front matter。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('---\n{\n  "title": "Blogging Like a Hacker",\n  "lang": "en-US"\n}\n---\n')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('---toml\ntitle = "Blogging Like a Hacker"\nlang = "en-US"\n---\n')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"github-风格的表格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-风格的表格","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHub 风格的表格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Tables")]),e("th",{staticStyle:{"text-align":"center"}},[t._v("Are")]),e("th",{staticStyle:{"text-align":"right"}},[t._v("Cool")])])]),e("tbody",[e("tr",[e("td",[t._v("col 3 is")]),e("td",{staticStyle:{"text-align":"center"}},[t._v("right-aligned")]),e("td",{staticStyle:{"text-align":"right"}},[t._v("$1600")])]),e("tr",[e("td",[t._v("col 2 is")]),e("td",{staticStyle:{"text-align":"center"}},[t._v("centered")]),e("td",{staticStyle:{"text-align":"right"}},[t._v("$12")])]),e("tr",[e("td",[t._v("zebra stripes")]),e("td",{staticStyle:{"text-align":"center"}},[t._v("are neat")]),e("td",{staticStyle:{"text-align":"right"}},[t._v("$1")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"emoji"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emoji","aria-hidden":"true"}},[this._v("#")]),this._v(" Emoji")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(":tada: :100:\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("[[toc]]\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#header-anchors"}},[t._v("Header Anchors")])]),e("li",[e("a",{attrs:{href:"#链接"}},[t._v("链接")]),e("ul",[e("li",[e("a",{attrs:{href:"#内部链接"}},[t._v("内部链接")])]),e("li",[e("a",{attrs:{href:"#外部链接"}},[t._v("外部链接")])])])]),e("li",[e("a",{attrs:{href:"#front-matter"}},[t._v("Front Matter")]),e("ul",[e("li",[e("a",{attrs:{href:"#其他格式的-front-matter"}},[t._v("其他格式的 Front Matter")])])])]),e("li",[e("a",{attrs:{href:"#github-风格的表格"}},[t._v("GitHub 风格的表格")])]),e("li",[e("a",{attrs:{href:"#emoji"}},[t._v("Emoji")])]),e("li",[e("a",{attrs:{href:"#目录"}},[t._v("目录")])]),e("li",[e("a",{attrs:{href:"#自定义容器"}},[t._v("自定义容器")])]),e("li",[e("a",{attrs:{href:"#代码块中的行高亮"}},[t._v("代码块中的行高亮")])]),e("li",[e("a",{attrs:{href:"#进阶配置"}},[t._v("进阶配置")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义容器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("::: tip\nThis is a tip\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),s("p",[this._v("This is a tip")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),s("p",[this._v("This is a warning")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),s("p",[this._v("This is a dangerous thing")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("::: danger STOP\nDanger zone, do not proceed\n:::\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("STOP")]),s("p",[this._v("Danger zone, do not proceed")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码块中的行高亮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码块中的行高亮","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码块中的行高亮")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("``` js{4}\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{attrs:{class:"highlighted-line"}},[t._v("      msg"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'Highlighted!'")])]),t._v("    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"进阶配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进阶配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 进阶配置")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("VuePress 使用 "),e("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it")]),t._v(" 来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的。想要进一步的话，你可以通过 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 的 "),e("code",[t._v("markdown")]),t._v(" 选项，来对当前的 "),e("code",[t._v("markdown-it")]),t._v(" 实例做一些自定义的配置：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("// markdown-it-anchor 的选项")]),t._v("\n    anchor"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" permalink"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("// markdown-it-toc 的选项")]),t._v("\n    toc"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" includeLevel"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token number"}},[t._v("1")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("2")]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    config"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" md "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{attrs:{class:"token comment"}},[t._v("// 使用更多的 markdown-it 插件!")]),t._v("\n      md"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("use")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token function"}},[t._v("require")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])}],!1,null,null,null);s.default=a.exports}}]);