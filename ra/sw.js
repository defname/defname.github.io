if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutView-4d995ba2.css",revision:null},{url:"assets/AboutView-c25ac355.js",revision:null},{url:"assets/index-54c3ee4b.css",revision:null},{url:"assets/index-c3994383.js",revision:null},{url:"index.html",revision:"59589920d244b1bf419995e0043bda9d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa/icon.png",revision:"f07cff102bfca56346d5577bbd19de68"},{url:"manifest.webmanifest",revision:"3a28487c6b0fac6e3f1c38fd0130087b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
