var E=Object.defineProperty;var M=(r,e,s)=>e in r?E(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var i=(r,e,s)=>(M(r,typeof e!="symbol"?e+"":e,s),s);import{m as k,b as f,c as v,e as S,d as R,S as m}from"./helpers-zdMMMbdC.js";import{l}from"./livequery-n1ASvNCs.js";import{a1 as w,x as A,u as q,a2 as x,aj as B}from"./index-K_AOim41.js";import{l as y}from"./liveriskstree-DIbmCcGv.js";const g={company:"",startDate:0,endDate:void 0,address:"",jobDescr:"",equipment:[],technicians:[],supervisors:[],access:[],risks:[],measures:{},meta:{}};class P{constructor(e){i(this,"time");i(this,"signature");this.signature=e,this.time=Date.now()/1e3}}class T{constructor(e){i(this,"id");i(this,"descr");i(this,"company");i(this,"startDate");i(this,"endDate");i(this,"address");i(this,"jobDescr");i(this,"equipment");i(this,"technicians");i(this,"supervisors");i(this,"access");i(this,"risks");i(this,"allRisks");i(this,"measures");i(this,"meta");i(this,"initData");i(this,"isReady");i(this,"ready");i(this,"lastChange");i(this,"signatures");i(this,"signature");this.initData={...g},this.isReady=!1,this.init(e)}init(e){this.isReady=!1,this.measures={},this.meta={},this.allRisks=[],this.lastChange=-1,this.signatures=[],this.signature=void 0,k(this,f(g)),e&&k(this,e),this.updateInitData()}clear(){this.init(),this.id=void 0}updateInitData(){const e=f(v(this,g));this.initData=e}reset(){k(this,this.initData)}modified(){for(let e in this.initData)if(!S(this[e],this.initData[e]))return!0;return!1}loadFromDb(e){return this.init({id:e}),this.ready=l.ready().then(()=>l.table("riskassessments").getAsPromise(e)).then(s=>{this.init(s),this.isReady=!0}).catch(s=>{throw Error(s)}),this.ready}async save(){if(this.id===void 0)throw Error("Attempt to update without id");let e={};return e=f(v(this,g)),R.riskassessments.update(this.id,e).then(s=>{if(s===0)throw Error("Could not update. Does ID "+this.id+" exist?");const a=Math.floor(Date.now()/1e3);R.riskassessmentsmeta.update(this.id,{lastChange:a}),this.lastChange=a,this.updateInitData()})}dateStr(e){return e.getUTCFullYear()+"-"+(e.getUTCMonth()+1)+"-"+e.getUTCDate()}getStartDate(){return new Date(this.startDate)}setStartDate(e){this.startDate=this.dateStr(e)}getEndDate(){if(this.endDate)return new Date(this.endDate)}setEndDate(e){e===void 0?this.endDate=void 0:this.endDate=this.dateStr(e)}async calcAllRisks(){await y.ready();const e=await l.table("measures").ready(),s=await l.table("equipment").ready(),a=[],o=[...this.risks];for(this.resetMetaAddedBy(),this.equipment.forEach(u=>{s.get(u).causeRisks.forEach(d=>{o.push(d);const c=this.getMeta(d);c.addedBy.find(t=>t.id===u&&t.type==="equipment")||c.addedBy.push({id:u,type:"equipment"})})});o.length>0;){const u=o.pop();a.includes(u)||(a.push(u),this.getMeasures(u).forEach(d=>{e.get(d).causeRisks.forEach(c=>{o.push(c);const t=this.getMeta(c);t.addedBy.find(n=>n.id===d&&n.type==="measure")||t.addedBy.push({id:d,type:"measure"})})}))}return this.allRisks=a,a}resetMetaAddedBy(){for(let e in this.meta)this.getMeta(parseInt(e)).addedBy.length=0}getMeta(e){return this.meta[e]===void 0&&(this.meta[e]={risk:e,addedBy:[]}),this.meta[e]}getMeasures(e){return this.measures[e]===void 0&&(this.measures[e]=[]),this.measures[e]}getMeasuresAsRef(e){return A(this.getMeasures(e))}addSector(e={}){const s=this.access.map(a=>a.id?a.id:0).reduce((a,o)=>a>o?a+1:o+1,0);this.access.push({id:s,title:"Neuer Sektor "+s,entrance:"",exit:"",anchorPoints:"",comment:"",rescue:"",...e})}updateTechnicianSignature(e,s){this.signatures===void 0&&(this.signatures=[]),this.signatures[e]=s}}const p=w(new T);function b(r){const e=q();let s=r;return e&&e.path.startsWith("/riskassessment")&&e.params.id!==void 0&&(s=parseInt(e.params.id)),s===void 0||p.id===s||p.loadFromDb(s),p}function N(r){const e=b(r),s=A([]),a=()=>{console.log("useLiveAllRisks(): updateAllRisks()"),e.calcAllRisks().then(o=>{s.value=o,console.log("useLiveAllRisks(): updateAllRisks() -> Done")})};return x([()=>e.risks,()=>e.isReady],a),B(()=>{a()}),s}function O(r){const e=b(r),s=w({risks:[]});async function a(){var c;s.sector={},await e.ready,await y.ready();const o=await l.table("measures").ready();await e.calcAllRisks(),s.risks=e.allRisks.map(t=>({risk:y.get(t),measures:e.measures[t].map(n=>o.get(n)),meta:e.getMeta(t)})),s.sector.access=s.risks.filter(t=>t.risk.sector===m.Access),s.sector.environment=s.risks.filter(t=>t.risk.sector===m.Environment),s.sector.work=s.risks.filter(t=>t.risk.sector===m.Work),s.categories=s.risks.reduce((t,n)=>{const h=n.risk.factor.category,D=t.findIndex(C=>C.id===h.id);return D===-1?(t.push({...h,risks:[n]}),t):(t[D].risks.push(n),t)},[]),s.sector.access=s.risks.filter(t=>t.risk.sector===m.Access),s.sector.environment=s.risks.filter(t=>t.risk.sector===m.Environment),s.sector.work=s.risks.filter(t=>t.risk.sector===m.Work);const u=await l.table("technicians").ready();s.technicians=e.technicians.map(t=>u.get(t)),s.supervisors=e.supervisors.map(t=>u.get(t));const d=await l.table("equipment").ready();s.equipment=e.equipment.map(t=>d.get(t)),s.access=e.access.map(t=>{const n={};n.id=t.id,n.title=t.title;for(let h in t)h==="id"||h==="title"||(n[h]=t[h]);return n}),s.company=e.company,s.address=e.address,s.startDate=e.startDate,s.endDate=e.endDate,s.jobDescr=e.jobDescr,s.signatures=(c=e.signatures)==null?void 0:c.filter(t=>e.lastChange===-1||t.time>e.lastChange),s.signature=e.lastChange===-1||e.signature&&e.lastChange<e.signature.time?e.signature:void 0}return s.ready=a(),{exportData:s,updateExportData:a}}export{P as S,N as a,O as b,g as d,b as u};
