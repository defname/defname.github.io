import{d as p,u as k,e as c,o as u,c as _,w as s,f as e,g as R,b as a,I,h as v,i as b,j as m,k as g,F as V,l as y}from"./index-evfwvyDu.js";import{u as A}from"./riskassessment-FolRk8Gx.js";import{l as B}from"./liveriskstree-VAdNH536.js";import{R as x}from"./RiskListItem-W__8sWI7.js";import{l as n}from"./livequery-ga49cCtK.js";import{_ as E}from"./MeasureCatalog.vue_vue_type_script_setup_true_lang-ecpR1SwN.js";import{T as L}from"./TemplateRiskAssessmentPage-du9jFBGy.js";import"./helpers-6wXL42H8.js";import"./GenericList.vue_vue_type_script_setup_true_lang-k_ZXGPEF.js";const P=p({__name:"RAEditRiskEntryMeasures",setup(M){const r=A();n.table("measures");const o=parseInt(k().params.riskId),t=B.getAsRef(o);n.table("measures").updated();const d=c(()=>t.value===void 0||!n.table("measures").isReady()?[]:n.table("measures").entries().filter(i=>i.solveRisks.includes(t.value.id)));return r.getMeasures(o),(i,l)=>(u(),_(L,null,{default:s(()=>[e(t)&&e(r).isReady?(u(),R(V,{key:0},[a(e(I),{inset:""},{default:s(()=>[a(x,{risk:e(t)},null,8,["risk"])]),_:1}),a(E,{inset:"",modelValue:e(r).measures[e(o)],"onUpdate:modelValue":l[0]||(l[0]=f=>e(r).measures[e(o)]=f),entries:d.value},{header:s(()=>[a(e(v),null,{default:s(()=>[a(e(b),null,{default:s(()=>[m("Verfügbare Maßnahmen")]),_:1}),a(e(g),{"router-link":"/measures/new?for=".concat(e(t).id)},{default:s(()=>[m("Erstellen")]),_:1},8,["router-link"])]),_:1})]),_:1},8,["modelValue","entries"])],64)):y("",!0)]),_:1}))}});export{P as default};
