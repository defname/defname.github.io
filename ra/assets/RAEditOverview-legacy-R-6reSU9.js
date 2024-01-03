System.register(["./index-legacy-AQwVFCxC.js","./riskassessment-legacy-glroQlBf.js","./livequery-legacy-SEa9o6do.js","./TemplateRiskAssessmentPage-legacy-C9ptRRkR.js","./helpers-legacy-MUCFszsT.js","./liveriskstree-legacy-qzT4Wk_q.js"],(function(e,l){"use strict";var n,t,a,s,i,o,r,c,d,u,k,g,m,h,y,f,b,p,_,v,w,x,j,z,E,D,V,A,S,R,T,I,q,C,F,G,P,U,B,H;return{setters:[e=>{n=e.d,t=e.o,a=e.c,s=e.f,i=e.X,o=e.n,r=e._,c=e.e,d=e.Z,u=e.$,k=e.w,g=e.b,m=e.h,h=e.j,y=e.r,f=e.a0,b=e.l,p=e.D,_=e.a1,v=e.N,w=e.a2,x=e.a3,j=e.a4,z=e.i,E=e.a5,D=e.g,V=e.F,A=e.V,S=e.a6,R=e.t,T=e.a7,I=e.a8,q=e.I,C=e.a9,F=e.aa,G=e.a},e=>{P=e.u,U=e.a},e=>{B=e.l},e=>{H=e.T},null,null],execute:function(){var l=document.createElement("style");l.textContent=".checkmark[data-v-b74799a7]{float:right}.label[data-v-9c2bb659]{margin-bottom:10px}.nested-list[data-v-9c2bb659]{background:transparent;width:100%;padding:0;margin:0}.nested-list-item[data-v-9c2bb659]{background:transparent;padding:0;margin:0;border:0}\n",document.head.appendChild(l);const M=r(n({__name:"Checkmark",setup:e=>(e,l)=>(t(),a(s(o),{class:"checkmark",slot:"end",color:"success",icon:s(i)},null,8,["icon"]))}),[["__scopeId","data-v-b74799a7"]]),N=(e=>(C("data-v-9c2bb659"),e=e(),F(),e))((()=>G("ul",{class:"nested-list",lines:"none"},[G("li",{class:"ion-no-padding ion-no-margin nested-list-item",lines:"none"},"TEst"),G("li",{class:"ion-no-padding ion-no-margin nested-list-item",lines:"none"},"TEst")],-1))),O={key:1,class:"nested-list ion-no-padding",lines:"none"},X={class:"ion-no-padding ion-no-margin nested-list-item",lines:"none",size:"small"};e("default",r(n({__name:"RAEditOverview",setup(e){const l=B.table("technicians"),n=P(),i=c((()=>l.isReady().value?n.technicians.map((e=>l.get(e))):[])),r="/riskassessment/"+n.id,C=U(),F=d({direct:-1,all:-1,solved:-1});return u(C,(async()=>{await n.ready,F.direct=n.risks.length;const e=await n.calcAllRisks();F.all=e.length,F.solved=e.filter((e=>void 0!==n.measures[e]&&n.measures[e].length>0)).length})),(e,l)=>(t(),a(H,null,{default:k((()=>[g(s(q),{lines:"full"},{default:k((()=>[g(s(m),null,{default:k((()=>[h(" Allgemeines ")])),_:1}),g(s(y),null,{default:k((()=>[g(s(o),{slot:"start",icon:s(f)},null,8,["icon"]),s(n).company?(t(),a(M,{key:0})):b("",!0),g(s(p),{label:"Ausführende Firma","label-placement":"floating",modelValue:s(n).company,"onUpdate:modelValue":l[0]||(l[0]=e=>s(n).company=e)},null,8,["modelValue"])])),_:1}),g(s(y),null,{default:k((()=>[g(s(o),{slot:"start",icon:s(_)},null,8,["icon"]),s(n).jobDescr?(t(),a(M,{key:0})):b("",!0),g(s(v),{label:"Beschreibung der Tätigkeit","label-placement":"floating","auto-grow":"",modelValue:s(n).jobDescr,"onUpdate:modelValue":l[1]||(l[1]=e=>s(n).jobDescr=e)},null,8,["modelValue"])])),_:1}),g(s(y),null,{default:k((()=>[g(s(o),{slot:"start",icon:s(w)},null,8,["icon"]),s(n).address?(t(),a(M,{key:0})):b("",!0),g(s(p),{"router-link":r+"/location",label:"Addresse","label-placement":"floating",readonly:"",value:s(n).address},null,8,["router-link","value"])])),_:1}),g(s(y),null,{default:k((()=>[g(s(o),{slot:"start",icon:s(x)},null,8,["icon"]),s(n).startDate?(t(),a(M,{key:0})):b("",!0),g(s(p),{"router-link":r+"/date",label:"Datum","label-placement":"floating",readonly:"",value:s(n).startDate+(s(n).endDate?" - "+s(n).endDate:"")},null,8,["router-link","value"])])),_:1}),g(s(y),{"router-link":r+"/equipment",detail:!1},{default:k((()=>[g(s(o),{slot:"start",icon:s(j)},null,8,["icon"]),s(n).equipment?(t(),a(M,{key:0})):b("",!0),g(s(z),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:k((()=>[h("Ausrüstung")])),_:1}),N])),_:1},8,["router-link"]),g(s(y),{"router-link":r+"/technicians",detail:!1},{default:k((()=>[g(s(o),{slot:"start",icon:s(E)},null,8,["icon"]),s(n).technicians.length>0?(t(),a(M,{key:0})):b("",!0),g(s(z),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:k((()=>[h("Personal")])),_:1}),s(n).technicians.length>0?(t(),D("ul",O,[(t(!0),D(V,null,A(i.value,(e=>(t(),D("li",X,R(e.name),1)))),256))])):(t(),D(V,{key:2},[h(" Es wurde noch kein Personal ausgewählt ")],64))])),_:1},8,["router-link"]),g(s(y),{"router-link":r+"/access",detail:!1},{default:k((()=>[g(s(o),{slot:"start",icon:s(S)},null,8,["icon"]),s(n).access.length>0?(t(),a(M,{key:0})):b("",!0),g(s(z),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:k((()=>[h("Sektoren")])),_:1}),0===s(n).access.length?(t(),D(V,{key:1},[h("Es wurden noch keine Sektoren definiert")],64)):1===s(n).access.length?(t(),D(V,{key:2},[h("Es wurde ein Sektor definiert")],64)):(t(),D(V,{key:3},[h("Es wurden bisher "+R(s(n).access.length)+" Sektoren definiert",1)],64))])),_:1},8,["router-link"]),g(s(y),{"router-link":r+"/rescue",detail:!1},{default:k((()=>[g(s(o),{slot:"start",icon:s(T)},null,8,["icon"]),s(n).access.length>0?(t(),a(M,{key:0})):b("",!0),g(s(z),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:k((()=>[h("Rettungskonzept")])),_:1}),0===s(n).access.length?(t(),D(V,{key:1},[h("Es wurden noch keine Sektoren definiert")],64)):(t(),D(V,{key:2},[h("Für "+R(s(n).access.filter((e=>e.rescue)).length)+" Sektoren existiert ein Rettungskonzept",1)],64))])),_:1},8,["router-link"]),g(s(y),{"router-link":r+"/risks",detail:!1},{default:k((()=>[g(s(o),{slot:"start",icon:s(I)},null,8,["icon"]),s(n).access.length>0?(t(),a(M,{key:0})):b("",!0),g(s(z),{position:"stacked",style:{"z-index":"10"},class:"label"},{default:k((()=>[h("Gefährdungen")])),_:1}),0===F.all?(t(),D(V,{key:1},[h("Es wurden noch keine Gefährdungen hinzugefügt")],64)):(t(),D(V,{key:2},[h(" Von insgesamt "+R(F.all)+" Gefährdungen sind für "+R(F.solved)+" Maßnahmen angegeben. ",1)],64))])),_:1},8,["router-link"])])),_:1})])),_:1}))}}),[["__scopeId","data-v-9c2bb659"]]))}}}));
