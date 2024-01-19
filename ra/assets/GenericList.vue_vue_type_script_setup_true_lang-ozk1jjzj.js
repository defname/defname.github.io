import{d as A,aL as R,aY as E,e as I,x as h,o as r,c as s,w as o,at as k,g as b,R as N,F as O,f as n,I as T,aa as _,r as q,i as G,t as W,j as u,b as d,ab as V,ac as p,n as g,l as S,a5 as C}from"./index-MjQ2o11G.js";import{a as Y,p as z}from"./helpers-67hrFqte.js";const M=A({__name:"GenericList",props:{entries:{type:Array,required:!0,readonly:!0},deleteFunction:Function,filter:{type:Function,default:()=>!0},setup:{type:Function,default:i=>i},messageDeleteSuccess:{type:String,default:"Löschen erfolgreich"},messagReallyDelete:{type:Function,default:()=>"Wirklich löschen?"},iconAdd:{type:String,default:R},iconRemove:{type:String,default:E},modelValue:{type:Array,default:void 0},inverted:Boolean,forbidEditing:Boolean,forbidDeletion:Boolean},emits:["update:modelValue"],setup(i,{expose:D,emit:F}){const t=i,c=F,y=I(()=>t.entries.filter(e=>t.filter(e)).map(e=>t.setup(e))),f=h(null),L=h(void 0);D({editId:L});const w=I(()=>t.modelValue===void 0?y.value:y.value.filter(e=>{var l;return((l=t.modelValue)==null?void 0:l.includes(e.id))===t.inverted}));async function x(e){if(t.deleteFunction===void 0){console.warn("Delete function was called but is undefined");return}t.deleteFunction(e).then(()=>{t.modelValue!==void 0&&c("update:modelValue",t.modelValue.filter(l=>l!==e)),z(t.messageDeleteSuccess,"success")}).catch(l=>(console.log(l),l))}async function B(e){if(e.id===void 0)return;const l={text:"Löschen",role:"destructive",icon:C,handler:$(e.id)};f.value!==null&&f.value.$el.closeSlidingItems(),await Y(t.messagReallyDelete(e),l)}function $(e){return()=>{x(e)}}function m(e){t.modelValue!==void 0&&(t.inverted?c("update:modelValue",t.modelValue.filter(l=>l!==e)):c("update:modelValue",[...t.modelValue,e]))}return(e,l)=>(r(),s(n(T),{ref_key:"slidingList",ref:f},{default:o(()=>[k(e.$slots,"header"),(r(!0),b(O,null,N(w.value,(a,H)=>(r(),s(n(_),{key:a.id,ref_for:!0,ref:"slidingItem"},{default:o(()=>[k(e.$slots,"default",{object:a},()=>[d(n(q),null,{default:o(()=>[d(n(G),null,{default:o(()=>[u(W(a),1)]),_:2},1024)]),_:2},1024)]),!i.forbidEditing&&i.modelValue!==void 0?(r(),s(n(V),{key:0,side:"start",onIonSwipe:v=>m(a.id)},{default:o(()=>[i.inverted?(r(),s(n(p),{key:1,color:"warning",onClick:v=>m(a.id),expandable:""},{default:o(()=>[d(n(g),{icon:i.iconRemove,slot:"start"},null,8,["icon"]),u(" Enfernen ")]),_:2},1032,["onClick"])):(r(),s(n(p),{key:0,color:"success",onClick:v=>m(a.id),expandable:""},{default:o(()=>[d(n(g),{icon:i.iconAdd,slot:"start"},null,8,["icon"]),u(" Auswählen ")]),_:2},1032,["onClick"]))]),_:2},1032,["onIonSwipe"])):S("",!0),!i.forbidDeletion&&i.deleteFunction!==void 0?(r(),s(n(V),{key:1,side:"end"},{default:o(()=>[d(n(p),{color:"danger",onClick:v=>B(a)},{default:o(()=>[d(n(g),{icon:n(C),slot:"end"},null,8,["icon"]),u(" Löschen ")]),_:2},1032,["onClick"])]),_:2},1024)):S("",!0)]),_:2},1024))),128))]),_:3},512))}});export{M as _};
