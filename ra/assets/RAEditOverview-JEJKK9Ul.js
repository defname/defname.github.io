import{d as x,o as t,c as o,f as e,V as A,n as r,e as R,W as S,U as D,w as a,b as s,h as z,j as l,r as c,X as T,l as u,D as w,Y as N,N as B,Z as L,$ as P,a0 as j,i as y,a1 as C,g as i,F as d,a2 as F,a3 as U,t as b,a4 as q,a5 as G,I as M,a6 as O,a7 as $,a as I,_ as H}from"./index-IcbmUqw0.js";import{u as Q,a as W}from"./riskassessment-r4n6paQ6.js";import{l as X}from"./livequery-_oQCB0fk.js";import{T as Y}from"./TemplateRiskAssessmentPage-h4ipZIbY.js";import"./helpers-AgemSXbm.js";import"./liveriskstree-QxwyOlTP.js";const k=x({__name:"Checkmark",props:{condition:Boolean,notEmpty:String,notNull:Number},setup(g){return(v,n)=>(t(),o(e(r),{slot:"end",icon:e(A)},null,8,["icon"]))}}),Z=g=>(O("data-v-9f919eb1"),g=g(),$(),g),J=Z(()=>I("ul",{class:"nested-list",lines:"none"},[I("li",{class:"ion-no-padding ion-no-margin nested-list-item",lines:"none"},"TEst"),I("li",{class:"ion-no-padding ion-no-margin nested-list-item",lines:"none"},"TEst")],-1)),K={key:1,class:"nested-list ion-no-padding",lines:"none"},ee={class:"ion-no-padding ion-no-margin nested-list-item",lines:"none",size:"small"},ne=x({__name:"RAEditOverview",setup(g){const v=X.table("technicians"),n=Q(),E=R(()=>v.isReady().value?n.technicians.map(_=>v.get(_)):[]),m="/riskassessment/"+n.id,V=W(),h=S({direct:-1,all:-1,solved:-1});return D(V,async()=>{await n.ready,h.direct=n.risks.length;const _=await n.calcAllRisks();h.all=_.length,h.solved=_.filter(p=>n.measures[p]!==void 0&&n.measures[p].length>0).length}),(_,p)=>(t(),o(Y,null,{default:a(()=>[s(e(M),{lines:"full"},{default:a(()=>[s(e(z),null,{default:a(()=>[l(" Allgemeines ")]),_:1}),s(e(c),null,{default:a(()=>[s(e(r),{slot:"start",icon:e(T)},null,8,["icon"]),e(n).company?(t(),o(k,{key:0})):u("",!0),s(e(w),{label:"Ausführende Firma","label-placement":"floating",modelValue:e(n).company,"onUpdate:modelValue":p[0]||(p[0]=f=>e(n).company=f)},null,8,["modelValue"])]),_:1}),s(e(c),null,{default:a(()=>[s(e(r),{slot:"start",icon:e(N)},null,8,["icon"]),e(n).jobDescr?(t(),o(k,{key:0})):u("",!0),s(e(B),{label:"Beschreibung der Tätigkeit","label-placement":"floating","auto-grow":"",modelValue:e(n).jobDescr,"onUpdate:modelValue":p[1]||(p[1]=f=>e(n).jobDescr=f)},null,8,["modelValue"])]),_:1}),s(e(c),null,{default:a(()=>[s(e(r),{slot:"start",icon:e(L)},null,8,["icon"]),e(n).address?(t(),o(k,{key:0})):u("",!0),s(e(w),{"router-link":m+"/location",label:"Addresse","label-placement":"floating",readonly:"",value:e(n).address},null,8,["router-link","value"])]),_:1}),s(e(c),null,{default:a(()=>[s(e(r),{slot:"start",icon:e(P)},null,8,["icon"]),e(n).startDate?(t(),o(k,{key:0})):u("",!0),s(e(w),{"router-link":m+"/date",label:"Datum","label-placement":"floating",readonly:"",value:e(n).startDate+(e(n).endDate?" - "+e(n).endDate:"")},null,8,["router-link","value"])]),_:1}),s(e(c),{"router-link":m+"/equipment",detail:!1},{default:a(()=>[s(e(r),{slot:"start",icon:e(j)},null,8,["icon"]),e(n).equipment?(t(),o(k,{key:0})):u("",!0),s(e(y),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:a(()=>[l("Ausrüstung")]),_:1}),J]),_:1},8,["router-link"]),s(e(c),{"router-link":m+"/technicians",detail:!1},{default:a(()=>[s(e(r),{slot:"start",icon:e(C)},null,8,["icon"]),e(n).technicians.length>0?(t(),o(k,{key:0})):u("",!0),s(e(y),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:a(()=>[l("Personal")]),_:1}),e(n).technicians.length>0?(t(),i("ul",K,[(t(!0),i(d,null,F(E.value,f=>(t(),i("li",ee,b(f.name),1))),256))])):(t(),i(d,{key:2},[l(" Es wurde noch kein Personal ausgewählt ")],64))]),_:1},8,["router-link"]),s(e(c),{"router-link":m+"/access",detail:!1},{default:a(()=>[s(e(r),{slot:"start",icon:e(U)},null,8,["icon"]),e(n).access.length>0?(t(),o(k,{key:0})):u("",!0),s(e(y),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:a(()=>[l("Sektoren")]),_:1}),e(n).access.length===0?(t(),i(d,{key:1},[l("Es wurden noch keine Sektoren definiert")],64)):e(n).access.length===1?(t(),i(d,{key:2},[l("Es wurde ein Sektoren definiert")],64)):(t(),i(d,{key:3},[l("Es wurden bisher "+b(e(n).access.length)+" Sektoren definiert",1)],64))]),_:1},8,["router-link"]),s(e(c),{"router-link":m+"/rescue",detail:!1},{default:a(()=>[s(e(r),{slot:"start",icon:e(q)},null,8,["icon"]),e(n).access.length>0?(t(),o(k,{key:0})):u("",!0),s(e(y),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:a(()=>[l("Rettungskonzept")]),_:1}),e(n).access.length===0?(t(),i(d,{key:1},[l("Es wurden noch keine Sektoren definiert")],64)):(t(),i(d,{key:2},[l("Für "+b(e(n).access.filter(f=>f.rescue).length)+" Sektoren existiert ein Rettungskonzept",1)],64))]),_:1},8,["router-link"]),s(e(c),{"router-link":m+"/risks",detail:!1},{default:a(()=>[s(e(r),{slot:"start",icon:e(G)},null,8,["icon"]),e(n).access.length>0?(t(),o(k,{key:0})):u("",!0),s(e(y),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:a(()=>[l("Gefährdungen")]),_:1}),e(n).risks.length===0?(t(),i(d,{key:1},[l("Es wurden noch keine Gefährdungen hinzugefügt")],64)):(t(),i(d,{key:2},[l(" Von insgesamt "+b(h.all)+" sind für "+b(h.solved)+" Maßnahmen angegeben. ",1)],64))]),_:1},8,["router-link"])]),_:1})]),_:1}))}}),re=H(ne,[["__scopeId","data-v-9f919eb1"]]);export{re as default};