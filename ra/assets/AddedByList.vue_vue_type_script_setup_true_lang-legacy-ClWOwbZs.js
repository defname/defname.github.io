System.register(["./riskassessment-legacy-9eQx62Ou.js","./livequery-legacy-4DUv93Zw.js","./index-legacy-dNI7AN09.js"],(function(e,t){"use strict";var s,i,n,r,u,a,g,l,c,d,y,m;return{setters:[e=>{s=e.u},e=>{i=e.l},e=>{n=e.d,r=e.f,u=e.o,a=e.g,g=e.R,l=e.F,c=e.l,d=e.j,y=e.a,m=e.t}],execute:function(){const t={key:0},o={key:1};e("_",n({__name:"AddedByList",props:{triggerList:{}},setup(e){const n=i.table("measures"),p=i.table("equipment"),v=s();return(e,s)=>r(v).isReady&&r(n).isReady()?(u(!0),a(l,{key:0},g(e.triggerList,(e=>(u(),a(l,null,["measure"===e.type?(u(),a("div",t,[d("Automatisch hinzugefügt von "),y("em",null,m(r(n).get(e.id).descr),1)])):c("",!0),"equipment"===e.type?(u(),a("div",o,[d("Automatisch hinzugefügt von "),y("em",null,m(r(p).get(e.id).descr),1)])):c("",!0)],64)))),256)):c("",!0)}}))}}}));
