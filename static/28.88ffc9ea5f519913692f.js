webpackJsonp([28],{eUpT:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("woOf"),i=r.n(s),a={name:"ElementFormInput",data:function(){return{inputVal:""}},props:{id:{type:[Number,String],required:!0},title:{type:String,required:!0},css:{type:Object,required:!0},wrapCss:{type:Object,required:!0},properties:{type:Object,required:!0},pageIndex:{type:Number}},computed:{shadowCss:function(){var t=this.properties;return 0==t.visible?{boxShadow:t.shadowColor+" "+t.shadowX+"px "+t.shadowY+"px "+t.shadowBlur+"px",visibility:"hidden"}:{boxShadow:t.shadowColor+" "+t.shadowX+"px "+t.shadowY+"px "+t.shadowBlur+"px"}},allCss:function(){return i()({},this.css,this.wrapCss)},inputCss:function(){return i()({},this.css,{webkitTextFillColor:this.css.color})},wrapNoSize:function(){var t=["transform","left","top","width","height","borderRadius","borderWidth","borderStyle","borderColor"],e={};for(var r in this.wrapCss)t.includes(r)||(e[r]=this.wrapCss[r]);return e},wrapStyle:function(){var t=["transform","left","top","width","height"],e={};for(var r in this.wrapCss)t.includes(r)&&(e[r]=this.wrapCss[r]);return e},borderCss:function(){return{borderRadius:this.wrapCss.borderRadius,borderWidth:this.wrapCss.borderWidth,borderStyle:this.wrapCss.borderStyle,borderColor:this.wrapCss.borderColor}},aniOrigin:function(){var t=this.properties.aniOrigin;return"default"==t?{}:{"transform-origin":t+" !important"}},maxlength:function(){return this.title.includes("姓名")?100:1e4}},watch:{inputVal:function(t,e){this.$parent.formData[this.id].value=t}},methods:{blur:function(){var t=this;$(".ele-wrap").eq(this.pageIndex).css({position:"static"}),setTimeout(function(){$(".ele-wrap").eq(t.pageIndex).css({position:"absolute"})},100)}}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ele-form f-input",style:[t.wrapStyle,t.shadowCss,{opacity:t.css.opacity}]},[r("div",{staticClass:"ani-wrap",style:[t.wrapNoSize,t.borderCss,t.aniOrigin]},[r("div",{staticClass:"f-input-wrap"},[t.properties.required?r("span",{staticClass:"require"},[t._v("*")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"},{name:"blurReset",rawName:"v-blurReset"}],style:t.inputCss,attrs:{type:"text",placeholder:t.title,maxlength:t.maxlength},domProps:{value:t.inputVal},on:{blur:t.blur,input:function(e){e.target.composing||(t.inputVal=e.target.value)}}})])])])},staticRenderFns:[]};var o=r("VU/8")(a,n,!1,function(t){r("fOPJ")},null,null);e.default=o.exports},fOPJ:function(t,e){}});