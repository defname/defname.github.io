import{i as g,n as h,a as A,t as m,b as D}from"./index-5HMXaIvq.js";import{x as r,a2 as M,e as E,as as S,at as x}from"./index-iuBXx226.js";function L(o){var n;const e=m(o);return(n=e==null?void 0:e.$el)!=null?n:e}const k=g?window:void 0;function y(...o){let n,e,t,a;if(typeof o[0]=="string"||Array.isArray(o[0])?([e,t,a]=o,n=k):[n,e,t,a]=o,!n)return h;Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]);const u=[],l=()=>{u.forEach(s=>s()),u.length=0},v=(s,c,f,i)=>(s.addEventListener(c,f,i),()=>s.removeEventListener(c,f,i)),d=M(()=>[L(n),m(a)],([s,c])=>{if(l(),!s)return;const f=A(c)?{...c}:c;u.push(...e.flatMap(i=>t.map(w=>v(s,i,w,f))))},{immediate:!0,flush:"post"}),p=()=>{d(),l()};return D(p),p}function C(){const o=r(!1);return S()&&x(()=>{o.value=!0}),o}function O(o){const n=C();return E(()=>(n.value,!!o()))}function N(o={}){const{window:n=k}=o,e=n==null?void 0:n.navigator,t=O(()=>e&&"connection"in e),a=r(!0),u=r(!1),l=r(void 0),v=r(void 0),d=r(void 0),p=r(void 0),s=r(void 0),c=r(void 0),f=r("unknown"),i=t.value&&e.connection;function w(){e&&(a.value=e.onLine,l.value=a.value?void 0:Date.now(),v.value=a.value?Date.now():void 0,i&&(d.value=i.downlink,p.value=i.downlinkMax,c.value=i.effectiveType,s.value=i.rtt,u.value=i.saveData,f.value=i.type))}return n&&(y(n,"offline",()=>{a.value=!1,l.value=Date.now()}),y(n,"online",()=>{a.value=!0,v.value=Date.now()})),i&&y(i,"change",w,!1),w(),{isSupported:t,isOnline:a,saveData:u,offlineAt:l,onlineAt:v,downlink:d,downlinkMax:p,effectiveType:c,rtt:s,type:f}}function I(o={}){const{isOnline:n}=N(o);return n}function T(o={}){const{window:n=k}=o,e=O(()=>n&&"screen"in n&&"orientation"in n.screen),t=e.value?n.screen.orientation:{},a=r(t.type),u=r(t.angle||0);return e.value&&y(n,"orientationchange",()=>{a.value=t.type,u.value=t.angle}),{isSupported:e,orientation:a,angle:u,lockOrientation:d=>e.value&&typeof t.lock=="function"?t.lock(d):Promise.reject(new Error("Not supported")),unlockOrientation:()=>{e.value&&typeof t.unlock=="function"&&t.unlock()}}}export{T as a,I as u};
