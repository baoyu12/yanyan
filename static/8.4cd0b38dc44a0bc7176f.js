webpackJsonp([8],{"58ER":function(t,s){},"5m4/":function(t,s){},OmHr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={name:"ElementCountdownNum",props:{fontColor:{type:String},showNum:{type:[Number,String]},showTxt:{type:String}},data:function(){return{}},filters:{leftDay:function(t){var s=String(t);return s.length>2?s.substr(0,1):0},leftDate:function(t){var s=String(t);return s.length>2?s.substr(1,1):s.length<2?0:s.substr(0,1)},rightDate:function(t){return String(t).slice(-1)}},methods:{}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:["c-wrap",{"c-day-wrap":String(t.showNum).length>2}]},[e("div",{directives:[{name:"show",rawName:"v-show",value:String(t.showNum).length>2,expression:"String(showNum).length > 2"}],staticClass:"c-num c-day-left"},[e("div",{staticClass:"flex-wrap"},[e("div",{staticClass:"next-num",style:"color:"+t.fontColor},[t._v(t._s(t._f("leftDay")(t.showNum)))]),t._v(" "),e("div",{staticClass:"curr-num",style:"color:"+t.fontColor},[t._v(t._s(t._f("leftDay")(t.showNum)))])])]),t._v(" "),e("div",{staticClass:"c-num c-left"},[e("div",{staticClass:"flex-wrap"},[e("div",{staticClass:"next-num",style:"color:"+t.fontColor},[t._v(t._s(t._f("leftDate")(t.showNum)))]),t._v(" "),e("div",{staticClass:"curr-num",style:"color:"+t.fontColor},[t._v(t._s(t._f("leftDate")(t.showNum)))])])]),t._v(" "),e("div",{staticClass:"c-num c-right"},[e("div",{staticClass:"flex-wrap"},[e("div",{staticClass:"next-num",style:"color:"+t.fontColor},[t._v(t._s(t._f("rightDate")(t.showNum)))]),t._v(" "),e("div",{staticClass:"curr-num",style:"color:"+t.fontColor},[t._v(t._s(t._f("rightDate")(t.showNum)))])])]),t._v(" "),e("div",{staticClass:"c-text",style:"color:"+t.fontColor},[t._v(t._s(t.showTxt))])])},staticRenderFns:[]};var o=e("VU/8")(n,i,!1,function(t){e("58ER")},"data-v-3e77e59a",null).exports,r={name:"ElementCountdown",props:{wrapCss:{type:Object},css:{type:Object},endTime:{type:[String,Object],default:'"0000-0-00 00:00:00"'},endOption:{type:String},id:{type:[Number,String]},endText:{type:String},showType:{type:String},showSize:{type:String},properties:{type:Object,required:!0},language:{type:String},direction:{type:String}},data:function(){return{day:"",hour:"",minute:"",second:"",isVisible:!0,downTime:{},finishState:""}},computed:{shadowCss:function(){var t=this.properties;return 0==t.visible?{boxShadow:t.shadowColor+" "+t.shadowX+"px "+t.shadowY+"px "+t.shadowBlur+"px",visibility:"hidden"}:{boxShadow:t.shadowColor+" "+t.shadowX+"px "+t.shadowY+"px "+t.shadowBlur+"px"}},sizeStyle:function(){var t={small:.855,middle:1,large:1.255};return{transform:"scale("+(t[this.showSize]||1)+")",webkitTransform:"scale("+(t[this.showSize]||1)+")"}},countId:function(){return"c_"+this.id},finishClass:function(){return"f_"+this.id},cssBase:function(){return{left:this.wrapCss.left,top:this.wrapCss.top,transform:this.wrapCss.transform,width:this.wrapCss.width,height:this.wrapCss.height}},cssOther:function(){return{backgroundColor:this.wrapCss.backgroundColor,borderColor:this.wrapCss.borderColor,borderRadius:this.wrapCss.borderRadius,borderStyle:this.wrapCss.borderStyle,borderWidth:this.wrapCss.borderWidth}},dayL:function(){var t=this.day,s=String(t);return s.length<3?0:s.substr(0,1)},dayM:function(){var t=this.day,s=String(t);return s.length<2?0:s.length>2?s.substr(1,1):s.substr(0,1)},dayR:function(){var t=this.day;String(t).substr(-1)},hourL:function(){var t=this.hour,s=String(t);return s.length<2?0:s.substr(0,1)},hourR:function(){var t=this.hour,s=String(t);return s.length<2?t:s.substr(1,1)},minuteL:function(){var t=this.minute,s=String(t);return s.length<2?0:s.substr(0,1)},minuteR:function(){var t=this.minute,s=String(t);return s.length<2?t:s.substr(1,1)},secondL:function(){var t=this.second,s=String(t);return s.length<2||t<0?0:s.substr(0,1)},secondR:function(){var t=this.second,s=String(t);return s.length<2?t:s.substr(1,1)},aniOrigin:function(){var t=this.properties.aniOrigin;return"default"==t?{}:{"transform-origin":t+" !important"}}},components:{numShow:o},filters:{timeConv:function(t){return String(t).length<2?"0"+t:String(t)}},watch:{dayL:function(t,s){this.editScroll(".c-day .c-day-left")},dayM:function(t,s){this.editScroll(".c-day .c-left")},dayR:function(t,s){this.editScroll(".c-day .c-right")},hourL:function(t,s){this.editScroll(".c-hour .c-left")},hourR:function(t,s){this.editScroll(".c-hour .c-right")},minuteL:function(t,s){this.editScroll(".c-minute .c-left")},minuteR:function(t,s){this.editScroll(".c-minute .c-right")},secondL:function(t,s){this.editScroll(".c-second .c-left")},secondR:function(t,s){this.editScroll(".c-second .c-right")},endTime:function(t){console.log("执行倒计时"),clearInterval(this.autoFun),this.downTime=setInterval(this.countTime,1e3)}},methods:{editScroll:function(t){var s=$("."+this.countId+" "+t+" .flex-wrap");s.addClass("numscroll"),setTimeout(function(){s.removeClass("numscroll")},500)},countTime:function(){var t=this,s=(new Date).getTime(),e="string"!=typeof t.endTime?"0000-00-00 00:00:00":t.endTime,n=new Date(e.replace(/-/g,"/")).getTime()-s;if(n>0)this.finishState="",t.day=Math.floor(n/1e3/60/60/24),t.hour=Math.floor(n/1e3/60/60%24),t.minute=Math.floor(n/1e3/60%60),t.second=Math.floor(n/1e3%60);else switch(clearInterval(this.downTime),t.endOption){case"zero":this.finishState="zero",this.day=0,this.hour=0,this.minute=0,this.second=0;break;case"hide":this.finishState="hide";break;case"text":this.finishState="text",this.$nextTick(function(){$(".f_"+t.id).html(t.endText)})}}},mounted:function(){this.downTime=setInterval(this.countTime,1e3)}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"count-down",style:[t.cssBase,t.shadowCss]},[e("div",{staticClass:"ani-wrap",style:[{animation:t.wrapCss.animation},t.aniOrigin]},["text"==t.showType?[e("div",{staticClass:"count-text",style:[t.cssOther,t.sizeStyle]},[e("div",{staticClass:"count-text",class:t.countId,style:t.css},[t._v("\n                    "+t._s(t._f("timeConv")(t.day))+"天"+t._s(t._f("timeConv")(t.hour))+"小时"+t._s(t._f("timeConv")(t.minute))+"分钟"+t._s(t._f("timeConv")(t.second))+"秒\n                ")])])]:[t.finishState&&"zero"!=t.finishState?[e("div",{staticClass:"finish-cont",class:t.finishClass})]:e("div",{staticClass:"count-flip",class:t.countId,style:[t.sizeStyle,{"flex-flow":"vertical"==t.direction?"column":"",opacity:t.css.opacity}]},[e("div",{staticClass:"c-com c-day",style:t.cssOther},[e("num-show",{attrs:{"font-color":t.css.color,"show-num":t.day,"show-txt":"english"==t.language?"DAY":"天"}})],1),t._v(" "),e("div",{staticClass:"c-com c-hour",style:t.cssOther},[e("num-show",{attrs:{"font-color":t.css.color,"show-num":t.hour,"show-txt":"english"==t.language?"HOUR":"时"}})],1),t._v(" "),e("div",{staticClass:"c-com c-minute",style:t.cssOther},[e("num-show",{attrs:{"font-color":t.css.color,"show-num":t.minute,"show-txt":"english"==t.language?"MIN":"分"}})],1),t._v(" "),e("div",{staticClass:"c-com c-second",style:t.cssOther},[e("num-show",{attrs:{"font-color":t.css.color,"show-num":t.second,"show-txt":"english"==t.language?"SEC":"秒"}})],1)])]],2)])},staticRenderFns:[]};var c=e("VU/8")(r,a,!1,function(t){e("5m4/")},null,null);s.default=c.exports}});