import{d as g,o as d,c as u,w as t,f as e,g as c,b as l,m as _,n as k,p as h,q as I,F as m,a2 as b,l as C,O as x,P as A,Q as U,D as w,R as B,N as r,k as T,j as v,a as F,af as N}from"./index-IcbmUqw0.js";import{u as S}from"./riskassessment-r4n6paQ6.js";import{T as L}from"./TemplateRiskAssessmentPage-h4ipZIbY.js";import{a as P}from"./helpers-AgemSXbm.js";import"./livequery-_oQCB0fk.js";import"./liveriskstree-QxwyOlTP.js";const R={class:"ion-text-right"},H=g({__name:"RAEditAccess",setup(y){const s=S();function f(){s.addSector()}function p(o){const i=s.access.findIndex(a=>a.id===o.id);if(i===-1){console.warn("Sector "+o.title+"  ("+o.id+") not found in riskassessment");return}s.access.splice(i,1)}function V(o){P("Die Gefährdung wirklich aus der Liste entfernen?",{text:"Löschen",role:"destructive",icon:N,handler:()=>{p(o)}})}return(o,i)=>(d(),u(L,null,{default:t(()=>[e(s).ready?(d(),c(m,{key:0},[l(e(I),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:t(()=>[l(e(_),{onClick:f},{default:t(()=>[l(e(k),{icon:e(h)},null,8,["icon"])]),_:1})]),_:1}),(d(!0),c(m,null,b(e(s).access,a=>(d(),u(e(x),{key:a.id},{default:t(()=>[l(e(A),null,{default:t(()=>[l(e(U),null,{default:t(()=>[l(e(w),{modelValue:a.title,"onUpdate:modelValue":n=>a.title=n,label:"Titel","label-placement":"floating"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),l(e(B),null,{default:t(()=>[l(e(r),{modelValue:a.entrance,"onUpdate:modelValue":n=>a.entrance=n,label:"Eingang","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),l(e(r),{modelValue:a.exit,"onUpdate:modelValue":n=>a.exit=n,label:"Ausgang","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),l(e(r),{modelValue:a.anchorPoints,"onUpdate:modelValue":n=>a.anchorPoints=n,label:"Anschlagpunkte","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),F("div",R,[l(e(T),{fill:"clear",color:"danger",onClick:n=>V(a)},{default:t(()=>[v("Löschen")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))],64)):C("",!0)]),_:1}))}});export{H as default};