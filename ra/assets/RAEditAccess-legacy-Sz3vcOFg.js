System.register(["./index-legacy-sTcrDMYq.js","./riskassessment-legacy-9hi0LLwl.js","./TemplateRiskAssessmentPage-legacy-U8MtJ39U.js","./helpers-legacy-Rp8Wbxgk.js","./HistoryTextarea.vue_vue_type_script_setup_true_lang-legacy-AVBo8-uJ.js","./livequery-legacy-tkInflhO.js","./liveriskstree-legacy-1-jYbkaU.js","./GenericEditModal-legacy-ewPrqCzC.js","./index-legacy-556IOogQ.js"],(function(e,l){"use strict";var n,t,a,o,u,s,d,i,c,r,m,p,_,f,g,V,y,h,k,x,j,U,b,v,A,w,E;return{setters:[e=>{n=e.d,t=e.o,a=e.c,o=e.w,u=e.f,s=e.g,d=e.b,i=e.m,c=e.n,r=e.p,m=e.q,p=e.F,_=e.R,f=e.l,g=e.G,V=e.H,y=e.J,h=e.s,k=e.K,x=e.k,j=e.j,U=e.a,b=e.V},e=>{v=e.u},e=>{A=e.T},e=>{w=e.a},e=>{E=e._},null,null,null,null],execute:function(){const l={class:"ion-text-right"};e("default",n({__name:"RAEditAccess",setup(e){const n=v();function G(){n.addSector()}function T(e){w("Die Gefährdung wirklich aus der Liste entfernen?",{text:"Löschen",role:"destructive",icon:b,handler:()=>{!function(e){const l=n.access.findIndex((l=>l.id===e.id));-1!==l?n.access.splice(l,1):console.warn("Sector "+e.title+"  ("+e.id+") not found in riskassessment")}(e)}})}return(e,b)=>(t(),a(A,null,{default:o((()=>[u(n).ready?(t(),s(p,{key:0},[d(u(m),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:o((()=>[d(u(i),{onClick:G},{default:o((()=>[d(u(c),{icon:u(r)},null,8,["icon"])])),_:1})])),_:1}),(t(!0),s(p,null,_(u(n).access,(e=>(t(),a(u(g),{key:e.id},{default:o((()=>[d(u(V),null,{default:o((()=>[d(u(y),null,{default:o((()=>[d(u(h),{modelValue:e.title,"onUpdate:modelValue":l=>e.title=l,label:"Titel","label-placement":"floating"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024),d(u(k),null,{default:o((()=>[d(E,{modelValue:e.entrance,"onUpdate:modelValue":l=>e.entrance=l,label:"Eingang","input-id":"ra_sector_entrance"},null,8,["modelValue","onUpdate:modelValue"]),d(E,{modelValue:e.exit,"onUpdate:modelValue":l=>e.exit=l,label:"Ausgang","input-id":"ra_sector_exit"},null,8,["modelValue","onUpdate:modelValue"]),d(E,{modelValue:e.anchorPoints,"onUpdate:modelValue":l=>e.anchorPoints=l,label:"Anschlagpunkte","input-id":"ra_sector_anchorpoints"},null,8,["modelValue","onUpdate:modelValue"]),d(E,{modelValue:e.comment,"onUpdate:modelValue":l=>e.comment=l,label:"Kommentar","input-id":"ra_sector_comment"},null,8,["modelValue","onUpdate:modelValue"]),U("div",l,[d(u(x),{fill:"clear",color:"danger",onClick:l=>T(e)},{default:o((()=>[j("Löschen")])),_:2},1032,["onClick"])])])),_:2},1024)])),_:2},1024)))),128))],64)):f("",!0)])),_:1}))}}))}}}));
