(()=>{var e={1639:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=function(){var e=this,t=e._self._c;return t("b-container",[t("b-row",[t("b-col",[t("h3",[e._v(e._s(e.title))])])],1),t("b-row",e._l(e.recipes,(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},s=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-preview"},[t("div",{staticClass:"recipe-body"},[t("router-link",{attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}},nativeOn:{click:function(t){return e.markAsViewed(e.recipe.id)}}},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})]),t("button",{staticClass:"fav-button",on:{click:function(t){return e.handleFavClick(e.recipe.id,t)}}},[t("img",{directives:[{name:"show",rawName:"v-show",value:!e.fav,expression:"!fav"}],staticClass:"fav-icon",attrs:{src:r(4676),alt:"Favorite"}}),t("img",{directives:[{name:"show",rawName:"v-show",value:e.fav,expression:"fav"}],staticClass:"fav-icon",attrs:{src:r(7312),alt:"Favorited"}})]),e.viewed?t("img",{staticClass:"viewed-icon",attrs:{src:r(923),alt:"Viewed"}}):e._e()],1),t("div",{staticClass:"recipe-footer"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),t("ul",{staticClass:"recipe-overview"},[t("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),t("li",[e._v(e._s(e.recipe.popularity)+" likes")]),e.recipe.vegetarian?t("li",[t("img",{staticClass:"icon",attrs:{src:r(2574),alt:"Vegetarian"}})]):e._e(),e.recipe.vegan?t("li",[t("img",{staticClass:"icon",attrs:{src:r(8380),alt:"Vegan"}})]):e._e(),e.recipe.glutenFree?t("li",[t("img",{staticClass:"icon",attrs:{src:r(3204),alt:"Gluten Free"}})]):e._e()])])])},o=[],i=r(124),c=r(8534),u=r(3099);const l={data:function(){return{viewed:!1,fav:!1}},created:function(){var e=this;return(0,c.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,u.S3)(e.recipe.id);case 2:return e.fav=t.sent,t.next=5,(0,u.ek)(e.recipe.id);case 5:e.viewed=t.sent;case 6:case"end":return t.stop()}}),t)})))()},props:{recipe:{type:Object,required:!0}},methods:{handleFavClick:function(e,t){t.stopPropagation(),this.$root.store.username?this.fav=(0,u._p)(e):alert("You must be logged in to favorite a recipe.")},markAsViewed:function(e){var t=this;return(0,c.Z)((0,i.Z)().mark((function r(){var n;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,console.log("markAsViewed called"),r.next=4,t.axios.post(t.$root.store.server_domain+"/users/"+t.$root.store.username+"/view",{recipeId:e});case 4:n=r.sent,!0===n.data?(t.viewed=!0,console.log("successfully marked as viewed")):console.error("Failed to mark as viewed:",n.message),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}}},d=l;var p=r(1001),m=(0,p.Z)(d,a,o,!1,null,"b1a38398",null);const f=m.exports,v={name:"RecipePreviewList",components:{RecipePreview:f},props:{title:{type:String,required:!1},recipes:{type:Array,required:!0,default:function(){return[]}}}},g=v;var h=(0,p.Z)(g,n,s,!1,null,"ebfb439a",null);const b=h.exports},5796:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"column"},[e._t("left-column")],2),t("div",{staticClass:"column"},[e._t("right-column")],2)])},s=[];const a={name:"TwoColumnsLayout"},o=a;var i=r(1001),c=(0,i.Z)(o,n,s,!1,null,"47e0ef5b",null);const u=c.exports},1073:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v("Login")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[t("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[t("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[e._v(" Username is required ")])],1),t("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[t("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[e._v(" Password is required ")])],1),t("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("Login")]),t("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),t("router-link",{attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},s=[],a=r(124),o=r(8534),i=(r(7658),r(379)),c=r(3099);const u={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:i.C1},password:{required:i.C1}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},Login:function(){var e=this;return(0,o.Z)((0,a.Z)().mark((function t(){var r,n;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/login",{username:e.form.username,password:e.form.password},{withCredentials:!0});case 3:return r=t.sent,console.log("Response:",r),console.log("Response Data:",r.data),console.log("Response Headers:",r.headers),console.log("Status:",r.status),console.log("Status Text:",r.statusText),console.log("Cookies:",document.cookie),n=e.$cookies.get("username"),console.log("Username cookie:",n),e.$root.loggedIn=!0,console.log(e.$root.store.login),e.$root.store.login(e.form.username),t.next=17,(0,c._l)();case 17:return e.$root.store.favorites=t.sent,t.next=20,(0,c.o9)();case 20:e.$root.store.viewed=t.sent,console.log(e.$root.store.favorites),console.log(e.$root.store.viewed),e.$router.push("/"),t.next=30;break;case 26:t.prev=26,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 30:case"end":return t.stop()}}),t,null,[[0,26]])})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},l=u;var d=r(1001),p=(0,d.Z)(l,n,s,!1,null,"0d1f240c",null);const m=p.exports},2658:(e,t,r)=>{"use strict";r(6992),r(8674),r(9601),r(7727),r(9554),r(1539),r(4747);var n=r(144),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{staticClass:"nava-link",attrs:{to:{name:"main"}}},[e._v("Home")]),t("router-link",{staticClass:"nava-link",attrs:{to:{name:"search"}}},[e._v("Search")]),e.$root.store.username?t("span",[t("div",{staticClass:"right-align"},[e._v(" Welcome "+e._s(e.$root.store.username)+": "),t("b-nav-item-dropdown",{attrs:{id:"my-nav-dropdown",text:"Personal","toggle-class":"nav-link-custom",right:""}},[t("router-link",{staticClass:"dropdown-item-custom",attrs:{to:"/favorites",tag:"b-dropdown-item"}},[e._v("Favorites")]),t("router-link",{staticClass:"dropdown-item-custom",attrs:{to:"/my-recipes",tag:"b-dropdown-item"}},[e._v("My Recipes")]),t("router-link",{staticClass:"dropdown-item-custom",attrs:{to:"/family-recipes",tag:"b-dropdown-item"}},[e._v("Family Recipes")])],1),t("button",{staticClass:"new-recipe-button",on:{click:e.showModal}},[e._v("New Recipe")]),t("router-link",{staticClass:"nava-link",attrs:{to:{name:"meal-plan"}}},[e._v("Next Meal: "+e._s(this.numOfRecipes)+" Recipes")]),t("button",{staticClass:"logout-button",on:{click:e.Logout}},[e._v("Logout")])],1)]):t("span",[t("div",{staticClass:"right-align-not-reg"},[e._v(" Hello Guest: "),t("router-link",{staticClass:"nava-link",attrs:{to:{name:"register"}}},[e._v("Register")]),t("router-link",{staticClass:"nava-link",attrs:{to:{name:"login"}}},[e._v("Login")])],1)])],1),t("div",{staticClass:"content"},[t("transition",{attrs:{name:"modal-fade"}},[e.isModalVisible?t("div",{staticClass:"recipe-modal"},[t("NewRecipeModal",{attrs:{close:e.closeModal}})],1):e._e()]),e.isModalVisible?e._e():t("router-view",{attrs:{updateNumOfRecipes:e.updateNumOfRecipes}})],1)])},a=[],o=r(124),i=r(8534),c=(r(7658),r(8309),r(9753),r(2222),r(7042),function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:"recipeModal",name:"recipeModal",title:"Create New Recipe","hide-footer":""},on:{show:e.resetForm}},[t("div",{staticClass:"custom-modal-content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t("b-card",{staticClass:"mb-4 recipe-details-card",attrs:{"no-body":""}},[t("b-card-header",{staticClass:"recipe-details-header text-white"},[e._v("Recipe Details")]),t("b-card-body",[t("b-form-group",{attrs:{label:"Title of Recipe","label-for":"title-input"}},[t("b-form-input",{attrs:{id:"title-input",required:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("b-form-group",{attrs:{label:"Image (URL)","label-for":"image-input"}},[t("b-form-input",{attrs:{id:"image-input",required:"",pattern:"https?://.+?\\.(jpg|jpeg|png|gif|svg)$",title:"Please enter a valid image URL (e.g., http://example.com/image.jpg)"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),t("b-form-group",{attrs:{label:"Make Time (In minutes)","label-for":"readyInMinutes-input"}},[t("b-form-input",{attrs:{id:"readyInMinutes-input",type:"number",required:""},model:{value:e.form.readyInMinutes,callback:function(t){e.$set(e.form,"readyInMinutes",t)},expression:"form.readyInMinutes"}})],1),t("b-form-group",{attrs:{label:"Number of Servings","label-for":"servings-input"}},[t("b-form-input",{attrs:{id:"servings-input",type:"number",required:""},model:{value:e.form.servings,callback:function(t){e.$set(e.form,"servings",t)},expression:"form.servings"}})],1)],1)],1),t("b-card",{staticClass:"mb-4 instructions-card",attrs:{"no-body":""}},[t("b-card-header",{staticClass:"instructions-header text-white"},[e._v("Instructions")]),t("b-card-body",[e._l(e.form.instructions,(function(r,n){return t("div",{key:n,staticClass:"mb-4"},[t("b-form-group",{attrs:{label:"Step "+(n+1),"label-for":"instruction-"+n}},[t("b-form-input",{attrs:{id:"instruction-"+n,required:""},model:{value:r.step,callback:function(t){e.$set(r,"step",t)},expression:"instruction.step"}})],1),e._l(r.ingredients,(function(r,s){return t("div",{key:"ingredient-"+n+"-"+s,staticClass:"mb-2"},[t("b-form-group",{attrs:{label:"Ingredient "+(s+1),"label-for":"ingredient-"+n+"-"+s}},[t("b-form-input",{attrs:{placeholder:"Ingredient "+(s+1),required:""},model:{value:r.name,callback:function(t){e.$set(r,"name",t)},expression:"ingredient.name"}})],1),t("b-form-group",{attrs:{label:"Amount ","label-for":"amount-"+n+"-"+s}},[t("b-form-input",{attrs:{type:"number",placeholder:"Amount",required:""},model:{value:r.amount,callback:function(t){e.$set(r,"amount",t)},expression:"ingredient.amount"}})],1),t("b-form-group",{attrs:{label:"Unit ","label-for":"unit-"+n+"-"+s}},[t("b-form-input",{attrs:{placeholder:"Unit",required:""},model:{value:r.unit,callback:function(t){e.$set(r,"unit",t)},expression:"ingredient.unit"}})],1)],1)})),e._l(r.equipment,(function(r,s){return t("div",{key:"equipment-"+n+"-"+s,staticClass:"mb-2"},[t("b-form-group",{attrs:{label:"Equipment "+(s+1),"label-for":"equipment-"+n+"-"+s}},[t("b-form-input",{attrs:{placeholder:"Equipment "+(s+1),required:""},model:{value:r.name,callback:function(t){e.$set(r,"name",t)},expression:"equipment.name"}})],1)],1)})),t("b-button",{attrs:{variant:"secondary"},on:{click:function(t){return e.addIngredient(n)}}},[e._v("Add Ingredient to this Step")]),t("br"),t("br"),t("b-button",{attrs:{variant:"secondary"},on:{click:function(t){return e.addEquipment(n)}}},[e._v("Add Equipment to this Step")])],2)})),t("b-button",{attrs:{variant:"secondary"},on:{click:e.addInstruction}},[e._v("Add Step")])],2)],1),t("b-card",{staticClass:"mb-4 dietary-options-card",attrs:{"no-body":""}},[t("b-card-header",{staticClass:"dietary-options-header text-white"},[e._v("Dietary Options")]),t("b-card-body",[t("div",{staticClass:"form-check mb-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.vegetarian,expression:"form.vegetarian"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"vegetarian"},domProps:{checked:Array.isArray(e.form.vegetarian)?e._i(e.form.vegetarian,null)>-1:e.form.vegetarian},on:{change:function(t){var r=e.form.vegetarian,n=t.target,s=!!n.checked;if(Array.isArray(r)){var a=null,o=e._i(r,a);n.checked?o<0&&e.$set(e.form,"vegetarian",r.concat([a])):o>-1&&e.$set(e.form,"vegetarian",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.form,"vegetarian",s)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"vegetarian"}},[e._v("Vegetarian")])]),t("div",{staticClass:"form-check mb-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.vegan,expression:"form.vegan"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"vegan"},domProps:{checked:Array.isArray(e.form.vegan)?e._i(e.form.vegan,null)>-1:e.form.vegan},on:{change:function(t){var r=e.form.vegan,n=t.target,s=!!n.checked;if(Array.isArray(r)){var a=null,o=e._i(r,a);n.checked?o<0&&e.$set(e.form,"vegan",r.concat([a])):o>-1&&e.$set(e.form,"vegan",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.form,"vegan",s)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"vegan"}},[e._v("Vegan")])]),t("div",{staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.glutenFree,expression:"form.glutenFree"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"glutenFree"},domProps:{checked:Array.isArray(e.form.glutenFree)?e._i(e.form.glutenFree,null)>-1:e.form.glutenFree},on:{change:function(t){var r=e.form.glutenFree,n=t.target,s=!!n.checked;if(Array.isArray(r)){var a=null,o=e._i(r,a);n.checked?o<0&&e.$set(e.form,"glutenFree",r.concat([a])):o>-1&&e.$set(e.form,"glutenFree",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.form,"glutenFree",s)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"glutenFree"}},[e._v("Gluten Free")])])])],1),t("div",{staticClass:"d-flex justify-content-end"},[t("b-button",{staticClass:"create-button",attrs:{type:"submit",variant:"primary"}},[e._v("Create Recipe")]),t("b-button",{staticClass:"ml-2",attrs:{variant:"secondary"},on:{click:e.closeModal}},[e._v("Close")])],1)],1),t("b-toaster",{attrs:{name:"toaster","append-toast":!0,placement:"top-center"}})],1)])}),u=[];r(7327),r(3210),r(9805);const l={name:"NewRecipeModal",props:{close:{type:Function,required:!0}},data:function(){return{form:{title:"",image:"",readyInMinutes:"",servings:"",instructions:[{step:"",ingredients:[],equipment:[]}],vegetarian:!1,vegan:!1,glutenFree:!1}}},methods:{resetForm:function(){this.form={username:$root.store.username,title:"",image:"",readyInMinutes:"",servings:"",instructions:[{step:"",ingredients:[]}],vegetarian:!1,vegan:!1,glutenFree:!1}},addIngredient:function(e){this.form.instructions[e].ingredients.push({name:"",amount:"",unit:""})},addEquipment:function(e){this.form.instructions[e].equipment.push({name:""})},addInstruction:function(){this.form.instructions.push({step:"",ingredients:[],equipment:[]})},closeModal:function(){this.close()},submitForm:function(){var e=this;return(0,i.Z)((0,o.Z)().mark((function t(){var r;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.form.instructions.forEach((function(e){e.ingredients=e.ingredients.filter((function(e){return""!==e.name.trim()}))})),e.form.instructions=e.form.instructions.filter((function(e){return""!==e.step.trim()})),console.log("Form submitted with data:",e.form),t.next=5,e.axios.post(e.$root.store.server_domain+"/users/"+e.$root.store.username+"/recipes",{username:e.$root.store.username,title:e.form.title,image:e.form.image,email:e.form.email,readyInMinutes:e.form.readyInMinutes,servings:e.form.servings,instructions:e.form.instructions,vegetarian:e.form.vegetarian,vegan:e.form.vegan,glutenFree:e.form.glutenFree});case 5:r=t.sent,!0===r.response.data.success?(e.$bvToast.toast("Recipe Created",{title:"Success",variant:"success",solid:!0,toaster:"b-toaster-top-center"}),console.log("Recipe created successfully")):(e.$bvToast.toast("Failed to Create Recipe",{title:"Error",variant:"danger",solid:!0,toaster:"b-toaster-top-center"}),console.error("Failed to add recipe:",r.response.data.message)),e.resetForm();case 8:case"end":return t.stop()}}),t)})))()}}},d=l;var p=r(1001),m=(0,p.Z)(d,c,u,!1,null,"1a0ef7ed",null);const f=m.exports;var v=r(3099);const g={name:"App",components:{NewRecipeModal:f},data:function(){return{isModalVisible:!1,numOfRecipes:2}},methods:{Logout:function(){var e=this;return(0,i.Z)((0,o.Z)().mark((function t(){var r;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$root.store.logout(),e.$root.toast("Logout","User logged out successfully","success"),localStorage.clear(),t.next=5,e.axios.post(e.$root.store.server_domain+"/logout");case 5:r=t.sent,console.log("logged out:",r),e.$router.push("/")["catch"]((function(){e.$forceUpdate()}));case 8:case"end":return t.stop()}}),t)})))()},showModal:function(){this.isModalVisible=!0,console.log("modal opened")},closeModal:function(){this.isModalVisible=!1,console.log("modal closed")},updateNumOfRecipes:function(e){console.log("updating number of recipes"),this.numOfRecipes=e},checkLoginStatus:function(){var e=this;return(0,i.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!e.$root.store.username){t.next=8;break}return t.next=4,(0,v._l)();case 4:return e.$root.store.favorites=t.sent,t.next=7,(0,v.o9)();case 7:e.$root.store.viewed=t.sent;case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},created:function(){var e=this;return(0,i.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.checkLoginStatus();case 1:case"end":return t.stop()}}),t)})))()}},h=g;var b=(0,p.Z)(h,s,a,!1,null,null,null);const w=b.exports;var y=r(1939),k=r.n(y),x=r(9669),_=r.n(x),C=r(7625),$=r.n(C),Z=r(6123),R=r.n(Z),F=(r(8783),r(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",[t("TwoColumnsLayout",{scopedSlots:e._u([{key:"left-column",fn:function(){return[t("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{recipes:e.randomRecipes,title:"Explore these recipes"}}),t("div",{staticClass:"button-container"},[t("b-button",{staticClass:"button-element",attrs:{variant:"dark"},on:{click:e.fetchNewRecipes}},[e._v("More")])],1)]},proxy:!0},{key:"right-column",fn:function(){return[e.$root.store.username?t("div",[t("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{recipes:e.lastRecipes,title:"Last viewed recipes"}})],1):t("div",{staticClass:"login-container"},[t("Login")],1)]},proxy:!0}])})],1)])}),L=[],S=r(1639),M=r(5796),q=r(1073);const A={components:{RecipePreviewList:S.Z,TwoColumnsLayout:M.Z,Login:q["default"]},data:function(){return{randomRecipes:[],lastRecipes:[]}},created:function(){var e=this;return(0,i.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchNewRecipes();case 2:return t.next=4,e.getLastViewedRecipes();case 4:case"end":return t.stop()}}),t)})))()},methods:{fetchNewRecipes:function(){var e=this;return(0,i.Z)((0,o.Z)().mark((function t(){var r;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/random");case 3:r=t.sent,console.log(r),e.randomRecipes=r.data,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getLastViewedRecipes:function(){var e=this;return(0,i.Z)((0,o.Z)().mark((function t(){var r;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/"+e.$root.store.username+"/lastViewed");case 3:r=t.sent,console.log(r),e.lastRecipes=r.data.recipes,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},P=A;var I=(0,p.Z)(P,F,L,!1,null,"551298b6",null);const E=I.exports;var N=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},O=[],T={},j=(0,p.Z)(T,N,O,!1,null,null,null);const V=j.exports;var U=[{path:"/",name:"main",component:E},{path:"/register",name:"register",component:function(){return r.e(880).then(r.bind(r,5880))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(r.bind(r,1073))}},{path:"/search",name:"search",component:function(){return r.e(58).then(r.bind(r,9458))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return r.e(608).then(r.bind(r,608))}},{path:"*",name:"notFound",component:V},{path:"/about",name:"about",component:function(){return r.e(702).then(r.bind(r,2702))}},{path:"/results",name:"results",component:function(){return r.e(538).then(r.bind(r,4538))}},{path:"/favorites",name:"favorites",component:function(){return r.e(463).then(r.bind(r,4463))}},{path:"/my-recipes",name:"my-recipes",component:function(){return r.e(456).then(r.bind(r,9456))}},{path:"/family-recipes",name:"family-recipes",component:function(){return r.e(432).then(r.bind(r,432))}},{path:"/make-recipe/:recipeId",name:"make-recipe",component:function(){return r.e(162).then(r.bind(r,9162))}},{path:"/meal-plan",name:"meal-plan",component:function(){return r.e(829).then(r.bind(r,8829))}}];const D=U;var H=r(8345),G=r(8620),B=(r(7024),r(9301)),Y=r(7563),K=r(5053),W=r(1869),z=r(8672),J=r(4500),Q=r(8348),X=r(4063),ee=r(4167),te=r(8824);n["default"].use($()),n["default"].use(R()),_().defaults.withCredentials=!0,n["default"].use(H.ZP);var re=new H.ZP({routes:D});[B.E,Y.w6,K.g,W.SY,z.xL,J.u3,Q.v5,X.F,ee.m$,te.A6].forEach((function(e){return n["default"].use(e)})),n["default"].use(G.ZP),_().defaults.withCredentials=!0,_().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),_().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(k(),_()),n["default"].config.productionTip=!1;var ne={server_domain:"https://lior-noa.cs.bgu.ac.il",username:localStorage.username,favorites:[],viewed:[],login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(ne),new n["default"]({router:re,data:function(){return{store:ne}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(w)}}).$mount("#app")},9805:(e,t,r)=>{"use strict";r.d(t,{G:()=>a});var n=r(124),s=r(8534);function a(e){return o.apply(this,arguments)}function o(){return o=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.axios.get(this.$root.store.server_domain+"/recipes/get/"+t);case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",{});case 11:case"end":return e.stop()}}),e,this,[[0,7]])}))),o.apply(this,arguments)}},3099:(e,t,r)=>{"use strict";r.d(t,{S3:()=>u,_l:()=>a,_p:()=>m,ek:()=>d,o9:()=>i});var n=r(124),s=r(8534);r(6699),r(2023);function a(){return o.apply(this,arguments)}function o(){return o=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.axios.get(this.$root.store.server_domain+"/users/"+this.$root.store.username+"/favoritesID");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",{});case 11:case"end":return e.stop()}}),e,this,[[0,7]])}))),o.apply(this,arguments)}function i(){return c.apply(this,arguments)}function c(){return c=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.axios.get(this.$root.store.server_domain+"/users/"+this.$root.store.username+"/view");case 3:return t=e.sent,console.log(t),e.abrupt("return",t.data);case 8:return e.prev=8,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,this,[[0,8]])}))),c.apply(this,arguments)}function u(e){return l.apply(this,arguments)}function l(){return l=(0,s.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$root.store.username){e.next=2;break}return e.abrupt("return",this.$root.store.favorites.includes(t));case 2:return e.abrupt("return",!1);case 3:case"end":return e.stop()}}),e,this)}))),l.apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return p=(0,s.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$root.store.username){e.next=2;break}return e.abrupt("return",this.$root.store.viewed.includes(t));case 2:return e.abrupt("return",!1);case 3:case"end":return e.stop()}}),e,this)}))),p.apply(this,arguments)}function m(e){return f.apply(this,arguments)}function f(){return f=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("addToFav called"),e.next=4,this.axios.post(this.$root.store.server_domain+"/users/"+this.$root.store.username+"/favorites",{recipeId:t});case 4:if(r=e.sent,!0!==r.data){e.next=10;break}return console.log("successfully added to favorites"),e.abrupt("return",!0);case 10:return console.error("Failed to add to favorites:",r.message),e.abrupt("return",!1);case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,this,[[0,14]])}))),f.apply(this,arguments)}},7625:()=>{},7312:(e,t,r)=>{"use strict";e.exports=r.p+"img/faved.769889bd.png"},3204:(e,t,r)=>{"use strict";e.exports=r.p+"img/gluten-free.fd95cd2f.png"},2574:(e,t,r)=>{"use strict";e.exports=r.p+"img/no-meat.417219ed.png"},4676:(e,t,r)=>{"use strict";e.exports=r.p+"img/to-fav.16a83bce.png"},8380:(e,t,r)=>{"use strict";e.exports=r.p+"img/vegan.695b5284.png"},923:(e,t,r)=>{"use strict";e.exports=r.p+"img/viewed.a4216e22.png"}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,s,a)=>{if(!n){var o=1/0;for(l=0;l<e.length;l++){for(var[n,s,a]=e[l],i=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(l--,1);var u=s();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,s,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{58:"ea86e692",162:"072c4f7f",432:"5c94e6ca",456:"6cfbd4ce",463:"c5d543eb",538:"1f2d5df0",608:"308e0814",702:"f1b7660d",829:"5a5becae",880:"9a0b03e5"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{58:"70a41dde",162:"47107111",432:"81fca0ad",456:"9b92a546",463:"8a90b1f4",538:"ad555a6d",608:"88a5855e",702:"23a71068",829:"0a90cdea",880:"91f86124"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";r.l=(n,s,a,o)=>{if(e[n])e[n].push(s);else{var i,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=n),e[n]=[s];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(m);var s=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,s)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=i,a.parentNode&&a.parentNode.removeChild(a),s(c)}};return a.onerror=a.onload=o,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var s=r[n],a=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===e||a===t))return s}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){s=o[n],a=s.getAttribute("data-href");if(a===e||a===t)return s}},n=n=>new Promise(((s,a)=>{var o=r.miniCssF(n),i=r.p+o;if(t(o,i))return s();e(n,i,null,s,a)})),s={143:0};r.f.miniCss=(e,t)=>{var r={58:1,162:1,432:1,456:1,463:1,538:1,608:1,702:1,829:1,880:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=n(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var s=r.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var a=new Promise(((r,n)=>s=e[t]=[r,n]));n.push(s[2]=a);var o=r.p+r.u(t),i=new Error,c=n=>{if(r.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,s[1](i)}};r.l(o,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var s,a,[o,i,c]=n,u=0;if(o.some((t=>0!==e[t]))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(c)var l=c(r)}for(t&&t(n);u<o.length;u++)a=o[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[998],(()=>r(2658)));n=r.O(n)})();
//# sourceMappingURL=app.58b55df0.js.map