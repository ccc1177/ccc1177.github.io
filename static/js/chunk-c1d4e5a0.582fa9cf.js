(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1d4e5a0"],{"0d0a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",class:[t.myTheme],staticStyle:{overflow:"hidden"}},[a("div",{staticClass:"tab_content"},[a("ul",{staticClass:"list_container",class:t.position_class},t._l(t.tabs,(function(e,s){return a("li",{key:e.id,staticClass:"tab_list",class:[{heightLight:t.actives[s]}],on:{click:function(a){return t.changeTabs(e,s)}}},[a("span",{staticClass:"tab_inner"},[t._v(t._s(e.name))])])})),0)]),t._v(" "),a("div",{staticClass:"chat_content",on:{dblclick:function(e){t.backgroundPic=!t.backgroundPic}}},t._l(t.tabs,(function(e,s){return a("div",{key:e.id,ref:"drawer",refInFor:!0},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.actives[s],expression:"actives[index]"}],staticClass:"contact_person"},[a("span",{staticClass:"show_pic"},[a("ul",t._l(t.background_class,(function(s){return a("li",{directives:[{name:"show",rawName:"v-show",value:t.backgroundPic,expression:"backgroundPic"}],key:s.id,class:s.className,on:{click:function(a){return t.background_chose(e,s.className)}}})})),0)]),t._v(" "),t._t("default"),t._v(" "),a("my-talking",{attrs:{theme:t.theme,background:e.img,item:e,personalpic:t.personalpic}})],2)])})),0)])},n=[],i=(a("ac6a"),a("2b0e")),c=a("30cb"),o={props:{tabs:Array,position:String,theme:String,personalpic:String},data:function(){return{actives:[],test:[!0],is_left:!1,background_class:[{id:1,className:"background1"},{id:2,className:"background2"},{id:3,className:"background3"}],backgroundPic:!1}},components:{myTalking:c["default"]},computed:{position_class:function(){return"is_".concat(this.position)},myTheme:function(){return"is_".concat(this.theme)}},created:function(){var t=this;this.tabs.forEach((function(e,a){t.actives[a]=!1})),this.actives[0]=!0},mounted:function(){},methods:{changeTabs:function(t,e){for(var a=0;a<this.actives.length;a++)this.actives[a]=!1;i["default"].set(this.actives,e,!0)},background_chose:function(t,e){t.img=e}}},r=o,l=(a("fc3b"),a("2877")),u=Object(l["a"])(r,s,n,!1,null,"fb3a6d76",null);e["default"]=u.exports},"30cb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",class:[t.themeClass,t.backgroundClass]},[a("div",{ref:"record",staticClass:"chat_record"}),t._v(" "),a("span",{staticClass:"active_name"},[t._v("\n    "+t._s(t.item.name)+"\n  ")]),t._v(" "),a("div",{staticClass:"msg_input"},[a("el-input",{staticClass:"mesage",attrs:{placeholder:"请输入内容"},on:{change:t.sent},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},[a("i",{staticClass:"el-input__icon el-icon-s-custom",attrs:{slot:"prefix"},slot:"prefix"})])],1)])},n=[],i=(a("ac6a"),a("7f7f"),a("bc3a")),c=a.n(i),o={components:{},props:{theme:String,linkname:Array,background:String,personalpic:String,item:Object},data:function(){return{input:"",message:"",record:[],storage:[]}},computed:{themeClass:function(){return"theme_".concat(this.theme)},backgroundClass:function(){return"".concat(this.background)}},mounted:function(){var t=this;if(localStorage.myRecord){var e=this.item.name,a=JSON.parse(localStorage.myRecord);a[e]&&a[e].forEach((function(e){e["self"]?t.$mynotify({message:"".concat(e["self"]),type:"right",className:"main",Pic:t.personalpic,theme:t.theme,whereDiv:t.$refs.record}):t.$mynotify({message:"".concat(e["answer"]),type:"left",className:"main",theme:t.theme,whereDiv:t.$refs.record})}))}},methods:{sent:function(){this.$mynotify({message:"".concat(this.input),type:"right",className:"main",Pic:this.personalpic,theme:this.theme,whereDiv:this.$refs.record}),this.dataStorage("self",this.input),this.getAnswer(),document.querySelector(".chat_record").scrollTop=document.querySelector(".chat_record").scrollHeight,this.input=""},getAnswer:function(){var t=this;c()({method:"get",url:"https://www.tuling123.com/openapi/api?key=6c2cfaf7a7f088e843b550b0c5b89c26&&info=".concat(this.input)}).then((function(e){t.answer=e.data.text;var a=t.answer.length/4*1e3;setTimeout((function(){t.$mynotify({message:"".concat(t.answer),type:"left",className:"main",theme:t.theme,whereDiv:t.$refs.record})}),a)})),this.dataStorage("answer",this.answer)},dataStorage:function(t,e){if("undefined"!==typeof Storage){var a=this.item.name,s={};s[t]=e;var n=localStorage.getItem("myRecord");if(null===n){var i={};i[a]=[],i[a].push(s);var c=JSON.stringify(i);localStorage.setItem("myRecord",c)}else{var o=JSON.parse(n);if(o[a]){o[a].push(s);var r=JSON.stringify(o);localStorage.setItem("myRecord",r)}else{o[a]=[],o[a].push(s);var l=JSON.stringify(o);localStorage.setItem("myRecord",l)}}}}}},r=o,l=(a("d7ef"),a("2877")),u=Object(l["a"])(r,s,n,!1,null,"63502128",null);e["default"]=u.exports},3196:function(t,e,a){},"412d":function(t,e,a){"use strict";a("3196")},"6a0d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",class:[t.theme]},[a("div",{ref:"drawer",staticClass:"header"},[a("div",{staticClass:"left_header"},[a("el-popover",{attrs:{placement:"bottom",width:"150",trigger:"focus",content:""}},[t.contactName?a("span",[t._v(t._s(t.linkName))]):a("span",[t._v("暂无搜查结果")]),t._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{slot:"reference","prefix-icon":"el-icon-search",placeholder:"查找联系人"},on:{blur:function(e){t.contactName=!1},focus:t.seachLinkman},slot:"reference",model:{value:t.linkName,callback:function(e){t.linkName=e},expression:"linkName"}})],1),t._v(" "),a("span",{staticClass:"addPerson",on:{click:t.addPerson}},[a("span",{staticClass:"el-icon-plus"})]),t._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:t.addperson_input,expression:"addperson_input"}],staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"添加人姓名","show-word-limit":""},on:{change:t.submit_addPerson},model:{value:t.tabs_name,callback:function(e){t.tabs_name=e},expression:"tabs_name"}}),t._v(" "),a("span",{staticStyle:{"margin-left":"10px"},on:{click:t.themeChange}},["light"===t.theme?a("i",{staticClass:"el-icon-sunny"}):a("i",{staticClass:"el-icon-moon"})])],1),t._v(" "),a("div",{staticClass:"Pic_container"},[a("div",{staticClass:"item_bock head_p"},[a("div",{staticClass:"head_img",on:{click:function(e){t.changeBox=!t.changeBox}}},[a("img",{attrs:{src:t.userInfo.avatar}})]),t._v(" "),a("div",{staticClass:"setting_right",on:{click:function(e){return e.stopPropagation(),t.uploadHeadImg(e)}}}),t._v(" "),a("transition-group",{attrs:{name:"test"}},[a("input",{directives:[{name:"show",rawName:"v-show",value:t.changeBox,expression:"changeBox"}],key:1,staticClass:"hiddenInput",attrs:{type:"file",accept:"image/*"},on:{change:t.handleFile}})])],1)]),t._v(" "),a("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"main"}})]),t._v(" "),a("div",{staticClass:"tab_container"},[a("myTabs",{attrs:{tabs:t.tabs,position:t.position,theme:t.theme,personalpic:t.userInfo.avatar}})],1),t._v(" "),a("div",{attrs:{id:"main"}})])},n=[],i=(a("7f7f"),a("0d0a")),c=a("f00d"),o=a.n(c),r={components:{myTabs:i["default"]},data:function(){return{tabPosition:"left",editable:!0,tabs:[{name:"张三",isActive:!0,img:""},{name:"李四",isActive:!1,img:""},{name:"老王",isActive:!1,img:""}],test:12,search:"",linkName:"",title:"",position:"left",theme:"light",choseBoxOpen:!1,addperson_input:!1,tabs_name:"",userInfo:{avatar:o.a},contactName:!1,changeBox:!1}},computed:{},mounted:function(){},methods:{seachLinkman:function(){for(var t=0;t<this.tabs.length;t++)-1!==this.linkName.indexOf(this.tabs[t].name)&&(this.contactName=!0)},themeChange:function(){"light"===this.theme?this.theme="dark":this.theme="light"},addPerson:function(){this.addperson_input=!this.addperson_input},submit_addPerson:function(){this.tabs.push({name:this.tabs_name,isActive:!1}),this.tabs_name="",this.choseBoxOpen=!this.choseBoxOpen},uploadHeadImg:function(){this.$el.querySelector(".hiddenInput").click()},handleFile:function(t){var e=this,a=t.target||t.srcElement,s=a.files[0],n=new FileReader;n.onload=function(t){var a=t.target||t.srcElement;e.userInfo.avatar=a.result},n.readAsDataURL(s),this.changeBox=!this.changeBox},reference:function(){this.slot="reference"}}},l=r,u=(a("412d"),a("2877")),d=Object(u["a"])(l,s,n,!1,null,"118c77e2",null);e["default"]=d.exports},"9d7a":function(t,e,a){},d7ef:function(t,e,a){"use strict";a("9d7a")},dc22:function(t,e,a){},f00d:function(t,e,a){t.exports=a.p+"static/img/imgUrl.d8ece577.jpg"},fc3b:function(t,e,a){"use strict";a("dc22")}}]);