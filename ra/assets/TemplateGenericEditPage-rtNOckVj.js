import{z as S,r as g,s as I,x as k,q as y,A as B,j as v,O as T,B as w,m as x,P as N,v as P,_ as V,D as e,o as c,c as s,w as t,a as n,i as a,t as l,k as b,E as z}from"./index-pK9Jxw9y.js";const D={components:{IonHeader:S,IonToolbar:g,IonButtons:I,IonTitle:k,IonItem:y,IonContent:B,IonButton:v,IonModal:T,IonPage:w,IonIcon:x},emits:["submit","shouldCancel"],props:{captionSubmit:{type:String,default:void 0},iconSubmit:{type:String,default:N},hideSubmit:Boolean,captionCancel:{type:String,default:void 0},iconCancel:{type:String,default:P},hideCancel:Boolean},methods:{shouldCancel(){this.$emit("shouldCancel")},submit(){this.$emit("submit")}}};function E(i,j,o,q,A,u){const d=e("ion-icon"),_=e("ion-button"),r=e("ion-buttons"),m=e("ion-title"),f=e("ion-toolbar"),C=e("ion-header"),p=e("ion-content"),h=e("ion-page");return c(),s(h,null,{default:t(()=>[n(C,null,{default:t(()=>[n(f,null,{default:t(()=>[o.hideCancel?b("",!0):(c(),s(r,{key:0,slot:"start"},{default:t(()=>[n(_,{onClick:u.shouldCancel},{default:t(()=>[n(d,{icon:o.iconCancel,slot:o.captionCancel?"start":"icon-only"},null,8,["icon","slot"]),a(" "+l(o.captionCancel),1)]),_:1},8,["onClick"])]),_:1})),n(m,null,{default:t(()=>[a(l(i.$route.meta.title),1)]),_:1}),o.hideSubmit?b("",!0):(c(),s(r,{key:1,slot:"end"},{default:t(()=>[n(_,{strong:!0,onClick:u.submit},{default:t(()=>[n(d,{icon:o.iconSubmit,slot:o.captionSubmit?"end":"icon-only"},null,8,["icon","slot"]),a(" "+l(o.captionSubmit),1)]),_:1},8,["onClick"])]),_:1}))]),_:1})]),_:1}),n(p,{color:"light"},{default:t(()=>[n(C,{collapse:"condense"},{default:t(()=>[n(f,null,{default:t(()=>[n(m,{size:"large"},{default:t(()=>[a(l(i.$route.meta.title),1)]),_:1})]),_:1})]),_:1}),z(i.$slots,"default")]),_:3})]),_:3})}const H=V(D,[["render",E]]);export{H as T};