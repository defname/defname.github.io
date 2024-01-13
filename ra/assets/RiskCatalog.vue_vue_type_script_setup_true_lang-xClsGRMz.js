import{_ as J,t as A,d as K,x as M,e as N,o as l,g as k,b as a,f as e,ay as P,c as u,w as n,F as p,R as D,az as Q,l as y,aA as X,r as F,n as v,aB as G,i as B,j as f,I as Y,aC as ee,aD as te,aE as ne,Z as ae,ak as se,$ as T,a0 as I,p as oe,aF as le,V as L,aG as re,aH as ie,aI as ue,aJ as ce,aK as de,aL as fe,aM as me,aN as he,aO as ve,aP as ge,aQ as be,aR as ke}from"./index-evfwvyDu.js";import{S as g,d as C,R as O,a as pe,p as w}from"./helpers-6wXL42H8.js";import{l as ye}from"./liveriskstree-VAdNH536.js";const Ie={props:{sector:{type:String,required:!0},short:Boolean},computed:{asString(){return this.sector===g.Access?this.short?"Z":"Zugang":this.sector===g.Environment?this.short?"U":"Umgebung":this.sector===g.Work?this.short?"A":"Arbeit":(console.warn("Unknown sector"),this.short?"?":"???")}}};function Ce(s,_,c,S,b,x){return A(x.asString)}const we=J(Ie,[["render",Ce]]),Ve=K({__name:"RiskCatalog",props:{sector:String,modelValue:Array,exclude:Array,inverted:Boolean,linkToFunction:{type:Function,default:s=>"/risks/".concat(s.id)}},emits:["update:modelValue"],setup(s,{emit:_}){const c=s,S=_,b={},x=[{text:"Abbrechen",role:"cancel"},{text:"Speichern",role:"submit"}],V=ye,i=M(),R=N(()=>{if(i.value!==void 0)return V.get(i.value)}),E=N(()=>R.value?R.value.descr:""),U={1:ie,2:ue,3:ce,4:de,5:fe,6:me,7:he,8:ve,9:ge,10:be,11:G};async function Z(t){if(c.sector===void 0)(async()=>{await(await ke.create({header:"Neue Gefährdung",message:"In welchem Sektor besteht die Gefährung?",inputs:[{type:"radio",label:"Zugang",value:g.Access},{type:"radio",label:"Umgebung",value:g.Environment},{type:"radio",label:"Arbeit",value:g.Work}],buttons:[{text:"Abbrechen",role:"cancel"},{text:"Hinzufügen",role:"submit",handler:d=>C.risks.add(new O("Neue Gefährdung",d,t))}]})).present()})();else{const r=c.sector;return C.risks.add(new O("Neue Gefährdung",r,t))}}async function j(t){C.risks.where("id").equals(t).delete().then(()=>{w("Gefährdung wurde aus der Datenbank gelöscht","success")}).catch(r=>{console.log(r)})}async function q(t){if(t.id===void 0)return;const r={text:"Löschen",role:"destructive",icon:L,handler:z(t.id)};b[t.id]!==null&&b[t.id].$el.close(),await pe("'".concat(t.descr,"' wirklich aus der Datenbank löschen?"),r)}function z(t){return()=>{j(t)}}function $(t){t===void 0||c.modelValue===void 0||(c.modelValue.includes(t)?S("update:modelValue",c.modelValue.filter(r=>r!==t)):S("update:modelValue",[...c.modelValue,t]))}async function H(t,r){if(r===""){w("Die Beschreibung darf nicht leer sein!","danger");return}C.risks.update(t,{descr:r}).then(()=>{w("Änderungen gespeichert","success")}).catch(()=>{w("Beim Speichern ist ein Fehler aufgetreten","danger")})}async function W(t){if(i.value!==void 0){if(b[i.value].$el.close(),t.detail.role!="submit"){i.value=void 0;return}H(i.value,t.detail.data.values[0]),i.value=void 0}}return(t,r)=>(l(),k(p,null,[a(e(P),{isOpen:i.value!==void 0,header:"Beschreibung eingeben",buttons:x,inputs:[{placeholder:"Beschreibung",value:E.value}],"backdrop-dismiss":!0,onDidDismiss:W},null,8,["isOpen","inputs"]),e(V)?(l(),u(e(Q),{key:0},{default:n(()=>[(l(!0),k(p,null,D(e(V).categories,m=>(l(),u(e(X),{key:m.id},{default:n(()=>[a(e(F),{slot:"header"},{default:n(()=>[a(e(v),{slot:"start",icon:m.id?U[m.id]:e(G)},null,8,["icon"]),a(e(B),null,{default:n(()=>[f(A(m.descr),1)]),_:2},1024)]),_:2},1024),a(e(Y),{slot:"content"},{default:n(()=>[(l(!0),k(p,null,D(m.factors,d=>(l(),u(e(ee),{key:d.id},{default:n(()=>[a(e(te),null,{default:n(()=>[a(e(B),null,{default:n(()=>[f(A(d.descr),1)]),_:2},1024),d.id?(l(),u(e(v),{key:0,slot:"end",icon:e(ne),color:"primary",onClick:o=>Z(d.id)},null,8,["icon","onClick"])):y("",!0)]),_:2},1024),(l(!0),k(p,null,D(d.risks,o=>(l(),k(p,{key:o.id},[(s.exclude===void 0||!s.exclude.includes(o.id))&&(s.modelValue===void 0||s.modelValue.includes(o.id)===s.inverted)&&(!s.sector||o.sector===s.sector)?(l(),u(e(ae),{key:0,ref_for:!0,ref:h=>b[o.id]=h},{default:n(()=>[a(e(F),{"router-link":s.linkToFunction(o)},{default:n(()=>[a(e(B),null,{default:n(()=>[f(A(o.descr),1)]),_:2},1024),s.sector?y("",!0):(l(),u(e(se),{key:0,slot:"end"},{default:n(()=>[a(we,{sector:o.sector},null,8,["sector"])]),_:2},1024))]),_:2},1032,["router-link"]),s.modelValue!==void 0?(l(),u(e(T),{key:0,side:"start",onIonSwipe:h=>$(o.id)},{default:n(()=>[s.inverted?(l(),u(e(I),{key:1,color:"warning",onClick:h=>$(o.id),expandable:""},{default:n(()=>[a(e(v),{icon:e(le),slot:"start"},null,8,["icon"]),f(" Enfernen ")]),_:2},1032,["onClick"])):(l(),u(e(I),{key:0,color:"success",onClick:h=>$(o.id),expandable:""},{default:n(()=>[a(e(v),{icon:e(oe),slot:"start"},null,8,["icon"]),f(" Auswählen ")]),_:2},1032,["onClick"]))]),_:2},1032,["onIonSwipe"])):y("",!0),a(e(T),{side:"end"},{default:n(()=>[a(e(I),{color:"danger",onClick:h=>q(o)},{default:n(()=>[a(e(v),{icon:e(L),slot:"end"},null,8,["icon"]),f(" Löschen ")]),_:2},1032,["onClick"]),a(e(I),{onClick:h=>i.value=o.id},{default:n(()=>[a(e(v),{icon:e(re),slot:"end"},null,8,["icon"]),f(" Bearbeiten ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1536)):y("",!0)],64))),128))]),_:2},1024))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):y("",!0)],64))}});export{Ve as _};
