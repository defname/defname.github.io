System.register(["./index-legacy-l9aK7RKf.js","./riskassessment-legacy-kVyVXEzW.js","./TemplateRiskAssessmentPage-legacy-kcjQW-hP.js","./helpers-legacy-X82L35U6.js","./livequery-legacy-GqvLyVpq.js","./liveriskstree-legacy-dlv-ajCr.js"],(function(e,l){"use strict";var a,n,t,o,u,d,s,c,i,r,m,f,g,p,V,b,k,y,h,U,_,x,j,w,v,A,P;return{setters:[e=>{a=e.d,n=e.o,t=e.c,o=e.w,u=e.f,d=e.g,s=e.b,c=e.m,i=e.n,r=e.p,m=e.q,f=e.F,g=e.V,p=e.l,V=e.O,b=e.P,k=e.Q,y=e.D,h=e.R,U=e.N,_=e.k,x=e.j,j=e.a,w=e.Y},e=>{v=e.u},e=>{A=e.T},e=>{P=e.a},null,null],execute:function(){const l={class:"ion-text-right"};e("default",a({__name:"RAEditAccess",setup(e){const a=v();function C(){a.addSector()}function L(e){P("Die Gefährdung wirklich aus der Liste entfernen?",{text:"Löschen",role:"destructive",icon:w,handler:()=>{!function(e){const l=a.access.findIndex((l=>l.id===e.id));-1!==l?a.access.splice(l,1):console.warn("Sector "+e.title+"  ("+e.id+") not found in riskassessment")}(e)}})}return(e,w)=>(n(),t(A,null,{default:o((()=>[u(a).ready?(n(),d(f,{key:0},[s(u(m),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:o((()=>[s(u(c),{onClick:C},{default:o((()=>[s(u(i),{icon:u(r)},null,8,["icon"])])),_:1})])),_:1}),(n(!0),d(f,null,g(u(a).access,(e=>(n(),t(u(V),{key:e.id},{default:o((()=>[s(u(b),null,{default:o((()=>[s(u(k),null,{default:o((()=>[s(u(y),{modelValue:e.title,"onUpdate:modelValue":l=>e.title=l,label:"Titel","label-placement":"floating"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024),s(u(h),null,{default:o((()=>[s(u(U),{modelValue:e.entrance,"onUpdate:modelValue":l=>e.entrance=l,label:"Eingang","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),s(u(U),{modelValue:e.exit,"onUpdate:modelValue":l=>e.exit=l,label:"Ausgang","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),s(u(U),{modelValue:e.anchorPoints,"onUpdate:modelValue":l=>e.anchorPoints=l,label:"Anschlagpunkte","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),s(u(U),{modelValue:e.comment,"onUpdate:modelValue":l=>e.comment=l,label:"Kommentar","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),j("div",l,[s(u(_),{fill:"clear",color:"danger",onClick:l=>L(e)},{default:o((()=>[x("Löschen")])),_:2},1032,["onClick"])])])),_:2},1024)])),_:2},1024)))),128))],64)):p("",!0)])),_:1}))}}))}}}));
