!function(){function t(t,e,n){var i;return(e="symbol"==typeof(i=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?i:String(i))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}System.register(["./index-legacy-oFp8G8Ab.js","./GenericEditModal-legacy-TXOAvMeS.js","./database-legacy-al1Sa8N6.js","./livequery-legacy-5AwHvNjI.js","./index-legacy-oV1auDnl.js"],(function(e,n){"use strict";var i,s,r,o,c,a,l,h,u,d,g,f,p,m,y,x,v,M,L,k,_,b,I,w,C,S,A,$,E,F,j,N;return{setters:[t=>{i=t.x,s=t.ad,r=t.e,o=t.d,c=t.o,a=t.g,l=t.b,h=t.f,u=t.E,d=t.w,g=t.a6,f=t.a7,p=t.k,m=t.n,y=t.a8,x=t.I,v=t.F,M=t.R,L=t.a5,k=t.a9,_=t.r,b=t.i,I=t.t,w=t.j,C=t.aa,S=t.ab,A=t.a4,$=t.c},t=>{E=t.G},t=>{F=t.d},t=>{j=t.l},t=>{N=t.t}],execute:function(){e({a:$t,u:O});const n=j.table("inputhistory");class R{constructor(e){t(this,"inputId",void 0),t(this,"entries",void 0),this.inputId=e,this.entries=i([]),s([n.updated()],(()=>{console.log("InputHistory updated"),this.updateHistory()})),n.ready().then((()=>{this.updateHistory()}))}updateHistory(){n.isReady().value&&(this.entries.value=n.entries().filter((t=>t.inputId===this.inputId)).map((t=>t.text)))}add(...t){R.bulkAdd(...t.map((t=>({inputId:this.inputId,text:t})))).catch((t=>{console.error(t)}))}remove(t){return F.inputhistory.where("inputId").equals(this.inputId).and((e=>e.text.toLowerCase()===t.trim().toLowerCase())).delete()}static bulkAddFromObject(t,e){let n=[];for(let i in t){const s="string"==typeof t[i]?e[t[i]]:t[i](e);"string"==typeof s?n.push({inputId:i,text:s.trim()}):Array.isArray(s)?n.push(...s.map((t=>({inputId:i,text:t.trim()})))):console.warn("WHHAATT")}return R.bulkAdd(...n)}static bulkAdd(...t){const e=t.filter((t=>""!==t.text.trim())).map((t=>({...t,text:t.text.trim()})));return e.forEach((t=>{F.inputhistory.where("inputId").equals(t.inputId).and((e=>e.text.toLowerCase()===t.text.toLowerCase())).delete()})),F.inputhistory.bulkAdd(e)}}function O(t){return new R(t)}function W(t){return Array.isArray?Array.isArray(t):"[object Array]"===J(t)}const V=1/0;function P(t){return null==t?"":function(t){if("string"==typeof t)return t;let e=t+"";return"0"==e&&1/t==-V?"-0":e}(t)}function H(t){return"string"==typeof t}function q(t){return"number"==typeof t}function K(t){return!0===t||!1===t||function(t){return z(t)&&null!==t}(t)&&"[object Boolean]"==J(t)}function z(t){return"object"==typeof t}function T(t){return null!=t}function G(t){return!t.trim().length}function J(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const D=t=>`Missing ${t} property in key`,U=t=>`Property 'weight' in key '${t}' must be a positive integer`,B=Object.prototype.hasOwnProperty;class Q{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach((t=>{let n=X(t);e+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,e+=n.weight})),this._keys.forEach((t=>{t.weight/=e}))}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function X(t){let e=null,n=null,i=null,s=1,r=null;if(H(t)||W(t))i=t,e=Y(t),n=Z(t);else{if(!B.call(t,"name"))throw new Error(D("name"));const o=t.name;if(i=o,B.call(t,"weight")&&(s=t.weight,s<=0))throw new Error(U(o));e=Y(o),n=Z(o),r=t.getFn}return{path:e,id:n,weight:s,src:i,getFn:r}}function Y(t){return W(t)?t:t.split(".")}function Z(t){return W(t)?t.join("."):t}var tt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(t,e){let n=[],i=!1;const s=(t,e,r)=>{if(T(t))if(e[r]){const o=t[e[r]];if(!T(o))return;if(r===e.length-1&&(H(o)||q(o)||K(o)))n.push(P(o));else if(W(o)){i=!0;for(let t=0,n=o.length;t<n;t+=1)s(o[t],e,r+1)}else e.length&&s(o,e,r+1)}else n.push(t)};return s(t,H(e)?e.split("."):e,0),i?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const et=/[^ ]+/g;class nt{constructor({getFn:t=tt.getFn,fieldNormWeight:e=tt.fieldNormWeight}={}){this.norm=function(t=1,e=3){const n=new Map,i=Math.pow(10,e);return{get(e){const s=e.match(et).length;if(n.has(s))return n.get(s);const r=1/Math.pow(s,.5*t),o=parseFloat(Math.round(r*i)/i);return n.set(s,o),o},clear(){n.clear()}}}(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach(((t,e)=>{this._keysMap[t.id]=e}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,H(this.docs[0])?this.docs.forEach(((t,e)=>{this._addString(t,e)})):this.docs.forEach(((t,e)=>{this._addObject(t,e)})),this.norm.clear())}add(t){const e=this.size();H(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!T(t)||G(t))return;let n={v:t,i:e,n:this.norm.get(t)};this.records.push(n)}_addObject(t,e){let n={i:e,$:{}};this.keys.forEach(((e,i)=>{let s=e.getFn?e.getFn(t):this.getFn(t,e.path);if(T(s))if(W(s)){let t=[];const e=[{nestedArrIndex:-1,value:s}];for(;e.length;){const{nestedArrIndex:n,value:i}=e.pop();if(T(i))if(H(i)&&!G(i)){let e={v:i,i:n,n:this.norm.get(i)};t.push(e)}else W(i)&&i.forEach(((t,n)=>{e.push({nestedArrIndex:n,value:t})}))}n.$[i]=t}else if(H(s)&&!G(s)){let t={v:s,n:this.norm.get(s)};n.$[i]=t}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function it(t,e,{getFn:n=tt.getFn,fieldNormWeight:i=tt.fieldNormWeight}={}){const s=new nt({getFn:n,fieldNormWeight:i});return s.setKeys(t.map(X)),s.setSources(e),s.create(),s}function st(t,{errors:e=0,currentLocation:n=0,expectedLocation:i=0,distance:s=tt.distance,ignoreLocation:r=tt.ignoreLocation}={}){const o=e/t.length;if(r)return o;const c=Math.abs(i-n);return s?o+c/s:c?1:o}const rt=32;function ot(t,e,n,{location:i=tt.location,distance:s=tt.distance,threshold:r=tt.threshold,findAllMatches:o=tt.findAllMatches,minMatchCharLength:c=tt.minMatchCharLength,includeMatches:a=tt.includeMatches,ignoreLocation:l=tt.ignoreLocation}={}){if(e.length>rt)throw new Error(`Pattern length exceeds max of ${rt}.`);const h=e.length,u=t.length,d=Math.max(0,Math.min(i,u));let g=r,f=d;const p=c>1||a,m=p?Array(u):[];let y;for(;(y=t.indexOf(e,f))>-1;){let t=st(e,{currentLocation:y,expectedLocation:d,distance:s,ignoreLocation:l});if(g=Math.min(t,g),f=y+h,p){let t=0;for(;t<h;)m[y+t]=1,t+=1}}f=-1;let x=[],v=1,M=h+u;const L=1<<h-1;for(let _=0;_<h;_+=1){let i=0,r=M;for(;i<r;){st(e,{errors:_,currentLocation:d+r,expectedLocation:d,distance:s,ignoreLocation:l})<=g?i=r:M=r,r=Math.floor((M-i)/2+i)}M=r;let c=Math.max(1,d-r+1),a=o?u:Math.min(d+r,u)+h,y=Array(a+2);y[a+1]=(1<<_)-1;for(let o=a;o>=c;o-=1){let i=o-1,r=n[t.charAt(i)];if(p&&(m[i]=+!!r),y[o]=(y[o+1]<<1|1)&r,_&&(y[o]|=(x[o+1]|x[o])<<1|1|x[o+1]),y[o]&L&&(v=st(e,{errors:_,currentLocation:i,expectedLocation:d,distance:s,ignoreLocation:l}),v<=g)){if(g=v,f=i,f<=d)break;c=Math.max(1,2*d-f)}}if(st(e,{errors:_+1,currentLocation:d,expectedLocation:d,distance:s,ignoreLocation:l})>g)break;x=y}const k={isMatch:f>=0,score:Math.max(.001,v)};if(p){const t=function(t=[],e=tt.minMatchCharLength){let n=[],i=-1,s=-1,r=0;for(let o=t.length;r<o;r+=1){let o=t[r];o&&-1===i?i=r:o||-1===i||(s=r-1,s-i+1>=e&&n.push([i,s]),i=-1)}return t[r-1]&&r-i>=e&&n.push([i,r-1]),n}(m,c);t.length?a&&(k.indices=t):k.isMatch=!1}return k}function ct(t){let e={};for(let n=0,i=t.length;n<i;n+=1){const s=t.charAt(n);e[s]=(e[s]||0)|1<<i-n-1}return e}class at{constructor(t,{location:e=tt.location,threshold:n=tt.threshold,distance:i=tt.distance,includeMatches:s=tt.includeMatches,findAllMatches:r=tt.findAllMatches,minMatchCharLength:o=tt.minMatchCharLength,isCaseSensitive:c=tt.isCaseSensitive,ignoreLocation:a=tt.ignoreLocation}={}){if(this.options={location:e,threshold:n,distance:i,includeMatches:s,findAllMatches:r,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:a},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(t,e)=>{this.chunks.push({pattern:t,alphabet:ct(t),startIndex:e})},h=this.pattern.length;if(h>rt){let t=0;const e=h%rt,n=h-e;for(;t<n;)l(this.pattern.substr(t,rt),t),t+=rt;if(e){const t=h-rt;l(this.pattern.substr(t),t)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:n}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let e={isMatch:!0,score:0};return n&&(e.indices=[[0,t.length-1]]),e}const{location:i,distance:s,threshold:r,findAllMatches:o,minMatchCharLength:c,ignoreLocation:a}=this.options;let l=[],h=0,u=!1;this.chunks.forEach((({pattern:e,alphabet:d,startIndex:g})=>{const{isMatch:f,score:p,indices:m}=ot(t,e,d,{location:i+g,distance:s,threshold:r,findAllMatches:o,minMatchCharLength:c,includeMatches:n,ignoreLocation:a});f&&(u=!0),h+=p,f&&m&&(l=[...l,...m])}));let d={isMatch:u,score:u?h/this.chunks.length:1};return u&&n&&(d.indices=l),d}}class lt{constructor(t){this.pattern=t}static isMultiMatch(t){return ht(t,this.multiRegex)}static isSingleMatch(t){return ht(t,this.singleRegex)}search(){}}function ht(t,e){const n=t.match(e);return n?n[1]:null}class ut extends lt{constructor(t,{location:e=tt.location,threshold:n=tt.threshold,distance:i=tt.distance,includeMatches:s=tt.includeMatches,findAllMatches:r=tt.findAllMatches,minMatchCharLength:o=tt.minMatchCharLength,isCaseSensitive:c=tt.isCaseSensitive,ignoreLocation:a=tt.ignoreLocation}={}){super(t),this._bitapSearch=new at(t,{location:e,threshold:n,distance:i,includeMatches:s,findAllMatches:r,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class dt extends lt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e,n=0;const i=[],s=this.pattern.length;for(;(e=t.indexOf(this.pattern,n))>-1;)n=e+s,i.push([e,n-1]);const r=!!i.length;return{isMatch:r,score:r?0:1,indices:i}}}const gt=[class extends lt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},dt,class extends lt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},class extends lt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends lt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends lt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}},class extends lt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=-1===t.indexOf(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},ut],ft=gt.length,pt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const mt=new Set([ut.type,dt.type]);class yt{constructor(t,{isCaseSensitive:e=tt.isCaseSensitive,includeMatches:n=tt.includeMatches,minMatchCharLength:i=tt.minMatchCharLength,ignoreLocation:s=tt.ignoreLocation,findAllMatches:r=tt.findAllMatches,location:o=tt.location,threshold:c=tt.threshold,distance:a=tt.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:n,minMatchCharLength:i,findAllMatches:r,ignoreLocation:s,location:o,threshold:c,distance:a},this.pattern=e?t:t.toLowerCase(),this.query=function(t,e={}){return t.split("|").map((t=>{let n=t.trim().split(pt).filter((t=>t&&!!t.trim())),i=[];for(let s=0,r=n.length;s<r;s+=1){const t=n[s];let r=!1,o=-1;for(;!r&&++o<ft;){const n=gt[o];let s=n.isMultiMatch(t);s&&(i.push(new n(s,e)),r=!0)}if(!r)for(o=-1;++o<ft;){const n=gt[o];let s=n.isSingleMatch(t);if(s){i.push(new n(s,e));break}}}return i}))}(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let s=0,r=[],o=0;for(let c=0,a=e.length;c<a;c+=1){const i=e[c];r.length=0,s=0;for(let e=0,c=i.length;e<c;e+=1){const c=i[e],{isMatch:a,indices:l,score:h}=c.search(t);if(!a){o=0,s=0,r.length=0;break}if(s+=1,o+=h,n){const t=c.constructor.type;mt.has(t)?r=[...r,...l]:r.push(l)}}if(s){let t={isMatch:!0,score:o/s};return n&&(t.indices=r),t}}return{isMatch:!1,score:1}}}const xt=[];function vt(t,e){for(let n=0,i=xt.length;n<i;n+=1){let i=xt[n];if(i.condition(t,e))return new i(t,e)}return new at(t,e)}const Mt="$and",Lt="$or",kt="$path",_t="$val",bt=t=>!(!t[Mt]&&!t[Lt]),It=t=>({[Mt]:Object.keys(t).map((e=>({[e]:t[e]})))});function wt(t,e,{auto:n=!0}={}){const i=t=>{let s=Object.keys(t);const r=(t=>!!t[kt])(t);if(!r&&s.length>1&&!bt(t))return i(It(t));if((t=>!W(t)&&z(t)&&!bt(t))(t)){const i=r?t[kt]:s[0],o=r?t[_t]:t[i];if(!H(o))throw new Error((t=>`Invalid value for key ${t}`)(i));const c={keyId:Z(i),pattern:o};return n&&(c.searcher=vt(o,e)),c}let o={children:[],operator:s[0]};return s.forEach((e=>{const n=t[e];W(n)&&n.forEach((t=>{o.children.push(i(t))}))})),o};return bt(t)||(t=It(t)),i(t)}function Ct(t,e){const n=t.matches;e.matches=[],T(n)&&n.forEach((t=>{if(!T(t.indices)||!t.indices.length)return;const{indices:n,value:i}=t;let s={indices:n,value:i};t.key&&(s.key=t.key.src),t.idx>-1&&(s.refIndex=t.idx),e.matches.push(s)}))}function St(t,e){e.score=t.score}class At{constructor(t,e={},n){this.options={...tt,...e},this.options.useExtendedSearch,this._keyStore=new Q(this.options.keys),this.setCollection(t,n)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof nt))throw new Error("Incorrect 'index' type");this._myIndex=e||it(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){T(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=(()=>!1)){const e=[];for(let n=0,i=this._docs.length;n<i;n+=1){const s=this._docs[n];t(s,n)&&(this.removeAt(n),n-=1,i-=1,e.push(s))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:n,includeScore:i,shouldSort:s,sortFn:r,ignoreFieldNorm:o}=this.options;let c=H(t)?H(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return function(t,{ignoreFieldNorm:e=tt.ignoreFieldNorm}){t.forEach((t=>{let n=1;t.matches.forEach((({key:t,norm:i,score:s})=>{const r=t?t.weight:null;n*=Math.pow(0===s&&r?Number.EPSILON:s,(r||1)*(e?1:i))})),t.score=n}))}(c,{ignoreFieldNorm:o}),s&&c.sort(r),q(e)&&e>-1&&(c=c.slice(0,e)),function(t,e,{includeMatches:n=tt.includeMatches,includeScore:i=tt.includeScore}={}){const s=[];return n&&s.push(Ct),i&&s.push(St),t.map((t=>{const{idx:n}=t,i={item:e[n],refIndex:n};return s.length&&s.forEach((e=>{e(t,i)})),i}))}(c,this._docs,{includeMatches:n,includeScore:i})}_searchStringList(t){const e=vt(t,this.options),{records:n}=this._myIndex,i=[];return n.forEach((({v:t,i:n,n:s})=>{if(!T(t))return;const{isMatch:r,score:o,indices:c}=e.searchIn(t);r&&i.push({item:t,idx:n,matches:[{score:o,value:t,norm:s,indices:c}]})})),i}_searchLogical(t){const e=wt(t,this.options),n=(t,e,i)=>{if(!t.children){const{keyId:n,searcher:s}=t,r=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(e,n),searcher:s});return r&&r.length?[{idx:i,item:e,matches:r}]:[]}const s=[];for(let r=0,o=t.children.length;r<o;r+=1){const o=t.children[r],c=n(o,e,i);if(c.length)s.push(...c);else if(t.operator===Mt)return[]}return s},i=this._myIndex.records,s={},r=[];return i.forEach((({$:t,i:i})=>{if(T(t)){let o=n(e,t,i);o.length&&(s[i]||(s[i]={idx:i,item:t,matches:[]},r.push(s[i])),o.forEach((({matches:t})=>{s[i].matches.push(...t)})))}})),r}_searchObjectList(t){const e=vt(t,this.options),{keys:n,records:i}=this._myIndex,s=[];return i.forEach((({$:t,i:i})=>{if(!T(t))return;let r=[];n.forEach(((n,i)=>{r.push(...this._findMatches({key:n,value:t[i],searcher:e}))})),r.length&&s.push({idx:i,item:t,matches:r})})),s}_findMatches({key:t,value:e,searcher:n}){if(!T(e))return[];let i=[];if(W(e))e.forEach((({v:e,i:s,n:r})=>{if(!T(e))return;const{isMatch:o,score:c,indices:a}=n.searchIn(e);o&&i.push({score:c,key:t,value:e,idx:s,norm:r,indices:a})}));else{const{v:s,n:r}=e,{isMatch:o,score:c,indices:a}=n.searchIn(s);o&&i.push({score:c,key:t,value:s,norm:r,indices:a})}return i}}function $t(t,e,n){const o=()=>{var t,i;return new At(null!=(t=N(e))?t:[],null==(i=N(n))?void 0:i.fuseOptions)},c=i(o());s((()=>{var t;return null==(t=N(n))?void 0:t.fuseOptions}),(()=>{c.value=o()}),{deep:!0}),s((()=>N(e)),(t=>{c.value.setCollection(t)}),{deep:!0});const a=r((()=>{const i=N(n);if((null==i?void 0:i.matchAllWhenSearchEmpty)&&!N(t))return N(e).map(((t,e)=>({item:t,refIndex:e})));const s=null==i?void 0:i.resultLimit;return c.value.search(N(t),s?{limit:s}:void 0)}));return{fuse:c,results:a}}At.version="6.6.2",At.createIndex=it,At.parseIndex=function(t,{getFn:e=tt.getFn,fieldNormWeight:n=tt.fieldNormWeight}={}){const{keys:i,records:s}=t,r=new nt({getFn:e,fieldNormWeight:n});return r.setKeys(i),r.setIndexRecords(s),r},At.config=tt,At.parseQuery=wt,function(...t){xt.push(...t)}(yt);e("_",o({__name:"HistoryTextarea",props:{modelValue:{},label:{},inputId:{}},emits:["update:modelValue"],setup(t,{emit:e}){const n=e,s=t,o=O(s.inputId),F=i(!1),j=i(void 0),N=i(""),R=/\n|\.|;/,W=r((()=>{var t;return(null===(t=N.value.split(R).pop())||void 0===t?void 0:t.trim())||""})),{results:V}=$t(W,o.entries,{matchAllWhenSearchEmpty:!0});function P(t){"save"===t.detail.role&&(n("update:modelValue",N.value),o.add(...N.value.split(R))),F.value=!1}function H(){N.value=s.modelValue}function q(t){N.value=N.value.slice(0,-W.value.length||void 0)+t,j.value.$el.setFocus()}return(t,e)=>(c(),a(v,null,[l(h(u),{"auto-grow":"",label:t.label,"label-placement":"floating",value:t.modelValue,onClick:e[0]||(e[0]=t=>F.value=!0)},null,8,["label","value"]),l(E,{"is-open":F.value,onWillDismiss:P,onDidPresent:e[4]||(e[4]=t=>j.value.$el.setFocus()),onWillPresent:H,"icon-save":h(L)},{default:d((()=>[l(h(u),{ref_key:"input",ref:j,"auto-grow":"",label:t.label,"label-placement":"stacked",modelValue:N.value,"onUpdate:modelValue":e[2]||(e[2]=t=>N.value=t),onKeydown:e[3]||(e[3]=g(f((t=>q(h(V)[0].item)),["prevent"]),["tab"]))},{default:d((()=>[l(h(p),{slot:"end",fill:"clear",onClick:e[1]||(e[1]=e=>{console.log(N.value,t.modelValue),N.value=t.modelValue})},{default:d((()=>[l(h(m),{slot:"icon-only",icon:h(y)},null,8,["icon"])])),_:1})])),_:1},8,["label","modelValue"]),l(h(x),{ref:"slidingList"},{default:d((()=>[(c(!0),a(v,null,M(h(V),((t,e)=>(c(),$(h(k),{key:t.item,ref_for:!0,ref:"slidingItem"},{default:d((()=>[l(h(_),{onClick:e=>q(t.item)},{default:d((()=>[l(h(b),null,{default:d((()=>[w(I(t.item),1)])),_:2},1024)])),_:2},1032,["onClick"]),l(h(C),{side:"end"},{default:d((()=>[l(h(S),{color:"danger",onClick:e=>{return n=t.item,o.remove(n);var n}},{default:d((()=>[l(h(m),{icon:h(A),slot:"end"},null,8,["icon"]),w(" Löschen ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1},512)])),_:1},8,["is-open","icon-save"])],64))}}))}}}))}();
