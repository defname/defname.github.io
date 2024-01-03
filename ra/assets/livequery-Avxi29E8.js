var u=Object.defineProperty;var c=(a,e,t)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var s=(a,e,t)=>(c(a,typeof e!="symbol"?e+"":e,t),t);import{d as g,m as v}from"./helpers-XEDI7-F6.js";import{Z as d,G as _}from"./index-TA_wujje.js";class y{constructor(e,t,i="id"){s(this,"_db");s(this,"_tableName");s(this,"_primKey");s(this,"_table");s(this,"_entries");s(this,"_entriesById");s(this,"_lastKey");s(this,"_ready");s(this,"_isReady");s(this,"_updated");this._db=e,this._tableName=t,this._primKey=i,this._table=this._db.table(this._tableName),console.log(this._table),this._entries=d([]),this._entriesById=d({}),this._updated=_(0),this._isReady=_(!1),this._lastKey=0,this._ready=this._table.each((r,n)=>{this.addEntry(n.primaryKey,r)}).then(()=>(this._table.hook("creating",this.onCreating.bind(this)),this._table.hook("updating",this.onUpdate.bind(this)),this._table.hook("deleting",this.onDeleting.bind(this)),this)),this._ready.then(()=>{console.log("Live table "+t+" intialized."),this._isReady.value=!0})}ready(){return this._ready}isReady(){return this._isReady}updated(){return this._updated}entries(){return this._entries}get(e){return this._entriesById[e]}getAsPromise(e){return this.ready().then(t=>t.get(e))}getAsRef(e){const t=_(void 0);return this.getAsPromise(e).then(i=>{t.value=i}),t}delete(e){return this.ready().then(()=>this._table.where(this._primKey).equals(e).delete())}db(){return this._db}onCreating(e,t,i){let r=this.addEntry(e,t);return console.log("LiveTable: "+this._tableName+" added object with primary key "+r),console.log(t),r}onUpdate(e,t,i,r){console.log("MODS"),console.log(e),this.updateEntry(t,e)}onDeleting(e){this.deleteEntry(e)}addEntry(e,t){this._lastKey,e!==void 0&&e>this._lastKey?this._lastKey=e:this._lastKey++;const i=d(t);return i.id=this._lastKey,this._entriesById[this._lastKey]=i,this._entries.push(i),this._updated.value++,this._lastKey}modificationsToPartialT(e){const t={},i=(r,n,l=t)=>{const o=r.indexOf(".");if(console.log(r,o),o===-1){l[r]=e[n];return}const h=r.slice(0,o),b=r.slice(o+1);l[h]===void 0&&(l[h]={}),i(b,n,l[h])};for(let r in e)i(r,r,t);return t}updateEntry(e,t){if(this._entriesById[e]===void 0)throw Error("LiveTable: There is no primary key "+e+" in "+this._tableName);v(this._entriesById[e],this.modificationsToPartialT(t)),console.log("LiveTable: updated object with primary key "+e),console.log(this._entriesById[e]),this._updated.value++}deleteEntry(e){let t=this._entries.indexOf(this._entriesById[e]);if(t===-1){console.warn("LiveTable: trying to delete non existing element with primary key "+e);return}this._entries.splice(t,1),delete this._entriesById[e],console.log("LiveTable: removed entry with primary key "+e+" from table"),this._updated.value++}}class p{constructor(e,t=!1){s(this,"_db");s(this,"_tables");s(this,"_lazy");s(this,"_ready");s(this,"_resolve");this._lazy=t,this._db=e,this._tables={},this._ready=new Promise(i=>{this._resolve=i,this._db.on("ready",this.onDbReady.bind(this))})}ready(){return this._ready}table(e){if(this._lazy)return this._tables[e]===void 0&&(this._tables[e]=new y(this._db,e)),this._tables[e];{const t=this._tables[e];if(t===void 0)throw Error("There is no table with name "+e);return t}}onDbReady(e){if(console.log("liveQueryManager onDbReady()"),this._lazy){console.log("LiveQueryManager: initialization finished (lazy)"),this._resolve.call(this);return}else{let t=[];this._db.tables.forEach(i=>{this._tables[i.name]=new y(this._db,i.name),t.push(this._tables[i.name].ready())}),Promise.all(t).then(()=>{console.log("LiveQueryManager: initialization finished (non-lazy)"),this._resolve.call(this)})}}}const K=new p(g,!0);export{y as L,K as l};
