import{d as A,aI as R,aW as E,e as I,x as V,o as r,c as s,w as o,al as h,g as N,R as b,F as O,f as n,I as T,Z as W,r as _,i as q,t as G,j as u,b as d,$ as k,a0 as p,n as g,l as S,V as C}from"./index-iuBXx226.js";import{a as Z,p as z}from"./helpers-dC0WslIB.js";const M=A({__name:"GenericList",props:{entries:{type:Array,required:!0,readonly:!0},deleteFunction:Function,filter:{type:Function,default:()=>!0},setup:{type:Function,default:i=>i},messageDeleteSuccess:{type:String,default:"Löschen erfolgreich"},messagReallyDelete:{type:Function,default:()=>"Wirklich löschen?"},iconAdd:{type:String,default:R},iconRemove:{type:String,default:E},modelValue:{type:Array,default:void 0},inverted:Boolean,forbidEditing:Boolean,forbidDeletion:Boolean},emits:["update:modelValue"],setup(i,{expose:D,emit:F}){const t=i,c=F,y=I(()=>t.entries.filter(e=>t.filter(e)).map(e=>t.setup(e))),f=V(null),L=V(void 0);D({editId:L});const w=I(()=>t.modelValue===void 0?y.value:y.value.filter(e=>{var l;return((l=t.modelValue)==null?void 0:l.includes(e.id))===t.inverted}));async function $(e){if(t.deleteFunction===void 0){console.warn("Delete function was called but is undefined");return}t.deleteFunction(e).then(()=>{t.modelValue!==void 0&&c("update:modelValue",t.modelValue.filter(l=>l!==e)),z(t.messageDeleteSuccess,"success")}).catch(l=>(console.log(l),l))}async function x(e){if(e.id===void 0)return;const l={text:"Löschen",role:"destructive",icon:C,handler:B(e.id)};f.value!==null&&f.value.$el.closeSlidingItems(),await Z(t.messagReallyDelete(e),l)}function B(e){return()=>{$(e)}}function m(e){t.modelValue!==void 0&&(t.inverted?c("update:modelValue",t.modelValue.filter(l=>l!==e)):c("update:modelValue",[...t.modelValue,e]))}return(e,l)=>(r(),s(n(T),{ref_key:"slidingList",ref:f},{default:o(()=>[h(e.$slots,"header"),(r(!0),N(O,null,b(w.value,(a,H)=>(r(),s(n(W),{key:a.id,ref_for:!0,ref:"slidingItem"},{default:o(()=>[h(e.$slots,"default",{object:a},()=>[d(n(_),null,{default:o(()=>[d(n(q),null,{default:o(()=>[u(G(a),1)]),_:2},1024)]),_:2},1024)]),!i.forbidEditing&&i.modelValue!==void 0?(r(),s(n(k),{key:0,side:"start",onIonSwipe:v=>m(a.id)},{default:o(()=>[i.inverted?(r(),s(n(p),{key:1,color:"warning",onClick:v=>m(a.id),expandable:""},{default:o(()=>[d(n(g),{icon:i.iconRemove,slot:"start"},null,8,["icon"]),u(" Enfernen ")]),_:2},1032,["onClick"])):(r(),s(n(p),{key:0,color:"success",onClick:v=>m(a.id),expandable:""},{default:o(()=>[d(n(g),{icon:i.iconAdd,slot:"start"},null,8,["icon"]),u(" Auswählen ")]),_:2},1032,["onClick"]))]),_:2},1032,["onIonSwipe"])):S("",!0),!i.forbidDeletion&&i.deleteFunction!==void 0?(r(),s(n(k),{key:1,side:"end"},{default:o(()=>[d(n(p),{color:"danger",onClick:v=>x(a)},{default:o(()=>[d(n(g),{icon:n(C),slot:"end"},null,8,["icon"]),u(" Löschen ")]),_:2},1032,["onClick"])]),_:2},1024)):S("",!0)]),_:2},1024))),128))]),_:3},512))}});export{M as _};
