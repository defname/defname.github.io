import{d as k,x as h,o as d,c as m,w as o,f as t,g as c,b as a,m as g,n as x,p as C,q as I,F as p,Y as b,aA as U,l as A,G as T,H as v,J as B,s as F,K as S,k as w,j as y,a as L,ab as N}from"./index-6YVP06UH.js";import{u as $}from"./riskassessment-hEEgjnB3.js";import{T as E}from"./TemplateRiskAssessmentPage-axdKbpF4.js";import{a as G}from"./helpers-iJWbSvob.js";import{_ as i}from"./HistoryTextarea.vue_vue_type_script_setup_true_lang-a9_zLHQ5.js";import"./database-GtjOZku2.js";import"./livequery-DZoN91kH.js";import"./liveriskstree-dDb20zb1.js";import"./GenericEditModal-Dq9AzYfS.js";import"./index-0jqLegA0.js";import"./index-9UN-Ox_G.js";const P={class:"ion-text-right"},W=k({__name:"RAEditAccess",setup(R){const s=$(),u=h(void 0);function f(){s.addSector(),setTimeout(()=>{u.value.$refs.content.$el.scrollToBottom(500)},100)}function _(l){const r=s.access.findIndex(e=>e.id===l.id);if(r===-1){console.warn("Sector "+l.title+"  ("+l.id+") not found in riskassessment");return}s.access.splice(r,1)}function V(l){G("Die Gefährdung wirklich aus der Liste entfernen?",{text:"Löschen",role:"destructive",icon:N,handler:()=>{_(l)}})}return(l,r)=>(d(),m(E,{ref_key:"page",ref:u},{default:o(()=>[t(s).ready?(d(),c(p,{key:0},[a(t(I),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:o(()=>[a(t(g),{onClick:f},{default:o(()=>[a(t(x),{icon:t(C)},null,8,["icon"])]),_:1})]),_:1}),a(U,{name:"list"},{default:o(()=>[(d(!0),c(p,null,b(t(s).access,e=>(d(),m(t(T),{key:e.id},{default:o(()=>[a(t(v),null,{default:o(()=>[a(t(B),null,{default:o(()=>[a(t(F),{modelValue:e.title,"onUpdate:modelValue":n=>e.title=n,label:"Titel","label-placement":"floating"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),a(t(S),null,{default:o(()=>[a(i,{modelValue:e.entrance,"onUpdate:modelValue":n=>e.entrance=n,label:"Eingang","input-id":"ra_sector_entrance"},null,8,["modelValue","onUpdate:modelValue"]),a(i,{modelValue:e.exit,"onUpdate:modelValue":n=>e.exit=n,label:"Ausgang","input-id":"ra_sector_exit"},null,8,["modelValue","onUpdate:modelValue"]),a(i,{modelValue:e.anchorPoints,"onUpdate:modelValue":n=>e.anchorPoints=n,label:"Anschlagpunkte","input-id":"ra_sector_anchorpoints"},null,8,["modelValue","onUpdate:modelValue"]),a(i,{modelValue:e.comment,"onUpdate:modelValue":n=>e.comment=n,label:"Kommentar","input-id":"ra_sector_comment"},null,8,["modelValue","onUpdate:modelValue"]),L("div",P,[a(t(w),{fill:"clear",color:"danger",onClick:n=>V(e)},{default:o(()=>[y("Löschen")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})],64)):A("",!0)]),_:1},512))}});export{W as default};
