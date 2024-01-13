!function(){function e(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy-4Q_-oPyM.js","./GenericEditModal-legacy-82T6BOio.js","./helpers-legacy-O0yb5ERK.js","./livequery-legacy-NsQg4tMI.js","./index-legacy-AKGIjqBX.js"],(function(t,n){"use strict";var i,s,r,o,c,a,l,h,u,d,g,f,p,m,y,x,v,M,L,k,_,b,I,w,C,S,A,$,E,F,j,N;return{setters:[e=>{i=e.x,s=e.a2,r=e.e,o=e.d,c=e.o,a=e.g,l=e.b,h=e.f,u=e.E,d=e.w,g=e.W,f=e.X,p=e.k,m=e.n,y=e.Y,x=e.I,v=e.F,M=e.R,L=e.U,k=e.Z,_=e.r,b=e.i,I=e.t,w=e.j,C=e.$,S=e.a0,A=e.V,$=e.c},e=>{E=e.G},e=>{F=e.d},e=>{j=e.l},e=>{N=e.t}],execute:function(){t({a:$e,u:O});const n=j.table("inputhistory");class R{constructor(t){e(this,"inputId",void 0),e(this,"entries",void 0),this.inputId=t,this.entries=i([]),s([n.updated()],(()=>{console.log("InputHistory updated"),this.updateHistory()})),n.ready().then((()=>{this.updateHistory()}))}updateHistory(){n.isReady().value&&(this.entries.value=n.entries().filter((e=>e.inputId===this.inputId)).map((e=>e.text)))}add(...e){R.bulkAdd(...e.map((e=>({inputId:this.inputId,text:e})))).catch((e=>{console.error(e)}))}remove(e){return F.inputhistory.where("inputId").equals(this.inputId).and((t=>t.text.toLowerCase()===e.trim().toLowerCase())).delete()}static bulkAddFromObject(e,t){let n=[];for(let i in e){const s="string"==typeof e[i]?t[e[i]]:e[i](t);"string"==typeof s?n.push({inputId:i,text:s.trim()}):Array.isArray(s)?n.push(...s.map((e=>({inputId:i,text:e.trim()})))):console.warn("WHHAATT")}return R.bulkAdd(...n)}static bulkAdd(...e){const t=e.filter((e=>""!==e.text.trim())).map((e=>({...e,text:e.text.trim()})));return t.forEach((e=>{F.inputhistory.where("inputId").equals(e.inputId).and((t=>t.text.toLowerCase()===e.text.toLowerCase())).delete()})),F.inputhistory.bulkAdd(t)}}function O(e){return new R(e)}function W(e){return Array.isArray?Array.isArray(e):"[object Array]"===U(e)}const V=1/0;function P(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-V?"-0":t}(e)}function H(e){return"string"==typeof e}function K(e){return"number"==typeof e}function q(e){return!0===e||!1===e||function(e){return z(e)&&null!==e}(e)&&"[object Boolean]"==U(e)}function z(e){return"object"==typeof e}function T(e){return null!=e}function J(e){return!e.trim().length}function U(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const D=e=>`Missing ${e} property in key`,G=e=>`Property 'weight' in key '${e}' must be a positive integer`,B=Object.prototype.hasOwnProperty;class Q{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let n=X(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function X(e){let t=null,n=null,i=null,s=1,r=null;if(H(e)||W(e))i=e,t=Y(e),n=Z(e);else{if(!B.call(e,"name"))throw new Error(D("name"));const o=e.name;if(i=o,B.call(e,"weight")&&(s=e.weight,s<=0))throw new Error(G(o));t=Y(o),n=Z(o),r=e.getFn}return{path:t,id:n,weight:s,src:i,getFn:r}}function Y(e){return W(e)?e:e.split(".")}function Z(e){return W(e)?e.join("."):e}var ee={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(e,t){let n=[],i=!1;const s=(e,t,r)=>{if(T(e))if(t[r]){const o=e[t[r]];if(!T(o))return;if(r===t.length-1&&(H(o)||K(o)||q(o)))n.push(P(o));else if(W(o)){i=!0;for(let e=0,n=o.length;e<n;e+=1)s(o[e],t,r+1)}else t.length&&s(o,t,r+1)}else n.push(e)};return s(e,H(t)?t.split("."):t,0),i?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const te=/[^ ]+/g;class ne{constructor({getFn:e=ee.getFn,fieldNormWeight:t=ee.fieldNormWeight}={}){this.norm=function(e=1,t=3){const n=new Map,i=Math.pow(10,t);return{get(t){const s=t.match(te).length;if(n.has(s))return n.get(s);const r=1/Math.pow(s,.5*e),o=parseFloat(Math.round(r*i)/i);return n.set(s,o),o},clear(){n.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,H(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();H(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!T(e)||J(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach(((t,i)=>{let s=t.getFn?t.getFn(e):this.getFn(e,t.path);if(T(s))if(W(s)){let e=[];const t=[{nestedArrIndex:-1,value:s}];for(;t.length;){const{nestedArrIndex:n,value:i}=t.pop();if(T(i))if(H(i)&&!J(i)){let t={v:i,i:n,n:this.norm.get(i)};e.push(t)}else W(i)&&i.forEach(((e,n)=>{t.push({nestedArrIndex:n,value:e})}))}n.$[i]=e}else if(H(s)&&!J(s)){let e={v:s,n:this.norm.get(s)};n.$[i]=e}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function ie(e,t,{getFn:n=ee.getFn,fieldNormWeight:i=ee.fieldNormWeight}={}){const s=new ne({getFn:n,fieldNormWeight:i});return s.setKeys(e.map(X)),s.setSources(t),s.create(),s}function se(e,{errors:t=0,currentLocation:n=0,expectedLocation:i=0,distance:s=ee.distance,ignoreLocation:r=ee.ignoreLocation}={}){const o=t/e.length;if(r)return o;const c=Math.abs(i-n);return s?o+c/s:c?1:o}const re=32;function oe(e,t,n,{location:i=ee.location,distance:s=ee.distance,threshold:r=ee.threshold,findAllMatches:o=ee.findAllMatches,minMatchCharLength:c=ee.minMatchCharLength,includeMatches:a=ee.includeMatches,ignoreLocation:l=ee.ignoreLocation}={}){if(t.length>re)throw new Error(`Pattern length exceeds max of ${re}.`);const h=t.length,u=e.length,d=Math.max(0,Math.min(i,u));let g=r,f=d;const p=c>1||a,m=p?Array(u):[];let y;for(;(y=e.indexOf(t,f))>-1;){let e=se(t,{currentLocation:y,expectedLocation:d,distance:s,ignoreLocation:l});if(g=Math.min(e,g),f=y+h,p){let e=0;for(;e<h;)m[y+e]=1,e+=1}}f=-1;let x=[],v=1,M=h+u;const L=1<<h-1;for(let _=0;_<h;_+=1){let i=0,r=M;for(;i<r;){se(t,{errors:_,currentLocation:d+r,expectedLocation:d,distance:s,ignoreLocation:l})<=g?i=r:M=r,r=Math.floor((M-i)/2+i)}M=r;let c=Math.max(1,d-r+1),a=o?u:Math.min(d+r,u)+h,y=Array(a+2);y[a+1]=(1<<_)-1;for(let o=a;o>=c;o-=1){let i=o-1,r=n[e.charAt(i)];if(p&&(m[i]=+!!r),y[o]=(y[o+1]<<1|1)&r,_&&(y[o]|=(x[o+1]|x[o])<<1|1|x[o+1]),y[o]&L&&(v=se(t,{errors:_,currentLocation:i,expectedLocation:d,distance:s,ignoreLocation:l}),v<=g)){if(g=v,f=i,f<=d)break;c=Math.max(1,2*d-f)}}if(se(t,{errors:_+1,currentLocation:d,expectedLocation:d,distance:s,ignoreLocation:l})>g)break;x=y}const k={isMatch:f>=0,score:Math.max(.001,v)};if(p){const e=function(e=[],t=ee.minMatchCharLength){let n=[],i=-1,s=-1,r=0;for(let o=e.length;r<o;r+=1){let o=e[r];o&&-1===i?i=r:o||-1===i||(s=r-1,s-i+1>=t&&n.push([i,s]),i=-1)}return e[r-1]&&r-i>=t&&n.push([i,r-1]),n}(m,c);e.length?a&&(k.indices=e):k.isMatch=!1}return k}function ce(e){let t={};for(let n=0,i=e.length;n<i;n+=1){const s=e.charAt(n);t[s]=(t[s]||0)|1<<i-n-1}return t}class ae{constructor(e,{location:t=ee.location,threshold:n=ee.threshold,distance:i=ee.distance,includeMatches:s=ee.includeMatches,findAllMatches:r=ee.findAllMatches,minMatchCharLength:o=ee.minMatchCharLength,isCaseSensitive:c=ee.isCaseSensitive,ignoreLocation:a=ee.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:i,includeMatches:s,findAllMatches:r,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:a},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(e,t)=>{this.chunks.push({pattern:e,alphabet:ce(e),startIndex:t})},h=this.pattern.length;if(h>re){let e=0;const t=h%re,n=h-t;for(;e<n;)l(this.pattern.substr(e,re),e),e+=re;if(t){const e=h-re;l(this.pattern.substr(e),e)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:i,distance:s,threshold:r,findAllMatches:o,minMatchCharLength:c,ignoreLocation:a}=this.options;let l=[],h=0,u=!1;this.chunks.forEach((({pattern:t,alphabet:d,startIndex:g})=>{const{isMatch:f,score:p,indices:m}=oe(e,t,d,{location:i+g,distance:s,threshold:r,findAllMatches:o,minMatchCharLength:c,includeMatches:n,ignoreLocation:a});f&&(u=!0),h+=p,f&&m&&(l=[...l,...m])}));let d={isMatch:u,score:u?h/this.chunks.length:1};return u&&n&&(d.indices=l),d}}class le{constructor(e){this.pattern=e}static isMultiMatch(e){return he(e,this.multiRegex)}static isSingleMatch(e){return he(e,this.singleRegex)}search(){}}function he(e,t){const n=e.match(t);return n?n[1]:null}class ue extends le{constructor(e,{location:t=ee.location,threshold:n=ee.threshold,distance:i=ee.distance,includeMatches:s=ee.includeMatches,findAllMatches:r=ee.findAllMatches,minMatchCharLength:o=ee.minMatchCharLength,isCaseSensitive:c=ee.isCaseSensitive,ignoreLocation:a=ee.ignoreLocation}={}){super(e),this._bitapSearch=new ae(e,{location:t,threshold:n,distance:i,includeMatches:s,findAllMatches:r,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class de extends le{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0;const i=[],s=this.pattern.length;for(;(t=e.indexOf(this.pattern,n))>-1;)n=t+s,i.push([t,n-1]);const r=!!i.length;return{isMatch:r,score:r?0:1,indices:i}}}const ge=[class extends le{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},de,class extends le{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends le{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends le{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends le{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends le{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},ue],fe=ge.length,pe=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const me=new Set([ue.type,de.type]);class ye{constructor(e,{isCaseSensitive:t=ee.isCaseSensitive,includeMatches:n=ee.includeMatches,minMatchCharLength:i=ee.minMatchCharLength,ignoreLocation:s=ee.ignoreLocation,findAllMatches:r=ee.findAllMatches,location:o=ee.location,threshold:c=ee.threshold,distance:a=ee.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:i,findAllMatches:r,ignoreLocation:s,location:o,threshold:c,distance:a},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map((e=>{let n=e.trim().split(pe).filter((e=>e&&!!e.trim())),i=[];for(let s=0,r=n.length;s<r;s+=1){const e=n[s];let r=!1,o=-1;for(;!r&&++o<fe;){const n=ge[o];let s=n.isMultiMatch(e);s&&(i.push(new n(s,t)),r=!0)}if(!r)for(o=-1;++o<fe;){const n=ge[o];let s=n.isSingleMatch(e);if(s){i.push(new n(s,t));break}}}return i}))}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let s=0,r=[],o=0;for(let c=0,a=t.length;c<a;c+=1){const i=t[c];r.length=0,s=0;for(let t=0,c=i.length;t<c;t+=1){const c=i[t],{isMatch:a,indices:l,score:h}=c.search(e);if(!a){o=0,s=0,r.length=0;break}if(s+=1,o+=h,n){const e=c.constructor.type;me.has(e)?r=[...r,...l]:r.push(l)}}if(s){let e={isMatch:!0,score:o/s};return n&&(e.indices=r),e}}return{isMatch:!1,score:1}}}const xe=[];function ve(e,t){for(let n=0,i=xe.length;n<i;n+=1){let i=xe[n];if(i.condition(e,t))return new i(e,t)}return new ae(e,t)}const Me="$and",Le="$or",ke="$path",_e="$val",be=e=>!(!e[Me]&&!e[Le]),Ie=e=>({[Me]:Object.keys(e).map((t=>({[t]:e[t]})))});function we(e,t,{auto:n=!0}={}){const i=e=>{let s=Object.keys(e);const r=(e=>!!e[ke])(e);if(!r&&s.length>1&&!be(e))return i(Ie(e));if((e=>!W(e)&&z(e)&&!be(e))(e)){const i=r?e[ke]:s[0],o=r?e[_e]:e[i];if(!H(o))throw new Error((e=>`Invalid value for key ${e}`)(i));const c={keyId:Z(i),pattern:o};return n&&(c.searcher=ve(o,t)),c}let o={children:[],operator:s[0]};return s.forEach((t=>{const n=e[t];W(n)&&n.forEach((e=>{o.children.push(i(e))}))})),o};return be(e)||(e=Ie(e)),i(e)}function Ce(e,t){const n=e.matches;t.matches=[],T(n)&&n.forEach((e=>{if(!T(e.indices)||!e.indices.length)return;const{indices:n,value:i}=e;let s={indices:n,value:i};e.key&&(s.key=e.key.src),e.idx>-1&&(s.refIndex=e.idx),t.matches.push(s)}))}function Se(e,t){t.score=e.score}class Ae{constructor(e,t={},n){this.options={...ee,...t},this.options.useExtendedSearch,this._keyStore=new Q(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof ne))throw new Error("Incorrect 'index' type");this._myIndex=t||ie(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){T(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,i=this._docs.length;n<i;n+=1){const s=this._docs[n];e(s,n)&&(this.removeAt(n),n-=1,i-=1,t.push(s))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:i,shouldSort:s,sortFn:r,ignoreFieldNorm:o}=this.options;let c=H(e)?H(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=ee.ignoreFieldNorm}){e.forEach((e=>{let n=1;e.matches.forEach((({key:e,norm:i,score:s})=>{const r=e?e.weight:null;n*=Math.pow(0===s&&r?Number.EPSILON:s,(r||1)*(t?1:i))})),e.score=n}))}(c,{ignoreFieldNorm:o}),s&&c.sort(r),K(t)&&t>-1&&(c=c.slice(0,t)),function(e,t,{includeMatches:n=ee.includeMatches,includeScore:i=ee.includeScore}={}){const s=[];return n&&s.push(Ce),i&&s.push(Se),e.map((e=>{const{idx:n}=e,i={item:t[n],refIndex:n};return s.length&&s.forEach((t=>{t(e,i)})),i}))}(c,this._docs,{includeMatches:n,includeScore:i})}_searchStringList(e){const t=ve(e,this.options),{records:n}=this._myIndex,i=[];return n.forEach((({v:e,i:n,n:s})=>{if(!T(e))return;const{isMatch:r,score:o,indices:c}=t.searchIn(e);r&&i.push({item:e,idx:n,matches:[{score:o,value:e,norm:s,indices:c}]})})),i}_searchLogical(e){const t=we(e,this.options),n=(e,t,i)=>{if(!e.children){const{keyId:n,searcher:s}=e,r=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:s});return r&&r.length?[{idx:i,item:t,matches:r}]:[]}const s=[];for(let r=0,o=e.children.length;r<o;r+=1){const o=e.children[r],c=n(o,t,i);if(c.length)s.push(...c);else if(e.operator===Me)return[]}return s},i=this._myIndex.records,s={},r=[];return i.forEach((({$:e,i:i})=>{if(T(e)){let o=n(t,e,i);o.length&&(s[i]||(s[i]={idx:i,item:e,matches:[]},r.push(s[i])),o.forEach((({matches:e})=>{s[i].matches.push(...e)})))}})),r}_searchObjectList(e){const t=ve(e,this.options),{keys:n,records:i}=this._myIndex,s=[];return i.forEach((({$:e,i:i})=>{if(!T(e))return;let r=[];n.forEach(((n,i)=>{r.push(...this._findMatches({key:n,value:e[i],searcher:t}))})),r.length&&s.push({idx:i,item:e,matches:r})})),s}_findMatches({key:e,value:t,searcher:n}){if(!T(t))return[];let i=[];if(W(t))t.forEach((({v:t,i:s,n:r})=>{if(!T(t))return;const{isMatch:o,score:c,indices:a}=n.searchIn(t);o&&i.push({score:c,key:e,value:t,idx:s,norm:r,indices:a})}));else{const{v:s,n:r}=t,{isMatch:o,score:c,indices:a}=n.searchIn(s);o&&i.push({score:c,key:e,value:s,norm:r,indices:a})}return i}}function $e(e,t,n){const o=()=>{var e,i;return new Ae(null!=(e=N(t))?e:[],null==(i=N(n))?void 0:i.fuseOptions)},c=i(o());s((()=>{var e;return null==(e=N(n))?void 0:e.fuseOptions}),(()=>{c.value=o()}),{deep:!0}),s((()=>N(t)),(e=>{c.value.setCollection(e)}),{deep:!0});const a=r((()=>{const i=N(n);if((null==i?void 0:i.matchAllWhenSearchEmpty)&&!N(e))return N(t).map(((e,t)=>({item:e,refIndex:t})));const s=null==i?void 0:i.resultLimit;return c.value.search(N(e),s?{limit:s}:void 0)}));return{fuse:c,results:a}}Ae.version="6.6.2",Ae.createIndex=ie,Ae.parseIndex=function(e,{getFn:t=ee.getFn,fieldNormWeight:n=ee.fieldNormWeight}={}){const{keys:i,records:s}=e,r=new ne({getFn:t,fieldNormWeight:n});return r.setKeys(i),r.setIndexRecords(s),r},Ae.config=ee,Ae.parseQuery=we,function(...e){xe.push(...e)}(ye);t("_",o({__name:"HistoryTextarea",props:{modelValue:{},label:{},inputId:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=t,s=e,o=O(s.inputId),F=i(!1),j=i(void 0),N=i(""),R=/\n|\.|;/,W=r((()=>{var e;return(null===(e=N.value.split(R).pop())||void 0===e?void 0:e.trim())||""})),{results:V}=$e(W,o.entries,{matchAllWhenSearchEmpty:!0});function P(e){"save"===e.detail.role&&(n("update:modelValue",N.value),o.add(...N.value.split(R))),F.value=!1}function H(){N.value=s.modelValue}function K(e){N.value=N.value.slice(0,-W.value.length||void 0)+e,j.value.$el.setFocus()}return(e,t)=>(c(),a(v,null,[l(h(u),{"auto-grow":"",label:e.label,"label-placement":"floating",value:e.modelValue,onClick:t[0]||(t[0]=e=>F.value=!0)},null,8,["label","value"]),l(E,{"is-open":F.value,onWillDismiss:P,onDidPresent:t[4]||(t[4]=e=>j.value.$el.setFocus()),onWillPresent:H,"icon-save":h(L)},{default:d((()=>[l(h(u),{ref_key:"input",ref:j,"auto-grow":"",label:e.label,"label-placement":"stacked",modelValue:N.value,"onUpdate:modelValue":t[2]||(t[2]=e=>N.value=e),onKeydown:t[3]||(t[3]=g(f((e=>K(h(V)[0].item)),["prevent"]),["tab"]))},{default:d((()=>[l(h(p),{slot:"end",fill:"clear",onClick:t[1]||(t[1]=t=>{console.log(N.value,e.modelValue),N.value=e.modelValue})},{default:d((()=>[l(h(m),{slot:"icon-only",icon:h(y)},null,8,["icon"])])),_:1})])),_:1},8,["label","modelValue"]),l(h(x),{ref:"slidingList"},{default:d((()=>[(c(!0),a(v,null,M(h(V),((e,t)=>(c(),$(h(k),{key:e.item,ref_for:!0,ref:"slidingItem"},{default:d((()=>[l(h(_),{onClick:t=>K(e.item)},{default:d((()=>[l(h(b),null,{default:d((()=>[w(I(e.item),1)])),_:2},1024)])),_:2},1032,["onClick"]),l(h(C),{side:"end"},{default:d((()=>[l(h(S),{color:"danger",onClick:t=>{return n=e.item,o.remove(n);var n}},{default:d((()=>[l(h(m),{icon:h(A),slot:"end"},null,8,["icon"]),w(" Löschen ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1},512)])),_:1},8,["is-open","icon-save"])],64))}}))}}}))}();
