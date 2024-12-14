(function(){"use strict";var t={957:function(t,s,a){var e=a(144),i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("HelloWorld",{attrs:{msg:"Jongwon Choi"}})],1)},n=[],r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"hello"},[s("div",{staticClass:"px-4 py-5 my-5 text-center"},[s("h1",{staticClass:"display-4 fw-bold"},[t._v(t._s(t.msg))]),s("p",{staticClass:"lead mb-4"},[t._v("안녕하세요. 제 커리어를 소개합니다 🙌")]),t._m(0),s("ul",t._l(t.tags,(function(t){return s("li",{key:t},[s("a",{attrs:{href:t.href}},[s("img",{attrs:{alt:t.value,src:`https://img.shields.io/badge/${t.name}-${t.value}-${t.color}`}})])])})),0)]),s("div",{staticClass:"b-example-divider"}),s("div",{staticClass:"px-4 py-5 my-5 text-center"},[s("h3",{staticClass:"display-6 fw-bold"},[t._v("Scrap")]),s("p",{staticClass:"lead mb-4"},[t._v("🗞️ 대외 활동 이력입니다")]),s("div",{staticClass:"container py-5 text-center"},[s("div",{staticClass:"row row-cols-1 row-cols-md-3 g-4"},t._l(t.scrap,(function(a,e){return s("div",{key:e,staticClass:"col"},[s("div",{staticClass:"card h-100"},[s("img",{staticClass:"card-img-top",attrs:{src:a.image,alt:"..."}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(a.title))]),s("p",{staticClass:"card-text"},[t._v(t._s(a.description))]),s("p",[s("img",{staticClass:"favicon",staticStyle:{"margin-right":"4px","margin-bottom":"2px"},attrs:{src:t.favicon(a.url),alt:"event favicon"}}),a.url?s("a",{staticClass:"subtitle",attrs:{href:a.url}},[t._v(t._s(a.url))]):t._e()])]),s("div",{staticClass:"card-footer"},[s("small",{staticClass:"text-body-secondary"},[t._v(t._s(a.footer))])])])])})),0)])]),s("div",{staticClass:"b-example-divider"}),t._m(1),t._l(t.speaker,(function(e,i){return s("div",{key:e,staticClass:"px-4 my-5"},[s("div",{staticClass:"col-lg-6 mx-auto speaker"},[s("h3",{staticClass:"display-8 fw-bold"},[t._v(t._s(e.value))]),s("p",{staticClass:"subtitle"},[s("img",{staticClass:"favicon",staticStyle:{"margin-right":"4px","margin-bottom":"2px"},attrs:{src:t.favicon(e.event),alt:"event favicon"}}),e.event?s("a",{staticClass:"subtitle",attrs:{href:e.event}},[t._v(t._s(e.name))]):t._e(),s("span",{staticStyle:{opacity:"0.3"}},[t._v(" | ")]),t._v(" "+t._s(e.date)+" "),s("br")]),e.description?s("p",{staticClass:"lead mb-4 description"},[t._v(t._s(e.description))]):t._e(),e.href?s("a",{staticClass:"btn btn-lg btn-primary px-4 attachment",attrs:{href:e.href,role:"button"}},[s("img",{staticStyle:{"margin-right":"4px"},attrs:{src:a(285),alt:"download_svg"}}),t._v(" 발표자료 보러가기 ")]):t._e(),i!==Object.keys(t.speaker).length-1?s("hr",{staticClass:"my-5"}):t._e()])])})),s("div",{staticClass:"b-example-divider"}),s("div",{staticClass:"px-4 py-5 my-5 text-center"},[s("h3",{staticClass:"display-6 fw-bold"},[t._v("Bio")]),s("p",{staticClass:"lead mb-4"},[t._v("🧑‍💻 사이드 프로젝트를 해 본 것들이에요")]),s("ul",t._l(t.bio,(function(t){return s("li",{key:t},[s("a",{attrs:{href:t.href,target:"_blank",rel:"noopener"}},[s("img",{attrs:{alt:"home",src:"https://github-readme-stats.vercel.app/api/pin/?username=jongwony&repo="+t.name}})])])})),0)]),s("div",{staticClass:"b-example-divider"}),t._m(2),s("div",{staticClass:"b-example-divider"}),t._m(3)],2)},o=[function(){var t=this,s=t._self._c;return s("ul",[s("li",[s("a",{attrs:{href:"https://www.wantedlab.com/"}},[s("img",{attrs:{alt:"lang",src:"https://img.shields.io/badge/WantedLab-Data_Engineer-3B68F9"}})])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"px-4 py-5 my-5 text-center"},[s("h3",{staticClass:"display-6 fw-bold"},[t._v("Speaker")]),s("p",{staticClass:"lead mb-4"},[t._v("🗣️ 스피커로 활동한 이력입니다. 발표 자료를 아카이빙 해봤어요. 클릭에 광고가 있을 수 있습니다 😉")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"px-4 py-5 my-5 text-center"},[s("h3",{staticClass:"display-6 fw-bold"},[t._v("GitHub")]),s("p",{staticClass:"lead mb-4"},[t._v("소스 코드 구경하러 놀러오세요 :)")]),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/jongwony?tab=repositories",target:"_blank",rel:"noopener"}},[s("img",{attrs:{src:"https://github-readme-stats.vercel.app/api?username=jongwony&show_icons=true&count_private=true",alt:"jongwony",height:"140"}})])]),s("li",[s("a",{attrs:{href:"https://github.com/jongwony",target:"_blank",rel:"noopener"}},[s("img",{attrs:{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=jongwony&layout=compact&hide=html,css,asp,php&langs_count=5",alt:"top_langs",height:"140"}})])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"px-4 py-5 my-5 text-center"},[s("h3",{staticClass:"display-6 fw-bold"},[t._v("Contact")]),s("p",{staticClass:"lead mb-4"},[t._v("☕️ 커피 챗 환영합니다. 😄")]),s("ul",[s("li",[s("a",{attrs:{href:"mailto:lastone9182@gmail.com"}},[s("img",{staticClass:"logo",attrs:{alt:"Email",src:a(576)}})])]),s("li",[s("a",{attrs:{href:"https://instagram.com/jongwony_"}},[s("img",{staticClass:"logo",attrs:{alt:"Instagram",src:a(947)}})])])])])}],c={name:"HelloWorld",props:{msg:String},data(){return{bio:null,speaker:null,tags:null,scrap:null}},created(){fetch("https://raw.githubusercontent.com/jongwony/jongwony/main/src/data/bio.json").then((t=>t.json())).then((t=>{this.bio=t})),fetch("https://raw.githubusercontent.com/jongwony/jongwony/main/src/data/speaker.json").then((t=>t.json())).then((t=>{this.speaker=t})),fetch("https://raw.githubusercontent.com/jongwony/jongwony/main/src/data/tags.json").then((t=>t.json())).then((t=>{this.tags=t})),fetch("https://raw.githubusercontent.com/jongwony/jongwony/main/src/data/scrap.json").then((t=>t.json())).then((t=>{this.scrap=t}))},methods:{get_hostname:function(t){return new URL(t).hostname},favicon:function(t){return`https://icons.duckduckgo.com/ip2/${this.get_hostname(t)}.ico`}}},l=c,A=a(1),p=(0,A.Z)(l,r,o,!1,null,"1f3b34d8",null),u=p.exports,d={name:"App",components:{HelloWorld:u}},g=d,m=(0,A.Z)(g,i,n,!1,null,null,null),f=m.exports;e.ZP.config.productionTip=!1,new e.ZP({render:t=>t(f)}).$mount("#app")},285:function(t,s,a){t.exports=a.p+"img/downloads.d3758c68.svg"},576:function(t){t.exports="data:image/webp;base64,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"},947:function(t,s,a){t.exports=a.p+"img/instagram.ae068f07.webp"}},s={};function a(e){var i=s[e];if(void 0!==i)return i.exports;var n=s[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(s,e,i,n){if(!e){var r=1/0;for(A=0;A<t.length;A++){e=t[A][0],i=t[A][1],n=t[A][2];for(var o=!0,c=0;c<e.length;c++)(!1&n||r>=n)&&Object.keys(a.O).every((function(t){return a.O[t](e[c])}))?e.splice(c--,1):(o=!1,n<r&&(r=n));if(o){t.splice(A--,1);var l=i();void 0!==l&&(s=l)}}return s}n=n||0;for(var A=t.length;A>0&&t[A-1][2]>n;A--)t[A]=t[A-1];t[A]=[e,i,n]}}(),function(){a.d=function(t,s){for(var e in s)a.o(s,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(s){return 0===t[s]};var s=function(s,e){var i,n,r=e[0],o=e[1],c=e[2],l=0;if(r.some((function(s){return 0!==t[s]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(c)var A=c(a)}for(s&&s(e);l<r.length;l++)n=r[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(A)},e=self["webpackChunkjongwony"]=self["webpackChunkjongwony"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(957)}));e=a.O(e)})();
//# sourceMappingURL=app.859558dc.js.map