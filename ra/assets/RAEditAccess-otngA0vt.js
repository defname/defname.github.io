import{d as V,o as s,c as u,w as l,f as a,g as m,b as n,m as h,n as k,p as g,q as C,F as c,R as I,l as x,G as b,H as U,J as A,s as B,K as v,k as F,j as S,a as T,V as w}from"./index-muNgIfzJ.js";import{u as L}from"./riskassessment-AvzWmFVn.js";import{T as N}from"./TemplateRiskAssessmentPage-IVg6Q1cO.js";import{a as R}from"./helpers-e_Ur4xMk.js";import{_ as i}from"./HistoryTextarea.vue_vue_type_script_setup_true_lang-vP-oqyex.js";import"./livequery-Qd0KOr-e.js";import"./liveriskstree-QMkjSvnr.js";import"./GenericEditModal-zx6noDr6.js";import"./index-U5SICvyw.js";const y={class:"ion-text-right"},J=V({__name:"RAEditAccess",setup(E){const d=L();function p(){d.addSector()}function f(o){const r=d.access.findIndex(e=>e.id===o.id);if(r===-1){console.warn("Sector "+o.title+"  ("+o.id+") not found in riskassessment");return}d.access.splice(r,1)}function _(o){R("Die Gefährdung wirklich aus der Liste entfernen?",{text:"Löschen",role:"destructive",icon:w,handler:()=>{f(o)}})}return(o,r)=>(s(),u(N,null,{default:l(()=>[a(d).ready?(s(),m(c,{key:0},[n(a(C),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:l(()=>[n(a(h),{onClick:p},{default:l(()=>[n(a(k),{icon:a(g)},null,8,["icon"])]),_:1})]),_:1}),(s(!0),m(c,null,I(a(d).access,e=>(s(),u(a(b),{key:e.id},{default:l(()=>[n(a(U),null,{default:l(()=>[n(a(A),null,{default:l(()=>[n(a(B),{modelValue:e.title,"onUpdate:modelValue":t=>e.title=t,label:"Titel","label-placement":"floating"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),n(a(v),null,{default:l(()=>[n(i,{modelValue:e.entrance,"onUpdate:modelValue":t=>e.entrance=t,label:"Eingang","input-id":"ra_sector_entrance"},null,8,["modelValue","onUpdate:modelValue"]),n(i,{modelValue:e.exit,"onUpdate:modelValue":t=>e.exit=t,label:"Ausgang","input-id":"ra_sector_exit"},null,8,["modelValue","onUpdate:modelValue"]),n(i,{modelValue:e.anchorPoints,"onUpdate:modelValue":t=>e.anchorPoints=t,label:"Anschlagpunkte","input-id":"ra_sector_anchorpoints"},null,8,["modelValue","onUpdate:modelValue"]),n(i,{modelValue:e.comment,"onUpdate:modelValue":t=>e.comment=t,label:"Kommentar","input-id":"ra_sector_comment"},null,8,["modelValue","onUpdate:modelValue"]),T("div",y,[n(a(F),{fill:"clear",color:"danger",onClick:t=>_(e)},{default:l(()=>[S("Löschen")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))],64)):x("",!0)]),_:1}))}});export{J as default};
