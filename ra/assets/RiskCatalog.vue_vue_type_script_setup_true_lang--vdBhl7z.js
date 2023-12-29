import{_ as J,t as A,d as K,G as M,e as R,o as l,g as p,b as a,f as e,al as P,c as u,w as n,F as k,a2 as $,am as Q,l as y,an as X,r as F,n as v,ao as N,i as B,j as f,I as Y,ap as ee,aq as te,ar as ne,as as ae,ai as se,at as T,au as I,p as oe,av as le,af as E,z as re,aw as ie,ax as ue,ay as ce,az as de,aA as fe,aB as me,aC as he,aD as ve,aE as ge,aF as be,aG as pe}from"./index-ANPSqhs9.js";import{S as g,d as w,R as L,a as ke,p as C}from"./helpers-1JCucRE1.js";import{l as ye}from"./liveriskstree-1JQTezqS.js";const Ie={props:{sector:{type:String,required:!0},short:Boolean},computed:{asString(){return this.sector===g.Access?this.short?"Z":"Zugang":this.sector===g.Environment?this.short?"U":"Umgebung":this.sector===g.Work?this.short?"A":"Arbeit":(console.warn("Unknown sector"),this.short?"?":"???")}}};function we(s,_,c,S,b,x){return A(x.asString)}const Ce=J(Ie,[["render",we]]),De=K({__name:"RiskCatalog",props:{sector:String,modelValue:Array,exclude:Array,inverted:Boolean,linkToFunction:{type:Function,default:s=>"/risks/".concat(s.id)}},emits:["update:modelValue"],setup(s,{emit:_}){const c=s,S=_,b={},x=[{text:"Abbrechen",role:"cancel"},{text:"Speichern",role:"submit"}],D=ye,i=M(),G=R(()=>{if(i.value!==void 0)return D.get(i.value)}),O=R(()=>G.value?G.value.descr:""),U={1:ie,2:ue,3:ce,4:de,5:fe,6:me,7:he,8:ve,9:ge,10:be,11:N};async function q(t){if(c.sector===void 0)(async()=>{await(await pe.create({header:"Neue Gefährdung",message:"In welchem Sektor besteht die Gefährung?",inputs:[{type:"radio",label:"Zugang",value:g.Access},{type:"radio",label:"Umgebung",value:g.Environment},{type:"radio",label:"Arbeit",value:g.Work}],buttons:[{text:"Abbrechen",role:"cancel"},{text:"Hinzufügen",role:"submit",handler:d=>w.risks.add(new L("Neue Gefährdung",d,t))}]})).present()})();else{const r=c.sector;return w.risks.add(new L("Neue Gefährdung",r,t))}}async function z(t){w.risks.where("id").equals(t).delete().then(()=>{C("Gefährdung wurde aus der Datenbank gelöscht","success")}).catch(r=>{console.log(r)})}async function Z(t){if(t.id===void 0)return;const r={text:"Löschen",role:"destructive",icon:E,handler:j(t.id)};b[t.id]!==null&&b[t.id].$el.close(),await ke("'".concat(t.descr,"' wirklich aus der Datenbank löschen?"),r)}function j(t){return()=>{z(t)}}function V(t){t===void 0||c.modelValue===void 0||(c.modelValue.includes(t)?S("update:modelValue",c.modelValue.filter(r=>r!==t)):S("update:modelValue",[...c.modelValue,t]))}async function W(t,r){if(r===""){C("Die Beschreibung darf nicht leer sein!","danger");return}w.risks.update(t,{descr:r}).then(()=>{C("Änderungen gespeichert","success")}).catch(()=>{C("Beim Speichern ist ein Fehler aufgetreten","danger")})}async function H(t){if(i.value!==void 0){if(b[i.value].$el.close(),t.detail.role!="submit"){i.value=void 0;return}W(i.value,t.detail.data.values[0]),i.value=void 0}}return(t,r)=>(l(),p(k,null,[a(e(P),{isOpen:i.value!==void 0,header:"Beschreibung eingeben",buttons:x,inputs:[{placeholder:"Beschreibung",value:O.value}],"backdrop-dismiss":!0,onDidDismiss:H},null,8,["isOpen","inputs"]),e(D)?(l(),u(e(Q),{key:0},{default:n(()=>[(l(!0),p(k,null,$(e(D).categories,m=>(l(),u(e(X),{key:m.id},{default:n(()=>[a(e(F),{slot:"header"},{default:n(()=>[a(e(v),{slot:"start",icon:m.id?U[m.id]:e(N)},null,8,["icon"]),a(e(B),null,{default:n(()=>[f(A(m.descr),1)]),_:2},1024)]),_:2},1024),a(e(Y),{slot:"content"},{default:n(()=>[(l(!0),p(k,null,$(m.factors,d=>(l(),u(e(ee),{key:d.id},{default:n(()=>[a(e(te),null,{default:n(()=>[a(e(B),null,{default:n(()=>[f(A(d.descr),1)]),_:2},1024),d.id?(l(),u(e(v),{key:0,slot:"end",icon:e(ne),color:"primary",onClick:o=>q(d.id)},null,8,["icon","onClick"])):y("",!0)]),_:2},1024),(l(!0),p(k,null,$(d.risks,o=>(l(),p(k,{key:o.id},[(s.exclude===void 0||!s.exclude.includes(o.id))&&(s.modelValue===void 0||s.modelValue.includes(o.id)===s.inverted)&&(!s.sector||o.sector===s.sector)?(l(),u(e(ae),{key:0,ref_for:!0,ref:h=>b[o.id]=h},{default:n(()=>[a(e(F),{"router-link":s.linkToFunction(o)},{default:n(()=>[a(e(B),null,{default:n(()=>[f(A(o.descr),1)]),_:2},1024),s.sector?y("",!0):(l(),u(e(se),{key:0,slot:"end"},{default:n(()=>[a(Ce,{sector:o.sector},null,8,["sector"])]),_:2},1024))]),_:2},1032,["router-link"]),s.modelValue!==void 0?(l(),u(e(T),{key:0,side:"start",onIonSwipe:h=>V(o.id)},{default:n(()=>[s.inverted?(l(),u(e(I),{key:1,color:"warning",onClick:h=>V(o.id),expandable:""},{default:n(()=>[a(e(v),{icon:e(le),slot:"start"},null,8,["icon"]),f(" Enfernen ")]),_:2},1032,["onClick"])):(l(),u(e(I),{key:0,color:"success",onClick:h=>V(o.id),expandable:""},{default:n(()=>[a(e(v),{icon:e(oe),slot:"start"},null,8,["icon"]),f(" Auswählen ")]),_:2},1032,["onClick"]))]),_:2},1032,["onIonSwipe"])):y("",!0),a(e(T),{side:"end"},{default:n(()=>[a(e(I),{color:"danger",onClick:h=>Z(o)},{default:n(()=>[a(e(v),{icon:e(E),slot:"end"},null,8,["icon"]),f(" Löschen ")]),_:2},1032,["onClick"]),a(e(I),{onClick:h=>i.value=o.id},{default:n(()=>[a(e(v),{icon:e(re),slot:"end"},null,8,["icon"]),f(" Bearbeiten ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1536)):y("",!0)],64))),128))]),_:2},1024))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):y("",!0)],64))}});export{De as _};
