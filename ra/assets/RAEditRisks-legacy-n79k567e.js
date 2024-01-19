System.register(["./index-legacy-oFp8G8Ab.js","./riskassessment-legacy-6zytJ6aS.js","./RiskCatalog.vue_vue_type_script_setup_true_lang-legacy-aGrY8t-z.js","./GenericEditModal-legacy-TXOAvMeS.js","./liveriskstree-legacy-bYbQc470.js","./livequery-legacy-5AwHvNjI.js","./AddedByList.vue_vue_type_script_setup_true_lang-legacy-GEt7-vm5.js","./TemplateRiskAssessmentPage-legacy-JM9IAklm.js","./helpers-legacy-AWkUcU2B.js","./database-legacy-al1Sa8N6.js","./index-legacy-X91ZUWSc.js"],(function(e,l){"use strict";var a,s,t,i,n,r,u,d,o,c,g,k,f,v,_,y,m,p,h,j,b,x,R,A,C,q,G,w,B,M,z,L,U,Z,E,I,T,V,D,H,J,K,F,P,S,W;return{setters:[e=>{a=e.d,s=e.x,t=e.au,i=e.e,n=e.u,r=e.o,u=e.c,d=e.w,o=e.b,c=e.f,g=e.ap,k=e.i,f=e.j,v=e.aq,_=e.g,y=e.m,m=e.n,p=e.p,h=e.q,j=e.F,b=e.R,x=e.l,R=e.G,A=e.a5,C=e.H,q=e.T,G=e.t,w=e.J,B=e.av,M=e.K,z=e.I,L=e.h,U=e.r,Z=e.k,E=e.a,I=e.a4,T=e._},e=>{V=e.u,D=e.a},e=>{H=e._},e=>{J=e.G},e=>{K=e.l},e=>{F=e.l},e=>{P=e._},e=>{S=e.T},e=>{W=e.a},null,null],execute:function(){var l=document.createElement("style");l.textContent=".risk-card .checkmark[data-v-5c08963f]{display:none}.risk-card:has(.risk-solved) .checkmark[data-v-5c08963f]{display:block}\n",document.head.appendChild(l);const $={class:"ion-text-right"};e("default",T(a({__name:"RAEditRisks",setup(e){s(0),t((()=>console.log("will enter")));const l=V(),a=D(),T=F.table("measures"),N=i((()=>K.isReady()?a.value.map((e=>({risk:K.get(e),meta:l.getMeta(e)}))):[])),O=s("Z");s(-1);const Q=i((()=>N.value.filter((e=>e.risk.sector===O.value))));["Z","U","A"].includes(n().query.sector)&&(O.value=n().query.sector);const X=s(!1);function Y(e){W("Die Gefährdung wirklich aus der Liste entfernen?",{text:"Löschen",role:"destructive",icon:I,handler:()=>{!function(e){l.risks=l.risks.filter((l=>l!==e.risk.id))}(e)}})}const ee="/riskassessment/"+l.id+"/risks";return(e,a)=>(r(),u(S,null,{default:d((()=>[o(c(v),{value:O.value,onIonChange:a[0]||(a[0]=l=>{O.value=l.detail.value,e.$router.replace({query:{sector:l.detail.value}})})},{default:d((()=>[o(c(g),{value:"Z"},{default:d((()=>[o(c(k),null,{default:d((()=>[f("Zugang")])),_:1})])),_:1}),o(c(g),{value:"U"},{default:d((()=>[o(c(k),null,{default:d((()=>[f("Umgebung")])),_:1})])),_:1}),o(c(g),{value:"A"},{default:d((()=>[o(c(k),null,{default:d((()=>[f("Arbeit")])),_:1})])),_:1})])),_:1},8,["value"]),c(l).ready&&c(T).isReady()?(r(),_(j,{key:0},[o(c(h),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:d((()=>[o(c(y),{onClick:a[1]||(a[1]=e=>X.value=!0)},{default:d((()=>[o(c(m),{icon:c(p)},null,8,["icon"])])),_:1})])),_:1}),(r(!0),_(j,null,b(Q.value,(e=>(r(),u(c(R),{key:e.risk.id,class:"risk-card"},{default:d((()=>[o(c(m),{icon:c(A),color:"success",class:"checkmark ion-padding ion-float-right",size:"large"},null,8,["icon"]),o(c(C),null,{default:d((()=>[o(c(q),null,{default:d((()=>{var l,a;return[f(G(null===(l=e.risk.factor)||void 0===l||null===(l=l.category)||void 0===l?void 0:l.descr)+" ➤ "+G(null===(a=e.risk.factor)||void 0===a?void 0:a.descr),1)]})),_:2},1024),o(c(w),{style:{"font-size":"1.1rem"}},{default:d((()=>[f(G(e.risk.descr),1)])),_:2},1024),c(l).meta[e.risk.id].addedBy.length>0?(r(),u(c(B),{key:0,style:{"margin-bottom":"1rem"}},{default:d((()=>[o(P,{"trigger-list":c(l).meta[e.risk.id].addedBy},null,8,["trigger-list"])])),_:2},1024)):x("",!0)])),_:2},1024),o(c(M),{class:"ion-no-margin ion-no-padding"},{default:d((()=>[c(l).getMeasures(e.risk.id).length?(r(),u(c(z),{key:0,class:"risk-solved ion-no-padding ion-no-margin",lines:"none"},{default:d((()=>[o(c(L),{class:"ion-no-margin"},{default:d((()=>[o(c(k),null,{default:d((()=>[f("Gewählte Maßnahmen")])),_:1})])),_:1}),(r(!0),_(j,null,b(c(l).getMeasures(e.risk.id),(e=>(r(),u(c(U),{class:"ion-no-margin"},{default:d((()=>[f(G(c(T).get(e).descr),1)])),_:2},1024)))),256))])),_:2},1024)):x("",!0),E("div",$,[0===c(l).meta[e.risk.id].addedBy.length?(r(),u(c(Z),{key:0,fill:"clear",color:"danger",onClick:l=>Y(e)},{default:d((()=>[f("Löschen")])),_:2},1032,["onClick"])):x("",!0),o(c(Z),{fill:"clear","router-link":ee+"/"+e.risk.id},{default:d((()=>[f("Bearbeiten")])),_:2},1032,["router-link"])])])),_:2},1024)])),_:2},1024)))),128)),o(J,{"is-open":X.value,onWillDismiss:a[3]||(a[3]=e=>X.value=!1),"hide-save":""},{default:d((()=>[o(H,{modelValue:c(l).risks,"onUpdate:modelValue":a[2]||(a[2]=e=>c(l).risks=e),sector:O.value,"link-to-function":()=>{}},null,8,["modelValue","sector"])])),_:1},8,["is-open"])],64)):x("",!0)])),_:1}))}}),[["__scopeId","data-v-5c08963f"]]))}}}));
