System.register(["./index-legacy-nPn_3o5d.js","./riskassessment-legacy-Ox3stk_u.js","./livequery-legacy-vwzSMw4A.js","./TemplateRiskAssessmentPage-legacy-tN_yXtRS.js","./helpers-legacy-zCt-UO2V.js","./liveriskstree-legacy-byJzoQ2V.js"],(function(e,l){"use strict";var n,t,a,s,i,o,d,u,r,c,g,m,k,f,p,y,_,b,h,v,j,D,E,V,A,S,T,w,C,q,x,N,R,U;return{setters:[e=>{n=e.d,t=e.o,a=e.c,s=e.e,i=e.T,o=e.m,d=e.b,u=e.w,r=e.a,c=e.g,g=e.i,m=e.q,k=e.U,f=e.k,p=e.C,y=e.V,_=e.N,b=e.W,h=e.X,v=e.Y,j=e.h,D=e.I,E=e.Z,V=e.f,A=e.$,S=e.F,T=e.a0,w=e.t,C=e.a1,q=e.a2,x=e._},e=>{N=e.u},e=>{R=e.l},e=>{U=e.T},null,null],execute:function(){var l=document.createElement("style");l.textContent=".nested-list[data-v-ada6d6ba]{background:transparent;width:100%;padding:0;margin:0}.nested-list-item[data-v-ada6d6ba]{background:transparent;padding:0;margin:0;border:0}\n",document.head.appendChild(l);const Z=n({__name:"Checkmark",props:{condition:Boolean,notEmpty:String,notNull:Number},setup:e=>(e,l)=>(t(),a(s(o),{slot:"end",icon:s(i)},null,8,["icon"]))});e("default",x(n({__name:"RAEditOverview",setup(e){const l=R.table("technicians"),n=N(),i=d((()=>l.isReady().value?n.technicians.map((e=>l.get(e))):[])),x="/riskassessment/"+n.id;return(e,l)=>(t(),a(U,null,{default:u((()=>[r(s(D),{lines:"full"},{default:u((()=>[r(s(c),null,{default:u((()=>[g(" Allgemeines ")])),_:1}),r(s(m),null,{default:u((()=>[r(s(o),{slot:"start",icon:s(k)},null,8,["icon"]),s(n).company?(t(),a(Z,{key:0})):f("",!0),r(s(p),{label:"Ausführende Firma","label-placement":"floating",modelValue:s(n).company,"onUpdate:modelValue":l[0]||(l[0]=e=>s(n).company=e)},null,8,["modelValue"])])),_:1}),r(s(m),null,{default:u((()=>[r(s(o),{slot:"start",icon:s(y)},null,8,["icon"]),s(n).jobDescr?(t(),a(Z,{key:0})):f("",!0),r(s(_),{label:"Beschreibung der Tätigkeit","label-placement":"floating","auto-grow":"",modelValue:s(n).jobDescr,"onUpdate:modelValue":l[1]||(l[1]=e=>s(n).jobDescr=e)},null,8,["modelValue"])])),_:1}),r(s(m),null,{default:u((()=>[r(s(o),{slot:"start",icon:s(b)},null,8,["icon"]),s(n).address?(t(),a(Z,{key:0})):f("",!0),r(s(p),{"router-link":x+"/location",label:"Addresse","label-placement":"floating",readonly:"",value:s(n).address},null,8,["router-link","value"])])),_:1}),r(s(m),null,{default:u((()=>[r(s(o),{slot:"start",icon:s(h)},null,8,["icon"]),s(n).startDate?(t(),a(Z,{key:0})):f("",!0),r(s(p),{"router-link":x+"/date",label:"Datum","label-placement":"floating",readonly:"",value:s(n).startDate+(s(n).endDate?" - "+s(n).endDate:"")},null,8,["router-link","value"])])),_:1}),r(s(m),null,{default:u((()=>[r(s(o),{slot:"start",icon:s(v)},null,8,["icon"]),s(n).equipment?(t(),a(Z,{key:0})):f("",!0),r(s(j),{position:"stacked"},{default:u((()=>[g("Ausrüstung")])),_:1}),r(s(D),{class:"nested-list",lines:"none"},{default:u((()=>[r(s(m),{class:"ion-no-padding ion-no-margin nested-list-item",lines:"none"},{default:u((()=>[g("TEst")])),_:1}),r(s(m),{class:"ion-no-padding ion-no-margin nested-list-item",lines:"none"},{default:u((()=>[g("TEst")])),_:1})])),_:1})])),_:1}),r(s(m),{"router-link":x+"/technicians",detail:!1},{default:u((()=>[r(s(o),{slot:"start",icon:s(E)},null,8,["icon"]),s(n).technicians.length>0?(t(),a(Z,{key:0})):f("",!0),r(s(j),{position:"stacked"},{default:u((()=>[g("Personal")])),_:1}),r(s(D),{class:"nested-list",lines:"none"},{default:u((()=>[(t(!0),V(S,null,A(i.value,(e=>(t(),a(s(m),{class:"ion-no-padding ion-no-margin nested-list-item",lines:"none"},{default:u((()=>[g(w(e.name),1)])),_:2},1024)))),256))])),_:1})])),_:1},8,["router-link"]),r(s(m),{"router-link":x+"/access",detail:!1},{default:u((()=>[r(s(o),{slot:"start",icon:s(T)},null,8,["icon"]),s(n).access.length>0?(t(),a(Z,{key:0})):f("",!0),r(s(p),{"label-placement":"stacked",label:"Zugang",readonly:""},{default:u((()=>[1===s(n).access.length?(t(),V(S,{key:0},[g("Ein Sektor definiert")],64)):f("",!0),g(" "+w(s(n).access.length)+" Sektoren definiert ",1)])),_:1})])),_:1},8,["router-link"]),r(s(m),{"router-link":x+"/rescue",detail:!1},{default:u((()=>[r(s(o),{slot:"start",icon:s(C)},null,8,["icon"]),s(n).access.length>0?(t(),a(Z,{key:0})):f("",!0),r(s(p),{"label-placement":"stacked",label:"Zugang",readonly:""},{default:u((()=>[1===s(n).access.length?(t(),V(S,{key:0},[g("Ein Sektor definiert")],64)):f("",!0),g(" "+w(s(n).access.length)+" Sektoren definiert ",1)])),_:1})])),_:1},8,["router-link"]),r(s(m),{"router-link":x+"/risks",detail:!1},{default:u((()=>[r(s(o),{slot:"start",icon:s(q)},null,8,["icon"]),s(n).access.length>0?(t(),a(Z,{key:0})):f("",!0),r(s(p),{"label-placement":"stacked",label:"Gefährdungen",readonly:""},{default:u((()=>[g(" sdsafsad ")])),_:1})])),_:1},8,["router-link"])])),_:1})])),_:1}))}}),[["__scopeId","data-v-ada6d6ba"]]))}}}));
