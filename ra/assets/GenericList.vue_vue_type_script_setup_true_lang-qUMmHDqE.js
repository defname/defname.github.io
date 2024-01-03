import{d as A,as as E,aJ as R,e as I,G as h,o as r,c as s,w as o,ah as V,g as N,V as b,F as G,f as n,I as O,at as T,r as _,i as q,t as J,j as u,b as d,au as k,av as p,n as g,l as S,Y as C}from"./index-DYrAM6VV.js";import{a as W,p as Y}from"./helpers-ZGJup-tE.js";const M=A({__name:"GenericList",props:{entries:{type:Array,required:!0,readonly:!0},deleteFunction:Function,filter:{type:Function,default:()=>!0},setup:{type:Function,default:i=>i},messageDeleteSuccess:{type:String,default:"Löschen erfolgreich"},messagReallyDelete:{type:Function,default:()=>"Wirklich löschen?"},iconAdd:{type:String,default:E},iconRemove:{type:String,default:R},modelValue:{type:Array,default:void 0},inverted:Boolean,forbidEditing:Boolean,forbidDeletion:Boolean},emits:["update:modelValue"],setup(i,{expose:D,emit:F}){const t=i,c=F,y=I(()=>t.entries.filter(e=>t.filter(e)).map(e=>t.setup(e))),f=h(null),L=h(void 0);D({editId:L});const w=I(()=>t.modelValue===void 0?y.value:y.value.filter(e=>{var l;return((l=t.modelValue)==null?void 0:l.includes(e.id))===t.inverted}));async function B(e){if(t.deleteFunction===void 0){console.warn("Delete function was called but is undefined");return}t.deleteFunction(e).then(()=>{t.modelValue!==void 0&&c("update:modelValue",t.modelValue.filter(l=>l!==e)),Y(t.messageDeleteSuccess,"success")}).catch(l=>(console.log(l),l))}async function $(e){if(e.id===void 0)return;const l={text:"Löschen",role:"destructive",icon:C,handler:x(e.id)};f.value!==null&&f.value.$el.closeSlidingItems(),await W(t.messagReallyDelete(e),l)}function x(e){return()=>{B(e)}}function m(e){t.modelValue!==void 0&&(t.inverted?c("update:modelValue",t.modelValue.filter(l=>l!==e)):c("update:modelValue",[...t.modelValue,e]))}return(e,l)=>(r(),s(n(O),{ref_key:"slidingList",ref:f},{default:o(()=>[V(e.$slots,"header"),(r(!0),N(G,null,b(w.value,(a,z)=>(r(),s(n(T),{key:a.id,ref_for:!0,ref:"slidingItem"},{default:o(()=>[V(e.$slots,"default",{object:a},()=>[d(n(_),null,{default:o(()=>[d(n(q),null,{default:o(()=>[u(J(a),1)]),_:2},1024)]),_:2},1024)]),!i.forbidEditing&&i.modelValue!==void 0?(r(),s(n(k),{key:0,side:"start",onIonSwipe:v=>m(a.id)},{default:o(()=>[i.inverted?(r(),s(n(p),{key:1,color:"warning",onClick:v=>m(a.id),expandable:""},{default:o(()=>[d(n(g),{icon:i.iconRemove,slot:"start"},null,8,["icon"]),u(" Enfernen ")]),_:2},1032,["onClick"])):(r(),s(n(p),{key:0,color:"success",onClick:v=>m(a.id),expandable:""},{default:o(()=>[d(n(g),{icon:i.iconAdd,slot:"start"},null,8,["icon"]),u(" Auswählen ")]),_:2},1032,["onClick"]))]),_:2},1032,["onIonSwipe"])):S("",!0),!i.forbidDeletion&&i.deleteFunction!==void 0?(r(),s(n(k),{key:1,side:"end"},{default:o(()=>[d(n(p),{color:"danger",onClick:v=>$(a)},{default:o(()=>[d(n(g),{icon:n(C),slot:"end"},null,8,["icon"]),u(" Löschen ")]),_:2},1032,["onClick"])]),_:2},1024)):S("",!0)]),_:2},1024))),128))]),_:3},512))}});export{M as _};
