var k=Object.defineProperty;var R=(i,e,t)=>e in i?k(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var o=(i,e,t)=>(R(i,typeof e!="symbol"?e+"":e,t),t);import{d as L,m as E}from"./database-GtjOZku2.js";import{ak as g,x as b,al as f,aB as v,aF as m}from"./index-6YVP06UH.js";class p{constructor(e,t,s="id"){o(this,"_db");o(this,"_tableName");o(this,"_primKey");o(this,"_table");o(this,"_entries");o(this,"_entriesById");o(this,"_lastKey");o(this,"_ready");o(this,"_isReady");o(this,"_updated");this._db=e,this._tableName=t,this._primKey=s,this._table=this._db.table(this._tableName),console.log(this._table),this._entries=g([]),this._entriesById=g({}),this._updated=b(0),this._isReady=b(!1),this._lastKey=0,this._ready=this._table.each((n,r)=>{this.addEntry(r.primaryKey,n)}).then(()=>(this._table.hook("creating",this.onCreating.bind(this)),this._table.hook("updating",this.onUpdate.bind(this)),this._table.hook("deleting",this.onDeleting.bind(this)),this)),this._ready.then(()=>{console.log("Live table "+t+" intialized."),this._isReady.value=!0})}ready(){return this._ready}isReady(){return this._isReady}updated(){return this._updated}entries(){return this._entries}get(e){return this._entriesById[e]}getAsPromise(e){return this.ready().then(t=>t.get(e))}getAsRef(e){const t=b(void 0);return this.getAsPromise(e).then(s=>{t.value=s}),t}delete(e){return this.ready().then(()=>this._table.where(this._primKey).equals(e).delete())}db(){return this._db}onCreating(e,t,s){let n=this.addEntry(e,t);return console.log("LiveTable: "+this._tableName+" added object with primary key "+n),console.log(t),n}onUpdate(e,t,s,n){console.log("MODS"),console.log(e),this.updateEntry(t,e)}onDeleting(e){this.deleteEntry(e)}addEntry(e,t){this._lastKey,e!==void 0&&e>this._lastKey?this._lastKey=e:this._lastKey++;const s=g(t);return s.id=this._lastKey,this._entriesById[this._lastKey]=s,this._entries.push(s),this._updated.value++,this._lastKey}modificationsToPartialT(e){const t={},s=(n,r,l=t)=>{const h=n.indexOf(".");if(console.log(n,h),h===-1){l[n]=e[r];return}const u=n.slice(0,h),d=n.slice(h+1);l[u]===void 0&&(l[u]={}),s(d,r,l[u])};for(let n in e)s(n,n,t);return t}updateEntry(e,t){if(this._entriesById[e]===void 0)throw Error("LiveTable: There is no primary key "+e+" in "+this._tableName);E(this._entriesById[e],this.modificationsToPartialT(t)),console.log("LiveTable: updated object with primary key "+e),console.log(this._entriesById[e]),this._updated.value++}deleteEntry(e){let t=this._entries.indexOf(this._entriesById[e]);if(t===-1){console.warn("LiveTable: trying to delete non existing element with primary key "+e);return}this._entries.splice(t,1),delete this._entriesById[e],console.log("LiveTable: removed entry with primary key "+e+" from table"),this._updated.value++}}class I{constructor(e,t=!1){o(this,"_db");o(this,"_tables");o(this,"_lazy");o(this,"_ready");o(this,"_resolve");this._lazy=t,this._db=e,this._tables={},this._ready=new Promise(s=>{this._resolve=s,this._db.on("ready",this.onDbReady.bind(this))})}ready(){return this._ready}table(e){if(this._lazy)return this._tables[e]===void 0&&(this._tables[e]=new p(this._db,e)),this._tables[e];{const t=this._tables[e];if(t===void 0)throw Error("There is no table with name "+e);return t}}onDbReady(e){if(console.log("liveQueryManager onDbReady()"),this._lazy){console.log("LiveQueryManager: initialization finished (lazy)"),this._resolve.call(this);return}else{let t=[];this._db.tables.forEach(s=>{this._tables[s.name]=new p(this._db,s.name),t.push(this._tables[s.name].ready())}),Promise.all(t).then(()=>{console.log("LiveQueryManager: initialization finished (non-lazy)"),this._resolve.call(this)})}}}const z=new I(L,!0);function D(i,e,t=!1,s=void 0,n=[]){let r=b(s);function l(_,a,c){return c.on("complete",d),_}function h(_,a,c,y){y.on("complete",d)}function u(_,a,c){c.on("complete",d)}async function d(){t?r.value=await e(i,...n):r.value=e(i,...n)}return f(n,()=>d()),v(()=>{i.hook("creating",l),i.hook("updating",h),i.hook("deleting",u),d()}),m(()=>{i.hook("creating").unsubscribe(l),i.hook("updating").unsubscribe(h),i.hook("deleting").unsubscribe(u)}),r}function j(i,e,t,s=!1,n=void 0,r=[]){const l=b(n);function h(a,c,y){return y.on("complete",_),a}function u(a,c,y,w){w.on("complete",_)}function d(a,c,y){y.on("complete",_)}async function _(){s?l.value=await t(i,...r):l.value=t(i,...r)}return f(r,()=>_()),v(()=>{e.forEach(a=>{i.table(a).hook("creating",h),i.table(a).hook("updating",u),i.table(a).hook("deleting",d)}),_()}),m(()=>{e.forEach(a=>{i.table(a).hook("creating").unsubscribe(h),i.table(a).hook("updating").unsubscribe(u),i.table(a).hook("deleting").unsubscribe(d)})}),l}export{p as L,j as a,z as l,D as u};
