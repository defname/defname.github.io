if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>l(s,r),a={module:{uri:r},exports:t,require:u};e[r]=Promise.all(i.map((s=>a[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddedByList.vue_vue_type_script_setup_true_lang-hNn7jZUi.js",revision:null},{url:"assets/AddedByList.vue_vue_type_script_setup_true_lang-legacy-wVbVMTbl.js",revision:null},{url:"assets/EquipmentCatalogPage-legacy-YZSQLkxR.js",revision:null},{url:"assets/EquipmentCatalogPage-U7RK1Dm_.js",revision:null},{url:"assets/EquipmentEditPage-FOhYCAV6.js",revision:null},{url:"assets/EquipmentEditPage-legacy-WNJOn-2w.js",revision:null},{url:"assets/EquipmentList.vue_vue_type_script_setup_true_lang-legacy-4b5bYf_o.js",revision:null},{url:"assets/EquipmentList.vue_vue_type_script_setup_true_lang-nqMIDpTK.js",revision:null},{url:"assets/GenericEditModal-AX6KcmEn.js",revision:null},{url:"assets/GenericEditModal-legacy-bTaT37dX.js",revision:null},{url:"assets/GenericList.vue_vue_type_script_setup_true_lang-legacy-LcaX_BeJ.js",revision:null},{url:"assets/GenericList.vue_vue_type_script_setup_true_lang-PraHGk5g.js",revision:null},{url:"assets/helpers-1szQ4hrZ.js",revision:null},{url:"assets/helpers-legacy-8j4YqDOj.js",revision:null},{url:"assets/index-aPl9jvQn.js",revision:null},{url:"assets/index-legacy-I3VWwJ3d.js",revision:null},{url:"assets/index-pPK12qfN.css",revision:null},{url:"assets/index9-GTNN5KXG.js",revision:null},{url:"assets/index9-legacy-jWf9PEiw.js",revision:null},{url:"assets/input-shims-legacy-PeoO0xLJ.js",revision:null},{url:"assets/input-shims-nIpUkuKl.js",revision:null},{url:"assets/ios.transition-ahsKsOCw.js",revision:null},{url:"assets/ios.transition-legacy-wkQyn1pB.js",revision:null},{url:"assets/LandingPage-gi5YC7bu.js",revision:null},{url:"assets/LandingPage-legacy-macfx-JI.js",revision:null},{url:"assets/livequery-F5oUnc-M.js",revision:null},{url:"assets/livequery-legacy-7UEI3GHC.js",revision:null},{url:"assets/liveriskstree-legacy--j7qBAr2.js",revision:null},{url:"assets/liveriskstree-XvMKZMrI.js",revision:null},{url:"assets/md.transition-jHPAYhaF.js",revision:null},{url:"assets/md.transition-legacy-5BEJwchj.js",revision:null},{url:"assets/MeasureCatalog.vue_vue_type_script_setup_true_lang-kmoOQsqh.js",revision:null},{url:"assets/MeasureCatalog.vue_vue_type_script_setup_true_lang-legacy-WjtAy34T.js",revision:null},{url:"assets/MeasureDetailsPage-legacy-A6UWgind.js",revision:null},{url:"assets/MeasureDetailsPage-mq6tidQ7.js",revision:null},{url:"assets/MeasureEditPage-B2EyWKMJ.js",revision:null},{url:"assets/MeasureEditPage-legacy-nb-ap4sl.js",revision:null},{url:"assets/MeasuresCatalogPage-legacy-QGgLUGEe.js",revision:null},{url:"assets/MeasuresCatalogPage-vegDCL6W.js",revision:null},{url:"assets/polyfills-legacy-aRMNDjLJ.js",revision:null},{url:"assets/RAEditAccess-legacy-wGGX73tH.js",revision:null},{url:"assets/RAEditAccess-WTCoycMT.js",revision:null},{url:"assets/RAEditDate-4UZ3MteD.js",revision:null},{url:"assets/RAEditDate-legacy-qq5KFzt7.js",revision:null},{url:"assets/RAEditEquipment-legacy-1QQgjPbO.js",revision:null},{url:"assets/RAEditEquipment-pEp-edlN.js",revision:null},{url:"assets/RAEditGeneral-b2oru2lW.js",revision:null},{url:"assets/RAEditGeneral-legacy-z5Q1T8ex.js",revision:null},{url:"assets/RAEditLocation-0wpWKMyo.css",revision:null},{url:"assets/RAEditLocation-legacy-hosfrQrG.js",revision:null},{url:"assets/RAEditLocation-lxLf-U8B.js",revision:null},{url:"assets/RAEditOverview-legacy-bKgZmUlC.js",revision:null},{url:"assets/RAEditOverview-wwIZJ6vg.css",revision:null},{url:"assets/RAEditOverview-Z7Paf_1w.js",revision:null},{url:"assets/RAEditRescue-legacy-2sxAQD5Z.js",revision:null},{url:"assets/RAEditRescue-NsXBwPrD.js",revision:null},{url:"assets/RAEditRiskEntry-7s9FRq-o.js",revision:null},{url:"assets/RAEditRiskEntry-legacy-PQmlbM_i.js",revision:null},{url:"assets/RAEditRiskEntryMeasures-legacy-UoZdTbHb.js",revision:null},{url:"assets/RAEditRiskEntryMeasures-XDuBE_0Y.js",revision:null},{url:"assets/RAEditRisks-93pj5IUn.css",revision:null},{url:"assets/RAEditRisks-awy5NL7s.js",revision:null},{url:"assets/RAEditRisks-legacy-vre_jLQB.js",revision:null},{url:"assets/RAEditTechnicians-g_Savwa-.js",revision:null},{url:"assets/RAEditTechnicians-legacy-1fk9Sdr3.js",revision:null},{url:"assets/riskassessment-legacy-vWSAB9X4.js",revision:null},{url:"assets/riskassessment-UErCLwMe.js",revision:null},{url:"assets/RiskAssessmentExport-1fY0P-gQ.js",revision:null},{url:"assets/RiskAssessmentExport-legacy-1AxPfqCz.js",revision:null},{url:"assets/RiskAssessmentListPage-EpoRPcz_.js",revision:null},{url:"assets/RiskAssessmentListPage-legacy-yNBoqlie.js",revision:null},{url:"assets/RiskCatalog.vue_vue_type_script_setup_true_lang-E86gnguQ.js",revision:null},{url:"assets/RiskCatalog.vue_vue_type_script_setup_true_lang-legacy-KuUHQbYk.js",revision:null},{url:"assets/RiskCatalogPage-h4jwIjkB.js",revision:null},{url:"assets/RiskCatalogPage-legacy-GB2_A8sE.js",revision:null},{url:"assets/RiskDetailsPage-GSlyHZUU.js",revision:null},{url:"assets/RiskDetailsPage-legacy-vhdbL0QF.js",revision:null},{url:"assets/RiskList.vue_vue_type_script_setup_true_lang-legacy-0biXBAOR.js",revision:null},{url:"assets/RiskList.vue_vue_type_script_setup_true_lang-M1A6pbdi.js",revision:null},{url:"assets/RiskListItem-gUlCYv95.js",revision:null},{url:"assets/RiskListItem-legacy-dsZWIIrA.js",revision:null},{url:"assets/status-tap-legacy-I8DogcJF.js",revision:null},{url:"assets/status-tap-og785T3A.js",revision:null},{url:"assets/swipe-back-cZ_VF2yy.js",revision:null},{url:"assets/swipe-back-legacy-BerRePBd.js",revision:null},{url:"assets/TechnicianCatalogPage-2QbE5dzE.js",revision:null},{url:"assets/TechnicianCatalogPage-legacy-t3l_QRl3.js",revision:null},{url:"assets/TechnicianEditPage-HiHph0yx.js",revision:null},{url:"assets/TechnicianEditPage-legacy-TDN_XAo2.js",revision:null},{url:"assets/TechniciansList.vue_vue_type_script_setup_true_lang-gjEWJmcJ.js",revision:null},{url:"assets/TechniciansList.vue_vue_type_script_setup_true_lang-legacy-E9FDLafx.js",revision:null},{url:"assets/TemplateGenericEditPage-f3PuDUaP.js",revision:null},{url:"assets/TemplateGenericEditPage-legacy-sVZQzbr_.js",revision:null},{url:"assets/TemplateMainPage.vue_vue_type_script_setup_true_lang-esv8XX4i.js",revision:null},{url:"assets/TemplateMainPage.vue_vue_type_script_setup_true_lang-legacy-XpUQSHX2.js",revision:null},{url:"assets/TemplateRiskAssessmentPage-legacy-o58SR2HU.js",revision:null},{url:"assets/TemplateRiskAssessmentPage-vZlOcAeI.js",revision:null},{url:"index.html",revision:"a8e58ffa89b0b3ef5aacb3c0b962d155"},{url:"print.css",revision:"955dd2faf3e845b85fc985f988e11c9e"},{url:"print.js",revision:"c5d800260edcc7febaa0bf5ad1b1825c"},{url:"registerSW.js",revision:"e81983c5d51eebfb1e65c3d5254fedcb"},{url:"logo-144.png",revision:"999f53aa096475b5fdc3c47ec64fb98c"},{url:"logo.jpg",revision:"364c236c63a6e49f7e484327126a4e58"},{url:"manifest.webmanifest",revision:"e0aa1203507a9c5216f8d0161d1a7551"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
