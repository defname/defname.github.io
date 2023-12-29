import{d as x,o as t,c as o,f as e,V as A,n as r,e as R,W as S,U as D,w as a,b as n,h as z,j as l,r as c,X as T,l as u,D as w,Y as N,N as B,Z as L,$ as P,a0 as j,i as y,a1 as C,g as i,F as d,a2 as F,a3 as U,t as b,a4 as G,a5 as M,I as O,a6 as $,a7 as q,a as I,_ as H}from"./index-ANPSqhs9.js";import{u as Q,a as W}from"./riskassessment-nmcnph-i.js";import{l as X}from"./livequery-SbzudSlu.js";import{T as Y}from"./TemplateRiskAssessmentPage-0NU8yDGw.js";import"./helpers-1JCucRE1.js";import"./liveriskstree-1JQTezqS.js";const k=x({__name:"Checkmark",props:{condition:Boolean,notEmpty:String,notNull:Number},setup(f){return(v,s)=>(t(),o(e(r),{slot:"end",icon:e(A)},null,8,["icon"]))}}),Z=f=>($("data-v-c408a042"),f=f(),q(),f),J=Z(()=>I("ul",{class:"nested-list",lines:"none"},[I("li",{class:"ion-no-padding ion-no-margin nested-list-item",lines:"none"},"TEst"),I("li",{class:"ion-no-padding ion-no-margin nested-list-item",lines:"none"},"TEst")],-1)),K={key:1,class:"nested-list ion-no-padding",lines:"none"},ee={class:"ion-no-padding ion-no-margin nested-list-item",lines:"none",size:"small"},se=x({__name:"RAEditOverview",setup(f){const v=X.table("technicians"),s=Q(),E=R(()=>v.isReady().value?s.technicians.map(_=>v.get(_)):[]),g="/riskassessment/"+s.id,V=W(),h=S({direct:-1,all:-1,solved:-1});return D(V,async()=>{await s.ready,h.direct=s.risks.length;const _=await s.calcAllRisks();h.all=_.length,h.solved=_.filter(m=>s.measures[m]!==void 0&&s.measures[m].length>0).length}),(_,m)=>(t(),o(Y,null,{default:a(()=>[n(e(O),{lines:"full"},{default:a(()=>[n(e(z),null,{default:a(()=>[l(" Allgemeines ")]),_:1}),n(e(c),null,{default:a(()=>[n(e(r),{slot:"start",icon:e(T)},null,8,["icon"]),e(s).company?(t(),o(k,{key:0})):u("",!0),n(e(w),{label:"Ausführende Firma","label-placement":"floating",modelValue:e(s).company,"onUpdate:modelValue":m[0]||(m[0]=p=>e(s).company=p)},null,8,["modelValue"])]),_:1}),n(e(c),null,{default:a(()=>[n(e(r),{slot:"start",icon:e(N)},null,8,["icon"]),e(s).jobDescr?(t(),o(k,{key:0})):u("",!0),n(e(B),{label:"Beschreibung der Tätigkeit","label-placement":"floating","auto-grow":"",modelValue:e(s).jobDescr,"onUpdate:modelValue":m[1]||(m[1]=p=>e(s).jobDescr=p)},null,8,["modelValue"])]),_:1}),n(e(c),null,{default:a(()=>[n(e(r),{slot:"start",icon:e(L)},null,8,["icon"]),e(s).address?(t(),o(k,{key:0})):u("",!0),n(e(w),{"router-link":g+"/location",label:"Addresse","label-placement":"floating",readonly:"",value:e(s).address},null,8,["router-link","value"])]),_:1}),n(e(c),null,{default:a(()=>[n(e(r),{slot:"start",icon:e(P)},null,8,["icon"]),e(s).startDate?(t(),o(k,{key:0})):u("",!0),n(e(w),{"router-link":g+"/date",label:"Datum","label-placement":"floating",readonly:"",value:e(s).startDate+(e(s).endDate?" - "+e(s).endDate:"")},null,8,["router-link","value"])]),_:1}),n(e(c),null,{default:a(()=>[n(e(r),{slot:"start",icon:e(j)},null,8,["icon"]),e(s).equipment?(t(),o(k,{key:0})):u("",!0),n(e(y),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:a(()=>[l("Ausrüstung")]),_:1}),J]),_:1}),n(e(c),{"router-link":g+"/technicians",detail:!1},{default:a(()=>[n(e(r),{slot:"start",icon:e(C)},null,8,["icon"]),e(s).technicians.length>0?(t(),o(k,{key:0})):u("",!0),n(e(y),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:a(()=>[l("Personal")]),_:1}),e(s).technicians.length>0?(t(),i("ul",K,[(t(!0),i(d,null,F(E.value,p=>(t(),i("li",ee,b(p.name),1))),256))])):(t(),i(d,{key:2},[l(" Es wurde noch kein Personal ausgewählt ")],64))]),_:1},8,["router-link"]),n(e(c),{"router-link":g+"/access",detail:!1},{default:a(()=>[n(e(r),{slot:"start",icon:e(U)},null,8,["icon"]),e(s).access.length>0?(t(),o(k,{key:0})):u("",!0),n(e(y),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:a(()=>[l("Sektoren")]),_:1}),e(s).access.length===0?(t(),i(d,{key:1},[l("Es wurden noch keine Sektoren definiert")],64)):e(s).access.length===1?(t(),i(d,{key:2},[l("Es wurde ein Sektoren definiert")],64)):(t(),i(d,{key:3},[l("Es wurden bisher "+b(e(s).access.length)+" Sektoren definiert",1)],64))]),_:1},8,["router-link"]),n(e(c),{"router-link":g+"/rescue",detail:!1},{default:a(()=>[n(e(r),{slot:"start",icon:e(G)},null,8,["icon"]),e(s).access.length>0?(t(),o(k,{key:0})):u("",!0),n(e(y),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:a(()=>[l("Rettungskonzept")]),_:1}),e(s).access.length===0?(t(),i(d,{key:1},[l("Es wurden noch keine Sektoren definiert")],64)):(t(),i(d,{key:2},[l("Für "+b(e(s).access.filter(p=>p.rescue).length)+" Sektoren existiert ein Rettungskonzept",1)],64))]),_:1},8,["router-link"]),n(e(c),{"router-link":g+"/risks",detail:!1},{default:a(()=>[n(e(r),{slot:"start",icon:e(M)},null,8,["icon"]),e(s).access.length>0?(t(),o(k,{key:0})):u("",!0),n(e(y),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:a(()=>[l("Gefährdungen")]),_:1}),e(s).risks.length===0?(t(),i(d,{key:1},[l("Es wurden noch keine Gefährdungen hinzugefügt")],64)):(t(),i(d,{key:2},[l(" Von insgesamt "+b(h.all)+" sind für "+b(h.solved)+" Maßnahmen angegeben. ",1)],64))]),_:1},8,["router-link"])]),_:1})]),_:1}))}}),re=H(se,[["__scopeId","data-v-c408a042"]]);export{re as default};
