"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[456],{9456:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-page"},[e.recipes.length>0?t("div",[e._m(0),t("RecipePreviewList",{attrs:{recipes:e.recipes}})],1):t("div",[t("h1",[e._v("No results came back.")]),t("router-link",{attrs:{to:"/search",exact:""}},[e._v("Want to add something to the list?")])],1)])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-header"},[t("h2",[e._v("My Recipes")])])}],c=s(124),a=s(8534),i=s(1639);const o={components:{RecipePreviewList:i.Z},data:function(){return{recipes:[]}},created:function(){var e=this;return(0,a.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUserRecipes();case 2:case"end":return t.stop()}}),t)})))()},methods:{getUserRecipes:function(){var e=this;return(0,a.Z)((0,c.Z)().mark((function t(){var s;return(0,c.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/"+e.$root.store.username+"/recipes");case 3:s=t.sent,console.log(s),e.recipes=s.data,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},u=o;var p=s(1001),l=(0,p.Z)(u,r,n,!1,null,"4388f688",null);const v=l.exports}}]);
//# sourceMappingURL=456.6cfbd4ce.js.map