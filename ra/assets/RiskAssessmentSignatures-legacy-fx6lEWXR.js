System.register(["./TemplateRiskAssessmentPage-legacy-U8MtJ39U.js","./riskassessment-legacy-9hi0LLwl.js","./livequery-legacy-tkInflhO.js","./helpers-legacy-Rp8Wbxgk.js","./SignatureInput-legacy-xZOgvRgt.js","./index-legacy-sTcrDMYq.js","./liveriskstree-legacy-1-jYbkaU.js","./index-legacy-556IOogQ.js"],(function(e,n){"use strict";var a,t,s,i,c,l,r,u,d,o,g,p;return{setters:[e=>{a=e.T},e=>{t=e.u},e=>{s=e.l},e=>{i=e.p},e=>{c=e.S},e=>{l=e.d,r=e.e,u=e.o,d=e.c,o=e.w,g=e.b,p=e._},null,null],execute:function(){var n=document.createElement("style");n.textContent="#canvas-outer-wrapper[data-v-c3083c09]{display:flex;flex-direction:column;height:100%;overflow:overlay}#canvas-outer-wrapper[data-v-c3083c09] #canvas-inner-wrapper[data-v-c3083c09]{flex-grow:2;display:flex;padding:10px}\n",document.head.appendChild(n),e("default",p(l({__name:"RiskAssessmentSignatures",setup(e){const n=t(),l=s.table("technicians"),p=r((()=>l.isReady&&n.isReady?n.technicians.map((e=>l.get(e))):[]));function y(e,a){if(void 0===a)return console.warn("No technician id should not happen"),void i("Etwas ist schief gelaufen.","warning");n.updateTechnicianSignature(a,e),i("Unterschrift hinzugefügt.","success")}return(e,n)=>(u(),d(a,null,{default:o((()=>[g(c,{"technicians-list":p.value,onSignature:y},null,8,["technicians-list"])])),_:1}))}}),[["__scopeId","data-v-c3083c09"]]))}}}));
