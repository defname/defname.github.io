System.register(["./index-legacy-O4CuuoOo.js","./riskassessment-legacy-V691gdAs.js","./RiskCatalog.vue_vue_type_script_setup_true_lang-legacy-r0gq3KYP.js","./GenericEditModal-legacy-k8XyxJk6.js","./liveriskstree-legacy-NA9PhqSx.js","./livequery-legacy-Q6O-GR1i.js","./AddedByList.vue_vue_type_script_setup_true_lang-legacy-2Jiipx31.js","./TemplateRiskAssessmentPage-legacy-p1fCQnPt.js","./helpers-legacy-F0DIn3j9.js"],(function(e,l){"use strict";var a,s,t,i,n,r,u,d,o,c,k,g,f,_,v,y,m,h,p,b,j,x,C,R,A,q,w,B,G,M,U,z,I,L,V,Z,E,T,D,F,H,J,K,N,P,S;return{setters:[e=>{a=e.d,s=e.x,t=e.aj,i=e.e,n=e.u,r=e.o,u=e.c,d=e.w,o=e.b,c=e.f,k=e.af,g=e.i,f=e.j,_=e.ag,v=e.g,y=e.m,m=e.n,h=e.p,p=e.q,b=e.F,j=e.R,x=e.l,C=e.G,R=e.U,A=e.H,q=e.T,w=e.t,B=e.J,G=e.ak,M=e.K,U=e.I,z=e.h,I=e.r,L=e.k,V=e.a,Z=e.V,E=e._},e=>{T=e.u,D=e.a},e=>{F=e._},e=>{H=e.G},e=>{J=e.l},e=>{K=e.l},e=>{N=e._},e=>{P=e.T},e=>{S=e.a}],execute:function(){var l=document.createElement("style");l.textContent=".risk-card .checkmark[data-v-ab65f980]{display:none}.risk-card:has(.risk-solved) .checkmark[data-v-ab65f980]{display:block}\n",document.head.appendChild(l);const W={class:"ion-text-right"};e("default",E(a({__name:"RAEditRisks",setup(e){s(0),t((()=>console.log("will enter")));const l=T(),a=D(),E=K.table("measures"),$=i((()=>J.isReady()?a.value.map((e=>({risk:J.get(e),meta:l.getMeta(e)}))):[])),O=s("Z");s(-1);const Q=i((()=>$.value.filter((e=>e.risk.sector===O.value))));["Z","U","A"].includes(n().query.sector)&&(O.value=n().query.sector);const X=s(!1);function Y(e){S("Die Gefährdung wirklich aus der Liste entfernen?",{text:"Löschen",role:"destructive",icon:Z,handler:()=>{!function(e){l.risks=l.risks.filter((l=>l!==e.risk.id))}(e)}})}const ee="/riskassessment/"+l.id+"/risks";return(e,a)=>(r(),u(P,null,{default:d((()=>[o(c(_),{value:O.value,onIonChange:a[0]||(a[0]=l=>{O.value=l.detail.value,e.$router.replace({query:{sector:l.detail.value}})})},{default:d((()=>[o(c(k),{value:"Z"},{default:d((()=>[o(c(g),null,{default:d((()=>[f("Zugang")])),_:1})])),_:1}),o(c(k),{value:"U"},{default:d((()=>[o(c(g),null,{default:d((()=>[f("Umgebung")])),_:1})])),_:1}),o(c(k),{value:"A"},{default:d((()=>[o(c(g),null,{default:d((()=>[f("Arbeit")])),_:1})])),_:1})])),_:1},8,["value"]),c(l).ready&&c(E).isReady()?(r(),v(b,{key:0},[o(c(p),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:d((()=>[o(c(y),{onClick:a[1]||(a[1]=e=>X.value=!0)},{default:d((()=>[o(c(m),{icon:c(h)},null,8,["icon"])])),_:1})])),_:1}),(r(!0),v(b,null,j(Q.value,(e=>(r(),u(c(C),{key:e.risk.id,class:"risk-card"},{default:d((()=>[o(c(m),{icon:c(R),color:"success",class:"checkmark ion-padding ion-float-right",size:"large"},null,8,["icon"]),o(c(A),null,{default:d((()=>[o(c(q),null,{default:d((()=>{var l,a;return[f(w(null===(l=e.risk.factor)||void 0===l||null===(l=l.category)||void 0===l?void 0:l.descr)+" ➤ "+w(null===(a=e.risk.factor)||void 0===a?void 0:a.descr),1)]})),_:2},1024),o(c(B),{style:{"font-size":"1.1rem"}},{default:d((()=>[f(w(e.risk.descr),1)])),_:2},1024),c(l).meta[e.risk.id].addedBy.length>0?(r(),u(c(G),{key:0,style:{"margin-bottom":"1rem"}},{default:d((()=>[o(N,{"trigger-list":c(l).meta[e.risk.id].addedBy},null,8,["trigger-list"])])),_:2},1024)):x("",!0)])),_:2},1024),o(c(M),{class:"ion-no-margin ion-no-padding"},{default:d((()=>[c(l).getMeasures(e.risk.id).length?(r(),u(c(U),{key:0,class:"risk-solved ion-no-padding ion-no-margin",lines:"none"},{default:d((()=>[o(c(z),{class:"ion-no-margin"},{default:d((()=>[o(c(g),null,{default:d((()=>[f("Gewählte Maßnahmen")])),_:1})])),_:1}),(r(!0),v(b,null,j(c(l).getMeasures(e.risk.id),(e=>(r(),u(c(I),{class:"ion-no-margin"},{default:d((()=>[f(w(c(E).get(e).descr),1)])),_:2},1024)))),256))])),_:2},1024)):x("",!0),V("div",W,[0===c(l).meta[e.risk.id].addedBy.length?(r(),u(c(L),{key:0,fill:"clear",color:"danger",onClick:l=>Y(e)},{default:d((()=>[f("Löschen")])),_:2},1032,["onClick"])):x("",!0),o(c(L),{fill:"clear","router-link":ee+"/"+e.risk.id},{default:d((()=>[f("Bearbeiten")])),_:2},1032,["router-link"])])])),_:2},1024)])),_:2},1024)))),128)),o(H,{"is-open":X.value,onWillDismiss:a[3]||(a[3]=e=>X.value=!1),"hide-save":""},{default:d((()=>[o(F,{modelValue:c(l).risks,"onUpdate:modelValue":a[2]||(a[2]=e=>c(l).risks=e),sector:O.value,"link-to-function":()=>{}},null,8,["modelValue","sector"])])),_:1},8,["is-open"])],64)):x("",!0)])),_:1}))}}),[["__scopeId","data-v-ab65f980"]]))}}}));
