System.register(["./index-legacy-I3VWwJ3d.js","./helpers-legacy-8j4YqDOj.js","./riskassessment-legacy-vWSAB9X4.js","./livequery-legacy-7UEI3GHC.js","./TemplateMainPage.vue_vue_type_script_setup_true_lang-legacy-XpUQSHX2.js","./liveriskstree-legacy--j7qBAr2.js"],(function(e,s){"use strict";var t,l,n,i,a,r,d,u,o,c,f,g,m,k,_,h,p,v,b,y,z,w,x,j,C,D,E,L,S,F,P;return{setters:[e=>{t=e.d,l=e.U,n=e.o,i=e.c,a=e.w,r=e.b,d=e.f,u=e.m,o=e.n,c=e.p,f=e.q,g=e.g,m=e.V,k=e.F,_=e.O,h=e.P,p=e.Q,v=e.t,b=e.j,y=e.W,z=e.R,w=e.k,x=e.l,j=e.X,C=e.Y},e=>{D=e.d,E=e.a},e=>{L=e.u,S=e.d},e=>{F=e.l},e=>{P=e._},null],execute:function(){e("default",t({__name:"RiskAssessmentListPage",setup(e){const s=l(),t=F.table("riskassessmentsmeta").entries(),q=L();return(e,l)=>(n(),i(P,null,{default:a((()=>[r(d(f),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:a((()=>[r(d(u),{onClick:l[0]||(l[0]=e=>{D.riskassessments.add({...S}).then((e=>{const s=Math.floor(Date.now()/1e3);D.riskassessmentsmeta.add({id:e,descr:"Neue Gefährdungsbeurteilung "+e,created:s,lastChange:s}).then((()=>{}))}))})},{default:a((()=>[r(d(o),{icon:d(c)},null,8,["icon"])])),_:1})])),_:1}),(n(!0),g(k,null,m(d(t),(e=>(n(),i(d(_),null,{default:a((()=>[r(d(h),{onClick:t=>{return l=e.id,q.id===l&&s.push("/riskassessment/"+l),void(void 0!==q.id&&l!==q.id&&q.modified()?E("In der geöffneten Einsatzplanung gibt es noch ungespeicherte Änderungen. Diese gehen verloren wenn eine andere geöffnet wird. Soll die Einsatzplanung trotzdem geöffnet werden?",{text:"Öffnen",role:"submit",icon:j,handler:()=>{q.loadFromDb(l)}}):q.loadFromDb(l));var l}},{default:a((()=>[r(d(p),null,{default:a((()=>[b(v(e.descr),1)])),_:2},1024),r(d(y),null,{default:a((()=>[b("Zuletzt geändert: "+v(new Date(1e3*e.lastChange).toLocaleString("de")),1)])),_:2},1024)])),_:2},1032,["onClick"]),e.id===d(q).id?(n(),i(d(z),{key:0},{default:a((()=>[r(d(w),{size:"small",fill:"clear",color:"danger",onClick:s=>{return t=e.id,void E("Soll der Einsatzplan wirklich unwideruflich gelöscht werden?",{text:"Löschen",icon:C,handler:()=>{F.table("riskassessments").delete(t),F.table("riskassessmentsmeta").delete(t)}});var t}},{default:a((()=>[b("Löschen")])),_:2},1032,["onClick"]),r(d(w),{size:"small",fill:"clear","router-link":`/riskassessment/${e.id}/export`},{default:a((()=>[b("Export")])),_:2},1032,["router-link"]),r(d(w),{size:"small",fill:"clear","router-link":`/riskassessment/${e.id}`},{default:a((()=>[b("Bearbeiten")])),_:2},1032,["router-link"])])),_:2},1024)):x("",!0)])),_:2},1024)))),256))])),_:1}))}}))}}}));
