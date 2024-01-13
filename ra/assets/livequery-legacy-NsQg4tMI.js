!function(){function e(e,t,i){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:String(s))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}System.register(["./helpers-legacy-O0yb5ERK.js","./index-legacy-4Q_-oPyM.js"],(function(t,i){"use strict";var s,r,n,a;return{setters:[e=>{s=e.d,r=e.m},e=>{n=e.a1,a=e.x}],execute:function(){class i{constructor(t,i,s="id"){e(this,"_db",void 0),e(this,"_tableName",void 0),e(this,"_primKey",void 0),e(this,"_table",void 0),e(this,"_entries",void 0),e(this,"_entriesById",void 0),e(this,"_lastKey",void 0),e(this,"_ready",void 0),e(this,"_isReady",void 0),e(this,"_updated",void 0),this._db=t,this._tableName=i,this._primKey=s,this._table=this._db.table(this._tableName),console.log(this._table),this._entries=n([]),this._entriesById=n({}),this._updated=a(0),this._isReady=a(!1),this._lastKey=0,this._ready=this._table.each(((e,t)=>{this.addEntry(t.primaryKey,e)})).then((()=>(this._table.hook("creating",this.onCreating.bind(this)),this._table.hook("updating",this.onUpdate.bind(this)),this._table.hook("deleting",this.onDeleting.bind(this)),this))),this._ready.then((()=>{console.log("Live table "+i+" intialized."),this._isReady.value=!0}))}ready(){return this._ready}isReady(){return this._isReady}updated(){return this._updated}entries(){return this._entries}get(e){return this._entriesById[e]}getAsPromise(e){return this.ready().then((t=>t.get(e)))}getAsRef(e){const t=a(void 0);return this.getAsPromise(e).then((e=>{t.value=e})),t}delete(e){return this.ready().then((()=>this._table.where(this._primKey).equals(e).delete()))}db(){return this._db}onCreating(e,t,i){let s=this.addEntry(e,t);return console.log("LiveTable: "+this._tableName+" added object with primary key "+s),console.log(t),s}onUpdate(e,t,i,s){console.log("MODS"),console.log(e),this.updateEntry(t,e)}onDeleting(e){this.deleteEntry(e)}addEntry(e,t){this._lastKey,void 0!==e&&e>this._lastKey?this._lastKey=e:this._lastKey++;const i=n(t);return i.id=this._lastKey,this._entriesById[this._lastKey]=i,this._entries.push(i),this._updated.value++,this._lastKey}modificationsToPartialT(e){const t={},i=(s,r,n=t)=>{const a=s.indexOf(".");if(console.log(s,a),-1===a)return void(n[s]=e[r]);const o=s.slice(0,a),h=s.slice(a+1);void 0===n[o]&&(n[o]={}),i(h,r,n[o])};for(let s in e)i(s,s,t);return t}updateEntry(e,t){if(void 0===this._entriesById[e])throw Error("LiveTable: There is no primary key "+e+" in "+this._tableName);r(this._entriesById[e],this.modificationsToPartialT(t)),console.log("LiveTable: updated object with primary key "+e),console.log(this._entriesById[e]),this._updated.value++}deleteEntry(e){let t=this._entries.indexOf(this._entriesById[e]);-1!==t?(this._entries.splice(t,1),delete this._entriesById[e],console.log("LiveTable: removed entry with primary key "+e+" from table"),this._updated.value++):console.warn("LiveTable: trying to delete non existing element with primary key "+e)}}t("L",i);t("l",new class{constructor(t,i=!1){e(this,"_db",void 0),e(this,"_tables",void 0),e(this,"_lazy",void 0),e(this,"_ready",void 0),e(this,"_resolve",void 0),this._lazy=i,this._db=t,this._tables={},this._ready=new Promise((e=>{this._resolve=e,this._db.on("ready",this.onDbReady.bind(this))}))}ready(){return this._ready}table(e){if(this._lazy)return void 0===this._tables[e]&&(this._tables[e]=new i(this._db,e)),this._tables[e];{const t=this._tables[e];if(void 0===t)throw Error("There is no table with name "+e);return t}}onDbReady(e){if(console.log("liveQueryManager onDbReady()"),this._lazy)return console.log("LiveQueryManager: initialization finished (lazy)"),void this._resolve.call(this);{let e=[];this._db.tables.forEach((t=>{this._tables[t.name]=new i(this._db,t.name),e.push(this._tables[t.name].ready())})),Promise.all(e).then((()=>{console.log("LiveQueryManager: initialization finished (non-lazy)"),this._resolve.call(this)}))}}}(s,!0))}}}))}();
