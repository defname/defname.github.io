import{d as S,o as t,c as i,f as e,U as q,n as u,_ as G,x as E,g as o,b as n,s as D,w as s,W as j,X as B,k as H,Y as W,I as M,F as r,R as z,Z as O,r as _,i as w,t as I,j as a,$ as U,a0 as N,V as K,e as P,a1 as Z,a2 as Q,h as x,a3 as X,l as g,a4 as Y,a5 as J,a6 as ee,a7 as ne,a8 as le,a9 as te,aa as se,ab as ae}from"./index-sS98weYx.js";import{u as oe,a as ie}from"./riskassessment-P18IDQr_.js";import{l as L}from"./livequery-Ch80CViN.js";import{T as re}from"./TemplateRiskAssessmentPage-y_oqguj4.js";import{G as ue}from"./GenericEditModal-cEmUsmU9.js";import{u as de,a as ce,_ as me}from"./HistoryTextarea.vue_vue_type_script_setup_true_lang-57kzMYG8.js";import"./helpers-6pYLpwcd.js";import"./liveriskstree-BHmaqo59.js";const ke=S({__name:"Checkmark",setup($){return(R,A)=>(t(),i(e(u),{class:"checkmark",slot:"end",color:"success",icon:e(q)},null,8,["icon"]))}}),b=G(ke,[["__scopeId","data-v-b74799a7"]]),fe=S({__name:"HistoryInput",props:{modelValue:{},label:{},inputId:{}},emits:["update:modelValue"],setup($,{emit:R}){const A=R,l=$,C=de(l.inputId),V=E(void 0),d=E(!1),c=E(""),{results:v}=ce(c,C.entries,{matchAllWhenSearchEmpty:!0});function y(k){k.detail.role==="save"&&(A("update:modelValue",c.value),C.add(c.value)),d.value=!1}function h(){c.value=l.modelValue}function m(k){return C.remove(k)}function F(k){c.value=k,V.value.$el.setFocus()}return(k,f)=>(t(),o(r,null,[n(e(D),{label:k.label,"label-placement":"floating",value:k.modelValue,onClick:f[0]||(f[0]=p=>d.value=!0)},null,8,["label","value"]),n(ue,{"is-open":d.value,onWillDismiss:y,onDidPresent:f[4]||(f[4]=p=>V.value.$el.setFocus()),onWillPresent:h,"icon-save":e(q)},{default:s(()=>[n(e(D),{ref_key:"input",ref:V,label:k.label,"label-placement":"stacked",modelValue:c.value,"onUpdate:modelValue":f[2]||(f[2]=p=>c.value=p),onKeydown:f[3]||(f[3]=j(B(p=>F(e(v)[0].item),["prevent"]),["tab"]))},{default:s(()=>[n(e(H),{slot:"end",fill:"clear",onClick:f[1]||(f[1]=p=>{console.log(c.value,k.modelValue),c.value=k.modelValue})},{default:s(()=>[n(e(u),{slot:"icon-only",icon:e(W)},null,8,["icon"])]),_:1})]),_:1},8,["label","modelValue"]),n(e(M),{ref:"slidingList"},{default:s(()=>[(t(!0),o(r,null,z(e(v),(p,he)=>(t(),i(e(O),{key:p.item,ref_for:!0,ref:"slidingItem"},{default:s(()=>[n(e(_),{onClick:T=>F(p.item)},{default:s(()=>[n(e(w),null,{default:s(()=>[a(I(p.item),1)]),_:2},1024)]),_:2},1032,["onClick"]),n(e(U),{side:"end"},{default:s(()=>[n(e(N),{color:"danger",onClick:T=>m(p.item)},{default:s(()=>[n(e(u),{icon:e(K),slot:"end"},null,8,["icon"]),a(" Löschen ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1},512)]),_:1},8,["is-open","icon-save"])],64))}}),pe={key:1,class:"nested-list",lines:"none"},ge={class:"ion-no-padding ion-no-margin nested-list-item",lines:"none"},_e={key:1,class:"nested-list ion-no-padding",lines:"none"},ve={class:"ion-no-padding ion-no-margin nested-list-item",lines:"none",size:"small"},ye=S({__name:"RAEditOverview",setup($){const R=L.table("technicians"),A=L.table("equipment"),l=oe(),C=P(()=>R.isReady().value?l.technicians.map(y=>R.get(y)):[]),V=P(()=>A.isReady().value?l.equipment.map(y=>A.get(y)):[]),d="/riskassessment/"+l.id,c=ie(),v=Z({direct:-1,all:-1,solved:-1});return Q(c,async()=>{await l.ready,v.direct=l.risks.length;const y=await l.calcAllRisks();v.all=y.length,v.solved=y.filter(h=>l.measures[h]!==void 0&&l.measures[h].length>0).length}),(y,h)=>(t(),i(re,null,{default:s(()=>[n(e(M),{lines:"full"},{default:s(()=>[n(e(x),null,{default:s(()=>[a(" Allgemeines ")]),_:1}),n(e(_),null,{default:s(()=>[n(e(u),{slot:"start",icon:e(X)},null,8,["icon"]),e(l).company?(t(),i(b,{key:0})):g("",!0),n(fe,{modelValue:e(l).company,"onUpdate:modelValue":h[0]||(h[0]=m=>e(l).company=m),"input-id":"ra_company",label:"Ausführende Firma"},null,8,["modelValue"])]),_:1}),n(e(_),null,{default:s(()=>[n(e(u),{slot:"start",icon:e(Y)},null,8,["icon"]),e(l).jobDescr?(t(),i(b,{key:0})):g("",!0),n(me,{label:"Beschreibung der Tätigkeit","input-id":"ra_jobdescr",modelValue:e(l).jobDescr,"onUpdate:modelValue":h[1]||(h[1]=m=>e(l).jobDescr=m)},null,8,["modelValue"])]),_:1}),n(e(_),null,{default:s(()=>[n(e(u),{slot:"start",icon:e(J)},null,8,["icon"]),e(l).address?(t(),i(b,{key:0})):g("",!0),n(e(D),{"router-link":d+"/location",label:"Addresse","label-placement":"floating",readonly:"",value:e(l).address},null,8,["router-link","value"])]),_:1}),n(e(_),null,{default:s(()=>[n(e(u),{slot:"start",icon:e(ee)},null,8,["icon"]),e(l).startDate?(t(),i(b,{key:0})):g("",!0),n(e(D),{"router-link":d+"/date",label:"Datum","label-placement":"floating",readonly:"",value:e(l).startDate+(e(l).endDate?" - "+e(l).endDate:"")},null,8,["router-link","value"])]),_:1}),n(e(_),{"router-link":d+"/equipment",detail:!1},{default:s(()=>[n(e(u),{slot:"start",icon:e(ne)},null,8,["icon"]),e(l).equipment?(t(),i(b,{key:0})):g("",!0),n(e(w),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:s(()=>[a("Ausrüstung")]),_:1}),V.value.length>0?(t(),o("ul",pe,[(t(!0),o(r,null,z(V.value,m=>(t(),o("li",ge,I(m.descr),1))),256))])):g("",!0)]),_:1},8,["router-link"]),n(e(_),{"router-link":d+"/technicians",detail:!1},{default:s(()=>[n(e(u),{slot:"start",icon:e(le)},null,8,["icon"]),e(l).technicians.length>0?(t(),i(b,{key:0})):g("",!0),n(e(w),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:s(()=>[a("Personal")]),_:1}),e(l).technicians.length>0?(t(),o("ul",_e,[(t(!0),o(r,null,z(C.value,m=>(t(),o("li",ve,I(m.name),1))),256))])):(t(),o(r,{key:2},[a(" Es wurde noch kein Personal ausgewählt ")],64))]),_:1},8,["router-link"]),n(e(x),null,{default:s(()=>[a(" Zugang ")]),_:1}),n(e(_),{"router-link":d+"/access",detail:!1},{default:s(()=>[n(e(u),{slot:"start",icon:e(te)},null,8,["icon"]),e(l).access.length>0?(t(),i(b,{key:0})):g("",!0),n(e(w),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:s(()=>[a("Sektoren")]),_:1}),e(l).access.length===0?(t(),o(r,{key:1},[a("Es wurden noch keine Sektoren definiert")],64)):e(l).access.length===1?(t(),o(r,{key:2},[a("Es wurde ein Sektor definiert")],64)):(t(),o(r,{key:3},[a("Es wurden bisher "+I(e(l).access.length)+" Sektoren definiert",1)],64))]),_:1},8,["router-link"]),n(e(_),{"router-link":d+"/rescue",detail:!1},{default:s(()=>[n(e(u),{slot:"start",icon:e(se)},null,8,["icon"]),e(l).access.length>0?(t(),i(b,{key:0})):g("",!0),n(e(w),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:s(()=>[a("Rettungskonzept")]),_:1}),e(l).access.length===0?(t(),o(r,{key:1},[a("Es wurden noch keine Sektoren definiert")],64)):(t(),o(r,{key:2},[a("Für "+I(e(l).access.filter(m=>m.rescue).length)+" Sektoren existiert ein Rettungskonzept",1)],64))]),_:1},8,["router-link"]),n(e(x),null,{default:s(()=>[a(" Gefährdungen ")]),_:1}),n(e(_),{"router-link":d+"/risks",detail:!1},{default:s(()=>[n(e(u),{slot:"start",icon:e(ae)},null,8,["icon"]),e(l).access.length>0?(t(),i(b,{key:0})):g("",!0),n(e(w),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:s(()=>[a("Gefährdungen")]),_:1}),v.all===0?(t(),o(r,{key:1},[a("Es wurden noch keine Gefährdungen hinzugefügt")],64)):(t(),o(r,{key:2},[a(" Von insgesamt "+I(v.all)+" Gefährdungen sind für "+I(v.solved)+" Maßnahmen angegeben. ",1)],64))]),_:1},8,["router-link"])]),_:1})]),_:1}))}}),$e=G(ye,[["__scopeId","data-v-12e4f4fb"]]);export{$e as default};
