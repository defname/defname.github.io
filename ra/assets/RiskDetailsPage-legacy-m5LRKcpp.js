System.register(["./index-legacy-La_jvRt6.js","./liveriskstree-legacy-Mt7epSA0.js","./livequery-legacy-E6C-7scz.js","./MeasureCatalog.vue_vue_type_script_setup_true_lang-legacy-1-xHSrDa.js","./RiskListItem-legacy-vk8tFXWT.js","./TemplateGenericEditPage-legacy-iZThn0nR.js","./database-legacy-8-jSFMl0.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy--ewI1ZnE.js","./helpers-legacy-wNo1H66i.js"],(function(e,s){"use strict";var t,l,a,u,r,i,n,c,d,_,g,y,f,o,p,v,k,m,j,b,h;return{setters:[e=>{t=e.d,l=e.u,a=e.e,u=e.o,r=e.c,i=e.w,n=e.f,c=e.g,d=e.b,_=e.I,g=e.h,y=e.i,f=e.j,o=e.k,p=e.F,v=e.l},e=>{k=e.l},e=>{m=e.l},e=>{j=e._},e=>{b=e.R},e=>{h=e.T},null,null,null],execute:function(){e("default",t({__name:"RiskDetailsPage",setup(e){const s=parseInt(l().params.id),t=k.getAsRef(s);m.table("measures").updated();const R=a((()=>void 0!==t.value&&m.table("measures").isReady()?m.table("measures").entries().filter((e=>e.solveRisks.includes(t.value.id))):[]));return(e,s)=>(u(),r(h,{onShouldCancel:s[0]||(s[0]=s=>e.$router.back()),"hide-submit":""},{default:i((()=>[n(t)?(u(),c(p,{key:0},[d(n(_),{inset:""},{default:i((()=>[d(b,{risk:n(t)},null,8,["risk"])])),_:1}),d(j,{inset:"",entries:R.value},{header:i((()=>[d(n(g),null,{default:i((()=>[d(n(y),null,{default:i((()=>[f("Verfügbare Maßnahmen")])),_:1}),d(n(o),{"router-link":`/measures/new?for=${n(t).id}`},{default:i((()=>[f("Hinzufügen")])),_:1},8,["router-link"])])),_:1})])),_:1},8,["entries"])],64)):v("",!0)])),_:1}))}}))}}}));
