import{d as F,x as m,aj as G,e as C,u as B,o,c as u,w as a,b as s,f as e,af as v,i as f,j as i,ag as N,g as p,m as U,n as A,p as b,q,F as I,R as V,l as k,G as D,U as Z,H as z,T as H,t as g,J as P,ak as W,K as J,I as K,h as Q,r as X,k as x,a as Y,V as j,_ as O}from"./index-moZKpHyX.js";import{u as ee,a as ae}from"./riskassessment-SQJpM6Cc.js";import{_ as se}from"./RiskCatalog.vue_vue_type_script_setup_true_lang-6USrafZj.js";import{G as te}from"./GenericEditModal-y7kKvbZT.js";import{l as L}from"./liveriskstree-Trw7157v.js";import{l as ne}from"./livequery-oYSwY8HK.js";import{_ as le}from"./AddedByList.vue_vue_type_script_setup_true_lang-FsNL9KK7.js";import{T as re}from"./TemplateRiskAssessmentPage-4adekKqQ.js";import{a as oe}from"./helpers-RUszpi03.js";const ie={class:"ion-text-right"},ue=F({__name:"RAEditRisks",setup(de){m(0),G(()=>console.log("will enter"));const n=ee(),T=ae(),y=ne.table("measures"),w=C(()=>L.isReady()?T.value.map(l=>({risk:L.get(l),meta:n.getMeta(l)})):[]),d=m("Z");m(-1);const M=C(()=>w.value.filter(l=>l.risk.sector===d.value));["Z","U","A"].includes(B().query.sector)&&(d.value=B().query.sector);const _=m(!1);function S(l){n.risks=n.risks.filter(r=>r!==l.risk.id)}function $(l){oe("Die Gefährdung wirklich aus der Liste entfernen?",{text:"Löschen",role:"destructive",icon:j,handler:()=>{S(l)}})}const E="/riskassessment/"+n.id+"/risks";return(l,r)=>(o(),u(re,null,{default:a(()=>[s(e(N),{value:d.value,onIonChange:r[0]||(r[0]=t=>{d.value=t.detail.value,l.$router.replace({query:{sector:t.detail.value}})})},{default:a(()=>[s(e(v),{value:"Z"},{default:a(()=>[s(e(f),null,{default:a(()=>[i("Zugang")]),_:1})]),_:1}),s(e(v),{value:"U"},{default:a(()=>[s(e(f),null,{default:a(()=>[i("Umgebung")]),_:1})]),_:1}),s(e(v),{value:"A"},{default:a(()=>[s(e(f),null,{default:a(()=>[i("Arbeit")]),_:1})]),_:1})]),_:1},8,["value"]),e(n).ready&&e(y).isReady()?(o(),p(I,{key:0},[s(e(q),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:a(()=>[s(e(U),{onClick:r[1]||(r[1]=t=>_.value=!0)},{default:a(()=>[s(e(A),{icon:e(b)},null,8,["icon"])]),_:1})]),_:1}),(o(!0),p(I,null,V(M.value,t=>(o(),u(e(D),{key:t.risk.id,class:"risk-card"},{default:a(()=>[s(e(A),{icon:e(Z),color:"success",class:"checkmark ion-padding ion-float-right",size:"large"},null,8,["icon"]),s(e(z),null,{default:a(()=>[s(e(H),null,{default:a(()=>{var c,R,h;return[i(g((R=(c=t.risk.factor)==null?void 0:c.category)==null?void 0:R.descr)+" ➤ "+g((h=t.risk.factor)==null?void 0:h.descr),1)]}),_:2},1024),s(e(P),{style:{"font-size":"1.1rem"}},{default:a(()=>[i(g(t.risk.descr),1)]),_:2},1024),e(n).meta[t.risk.id].addedBy.length>0?(o(),u(e(W),{key:0,style:{"margin-bottom":"1rem"}},{default:a(()=>[s(le,{"trigger-list":e(n).meta[t.risk.id].addedBy},null,8,["trigger-list"])]),_:2},1024)):k("",!0)]),_:2},1024),s(e(J),{class:"ion-no-margin ion-no-padding"},{default:a(()=>[e(n).getMeasures(t.risk.id).length?(o(),u(e(K),{key:0,class:"risk-solved ion-no-padding ion-no-margin",lines:"none"},{default:a(()=>[s(e(Q),{class:"ion-no-margin"},{default:a(()=>[s(e(f),null,{default:a(()=>[i("Gewählte Maßnahmen")]),_:1})]),_:1}),(o(!0),p(I,null,V(e(n).getMeasures(t.risk.id),c=>(o(),u(e(X),{class:"ion-no-margin"},{default:a(()=>[i(g(e(y).get(c).descr),1)]),_:2},1024))),256))]),_:2},1024)):k("",!0),Y("div",ie,[e(n).meta[t.risk.id].addedBy.length===0?(o(),u(e(x),{key:0,fill:"clear",color:"danger",onClick:c=>$(t)},{default:a(()=>[i("Löschen")]),_:2},1032,["onClick"])):k("",!0),s(e(x),{fill:"clear","router-link":E+"/"+t.risk.id},{default:a(()=>[i("Bearbeiten")]),_:2},1032,["router-link"])])]),_:2},1024)]),_:2},1024))),128)),s(te,{"is-open":_.value,onWillDismiss:r[3]||(r[3]=t=>_.value=!1),"hide-save":""},{default:a(()=>[s(se,{modelValue:e(n).risks,"onUpdate:modelValue":r[2]||(r[2]=t=>e(n).risks=t),sector:d.value,"link-to-function":()=>{}},null,8,["modelValue","sector"])]),_:1},8,["is-open"])],64)):k("",!0)]),_:1}))}}),ye=O(ue,[["__scopeId","data-v-ab65f980"]]);export{ye as default};
