(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{102:function(e,t){e.exports=[{text:"主页",link:"/",icon:"reco-home"},{text:"时间轴",link:"/timeline/",icon:"reco-date"},{text:"关于我",link:"/about/",icon:"reco-message"},{text:"我的",icon:"reco-account",items:[{text:"GitHub",link:"https://github.com/lifangdan",icon:"reco-github"},{text:"简书",link:"https://www.jianshu.com/u/9388dba180df",icon:"reco-jianshu"}]}]},103:function(e,t){e.exports={"/views/":[{title:"前端笔记",collapsable:!0,children:["frontEnd/webSocket","frontEnd/performanceOpti","frontEnd/iconfont","frontEnd/typeof","frontEnd/flex","frontEnd/cordova","frontEnd/giteePages","frontEnd/rem","frontEnd/common",{title:"VUE",collapsable:!0,children:["frontEnd/vue/vue3","frontEnd/vue/image","frontEnd/vue/table","frontEnd/vue/vue01","frontEnd/vue/vueDiff"]}]},{title:"学习文档",collapsable:!0,children:["learningDocs/ES6","learningDocs/algorithm","learningDocs/typescript"]},{title:"其他",collapsable:!0,children:["others/print","others/tools","others/ps","others/markdown"]},{title:"随笔",collapsable:!0,children:["essay/essay01","essay/test"]}]}},272:function(e,t,o){var n,a=o(631).default,i=o(102),r=o(103);e.exports={theme:"reco",base:"./",title:"非洲猫の博客",description:"用自己的方式记录日常所得，人生值得，只管向前。",head:[["link",{rel:"icon",href:"/icon.png"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1,user-scalable=no"}],["meta",{name:"robots",content:"all"}],["meta",{name:"author",content:"非洲猫"}],["meta",{name:"keywords",content:"非洲猫の博客,前端,blog,vuepress-blog"}],["script",{src:"/assets/js/jq3.5.1.js"},""],["script",{src:"/assets/js/mouse.js"},""]],port:8e3,markdown:{lineNumbers:!0},themeConfig:(n={logo:"/logo_01.jpg",lastUpdated:"最后更新时间",sidebar:"auto",subSidebar:"auto",smoothScroll:!0,authorAvatar:"/logo_01.jpg",author:"非洲猫",startYear:"2019",blogConfig:{category:{location:2,text:"分类"},tag:{location:3,text:"标签"}},nav:i},a(n,"sidebar",r),a(n,"search",!0),a(n,"searchMaxSuggestions",10),a(n,"valineConfig",{appId:"lik7afwUVhJfcrMIdbL7MmNj-gzGzoHsz",appKey:"aWHY1joiOlay7WBIBFIFe850",placeholder:"填写邮箱可以收到回复哦!",notify:!0,verify:!0,recordIP:!1}),n),configureWebpack:{resolve:{alias:{"@vuepress":"../images/vuepress","@images":"../../../images","@components":"../.vuepress/components"}}},plugins:[["@vuepress/back-to-top"],["@vuepress-reco/vuepress-plugin-bgm-player",{audios:[{name:"像鱼",artist:"王贰浪",url:"http://lifangdan.github.io/xiangyu.mp3",cover:"http://lifangdan.github.io/bgm_01.png"},{name:"白月光与朱砂痣",artist:"大籽",url:"http://lifangdan.github.io/baiyueguang.mp3",cover:"http://lifangdan.github.io/bgm_02.png"}]}]]}},631:function(e,t,o){o(101),e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0}}]);