import{d as s,o as u,c as d,w as a,e as r,E as m,a as l,h as c,i as f,t as p,q as v}from"./index-1uhVeu27.js";import{_ as V}from"./GenericList.vue_vue_type_script_setup_true_lang-XhOYipBP.js";import{l as i}from"./livequery-FTHvn9sK.js";const $=s({__name:"MeasureCatalog",props:{entries:{type:Array,default:i.table("measures").entries()},routerLinkFunction:{type:Function,default:e=>"/measures/".concat(e.id)},modelValue:Array,inverted:Boolean},emits:["update:modelValue"],setup(e,{emit:k}){return(n,o)=>(u(),d(V,{entries:e.entries,"delete-function":t=>r(i).table("measures").delete(t),"model-value":e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>n.$emit("update:modelValue",t)),inverted:e.inverted},{header:a(()=>[m(n.$slots,"header")]),default:a(t=>[l(r(v),{"router-link":e.routerLinkFunction(t.object)},{default:a(()=>[l(r(c),null,{default:a(()=>[f(p(t.object.descr),1)]),_:2},1024)]),_:2},1032,["router-link"])]),_:3},8,["entries","delete-function","model-value","inverted"]))}});export{$ as _};
