System.register(["./index-legacy-O4CuuoOo.js","./riskassessment-legacy-V691gdAs.js","./livequery-legacy-Q6O-GR1i.js","./TemplateRiskAssessmentPage-legacy-p1fCQnPt.js","./GenericEditModal-legacy-k8XyxJk6.js","./HistoryTextarea.vue_vue_type_script_setup_true_lang-legacy-ed3wRe_X.js","./helpers-legacy-F0DIn3j9.js","./liveriskstree-legacy-NA9PhqSx.js","./index-legacy-CDknweOr.js"],(function(e,l){"use strict";var n,a,t,s,i,u,o,d,r,c,k,m,f,g,p,y,_,v,h,b,V,j,x,w,z,D,E,C,A,I,R,S,F,G,q,P,T,U,W,H,$,K,L,M,Z,B,J,O,X;return{setters:[e=>{n=e.d,a=e.o,t=e.c,s=e.f,i=e.U,u=e.n,o=e._,d=e.x,r=e.g,c=e.b,k=e.s,m=e.w,f=e.W,g=e.X,p=e.k,y=e.Y,_=e.I,v=e.F,h=e.R,b=e.Z,V=e.r,j=e.i,x=e.t,w=e.j,z=e.$,D=e.a0,E=e.V,C=e.e,A=e.a1,I=e.a2,R=e.h,S=e.a3,F=e.l,G=e.a4,q=e.a5,P=e.a6,T=e.a7,U=e.a8,W=e.a9,H=e.aa,$=e.ab},e=>{K=e.u,L=e.a},e=>{M=e.l},e=>{Z=e.T},e=>{B=e.G},e=>{J=e.u,O=e.a,X=e._},null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".checkmark[data-v-b74799a7]{float:right}.label[data-v-12e4f4fb]{margin-bottom:10px}.nested-list[data-v-12e4f4fb]{background:transparent;width:100%;padding:0;margin:0}.nested-list-item[data-v-12e4f4fb]{background:transparent;padding:0;margin:0;border:0}\n",document.head.appendChild(l);const Y=o(n({__name:"Checkmark",setup:e=>(e,l)=>(a(),t(s(u),{class:"checkmark",slot:"end",color:"success",icon:s(i)},null,8,["icon"]))}),[["__scopeId","data-v-b74799a7"]]),N=n({__name:"HistoryInput",props:{modelValue:{},label:{},inputId:{}},emits:["update:modelValue"],setup(e,{emit:l}){const n=l,o=e,C=J(o.inputId),A=d(void 0),I=d(!1),R=d(""),{results:S}=O(R,C.entries,{matchAllWhenSearchEmpty:!0});function F(e){"save"===e.detail.role&&(n("update:modelValue",R.value),C.add(R.value)),I.value=!1}function G(){R.value=o.modelValue}function q(e){R.value=e,A.value.$el.setFocus()}return(e,l)=>(a(),r(v,null,[c(s(k),{label:e.label,"label-placement":"floating",value:e.modelValue,onClick:l[0]||(l[0]=e=>I.value=!0)},null,8,["label","value"]),c(B,{"is-open":I.value,onWillDismiss:F,onDidPresent:l[4]||(l[4]=e=>A.value.$el.setFocus()),onWillPresent:G,"icon-save":s(i)},{default:m((()=>[c(s(k),{ref_key:"input",ref:A,label:e.label,"label-placement":"stacked",modelValue:R.value,"onUpdate:modelValue":l[2]||(l[2]=e=>R.value=e),onKeydown:l[3]||(l[3]=f(g((e=>q(s(S)[0].item)),["prevent"]),["tab"]))},{default:m((()=>[c(s(p),{slot:"end",fill:"clear",onClick:l[1]||(l[1]=l=>{console.log(R.value,e.modelValue),R.value=e.modelValue})},{default:m((()=>[c(s(u),{slot:"icon-only",icon:s(y)},null,8,["icon"])])),_:1})])),_:1},8,["label","modelValue"]),c(s(_),{ref:"slidingList"},{default:m((()=>[(a(!0),r(v,null,h(s(S),((e,l)=>(a(),t(s(b),{key:e.item,ref_for:!0,ref:"slidingItem"},{default:m((()=>[c(s(V),{onClick:l=>q(e.item)},{default:m((()=>[c(s(j),null,{default:m((()=>[w(x(e.item),1)])),_:2},1024)])),_:2},1032,["onClick"]),c(s(z),{side:"end"},{default:m((()=>[c(s(D),{color:"danger",onClick:l=>{return n=e.item,C.remove(n);var n}},{default:m((()=>[c(s(u),{icon:s(E),slot:"end"},null,8,["icon"]),w(" Löschen ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1},512)])),_:1},8,["is-open","icon-save"])],64))}}),Q={key:1,class:"nested-list",lines:"none"},ee={class:"ion-no-padding ion-no-margin nested-list-item",lines:"none"},le={key:1,class:"nested-list ion-no-padding",lines:"none"},ne={class:"ion-no-padding ion-no-margin nested-list-item",lines:"none",size:"small"};e("default",o(n({__name:"RAEditOverview",setup(e){const l=M.table("technicians"),n=M.table("equipment"),i=K(),o=C((()=>l.isReady().value?i.technicians.map((e=>l.get(e))):[])),d=C((()=>n.isReady().value?i.equipment.map((e=>n.get(e))):[])),f="/riskassessment/"+i.id,g=L(),p=A({direct:-1,all:-1,solved:-1});return I(g,(async()=>{await i.ready,p.direct=i.risks.length;const e=await i.calcAllRisks();p.all=e.length,p.solved=e.filter((e=>void 0!==i.measures[e]&&i.measures[e].length>0)).length})),(e,l)=>(a(),t(Z,null,{default:m((()=>[c(s(_),{lines:"full"},{default:m((()=>[c(s(R),null,{default:m((()=>[w(" Allgemeines ")])),_:1}),c(s(V),null,{default:m((()=>[c(s(u),{slot:"start",icon:s(S)},null,8,["icon"]),s(i).company?(a(),t(Y,{key:0})):F("",!0),c(N,{modelValue:s(i).company,"onUpdate:modelValue":l[0]||(l[0]=e=>s(i).company=e),"input-id":"ra_company",label:"Ausführende Firma"},null,8,["modelValue"])])),_:1}),c(s(V),null,{default:m((()=>[c(s(u),{slot:"start",icon:s(G)},null,8,["icon"]),s(i).jobDescr?(a(),t(Y,{key:0})):F("",!0),c(X,{label:"Beschreibung der Tätigkeit","input-id":"ra_jobdescr",modelValue:s(i).jobDescr,"onUpdate:modelValue":l[1]||(l[1]=e=>s(i).jobDescr=e)},null,8,["modelValue"])])),_:1}),c(s(V),null,{default:m((()=>[c(s(u),{slot:"start",icon:s(q)},null,8,["icon"]),s(i).address?(a(),t(Y,{key:0})):F("",!0),c(s(k),{"router-link":f+"/location",label:"Addresse","label-placement":"floating",readonly:"",value:s(i).address},null,8,["router-link","value"])])),_:1}),c(s(V),null,{default:m((()=>[c(s(u),{slot:"start",icon:s(P)},null,8,["icon"]),s(i).startDate?(a(),t(Y,{key:0})):F("",!0),c(s(k),{"router-link":f+"/date",label:"Datum","label-placement":"floating",readonly:"",value:s(i).startDate+(s(i).endDate?" - "+s(i).endDate:"")},null,8,["router-link","value"])])),_:1}),c(s(V),{"router-link":f+"/equipment",detail:!1},{default:m((()=>[c(s(u),{slot:"start",icon:s(T)},null,8,["icon"]),s(i).equipment?(a(),t(Y,{key:0})):F("",!0),c(s(j),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:m((()=>[w("Ausrüstung")])),_:1}),d.value.length>0?(a(),r("ul",Q,[(a(!0),r(v,null,h(d.value,(e=>(a(),r("li",ee,x(e.descr),1)))),256))])):F("",!0)])),_:1},8,["router-link"]),c(s(V),{"router-link":f+"/technicians",detail:!1},{default:m((()=>[c(s(u),{slot:"start",icon:s(U)},null,8,["icon"]),s(i).technicians.length>0?(a(),t(Y,{key:0})):F("",!0),c(s(j),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:m((()=>[w("Personal")])),_:1}),s(i).technicians.length>0?(a(),r("ul",le,[(a(!0),r(v,null,h(o.value,(e=>(a(),r("li",ne,x(e.name),1)))),256))])):(a(),r(v,{key:2},[w(" Es wurde noch kein Personal ausgewählt ")],64))])),_:1},8,["router-link"]),c(s(R),null,{default:m((()=>[w(" Zugang ")])),_:1}),c(s(V),{"router-link":f+"/access",detail:!1},{default:m((()=>[c(s(u),{slot:"start",icon:s(W)},null,8,["icon"]),s(i).access.length>0?(a(),t(Y,{key:0})):F("",!0),c(s(j),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:m((()=>[w("Sektoren")])),_:1}),0===s(i).access.length?(a(),r(v,{key:1},[w("Es wurden noch keine Sektoren definiert")],64)):1===s(i).access.length?(a(),r(v,{key:2},[w("Es wurde ein Sektor definiert")],64)):(a(),r(v,{key:3},[w("Es wurden bisher "+x(s(i).access.length)+" Sektoren definiert",1)],64))])),_:1},8,["router-link"]),c(s(V),{"router-link":f+"/rescue",detail:!1},{default:m((()=>[c(s(u),{slot:"start",icon:s(H)},null,8,["icon"]),s(i).access.length>0?(a(),t(Y,{key:0})):F("",!0),c(s(j),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:m((()=>[w("Rettungskonzept")])),_:1}),0===s(i).access.length?(a(),r(v,{key:1},[w("Es wurden noch keine Sektoren definiert")],64)):(a(),r(v,{key:2},[w("Für "+x(s(i).access.filter((e=>e.rescue)).length)+" Sektoren existiert ein Rettungskonzept",1)],64))])),_:1},8,["router-link"]),c(s(R),null,{default:m((()=>[w(" Gefährdungen ")])),_:1}),c(s(V),{"router-link":f+"/risks",detail:!1},{default:m((()=>[c(s(u),{slot:"start",icon:s($)},null,8,["icon"]),s(i).access.length>0?(a(),t(Y,{key:0})):F("",!0),c(s(j),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:m((()=>[w("Gefährdungen")])),_:1}),0===p.all?(a(),r(v,{key:1},[w("Es wurden noch keine Gefährdungen hinzugefügt")],64)):(a(),r(v,{key:2},[w(" Von insgesamt "+x(p.all)+" Gefährdungen sind für "+x(p.solved)+" Maßnahmen angegeben. ",1)],64))])),_:1},8,["router-link"])])),_:1})])),_:1}))}}),[["__scopeId","data-v-12e4f4fb"]]))}}}));
