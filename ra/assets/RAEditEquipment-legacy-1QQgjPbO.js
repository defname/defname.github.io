System.register(["./index-legacy-I3VWwJ3d.js","./EquipmentList.vue_vue_type_script_setup_true_lang-legacy-4b5bYf_o.js","./riskassessment-legacy-vWSAB9X4.js","./livequery-legacy-7UEI3GHC.js","./TemplateRiskAssessmentPage-legacy-o58SR2HU.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-LcaX_BeJ.js","./helpers-legacy-8j4YqDOj.js","./liveriskstree-legacy--j7qBAr2.js"],(function(e,l){"use strict";var t,u,a,n,s,i,r,d,c,m,o,p,v,_,g,y,f,q,j,b,V,k,h;return{setters:[e=>{t=e.d,u=e.e,a=e.G,n=e.u,s=e.o,i=e.c,r=e.w,d=e.b,c=e.f,m=e.ac,o=e.i,p=e.j,v=e.ad,_=e.g,g=e.m,y=e.n,f=e.p,q=e.q,j=e.F},e=>{b=e._},e=>{V=e.u},e=>{k=e.l},e=>{h=e.T},null,null,null],execute:function(){e("default",t({__name:"RAEditEquipment",setup(e){const l=V(),t=u((()=>k.table("equipment").isReady().value?l.equipment.map((e=>k.table("equipment").get(e))):[])),x=a("selected");return["selected","available"].includes(n().query.segment)&&(x.value=n().query.segment),(e,u)=>(s(),i(h,null,{default:r((()=>[d(c(v),{value:x.value,onIonChange:u[0]||(u[0]=l=>{x.value=l.detail.value,e.$router.replace({query:{segment:l.detail.value}})})},{default:r((()=>[d(c(m),{value:"selected"},{default:r((()=>[d(c(o),null,{default:r((()=>[p("Ausgewählt")])),_:1})])),_:1}),d(c(m),{value:"available"},{default:r((()=>[d(c(o),null,{default:r((()=>[p("Verfügbar")])),_:1})])),_:1})])),_:1},8,["value"]),"selected"===x.value?(s(),i(b,{key:0,entries:t.value,modelValue:c(l).equipment,"onUpdate:modelValue":u[1]||(u[1]=e=>c(l).equipment=e),inverted:"","forbid-deletion":""},null,8,["entries","modelValue"])):(s(),_(j,{key:1},[d(c(q),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:r((()=>[d(c(g),{"router-link":"/equipment/new"},{default:r((()=>[d(c(y),{icon:c(f)},null,8,["icon"])])),_:1})])),_:1}),d(b,{modelValue:c(l).equipment,"onUpdate:modelValue":u[2]||(u[2]=e=>c(l).equipment=e)},null,8,["modelValue"])],64))])),_:1}))}}))}}}));