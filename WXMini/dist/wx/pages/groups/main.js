require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{"5fEd":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("5nAL"),r=e.n(a),s=e("6p5+");r.a.config.errorHandler=function(t){console&&console.error&&console.error(t)},new r.a(s.a).$mount()},"6p5+":function(t,n,e){"use strict";var a=e("PK/g"),r=e("u+2A");var s=function(t){e("p1OX")},o=e("ybqe")(a.a,r.a,s,"data-v-e0e82344",null);n.a=o.exports},"PK/g":function(t,n,e){"use strict";var a=e("Dd8w"),r=e.n(a),s=e("NYxO");n.a={data:function(){return{}},computed:r()({},Object(s.b)({groupList:function(t){return t.group.groupList}})),methods:{startConversation:function(t){var n=this;this.$store.commit("resetCurrentConversation"),this.$store.commit("resetGroup");var e=this.TIM.TYPES.CONV_GROUP+t.groupID;wx.$app.setMessageRead({conversationID:e}),wx.$app.getConversationProfile(e).then(function(t){n.$store.commit("updateCurrentConversation",t.data.conversation),n.$store.dispatch("getMessageList",t.data.conversation.conversationID)});var a="../chat/main?toAccount="+t.name;wx.navigateTo({url:a})}}}},p1OX:function(t,n){},"u+2A":function(t,n,e){"use strict";var a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},t._l(t.groupList,function(n,a){return e("div",{key:n.groupID,staticClass:"group",attrs:{eventid:"0_"+a},on:{click:function(e){t.startConversation(n)}}},[e("div",{staticClass:"avatar"},[e("image",{staticClass:"img",attrs:{src:n.avatar||"/static/images/groups.png"}})]),t._v(" "),e("div",{staticClass:"name"},[t._v("\n      "+t._s(n.name)+"\n    ")]),t._v(" "),e("div",{staticClass:"type"},[t._v("\n      "+t._s(n.type)+"\n    ")])])}))},staticRenderFns:[]};n.a=a}},["5fEd"]);