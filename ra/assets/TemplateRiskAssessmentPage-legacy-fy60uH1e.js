System.register(["./index-legacy-ys9BPxUl.js","./riskassessment-legacy-mM646kur.js","./helpers-legacy-dyrtGyeK.js"],(function(t,e){"use strict";var n,o,i,s,l,a,c,u,r,d,m,f,h,p,b,g,C,k,y,S,_,I,B,T;return{setters:[t=>{n=t.A,o=t.s,i=t.v,s=t.y,l=t.r,a=t.B,c=t.k,u=t.T,r=t.C,d=t.n,m=t.ak,f=t.x,h=t._,p=t.E,b=t.o,g=t.c,C=t.w,k=t.b,y=t.t,S=t.j,_=t.ah,I=t.l},t=>{B=t.u},t=>{T=t.p}],execute:function(){const e={components:{IonHeader:n,IonToolbar:o,IonButtons:i,IonTitle:s,IonItem:l,IonContent:a,IonButton:c,IonModal:u,IonPage:r,IonIcon:d},emits:["submit","shouldCancel"],props:{captionSubmit:{type:String,default:void 0},iconSubmit:{type:String,default:m},hideSubmit:Boolean,captionCancel:{type:String,default:void 0},iconCancel:{type:String,default:f},hideCancel:Boolean},setup:()=>({riskAssessment:B()}),computed:{modified(){return this.riskAssessment,this.riskAssessment.modified()}},methods:{shouldCancel(){this.$router.back()},submit(){this.riskAssessment.save().then((()=>{T("Einsatzplan gespeichert","success")})).catch((t=>{throw T("Beim Speichern ist ein Fehler aufgetreten.","danger"),t}))}}};t("T",h(e,[["render",function(t,e,n,o,i,s){const l=p("ion-icon"),a=p("ion-button"),c=p("ion-buttons"),u=p("ion-title"),r=p("ion-toolbar"),d=p("ion-header"),m=p("ion-content"),f=p("ion-page");return b(),g(f,null,{default:C((()=>[k(d,null,{default:C((()=>[k(r,null,{default:C((()=>[n.hideCancel?I("",!0):(b(),g(c,{key:0,slot:"start"},{default:C((()=>[_(t.$slots,"cancelButton",{},(()=>[k(a,{onClick:s.shouldCancel},{default:C((()=>[k(l,{icon:n.iconCancel,slot:n.captionCancel?"start":"icon-only"},null,8,["icon","slot"]),S(" "+y(n.captionCancel),1)])),_:1},8,["onClick"])]))])),_:3})),k(u,null,{default:C((()=>[S(y(t.$route.meta.sectionTitle),1)])),_:1}),n.hideSubmit?I("",!0):(b(),g(c,{key:1,slot:"end"},{default:C((()=>[_(t.$slots,"submitButton",{},(()=>[s.modified?(b(),g(a,{key:0,strong:!0,onClick:s.submit},{default:C((()=>[k(l,{icon:n.iconSubmit,slot:n.captionSubmit?"end":"icon-only"},null,8,["icon","slot"]),S(" "+y(n.captionSubmit),1)])),_:1},8,["onClick"])):I("",!0)]))])),_:3}))])),_:3})])),_:3}),k(m,{color:"light"},{default:C((()=>[k(d,{collapse:"condense"},{default:C((()=>[k(r,null,{default:C((()=>[k(u,{size:"large"},{default:C((()=>[S(y(t.$route.meta.sectionTitle),1)])),_:1})])),_:1})])),_:1}),_(t.$slots,"default")])),_:3})])),_:3})}]]))}}}));