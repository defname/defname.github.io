System.register(["./index-legacy-adaRzQ0C.js","./TechniciansList.vue_vue_type_script_setup_true_lang-legacy-a3hNwfUP.js","./riskassessment-legacy-Pa4oDVK4.js","./livequery-legacy-aw0V0uGM.js","./TemplateRiskAssessmentPage-legacy-oRPXQw1p.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-w1v6BocQ.js","./helpers-legacy-FbJo5R_3.js","./liveriskstree-legacy-SFL0-r2k.js"],(function(e,l){"use strict";var t,a,u,n,s,i,c,r,d,o,v,_,f,y,g,m,p,b,j,h,k,V,q,w,x,C,T;return{setters:[e=>{t=e.d,a=e.e,u=e.G,n=e.u,s=e.o,i=e.c,c=e.w,r=e.b,d=e.f,o=e.ab,v=e.i,_=e.j,f=e.ac,y=e.t,g=e.ad,m=e.l,p=e.r,b=e.g,j=e.m,h=e.n,k=e.p,V=e.q,q=e.F},e=>{w=e._},e=>{x=e.u},e=>{C=e.l},e=>{T=e.T},null,null,null],execute:function(){e("default",t({__name:"RAEditTechnicians",setup(e){const l=x(),t=a((()=>C.table("technicians").isReady().value?l.technicians.map((e=>C.table("technicians").get(e))):[])),A=u("selected");return["selected","available"].includes(n().query.segment)&&(A.value=n().query.segment),(e,a)=>(s(),i(T,null,{default:c((()=>[r(d(f),{value:A.value,onIonChange:a[0]||(a[0]=l=>{A.value=l.detail.value,e.$router.replace({query:{segment:l.detail.value}})})},{default:c((()=>[r(d(o),{value:"selected"},{default:c((()=>[r(d(v),null,{default:c((()=>[_("Ausgewählt")])),_:1})])),_:1}),r(d(o),{value:"available"},{default:c((()=>[r(d(v),null,{default:c((()=>[_("Verfügbar")])),_:1})])),_:1})])),_:1},8,["value"]),"selected"===A.value?(s(),i(w,{key:0,entries:t.value,modelValue:d(l).technicians,"onUpdate:modelValue":a[1]||(a[1]=e=>d(l).technicians=e),inverted:"","forbid-deletion":""},{default:c((e=>[r(d(p),null,{default:c((()=>[r(d(v),null,{default:c((()=>[_(y(e.object.name),1)])),_:2},1024),e.object.fisat?(s(),i(d(g),{key:0,slot:"end",color:3===e.object.fisat.level?"tertiary":"medium",onClick:l=>{e.object}},{default:c((()=>[_(" Level "+y(e.object.fisat.level),1)])),_:2},1032,["color","onClick"])):m("",!0),d(l).supervisors.includes(e.object.id)?(s(),i(d(g),{key:1,slot:"start"},{default:c((()=>[_("Supervisor")])),_:1})):m("",!0)])),_:2},1024)])),_:1},8,["entries","modelValue"])):(s(),b(q,{key:1},[r(d(V),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:c((()=>[r(d(j),{"router-link":"/technicians/new"},{default:c((()=>[r(d(h),{icon:d(k)},null,8,["icon"])])),_:1})])),_:1}),r(w,{modelValue:d(l).technicians,"onUpdate:modelValue":a[2]||(a[2]=e=>d(l).technicians=e)},null,8,["modelValue"])],64))])),_:1}))}}))}}}));
