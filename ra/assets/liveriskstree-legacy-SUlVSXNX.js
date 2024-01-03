!function(){function e(e,t,i){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:String(s))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}System.register(["./helpers-legacy-vClYv2vc.js","./livequery-legacy-QwkGh-nt.js","./index-legacy-vPsYnNYj.js"],(function(t,i){"use strict";var s,r,o,a;return{setters:[e=>{s=e.d,r=e.R},e=>{o=e.L},e=>{a=e.W}],execute:function(){t("l",a(new class extends o{constructor(t){super(t,"risks"),e(this,"categories",void 0),e(this,"categoriesById",void 0),e(this,"factors",void 0),e(this,"factorsById",void 0),e(this,"risks",void 0),e(this,"risksById",void 0),e(this,"_categoriesAndFactorsReady",void 0),e(this,"_entriesReady",void 0),e(this,"_treeReady",void 0),this.categories=a([]),this.categoriesById=a({}),this.factors=a([]),this.factorsById=a({}),this._entriesReady=[],this._categoriesAndFactorsReady=super.ready().then((()=>this.initCategoriesAndFactors())),this._treeReady=super.ready().then((()=>Promise.all(this._entriesReady))).then((()=>(console.log("LiveRiskTree: initialized"),this)))}initCategoriesAndFactors(){return this.db().categories.each((e=>{const t=e,i=a(t);this.categories.push(i),this.categoriesById[t.id]=i})).then((()=>this.db().factors.each((e=>{const t=e,i=a(t);this.factors.push(i),this.factorsById[t.id]=i,t.setup((e=>this.categoriesById[e]))})))).then((()=>{console.log("Categories and factors set up")}))}ready(){return this._treeReady}addEntry(e,t){const i=new r(t.descr,t.sector,t.factorId);let s=this._categoriesAndFactorsReady.then((()=>{i.setup((e=>this.factorsById[e]),(e=>this.categoriesById[e]))}));return this._entriesReady.push(s),super.addEntry(e,i)}deleteEntry(e){var t;const i=this._entriesById[e];if(void 0===i)throw Error("LiveRiskTree: There is no risk with id "+e+" to delete");const s=this.factorsById[i.factorId];if(void 0===s)throw Error("LiveRiskTree: There is no factor with id "+i.factorId);const r=null===(t=s.risks)||void 0===t?void 0:t.indexOf(i);var o;-1===r||void 0===r?console.warn("LiveRisksTree: The risk with id "+e+" is not listed in factor '"+s.descr+"' but this factor is parent"):null===(o=s.risks)||void 0===o||o.splice(r,1);super.delete(e)}}(s)))}}}))}();