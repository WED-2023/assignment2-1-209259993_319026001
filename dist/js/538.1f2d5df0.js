(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[538],{4538:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});r(1249),r(7327),r(1539);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"results-page"},[e.recipes.length>0?t("div",[e._m(0),t("div",{staticClass:"sort-container"},[t("label",{attrs:{for:"sort"}},[e._v("Sort by:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.sortCriteria,expression:"sortCriteria"}],attrs:{id:"sort"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sortCriteria=t.target.multiple?r:r[0]},e.sortRecipes]}},[t("option",{attrs:{value:"time"}},[e._v("Make Time")]),t("option",{attrs:{value:"likes"}},[e._v("Popularity")])])]),t("RecipePreviewList",{attrs:{recipes:e.recipes}})],1):t("div",[t("h1",[e._v("No results came back.")]),t("router-link",{attrs:{to:"/search",exact:""}},[e._v("Search again?")])],1)])},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"results-header"},[t("h2",[e._v("Results")])])}],a=r(124),s=r(8534),o=(r(4916),r(4765),r(2707),r(1639));const c={components:{RecipePreviewList:o.Z},data:function(){return{search:this.$route.query.search,cuisine:this.$route.query.cuisine,diet:this.$route.query.diet,intolerance:this.$route.query.intolerance,recipeCount:this.$route.query.recipeCount,recipes:[],sortCriteria:None}},created:function(){var e=this;return(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.searchRecipesInDataBase();case 2:case"end":return t.stop()}}),t)})))()},methods:{searchRecipesInDataBase:function(){var e=this;return(0,s.Z)((0,a.Z)().mark((function t(){var r;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/search",{recipeName:e.search,cuisine:e.cuisine,diet:e.diet,intolerance:e.intolerance,number:e.recipeCount});case 3:r=t.sent,e.recipes=r.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error("Error fetching recipes:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},sortRecipes:function(){var e=this;this.recipes.sort((function(t,r){switch(e.sortCriteria){case"time":return t.readyInMinutes-r.readyInMinutes;case"likes":return r.popularity-t.popularity;default:return 0}}))}}},u=c;var l=r(1001),p=(0,l.Z)(u,n,i,!1,null,"6ed54024",null);const v=p.exports},4362:(e,t,r)=>{var n=r(1589),i=Math.floor,a=function(e,t){var r=e.length,c=i(r/2);return r<8?s(e,t):o(e,a(n(e,0,c),t),a(n(e,c),t),t)},s=function(e,t){var r,n,i=e.length,a=1;while(a<i){n=a,r=e[a];while(n&&t(e[n-1],r)>0)e[n]=e[--n];n!==a++&&(e[n]=r)}return e},o=function(e,t,r,n){var i=t.length,a=r.length,s=0,o=0;while(s<i||o<a)e[s+o]=s<i&&o<a?n(t[s],r[o])<=0?t[s++]:r[o++]:s<i?t[s++]:r[o++];return e};e.exports=a},5117:(e,t,r)=>{"use strict";var n=r(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+n(t)+" of "+n(e))}},8886:(e,t,r)=>{var n=r(8113),i=n.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},256:(e,t,r)=>{var n=r(8113);e.exports=/MSIE|Trident/.test(n)},8008:(e,t,r)=>{var n=r(8113),i=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},7007:(e,t,r)=>{"use strict";r(4916);var n=r(1470),i=r(8052),a=r(2261),s=r(7293),o=r(5112),c=r(8880),u=o("species"),l=RegExp.prototype;e.exports=function(e,t,r,p){var v=o(e),f=!s((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),d=f&&!s((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return t=!0,null},r[v](""),!t}));if(!f||!d||r){var h=n(/./[v]),x=t(v,""[e],(function(e,t,r,i,s){var o=n(e),c=t.exec;return c===a||c===l.exec?f&&!s?{done:!0,value:h(t,r,i)}:{done:!0,value:o(r,t,i)}:{done:!1}}));i(String.prototype,e,x[0]),i(l,v,x[1])}p&&c(l[v],"sham",!0)}},7651:(e,t,r)=>{var n=r(6916),i=r(9670),a=r(614),s=r(4326),o=r(2261),c=TypeError;e.exports=function(e,t){var r=e.exec;if(a(r)){var u=n(r,e,t);return null!==u&&i(u),u}if("RegExp"===s(e))return n(o,e,t);throw c("RegExp#exec called on incompatible receiver")}},2261:(e,t,r)=>{"use strict";var n=r(6916),i=r(1702),a=r(1340),s=r(7066),o=r(2999),c=r(2309),u=r(30),l=r(9909).get,p=r(9441),v=r(7168),f=c("native-string-replace",String.prototype.replace),d=RegExp.prototype.exec,h=d,x=i("".charAt),g=i("".indexOf),m=i("".replace),y=i("".slice),I=function(){var e=/a/,t=/b*/g;return n(d,e,"a"),n(d,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),w=o.BROKEN_CARET,R=void 0!==/()??/.exec("")[1],E=I||R||w||p||v;E&&(h=function(e){var t,r,i,o,c,p,v,E=this,_=l(E),b=a(e),C=_.raw;if(C)return C.lastIndex=E.lastIndex,t=n(h,C,b),E.lastIndex=C.lastIndex,t;var k=_.groups,A=w&&E.sticky,S=n(s,E),T=E.source,Z=0,$=b;if(A&&(S=m(S,"y",""),-1===g(S,"g")&&(S+="g"),$=y(b,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==x(b,E.lastIndex-1))&&(T="(?: "+T+")",$=" "+$,Z++),r=new RegExp("^(?:"+T+")",S)),R&&(r=new RegExp("^"+T+"$(?!\\s)",S)),I&&(i=E.lastIndex),o=n(d,A?r:E,$),A?o?(o.input=y(o.input,Z),o[0]=y(o[0],Z),o.index=E.lastIndex,E.lastIndex+=o[0].length):E.lastIndex=0:I&&o&&(E.lastIndex=E.global?o.index+o[0].length:i),R&&o&&o.length>1&&n(f,o[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o&&k)for(o.groups=p=u(null),c=0;c<k.length;c++)v=k[c],p[v[0]]=o[v[1]];return o}),e.exports=h},7066:(e,t,r)=>{"use strict";var n=r(9670);e.exports=function(){var e=n(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},2999:(e,t,r)=>{var n=r(7293),i=r(7854),a=i.RegExp,s=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),o=s||n((function(){return!a("a","y").sticky})),c=s||n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:o,UNSUPPORTED_Y:s}},9441:(e,t,r)=>{var n=r(7293),i=r(7854),a=i.RegExp;e.exports=n((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,t,r)=>{var n=r(7293),i=r(7854),a=i.RegExp;e.exports=n((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1150:e=>{e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},1249:(e,t,r)=>{"use strict";var n=r(2109),i=r(2092).map,a=r(1194),s=a("map");n({target:"Array",proto:!0,forced:!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},2707:(e,t,r)=>{"use strict";var n=r(2109),i=r(1702),a=r(9662),s=r(7908),o=r(6244),c=r(5117),u=r(1340),l=r(7293),p=r(4362),v=r(9341),f=r(8886),d=r(256),h=r(7392),x=r(8008),g=[],m=i(g.sort),y=i(g.push),I=l((function(){g.sort(void 0)})),w=l((function(){g.sort(null)})),R=v("sort"),E=!l((function(){if(h)return h<70;if(!(f&&f>3)){if(d)return!0;if(x)return x<603;var e,t,r,n,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)g.push({k:t+n,v:r})}for(g.sort((function(e,t){return t.v-e.v})),n=0;n<g.length;n++)t=g[n].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),_=I||!w||!R||!E,b=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:u(t)>u(r)?1:-1}};n({target:"Array",proto:!0,forced:_},{sort:function(e){void 0!==e&&a(e);var t=s(this);if(E)return void 0===e?m(t):m(t,e);var r,n,i=[],u=o(t);for(n=0;n<u;n++)n in t&&y(i,t[n]);p(i,b(e)),r=o(i),n=0;while(n<r)t[n]=i[n++];while(n<u)c(t,n++);return t}})},4916:(e,t,r)=>{"use strict";var n=r(2109),i=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},4765:(e,t,r)=>{"use strict";var n=r(6916),i=r(7007),a=r(9670),s=r(8554),o=r(4488),c=r(1150),u=r(1340),l=r(8173),p=r(7651);i("search",(function(e,t,r){return[function(t){var r=o(this),i=s(t)?void 0:l(t,e);return i?n(i,t,r):new RegExp(t)[e](u(r))},function(e){var n=a(this),i=u(e),s=r(t,n,i);if(s.done)return s.value;var o=n.lastIndex;c(o,0)||(n.lastIndex=0);var l=p(n,i);return c(n.lastIndex,o)||(n.lastIndex=o),null===l?-1:l.index}]}))}}]);
//# sourceMappingURL=538.1f2d5df0.js.map