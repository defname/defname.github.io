import{d as c,o as r,c as n,w as t,f as a,ah as f,r as g,i as p,t as d,j as i,b as u,ag as b,l as y}from"./index-iO1bX4p0.js";import{_ as k}from"./GenericList.vue_vue_type_script_setup_true_lang-O5yUXDlP.js";import{l as m}from"./livequery-7XNqutJr.js";const j=c({__name:"EquipmentList",props:{modelValue:{type:Array,default:void 0},entries:{type:Array,default:m.table("equipment").entries()},inverted:Boolean},emits:["update:modelValue"],setup(l,{emit:v}){return(s,o)=>(r(),n(k,{entries:l.entries,"delete-function":e=>a(m).table("equipment").delete(e),"model-value":l.modelValue,"onUpdate:modelValue":o[0]||(o[0]=e=>s.$emit("update:modelValue",e)),"messag-really-delete":e=>"".concat(e.descr," wirklich löschen?"),"message-delete-success":"Löschen erfolgreich.",inverted:l.inverted},{default:t(e=>[f(s.$slots,"default",{object:e.object},()=>[u(a(g),{"router-link":"/equipment/".concat(e.object.id)},{default:t(()=>[u(a(p),null,{default:t(()=>[i(d(e.object.descr),1)]),_:2},1024),e.object.causeRisks.length>0?(r(),n(a(b),{key:0,slot:"end",color:"warning"},{default:t(()=>[i(d(e.object.causeRisks.length),1)]),_:2},1024)):y("",!0)]),_:2},1032,["router-link"])])]),_:3},8,["entries","delete-function","model-value","messag-really-delete","inverted"]))}});export{j as _};