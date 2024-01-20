var h=Object.defineProperty;var y=(c,i,e)=>i in c?h(c,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[i]=e;var r=(c,i,e)=>(y(c,typeof i!="symbol"?i+"":i,e),e);import{d as f,R as u}from"./database-GtjOZku2.js";import{L as g}from"./livequery-DZoN91kH.js";import{ak as a}from"./index-6YVP06UH.js";class l extends g{constructor(e){super(e,"risks");r(this,"categories");r(this,"categoriesById");r(this,"factors");r(this,"factorsById");r(this,"risks");r(this,"risksById");r(this,"_categoriesAndFactorsReady");r(this,"_entriesReady");r(this,"_treeReady");this.categories=a([]),this.categoriesById=a({}),this.factors=a([]),this.factorsById=a({}),this._entriesReady=[],this._categoriesAndFactorsReady=super.ready().then(()=>this.initCategoriesAndFactors()),this._treeReady=super.ready().then(()=>Promise.all(this._entriesReady)).then(()=>(console.log("LiveRiskTree: initialized"),this))}initCategoriesAndFactors(){return this.db().categories.each(e=>{const t=e,s=a(t);this.categories.push(s),this.categoriesById[t.id]=s}).then(()=>this.db().factors.each(e=>{const t=e,s=a(t);this.factors.push(s),this.factorsById[t.id]=s,t.setup(o=>this.categoriesById[o])})).then(()=>{console.log("Categories and factors set up")})}ready(){return this._treeReady}addEntry(e,t){const s=new u(t.descr,t.sector,t.factorId);let o=this._categoriesAndFactorsReady.then(()=>{s.setup(d=>this.factorsById[d],d=>this.categoriesById[d])});return this._entriesReady.push(o),super.addEntry(e,s)}deleteEntry(e){var d,n;const t=this._entriesById[e];if(t===void 0)throw Error("LiveRiskTree: There is no risk with id "+e+" to delete");const s=this.factorsById[t.factorId];if(s===void 0)throw Error("LiveRiskTree: There is no factor with id "+t.factorId);const o=(d=s.risks)==null?void 0:d.indexOf(t);o===-1||o===void 0?console.warn("LiveRisksTree: The risk with id "+e+" is not listed in factor '"+s.descr+"' but this factor is parent"):(n=s.risks)==null||n.splice(o,1),super.delete(e)}}const k=a(new l(f));export{k as l};