import{T as o}from"./TemplateRiskAssessmentPage-TTPo3sN6.js";import{u as c}from"./riskassessment-X3YO6Pdk.js";import{l as u}from"./livequery-m_pyRb0j.js";import{p as a}from"./helpers-1B5OLZ5S.js";import{S as m}from"./SignatureInput-RcWfSUbd.js";import{d as p,e as l,o as f,c as d,w as h,b as _,_ as g}from"./index-fc_sw4La.js";import"./liveriskstree-Z7QRcm69.js";import"./index-k1YdoJAl.js";const k=p({__name:"RiskAssessmentSignatures",setup(S){const e=c(),n=u.table("technicians"),i=l(()=>!n.isReady||!e.isReady?[]:e.technicians.map(s=>n.get(s)));function r(s,t){if(t===void 0){console.warn("No technician id should not happen"),a("Etwas ist schief gelaufen.","warning");return}e.updateTechnicianSignature(t,s),a("Unterschrift hinzugefügt.","success")}return(s,t)=>(f(),d(o,null,{default:h(()=>[_(m,{"technicians-list":i.value,onSignature:r},null,8,["technicians-list"])]),_:1}))}}),B=g(k,[["__scopeId","data-v-91de6677"]]);export{B as default};
