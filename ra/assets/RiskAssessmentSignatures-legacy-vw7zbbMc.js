System.register(["./TemplateRiskAssessmentPage-legacy-JM9IAklm.js","./riskassessment-legacy-6zytJ6aS.js","./livequery-legacy-5AwHvNjI.js","./helpers-legacy-AWkUcU2B.js","./SignatureInput-legacy-GA-Z-Xv3.js","./index-legacy-oFp8G8Ab.js","./database-legacy-al1Sa8N6.js","./liveriskstree-legacy-bYbQc470.js","./index-legacy-bla2RZYd.js","./index-legacy-oV1auDnl.js"],(function(e,a){"use strict";var n,s,t,c,i,l,r,u,d,o,g,p;return{setters:[e=>{n=e.T},e=>{s=e.u},e=>{t=e.l},e=>{c=e.p},e=>{i=e.S},e=>{l=e.d,r=e.e,u=e.o,d=e.c,o=e.w,g=e.b,p=e._},null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent="#canvas-outer-wrapper[data-v-c3083c09]{display:flex;flex-direction:column;height:100%;overflow:overlay}#canvas-outer-wrapper[data-v-c3083c09] #canvas-inner-wrapper[data-v-c3083c09]{flex-grow:2;display:flex;padding:10px}\n",document.head.appendChild(a),e("default",p(l({__name:"RiskAssessmentSignatures",setup(e){const a=s(),l=t.table("technicians"),p=r((()=>l.isReady&&a.isReady?a.technicians.map((e=>l.get(e))):[]));function y(e,n){if(void 0===n)return console.warn("No technician id should not happen"),void c("Etwas ist schief gelaufen.","warning");a.updateTechnicianSignature(n,e),c("Unterschrift hinzugefügt.","success")}return(e,a)=>(u(),d(n,null,{default:o((()=>[g(i,{"technicians-list":p.value,onSignature:y},null,8,["technicians-list"])])),_:1}))}}),[["__scopeId","data-v-c3083c09"]]))}}}));
