System.register(["./index-legacy-oFp8G8Ab.js","./riskassessment-legacy-6zytJ6aS.js","./TemplateRiskAssessmentPage-legacy-JM9IAklm.js","./database-legacy-al1Sa8N6.js","./livequery-legacy-5AwHvNjI.js","./liveriskstree-legacy-bYbQc470.js","./helpers-legacy-AWkUcU2B.js"],(function(e,t){"use strict";var a,n,s,r,o,l,i,c,g,u,d;return{setters:[e=>{a=e.d,n=e.x,s=e.e,r=e.o,o=e.c,l=e.w,i=e.f,c=e.ao,g=e.l},e=>{u=e.u},e=>{d=e.T},null,null,null,null],execute:function(){e("default",a({__name:"RAEditDate",setup(e){const t=u();function a(e){const a=new Date(e).getTime();if(!t.startDate||!t.endDate)return;const n=t.getStartDate().getTime(),s=t.getEndDate().getTime();return n<=a&&a<=s?{backgroundColor:"var(--ion-color-primary)",textColor:"var(--ion-color-primary-contrast)"}:void 0}function D(e){const a=new Date(e.detail.value);t.startDate?(!t.endDate&&a.getTime()>t.getStartDate().getTime()?t.setEndDate(a):(t.setEndDate(void 0),t.setStartDate(a)),console.log(t.startDate)):t.setStartDate(a)}return n(),s((()=>{if(void 0!==t.endDate){const e=[];let a=t.getStartDate().getTime();const n=t.getEndDate().getTime(),s=864e5;for(;a<n;)e.push(t.dateStr(new Date(a))),console.log(a),a+=s;return console.log(e),e}return[]})),(e,n)=>(r(),o(d,null,{default:l((()=>[i(t).isReady?(r(),o(i(c),{key:0,size:"cover",presentation:"date","highlighted-dates":a,onIonChange:D})):g("",!0)])),_:1}))}}))}}}));
