var c=Object.defineProperty;var h=(i,s,r)=>s in i?c(i,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[s]=r;var t=(i,s,r)=>(h(i,typeof s!="symbol"?s+"":s,r),r);import"./database-EV4tUyzx.js";import{bh as o}from"../../vendor-fe-4Mo55.js";class f{constructor(){t(this,"categories");t(this,"risksById");this.categories=[],this.risksById={}}clear(){this.categories.forEach(s=>{var r;(r=s.factors)==null||r.forEach(e=>{e.risks&&(e.risks.length=0)})});for(const s in this.risksById)delete this.risksById[s]}}o(new f);class u{constructor(s,r,e,a){t(this,"id");t(this,"factorId");t(this,"sector");t(this,"descr");t(this,"factor");this.descr=s,this.sector=r,this.factorId=e,a!==void 0&&(this.id=a)}setup(s,r){if(this.factor!==void 0)return this;if(this.factor=s(this.factorId),this.factor===void 0)throw Error("There is no factor with ID ".concat(this.factorId," in the live tables. Maybe call setupLiveTable() first?"));return this.factor.setup(r),this.factor.risks?this.factor.risks.push(this):console.warn("AAAARGH"),this}}class g{constructor(){t(this,"id");t(this,"categoryId");t(this,"descr");t(this,"category");t(this,"risks")}setup(s){if(this.risks===void 0){if(this.risks=o([]),this.category=s(this.categoryId),this.category===void 0)throw Error("setupLiveTable() need to be called before setting up factor object. Or category does not exit in database.");this.category.setup(),this.category.factors&&this.category.factors.push(this)}}}class y{constructor(){t(this,"id");t(this,"descr");t(this,"factors")}setup(){this.factors===void 0&&(this.factors=o([]))}}export{y as C,g as F,u as R};
