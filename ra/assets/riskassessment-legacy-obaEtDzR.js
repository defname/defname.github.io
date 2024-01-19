!function(){function t(t,e,s){var i;return(e="symbol"==typeof(i=function(t,e){if("object"!=typeof t||!t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?i:String(i))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}System.register(["./database-legacy-zPeqZLiu.js","./livequery-legacy-hzDUtCPS.js","./index-legacy-sS6aLOVw.js","./liveriskstree-legacy-L2MofBxz.js"],(function(e,s){"use strict";var i,a,r,n,d,o,h,u,c,l,m,p,g;return{setters:[t=>{i=t.m,a=t.a,r=t.p,n=t.b,d=t.c,o=t.d},t=>{h=t.l},t=>{u=t.ad,c=t.x,l=t.u,m=t.ae,p=t.av},t=>{g=t.l}],execute:function(){e({a:function(t){const e=y(t),s=c([]),i=()=>{console.log("useLiveAllRisks(): updateAllRisks()"),e.calcAllRisks().then((t=>{s.value=t,console.log("useLiveAllRisks(): updateAllRisks() -> Done")}))};return m([()=>e.risks,()=>e.isReady],i),p((()=>{i()})),s},b:function(t){const e=y(t),s=u({risks:[]});async function i(){var t;await e.ready,await g.ready();const i=await h.table("measures").ready();await e.calcAllRisks(),s.risks=e.allRisks.map((t=>({risk:g.get(t),measures:e.measures[t].map((t=>i.get(t))),meta:e.getMeta(t)}))),s.categories=s.risks.reduce(((t,e)=>{const s=e.risk.factor.category,i=t.findIndex((t=>t.id===s.id));return-1===i?(t.push({...s,risks:[e]}),t):(t[i].risks.push(e),t)}),[]);const a=await h.table("technicians").ready();s.technicians=e.technicians.map((t=>a.get(t))),s.supervisors=e.supervisors.map((t=>a.get(t)));const r=await h.table("equipment").ready();s.equipment=e.equipment.map((t=>r.get(t))),s.access=e.access.map((t=>t)),s.company=e.company,s.address=e.address,s.startDate=e.startDate,s.endDate=e.endDate,s.jobDescr=e.jobDescr,s.signatures=null===(t=e.signatures)||void 0===t?void 0:t.filter((t=>-1===e.lastChange||t.time>e.lastChange)),s.signature=-1===e.lastChange||e.signature&&e.lastChange<e.signature.time?e.signature:void 0}return s.ready=i(),{exportData:s,updateExportData:i}},u:y});const s=e("d",{company:"",startDate:0,endDate:void 0,address:"",jobDescr:"",equipment:[],technicians:[],supervisors:[],access:[],risks:[],measures:{},meta:{}});e("S",class{constructor(e){t(this,"time",void 0),t(this,"signature",void 0),this.signature=e,this.time=Date.now()/1e3}});const v=u(new class{constructor(e){t(this,"id",void 0),t(this,"descr",void 0),t(this,"company",void 0),t(this,"startDate",void 0),t(this,"endDate",void 0),t(this,"address",void 0),t(this,"jobDescr",void 0),t(this,"equipment",void 0),t(this,"technicians",void 0),t(this,"supervisors",void 0),t(this,"access",void 0),t(this,"risks",void 0),t(this,"allRisks",void 0),t(this,"measures",void 0),t(this,"meta",void 0),t(this,"initData",void 0),t(this,"isReady",void 0),t(this,"ready",void 0),t(this,"lastChange",void 0),t(this,"signatures",void 0),t(this,"signature",void 0),this.initData={...s},this.isReady=!1,this.init(e)}init(t){this.isReady=!1,this.measures={},this.meta={},this.allRisks=[],this.lastChange=-1,this.signatures=[],this.signature=void 0,i(this,a(s)),t&&i(this,t),this.updateInitData()}clear(){this.init(),this.id=void 0}updateInitData(){const t=a(r(this,s));this.initData=t}reset(){i(this,this.initData)}modified(){for(let t in this.initData)if(!n(this[t],this.initData[t]))return!0;return!1}changes(){return d(this.initData,this,Object.keys(this.initData))}loadFromDb(t){return this.init({id:t}),this.ready=h.ready().then((()=>h.table("riskassessments").getAsPromise(t))).then((t=>{this.init(t),this.isReady=!0})).catch((t=>{throw Error(t)})),this.ready}async save(){if(void 0===this.id)throw Error("Attempt to update without id");let t={};return t=a(r(this,s)),o.riskassessments.update(this.id,t).then((t=>{if(0===t)throw Error("Could not update. Does ID "+this.id+" exist?");const e=Math.floor(Date.now()/1e3);o.riskassessmentsmeta.update(this.id,{lastChange:e}),this.lastChange=e,this.updateInitData()}))}dateStr(t){return t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)+"-"+t.getUTCDate()}getStartDate(){return new Date(this.startDate)}setStartDate(t){this.startDate=this.dateStr(t)}getEndDate(){return this.endDate?new Date(this.endDate):void 0}setEndDate(t){this.endDate=void 0===t?void 0:this.dateStr(t)}async calcAllRisks(){await g.ready();const t=await h.table("measures").ready(),e=await h.table("equipment").ready(),s=[],i=[...this.risks];for(this.resetMetaAddedBy(),this.equipment.forEach((t=>{e.get(t).causeRisks.forEach((e=>{i.push(e);const s=this.getMeta(e);s.addedBy.find((e=>e.id===t&&"equipment"===e.type))||s.addedBy.push({id:t,type:"equipment"})}))}));i.length>0;){const e=i.pop();s.includes(e)||(s.push(e),this.getMeasures(e).forEach((e=>{t.get(e).causeRisks.forEach((t=>{i.push(t);const s=this.getMeta(t);s.addedBy.find((t=>t.id===e&&"measure"===t.type))||s.addedBy.push({id:e,type:"measure"})}))})))}return this.allRisks=s,s}resetMetaAddedBy(){for(let t in this.meta)this.getMeta(parseInt(t)).addedBy.length=0}getMeta(t){return void 0===this.meta[t]&&(this.meta[t]={risk:t,addedBy:[]}),this.meta[t]}getMeasures(t){return void 0===this.measures[t]&&(this.measures[t]=[]),this.measures[t]}getMeasuresAsRef(t){return c(this.getMeasures(t))}addSector(t={}){const e=this.access.map((t=>t.id?t.id:0)).reduce(((t,e)=>t>e?t+1:e+1),0);this.access.push({id:e,title:"Neuer Sektor "+e,entrance:"",exit:"",anchorPoints:"",comment:"",rescue:"",...t})}updateTechnicianSignature(t,e){void 0===this.signatures&&(this.signatures=[]),this.signatures[t]=e}});function y(t){const e=l();let s=t;return e&&e.path.startsWith("/riskassessment")&&void 0!==e.params.id&&(s=parseInt(e.params.id)),void 0===s||v.id===s||v.loadFromDb(s),v}}}}))}();
