import{d,u as f,e as p,o,c,w as s,f as e,g as k,b as t,I as _,h as v,i as b,j as l,k as g,F as I,l as R}from"./index-TA_wujje.js";import{l as h}from"./liveriskstree-7BD0GhmO.js";import{l as i}from"./livequery-Avxi29E8.js";import{_ as B}from"./MeasureCatalog.vue_vue_type_script_setup_true_lang-uzFF0-Tf.js";import{R as y}from"./RiskListItem-SmA2DyMJ.js";import{T as C}from"./TemplateGenericEditPage-FQmfk2lF.js";import"./helpers-XEDI7-F6.js";import"./GenericList.vue_vue_type_script_setup_true_lang-fIxnK2Oy.js";const M=d({__name:"RiskDetailsPage",setup(L){const u=parseInt(f().params.id),a=h.getAsRef(u);i.table("measures").updated();const m=p(()=>a.value===void 0||!i.table("measures").isReady()?[]:i.table("measures").entries().filter(r=>r.solveRisks.includes(a.value.id)));return(r,n)=>(o(),c(C,{onShouldCancel:n[0]||(n[0]=T=>r.$router.back()),"hide-submit":""},{default:s(()=>[e(a)?(o(),k(I,{key:0},[t(e(_),{inset:""},{default:s(()=>[t(y,{risk:e(a)},null,8,["risk"])]),_:1}),t(B,{inset:"",entries:m.value},{header:s(()=>[t(e(v),null,{default:s(()=>[t(e(b),null,{default:s(()=>[l("Verfügbare Maßnahmen")]),_:1}),t(e(g),{"router-link":"/measures/new?for=".concat(e(a).id)},{default:s(()=>[l("Hinzufügen")]),_:1},8,["router-link"])]),_:1})]),_:1},8,["entries"])],64)):R("",!0)]),_:1}))}});export{M as default};