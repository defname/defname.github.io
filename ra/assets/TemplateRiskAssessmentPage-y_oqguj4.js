import{L as S,M as I,y,N as B,r as T,O as v,k as A,P as w,al as N,n as P,am as V,an as z,_ as M,v as o,o as a,c as i,w as t,b as e,t as l,j as c,ai as r,l as d}from"./index-sS98weYx.js";import{u as R}from"./riskassessment-P18IDQr_.js";import{p as k}from"./helpers-6pYLpwcd.js";const j={components:{IonHeader:S,IonToolbar:I,IonButtons:y,IonTitle:B,IonItem:T,IonContent:v,IonButton:A,IonModal:w,IonPage:N,IonIcon:P},emits:["submit","shouldCancel"],props:{captionSubmit:{type:String,default:void 0},iconSubmit:{type:String,default:V},hideSubmit:Boolean,captionCancel:{type:String,default:void 0},iconCancel:{type:String,default:z},hideCancel:Boolean},setup(){return{riskAssessment:R()}},computed:{modified(){return this.riskAssessment,this.riskAssessment.modified()}},methods:{shouldCancel(){this.$router.back()},submit(){this.riskAssessment.save().then(()=>{k("Einsatzplan gespeichert","success")}).catch(s=>{throw k("Beim Speichern ist ein Fehler aufgetreten.","danger"),s})}}};function D(s,E,n,F,H,u){const m=o("ion-icon"),_=o("ion-button"),f=o("ion-buttons"),p=o("ion-title"),h=o("ion-toolbar"),b=o("ion-header"),C=o("ion-content"),g=o("ion-page");return a(),i(g,null,{default:t(()=>[e(b,null,{default:t(()=>[e(h,null,{default:t(()=>[n.hideCancel?d("",!0):(a(),i(f,{key:0,slot:"start"},{default:t(()=>[r(s.$slots,"cancelButton",{},()=>[e(_,{onClick:u.shouldCancel},{default:t(()=>[e(m,{icon:n.iconCancel,slot:n.captionCancel?"start":"icon-only"},null,8,["icon","slot"]),c(" "+l(n.captionCancel),1)]),_:1},8,["onClick"])])]),_:3})),e(p,null,{default:t(()=>[c(l(s.$route.meta.sectionTitle),1)]),_:1}),n.hideSubmit?d("",!0):(a(),i(f,{key:1,slot:"end"},{default:t(()=>[r(s.$slots,"submitButton",{},()=>[u.modified?(a(),i(_,{key:0,strong:!0,onClick:u.submit},{default:t(()=>[e(m,{icon:n.iconSubmit,slot:n.captionSubmit?"end":"icon-only"},null,8,["icon","slot"]),c(" "+l(n.captionSubmit),1)]),_:1},8,["onClick"])):d("",!0)])]),_:3}))]),_:3})]),_:3}),e(C,{color:"light"},{default:t(()=>[e(b,{collapse:"condense"},{default:t(()=>[e(h,null,{default:t(()=>[e(p,{size:"large"},{default:t(()=>[c(l(s.$route.meta.sectionTitle),1)]),_:1})]),_:1})]),_:1}),r(s.$slots,"default")]),_:3})]),_:3})}const x=M(j,[["render",D]]);export{x as T};
