import{L as S,M as g,y as I,N as k,r as y,O as B,k as v,P as T,al as N,n as w,am as P,an as V,_ as x,v as e,o as c,c as s,w as t,b as n,j as a,t as l,l as C,ai as M}from"./index-sS98weYx.js";const j={components:{IonHeader:S,IonToolbar:g,IonButtons:I,IonTitle:k,IonItem:y,IonContent:B,IonButton:v,IonModal:T,IonPage:N,IonIcon:w},emits:["submit","shouldCancel"],props:{captionSubmit:{type:String,default:void 0},iconSubmit:{type:String,default:P},hideSubmit:Boolean,captionCancel:{type:String,default:void 0},iconCancel:{type:String,default:V},hideCancel:Boolean},methods:{shouldCancel(){this.$emit("shouldCancel")},submit(){this.$emit("submit")}}};function z(i,D,o,E,G,u){const d=e("ion-icon"),_=e("ion-button"),r=e("ion-buttons"),m=e("ion-title"),f=e("ion-toolbar"),b=e("ion-header"),p=e("ion-content"),h=e("ion-page");return c(),s(h,null,{default:t(()=>[n(b,null,{default:t(()=>[n(f,null,{default:t(()=>[o.hideCancel?C("",!0):(c(),s(r,{key:0,slot:"start"},{default:t(()=>[n(_,{onClick:u.shouldCancel},{default:t(()=>[n(d,{icon:o.iconCancel,slot:o.captionCancel?"start":"icon-only"},null,8,["icon","slot"]),a(" "+l(o.captionCancel),1)]),_:1},8,["onClick"])]),_:1})),n(m,null,{default:t(()=>[a(l(i.$route.meta.title),1)]),_:1}),o.hideSubmit?C("",!0):(c(),s(r,{key:1,slot:"end"},{default:t(()=>[n(_,{strong:!0,onClick:u.submit},{default:t(()=>[n(d,{icon:o.iconSubmit,slot:o.captionSubmit?"end":"icon-only"},null,8,["icon","slot"]),a(" "+l(o.captionSubmit),1)]),_:1},8,["onClick"])]),_:1}))]),_:1})]),_:1}),n(p,{color:"light"},{default:t(()=>[n(b,{collapse:"condense"},{default:t(()=>[n(f,null,{default:t(()=>[n(m,{size:"large"},{default:t(()=>[a(l(i.$route.meta.title),1)]),_:1})]),_:1})]),_:1}),M(i.$slots,"default")]),_:3})]),_:3})}const L=x(j,[["render",z]]);export{L as T};
