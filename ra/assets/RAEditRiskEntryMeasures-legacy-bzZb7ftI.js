System.register(["./index-legacy--P6jT1Ho.js","./riskassessment-legacy-xw2mkYj2.js","./liveriskstree-legacy-wOWYOZOb.js","./RiskListItem-legacy-nAclKkKs.js","./livequery-legacy-NqXrKiG8.js","./MeasureCatalog.vue_vue_type_script_setup_true_lang-legacy-qu9sDU0D.js","./TemplateRiskAssessmentPage-legacy-v2mJ_Fgz.js","./helpers-legacy-sy6iVzht.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-UQbf8yUc.js"],(function(e,s){"use strict";var l,t,a,u,r,i,n,d,c,_,g,m,y,o,f,k,p,v,j,R,b,I;return{setters:[e=>{l=e.d,t=e.u,a=e.e,u=e.o,r=e.c,i=e.w,n=e.f,d=e.g,c=e.b,_=e.I,g=e.h,m=e.i,y=e.j,o=e.k,f=e.F,k=e.l},e=>{p=e.u},e=>{v=e.l},e=>{j=e.R},e=>{R=e.l},e=>{b=e._},e=>{I=e.T},null,null],execute:function(){e("default",l({__name:"RAEditRiskEntryMeasures",setup(e){const s=p();R.table("measures");const l=parseInt(t().params.riskId),h=v.getAsRef(l);R.table("measures").updated();const A=a((()=>void 0!==h.value&&R.table("measures").isReady()?R.table("measures").entries().filter((e=>e.solveRisks.includes(h.value.id))):[]));return s.getMeasures(l),(e,t)=>(u(),r(I,null,{default:i((()=>[n(h)&&n(s).isReady?(u(),d(f,{key:0},[c(n(_),{inset:""},{default:i((()=>[c(j,{risk:n(h)},null,8,["risk"])])),_:1}),c(b,{inset:"",modelValue:n(s).measures[n(l)],"onUpdate:modelValue":t[0]||(t[0]=e=>n(s).measures[n(l)]=e),entries:A.value},{header:i((()=>[c(n(g),null,{default:i((()=>[c(n(m),null,{default:i((()=>[y("Verfügbare Maßnahmen")])),_:1}),c(n(o),{"router-link":`/measures/new?for=${n(h).id}`},{default:i((()=>[y("Erstellen")])),_:1},8,["router-link"])])),_:1})])),_:1},8,["modelValue","entries"])],64)):k("",!0)])),_:1}))}}))}}}));
