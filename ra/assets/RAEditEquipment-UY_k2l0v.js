import{d as q,e as _,x as b,u as r,o as m,c as i,w as a,b as t,f as e,af as d,i as p,j as f,ag as k,g as V,m as I,n as y,p as x,q as A,F as B}from"./index-A5DiJtrn.js";import{_ as v}from"./EquipmentList.vue_vue_type_script_setup_true_lang-Y4KQonmx.js";import{u as R}from"./riskassessment-azGrLSUK.js";import{l as c}from"./livequery-h1EjgNl9.js";import{T as w}from"./TemplateRiskAssessmentPage-SNcva4-5.js";import"./GenericList.vue_vue_type_script_setup_true_lang-ZFXsXGyS.js";import"./helpers-OdAWM-dR.js";import"./liveriskstree-6xejh_oL.js";const j=q({__name:"RAEditEquipment",setup(F){const u=R(),g=_(()=>c.table("equipment").isReady().value?u.equipment.map(o=>c.table("equipment").get(o)):[]),s=b("selected");return["selected","available"].includes(r().query.segment)&&(s.value=r().query.segment),(o,l)=>(m(),i(w,null,{default:a(()=>[t(e(k),{value:s.value,onIonChange:l[0]||(l[0]=n=>{s.value=n.detail.value,o.$router.replace({query:{segment:n.detail.value}})})},{default:a(()=>[t(e(d),{value:"selected"},{default:a(()=>[t(e(p),null,{default:a(()=>[f("Ausgewählt")]),_:1})]),_:1}),t(e(d),{value:"available"},{default:a(()=>[t(e(p),null,{default:a(()=>[f("Verfügbar")]),_:1})]),_:1})]),_:1},8,["value"]),s.value==="selected"?(m(),i(v,{key:0,entries:g.value,modelValue:e(u).equipment,"onUpdate:modelValue":l[1]||(l[1]=n=>e(u).equipment=n),inverted:"","forbid-deletion":""},null,8,["entries","modelValue"])):(m(),V(B,{key:1},[t(e(A),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:a(()=>[t(e(I),{"router-link":"/equipment/new"},{default:a(()=>[t(e(y),{icon:e(x)},null,8,["icon"])]),_:1})]),_:1}),t(v,{modelValue:e(u).equipment,"onUpdate:modelValue":l[2]||(l[2]=n=>e(u).equipment=n)},null,8,["modelValue"])],64))]),_:1}))}});export{j as default};