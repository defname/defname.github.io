import{d as y,e as V,G as j,u as f,o as r,c as d,w as s,b as a,f as e,ae as c,i as m,j as u,af as B,t as p,ag as v,l as g,r as C,g as w,m as x,n as A,p as R,q as S,F as T}from"./index-oWrzEUv7.js";import{_ as b}from"./TechniciansList.vue_vue_type_script_setup_true_lang-tH2YCFsP.js";import{u as q}from"./riskassessment-V5H7yVQ5.js";import{l as _}from"./livequery-uY1wsXKv.js";import{T as F}from"./TemplateRiskAssessmentPage-DZJJYMX5.js";import"./GenericList.vue_vue_type_script_setup_true_lang-wgISVSGd.js";import"./helpers-IDUXs_Eo.js";import"./liveriskstree-x-rP5pdV.js";const O=y({__name:"RAEditTechnicians",setup(N){const o=q(),k=V(()=>_.table("technicians").isReady().value?o.technicians.map(n=>_.table("technicians").get(n)):[]),i=j("selected");["selected","available"].includes(f().query.segment)&&(i.value=f().query.segment);function I(n){if(n.id===void 0){console.warn("Technician ID is undefined");return}if(!n.fisat||n.fisat.level!==3)return;const l=o.supervisors.indexOf(n.id);console.log(l),l!==-1?o.supervisors.splice(l,1):o.supervisors.push(n.id)}return(n,l)=>(r(),d(F,null,{default:s(()=>[a(e(B),{value:i.value,onIonChange:l[0]||(l[0]=t=>{i.value=t.detail.value,n.$router.replace({query:{segment:t.detail.value}})})},{default:s(()=>[a(e(c),{value:"selected"},{default:s(()=>[a(e(m),null,{default:s(()=>[u("Ausgewählt")]),_:1})]),_:1}),a(e(c),{value:"available"},{default:s(()=>[a(e(m),null,{default:s(()=>[u("Verfügbar")]),_:1})]),_:1})]),_:1},8,["value"]),i.value==="selected"?(r(),d(b,{key:0,entries:k.value,modelValue:e(o).technicians,"onUpdate:modelValue":l[1]||(l[1]=t=>e(o).technicians=t),inverted:"","forbid-deletion":""},{default:s(t=>[a(e(C),null,{default:s(()=>[a(e(m),null,{default:s(()=>[u(p(t.object.name),1)]),_:2},1024),t.object.fisat?(r(),d(e(v),{key:0,slot:"end",color:t.object.fisat.level===3?"tertiary":"medium",onClick:$=>I(t.object)},{default:s(()=>[u(" Level "+p(t.object.fisat.level),1)]),_:2},1032,["color","onClick"])):g("",!0),e(o).supervisors.includes(t.object.id)?(r(),d(e(v),{key:1,slot:"start"},{default:s(()=>[u("Supervisor")]),_:1})):g("",!0)]),_:2},1024)]),_:1},8,["entries","modelValue"])):(r(),w(T,{key:1},[a(e(S),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:s(()=>[a(e(x),{"router-link":"/technicians/new"},{default:s(()=>[a(e(A),{icon:e(R)},null,8,["icon"])]),_:1})]),_:1}),a(b,{modelValue:e(o).technicians,"onUpdate:modelValue":l[2]||(l[2]=t=>e(o).technicians=t)},null,8,["modelValue"])],64))]),_:1}))}});export{O as default};
