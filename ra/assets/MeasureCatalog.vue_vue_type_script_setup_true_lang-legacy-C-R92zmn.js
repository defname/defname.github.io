System.register(["./index-legacy-2CesrrWX.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-f5x4GUk_.js","./livequery-legacy-Hb61fPKz.js"],(function(e,t){"use strict";var r,u,l,a,n,i,s,d,o,c,m,_,p;return{setters:[e=>{r=e.d,u=e.o,l=e.c,a=e.w,n=e.f,i=e.ai,s=e.b,d=e.i,o=e.j,c=e.t,m=e.r},e=>{_=e._},e=>{p=e.l}],execute:function(){e("_",r({__name:"MeasureCatalog",props:{entries:{type:Array,default:p.table("measures").entries()},routerLinkFunction:{type:Function,default:e=>`/measures/${e.id}`},modelValue:Array,inverted:Boolean},emits:["update:modelValue"],setup:(e,{emit:t})=>(t,r)=>(u(),l(_,{entries:e.entries,"delete-function":e=>n(p).table("measures").delete(e),"model-value":e.modelValue,"onUpdate:modelValue":r[0]||(r[0]=e=>t.$emit("update:modelValue",e)),inverted:e.inverted},{header:a((()=>[i(t.$slots,"header")])),default:a((t=>[s(n(m),{"router-link":e.routerLinkFunction(t.object)},{default:a((()=>[s(n(d),null,{default:a((()=>[o(c(t.object.descr),1)])),_:2},1024)])),_:2},1032,["router-link"])])),_:3},8,["entries","delete-function","model-value","inverted"]))}))}}}));
