System.register(["./index-legacy-igOIciSO.js","./helpers-legacy-c5WTGrnR.js"],(function(e,l){"use strict";var t,n,i,o,d,a,u,s,c,r,f,m,p,v,y,g,k,_,h,V,F,b,S,w,D,x,C;return{setters:[e=>{t=e.d,n=e.ao,i=e.aF,o=e.b,d=e.G,a=e.o,u=e.c,s=e.w,c=e.E,r=e.f,f=e.$,m=e.F,p=e.e,v=e.I,y=e.ap,g=e.q,k=e.h,_=e.t,h=e.i,V=e.a,F=e.aq,b=e.ar,S=e.m,w=e.k,D=e.ae},e=>{x=e.a,C=e.p}],execute:function(){e("_",t({__name:"GenericList",props:{entries:{type:Array,required:!0,readonly:!0},deleteFunction:Function,filter:{type:Function,default:()=>!0},setup:{type:Function,default:e=>e},messageDeleteSuccess:{type:String,default:"Löschen erfolgreich"},messagReallyDelete:{type:Function,default:()=>"Wirklich löschen?"},iconAdd:{type:String,default:n},iconRemove:{type:String,default:i},modelValue:{type:Array,default:void 0},inverted:Boolean,forbidEditing:Boolean,forbidDeletion:Boolean},emits:["update:modelValue"],setup(e,{expose:l,emit:t}){const n=e,i=t,I=o((()=>n.entries.filter((e=>n.filter(e))).map((e=>n.setup(e))))),A=d(null);l({editId:d(void 0)});const L=o((()=>void 0===n.modelValue?I.value:I.value.filter((e=>{var l;return(null===(l=n.modelValue)||void 0===l?void 0:l.includes(e.id))===n.inverted}))));async function E(e){if(void 0===e.id)return;const l={text:"Löschen",role:"destructive",icon:D,handler:(t=e.id,()=>{!async function(e){void 0!==n.deleteFunction?n.deleteFunction(e).then((()=>{void 0!==n.modelValue&&i("update:modelValue",n.modelValue.filter((l=>l!==e))),C(n.messageDeleteSuccess,"success")})).catch((e=>(console.log(e),e))):console.warn("Delete function was called but is undefined")}(t)})};var t;null!==A.value&&A.value.$el.closeSlidingItems(),await x(n.messagReallyDelete(e),l)}function R(e){void 0!==n.modelValue&&(n.inverted?i("update:modelValue",n.modelValue.filter((l=>l!==e))):i("update:modelValue",[...n.modelValue,e]))}return(l,t)=>(a(),u(p(v),{ref_key:"slidingList",ref:A},{default:s((()=>[c(l.$slots,"header"),(a(!0),r(m,null,f(L.value,((t,n)=>(a(),u(p(y),{key:t.id,ref_for:!0,ref:"slidingItem"},{default:s((()=>[c(l.$slots,"default",{object:t},(()=>[V(p(g),null,{default:s((()=>[V(p(k),null,{default:s((()=>[h(_(t),1)])),_:2},1024)])),_:2},1024)])),e.forbidEditing||void 0===e.modelValue?w("",!0):(a(),u(p(F),{key:0,side:"start",onIonSwipe:e=>R(t.id)},{default:s((()=>[e.inverted?(a(),u(p(b),{key:1,color:"warning",onClick:e=>R(t.id),expandable:""},{default:s((()=>[V(p(S),{icon:e.iconRemove,slot:"start"},null,8,["icon"]),h(" Enfernen ")])),_:2},1032,["onClick"])):(a(),u(p(b),{key:0,color:"success",onClick:e=>R(t.id),expandable:""},{default:s((()=>[V(p(S),{icon:e.iconAdd,slot:"start"},null,8,["icon"]),h(" Auswählen ")])),_:2},1032,["onClick"]))])),_:2},1032,["onIonSwipe"])),e.forbidDeletion||void 0===e.deleteFunction?w("",!0):(a(),u(p(F),{key:1,side:"end"},{default:s((()=>[V(p(b),{color:"danger",onClick:e=>E(t)},{default:s((()=>[V(p(S),{icon:p(D),slot:"end"},null,8,["icon"]),h(" Löschen ")])),_:2},1032,["onClick"])])),_:2},1024))])),_:2},1024)))),128))])),_:3},512))}}))}}}));
