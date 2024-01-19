import{_ as J,t as S,d as K,x as M,e as N,o as l,g as p,b as a,f as e,a0 as P,c as u,w as n,F as k,R as _,aJ as Q,l as y,aK as X,r as T,n as v,aL as F,i as D,j as f,I as Y,aM as ee,aN as te,aO as ne,a9 as ae,av as se,aa as G,ab as I,p as oe,aP as le,a4 as L,$ as re,aQ as ie,aR as ue,aS as ce,aT as de,aU as fe,aV as me,aW as he,aX as ve,aY as ge,aZ as be,a_ as pe}from"./index-xm7OlJwR.js";import{S as g,d as w,R as O}from"./database-y4SrtzQs.js";import{a as ke,p as C}from"./helpers-IDuM_-et.js";import{l as ye}from"./liveriskstree-OUGTu9yV.js";const Ie={props:{sector:{type:String,required:!0},short:Boolean},computed:{asString(){return this.sector===g.Access?this.short?"Z":"Zugang":this.sector===g.Environment?this.short?"U":"Umgebung":this.sector===g.Work?this.short?"A":"Arbeit":(console.warn("Unknown sector"),this.short?"?":"???")}}};function we(s,B,c,x,b,A){return S(A.asString)}const Ce=J(Ie,[["render",we]]),$e=K({__name:"RiskCatalog",props:{sector:String,modelValue:Array,exclude:Array,inverted:Boolean,linkToFunction:{type:Function,default:s=>"/risks/".concat(s.id)}},emits:["update:modelValue"],setup(s,{emit:B}){const c=s,x=B,b={},A=[{text:"Abbrechen",role:"cancel"},{text:"Speichern",role:"submit"}],V=ye,i=M(),R=N(()=>{if(i.value!==void 0)return V.get(i.value)}),U=N(()=>R.value?R.value.descr:""),E={1:ie,2:ue,3:ce,4:de,5:fe,6:me,7:he,8:ve,9:ge,10:be,11:F};async function Z(t){if(c.sector===void 0)(async()=>{await(await pe.create({header:"Neue Gefährdung",message:"In welchem Sektor besteht die Gefährung?",inputs:[{type:"radio",label:"Zugang",value:g.Access},{type:"radio",label:"Umgebung",value:g.Environment},{type:"radio",label:"Arbeit",value:g.Work}],buttons:[{text:"Abbrechen",role:"cancel"},{text:"Hinzufügen",role:"submit",handler:d=>w.risks.add(new O("Neue Gefährdung",d,t))}]})).present()})();else{const r=c.sector;return w.risks.add(new O("Neue Gefährdung",r,t))}}async function W(t){w.risks.where("id").equals(t).delete().then(()=>{C("Gefährdung wurde aus der Datenbank gelöscht","success")}).catch(r=>{console.log(r)})}async function j(t){if(t.id===void 0)return;const r={text:"Löschen",role:"destructive",icon:L,handler:q(t.id)};b[t.id]!==null&&b[t.id].$el.close(),await ke("'".concat(t.descr,"' wirklich aus der Datenbank löschen?"),r)}function q(t){return()=>{W(t)}}function $(t){t===void 0||c.modelValue===void 0||(c.modelValue.includes(t)?x("update:modelValue",c.modelValue.filter(r=>r!==t)):x("update:modelValue",[...c.modelValue,t]))}async function z(t,r){if(r===""){C("Die Beschreibung darf nicht leer sein!","danger");return}w.risks.update(t,{descr:r}).then(()=>{C("Änderungen gespeichert","success")}).catch(()=>{C("Beim Speichern ist ein Fehler aufgetreten","danger")})}async function H(t){if(i.value!==void 0){if(b[i.value].$el.close(),t.detail.role!="submit"){i.value=void 0;return}z(i.value,t.detail.data.values[0]),i.value=void 0}}return(t,r)=>(l(),p(k,null,[a(e(P),{isOpen:i.value!==void 0,header:"Beschreibung eingeben",buttons:A,inputs:[{placeholder:"Beschreibung",value:U.value}],"backdrop-dismiss":!0,onDidDismiss:H},null,8,["isOpen","inputs"]),e(V)?(l(),u(e(Q),{key:0},{default:n(()=>[(l(!0),p(k,null,_(e(V).categories,m=>(l(),u(e(X),{key:m.id},{default:n(()=>[a(e(T),{slot:"header"},{default:n(()=>[a(e(v),{slot:"start",icon:m.id?E[m.id]:e(F)},null,8,["icon"]),a(e(D),null,{default:n(()=>[f(S(m.descr),1)]),_:2},1024)]),_:2},1024),a(e(Y),{slot:"content"},{default:n(()=>[(l(!0),p(k,null,_(m.factors,d=>(l(),u(e(ee),{key:d.id},{default:n(()=>[a(e(te),null,{default:n(()=>[a(e(D),null,{default:n(()=>[f(S(d.descr),1)]),_:2},1024),d.id?(l(),u(e(v),{key:0,slot:"end",icon:e(ne),color:"primary",onClick:o=>Z(d.id)},null,8,["icon","onClick"])):y("",!0)]),_:2},1024),(l(!0),p(k,null,_(d.risks,o=>(l(),p(k,{key:o.id},[(s.exclude===void 0||!s.exclude.includes(o.id))&&(s.modelValue===void 0||s.modelValue.includes(o.id)===s.inverted)&&(!s.sector||o.sector===s.sector)?(l(),u(e(ae),{key:0,ref_for:!0,ref:h=>b[o.id]=h},{default:n(()=>[a(e(T),{"router-link":s.linkToFunction(o)},{default:n(()=>[a(e(D),null,{default:n(()=>[f(S(o.descr),1)]),_:2},1024),s.sector?y("",!0):(l(),u(e(se),{key:0,slot:"end"},{default:n(()=>[a(Ce,{sector:o.sector},null,8,["sector"])]),_:2},1024))]),_:2},1032,["router-link"]),s.modelValue!==void 0?(l(),u(e(G),{key:0,side:"start",onIonSwipe:h=>$(o.id)},{default:n(()=>[s.inverted?(l(),u(e(I),{key:1,color:"warning",onClick:h=>$(o.id),expandable:""},{default:n(()=>[a(e(v),{icon:e(le),slot:"start"},null,8,["icon"]),f(" Enfernen ")]),_:2},1032,["onClick"])):(l(),u(e(I),{key:0,color:"success",onClick:h=>$(o.id),expandable:""},{default:n(()=>[a(e(v),{icon:e(oe),slot:"start"},null,8,["icon"]),f(" Auswählen ")]),_:2},1032,["onClick"]))]),_:2},1032,["onIonSwipe"])):y("",!0),a(e(G),{side:"end"},{default:n(()=>[a(e(I),{color:"danger",onClick:h=>j(o)},{default:n(()=>[a(e(v),{icon:e(L),slot:"end"},null,8,["icon"]),f(" Löschen ")]),_:2},1032,["onClick"]),a(e(I),{onClick:h=>i.value=o.id},{default:n(()=>[a(e(v),{icon:e(re),slot:"end"},null,8,["icon"]),f(" Bearbeiten ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1536)):y("",!0)],64))),128))]),_:2},1024))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):y("",!0)],64))}});export{$e as _};
