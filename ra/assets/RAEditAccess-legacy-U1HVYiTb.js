System.register(["./index-legacy-2CesrrWX.js","./riskassessment-legacy-wYBZv6ld.js","./TemplateRiskAssessmentPage-legacy-FO2opga3.js","./helpers-legacy-LaXtun3V.js","./HistoryTextarea.vue_vue_type_script_setup_true_lang-legacy-LgpjHUGg.js","./livequery-legacy-Hb61fPKz.js","./liveriskstree-legacy-qRkpQPkU.js","./GenericEditModal-legacy-ahjQwwTC.js","./index-legacy-ZQsE_Uyj.js"],(function(e,l){"use strict";var n,t,a,o,u,s,d,i,c,r,m,p,_,f,g,V,y,h,k,x,j,U,b,v,A,T,w;return{setters:[e=>{n=e.d,t=e.o,a=e.c,o=e.w,u=e.f,s=e.g,d=e.b,i=e.m,c=e.n,r=e.p,m=e.q,p=e.F,_=e.R,f=e.l,g=e.G,V=e.H,y=e.J,h=e.s,k=e.K,x=e.k,j=e.j,U=e.a,b=e.V},e=>{v=e.u},e=>{A=e.T},e=>{T=e.a},e=>{w=e._},null,null,null,null],execute:function(){const l={class:"ion-text-right"};e("default",n({__name:"RAEditAccess",setup(e){const n=v();function C(){n.addSector()}function E(e){T("Die Gefährdung wirklich aus der Liste entfernen?",{text:"Löschen",role:"destructive",icon:b,handler:()=>{!function(e){const l=n.access.findIndex((l=>l.id===e.id));-1!==l?n.access.splice(l,1):console.warn("Sector "+e.title+"  ("+e.id+") not found in riskassessment")}(e)}})}return(e,b)=>(t(),a(A,null,{default:o((()=>[u(n).ready?(t(),s(p,{key:0},[d(u(m),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:o((()=>[d(u(i),{onClick:C},{default:o((()=>[d(u(c),{icon:u(r)},null,8,["icon"])])),_:1})])),_:1}),(t(!0),s(p,null,_(u(n).access,(e=>(t(),a(u(g),{key:e.id},{default:o((()=>[d(u(V),null,{default:o((()=>[d(u(y),null,{default:o((()=>[d(u(h),{modelValue:e.title,"onUpdate:modelValue":l=>e.title=l,label:"Titel","label-placement":"floating"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024),d(u(k),null,{default:o((()=>[d(w,{modelValue:e.entrance,"onUpdate:modelValue":l=>e.entrance=l,label:"Eingang","input-id":"ra_sector_entrance"},null,8,["modelValue","onUpdate:modelValue"]),d(w,{modelValue:e.exit,"onUpdate:modelValue":l=>e.exit=l,label:"Ausgang","input-id":"ra_sector_exit"},null,8,["modelValue","onUpdate:modelValue"]),d(w,{modelValue:e.anchorPoints,"onUpdate:modelValue":l=>e.anchorPoints=l,label:"Anschlagpunkte","input-id":"ra_sector_anchorpoints"},null,8,["modelValue","onUpdate:modelValue"]),d(w,{modelValue:e.comment,"onUpdate:modelValue":l=>e.comment=l,label:"Kommentar","input-id":"ra_sector_comment"},null,8,["modelValue","onUpdate:modelValue"]),U("div",l,[d(u(x),{fill:"clear",color:"danger",onClick:l=>E(e)},{default:o((()=>[j("Löschen")])),_:2},1032,["onClick"])])])),_:2},1024)])),_:2},1024)))),128))],64)):f("",!0)])),_:1}))}}))}}}));
