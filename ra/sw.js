if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),d={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutView-4d995ba2.css",revision:null},{url:"assets/AboutView-a9ef5ae9.js",revision:null},{url:"assets/index-d05dbc1d.js",revision:null},{url:"assets/index-df944e6f.css",revision:null},{url:"index.html",revision:"d509ec65b516a72ebf9543e5c704c15b"},{url:"print.css",revision:"d184c0040a9fa5975f56bcc3c544d6a9"},{url:"registerSW.js",revision:"e81983c5d51eebfb1e65c3d5254fedcb"},{url:"pwa/icon.png",revision:"f07cff102bfca56346d5577bbd19de68"},{url:"manifest.webmanifest",revision:"313846c9b34ad2c790d2f69d4faf460a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
