var C=Object.defineProperty;var M=(r,e,t)=>e in r?C(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e,t)=>(M(r,typeof e!="symbol"?e+"":e,t),t);import{m as p,b as g,c as k,e as E,d as R}from"./helpers-NsTiBvop.js";import{l as c}from"./livequery-bNlwf3Pc.js";import{a1 as v,x as w,u as q,a2 as S,aj as x}from"./index-Mp0SBjDu.js";import{l as y}from"./liveriskstree-BmKhT2F4.js";const m={company:"",startDate:0,endDate:void 0,address:"",jobDescr:"",equipment:[],technicians:[],supervisors:[],access:[],risks:[],measures:{},meta:{}};class P{constructor(e){a(this,"time");a(this,"signature");this.signature=e,this.time=Date.now()/1e3}}class B{constructor(e){a(this,"id");a(this,"descr");a(this,"company");a(this,"startDate");a(this,"endDate");a(this,"address");a(this,"jobDescr");a(this,"equipment");a(this,"technicians");a(this,"supervisors");a(this,"access");a(this,"risks");a(this,"allRisks");a(this,"measures");a(this,"meta");a(this,"initData");a(this,"isReady");a(this,"ready");a(this,"lastChange");a(this,"signatures");a(this,"signature");this.initData={...m},this.isReady=!1,this.init(e)}init(e){this.isReady=!1,this.measures={},this.meta={},this.allRisks=[],this.lastChange=-1,this.signatures=[],this.signature=void 0,p(this,g(m)),e&&p(this,e),this.updateInitData()}clear(){this.init(),this.id=void 0}updateInitData(){const e=g(k(this,m));this.initData=e}reset(){p(this,this.initData)}modified(){for(let e in this.initData)if(!E(this[e],this.initData[e]))return!0;return!1}loadFromDb(e){return this.init({id:e}),this.ready=c.ready().then(()=>c.table("riskassessments").getAsPromise(e)).then(t=>{this.init(t),this.isReady=!0}).catch(t=>{throw Error(t)}),this.ready}async save(){if(this.id===void 0)throw Error("Attempt to update without id");let e={};return e=g(k(this,m)),R.riskassessments.update(this.id,e).then(t=>{if(t===0)throw Error("Could not update. Does ID "+this.id+" exist?");const i=Math.floor(Date.now()/1e3);R.riskassessmentsmeta.update(this.id,{lastChange:i}),this.lastChange=i,this.updateInitData()})}dateStr(e){return e.getUTCFullYear()+"-"+(e.getUTCMonth()+1)+"-"+e.getUTCDate()}getStartDate(){return new Date(this.startDate)}setStartDate(e){this.startDate=this.dateStr(e)}getEndDate(){if(this.endDate)return new Date(this.endDate)}setEndDate(e){e===void 0?this.endDate=void 0:this.endDate=this.dateStr(e)}async calcAllRisks(){await y.ready();const e=await c.table("measures").ready(),t=await c.table("equipment").ready(),i=[],n=[...this.risks];for(this.resetMetaAddedBy(),this.equipment.forEach(u=>{t.get(u).causeRisks.forEach(o=>{n.push(o);const d=this.getMeta(o);d.addedBy.find(s=>s.id===u&&s.type==="equipment")||d.addedBy.push({id:u,type:"equipment"})})});n.length>0;){const u=n.pop();i.includes(u)||(i.push(u),this.getMeasures(u).forEach(o=>{e.get(o).causeRisks.forEach(d=>{n.push(d);const s=this.getMeta(d);s.addedBy.find(h=>h.id===o&&h.type==="measure")||s.addedBy.push({id:o,type:"measure"})})}))}return this.allRisks=i,i}resetMetaAddedBy(){for(let e in this.meta)this.getMeta(parseInt(e)).addedBy.length=0}getMeta(e){return this.meta[e]===void 0&&(this.meta[e]={risk:e,addedBy:[]}),this.meta[e]}getMeasures(e){return this.measures[e]===void 0&&(this.measures[e]=[]),this.measures[e]}getMeasuresAsRef(e){return w(this.getMeasures(e))}addSector(e={}){const t=this.access.map(i=>i.id?i.id:0).reduce((i,n)=>i>n?i+1:n+1,0);this.access.push({id:t,title:"Neuer Sektor "+t,entrance:"",exit:"",anchorPoints:"",comment:"",rescue:"",...e})}updateTechnicianSignature(e,t){this.signatures===void 0&&(this.signatures=[]),this.signatures[e]=t}}const l=v(new B);function b(r){const e=q();let t=r;return e&&e.path.startsWith("/riskassessment")&&e.params.id!==void 0&&(t=parseInt(e.params.id)),t===void 0||l.id===t||l.loadFromDb(t),l}function W(r){const e=b(r),t=w([]),i=()=>{console.log("useLiveAllRisks(): updateAllRisks()"),e.calcAllRisks().then(n=>{t.value=n,console.log("useLiveAllRisks(): updateAllRisks() -> Done")})};return S([()=>e.risks,()=>e.isReady],i),x(()=>{i()}),t}function N(r){const e=b(r),t=v({risks:[]});async function i(){var d;await e.ready,await y.ready();const n=await c.table("measures").ready();await e.calcAllRisks(),t.risks=e.allRisks.map(s=>({risk:y.get(s),measures:e.measures[s].map(h=>n.get(h)),meta:e.getMeta(s)})),t.categories=t.risks.reduce((s,h)=>{const f=h.risk.factor.category,D=s.findIndex(A=>A.id===f.id);return D===-1?(s.push({...f,risks:[h]}),s):(s[D].risks.push(h),s)},[]);const u=await c.table("technicians").ready();t.technicians=e.technicians.map(s=>u.get(s)),t.supervisors=e.supervisors.map(s=>u.get(s));const o=await c.table("equipment").ready();t.equipment=e.equipment.map(s=>o.get(s)),t.access=e.access.map(s=>s),t.company=e.company,t.address=e.address,t.startDate=e.startDate,t.endDate=e.endDate,t.jobDescr=e.jobDescr,t.signatures=(d=e.signatures)==null?void 0:d.filter(s=>e.lastChange===-1||s.time>e.lastChange),t.signature=e.lastChange===-1||e.signature&&e.lastChange<e.signature.time?e.signature:void 0}return t.ready=i(),{exportData:t,updateExportData:i}}export{P as S,W as a,N as b,m as d,b as u};
