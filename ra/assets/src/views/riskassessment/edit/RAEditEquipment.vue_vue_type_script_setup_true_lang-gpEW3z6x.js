import{y as g,x as q,t as _,aD as m,C as r,D as i,E as a,F as t,u as e,br as d,X as p,O as f,bs as k,J as V,a$ as y,T as I,aK as x,b1 as A,M as B}from"../../../../vendor-fe-4Mo55.js";import{_ as v}from"../../../components/EquipmentList.vue_vue_type_script_setup_true_lang-O7WOUD_K.js";import{u as R}from"../../../composables/riskassessment-yedfBpr3.js";import{l as c}from"../../../composables/livequery-P21yeuae.js";import{T as C}from"../../../components/TemplateRiskAssessmentPage-jWM7FwVS.js";const L=g({__name:"RAEditEquipment",setup(E){const s=R(),b=q(()=>c.table("equipment").isReady().value?s.equipment.map(o=>c.table("equipment").get(o)):[]),u=_("selected");return["selected","available"].includes(m().query.segment)&&(u.value=m().query.segment),(o,l)=>(r(),i(C,null,{default:a(()=>[t(e(k),{value:u.value,onIonChange:l[0]||(l[0]=n=>{u.value=n.detail.value,o.$router.replace({query:{segment:n.detail.value}})})},{default:a(()=>[t(e(d),{value:"selected"},{default:a(()=>[t(e(p),null,{default:a(()=>[f("Ausgewählt")]),_:1})]),_:1}),t(e(d),{value:"available"},{default:a(()=>[t(e(p),null,{default:a(()=>[f("Verfügbar")]),_:1})]),_:1})]),_:1},8,["value"]),u.value==="selected"?(r(),i(v,{key:0,entries:b.value,modelValue:e(s).equipment,"onUpdate:modelValue":l[1]||(l[1]=n=>e(s).equipment=n),inverted:"","forbid-deletion":""},null,8,["entries","modelValue"])):(r(),V(B,{key:1},[t(e(A),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:a(()=>[t(e(y),{"router-link":"/equipment/new"},{default:a(()=>[t(e(I),{icon:e(x)},null,8,["icon"])]),_:1})]),_:1}),t(v,{modelValue:e(s).equipment,"onUpdate:modelValue":l[2]||(l[2]=n=>e(s).equipment=n)},null,8,["modelValue"])],64))]),_:1}))}});export{L as _};
