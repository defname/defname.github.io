import{d as c,o as s,c as d,w as t,f as a,ae as f,r as b,i as p,t as n,j as i,b as m,ad as v,l as y}from"./index-IcbmUqw0.js";import{_ as j}from"./GenericList.vue_vue_type_script_setup_true_lang-B9GGZiIc.js";import{l as u}from"./livequery-_oQCB0fk.js";const $=c({__name:"TechniciansList",props:{modelValue:{type:Array,default:void 0},entries:{type:Array,default:u.table("technicians").entries()},inverted:Boolean},emits:["update:modelValue"],setup(l,{emit:V}){return(o,r)=>(s(),d(j,{entries:l.entries,"delete-function":e=>a(u).table("technicians").delete(e),"model-value":l.modelValue,"onUpdate:modelValue":r[0]||(r[0]=e=>o.$emit("update:modelValue",e)),"messag-really-delete":e=>"".concat(e.name," wirklich löschen?"),"message-delete-success":"Löschen erfolgreich.",inverted:l.inverted},{default:t(e=>[f(o.$slots,"default",{object:e.object},()=>[m(a(b),{"router-link":"/technicians/edit/".concat(e.object.id)},{default:t(()=>[m(a(p),null,{default:t(()=>[i(n(e.object.name),1)]),_:2},1024),e.object.fisat?(s(),d(a(v),{key:0,slot:"end",color:e.object.fisat.level===3?"tertiary":"medium"},{default:t(()=>[i("Level "+n(e.object.fisat.level),1)]),_:2},1032,["color"])):y("",!0)]),_:2},1032,["router-link"])])]),_:3},8,["entries","delete-function","model-value","messag-really-delete","inverted"]))}});export{$ as _};