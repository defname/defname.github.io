import{d as g,o as s,c as r,w as t,f as e,g as m,b as l,m as _,n as k,p as h,q as b,F as c,V as I,l as C,O as x,P as U,Q as w,D as A,R as B,N as u,k as T,j as v,a as F,Y as N}from"./index-v8xIpeRF.js";import{u as S}from"./riskassessment-FIlqf9gz.js";import{T as L}from"./TemplateRiskAssessmentPage-eCk3s5vp.js";import{a as P}from"./helpers-5jWdjtbo.js";import"./livequery-e79Lz9UU.js";import"./liveriskstree-lApMh-eq.js";const R={class:"ion-text-right"},H=g({__name:"RAEditAccess",setup(y){const d=S();function p(){d.addSector()}function f(o){const i=d.access.findIndex(a=>a.id===o.id);if(i===-1){console.warn("Sector "+o.title+"  ("+o.id+") not found in riskassessment");return}d.access.splice(i,1)}function V(o){P("Die Gefährdung wirklich aus der Liste entfernen?",{text:"Löschen",role:"destructive",icon:N,handler:()=>{f(o)}})}return(o,i)=>(s(),r(L,null,{default:t(()=>[e(d).ready?(s(),m(c,{key:0},[l(e(b),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:t(()=>[l(e(_),{onClick:p},{default:t(()=>[l(e(k),{icon:e(h)},null,8,["icon"])]),_:1})]),_:1}),(s(!0),m(c,null,I(e(d).access,a=>(s(),r(e(x),{key:a.id},{default:t(()=>[l(e(U),null,{default:t(()=>[l(e(w),null,{default:t(()=>[l(e(A),{modelValue:a.title,"onUpdate:modelValue":n=>a.title=n,label:"Titel","label-placement":"floating"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),l(e(B),null,{default:t(()=>[l(e(u),{modelValue:a.entrance,"onUpdate:modelValue":n=>a.entrance=n,label:"Eingang","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),l(e(u),{modelValue:a.exit,"onUpdate:modelValue":n=>a.exit=n,label:"Ausgang","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),l(e(u),{modelValue:a.anchorPoints,"onUpdate:modelValue":n=>a.anchorPoints=n,label:"Anschlagpunkte","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),l(e(u),{modelValue:a.comment,"onUpdate:modelValue":n=>a.comment=n,label:"Kommentar","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),F("div",R,[l(e(T),{fill:"clear",color:"danger",onClick:n=>V(a)},{default:t(()=>[v("Löschen")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))],64)):C("",!0)]),_:1}))}});export{H as default};
