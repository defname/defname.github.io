System.register(["./index-legacy-6p2OTcKt.js","./riskassessment-legacy-uIchkN5r.js","./liveriskstree-legacy-x0hYhl0O.js","./RiskListItem-legacy--Wsk5Uxf.js","./livequery-legacy-Ds8JqIw1.js","./MeasureCatalog.vue_vue_type_script_setup_true_lang-legacy-AJPNQO2z.js","./TemplateRiskAssessmentPage-legacy-2WFi5cb0.js","./helpers-legacy-f-Cl6UZF.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-2fb8Rx9h.js"],(function(e,s){"use strict";var l,t,a,u,r,i,n,d,c,_,g,m,y,o,f,k,p,v,j,R,b,h;return{setters:[e=>{l=e.d,t=e.u,a=e.e,u=e.o,r=e.c,i=e.w,n=e.f,d=e.g,c=e.b,_=e.I,g=e.h,m=e.i,y=e.j,o=e.k,f=e.F,k=e.l},e=>{p=e.u},e=>{v=e.l},e=>{j=e.R},e=>{R=e.l},e=>{b=e._},e=>{h=e.T},null,null],execute:function(){e("default",l({__name:"RAEditRiskEntryMeasures",setup(e){const s=p();R.table("measures");const l=parseInt(t().params.riskId),A=v.getAsRef(l);R.table("measures").updated();const I=a((()=>void 0!==A.value&&R.table("measures").isReady()?R.table("measures").entries().filter((e=>e.solveRisks.includes(A.value.id))):[]));return s.getMeasures(l),(e,t)=>(u(),r(h,null,{default:i((()=>[n(A)&&n(s).isReady?(u(),d(f,{key:0},[c(n(_),{inset:""},{default:i((()=>[c(j,{risk:n(A)},null,8,["risk"])])),_:1}),c(b,{inset:"",modelValue:n(s).measures[n(l)],"onUpdate:modelValue":t[0]||(t[0]=e=>n(s).measures[n(l)]=e),entries:I.value},{header:i((()=>[c(n(g),null,{default:i((()=>[c(n(m),null,{default:i((()=>[y("Verfügbare Maßnahmen")])),_:1}),c(n(o),{"router-link":`/measures/new?for=${n(A).id}`},{default:i((()=>[y("Erstellen")])),_:1},8,["router-link"])])),_:1})])),_:1},8,["modelValue","entries"])],64)):k("",!0)])),_:1}))}}))}}}));
