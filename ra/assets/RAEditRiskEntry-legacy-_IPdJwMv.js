System.register(["./index-legacy-nPn_3o5d.js","./riskassessment-legacy-Ox3stk_u.js","./liveriskstree-legacy-byJzoQ2V.js","./livequery-legacy-vwzSMw4A.js","./MeasureCatalog.vue_vue_type_script_setup_true_lang-legacy-4hGlnIiz.js","./AddedByList.vue_vue_type_script_setup_true_lang-legacy-bksReFb_.js","./TemplateRiskAssessmentPage-legacy-tN_yXtRS.js","./helpers-legacy-zCt-UO2V.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-z3agOprK.js"],(function(e,t){"use strict";var a,l,s,u,r,n,d,i,g,o,_,c,m,y,p,f,v,k,j,M,h,b,R,V,A,w,z;return{setters:[e=>{a=e.d,l=e.u,s=e.b,u=e.o,r=e.c,n=e.w,d=e.e,i=e.f,g=e.a,o=e.q,_=e.h,c=e.i,m=e.t,y=e.a5,p=e.ah,f=e.k,v=e.N,k=e.I,j=e.g,M=e.j,h=e.F},e=>{b=e.u},e=>{R=e.l},e=>{V=e.l},e=>{A=e._},e=>{w=e._},e=>{z=e.T},null,null],execute:function(){const t={style:{"font-size":"1.2rem","margin-bottom":"0.3rem"}};e("default",a({__name:"RAEditRiskEntry",setup(e){const a=b(),B=V.table("measures"),E=parseInt(l().params.riskId),I=R.getAsRef(E),q=s((()=>{if(!B.isReady().value)return[];a.getMeasures(E).map((e=>B.get(e)))}));return a.getMeasures(E),(e,l)=>(u(),r(z,null,{default:n((()=>[d(I)&&d(a).ready&&d(B).isReady()?(u(),i(h,{key:0},[g(d(k),{lines:"none"},{default:n((()=>[g(d(o),{class:"ion-margin-bottom"},{default:n((()=>[g(d(_),{position:"stacked"},{default:n((()=>[c(m(d(I).factor.category.descr)+" ➤ "+m(d(I).factor.descr),1)])),_:1}),y("p",t,m(d(I).descr),1),d(a).getMeta(d(E)).addedBy.length>0?(u(),r(d(p),{key:0},{default:n((()=>[g(w,{"trigger-list":d(a).getMeta(d(E)).addedBy},null,8,["trigger-list"])])),_:1})):f("",!0)])),_:1}),g(d(o),null,{default:n((()=>[c(m(d(a).getMeta(d(E)))+" ",1),g(d(v),{label:"Kommentar","auto-grow":"","label-placement":"floating",modelValue:d(a).getMeta(d(E)).comment,"onUpdate:modelValue":l[0]||(l[0]=e=>d(a).getMeta(d(E)).comment=e)},null,8,["modelValue"])])),_:1})])),_:1}),g(A,{modelValue:d(a).measures[d(E)],"onUpdate:modelValue":l[1]||(l[1]=e=>d(a).measures[d(E)]=e),entries:q.value,inverted:""},{header:n((()=>[g(d(j),null,{default:n((()=>[g(d(_),null,{default:n((()=>[c("Ausgewählte Maßnahmen")])),_:1}),g(d(M),{"router-link":e.$route.path+"/addmeasures"},{default:n((()=>[c("Hinzufügen")])),_:1},8,["router-link"])])),_:1})])),_:1},8,["modelValue","entries"])],64)):f("",!0)])),_:1}))}}))}}}));
