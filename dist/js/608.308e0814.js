(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[608],{608:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e.recipe?t("div",[t("div",{staticClass:"recipe-header"},[t("h1",{staticClass:"recipe-title"},[e._v(e._s(e.recipe.title))]),t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-details"},[t("div",{staticClass:"details"},[t("div",{staticClass:"detail-item"},[t("span",{staticClass:"detail-label"},[e._v("Ready in:")]),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes ")]),t("div",{staticClass:"detail-item"},[t("span",{staticClass:"detail-label"},[e._v("Likes:")]),e._v(" "+e._s(e.recipe.aggregateLikes)+" likes ")]),t("div",{staticClass:"detail-item"},[t("span",{staticClass:"detail-label"},[e._v("Servings:")]),e._v(" "+e._s(e.recipe.servings)+" servings ")]),t("div",{staticClass:"icons-container"},[e.recipe.vegetarian?t("div",[t("img",{staticClass:"icon",attrs:{src:r(2574),alt:"Vegetarian"}})]):e._e(),e.recipe.vegan?t("div",[t("img",{staticClass:"icon",attrs:{src:r(8380),alt:"Vegan"}})]):e._e(),e.recipe.glutenFree?t("div",[t("img",{staticClass:"icon",attrs:{src:r(3204),alt:"Gluten Free"}})]):e._e()]),t("div",{staticClass:"button-container"},[t("button",{staticClass:"fav-button",on:{click:function(t){return e.addToFav(e.recipe.id)}}},[e._v(" "+e._s(e.fav?"Favorited":"Add to Favorites")+" ")]),t("router-link",{staticClass:"make-recipe-link",attrs:{to:{name:"make-recipe",params:{recipeId:e.recipe.id}}},nativeOn:{click:function(t){return e.handleMakeRecipe.apply(null,arguments)}}},[t("button",{staticClass:"make-recipe-button"},[e._v("Make This Recipe")])])],1)]),t("div",{staticClass:"ingredients"},[t("h2",[e._v("Ingredients")]),t("ul",e._l(e.recipe.extendedIngredients,(function(r,n){return t("li",{key:n+"_"+r.id},[e._v(" "+e._s(r.original)+" ")])})),0)]),t("div",{staticClass:"instructions"},[t("h2",[e._v("Instructions")]),t("ol",e._l(e.recipe.instructions,(function(r){return t("li",{key:r.number},[e._v(" "+e._s(r.step)+" ")])})),0)])])]):e._e()])},a=[],i=r(124),s=r(8534),c=(r(4916),r(5306),r(3099)),o=r(9805);const l={mounted:function(){this.fav=(0,c.S3)(this.recipe.id)},data:function(){return{recipe:{},fav:!1}},methods:{addToFav:function(e){var t=this;return(0,s.Z)((0,i.Z)().mark((function r(){return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.fav=(0,c._p)(e);case 1:case"end":return r.stop()}}),r)})))()},handleMakeRecipe:function(e){var t=this;return(0,s.Z)((0,i.Z)().mark((function e(){var r;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Recipe making process started"),e.prev=1,t.axios.defaults.withCredentials=!0,e.next=5,t.axios.post(t.$root.store.server_domain+"/users/"+t.$root.store.username+"meal/add",{recipeId:t.recipe.id});case 5:r=e.sent,200!==r.status&&t.$router.replace("/NotFound"),console.log("Redirecting..."),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()}},created:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var r;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.axios.defaults.withCredentials=!0,console.log("Request URL:",e.$root.store.server_domain+"/recipes/get/"+e.$route.params.recipeId),t.next=5,(0,o.G)(e.$route.params.recipeId);case 5:if(r=t.sent,console.log("Response for recipe:",r),200===r.status||304===r.status){t.next=10;break}return e.$router.replace("/NotFound"),t.abrupt("return");case 10:console.log("Response Data:",r.data),e.recipe=r.data,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log("Error:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()}},u=l;var d=r(1001),v=(0,d.Z)(u,n,a,!1,null,"a00f7dcc",null);const p=v.exports},1530:(e,t,r)=>{"use strict";var n=r(8710).charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},7007:(e,t,r)=>{"use strict";r(4916);var n=r(1470),a=r(8052),i=r(2261),s=r(7293),c=r(5112),o=r(8880),l=c("species"),u=RegExp.prototype;e.exports=function(e,t,r,d){var v=c(e),p=!s((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),f=p&&!s((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return t=!0,null},r[v](""),!t}));if(!p||!f||r){var g=n(/./[v]),x=t(v,""[e],(function(e,t,r,a,s){var c=n(e),o=t.exec;return o===i||o===u.exec?p&&!s?{done:!0,value:g(t,r,a)}:{done:!0,value:c(r,t,a)}:{done:!1}}));a(String.prototype,e,x[0]),a(u,v,x[1])}d&&o(u[v],"sham",!0)}},647:(e,t,r)=>{var n=r(1702),a=r(7908),i=Math.floor,s=n("".charAt),c=n("".replace),o=n("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,d,v){var p=r+e.length,f=n.length,g=u;return void 0!==d&&(d=a(d),g=l),c(v,g,(function(a,c){var l;switch(s(c,0)){case"$":return"$";case"&":return e;case"`":return o(t,0,r);case"'":return o(t,p);case"<":l=d[o(c,1,-1)];break;default:var u=+c;if(0===u)return a;if(u>f){var v=i(u/10);return 0===v?a:v<=f?void 0===n[v-1]?s(c,1):n[v-1]+s(c,1):a}l=n[u-1]}return void 0===l?"":l}))}},7651:(e,t,r)=>{var n=r(6916),a=r(9670),i=r(614),s=r(4326),c=r(2261),o=TypeError;e.exports=function(e,t){var r=e.exec;if(i(r)){var l=n(r,e,t);return null!==l&&a(l),l}if("RegExp"===s(e))return n(c,e,t);throw o("RegExp#exec called on incompatible receiver")}},2261:(e,t,r)=>{"use strict";var n=r(6916),a=r(1702),i=r(1340),s=r(7066),c=r(2999),o=r(2309),l=r(30),u=r(9909).get,d=r(9441),v=r(7168),p=o("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,g=f,x=a("".charAt),h=a("".indexOf),_=a("".replace),m=a("".slice),k=function(){var e=/a/,t=/b*/g;return n(f,e,"a"),n(f,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),C=c.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],b=k||I||C||d||v;b&&(g=function(e){var t,r,a,c,o,d,v,b=this,R=u(b),$=i(e),w=R.raw;if(w)return w.lastIndex=b.lastIndex,t=n(g,w,$),b.lastIndex=w.lastIndex,t;var y=R.groups,E=C&&b.sticky,S=n(s,b),Z=b.source,A=0,F=$;if(E&&(S=_(S,"y",""),-1===h(S,"g")&&(S+="g"),F=m($,b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==x($,b.lastIndex-1))&&(Z="(?: "+Z+")",F=" "+F,A++),r=new RegExp("^(?:"+Z+")",S)),I&&(r=new RegExp("^"+Z+"$(?!\\s)",S)),k&&(a=b.lastIndex),c=n(f,E?r:b,F),E?c?(c.input=m(c.input,A),c[0]=m(c[0],A),c.index=b.lastIndex,b.lastIndex+=c[0].length):b.lastIndex=0:k&&c&&(b.lastIndex=b.global?c.index+c[0].length:a),I&&c&&c.length>1&&n(p,c[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c&&y)for(c.groups=d=l(null),o=0;o<y.length;o++)v=y[o],d[v[0]]=c[v[1]];return c}),e.exports=g},7066:(e,t,r)=>{"use strict";var n=r(9670);e.exports=function(){var e=n(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},2999:(e,t,r)=>{var n=r(7293),a=r(7854),i=a.RegExp,s=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),c=s||n((function(){return!i("a","y").sticky})),o=s||n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:o,MISSED_STICKY:c,UNSUPPORTED_Y:s}},9441:(e,t,r)=>{var n=r(7293),a=r(7854),i=a.RegExp;e.exports=n((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,t,r)=>{var n=r(7293),a=r(7854),i=a.RegExp;e.exports=n((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},4916:(e,t,r)=>{"use strict";var n=r(2109),a=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},5306:(e,t,r)=>{"use strict";var n=r(2104),a=r(6916),i=r(1702),s=r(7007),c=r(7293),o=r(9670),l=r(614),u=r(8554),d=r(9303),v=r(7466),p=r(1340),f=r(4488),g=r(1530),x=r(8173),h=r(647),_=r(7651),m=r(5112),k=m("replace"),C=Math.max,I=Math.min,b=i([].concat),R=i([].push),$=i("".indexOf),w=i("".slice),y=function(e){return void 0===e?e:String(e)},E=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[k]&&""===/./[k]("a","$0")}(),Z=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,t,r){var i=S?"$":"$0";return[function(e,r){var n=f(this),i=u(e)?void 0:x(e,k);return i?a(i,e,n,r):a(t,p(n),e,r)},function(e,a){var s=o(this),c=p(e);if("string"==typeof a&&-1===$(a,i)&&-1===$(a,"$<")){var u=r(t,s,c,a);if(u.done)return u.value}var f=l(a);f||(a=p(a));var x=s.global;if(x){var m=s.unicode;s.lastIndex=0}var k=[];while(1){var E=_(s,c);if(null===E)break;if(R(k,E),!x)break;var S=p(E[0]);""===S&&(s.lastIndex=g(c,v(s.lastIndex),m))}for(var Z="",A=0,F=0;F<k.length;F++){E=k[F];for(var M=p(E[0]),T=C(I(d(E.index),c.length),0),O=[],N=1;N<E.length;N++)R(O,y(E[N]));var D=E.groups;if(f){var K=b([M],O,T,c);void 0!==D&&R(K,D);var L=p(n(a,void 0,K))}else L=h(M,c,T,O,D,a);T>=A&&(Z+=w(c,A,T)+L,A=T+M.length)}return Z+w(c,A)}]}),!Z||!E||S)}}]);
//# sourceMappingURL=608.308e0814.js.map