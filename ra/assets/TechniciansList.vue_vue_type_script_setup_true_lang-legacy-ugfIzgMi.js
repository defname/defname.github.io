System.register(["./index-legacy-RecDmhR6.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-xiQSUUT9.js","./livequery-legacy-5fI2JIE8.js"],(function(e,t){"use strict";var l,i,a,s,n,r,c,d,u,o,m,f,v,y,_;return{setters:[e=>{l=e.d,i=e.o,a=e.c,s=e.w,n=e.f,r=e.ah,c=e.r,d=e.i,u=e.t,o=e.j,m=e.b,f=e.ag,v=e.l},e=>{y=e._},e=>{_=e.l}],execute:function(){e("_",l({__name:"TechniciansList",props:{modelValue:{type:Array,default:void 0},entries:{type:Array,default:_.table("technicians").entries()},inverted:Boolean},emits:["update:modelValue"],setup:(e,{emit:t})=>(t,l)=>(i(),a(y,{entries:e.entries,"delete-function":e=>n(_).table("technicians").delete(e),"model-value":e.modelValue,"onUpdate:modelValue":l[0]||(l[0]=e=>t.$emit("update:modelValue",e)),"messag-really-delete":e=>`${e.name} wirklich löschen?`,"message-delete-success":"Löschen erfolgreich.",inverted:e.inverted},{default:s((e=>[r(t.$slots,"default",{object:e.object},(()=>[m(n(c),{"router-link":`/technicians/edit/${e.object.id}`},{default:s((()=>[m(n(d),null,{default:s((()=>[o(u(e.object.name),1)])),_:2},1024),e.object.fisat?(i(),a(n(f),{key:0,slot:"end",color:3===e.object.fisat.level?"tertiary":"medium"},{default:s((()=>[o("Level "+u(e.object.fisat.level),1)])),_:2},1032,["color"])):v("",!0)])),_:2},1032,["router-link"])]))])),_:3},8,["entries","delete-function","model-value","messag-really-delete","inverted"]))}))}}}));
