import{T as o}from"./TemplateRiskAssessmentPage-6vROPoR8.js";import{u as c}from"./riskassessment-80Fg-rO-.js";import{l as u}from"./livequery-QysOfrd6.js";import{p as a}from"./helpers-iQs7hfjM.js";import{S as m}from"./SignatureInput-KD3LJoBS.js";import{d as p,e as l,o as f,c as d,w as h,b as _,_ as g}from"./index-R5HXRjtq.js";import"./liveriskstree-sHZL10sm.js";import"./index-uxwhvdQ4.js";const k=p({__name:"RiskAssessmentSignatures",setup(S){const e=c(),n=u.table("technicians"),i=l(()=>!n.isReady||!e.isReady?[]:e.technicians.map(s=>n.get(s)));function r(s,t){if(t===void 0){console.warn("No technician id should not happen"),a("Etwas ist schief gelaufen.","warning");return}e.updateTechnicianSignature(t,s),a("Unterschrift hinzugefügt.","success")}return(s,t)=>(f(),d(o,null,{default:h(()=>[_(m,{"technicians-list":i.value,onSignature:r},null,8,["technicians-list"])]),_:1}))}}),B=g(k,[["__scopeId","data-v-91de6677"]]);export{B as default};