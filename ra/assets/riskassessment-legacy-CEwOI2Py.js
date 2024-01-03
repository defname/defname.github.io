!function(){function t(t,e,s){var i;return(e="symbol"==typeof(i=function(t,e){if("object"!=typeof t||!t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?i:String(i))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}System.register(["./helpers-legacy-wXN523at.js","./livequery-legacy-orK8_eT2.js","./index-legacy-6QlSvhpE.js","./liveriskstree-legacy-ZHFLnhmP.js"],(function(e,s){"use strict";var i,a,r,d,n,o,h,u,c,l,m,v;return{setters:[t=>{i=t.m,a=t.b,r=t.c,d=t.e,n=t.d},t=>{o=t.l},t=>{h=t.Z,u=t.G,c=t.u,l=t.$,m=t.ai},t=>{v=t.l}],execute:function(){e({a:function(t){const e=y(t),s=u([]),i=()=>{console.log("useLiveAllRisks(): updateAllRisks()"),e.calcAllRisks().then((t=>{s.value=t,console.log("useLiveAllRisks(): updateAllRisks() -> Done")}))};return l([()=>e.risks,()=>e.isReady],i),m((()=>{i()})),s},u:y});const s=e("d",{company:"",startDate:0,endDate:void 0,address:"",jobDescr:"",equipment:[],technicians:[],supervisors:[],access:[],risks:[],measures:{},meta:{}});const p=h(new class{constructor(e){t(this,"id",void 0),t(this,"descr",void 0),t(this,"company",void 0),t(this,"startDate",void 0),t(this,"endDate",void 0),t(this,"address",void 0),t(this,"jobDescr",void 0),t(this,"equipment",void 0),t(this,"technicians",void 0),t(this,"supervisors",void 0),t(this,"access",void 0),t(this,"risks",void 0),t(this,"allRisks",void 0),t(this,"measures",void 0),t(this,"meta",void 0),t(this,"initData",void 0),t(this,"isReady",void 0),t(this,"ready",void 0),this.initData={...s},this.isReady=!1,this.init(e)}init(t){this.isReady=!1,this.measures={},this.meta={},this.allRisks=[],i(this,a(s)),t&&i(this,t),this.updateInitData()}clear(){this.init(),this.id=void 0}updateInitData(){const t=a(r(this,s));this.initData=t}reset(){i(this,this.initData)}modified(){for(let t in this.initData)if(!d(this[t],this.initData[t]))return!0;return!1}loadFromDb(t){return this.init({id:t}),this.ready=o.ready().then((()=>o.table("riskassessments").getAsPromise(t))).then((t=>{this.init(t),this.isReady=!0})).catch((t=>{throw Error(t)})),this.ready}async save(){if(void 0===this.id)throw Error("Attempt to update without id");let t={};return t=a(r(this,s)),n.riskassessments.update(this.id,t).then((t=>{if(0===t)throw Error("Could not update. Does ID "+this.id+" exist?");const e=Math.floor(Date.now()/1e3);n.riskassessmentsmeta.update(this.id,{lastChange:e}),this.updateInitData()}))}dateStr(t){return t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)+"-"+t.getUTCDate()}getStartDate(){return new Date(this.startDate)}setStartDate(t){this.startDate=this.dateStr(t)}getEndDate(){return this.endDate?new Date(this.endDate):void 0}setEndDate(t){this.endDate=void 0===t?void 0:this.dateStr(t)}async calcAllRisks(){await v.ready();const t=await o.table("measures").ready(),e=await o.table("equipment").ready(),s=[],i=[...this.risks];for(this.resetMetaAddedBy(),this.equipment.forEach((t=>{e.get(t).causeRisks.forEach((e=>{i.push(e);const s=this.getMeta(e);s.addedBy.find((e=>e.id===t&&"equipment"===e.type))||s.addedBy.push({id:t,type:"equipment"})}))}));i.length>0;){const e=i.pop();s.includes(e)||(s.push(e),this.getMeasures(e).forEach((e=>{t.get(e).causeRisks.forEach((t=>{i.push(t);const s=this.getMeta(t);s.addedBy.find((t=>t.id===e&&"measure"===t.type))||s.addedBy.push({id:e,type:"measure"})}))})))}return this.allRisks=s,s}resetMetaAddedBy(){for(let t in this.meta)this.getMeta(parseInt(t)).addedBy.length=0}getMeta(t){return void 0===this.meta[t]&&(this.meta[t]={risk:t,addedBy:[]}),this.meta[t]}getMeasures(t){return void 0===this.measures[t]&&(this.measures[t]=[]),this.measures[t]}getMeasuresAsRef(t){return u(this.getMeasures(t))}addSector(t={}){const e=this.access.map((t=>t.id?t.id:0)).reduce(((t,e)=>t>e?t+1:e+1),0);this.access.push({id:e,title:"Neuer Sektor "+e,entrance:"",exit:"",anchorPoints:"",comment:"",rescue:"",...t})}});function y(t){const e=c();let s=t;return e&&e.path.startsWith("/riskassessment")&&void 0!==e.params.id&&(s=parseInt(e.params.id)),void 0===s||p.id===s||p.loadFromDb(s),p}}}}))}();
