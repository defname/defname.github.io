System.register(["./index-legacy-dNI7AN09.js","./helpers-legacy-AqRZ00pO.js"],(function(e,l){"use strict";var t,n,i,o,d,a,u,s,c,r,f,m,v,p,y,g,V,_,k,h,F,b,S,w,x,D,C;return{setters:[e=>{t=e.d,n=e.aF,i=e.aU,o=e.e,d=e.x,a=e.o,u=e.c,s=e.w,c=e.ai,r=e.g,f=e.R,m=e.F,v=e.f,p=e.I,y=e.Z,g=e.r,V=e.i,_=e.t,k=e.j,h=e.b,F=e.$,b=e.a0,S=e.n,w=e.l,x=e.V},e=>{D=e.a,C=e.p}],execute:function(){e("_",t({__name:"GenericList",props:{entries:{type:Array,required:!0,readonly:!0},deleteFunction:Function,filter:{type:Function,default:()=>!0},setup:{type:Function,default:e=>e},messageDeleteSuccess:{type:String,default:"Löschen erfolgreich"},messagReallyDelete:{type:Function,default:()=>"Wirklich löschen?"},iconAdd:{type:String,default:n},iconRemove:{type:String,default:i},modelValue:{type:Array,default:void 0},inverted:Boolean,forbidEditing:Boolean,forbidDeletion:Boolean},emits:["update:modelValue"],setup(e,{expose:l,emit:t}){const n=e,i=t,I=o((()=>n.entries.filter((e=>n.filter(e))).map((e=>n.setup(e))))),A=d(null);l({editId:d(void 0)});const L=o((()=>void 0===n.modelValue?I.value:I.value.filter((e=>{var l;return(null===(l=n.modelValue)||void 0===l?void 0:l.includes(e.id))===n.inverted}))));async function R(e){if(void 0===e.id)return;const l={text:"Löschen",role:"destructive",icon:x,handler:(t=e.id,()=>{!async function(e){void 0!==n.deleteFunction?n.deleteFunction(e).then((()=>{void 0!==n.modelValue&&i("update:modelValue",n.modelValue.filter((l=>l!==e))),C(n.messageDeleteSuccess,"success")})).catch((e=>(console.log(e),e))):console.warn("Delete function was called but is undefined")}(t)})};var t;null!==A.value&&A.value.$el.closeSlidingItems(),await D(n.messagReallyDelete(e),l)}function j(e){void 0!==n.modelValue&&(n.inverted?i("update:modelValue",n.modelValue.filter((l=>l!==e))):i("update:modelValue",[...n.modelValue,e]))}return(l,t)=>(a(),u(v(p),{ref_key:"slidingList",ref:A},{default:s((()=>[c(l.$slots,"header"),(a(!0),r(m,null,f(L.value,((t,n)=>(a(),u(v(y),{key:t.id,ref_for:!0,ref:"slidingItem"},{default:s((()=>[c(l.$slots,"default",{object:t},(()=>[h(v(g),null,{default:s((()=>[h(v(V),null,{default:s((()=>[k(_(t),1)])),_:2},1024)])),_:2},1024)])),e.forbidEditing||void 0===e.modelValue?w("",!0):(a(),u(v(F),{key:0,side:"start",onIonSwipe:e=>j(t.id)},{default:s((()=>[e.inverted?(a(),u(v(b),{key:1,color:"warning",onClick:e=>j(t.id),expandable:""},{default:s((()=>[h(v(S),{icon:e.iconRemove,slot:"start"},null,8,["icon"]),k(" Enfernen ")])),_:2},1032,["onClick"])):(a(),u(v(b),{key:0,color:"success",onClick:e=>j(t.id),expandable:""},{default:s((()=>[h(v(S),{icon:e.iconAdd,slot:"start"},null,8,["icon"]),k(" Auswählen ")])),_:2},1032,["onClick"]))])),_:2},1032,["onIonSwipe"])),e.forbidDeletion||void 0===e.deleteFunction?w("",!0):(a(),u(v(F),{key:1,side:"end"},{default:s((()=>[h(v(b),{color:"danger",onClick:e=>R(t)},{default:s((()=>[h(v(S),{icon:v(x),slot:"end"},null,8,["icon"]),k(" Löschen ")])),_:2},1032,["onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:3},512))}}))}}}));
