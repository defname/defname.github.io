if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,t)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const r=s=>l(s,n),a={module:{uri:n},exports:u,require:r};e[n]=Promise.all(i.map((s=>a[s]||r(s)))).then((s=>(t(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddedByList.vue_vue_type_script_setup_true_lang-legacy-gno3Pev8.js",revision:null},{url:"assets/AddedByList.vue_vue_type_script_setup_true_lang-thTLmdUa.js",revision:null},{url:"assets/EquipmentCatalogPage-AfT5JQfg.js",revision:null},{url:"assets/EquipmentCatalogPage-legacy-5qRUBXjp.js",revision:null},{url:"assets/EquipmentEditPage-APLRXSiM.js",revision:null},{url:"assets/EquipmentEditPage-legacy-sWzMSRhV.js",revision:null},{url:"assets/EquipmentList.vue_vue_type_script_setup_true_lang-cA1FAwiB.js",revision:null},{url:"assets/EquipmentList.vue_vue_type_script_setup_true_lang-legacy--OD3jeCT.js",revision:null},{url:"assets/GenericEditModal-legacy-_18YFdGq.js",revision:null},{url:"assets/GenericEditModal-LXJnwOS4.js",revision:null},{url:"assets/GenericList.vue_vue_type_script_setup_true_lang-0Dp5ansM.js",revision:null},{url:"assets/GenericList.vue_vue_type_script_setup_true_lang-legacy-dr8Qz3Wx.js",revision:null},{url:"assets/helpers-5jWdjtbo.js",revision:null},{url:"assets/helpers-legacy-MUCFszsT.js",revision:null},{url:"assets/index-legacy-AQwVFCxC.js",revision:null},{url:"assets/index-pPK12qfN.css",revision:null},{url:"assets/index-v8xIpeRF.js",revision:null},{url:"assets/index9-JJxjf5ZK.js",revision:null},{url:"assets/index9-legacy-x_7Un5zw.js",revision:null},{url:"assets/input-shims-legacy-M0N9Z0Z7.js",revision:null},{url:"assets/input-shims-Lx8DXstm.js",revision:null},{url:"assets/ios.transition-bot9g0-5.js",revision:null},{url:"assets/ios.transition-legacy-mkOXRrMa.js",revision:null},{url:"assets/LandingPage-5Kl_Ikqa.js",revision:null},{url:"assets/LandingPage-legacy-pdw9ebcX.js",revision:null},{url:"assets/livequery-e79Lz9UU.js",revision:null},{url:"assets/livequery-legacy-SEa9o6do.js",revision:null},{url:"assets/liveriskstree-lApMh-eq.js",revision:null},{url:"assets/liveriskstree-legacy-qzT4Wk_q.js",revision:null},{url:"assets/md.transition-legacy-8_wBT2eG.js",revision:null},{url:"assets/md.transition-O74NqMVk.js",revision:null},{url:"assets/MeasureCatalog.vue_vue_type_script_setup_true_lang-legacy-H4obIsQ7.js",revision:null},{url:"assets/MeasureCatalog.vue_vue_type_script_setup_true_lang-lOExUFt_.js",revision:null},{url:"assets/MeasureDetailsPage-legacy-GdVPqpUj.js",revision:null},{url:"assets/MeasureDetailsPage-M7ItULYI.js",revision:null},{url:"assets/MeasureEditPage-CRlUQi8A.js",revision:null},{url:"assets/MeasureEditPage-legacy-7extMa5G.js",revision:null},{url:"assets/MeasuresCatalogPage-legacy-_tG0PMgw.js",revision:null},{url:"assets/MeasuresCatalogPage-nEm1kDR_.js",revision:null},{url:"assets/polyfills-legacy-aRMNDjLJ.js",revision:null},{url:"assets/RAEditAccess-FFndcXe0.js",revision:null},{url:"assets/RAEditAccess-legacy-bWWlc5ru.js",revision:null},{url:"assets/RAEditDate-Eqcp_Ywu.js",revision:null},{url:"assets/RAEditDate-legacy-sYVs3A1g.js",revision:null},{url:"assets/RAEditEquipment-4t1qhoKn.js",revision:null},{url:"assets/RAEditEquipment-legacy-x4qGEEnp.js",revision:null},{url:"assets/RAEditGeneral-legacy-x2c89uga.js",revision:null},{url:"assets/RAEditGeneral-us-b4c2X.js",revision:null},{url:"assets/RAEditLocation-_W1JiC4H.js",revision:null},{url:"assets/RAEditLocation-0wpWKMyo.css",revision:null},{url:"assets/RAEditLocation-legacy--RB8-6RP.js",revision:null},{url:"assets/RAEditOverview-legacy-R-6reSU9.js",revision:null},{url:"assets/RAEditOverview-oOqD53UR.js",revision:null},{url:"assets/RAEditOverview-pwIFC1Ym.css",revision:null},{url:"assets/RAEditRescue-legacy-tEUBoAgH.js",revision:null},{url:"assets/RAEditRescue-RtqjWhks.js",revision:null},{url:"assets/RAEditRiskEntry-legacy-ndUNiCZ-.js",revision:null},{url:"assets/RAEditRiskEntry-oAlosraX.js",revision:null},{url:"assets/RAEditRiskEntryMeasures-legacy-wGBqDHqG.js",revision:null},{url:"assets/RAEditRiskEntryMeasures-uSdbb7vw.js",revision:null},{url:"assets/RAEditRisks-93pj5IUn.css",revision:null},{url:"assets/RAEditRisks-KnrixUEW.js",revision:null},{url:"assets/RAEditRisks-legacy-CqcKTn1N.js",revision:null},{url:"assets/RAEditTechnicians-B1I3qsEW.js",revision:null},{url:"assets/RAEditTechnicians-legacy-hQIc6Sd1.js",revision:null},{url:"assets/riskassessment-FIlqf9gz.js",revision:null},{url:"assets/riskassessment-legacy-glroQlBf.js",revision:null},{url:"assets/RiskAssessmentExport-legacy-QJJRguyQ.js",revision:null},{url:"assets/RiskAssessmentExport-vFAWDg2m.js",revision:null},{url:"assets/RiskAssessmentListPage-HA5ZVkby.js",revision:null},{url:"assets/RiskAssessmentListPage-legacy-y-aD9cxN.js",revision:null},{url:"assets/RiskCatalog.vue_vue_type_script_setup_true_lang-l5jq6L65.js",revision:null},{url:"assets/RiskCatalog.vue_vue_type_script_setup_true_lang-legacy-EAZeQXXD.js",revision:null},{url:"assets/RiskCatalogPage-anOUSPy9.js",revision:null},{url:"assets/RiskCatalogPage-legacy-cxbmx_c6.js",revision:null},{url:"assets/RiskDetailsPage-f3-wxgW5.js",revision:null},{url:"assets/RiskDetailsPage-legacy-baoCh8fg.js",revision:null},{url:"assets/RiskList.vue_vue_type_script_setup_true_lang-legacy-eiEd0aIW.js",revision:null},{url:"assets/RiskList.vue_vue_type_script_setup_true_lang-uWANkdA0.js",revision:null},{url:"assets/RiskListItem-9fAl2Mtb.js",revision:null},{url:"assets/RiskListItem-legacy-QZqkpaWF.js",revision:null},{url:"assets/status-tap-aBentbWt.js",revision:null},{url:"assets/status-tap-legacy-3O3Wz2xI.js",revision:null},{url:"assets/swipe-back-0qqkqcOR.js",revision:null},{url:"assets/swipe-back-legacy-t6YkSavW.js",revision:null},{url:"assets/TechnicianCatalogPage-hRdgShvZ.js",revision:null},{url:"assets/TechnicianCatalogPage-legacy-EY6gRz-z.js",revision:null},{url:"assets/TechnicianEditPage-legacy-jhgkxuC8.js",revision:null},{url:"assets/TechnicianEditPage-T5Gs5qA4.js",revision:null},{url:"assets/TechniciansList.vue_vue_type_script_setup_true_lang-legacy-B-0GyC5C.js",revision:null},{url:"assets/TechniciansList.vue_vue_type_script_setup_true_lang-RnWlpQyh.js",revision:null},{url:"assets/TemplateGenericEditPage-0tuzB8xP.js",revision:null},{url:"assets/TemplateGenericEditPage-legacy-gia9ZRhy.js",revision:null},{url:"assets/TemplateMainPage.vue_vue_type_script_setup_true_lang-legacy-6BBudZvZ.js",revision:null},{url:"assets/TemplateMainPage.vue_vue_type_script_setup_true_lang-T_QcixdP.js",revision:null},{url:"assets/TemplateRiskAssessmentPage-eCk3s5vp.js",revision:null},{url:"assets/TemplateRiskAssessmentPage-legacy-C9ptRRkR.js",revision:null},{url:"index.html",revision:"c09f1b7028d285ca02be8a1176378c58"},{url:"print.css",revision:"43365853e37ad49fdcda43dc529610b2"},{url:"registerSW.js",revision:"e81983c5d51eebfb1e65c3d5254fedcb"},{url:"logo-144.png",revision:"999f53aa096475b5fdc3c47ec64fb98c"},{url:"logo.jpg",revision:"364c236c63a6e49f7e484327126a4e58"},{url:"manifest.webmanifest",revision:"e0aa1203507a9c5216f8d0161d1a7551"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
