if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6db16f92"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-3e7b1642.css",revision:null},{url:"assets/index-bf0a335f.js",revision:null},{url:"index.html",revision:"1ad5a073c87e84144e747300571d7701"},{url:"registerSW.js",revision:"5f081f2da882f5e44f5272984db4d416"},{url:"logo.png",revision:"81cb75a1fb9a9353c8f406242dd6c00c"},{url:"manifest.webmanifest",revision:"3b8637713ec63be90a3c04960e412aac"}],{}),e.cleanupOutdatedCaches()}));
