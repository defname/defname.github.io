import{d as w,U as x,o,c as d,w as t,b as n,f as e,m as z,n as A,p as v,q as I,g as R,V as B,F as D,O as F,P as L,Q as S,t as c,j as i,W as $,R as E,k as u,l as N,X as V,Y as y}from"./index-iO1bX4p0.js";import{d as f,a as k}from"./helpers-O1WMooQx.js";import{u as P,d as Q}from"./riskassessment-yje505BE.js";import{l as m}from"./livequery-7XNqutJr.js";import{_ as T}from"./TemplateMainPage.vue_vue_type_script_setup_true_lang-l1EySy_-.js";import"./liveriskstree-KWglCX74.js";const X=w({__name:"RiskAssessmentListPage",setup(j){const p=x(),g=m.table("riskassessmentsmeta").entries(),r=P();function h(){f.riskassessments.add({...Q}).then(s=>{const l=Math.floor(Date.now()/1e3);f.riskassessmentsmeta.add({id:s,descr:"Neue Gefährdungsbeurteilung "+s,created:l,lastChange:l}).then(()=>{})})}function _(s){r.id===s&&p.push("/riskassessment/"+s),r.id!==void 0&&s!==r.id&&r.modified()?k("In der geöffneten Einsatzplanung gibt es noch ungespeicherte Änderungen. Diese gehen verloren wenn eine andere geöffnet wird. Soll die Einsatzplanung trotzdem geöffnet werden?",{text:"Öffnen",role:"submit",icon:V,handler:()=>{r.loadFromDb(s)}}):r.loadFromDb(s)}function C(s){k("Soll der Einsatzplan wirklich unwideruflich gelöscht werden?",{text:"Löschen",icon:y,handler:()=>{m.table("riskassessments").delete(s),m.table("riskassessmentsmeta").delete(s)}})}return(s,l)=>(o(),d(T,null,{default:t(()=>[n(e(I),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:t(()=>[n(e(z),{onClick:l[0]||(l[0]=a=>h())},{default:t(()=>[n(e(A),{icon:e(v)},null,8,["icon"])]),_:1})]),_:1}),(o(!0),R(D,null,B(e(g),a=>(o(),d(e(F),null,{default:t(()=>[n(e(L),{onClick:b=>_(a.id)},{default:t(()=>[n(e(S),null,{default:t(()=>[i(c(a.descr),1)]),_:2},1024),n(e($),null,{default:t(()=>[i("Zuletzt geändert: "+c(new Date(a.lastChange*1e3).toLocaleString("de")),1)]),_:2},1024)]),_:2},1032,["onClick"]),a.id===e(r).id?(o(),d(e(E),{key:0},{default:t(()=>[n(e(u),{size:"small",fill:"clear",color:"danger",onClick:b=>C(a.id)},{default:t(()=>[i("Löschen")]),_:2},1032,["onClick"]),n(e(u),{size:"small",fill:"clear","router-link":"/riskassessment/".concat(a.id,"/export")},{default:t(()=>[i("Export")]),_:2},1032,["router-link"]),n(e(u),{size:"small",fill:"clear","router-link":"/riskassessment/".concat(a.id)},{default:t(()=>[i("Bearbeiten")]),_:2},1032,["router-link"])]),_:2},1024)):N("",!0)]),_:2},1024))),256))]),_:1}))}});export{X as default};
