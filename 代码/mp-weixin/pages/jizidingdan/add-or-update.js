(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jizidingdan/add-or-update"],{"1c67":function(n,e,t){"use strict";(function(n){t("34d7"),t("921b");i(t("66fd"));var e=i(t("a314"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},4663:function(n,e,t){"use strict";var i=t("7c20"),r=t.n(i);r.a},"4f09":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,i,r,a,u){try{var o=n[a](u),s=o.value}catch(c){return void t(c)}o.done?e(s):Promise.resolve(s).then(i,r)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var u=n.apply(e,t);function o(n){a(u,i,r,o,s,"next",n)}function s(n){a(u,i,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("f62b"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{yingyuanmingxing:"",goumaijine:"",huodongmingcheng:"",zhanghao:"",xingming:"",mingxingzhaopian:"",ispay:"",userid:""},user:{},ro:{yingyuanmingxing:!1,goumaijine:!1,huodongmingcheng:!1,zhanghao:!1,xingming:!1,mingxingzhaopian:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=u(i.default.mark((function e(t){var r,a,u,o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(a=e.sent,this.user=a.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=15;break}return this.ruleForm.id=t.id,e.next=13,this.$api.info("jizidingdan",this.ruleForm.id);case 13:a=e.sent,this.ruleForm=a.data;case 15:if(!t.cross){e.next=50;break}u=n.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 18:if((e.t1=e.t0()).done){e.next=50;break}if(o=e.t1.value,"yingyuanmingxing"!=o){e.next=24;break}return this.ruleForm.yingyuanmingxing=u[o],this.ro.yingyuanmingxing=!0,e.abrupt("continue",18);case 24:if("goumaijine"!=o){e.next=28;break}return this.ruleForm.goumaijine=u[o],this.ro.goumaijine=!0,e.abrupt("continue",18);case 28:if("huodongmingcheng"!=o){e.next=32;break}return this.ruleForm.huodongmingcheng=u[o],this.ro.huodongmingcheng=!0,e.abrupt("continue",18);case 32:if("zhanghao"!=o){e.next=36;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,e.abrupt("continue",18);case 36:if("xingming"!=o){e.next=40;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,e.abrupt("continue",18);case 40:if("mingxingzhaopian"!=o){e.next=44;break}return this.ruleForm.mingxingzhaopian=u[o],this.ro.mingxingzhaopian=!0,e.abrupt("continue",18);case 44:if("userid"!=o){e.next=48;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,e.abrupt("continue",18);case 48:e.next=18;break;case 50:this.styleChange();case 51:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},mingxingzhaopianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.mingxingzhaopian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.goumaijine||this.$validate.isIntNumer(this.ruleForm.goumaijine)){n.next=3;break}return this.$utils.msg("购买金额应输入整数"),n.abrupt("return");case 3:if(!this.ruleForm.id){n.next=8;break}return n.next=6,this.$api.update("jizidingdan",this.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,this.$api.add("jizidingdan",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])},"7c20":function(n,e,t){},9659:function(n,e,t){"use strict";var i,r=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}))},a314:function(n,e,t){"use strict";t.r(e);var i=t("9659"),r=t("cb57");for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);t("4663");var u,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"02c374c6",null,!1,i["a"],u);e["default"]=s.exports},cb57:function(n,e,t){"use strict";t.r(e);var i=t("4f09"),r=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=r.a}},[["1c67","common/runtime","common/vendor"]]]);