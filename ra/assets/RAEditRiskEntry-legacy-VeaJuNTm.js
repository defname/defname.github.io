System.register(["./index-legacy-2CesrrWX.js","./riskassessment-legacy-wYBZv6ld.js","./liveriskstree-legacy-qRkpQPkU.js","./livequery-legacy-Hb61fPKz.js","./MeasureCatalog.vue_vue_type_script_setup_true_lang-legacy-C-R92zmn.js","./AddedByList.vue_vue_type_script_setup_true_lang-legacy-b5Dwl0OS.js","./TemplateRiskAssessmentPage-legacy-FO2opga3.js","./helpers-legacy-LaXtun3V.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-f5x4GUk_.js"],(function(e,t){"use strict";var a,l,s,u,r,n,d,i,g,o,_,c,m,y,p,f,k,v,j,M,h,R,b,A,V,I,w;return{setters:[e=>{a=e.d,l=e.u,s=e.e,u=e.o,r=e.c,n=e.w,d=e.f,i=e.g,g=e.b,o=e.r,_=e.i,c=e.j,m=e.t,y=e.a,p=e.ak,f=e.l,k=e.E,v=e.I,j=e.h,M=e.k,h=e.F},e=>{R=e.u},e=>{b=e.l},e=>{A=e.l},e=>{V=e._},e=>{I=e._},e=>{w=e.T},null,null],execute:function(){const t={style:{"font-size":"1.2rem","margin-bottom":"0.3rem"}};e("default",a({__name:"RAEditRiskEntry",setup(e){const a=R(),x=A.table("measures"),z=parseInt(l().params.riskId),B=b.getAsRef(z),E=s((()=>{if(!x.isReady().value)return[];a.getMeasures(z).map((e=>x.get(e)))}));return a.getMeasures(z),(e,l)=>(u(),r(w,null,{default:n((()=>[d(B)&&d(a).isReady&&d(x).isReady()?(u(),i(h,{key:0},[g(d(v),{lines:"none"},{default:n((()=>[g(d(o),{class:"ion-margin-bottom"},{default:n((()=>[g(d(_),{position:"stacked"},{default:n((()=>[c(m(d(B).factor.category.descr)+" ➤ "+m(d(B).factor.descr),1)])),_:1}),y("p",t,m(d(B).descr),1),d(a).getMeta(d(z)).addedBy.length>0?(u(),r(d(p),{key:0},{default:n((()=>[g(I,{"trigger-list":d(a).getMeta(d(z)).addedBy},null,8,["trigger-list"])])),_:1})):f("",!0)])),_:1}),g(d(o),null,{default:n((()=>[c(m(d(a).getMeta(d(z)))+" ",1),g(d(k),{label:"Kommentar","auto-grow":"","label-placement":"floating",modelValue:d(a).getMeta(d(z)).comment,"onUpdate:modelValue":l[0]||(l[0]=e=>d(a).getMeta(d(z)).comment=e)},null,8,["modelValue"])])),_:1})])),_:1}),g(V,{modelValue:d(a).measures[d(z)],"onUpdate:modelValue":l[1]||(l[1]=e=>d(a).measures[d(z)]=e),entries:E.value,inverted:""},{header:n((()=>[g(d(j),null,{default:n((()=>[g(d(_),null,{default:n((()=>[c("Ausgewählte Maßnahmen")])),_:1}),g(d(M),{"router-link":e.$route.path+"/addmeasures"},{default:n((()=>[c("Hinzufügen")])),_:1},8,["router-link"])])),_:1})])),_:1},8,["modelValue","entries"])],64)):f("",!0)])),_:1}))}}))}}}));
