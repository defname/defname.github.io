System.register(["./index-legacy-oFp8G8Ab.js","./database-legacy-al1Sa8N6.js","./helpers-legacy-AWkUcU2B.js","./liveriskstree-legacy-bYbQc470.js"],(function(e,n){"use strict";var t,l,a,i,s,r,o,u,d,c,h,f,g,k,v,p,b,y,m,_,w,x,S,V,C,A,B,j,D,F,G,U,$,I,N,R,Z,E,L,O,T,W,q,z,H,J,K,M,P,Q,X;return{setters:[e=>{t=e._,l=e.t,a=e.d,i=e.x,s=e.e,r=e.o,o=e.g,u=e.b,d=e.f,c=e.a0,h=e.c,f=e.w,g=e.F,k=e.R,v=e.aJ,p=e.l,b=e.aK,y=e.r,m=e.n,_=e.aL,w=e.i,x=e.j,S=e.I,V=e.aM,C=e.aN,A=e.aO,B=e.a9,j=e.av,D=e.aa,F=e.ab,G=e.p,U=e.aP,$=e.a4,I=e.$,N=e.aQ,R=e.aR,Z=e.aS,E=e.aT,L=e.aU,O=e.aV,T=e.aW,W=e.aX,q=e.aY,z=e.aZ,H=e.a_},e=>{J=e.S,K=e.d,M=e.R},e=>{P=e.a,Q=e.p},e=>{X=e.l}],execute:function(){const n={props:{sector:{type:String,required:!0},short:Boolean},computed:{asString(){return this.sector===J.Access?this.short?"Z":"Zugang":this.sector===J.Environment?this.short?"U":"Umgebung":this.sector===J.Work?this.short?"A":"Arbeit":(console.warn("Unknown sector"),this.short?"?":"???")}}},Y=t(n,[["render",function(e,n,t,a,i,s){return l(s.asString)}]]);e("_",a({__name:"RiskCatalog",props:{sector:String,modelValue:Array,exclude:Array,inverted:Boolean,linkToFunction:{type:Function,default:e=>`/risks/${e.id}`}},emits:["update:modelValue"],setup(e,{emit:n}){const t=e,a=n,ee={},ne=[{text:"Abbrechen",role:"cancel"},{text:"Speichern",role:"submit"}],te=X,le=i(),ae=s((()=>{if(void 0!==le.value)return te.get(le.value)})),ie=s((()=>ae.value?ae.value.descr:"")),se={1:N,2:R,3:Z,4:E,5:L,6:O,7:T,8:W,9:q,10:z,11:_};async function re(e){if(void 0===e.id)return;const n={text:"Löschen",role:"destructive",icon:$,handler:(t=e.id,()=>{!async function(e){K.risks.where("id").equals(e).delete().then((()=>{Q("Gefährdung wurde aus der Datenbank gelöscht","success")})).catch((e=>{console.log(e)}))}(t)})};var t;null!==ee[e.id]&&ee[e.id].$el.close(),await P(`'${e.descr}' wirklich aus der Datenbank löschen?`,n)}function oe(e){void 0!==e&&void 0!==t.modelValue&&(t.modelValue.includes(e)?a("update:modelValue",t.modelValue.filter((n=>n!==e))):a("update:modelValue",[...t.modelValue,e]))}async function ue(e){void 0!==le.value&&(ee[le.value].$el.close(),"submit"==e.detail.role?(async function(e,n){""!==n?K.risks.update(e,{descr:n}).then((()=>{Q("Änderungen gespeichert","success")})).catch((()=>{Q("Beim Speichern ist ein Fehler aufgetreten","danger")})):Q("Die Beschreibung darf nicht leer sein!","danger")}(le.value,e.detail.data.values[0]),le.value=void 0):le.value=void 0)}return(n,a)=>(r(),o(g,null,[u(d(c),{isOpen:void 0!==le.value,header:"Beschreibung eingeben",buttons:ne,inputs:[{placeholder:"Beschreibung",value:ie.value}],"backdrop-dismiss":!0,onDidDismiss:ue},null,8,["isOpen","inputs"]),d(te)?(r(),h(d(v),{key:0},{default:f((()=>[(r(!0),o(g,null,k(d(te).categories,(n=>(r(),h(d(b),{key:n.id},{default:f((()=>[u(d(y),{slot:"header"},{default:f((()=>[u(d(m),{slot:"start",icon:n.id?se[n.id]:d(_)},null,8,["icon"]),u(d(w),null,{default:f((()=>[x(l(n.descr),1)])),_:2},1024)])),_:2},1024),u(d(S),{slot:"content"},{default:f((()=>[(r(!0),o(g,null,k(n.factors,(n=>(r(),h(d(V),{key:n.id},{default:f((()=>[u(d(C),null,{default:f((()=>[u(d(w),null,{default:f((()=>[x(l(n.descr),1)])),_:2},1024),n.id?(r(),h(d(m),{key:0,slot:"end",icon:d(A),color:"primary",onClick:e=>async function(e){if(void 0!==t.sector){const n=t.sector;return K.risks.add(new M("Neue Gefährdung",n,e))}(async()=>{const n=await H.create({header:"Neue Gefährdung",message:"In welchem Sektor besteht die Gefährung?",inputs:[{type:"radio",label:"Zugang",value:J.Access},{type:"radio",label:"Umgebung",value:J.Environment},{type:"radio",label:"Arbeit",value:J.Work}],buttons:[{text:"Abbrechen",role:"cancel"},{text:"Hinzufügen",role:"submit",handler:n=>K.risks.add(new M("Neue Gefährdung",n,e))}]});await n.present()})()}(n.id)},null,8,["icon","onClick"])):p("",!0)])),_:2},1024),(r(!0),o(g,null,k(n.risks,(n=>(r(),o(g,{key:n.id},[void 0!==e.exclude&&e.exclude.includes(n.id)||void 0!==e.modelValue&&e.modelValue.includes(n.id)!==e.inverted||e.sector&&n.sector!==e.sector?p("",!0):(r(),h(d(B),{key:0,ref_for:!0,ref:e=>ee[n.id]=e},{default:f((()=>[u(d(y),{"router-link":e.linkToFunction(n)},{default:f((()=>[u(d(w),null,{default:f((()=>[x(l(n.descr),1)])),_:2},1024),e.sector?p("",!0):(r(),h(d(j),{key:0,slot:"end"},{default:f((()=>[u(Y,{sector:n.sector},null,8,["sector"])])),_:2},1024))])),_:2},1032,["router-link"]),void 0!==e.modelValue?(r(),h(d(D),{key:0,side:"start",onIonSwipe:e=>oe(n.id)},{default:f((()=>[e.inverted?(r(),h(d(F),{key:1,color:"warning",onClick:e=>oe(n.id),expandable:""},{default:f((()=>[u(d(m),{icon:d(U),slot:"start"},null,8,["icon"]),x(" Enfernen ")])),_:2},1032,["onClick"])):(r(),h(d(F),{key:0,color:"success",onClick:e=>oe(n.id),expandable:""},{default:f((()=>[u(d(m),{icon:d(G),slot:"start"},null,8,["icon"]),x(" Auswählen ")])),_:2},1032,["onClick"]))])),_:2},1032,["onIonSwipe"])):p("",!0),u(d(D),{side:"end"},{default:f((()=>[u(d(F),{color:"danger",onClick:e=>re(n)},{default:f((()=>[u(d(m),{icon:d($),slot:"end"},null,8,["icon"]),x(" Löschen ")])),_:2},1032,["onClick"]),u(d(F),{onClick:e=>le.value=n.id},{default:f((()=>[u(d(m),{icon:d(I),slot:"end"},null,8,["icon"]),x(" Bearbeiten ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1536))],64)))),128))])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1})):p("",!0)],64))}}))}}}));
