System.register(["./index-legacy-La_jvRt6.js","./TechniciansList.vue_vue_type_script_setup_true_lang-legacy-YBoh_eNK.js","./riskassessment-legacy-deVed6iG.js","./livequery-legacy-E6C-7scz.js","./TemplateRiskAssessmentPage-legacy-uUslXcDi.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy--ewI1ZnE.js","./helpers-legacy-wNo1H66i.js","./database-legacy-8-jSFMl0.js","./liveriskstree-legacy-Mt7epSA0.js"],(function(e,l){"use strict";var t,a,s,i,n,u,c,r,o,d,v,f,_,y,g,p,m,h,j,b,k,V,T,q,x,w,A;return{setters:[e=>{t=e.d,a=e.e,s=e.x,i=e.u,n=e.o,u=e.c,c=e.w,r=e.b,o=e.f,d=e.T,v=e.i,f=e.j,_=e.R,y=e.t,g=e.ay,p=e.l,m=e.r,h=e.g,j=e.m,b=e.n,k=e.p,V=e.q,T=e.F},e=>{q=e._},e=>{x=e.u},e=>{w=e.l},e=>{A=e.T},null,null,null,null],execute:function(){e("default",t({__name:"RAEditTechnicians",setup(e){const l=x(),t=a((()=>w.table("technicians").isReady().value?l.technicians.map((e=>w.table("technicians").get(e))):[])),L=s("selected");return["selected","available"].includes(i().query.segment)&&(L.value=i().query.segment),(e,a)=>(n(),u(A,null,{default:c((()=>[r(o(_),{value:L.value,onIonChange:a[0]||(a[0]=l=>{L.value=l.detail.value,e.$router.replace({query:{segment:l.detail.value}})})},{default:c((()=>[r(o(d),{value:"selected"},{default:c((()=>[r(o(v),null,{default:c((()=>[f("Ausgewählt")])),_:1})])),_:1}),r(o(d),{value:"available"},{default:c((()=>[r(o(v),null,{default:c((()=>[f("Verfügbar")])),_:1})])),_:1})])),_:1},8,["value"]),"selected"===L.value?(n(),u(q,{key:0,entries:t.value,modelValue:o(l).technicians,"onUpdate:modelValue":a[1]||(a[1]=e=>o(l).technicians=e),inverted:"","forbid-deletion":""},{default:c((e=>[r(o(m),null,{default:c((()=>[r(o(v),null,{default:c((()=>[f(y(e.object.name),1)])),_:2},1024),e.object.fisat?(n(),u(o(g),{key:0,slot:"end",color:3===e.object.fisat.level?"tertiary":"medium",onClick:t=>function(e){if(void 0===e.id)return void console.warn("Technician ID is undefined");if(!e.fisat||3!==e.fisat.level)return;const t=l.supervisors.indexOf(e.id);console.log(t),-1!==t?l.supervisors.splice(t,1):l.supervisors.push(e.id)}(e.object)},{default:c((()=>[f(" Level "+y(e.object.fisat.level),1)])),_:2},1032,["color","onClick"])):p("",!0),o(l).supervisors.includes(e.object.id)?(n(),u(o(g),{key:1,slot:"start"},{default:c((()=>[f("Supervisor")])),_:1})):p("",!0)])),_:2},1024)])),_:1},8,["entries","modelValue"])):(n(),h(T,{key:1},[r(o(V),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:c((()=>[r(o(j),{"router-link":"/technicians/new"},{default:c((()=>[r(o(b),{icon:o(k)},null,8,["icon"])])),_:1})])),_:1}),r(q,{modelValue:o(l).technicians,"onUpdate:modelValue":a[2]||(a[2]=e=>o(l).technicians=e)},null,8,["modelValue"])],64))])),_:1}))}}))}}}));
