import{d as E,G as m,af as F,b as C,u as B,o,c as u,w as a,a as s,e,a7 as v,h as f,i,a8 as G,f as p,l as N,m as A,n as q,p as D,F as I,$ as L,k,aa as U,T as Z,ab as z,ag as H,t as g,ac as P,ah as W,ad as Q,I as J,g as K,q as X,j as V,a5 as Y,ae as j,_ as O}from"./index-1uhVeu27.js";import{u as ee,a as ae}from"./riskassessment-po1DWV-J.js";import{_ as se}from"./RiskCatalog.vue_vue_type_script_setup_true_lang-g-MX4mN2.js";import{G as te}from"./GenericEditModal-F1vfpGfl.js";import{l as x}from"./liveriskstree-OmMKWRX9.js";import{l as ne}from"./livequery-FTHvn9sK.js";import{_ as le}from"./AddedByList.vue_vue_type_script_setup_true_lang-Wj4AEASI.js";import{T as re}from"./TemplateRiskAssessmentPage-Ak7C8xVV.js";import{a as oe}from"./helpers-tcYpwod6.js";const ie={class:"ion-text-right"},ue=E({__name:"RAEditRisks",setup(de){m(0),F(()=>console.log("will enter"));const n=ee(),T=ae(),y=ne.table("measures"),$=C(()=>x.isReady()?T.value.map(l=>({risk:x.get(l),meta:n.getMeta(l)})):[]),d=m("Z");m(-1);const w=C(()=>$.value.filter(l=>l.risk.sector===d.value));["Z","U","A"].includes(B().query.sector)&&(d.value=B().query.sector);const _=m(!1);function M(l){n.risks=n.risks.filter(r=>r!==l.risk.id)}function S(l){oe("Die Gefährdung wirklich aus der Liste entfernen?",{text:"Löschen",role:"destructive",icon:j,handler:()=>{M(l)}})}const b="/riskassessment/"+n.id+"/risks";return(l,r)=>(o(),u(re,null,{default:a(()=>[s(e(G),{value:d.value,onIonChange:r[0]||(r[0]=t=>{d.value=t.detail.value,l.$router.replace({query:{sector:t.detail.value}})})},{default:a(()=>[s(e(v),{value:"Z"},{default:a(()=>[s(e(f),null,{default:a(()=>[i("Zugang")]),_:1})]),_:1}),s(e(v),{value:"U"},{default:a(()=>[s(e(f),null,{default:a(()=>[i("Umgebung")]),_:1})]),_:1}),s(e(v),{value:"A"},{default:a(()=>[s(e(f),null,{default:a(()=>[i("Arbeit")]),_:1})]),_:1})]),_:1},8,["value"]),e(n).ready&&e(y).isReady()?(o(),p(I,{key:0},[s(e(D),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:a(()=>[s(e(N),{onClick:r[1]||(r[1]=t=>_.value=!0)},{default:a(()=>[s(e(A),{icon:e(q)},null,8,["icon"])]),_:1})]),_:1}),(o(!0),p(I,null,L(w.value,t=>(o(),u(e(U),{key:t.risk.id,class:"risk-card"},{default:a(()=>[s(e(A),{icon:e(Z),color:"success",class:"checkmark ion-padding ion-float-right",size:"large"},null,8,["icon"]),s(e(z),null,{default:a(()=>[s(e(H),null,{default:a(()=>{var c,h,R;return[i(g((h=(c=t.risk.factor)==null?void 0:c.category)==null?void 0:h.descr)+" ➤ "+g((R=t.risk.factor)==null?void 0:R.descr),1)]}),_:2},1024),s(e(P),{style:{"font-size":"1.1rem"}},{default:a(()=>[i(g(t.risk.descr),1)]),_:2},1024),e(n).meta[t.risk.id].addedBy.length>0?(o(),u(e(W),{key:0,style:{"margin-bottom":"1rem"}},{default:a(()=>[s(le,{"trigger-list":e(n).meta[t.risk.id].addedBy},null,8,["trigger-list"])]),_:2},1024)):k("",!0)]),_:2},1024),s(e(Q),{class:"ion-no-margin ion-no-padding"},{default:a(()=>[e(n).getMeasures(t.risk.id).length?(o(),u(e(J),{key:0,class:"risk-solved ion-no-padding ion-no-margin",lines:"none"},{default:a(()=>[s(e(K),{class:"ion-no-margin"},{default:a(()=>[s(e(f),null,{default:a(()=>[i("Gewählte Maßnahmen")]),_:1})]),_:1}),(o(!0),p(I,null,L(e(n).getMeasures(t.risk.id),c=>(o(),u(e(X),{class:"ion-no-margin"},{default:a(()=>[i(g(e(y).get(c).descr),1)]),_:2},1024))),256))]),_:2},1024)):k("",!0),Y("div",ie,[e(n).meta[t.risk.id].addedBy.length===0?(o(),u(e(V),{key:0,fill:"clear",color:"danger",onClick:c=>S(t)},{default:a(()=>[i("Löschen")]),_:2},1032,["onClick"])):k("",!0),s(e(V),{fill:"clear","router-link":b+"/"+t.risk.id},{default:a(()=>[i("Bearbeiten")]),_:2},1032,["router-link"])])]),_:2},1024)]),_:2},1024))),128)),s(te,{"is-open":_.value,onWillDismiss:r[3]||(r[3]=t=>_.value=!1),"hide-save":""},{default:a(()=>[s(se,{modelValue:e(n).risks,"onUpdate:modelValue":r[2]||(r[2]=t=>e(n).risks=t),sector:d.value,"link-to-function":()=>{}},null,8,["modelValue","sector"])]),_:1},8,["is-open"])],64)):k("",!0)]),_:1}))}}),ye=O(ue,[["__scopeId","data-v-ab65f980"]]);export{ye as default};
