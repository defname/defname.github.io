import{d as A,ao as E,aF as R,b as I,G as h,o as r,c as s,w as o,E as k,f as q,$ as N,F as b,e as n,I as G,ap as O,q as T,h as _,t as W,i as u,a as d,aq as V,ar as p,m as y,k as S,ae as C}from"./index-1uhVeu27.js";import{a as z,p as H}from"./helpers-tcYpwod6.js";const P=A({__name:"GenericList",props:{entries:{type:Array,required:!0,readonly:!0},deleteFunction:Function,filter:{type:Function,default:()=>!0},setup:{type:Function,default:i=>i},messageDeleteSuccess:{type:String,default:"Löschen erfolgreich"},messagReallyDelete:{type:Function,default:()=>"Wirklich löschen?"},iconAdd:{type:String,default:E},iconRemove:{type:String,default:R},modelValue:{type:Array,default:void 0},inverted:Boolean,forbidEditing:Boolean,forbidDeletion:Boolean},emits:["update:modelValue"],setup(i,{expose:F,emit:D}){const t=i,c=D,g=I(()=>t.entries.filter(e=>t.filter(e)).map(e=>t.setup(e))),f=h(null),L=h(void 0);F({editId:L});const w=I(()=>t.modelValue===void 0?g.value:g.value.filter(e=>{var l;return((l=t.modelValue)==null?void 0:l.includes(e.id))===t.inverted}));async function $(e){if(t.deleteFunction===void 0){console.warn("Delete function was called but is undefined");return}t.deleteFunction(e).then(()=>{t.modelValue!==void 0&&c("update:modelValue",t.modelValue.filter(l=>l!==e)),H(t.messageDeleteSuccess,"success")}).catch(l=>(console.log(l),l))}async function B(e){if(e.id===void 0)return;const l={text:"Löschen",role:"destructive",icon:C,handler:x(e.id)};f.value!==null&&f.value.$el.closeSlidingItems(),await z(t.messagReallyDelete(e),l)}function x(e){return()=>{$(e)}}function m(e){t.modelValue!==void 0&&(t.inverted?c("update:modelValue",t.modelValue.filter(l=>l!==e)):c("update:modelValue",[...t.modelValue,e]))}return(e,l)=>(r(),s(n(G),{ref_key:"slidingList",ref:f},{default:o(()=>[k(e.$slots,"header"),(r(!0),q(b,null,N(w.value,(a,J)=>(r(),s(n(O),{key:a.id,ref_for:!0,ref:"slidingItem"},{default:o(()=>[k(e.$slots,"default",{object:a},()=>[d(n(T),null,{default:o(()=>[d(n(_),null,{default:o(()=>[u(W(a),1)]),_:2},1024)]),_:2},1024)]),!i.forbidEditing&&i.modelValue!==void 0?(r(),s(n(V),{key:0,side:"start",onIonSwipe:v=>m(a.id)},{default:o(()=>[i.inverted?(r(),s(n(p),{key:1,color:"warning",onClick:v=>m(a.id),expandable:""},{default:o(()=>[d(n(y),{icon:i.iconRemove,slot:"start"},null,8,["icon"]),u(" Enfernen ")]),_:2},1032,["onClick"])):(r(),s(n(p),{key:0,color:"success",onClick:v=>m(a.id),expandable:""},{default:o(()=>[d(n(y),{icon:i.iconAdd,slot:"start"},null,8,["icon"]),u(" Auswählen ")]),_:2},1032,["onClick"]))]),_:2},1032,["onIonSwipe"])):S("",!0),!i.forbidDeletion&&i.deleteFunction!==void 0?(r(),s(n(V),{key:1,side:"end"},{default:o(()=>[d(n(p),{color:"danger",onClick:v=>B(a)},{default:o(()=>[d(n(y),{icon:n(C),slot:"end"},null,8,["icon"]),u(" Löschen ")]),_:2},1032,["onClick"])]),_:2},1024)):S("",!0)]),_:2},1024))),128))]),_:3},512))}});export{P as _};
