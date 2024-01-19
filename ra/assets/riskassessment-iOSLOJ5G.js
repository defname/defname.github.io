var C=Object.defineProperty;var M=(r,t,e)=>t in r?C(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var a=(r,t,e)=>(M(r,typeof t!="symbol"?t+"":t,e),e);import{m as p,a as g,p as k,b as E,c as q,d as R}from"./database-Jpx-SvdX.js";import{l as c}from"./livequery-abB8zLye.js";import{ad as v,x as w,u as S,ae as x,av as B}from"./index-MjQ2o11G.js";import{l as y}from"./liveriskstree-ekSLVueQ.js";const m={company:"",startDate:0,endDate:void 0,address:"",jobDescr:"",equipment:[],technicians:[],supervisors:[],access:[],risks:[],measures:{},meta:{}};class P{constructor(t){a(this,"time");a(this,"signature");this.signature=t,this.time=Date.now()/1e3}}class T{constructor(t){a(this,"id");a(this,"descr");a(this,"company");a(this,"startDate");a(this,"endDate");a(this,"address");a(this,"jobDescr");a(this,"equipment");a(this,"technicians");a(this,"supervisors");a(this,"access");a(this,"risks");a(this,"allRisks");a(this,"measures");a(this,"meta");a(this,"initData");a(this,"isReady");a(this,"ready");a(this,"lastChange");a(this,"signatures");a(this,"signature");this.initData={...m},this.isReady=!1,this.init(t)}init(t){this.isReady=!1,this.measures={},this.meta={},this.allRisks=[],this.lastChange=-1,this.signatures=[],this.signature=void 0,p(this,g(m)),t&&p(this,t),this.updateInitData()}clear(){this.init(),this.id=void 0}updateInitData(){const t=g(k(this,m));this.initData=t}reset(){p(this,this.initData)}modified(){for(let t in this.initData)if(!E(this[t],this.initData[t]))return!0;return!1}changes(){return q(this.initData,this,Object.keys(this.initData))}loadFromDb(t){return this.init({id:t}),this.ready=c.ready().then(()=>c.table("riskassessments").getAsPromise(t)).then(e=>{this.init(e),this.isReady=!0}).catch(e=>{throw Error(e)}),this.ready}async save(){if(this.id===void 0)throw Error("Attempt to update without id");let t={};return t=g(k(this,m)),R.riskassessments.update(this.id,t).then(e=>{if(e===0)throw Error("Could not update. Does ID "+this.id+" exist?");const i=Math.floor(Date.now()/1e3);R.riskassessmentsmeta.update(this.id,{lastChange:i}),this.lastChange=i,this.updateInitData()})}dateStr(t){return t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)+"-"+t.getUTCDate()}getStartDate(){return new Date(this.startDate)}setStartDate(t){this.startDate=this.dateStr(t)}getEndDate(){if(this.endDate)return new Date(this.endDate)}setEndDate(t){t===void 0?this.endDate=void 0:this.endDate=this.dateStr(t)}async calcAllRisks(){await y.ready();const t=await c.table("measures").ready(),e=await c.table("equipment").ready(),i=[],n=[...this.risks];for(this.resetMetaAddedBy(),this.equipment.forEach(u=>{e.get(u).causeRisks.forEach(o=>{n.push(o);const h=this.getMeta(o);h.addedBy.find(s=>s.id===u&&s.type==="equipment")||h.addedBy.push({id:u,type:"equipment"})})});n.length>0;){const u=n.pop();i.includes(u)||(i.push(u),this.getMeasures(u).forEach(o=>{t.get(o).causeRisks.forEach(h=>{n.push(h);const s=this.getMeta(h);s.addedBy.find(d=>d.id===o&&d.type==="measure")||s.addedBy.push({id:o,type:"measure"})})}))}return this.allRisks=i,i}resetMetaAddedBy(){for(let t in this.meta)this.getMeta(parseInt(t)).addedBy.length=0}getMeta(t){return this.meta[t]===void 0&&(this.meta[t]={risk:t,addedBy:[]}),this.meta[t]}getMeasures(t){return this.measures[t]===void 0&&(this.measures[t]=[]),this.measures[t]}getMeasuresAsRef(t){return w(this.getMeasures(t))}addSector(t={}){const e=this.access.map(i=>i.id?i.id:0).reduce((i,n)=>i>n?i+1:n+1,0);this.access.push({id:e,title:"Neuer Sektor "+e,entrance:"",exit:"",anchorPoints:"",comment:"",rescue:"",...t})}updateTechnicianSignature(t,e){this.signatures===void 0&&(this.signatures=[]),this.signatures[t]=e}}const l=v(new T);function b(r){const t=S();let e=r;return t&&t.path.startsWith("/riskassessment")&&t.params.id!==void 0&&(e=parseInt(t.params.id)),e===void 0||l.id===e||l.loadFromDb(e),l}function W(r){const t=b(r),e=w([]),i=()=>{console.log("useLiveAllRisks(): updateAllRisks()"),t.calcAllRisks().then(n=>{e.value=n,console.log("useLiveAllRisks(): updateAllRisks() -> Done")})};return x([()=>t.risks,()=>t.isReady],i),B(()=>{i()}),e}function N(r){const t=b(r),e=v({risks:[]});async function i(){var h;await t.ready,await y.ready();const n=await c.table("measures").ready();await t.calcAllRisks(),e.risks=t.allRisks.map(s=>({risk:y.get(s),measures:t.measures[s].map(d=>n.get(d)),meta:t.getMeta(s)})),e.categories=e.risks.reduce((s,d)=>{const D=d.risk.factor.category,f=s.findIndex(A=>A.id===D.id);return f===-1?(s.push({...D,risks:[d]}),s):(s[f].risks.push(d),s)},[]);const u=await c.table("technicians").ready();e.technicians=t.technicians.map(s=>u.get(s)),e.supervisors=t.supervisors.map(s=>u.get(s));const o=await c.table("equipment").ready();e.equipment=t.equipment.map(s=>o.get(s)),e.access=t.access.map(s=>s),e.company=t.company,e.address=t.address,e.startDate=t.startDate,e.endDate=t.endDate,e.jobDescr=t.jobDescr,e.signatures=(h=t.signatures)==null?void 0:h.filter(s=>t.lastChange===-1||s.time>t.lastChange),e.signature=t.lastChange===-1||t.signature&&t.lastChange<t.signature.time?t.signature:void 0}return e.ready=i(),{exportData:e,updateExportData:i}}export{P as S,W as a,N as b,m as d,b as u};
