System.register(["./index-legacy-adaRzQ0C.js","./RiskList.vue_vue_type_script_setup_true_lang-legacy-HxcdgE-3.js","./livequery-legacy-aw0V0uGM.js","./RiskListItem-legacy-Q4eoyE75.js","./helpers-legacy-FbJo5R_3.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-w1v6BocQ.js","./liveriskstree-legacy-SFL0-r2k.js"],(function(e,l){"use strict";var t,u,s,n,a,i,r,d,o,_,c,f,y,g,v,k,p,m,h,b,j,R,A,x,D,C,I,L,M;return{setters:[e=>{t=e.d,u=e.f,s=e.o,n=e.g,a=e.b,i=e.w,r=e.r,d=e.i,o=e.j,_=e.t,c=e.I,f=e.h,y=e.c,g=e.l,v=e.F,k=e.u,p=e.s,m=e.v,h=e.k,b=e.n,j=e.x,R=e.y,A=e.z,x=e.A,D=e.S,C=e.B,I=e.C},e=>{L=e._},e=>{M=e.l},null,null,null,null],execute:function(){const l=t({__name:"MeasureDetails",props:{id:{type:Number,required:!0}},setup(e){const l=e,t=M.table("measures").getAsRef(l.id);return(e,l)=>u(t)?(s(),n(v,{key:0},[a(u(c),{inset:""},{default:i((()=>[a(u(r),null,{default:i((()=>[a(u(d),null,{default:i((()=>[o(_(u(t).descr),1)])),_:1})])),_:1})])),_:1}),a(L,{"model-value":u(t).solveRisks,"forbid-deletion":"",inverted:"","forbid-editing":"",inset:""},{header:i((()=>[a(u(f),null,{default:i((()=>[a(u(d),null,{default:i((()=>[o("Maßnahme für...")])),_:1})])),_:1})])),_:1},8,["model-value"]),Array.isArray(u(t).causeRisks)&&u(t).causeRisks.length>0?(s(),y(L,{key:0,"model-value":u(t).causeRisks,"forbid-deletion":"","forbid-editing":"",inverted:"",inset:""},{header:i((()=>[a(u(f),null,{default:i((()=>[a(u(d),null,{default:i((()=>[o("Verursachte Gefährdungen...")])),_:1})])),_:1})])),_:1},8,["model-value"])):g("",!0)],64)):g("",!0)}});e("default",t({__name:"MeasureDetailsPage",setup(e){const t=parseInt(k().params.id);return(e,n)=>(s(),y(u(I),null,{default:i((()=>[a(u(x),null,{default:i((()=>[a(u(p),null,{default:i((()=>[a(u(m),{slot:"start"},{default:i((()=>[a(u(h),{onClick:n[0]||(n[0]=l=>e.$router.back())},{default:i((()=>[a(u(b),{icon:u(j),slot:"icon-only"},null,8,["icon"])])),_:1})])),_:1}),a(u(R),null,{default:i((()=>[o("Details")])),_:1}),a(u(m),{slot:"end"},{default:i((()=>[a(u(h),{"router-link":`/measures/${u(t)}/edit`},{default:i((()=>[a(u(b),{icon:u(A),slot:"icon-only"},null,8,["icon"])])),_:1},8,["router-link"])])),_:1})])),_:1})])),_:1}),a(u(C),{color:"light"},{default:i((()=>[(s(),y(D,null,{default:i((()=>[a(l,{id:u(t)},null,8,["id"])])),_:1}))])),_:1})])),_:1}))}}))}}}));
