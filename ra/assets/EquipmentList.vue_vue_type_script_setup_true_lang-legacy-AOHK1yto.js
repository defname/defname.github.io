System.register(["./index-legacy-IpYMk95T.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-XcGiOiZ8.js","./livequery-legacy-tw_pjM41.js"],(function(e,t){"use strict";var l,s,i,r,u,a,n,d,o,c,m,p,_,f,y;return{setters:[e=>{l=e.d,s=e.o,i=e.c,r=e.w,u=e.f,a=e.ai,n=e.r,d=e.i,o=e.t,c=e.j,m=e.b,p=e.ah,_=e.l},e=>{f=e._},e=>{y=e.l}],execute:function(){e("_",l({__name:"EquipmentList",props:{modelValue:{type:Array,default:void 0},entries:{type:Array,default:y.table("equipment").entries()},inverted:Boolean},emits:["update:modelValue"],setup:(e,{emit:t})=>(t,l)=>(s(),i(f,{entries:e.entries,"delete-function":e=>u(y).table("equipment").delete(e),"model-value":e.modelValue,"onUpdate:modelValue":l[0]||(l[0]=e=>t.$emit("update:modelValue",e)),"messag-really-delete":e=>`${e.descr} wirklich löschen?`,"message-delete-success":"Löschen erfolgreich.",inverted:e.inverted},{default:r((e=>[a(t.$slots,"default",{object:e.object},(()=>[m(u(n),{"router-link":`/equipment/${e.object.id}`},{default:r((()=>[m(u(d),null,{default:r((()=>[c(o(e.object.descr),1)])),_:2},1024),e.object.causeRisks.length>0?(s(),i(u(p),{key:0,slot:"end",color:"warning"},{default:r((()=>[c(o(e.object.causeRisks.length),1)])),_:2},1024)):_("",!0)])),_:2},1032,["router-link"])]))])),_:3},8,["entries","delete-function","model-value","messag-really-delete","inverted"]))}))}}}));