require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{"/Fln":function(t,s,i){"use strict";var e=i("xy8G"),a=i("2TTW");var r=function(t){i("JSb8")},c=i("ybqe")(e.a,a.a,r,"data-v-4ca416ca",null);s.a=c.exports},"2TTW":function(t,s,i){"use strict";var e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"bg"},[i("div",{staticClass:"card"},[i("i-row",{attrs:{mpcomid:"2"}},[i("i-col",{attrs:{span:"8",mpcomid:"0"}},[i("div",{staticClass:"avatar"},[i("image",{staticStyle:{width:"80px",height:"80px","border-radius":"8px"},attrs:{src:"/static/images/header.png"}})])]),t._v(" "),i("i-col",{attrs:{span:"16",mpcomid:"1"}},[i("div",{staticClass:"right"},[i("div",{staticClass:"username"},[t._v(t._s(t.userProfile.nick||"未设置"))]),t._v(" "),i("div",{staticClass:"account"},[t._v("帐号："+t._s(t.userProfile.userID))])])])],1)],1),t._v(" "),i("div",{staticClass:"card",staticStyle:{"margin-top":"20px"}},[i("div",{staticClass:"item"},[i("div",{staticClass:"key"},[t._v("性别")]),t._v(" "),i("div",{attrs:{clasa:"value"}},[t._v(t._s(t.userProfile.gender||"未设置"))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"key"},[t._v("生日")]),t._v(" "),i("div",{staticClass:"value"},[t._v(t._s(t.userProfile.birthday||"未设置"))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"key"},[t._v("地址")]),t._v(" "),i("div",{staticClass:"value"},[t._v(t._s(t.userProfile.location||"未设置"))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"key"},[t._v("签名")]),t._v(" "),i("div",{staticClass:"value"},[t._v(t._s(t.userProfile.selfSignature||"未设置"))])])]),t._v(" "),i("div",{staticClass:"revise"},[t.isInBlacklist?t._e():i("button",{staticClass:"btn delete",attrs:{eventid:"0"},on:{click:t.addBlackList}},[t._v("拉黑")]),t._v(" "),t.isInBlacklist?i("button",{staticClass:"btn",attrs:{eventid:"1"},on:{click:t.deleteBlackList}},[t._v("取消拉黑")]):t._e()],1)])},staticRenderFns:[]};s.a=e},"63T1":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("5nAL"),a=i.n(e),r=i("/Fln");new a.a(r.a).$mount()},JSb8:function(t,s){},xy8G:function(t,s,i){"use strict";s.a={data:function(){return{userProfile:{},isInBlacklist:!1}},onUnload:function(){this.userProfile={}},onShow:function(){this.getBlacklist(),this.userProfile=this.$store.state.user.userProfile,this.$store.state.user.blacklist.indexOf(this.userProfile.userID)>-1&&(this.isInBlacklist=!0)},methods:{getBlacklist:function(){var t=this;wx.$app.getBlacklist().then(function(s){t.$store.commit("setBlacklist",s.data)})},addBlackList:function(){var t=this;wx.$app.addToBlacklist({userIDList:[this.userProfile.userID]}).then(function(s){t.$store.commit("showToast",{title:"拉黑成功",icon:"none",duration:1500}),t.isInBlacklist=!0,t.$store.commit("setBlacklist",s.data)}).catch(function(){t.$store.commit("showToast",{title:"拉黑失败",icon:"none",duration:1500})}),this.userProfile=this.$store.state.user.userProfile},deleteBlackList:function(){var t=this;wx.$app.removeFromBlacklist({userIDList:[this.userProfile.userID]}).then(function(s){t.$store.commit("showToast",{title:"取消拉黑成功",icon:"none",duration:1500}),t.$store.commit("setBlacklist",s.data),t.isInBlacklist=!1}).catch(function(){t.$store.commit("showToast",{title:"取消拉黑失败",icon:"none",duration:1500})}),this.userProfile=this.$store.state.user.userProfile}}}}},["63T1"]);