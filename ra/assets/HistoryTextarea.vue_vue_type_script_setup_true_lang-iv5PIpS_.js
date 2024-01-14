var Se=Object.defineProperty;var be=(s,e,t)=>e in s?Se(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var z=(s,e,t)=>(be(s,typeof e!="symbol"?e+"":e,t),t);import{x as T,a2 as Q,e as ge,d as Le,o as G,g as ie,b as _,f as y,E as oe,w as S,W as ke,X as Re,k as $e,n as ce,Y as Ce,I as Oe,F as ae,R as Ne,U as Fe,Z as Te,r as Pe,i as Ve,t as je,j as le,$ as We,a0 as He,V as De,c as Ke}from"./index-Mp0SBjDu.js";import{G as Be}from"./GenericEditModal-wb1PNcGR.js";import{d as Y}from"./helpers-NsTiBvop.js";import{l as ze}from"./livequery-bNlwf3Pc.js";import{t as R}from"./index-EYYlQ--t.js";const j=ze.table("inputhistory");class H{constructor(e){z(this,"inputId");z(this,"entries");this.inputId=e,this.entries=T([]),Q([j.updated()],()=>{console.log("InputHistory updated"),this.updateHistory()}),j.ready().then(()=>{this.updateHistory()})}updateHistory(){j.isReady().value&&(this.entries.value=j.entries().filter(e=>e.inputId===this.inputId).map(e=>e.text))}add(...e){H.bulkAdd(...e.map(t=>({inputId:this.inputId,text:t}))).catch(t=>{console.error(t)})}remove(e){return Y.inputhistory.where("inputId").equals(this.inputId).and(t=>t.text.toLowerCase()===e.trim().toLowerCase()).delete()}static bulkAddFromObject(e,t){let n=[];for(let r in e){const i=typeof e[r]=="string"?t[e[r]]:e[r](t);typeof i=="string"?n.push({inputId:r,text:i.trim()}):Array.isArray(i)?n.push(...i.map(o=>({inputId:r,text:o.trim()}))):console.warn("WHHAATT")}return H.bulkAdd(...n)}static bulkAdd(...e){const t=e.filter(n=>n.text.trim()!=="").map(n=>({...n,text:n.text.trim()}));return t.forEach(n=>{Y.inputhistory.where("inputId").equals(n.inputId).and(r=>r.text.toLowerCase()===n.text.toLowerCase()).delete()}),Y.inputhistory.bulkAdd(t)}}function Ge(s){return new H(s)}function b(s){return Array.isArray?Array.isArray(s):Ie(s)==="[object Array]"}const Ye=1/0;function Ue(s){if(typeof s=="string")return s;let e=s+"";return e=="0"&&1/s==-Ye?"-0":e}function Qe(s){return s==null?"":Ue(s)}function A(s){return typeof s=="string"}function me(s){return typeof s=="number"}function Xe(s){return s===!0||s===!1||Je(s)&&Ie(s)=="[object Boolean]"}function Me(s){return typeof s=="object"}function Je(s){return Me(s)&&s!==null}function x(s){return s!=null}function U(s){return!s.trim().length}function Ie(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const Ze="Incorrect 'index' type",qe=s=>"Invalid value for key ".concat(s),et=s=>"Pattern length exceeds max of ".concat(s,"."),tt=s=>"Missing ".concat(s," property in key"),st=s=>"Property 'weight' in key '".concat(s,"' must be a positive integer"),he=Object.prototype.hasOwnProperty;class nt{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{let r=ye(n);t+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ye(s){let e=null,t=null,n=null,r=1,i=null;if(A(s)||b(s))n=s,e=ue(s),t=X(s);else{if(!he.call(s,"name"))throw new Error(tt("name"));const o=s.name;if(n=o,he.call(s,"weight")&&(r=s.weight,r<=0))throw new Error(st(o));e=ue(o),t=X(o),i=s.getFn}return{path:e,id:t,weight:r,src:n,getFn:i}}function ue(s){return b(s)?s:s.split(".")}function X(s){return b(s)?s.join("."):s}function rt(s,e){let t=[],n=!1;const r=(i,o,c)=>{if(x(i))if(!o[c])t.push(i);else{let a=o[c];const l=i[a];if(!x(l))return;if(c===o.length-1&&(A(l)||me(l)||Xe(l)))t.push(Qe(l));else if(b(l)){n=!0;for(let h=0,d=l.length;h<d;h+=1)r(l[h],o,c+1)}else o.length&&r(l,o,c+1)}};return r(s,A(e)?e.split("."):e,0),n?t:t[0]}const it={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ot={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,e)=>s.score===e.score?s.idx<e.idx?-1:1:s.score<e.score?-1:1},ct={location:0,threshold:.6,distance:100},at={useExtendedSearch:!1,getFn:rt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...ot,...it,...ct,...at};const lt=/[^ ]+/g;function ht(s=1,e=3){const t=new Map,n=Math.pow(10,e);return{get(r){const i=r.match(lt).length;if(t.has(i))return t.get(i);const o=1/Math.pow(i,.5*s),c=parseFloat(Math.round(o*n)/n);return t.set(i,c),c},clear(){t.clear()}}}class se{constructor({getFn:e=u.getFn,fieldNormWeight:t=u.fieldNormWeight}={}){this.norm=ht(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,A(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();A(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!x(e)||U(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach((r,i)=>{let o=r.getFn?r.getFn(e):this.getFn(e,r.path);if(x(o)){if(b(o)){let c=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:l,value:h}=a.pop();if(x(h))if(A(h)&&!U(h)){let d={v:h,i:l,n:this.norm.get(h)};c.push(d)}else b(h)&&h.forEach((d,f)=>{a.push({nestedArrIndex:f,value:d})})}n.$[i]=c}else if(A(o)&&!U(o)){let c={v:o,n:this.norm.get(o)};n.$[i]=c}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function xe(s,e,{getFn:t=u.getFn,fieldNormWeight:n=u.fieldNormWeight}={}){const r=new se({getFn:t,fieldNormWeight:n});return r.setKeys(s.map(ye)),r.setSources(e),r.create(),r}function ut(s,{getFn:e=u.getFn,fieldNormWeight:t=u.fieldNormWeight}={}){const{keys:n,records:r}=s,i=new se({getFn:e,fieldNormWeight:t});return i.setKeys(n),i.setIndexRecords(r),i}function W(s,{errors:e=0,currentLocation:t=0,expectedLocation:n=0,distance:r=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const o=e/s.length;if(i)return o;const c=Math.abs(n-t);return r?o+c/r:c?1:o}function dt(s=[],e=u.minMatchCharLength){let t=[],n=-1,r=-1,i=0;for(let o=s.length;i<o;i+=1){let c=s[i];c&&n===-1?n=i:!c&&n!==-1&&(r=i-1,r-n+1>=e&&t.push([n,r]),n=-1)}return s[i-1]&&i-n>=e&&t.push([n,i-1]),t}const O=32;function ft(s,e,t,{location:n=u.location,distance:r=u.distance,threshold:i=u.threshold,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:l=u.ignoreLocation}={}){if(e.length>O)throw new Error(et(O));const h=e.length,d=s.length,f=Math.max(0,Math.min(n,d));let g=i,m=f;const p=c>1||a,I=p?Array(d):[];let M;for(;(M=s.indexOf(e,m))>-1;){let E=W(e,{currentLocation:M,expectedLocation:f,distance:r,ignoreLocation:l});if(g=Math.min(E,g),m=M+h,p){let L=0;for(;L<h;)I[M+L]=1,L+=1}}m=-1;let C=[],w=1,P=h+d;const we=1<<h-1;for(let E=0;E<h;E+=1){let L=0,k=P;for(;L<k;)W(e,{errors:E,currentLocation:f+k,expectedLocation:f,distance:r,ignoreLocation:l})<=g?L=k:P=k,k=Math.floor((P-L)/2+L);P=k;let ne=Math.max(1,f-k+1),B=o?d:Math.min(f+k,d)+h,N=Array(B+2);N[B+1]=(1<<E)-1;for(let v=B;v>=ne;v-=1){let V=v-1,re=t[s.charAt(V)];if(p&&(I[V]=+!!re),N[v]=(N[v+1]<<1|1)&re,E&&(N[v]|=(C[v+1]|C[v])<<1|1|C[v+1]),N[v]&we&&(w=W(e,{errors:E,currentLocation:V,expectedLocation:f,distance:r,ignoreLocation:l}),w<=g)){if(g=w,m=V,m<=f)break;ne=Math.max(1,2*f-m)}}if(W(e,{errors:E+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:l})>g)break;C=N}const K={isMatch:m>=0,score:Math.max(.001,w)};if(p){const E=dt(I,c);E.length?a&&(K.indices=E):K.isMatch=!1}return K}function pt(s){let e={};for(let t=0,n=s.length;t<n;t+=1){const r=s.charAt(t);e[r]=(e[r]||0)|1<<n-t-1}return e}class Ee{constructor(e,{location:t=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(f,g)=>{this.chunks.push({pattern:f,alphabet:pt(f),startIndex:g})},d=this.pattern.length;if(d>O){let f=0;const g=d%O,m=d-g;for(;f<m;)h(this.pattern.substr(f,O),f),f+=O;if(g){const p=d-O;h(this.pattern.substr(p),p)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let m={isMatch:!0,score:0};return n&&(m.indices=[[0,e.length-1]]),m}const{location:r,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,ignoreLocation:l}=this.options;let h=[],d=0,f=!1;this.chunks.forEach(({pattern:m,alphabet:p,startIndex:I})=>{const{isMatch:M,score:C,indices:w}=ft(e,m,p,{location:r+I,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,includeMatches:n,ignoreLocation:l});M&&(f=!0),d+=C,M&&w&&(h=[...h,...w])});let g={isMatch:f,score:f?d/this.chunks.length:1};return f&&n&&(g.indices=h),g}}class ${constructor(e){this.pattern=e}static isMultiMatch(e){return de(e,this.multiRegex)}static isSingleMatch(e){return de(e,this.singleRegex)}search(){}}function de(s,e){const t=s.match(e);return t?t[1]:null}class gt extends ${constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class mt extends ${constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Mt extends ${constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class It extends ${constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class yt extends ${constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class xt extends ${constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class ve extends ${constructor(e,{location:t=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){super(e),this._bitapSearch=new Ee(e,{location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class _e extends ${constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,n;const r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,t))>-1;)t=n+i,r.push([n,t-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const J=[gt,_e,Mt,It,xt,yt,mt,ve],fe=J.length,Et=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,vt="|";function _t(s,e={}){return s.split(vt).map(t=>{let n=t.trim().split(Et).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=n.length;i<o;i+=1){const c=n[i];let a=!1,l=-1;for(;!a&&++l<fe;){const h=J[l];let d=h.isMultiMatch(c);d&&(r.push(new h(d,e)),a=!0)}if(!a)for(l=-1;++l<fe;){const h=J[l];let d=h.isSingleMatch(c);if(d){r.push(new h(d,e));break}}}return r})}const At=new Set([ve.type,_e.type]);class wt{constructor(e,{isCaseSensitive:t=u.isCaseSensitive,includeMatches:n=u.includeMatches,minMatchCharLength:r=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:o=u.findAllMatches,location:c=u.location,threshold:a=u.threshold,distance:l=u.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:c,threshold:a,distance:l},this.pattern=t?e:e.toLowerCase(),this.query=_t(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],c=0;for(let a=0,l=t.length;a<l;a+=1){const h=t[a];o.length=0,i=0;for(let d=0,f=h.length;d<f;d+=1){const g=h[d],{isMatch:m,indices:p,score:I}=g.search(e);if(m){if(i+=1,c+=I,n){const M=g.constructor.type;At.has(M)?o=[...o,...p]:o.push(p)}}else{c=0,i=0,o.length=0;break}}if(i){let d={isMatch:!0,score:c/i};return n&&(d.indices=o),d}}return{isMatch:!1,score:1}}}const Z=[];function St(...s){Z.push(...s)}function q(s,e){for(let t=0,n=Z.length;t<n;t+=1){let r=Z[t];if(r.condition(s,e))return new r(s,e)}return new Ee(s,e)}const D={AND:"$and",OR:"$or"},ee={PATH:"$path",PATTERN:"$val"},te=s=>!!(s[D.AND]||s[D.OR]),bt=s=>!!s[ee.PATH],Lt=s=>!b(s)&&Me(s)&&!te(s),pe=s=>({[D.AND]:Object.keys(s).map(e=>({[e]:s[e]}))});function Ae(s,e,{auto:t=!0}={}){const n=r=>{let i=Object.keys(r);const o=bt(r);if(!o&&i.length>1&&!te(r))return n(pe(r));if(Lt(r)){const a=o?r[ee.PATH]:i[0],l=o?r[ee.PATTERN]:r[a];if(!A(l))throw new Error(qe(a));const h={keyId:X(a),pattern:l};return t&&(h.searcher=q(l,e)),h}let c={children:[],operator:i[0]};return i.forEach(a=>{const l=r[a];b(l)&&l.forEach(h=>{c.children.push(n(h))})}),c};return te(s)||(s=pe(s)),n(s)}function kt(s,{ignoreFieldNorm:e=u.ignoreFieldNorm}){s.forEach(t=>{let n=1;t.matches.forEach(({key:r,norm:i,score:o})=>{const c=r?r.weight:null;n*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(e?1:i))}),t.score=n})}function Rt(s,e){const t=s.matches;e.matches=[],x(t)&&t.forEach(n=>{if(!x(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let o={indices:r,value:i};n.key&&(o.key=n.key.src),n.idx>-1&&(o.refIndex=n.idx),e.matches.push(o)})}function $t(s,e){e.score=s.score}function Ct(s,e,{includeMatches:t=u.includeMatches,includeScore:n=u.includeScore}={}){const r=[];return t&&r.push(Rt),n&&r.push($t),s.map(i=>{const{idx:o}=i,c={item:e[o],refIndex:o};return r.length&&r.forEach(a=>{a(i,c)}),c})}class F{constructor(e,t={},n){this.options={...u,...t},this.options.useExtendedSearch,this._keyStore=new nt(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof se))throw new Error(Ze);this._myIndex=t||xe(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){x(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:c}=this.options;let a=A(e)?A(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return kt(a,{ignoreFieldNorm:c}),i&&a.sort(o),me(t)&&t>-1&&(a=a.slice(0,t)),Ct(a,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const t=q(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:o,n:c})=>{if(!x(i))return;const{isMatch:a,score:l,indices:h}=t.searchIn(i);a&&r.push({item:i,idx:o,matches:[{score:l,value:i,norm:c,indices:h}]})}),r}_searchLogical(e){const t=Ae(e,this.options),n=(c,a,l)=>{if(!c.children){const{keyId:d,searcher:f}=c,g=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(a,d),searcher:f});return g&&g.length?[{idx:l,item:a,matches:g}]:[]}const h=[];for(let d=0,f=c.children.length;d<f;d+=1){const g=c.children[d],m=n(g,a,l);if(m.length)h.push(...m);else if(c.operator===D.AND)return[]}return h},r=this._myIndex.records,i={},o=[];return r.forEach(({$:c,i:a})=>{if(x(c)){let l=n(t,c,a);l.length&&(i[a]||(i[a]={idx:a,item:c,matches:[]},o.push(i[a])),l.forEach(({matches:h})=>{i[a].matches.push(...h)}))}}),o}_searchObjectList(e){const t=q(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:c})=>{if(!x(o))return;let a=[];n.forEach((l,h)=>{a.push(...this._findMatches({key:l,value:o[h],searcher:t}))}),a.length&&i.push({idx:c,item:o,matches:a})}),i}_findMatches({key:e,value:t,searcher:n}){if(!x(t))return[];let r=[];if(b(t))t.forEach(({v:i,i:o,n:c})=>{if(!x(i))return;const{isMatch:a,score:l,indices:h}=n.searchIn(i);a&&r.push({score:l,key:e,value:i,idx:o,norm:c,indices:h})});else{const{v:i,n:o}=t,{isMatch:c,score:a,indices:l}=n.searchIn(i);c&&r.push({score:a,key:e,value:i,norm:o,indices:l})}return r}}F.version="6.6.2";F.createIndex=xe;F.parseIndex=ut;F.config=u;F.parseQuery=Ae;St(wt);function Ot(s,e,t){const n=()=>{var o,c;return new F((o=R(e))!=null?o:[],(c=R(t))==null?void 0:c.fuseOptions)},r=T(n());Q(()=>{var o;return(o=R(t))==null?void 0:o.fuseOptions},()=>{r.value=n()},{deep:!0}),Q(()=>R(e),o=>{r.value.setCollection(o)},{deep:!0});const i=ge(()=>{const o=R(t);if(o!=null&&o.matchAllWhenSearchEmpty&&!R(s))return R(e).map((a,l)=>({item:a,refIndex:l}));const c=o==null?void 0:o.resultLimit;return r.value.search(R(s),c?{limit:c}:void 0)});return{fuse:r,results:i}}const Ht=Le({__name:"HistoryTextarea",props:{modelValue:{},label:{},inputId:{}},emits:["update:modelValue"],setup(s,{emit:e}){const t=e,n=s,r=Ge(n.inputId),i=T(!1),o=T(void 0),c=T(""),a=/\n|\.|;/,l=ge(()=>{var p;return((p=c.value.split(a).pop())==null?void 0:p.trim())||""}),{results:h}=Ot(l,r.entries,{matchAllWhenSearchEmpty:!0});function d(p){p.detail.role==="save"&&(t("update:modelValue",c.value),r.add(...c.value.split(a))),i.value=!1}function f(){c.value=n.modelValue}function g(p){return r.remove(p)}function m(p){c.value=c.value.slice(0,-l.value.length||void 0)+p,o.value.$el.setFocus()}return(p,I)=>(G(),ie(ae,null,[_(y(oe),{"auto-grow":"",label:p.label,"label-placement":"floating",value:p.modelValue,onClick:I[0]||(I[0]=M=>i.value=!0)},null,8,["label","value"]),_(Be,{"is-open":i.value,onWillDismiss:d,onDidPresent:I[4]||(I[4]=M=>o.value.$el.setFocus()),onWillPresent:f,"icon-save":y(Fe)},{default:S(()=>[_(y(oe),{ref_key:"input",ref:o,"auto-grow":"",label:p.label,"label-placement":"stacked",modelValue:c.value,"onUpdate:modelValue":I[2]||(I[2]=M=>c.value=M),onKeydown:I[3]||(I[3]=ke(Re(M=>m(y(h)[0].item),["prevent"]),["tab"]))},{default:S(()=>[_(y($e),{slot:"end",fill:"clear",onClick:I[1]||(I[1]=M=>{console.log(c.value,p.modelValue),c.value=p.modelValue})},{default:S(()=>[_(y(ce),{slot:"icon-only",icon:y(Ce)},null,8,["icon"])]),_:1})]),_:1},8,["label","modelValue"]),_(y(Oe),{ref:"slidingList"},{default:S(()=>[(G(!0),ie(ae,null,Ne(y(h),(M,C)=>(G(),Ke(y(Te),{key:M.item,ref_for:!0,ref:"slidingItem"},{default:S(()=>[_(y(Pe),{onClick:w=>m(M.item)},{default:S(()=>[_(y(Ve),null,{default:S(()=>[le(je(M.item),1)]),_:2},1024)]),_:2},1032,["onClick"]),_(y(We),{side:"end"},{default:S(()=>[_(y(He),{color:"danger",onClick:w=>g(M.item)},{default:S(()=>[_(y(ce),{icon:y(De),slot:"end"},null,8,["icon"]),le(" Löschen ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1},512)]),_:1},8,["is-open","icon-save"])],64))}});export{Ht as _,Ot as a,Ge as u};
