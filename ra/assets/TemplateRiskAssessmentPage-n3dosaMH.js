import{z as S,r as I,s as B,x as y,q as T,A,j as v,O as w,B as z,m as N,P,v as V,_ as D,D as o,o as a,c as i,w as t,a as e,t as l,i as c,E as r,k as d}from"./index-pK9Jxw9y.js";import{u as E}from"./riskassessment-Xs3F2YkL.js";import{p as k}from"./helpers-_vyyZU2O.js";const R={components:{IonHeader:S,IonToolbar:I,IonButtons:B,IonTitle:y,IonItem:T,IonContent:A,IonButton:v,IonModal:w,IonPage:z,IonIcon:N},emits:["submit","shouldCancel"],props:{captionSubmit:{type:String,default:void 0},iconSubmit:{type:String,default:P},hideSubmit:Boolean,captionCancel:{type:String,default:void 0},iconCancel:{type:String,default:V},hideCancel:Boolean},setup(){return{riskAssessment:E()}},computed:{modified(){return this.riskAssessment,this.riskAssessment.modified()}},methods:{shouldCancel(){this.$router.back()},submit(){this.riskAssessment.save().then(()=>{k("Einsatzplan gespeichert","success"),this.$router.back()}).catch(s=>{throw k("Beim Speichern ist ein Fehler aufgetreten.","danger"),s})}}};function j(s,q,n,x,F,u){const m=o("ion-icon"),_=o("ion-button"),f=o("ion-buttons"),p=o("ion-title"),h=o("ion-toolbar"),b=o("ion-header"),C=o("ion-content"),g=o("ion-page");return a(),i(g,null,{default:t(()=>[e(b,null,{default:t(()=>[e(h,null,{default:t(()=>[n.hideCancel?d("",!0):(a(),i(f,{key:0,slot:"start"},{default:t(()=>[r(s.$slots,"cancelButton",{},()=>[e(_,{onClick:u.shouldCancel},{default:t(()=>[e(m,{icon:n.iconCancel,slot:n.captionCancel?"start":"icon-only"},null,8,["icon","slot"]),c(" "+l(n.captionCancel),1)]),_:1},8,["onClick"])])]),_:3})),e(p,null,{default:t(()=>[c(l(s.$route.meta.sectionTitle),1)]),_:1}),n.hideSubmit?d("",!0):(a(),i(f,{key:1,slot:"end"},{default:t(()=>[r(s.$slots,"submitButton",{},()=>[u.modified?(a(),i(_,{key:0,strong:!0,onClick:u.submit},{default:t(()=>[e(m,{icon:n.iconSubmit,slot:n.captionSubmit?"end":"icon-only"},null,8,["icon","slot"]),c(" "+l(n.captionSubmit),1)]),_:1},8,["onClick"])):d("",!0)])]),_:3}))]),_:3})]),_:3}),e(C,{color:"light"},{default:t(()=>[e(b,{collapse:"condense"},{default:t(()=>[e(h,null,{default:t(()=>[e(p,{size:"large"},{default:t(()=>[c(l(s.$route.meta.sectionTitle),1)]),_:1})]),_:1})]),_:1}),r(s.$slots,"default")]),_:3})]),_:3})}const G=D(R,[["render",j]]);export{G as T};
