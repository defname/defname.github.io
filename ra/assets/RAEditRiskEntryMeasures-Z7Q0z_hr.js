import{d as p,u as k,e as c,o as u,c as _,w as s,f as e,g as R,b as a,I,h as v,i as b,j as m,k as g,F as V,l as y}from"./index-A5DiJtrn.js";import{u as A}from"./riskassessment-azGrLSUK.js";import{l as B}from"./liveriskstree-6xejh_oL.js";import{R as x}from"./RiskListItem-GF8yLdGT.js";import{l as n}from"./livequery-h1EjgNl9.js";import{_ as E}from"./MeasureCatalog.vue_vue_type_script_setup_true_lang-XWTLOyR5.js";import{T as L}from"./TemplateRiskAssessmentPage-SNcva4-5.js";import"./helpers-OdAWM-dR.js";import"./GenericList.vue_vue_type_script_setup_true_lang-ZFXsXGyS.js";const P=p({__name:"RAEditRiskEntryMeasures",setup(M){const r=A();n.table("measures");const o=parseInt(k().params.riskId),t=B.getAsRef(o);n.table("measures").updated();const d=c(()=>t.value===void 0||!n.table("measures").isReady()?[]:n.table("measures").entries().filter(i=>i.solveRisks.includes(t.value.id)));return r.getMeasures(o),(i,l)=>(u(),_(L,null,{default:s(()=>[e(t)&&e(r).isReady?(u(),R(V,{key:0},[a(e(I),{inset:""},{default:s(()=>[a(x,{risk:e(t)},null,8,["risk"])]),_:1}),a(E,{inset:"",modelValue:e(r).measures[e(o)],"onUpdate:modelValue":l[0]||(l[0]=f=>e(r).measures[e(o)]=f),entries:d.value},{header:s(()=>[a(e(v),null,{default:s(()=>[a(e(b),null,{default:s(()=>[m("Verfügbare Maßnahmen")]),_:1}),a(e(g),{"router-link":"/measures/new?for=".concat(e(t).id)},{default:s(()=>[m("Erstellen")]),_:1},8,["router-link"])]),_:1})]),_:1},8,["modelValue","entries"])],64)):y("",!0)]),_:1}))}});export{P as default};
