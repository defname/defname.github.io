System.register(["./index-legacy-ys9BPxUl.js","./EquipmentList.vue_vue_type_script_setup_true_lang-legacy-lHIFM7kC.js","./riskassessment-legacy-mM646kur.js","./livequery-legacy-4rwIXujt.js","./TemplateRiskAssessmentPage-legacy-fy60uH1e.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-N3-_U6yf.js","./helpers-legacy-dyrtGyeK.js","./liveriskstree-legacy-fdgqm4mm.js"],(function(e,l){"use strict";var t,u,a,n,s,i,r,d,m,c,o,p,v,_,g,y,f,q,j,b,V,k,h;return{setters:[e=>{t=e.d,u=e.e,a=e.G,n=e.u,s=e.o,i=e.c,r=e.w,d=e.b,m=e.f,c=e.ae,o=e.i,p=e.j,v=e.af,_=e.g,g=e.m,y=e.n,f=e.p,q=e.q,j=e.F},e=>{b=e._},e=>{V=e.u},e=>{k=e.l},e=>{h=e.T},null,null,null],execute:function(){e("default",t({__name:"RAEditEquipment",setup(e){const l=V(),t=u((()=>k.table("equipment").isReady().value?l.equipment.map((e=>k.table("equipment").get(e))):[])),x=a("selected");return["selected","available"].includes(n().query.segment)&&(x.value=n().query.segment),(e,u)=>(s(),i(h,null,{default:r((()=>[d(m(v),{value:x.value,onIonChange:u[0]||(u[0]=l=>{x.value=l.detail.value,e.$router.replace({query:{segment:l.detail.value}})})},{default:r((()=>[d(m(c),{value:"selected"},{default:r((()=>[d(m(o),null,{default:r((()=>[p("Ausgewählt")])),_:1})])),_:1}),d(m(c),{value:"available"},{default:r((()=>[d(m(o),null,{default:r((()=>[p("Verfügbar")])),_:1})])),_:1})])),_:1},8,["value"]),"selected"===x.value?(s(),i(b,{key:0,entries:t.value,modelValue:m(l).equipment,"onUpdate:modelValue":u[1]||(u[1]=e=>m(l).equipment=e),inverted:"","forbid-deletion":""},null,8,["entries","modelValue"])):(s(),_(j,{key:1},[d(m(q),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:r((()=>[d(m(g),{"router-link":"/equipment/new"},{default:r((()=>[d(m(y),{icon:m(f)},null,8,["icon"])])),_:1})])),_:1}),d(b,{modelValue:m(l).equipment,"onUpdate:modelValue":u[2]||(u[2]=e=>m(l).equipment=e)},null,8,["modelValue"])],64))])),_:1}))}}))}}}));
