System.register(["./index-legacy-3VNLEERe.js","./helpers-legacy-1KvUtVUY.js","./riskassessment-legacy-mxNumP8u.js","./livequery-legacy-gju75Y6n.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-HleU9TYh.js","./TemplateMainPage.vue_vue_type_script_setup_true_lang-legacy-6aEawOS7.js","./liveriskstree-legacy-QTQd1eUd.js"],(function(e,s){"use strict";var t,n,l,a,r,i,u,c,o,d,_,g,f,m,y,k,j,p,v;return{setters:[e=>{t=e.d,n=e.U,l=e.o,a=e.c,r=e.w,i=e.b,u=e.f,c=e.m,o=e.n,d=e.p,_=e.q,g=e.r,f=e.j,m=e.t},e=>{y=e.d},e=>{k=e.d},e=>{j=e.l},e=>{p=e._},e=>{v=e._},null],execute:function(){e("default",t({__name:"RiskAssessmentListPage",setup(e){const s=j.table("riskassessments").entries();return n(s,(()=>console.log(s))),(e,t)=>(l(),a(v,null,{default:r((()=>[i(u(_),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:r((()=>[i(u(c),{onClick:t[0]||(t[0]=e=>{y.riskassessments.add({...k}).then((e=>{const s=Math.floor(Date.now()/1e3);y.riskassessmentsmeta.add({id:e,descr:"Neue Gefährdungsbeurteilung "+e,created:s,lastChange:s})}))})},{default:r((()=>[i(u(o),{icon:u(d)},null,8,["icon"])])),_:1})])),_:1}),i(p,{entries:u(s),"delete-function":e=>u(j).table("riskassessments").delete(e)},{default:r((e=>[i(u(g),{"router-link":`/riskassessment/${e.object.id}`},{default:r((()=>[f(m(e.object),1)])),_:2},1032,["router-link"])])),_:1},8,["entries","delete-function"])])),_:1}))}}))}}}));
