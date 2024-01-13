import{L as ie,M as ae,y as le,N as ce,r as de,O as ue,k as fe,P as me,n as ge,au as he,av as ve,_ as pe,v as y,o as T,c as D,w as p,b as C,t as G,j as B,l as F,ai as we}from"./index-fc_sw4La.js";/*! Capacitor: https://capacitorjs.com/ - MIT License */const Pe=t=>{const e=new Map;e.set("web",{name:"web"});const n=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},i=(o,a)=>{n.platforms.set(o,a)},s=o=>{n.platforms.has(o)&&(n.currentPlatform=n.platforms.get(o))};return n.addPlatform=i,n.setPlatform=s,n},be=t=>t.CapacitorPlatforms=Pe(t),N=be(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});N.addPlatform;N.setPlatform;var S;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(S||(S={}));class H extends Error{constructor(e,n,i){super(e),this.message=e,this.code=n,this.data=i}}const ye=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},Ce=t=>{var e,n,i,s,o;const a=t.CapacitorCustomPlatform||null,r=t.Capacitor||{},u=r.Plugins=r.Plugins||{},l=t.CapacitorPlatforms,k=()=>a!==null?a.name:ye(t),w=((e=l==null?void 0:l.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||k,O=()=>w()!=="web",U=((n=l==null?void 0:l.currentPlatform)===null||n===void 0?void 0:n.isNativePlatform)||O,Q=c=>{const d=I.get(c);return!!(d!=null&&d.platforms.has(w())||M(c))},X=((i=l==null?void 0:l.currentPlatform)===null||i===void 0?void 0:i.isPluginAvailable)||Q,Y=c=>{var d;return(d=r.PluginHeaders)===null||d===void 0?void 0:d.find(E=>E.name===c)},M=((s=l==null?void 0:l.currentPlatform)===null||s===void 0?void 0:s.getPluginHeader)||Y,Z=c=>t.console.error(c),ee=(c,d,E)=>Promise.reject("".concat(E,' does not have an implementation of "').concat(d,'".')),I=new Map,te=(c,d={})=>{const E=I.get(c);if(E)return console.warn('Capacitor plugin "'.concat(c,'" already registered. Cannot register plugins twice.')),E.proxy;const _=w(),$=M(c);let v;const oe=async()=>(!v&&_ in d?v=typeof d[_]=="function"?v=await d[_]():v=d[_]:a!==null&&!v&&"web"in d&&(v=typeof d.web=="function"?v=await d.web():v=d.web),v),re=(f,m)=>{var h,P;if($){const b=$==null?void 0:$.methods.find(g=>m===g.name);if(b)return b.rtype==="promise"?g=>r.nativePromise(c,m.toString(),g):(g,x)=>r.nativeCallback(c,m.toString(),g,x);if(f)return(h=f[m])===null||h===void 0?void 0:h.bind(f)}else{if(f)return(P=f[m])===null||P===void 0?void 0:P.bind(f);throw new H('"'.concat(c,'" plugin is not implemented on ').concat(_),S.Unimplemented)}},W=f=>{let m;const h=(...P)=>{const b=oe().then(g=>{const x=re(g,f);if(x){const j=x(...P);return m=j==null?void 0:j.remove,j}else throw new H('"'.concat(c,".").concat(f,'()" is not implemented on ').concat(_),S.Unimplemented)});return f==="addListener"&&(b.remove=async()=>m()),b};return h.toString=()=>"".concat(f.toString(),"() { [capacitor code] }"),Object.defineProperty(h,"name",{value:f,writable:!1,configurable:!1}),h},R=W("addListener"),q=W("removeListener"),se=(f,m)=>{const h=R({eventName:f},m),P=async()=>{const g=await h;q({eventName:f,callbackId:g},m)},b=new Promise(g=>h.then(()=>g({remove:P})));return b.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await P()},b},A=new Proxy({},{get(f,m){switch(m){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return $?se:R;case"removeListener":return q;default:return W(m)}}});return u[c]=A,I.set(c,{name:c,proxy:A,platforms:new Set([...Object.keys(d),...$?[_]:[]])}),A},ne=((o=l==null?void 0:l.currentPlatform)===null||o===void 0?void 0:o.registerPlugin)||te;return r.convertFileSrc||(r.convertFileSrc=c=>c),r.getPlatform=w,r.handleError=Z,r.isNativePlatform=U,r.isPluginAvailable=X,r.pluginMethodNoop=ee,r.registerPlugin=ne,r.Exception=H,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r.platform=r.getPlatform(),r.isNative=r.isNativePlatform(),r},_e=t=>t.Capacitor=Ce(t),L=_e(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),z=L.registerPlugin;L.Plugins;class J{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn('Capacitor WebPlugin "'.concat(e.name,'" config object was deprecated in v3 and will be removed in v4.')),this.config=e)}addListener(e,n){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s);const o=async()=>this.removeListener(e,n),a=Promise.resolve({remove:o});return Object.defineProperty(a,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await o()}}),a}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n){const i=this.listeners[e];i&&i.forEach(s=>s(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:i=>{this.notifyListeners(n,i)}}}unimplemented(e="not implemented"){return new L.Exception(e,S.Unimplemented)}unavailable(e="not available"){return new L.Exception(e,S.Unavailable)}async removeListener(e,n){const i=this.listeners[e];if(!i)return;const s=i.indexOf(n);this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const K=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),V=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Le extends J{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[s,o]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=V(s).trim(),o=V(o).trim(),n[s]=o}),n}async setCookie(e){try{const n=K(e.key),i=K(e.value),s="; expires=".concat((e.expires||"").replace("expires=","")),o=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?"domain=".concat(e.url):"";document.cookie="".concat(n,"=").concat(i||"").concat(s,"; path=").concat(o,"; ").concat(a,";")}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie="".concat(e.key,"=; Max-Age=0")}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,"=;expires=".concat(new Date().toUTCString(),";path=/"))}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}z("CapacitorCookies",{web:()=>new Le});const ke=async t=>new Promise((e,n)=>{const i=new FileReader;i.onload=()=>{const s=i.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},i.onerror=s=>n(s),i.readAsDataURL(t)}),Ee=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(s=>s.toLocaleLowerCase()).reduce((s,o,a)=>(s[o]=t[e[a]],s),{})},$e=(t,e=!0)=>t?Object.entries(t).reduce((i,s)=>{const[o,a]=s;let r,u;return Array.isArray(a)?(u="",a.forEach(l=>{r=e?encodeURIComponent(l):l,u+="".concat(o,"=").concat(r,"&")}),u.slice(0,-1)):(r=e?encodeURIComponent(a):a,u="".concat(o,"=").concat(r)),"".concat(i,"&").concat(u)},"").substr(1):null,Se=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),s=Ee(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(s.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[a,r]of Object.entries(t.data||{}))o.set(a,r);n.body=o.toString()}else if(s.includes("multipart/form-data")||t.data instanceof FormData){const o=new FormData;if(t.data instanceof FormData)t.data.forEach((r,u)=>{o.append(u,r)});else for(const r of Object.keys(t.data))o.append(r,t.data[r]);n.body=o;const a=new Headers(n.headers);a.delete("content-type"),n.headers=a}else(s.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class Oe extends J{async request(e){const n=Se(e,e.webFetchExtra),i=$e(e.params,e.shouldEncodeUrlParams),s=i?"".concat(e.url,"?").concat(i):e.url,o=await fetch(s,n),a=o.headers.get("content-type")||"";let{responseType:r="text"}=o.ok?e:{};a.includes("application/json")&&(r="json");let u,l;switch(r){case"arraybuffer":case"blob":l=await o.blob(),u=await ke(l);break;case"json":u=await o.json();break;case"document":case"text":default:u=await o.text()}const k={};return o.headers.forEach((w,O)=>{k[O]=w}),{data:u,headers:k,status:o.status,url:o.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}z("CapacitorHttp",{web:()=>new Oe});const xe={components:{IonHeader:ie,IonToolbar:ae,IonButtons:le,IonTitle:ce,IonItem:de,IonContent:ue,IonButton:fe,IonModal:me,IonIcon:ge},emits:["willDismiss","willPresent"],props:{captionSave:{type:String,default:void 0},iconSave:{type:String,default:he},hideSave:Boolean,captionCancel:{type:String,default:void 0},iconCancel:{type:String,default:ve},hideCancel:Boolean},beforeRouteLeave(t,e){return console.log("Route leave"),t},methods:{onWillPresent(t){this.$emit("willPresent",t),L.isNativePlatform()||(console.log("Not Native"),this.$router.push({query:{edit:"true"}})),window.addEventListener("popstate",this.onPopState)},onPopState(t){console.log(t),window.removeEventListener("popstate",this.onPopState),L.isNativePlatform()||this.$refs.modal.$el.dismiss(void 0,"popstate"),console.log(t)},cancel(){this.$refs.modal.$el.dismiss()},save(){this.$refs.modal.$el.dismiss(void 0,"save")},onWillDismiss(t){t.detail.role!=="popstate"&&!L.isNativePlatform()&&this.$router.back(),this.$emit("willDismiss",t)}}};function je(t,e,n,i,s,o){const a=y("ion-icon"),r=y("ion-button"),u=y("ion-buttons"),l=y("ion-title"),k=y("ion-toolbar"),w=y("ion-header"),O=y("ion-content"),U=y("ion-modal");return T(),D(U,{ref:"modal",onWillPresent:o.onWillPresent,onWillDismiss:o.onWillDismiss},{default:p(()=>[C(w,null,{default:p(()=>[C(k,null,{default:p(()=>[n.hideCancel?F("",!0):(T(),D(u,{key:0,slot:"start"},{default:p(()=>[C(r,{onClick:o.cancel},{default:p(()=>[C(a,{icon:n.iconCancel,slot:n.captionCancel?"start":"icon-only"},null,8,["icon","slot"]),B(" "+G(n.captionCancel),1)]),_:1},8,["onClick"])]),_:1})),C(l,null,{default:p(()=>[B("Bearbeiten")]),_:1}),n.hideSave?F("",!0):(T(),D(u,{key:1,slot:"end"},{default:p(()=>[C(r,{strong:!0,onClick:o.save},{default:p(()=>[C(a,{icon:n.iconSave,slot:n.captionSave?"end":"icon-only"},null,8,["icon","slot"]),B(" "+G(n.captionSave),1)]),_:1},8,["onClick"])]),_:1}))]),_:1})]),_:1}),C(O,{class:"ion-padding"},{default:p(()=>[we(t.$slots,"default")]),_:3})]),_:3},8,["onWillPresent","onWillDismiss"])}const Ie=pe(xe,[["render",je]]);export{Ie as G};
