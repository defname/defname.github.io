import{u as _}from"./riskassessment-FolRk8Gx.js";import{l as o}from"./livequery-ga49cCtK.js";import{d as y,f as s,o as t,g as a,R as f,F as i,l as n,j as m,a as u,t as c}from"./index-evfwvyDu.js";const g={key:0},h={key:1},L=y({__name:"AddedByList",props:{triggerList:{}},setup(k){const r=o.table("measures"),d=o.table("equipment"),l=_();return(p,v)=>s(l).isReady&&s(r).isReady()?(t(!0),a(i,{key:0},f(p.triggerList,e=>(t(),a(i,null,[e.type==="measure"?(t(),a("div",g,[m("Automatisch hinzugefügt von "),u("em",null,c(s(r).get(e.id).descr),1)])):n("",!0),e.type==="equipment"?(t(),a("div",h,[m("Automatisch hinzugefügt von "),u("em",null,c(s(d).get(e.id).descr),1)])):n("",!0)],64))),256)):n("",!0)}});export{L as _};
