var b=Object.defineProperty;var C=(u,e,s)=>e in u?b(u,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[e]=s;var a=(u,e,s)=>(C(u,typeof e!="symbol"?e+"":e,s),s);import{m as k,b as g,c as y,e as E,d as D,S as c}from"./helpers-e_Ur4xMk.js";import{l as h}from"./livequery-Qd0KOr-e.js";import{a1 as R,x as v,u as M,a2 as w,aj as q,aw as S}from"./index-muNgIfzJ.js";import{l as f}from"./liveriskstree-QMkjSvnr.js";const p={company:"",startDate:0,endDate:void 0,address:"",jobDescr:"",equipment:[],technicians:[],supervisors:[],access:[],risks:[],measures:{},meta:{}};class x{constructor(e){a(this,"id");a(this,"descr");a(this,"company");a(this,"startDate");a(this,"endDate");a(this,"address");a(this,"jobDescr");a(this,"equipment");a(this,"technicians");a(this,"supervisors");a(this,"access");a(this,"risks");a(this,"allRisks");a(this,"measures");a(this,"meta");a(this,"initData");a(this,"isReady");a(this,"ready");a(this,"lastChange");a(this,"signatures");this.initData={...p},this.isReady=!1,this.init(e)}init(e){this.isReady=!1,this.measures={},this.meta={},this.allRisks=[],this.lastChange=-1,this.signatures=[],k(this,g(p)),e&&k(this,e),this.updateInitData()}clear(){this.init(),this.id=void 0}updateInitData(){const e=g(y(this,p));this.initData=e}reset(){k(this,this.initData)}modified(){for(let e in this.initData)if(!E(this[e],this.initData[e]))return!0;return!1}loadFromDb(e){return this.init({id:e}),this.ready=h.ready().then(()=>h.table("riskassessments").getAsPromise(e)).then(s=>{this.init(s),this.isReady=!0}).catch(s=>{throw Error(s)}),this.ready}async save(){if(this.id===void 0)throw Error("Attempt to update without id");let e={};return e=g(y(this,p)),D.riskassessments.update(this.id,e).then(s=>{if(s===0)throw Error("Could not update. Does ID "+this.id+" exist?");const r=Math.floor(Date.now()/1e3);D.riskassessmentsmeta.update(this.id,{lastChange:r}),this.lastChange=r,this.updateInitData()})}dateStr(e){return e.getUTCFullYear()+"-"+(e.getUTCMonth()+1)+"-"+e.getUTCDate()}getStartDate(){return new Date(this.startDate)}setStartDate(e){this.startDate=this.dateStr(e)}getEndDate(){if(this.endDate)return new Date(this.endDate)}setEndDate(e){e===void 0?this.endDate=void 0:this.endDate=this.dateStr(e)}async calcAllRisks(){await f.ready();const e=await h.table("measures").ready(),s=await h.table("equipment").ready(),r=[],n=[...this.risks];for(this.resetMetaAddedBy(),this.equipment.forEach(t=>{s.get(t).causeRisks.forEach(i=>{n.push(i);const o=this.getMeta(i);o.addedBy.find(d=>d.id===t&&d.type==="equipment")||o.addedBy.push({id:t,type:"equipment"})})});n.length>0;){const t=n.pop();r.includes(t)||(r.push(t),this.getMeasures(t).forEach(i=>{e.get(i).causeRisks.forEach(o=>{n.push(o);const d=this.getMeta(o);d.addedBy.find(m=>m.id===i&&m.type==="measure")||d.addedBy.push({id:i,type:"measure"})})}))}return this.allRisks=r,r}resetMetaAddedBy(){for(let e in this.meta)this.getMeta(parseInt(e)).addedBy.length=0}getMeta(e){return this.meta[e]===void 0&&(this.meta[e]={risk:e,addedBy:[]}),this.meta[e]}getMeasures(e){return this.measures[e]===void 0&&(this.measures[e]=[]),this.measures[e]}getMeasuresAsRef(e){return v(this.getMeasures(e))}addSector(e={}){const s=this.access.map(r=>r.id?r.id:0).reduce((r,n)=>r>n?r+1:n+1,0);this.access.push({id:s,title:"Neuer Sektor "+s,entrance:"",exit:"",anchorPoints:"",comment:"",rescue:"",...e})}updateTechnicianSignature(e,s){this.signatures===void 0&&(this.signatures=[]),this.signatures[e]={time:Date.now()/1e3,signature:s}}}const l=R(new x);function A(u){const e=M();let s=u;return e&&e.path.startsWith("/riskassessment")&&e.params.id!==void 0&&(s=parseInt(e.params.id)),s===void 0||l.id===s||l.loadFromDb(s),l}function L(u){const e=A(u),s=v([]),r=()=>{console.log("useLiveAllRisks(): updateAllRisks()"),e.calcAllRisks().then(n=>{s.value=n,console.log("useLiveAllRisks(): updateAllRisks() -> Done")})};return w([()=>e.risks,()=>e.isReady],r),q(()=>{r()}),s}function U(u){const e=A(u);h.table("equipment");const s=R({risks:[]});async function r(){s.sector={},await e.ready,await f.ready();const n=await h.table("measures");await e.calcAllRisks(),s.risks=e.allRisks.map(t=>({risk:f.get(t),measures:e.measures[t].map(i=>n.get(i)),meta:e.getMeta(t)})),s.sector.access=s.risks.filter(t=>t.risk.sector===c.Access),s.sector.environment=s.risks.filter(t=>t.risk.sector===c.Environment),s.sector.work=s.risks.filter(t=>t.risk.sector===c.Work),s.categories=s.risks.reduce((t,i)=>{console.log(t),console.log(i);const o=i.risk.factor.category,d=t.findIndex(m=>m.id===o.id);return d===-1?(t.push({...o,risks:[i]}),t):(t[d].risks.push(i),t)},[]),s.sector.access=s.risks.filter(t=>t.risk.sector===c.Access),s.sector.environment=s.risks.filter(t=>t.risk.sector===c.Environment),s.sector.work=s.risks.filter(t=>t.risk.sector===c.Work)}return r(),e.ready.then(()=>{var n;h.table("technicians").ready().then(t=>{s.technicians=e.technicians.map(i=>t.get(i)),s.supervisors=e.supervisors.map(i=>t.get(i))}),h.table("equipment").ready().then(t=>{s.equipment=e.equipment.map(i=>t.get(i))}),s.access=e.access.map(t=>{const i={};i.id=t.id,i.title=t.title;for(let o in t)o==="id"||o==="title"||(i[o]=S.parse(t[o]));return i}),s.company=e.company,s.address=e.address,s.startDate=e.startDate,s.endDate=e.endDate,s.jobDescr=e.jobDescr,s.signatures=(n=e.signatures)==null?void 0:n.filter(t=>e.lastChange===-1||t.time>e.lastChange)}),w(e,()=>{s.signatures=e.signatures.filter(n=>e.lastChange===-1||n.time>e.lastChange)}),s}export{L as a,U as b,p as d,A as u};
