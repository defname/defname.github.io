import{d as c,o as s,c as d,w as t,f as a,ah as f,r as b,i as p,t as n,j as i,b as m,ag as v,l as y}from"./index-TA_wujje.js";import{_ as g}from"./GenericList.vue_vue_type_script_setup_true_lang-fIxnK2Oy.js";import{l as u}from"./livequery-Avxi29E8.js";const $=c({__name:"TechniciansList",props:{modelValue:{type:Array,default:void 0},entries:{type:Array,default:u.table("technicians").entries()},inverted:Boolean},emits:["update:modelValue"],setup(l,{emit:j}){return(o,r)=>(s(),d(g,{entries:l.entries,"delete-function":e=>a(u).table("technicians").delete(e),"model-value":l.modelValue,"onUpdate:modelValue":r[0]||(r[0]=e=>o.$emit("update:modelValue",e)),"messag-really-delete":e=>"".concat(e.name," wirklich löschen?"),"message-delete-success":"Löschen erfolgreich.",inverted:l.inverted},{default:t(e=>[f(o.$slots,"default",{object:e.object},()=>[m(a(b),{"router-link":"/technicians/edit/".concat(e.object.id)},{default:t(()=>[m(a(p),null,{default:t(()=>[i(n(e.object.name),1)]),_:2},1024),e.object.fisat?(s(),d(a(v),{key:0,slot:"end",color:e.object.fisat.level===3?"tertiary":"medium"},{default:t(()=>[i("Level "+n(e.object.fisat.level),1)]),_:2},1032,["color"])):y("",!0)]),_:2},1032,["router-link"])])]),_:3},8,["entries","delete-function","model-value","messag-really-delete","inverted"]))}});export{$ as _};