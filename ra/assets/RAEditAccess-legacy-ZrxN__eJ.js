System.register(["./index-legacy-adaRzQ0C.js","./riskassessment-legacy-Pa4oDVK4.js","./TemplateRiskAssessmentPage-legacy-oRPXQw1p.js","./helpers-legacy-FbJo5R_3.js","./livequery-legacy-aw0V0uGM.js","./liveriskstree-legacy-SFL0-r2k.js"],(function(e,l){"use strict";var a,n,t,o,u,s,d,i,c,r,m,f,g,p,V,k,y,h,b,_,x,U,j,w,v,A,P;return{setters:[e=>{a=e.d,n=e.o,t=e.c,o=e.w,u=e.f,s=e.g,d=e.b,i=e.m,c=e.n,r=e.p,m=e.q,f=e.F,g=e.a2,p=e.l,V=e.O,k=e.P,y=e.Q,h=e.D,b=e.R,_=e.N,x=e.k,U=e.j,j=e.a,w=e.af},e=>{v=e.u},e=>{A=e.T},e=>{P=e.a},null,null],execute:function(){const l={class:"ion-text-right"};e("default",a({__name:"RAEditAccess",setup(e){const a=v();function C(){a.addSector()}function L(e){P("Die Gefährdung wirklich aus der Liste entfernen?",{text:"Löschen",role:"destructive",icon:w,handler:()=>{!function(e){const l=a.access.findIndex((l=>l.id===e.id));-1!==l?a.access.splice(l,1):console.warn("Sector "+e.title+"  ("+e.id+") not found in riskassessment")}(e)}})}return(e,w)=>(n(),t(A,null,{default:o((()=>[u(a).ready?(n(),s(f,{key:0},[d(u(m),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:o((()=>[d(u(i),{onClick:C},{default:o((()=>[d(u(c),{icon:u(r)},null,8,["icon"])])),_:1})])),_:1}),(n(!0),s(f,null,g(u(a).access,(e=>(n(),t(u(V),{key:e.id},{default:o((()=>[d(u(k),null,{default:o((()=>[d(u(y),null,{default:o((()=>[d(u(h),{modelValue:e.title,"onUpdate:modelValue":l=>e.title=l,label:"Titel","label-placement":"floating"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024),d(u(b),null,{default:o((()=>[d(u(_),{modelValue:e.entrance,"onUpdate:modelValue":l=>e.entrance=l,label:"Eingang","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),d(u(_),{modelValue:e.exit,"onUpdate:modelValue":l=>e.exit=l,label:"Ausgang","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),d(u(_),{modelValue:e.anchorPoints,"onUpdate:modelValue":l=>e.anchorPoints=l,label:"Anschlagpunkte","label-placement":"floating","auto-grow":""},null,8,["modelValue","onUpdate:modelValue"]),j("div",l,[d(u(x),{fill:"clear",color:"danger",onClick:l=>L(e)},{default:o((()=>[U("Löschen")])),_:2},1032,["onClick"])])])),_:2},1024)])),_:2},1024)))),128))],64)):p("",!0)])),_:1}))}}))}}}));