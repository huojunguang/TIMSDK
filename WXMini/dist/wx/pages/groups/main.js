require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{"5fEd":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("5nAL"),a=n.n(r),o=n("6p5+");a.a.config.errorHandler=function(t){console&&console.error&&console.error(t)},new a.a(o.a).$mount()},"6p5+":function(t,e,n){"use strict";var r=n("PK/g"),a=n("u+2A");var o=function(t){n("p1OX")},s=n("ybqe")(r.a,a.a,o,"data-v-e0e82344",null);e.a=s.exports},"PK/g":function(t,e,n){"use strict";var r=n("Dd8w"),a=n.n(r),o=n("NYxO");e.a={data:function(){return{}},computed:a()({},Object(o.b)({groupList:function(t){return t.group.groupList}})),methods:{startConversation:function(t){var e=this;this.$store.commit("resetCurrentConversation"),this.$store.commit("resetGroup");var n=this.TIM.TYPES.CONV_GROUP+t.groupID;wx.$app.setMessageRead({conversationID:n}),wx.$app.getConversationProfile(n).then(function(t){var n=t.data.conversation;if(e.$store.commit("updateCurrentConversation",n),e.$store.dispatch("getMessageList",n.conversationID),n.type===e.TIM.TYPES.CONV_GROUP){var r=n.conversationID.substring(5);wx.$app.getGroupProfile({groupID:r}).then(function(t){e.$store.commit("updateCurrentGroupProfile",t.data.group)})}});var r="../chat/main?toAccount="+t.name;wx.navigateTo({url:r})}}}},p1OX:function(t,e){},"u+2A":function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.groupList,function(e,r){return n("div",{key:e.groupID,staticClass:"group",attrs:{eventid:"0_"+r},on:{click:function(n){t.startConversation(e)}}},[n("div",{staticClass:"avatar"},[n("image",{staticClass:"img",attrs:{src:e.avatar||"/static/images/groups.png"}})]),t._v(" "),n("div",{staticClass:"name"},[t._v("\n      "+t._s(e.name)+"\n    ")]),t._v(" "),n("div",{staticClass:"type"},[t._v("\n      "+t._s(e.type)+"\n    ")])])}))},staticRenderFns:[]};e.a=r}},["5fEd"]);