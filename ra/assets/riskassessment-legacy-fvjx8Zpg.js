!function(){function t(t,e,s){var i;return(e="symbol"==typeof(i=function(t,e){if("object"!=typeof t||!t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?i:String(i))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}System.register(["./helpers-legacy-F26KddQ_.js","./livequery-legacy-yPw0_Doz.js","./index-legacy-65H9ozvS.js","./liveriskstree-legacy-DvY5R-ZT.js"],(function(e,s){"use strict";var i,a,r,n,o,d,c,h,u,l,m,g,p,v;return{setters:[t=>{i=t.m,a=t.b,r=t.c,n=t.e,o=t.d,d=t.S},t=>{c=t.l},t=>{h=t.a1,u=t.x,l=t.u,m=t.a2,g=t.aj,p=t.aw},t=>{v=t.l}],execute:function(){e({a:function(t){const e=k(t),s=u([]),i=()=>{console.log("useLiveAllRisks(): updateAllRisks()"),e.calcAllRisks().then((t=>{s.value=t,console.log("useLiveAllRisks(): updateAllRisks() -> Done")}))};return m([()=>e.risks,()=>e.isReady],i),g((()=>{i()})),s},b:function(t){const e=k(t);c.table("equipment");const s=h({risks:[]});return async function(){s.sector={},await e.ready,await v.ready();const t=await c.table("measures");await e.calcAllRisks(),s.risks=e.allRisks.map((s=>({risk:v.get(s),measures:e.measures[s].map((e=>t.get(e))),meta:e.getMeta(s)}))),s.sector.access=s.risks.filter((t=>t.risk.sector===d.Access)),s.sector.environment=s.risks.filter((t=>t.risk.sector===d.Environment)),s.sector.work=s.risks.filter((t=>t.risk.sector===d.Work)),s.categories=s.risks.reduce(((t,e)=>{console.log(t),console.log(e);const s=e.risk.factor.category,i=t.findIndex((t=>t.id===s.id));return-1===i?(t.push({...s,risks:[e]}),t):(t[i].risks.push(e),t)}),[]),s.sector.access=s.risks.filter((t=>t.risk.sector===d.Access)),s.sector.environment=s.risks.filter((t=>t.risk.sector===d.Environment)),s.sector.work=s.risks.filter((t=>t.risk.sector===d.Work))}(),e.ready.then((()=>{var t;c.table("technicians").ready().then((t=>{s.technicians=e.technicians.map((e=>t.get(e))),s.supervisors=e.supervisors.map((e=>t.get(e)))})),c.table("equipment").ready().then((t=>{s.equipment=e.equipment.map((e=>t.get(e)))})),s.access=e.access.map((t=>{const e={};e.id=t.id,e.title=t.title;for(let s in t)"id"!==s&&"title"!==s&&(e[s]=p.parse(t[s]));return e})),s.company=e.company,s.address=e.address,s.startDate=e.startDate,s.endDate=e.endDate,s.jobDescr=e.jobDescr,s.signatures=null===(t=e.signatures)||void 0===t?void 0:t.filter((t=>-1===e.lastChange||t.time>e.lastChange))})),m(e,(()=>{console.log("Signatures"),console.log(e.signatures),s.signatures=e.signatures.filter((t=>-1===e.lastChange||t.time>e.lastChange))})),s},u:k});const s=e("d",{company:"",startDate:0,endDate:void 0,address:"",jobDescr:"",equipment:[],technicians:[],supervisors:[],access:[],risks:[],measures:{},meta:{}});const y=h(new class{constructor(e){t(this,"id",void 0),t(this,"descr",void 0),t(this,"company",void 0),t(this,"startDate",void 0),t(this,"endDate",void 0),t(this,"address",void 0),t(this,"jobDescr",void 0),t(this,"equipment",void 0),t(this,"technicians",void 0),t(this,"supervisors",void 0),t(this,"access",void 0),t(this,"risks",void 0),t(this,"allRisks",void 0),t(this,"measures",void 0),t(this,"meta",void 0),t(this,"initData",void 0),t(this,"isReady",void 0),t(this,"ready",void 0),t(this,"lastChange",void 0),t(this,"signatures",void 0),this.initData={...s},this.isReady=!1,this.init(e)}init(t){this.isReady=!1,this.measures={},this.meta={},this.allRisks=[],this.lastChange=-1,this.signatures=[],i(this,a(s)),t&&i(this,t),this.updateInitData()}clear(){this.init(),this.id=void 0}updateInitData(){const t=a(r(this,s));this.initData=t}reset(){i(this,this.initData)}modified(){for(let t in this.initData)if(!n(this[t],this.initData[t]))return!0;return!1}loadFromDb(t){return this.init({id:t}),this.ready=c.ready().then((()=>c.table("riskassessments").getAsPromise(t))).then((t=>{this.init(t),this.isReady=!0})).catch((t=>{throw Error(t)})),this.ready}async save(){if(void 0===this.id)throw Error("Attempt to update without id");let t={};return t=a(r(this,s)),o.riskassessments.update(this.id,t).then((t=>{if(0===t)throw Error("Could not update. Does ID "+this.id+" exist?");const e=Math.floor(Date.now()/1e3);o.riskassessmentsmeta.update(this.id,{lastChange:e}),this.lastChange=e,this.updateInitData()}))}dateStr(t){return t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)+"-"+t.getUTCDate()}getStartDate(){return new Date(this.startDate)}setStartDate(t){this.startDate=this.dateStr(t)}getEndDate(){return this.endDate?new Date(this.endDate):void 0}setEndDate(t){this.endDate=void 0===t?void 0:this.dateStr(t)}async calcAllRisks(){await v.ready();const t=await c.table("measures").ready(),e=await c.table("equipment").ready(),s=[],i=[...this.risks];for(this.resetMetaAddedBy(),this.equipment.forEach((t=>{e.get(t).causeRisks.forEach((e=>{i.push(e);const s=this.getMeta(e);s.addedBy.find((e=>e.id===t&&"equipment"===e.type))||s.addedBy.push({id:t,type:"equipment"})}))}));i.length>0;){const e=i.pop();s.includes(e)||(s.push(e),this.getMeasures(e).forEach((e=>{t.get(e).causeRisks.forEach((t=>{i.push(t);const s=this.getMeta(t);s.addedBy.find((t=>t.id===e&&"measure"===t.type))||s.addedBy.push({id:e,type:"measure"})}))})))}return this.allRisks=s,s}resetMetaAddedBy(){for(let t in this.meta)this.getMeta(parseInt(t)).addedBy.length=0}getMeta(t){return void 0===this.meta[t]&&(this.meta[t]={risk:t,addedBy:[]}),this.meta[t]}getMeasures(t){return void 0===this.measures[t]&&(this.measures[t]=[]),this.measures[t]}getMeasuresAsRef(t){return u(this.getMeasures(t))}addSector(t={}){const e=this.access.map((t=>t.id?t.id:0)).reduce(((t,e)=>t>e?t+1:e+1),0);this.access.push({id:e,title:"Neuer Sektor "+e,entrance:"",exit:"",anchorPoints:"",comment:"",rescue:"",...t})}updateTechnicianSignature(t,e){void 0===this.signatures&&(this.signatures=[]),this.signatures[t]={time:Date.now()/1e3,signature:e}}});function k(t){const e=l();let s=t;return e&&e.path.startsWith("/riskassessment")&&void 0!==e.params.id&&(s=parseInt(e.params.id)),void 0===s||y.id===s||y.loadFromDb(s),y}}}}))}();
