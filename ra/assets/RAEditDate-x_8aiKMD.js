import{d as l,G as g,e as u,o as s,c as r,w as D,f as i,aa as p,l as f}from"./index-nnix3es0.js";import{u as h}from"./riskassessment-jxzjjxKL.js";import{T}from"./TemplateRiskAssessmentPage-poJLLxwP.js";import"./helpers-r1e3qvNS.js";import"./livequery-cPqtMxws.js";import"./liveriskstree-KOA9bcnr.js";const E=l({__name:"RAEditDate",setup(_){const e=h();g(),u(()=>{if(e.endDate!==void 0){const a=[];let t=e.getStartDate().getTime();const o=e.getEndDate().getTime(),n=24*60*60*1e3;for(;t<o;)a.push(e.dateStr(new Date(t))),console.log(t),t+=n;return console.log(a),a}return[]});function d(a){const o=new Date(a).getTime();if(!e.startDate||!e.endDate)return;const n=e.getStartDate().getTime(),m=e.getEndDate().getTime();if(n<=o&&o<=m)return{backgroundColor:"var(--ion-color-primary)",textColor:"var(--ion-color-primary-contrast)"}}function c(a){const t=new Date(a.detail.value);if(!e.startDate){e.setStartDate(t);return}!e.endDate&&t.getTime()>e.getStartDate().getTime()?e.setEndDate(t):(e.setEndDate(void 0),e.setStartDate(t)),console.log(e.startDate)}return(a,t)=>(s(),r(T,null,{default:D(()=>[i(e).isReady?(s(),r(i(p),{key:0,size:"cover",presentation:"date","highlighted-dates":d,onIonChange:c})):f("",!0)]),_:1}))}});export{E as default};
