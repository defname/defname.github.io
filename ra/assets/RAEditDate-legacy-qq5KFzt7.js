System.register(["./index-legacy-I3VWwJ3d.js","./riskassessment-legacy-vWSAB9X4.js","./TemplateRiskAssessmentPage-legacy-o58SR2HU.js","./helpers-legacy-8j4YqDOj.js","./livequery-legacy-7UEI3GHC.js","./liveriskstree-legacy--j7qBAr2.js"],(function(e,t){"use strict";var a,n,s,r,o,i,l,c,g,u,d;return{setters:[e=>{a=e.d,n=e.G,s=e.e,r=e.o,o=e.c,i=e.w,l=e.f,c=e.ab,g=e.l},e=>{u=e.u},e=>{d=e.T},null,null,null],execute:function(){e("default",a({__name:"RAEditDate",setup(e){const t=u();function a(e){const a=new Date(e).getTime();if(!t.startDate||!t.endDate)return;const n=t.getStartDate().getTime(),s=t.getEndDate().getTime();return n<=a&&a<=s?{backgroundColor:"var(--ion-color-primary)",textColor:"var(--ion-color-primary-contrast)"}:void 0}function D(e){const a=new Date(e.detail.value);t.startDate?(!t.endDate&&a.getTime()>t.getStartDate().getTime()?t.setEndDate(a):(t.setEndDate(void 0),t.setStartDate(a)),console.log(t.startDate)):t.setStartDate(a)}return n(),s((()=>{if(void 0!==t.endDate){const e=[];let a=t.getStartDate().getTime();const n=t.getEndDate().getTime(),s=864e5;for(;a<n;)e.push(t.dateStr(new Date(a))),console.log(a),a+=s;return console.log(e),e}return[]})),(e,n)=>(r(),o(d,null,{default:i((()=>[l(t).isReady?(r(),o(l(c),{key:0,size:"cover",presentation:"date","highlighted-dates":a,onIonChange:D})):g("",!0)])),_:1}))}}))}}}));
