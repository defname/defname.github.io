if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),d={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutView-4d995ba2.css",revision:null},{url:"assets/AboutView-5d1d4430.js",revision:null},{url:"assets/index-54c3ee4b.css",revision:null},{url:"assets/index-e6de67b9.js",revision:null},{url:"index.html",revision:"e98e47a6b4a310113008f2bd9ce1684f"},{url:"registerSW.js",revision:"e81983c5d51eebfb1e65c3d5254fedcb"},{url:"manifest.webmanifest",revision:"8c9f6c7a24dcdb9225ecba386d2e5723"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
