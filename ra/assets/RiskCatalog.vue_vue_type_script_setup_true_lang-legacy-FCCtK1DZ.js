System.register(["./index-legacy-RecDmhR6.js","./helpers-legacy-K7uhpvGb.js","./liveriskstree-legacy-81IEh2A8.js"],(function(e,n){"use strict";var t,l,i,a,r,o,s,u,d,c,h,f,g,k,v,p,m,y,b,_,w,x,C,V,A,S,B,G,D,F,j,E,I,U,$,q,z,N,Z,H,L,O,R,T,W,Y,J,K,M,P,Q;return{setters:[e=>{t=e._,l=e.t,i=e.d,a=e.G,r=e.e,o=e.o,s=e.g,u=e.b,d=e.f,c=e.am,h=e.c,f=e.w,g=e.F,k=e.V,v=e.an,p=e.l,m=e.ao,y=e.r,b=e.n,_=e.ap,w=e.i,x=e.j,C=e.I,V=e.aq,A=e.ar,S=e.as,B=e.at,G=e.aj,D=e.au,F=e.av,j=e.p,E=e.aw,I=e.Y,U=e.z,$=e.ax,q=e.ay,z=e.az,N=e.aA,Z=e.aB,H=e.aC,L=e.aD,O=e.aE,R=e.aF,T=e.aG,W=e.aH},e=>{Y=e.S,J=e.d,K=e.R,M=e.a,P=e.p},e=>{Q=e.l}],execute:function(){const n={props:{sector:{type:String,required:!0},short:Boolean},computed:{asString(){return this.sector===Y.Access?this.short?"Z":"Zugang":this.sector===Y.Environment?this.short?"U":"Umgebung":this.sector===Y.Work?this.short?"A":"Arbeit":(console.warn("Unknown sector"),this.short?"?":"???")}}},X=t(n,[["render",function(e,n,t,i,a,r){return l(r.asString)}]]);e("_",i({__name:"RiskCatalog",props:{sector:String,modelValue:Array,exclude:Array,inverted:Boolean,linkToFunction:{type:Function,default:e=>`/risks/${e.id}`}},emits:["update:modelValue"],setup(e,{emit:n}){const t=e,i=n,ee={},ne=[{text:"Abbrechen",role:"cancel"},{text:"Speichern",role:"submit"}],te=Q,le=a(),ie=r((()=>{if(void 0!==le.value)return te.get(le.value)})),ae=r((()=>ie.value?ie.value.descr:"")),re={1:$,2:q,3:z,4:N,5:Z,6:H,7:L,8:O,9:R,10:T,11:_};async function oe(e){if(void 0===e.id)return;const n={text:"Löschen",role:"destructive",icon:I,handler:(t=e.id,()=>{!async function(e){J.risks.where("id").equals(e).delete().then((()=>{P("Gefährdung wurde aus der Datenbank gelöscht","success")})).catch((e=>{console.log(e)}))}(t)})};var t;null!==ee[e.id]&&ee[e.id].$el.close(),await M(`'${e.descr}' wirklich aus der Datenbank löschen?`,n)}function se(e){void 0!==e&&void 0!==t.modelValue&&(t.modelValue.includes(e)?i("update:modelValue",t.modelValue.filter((n=>n!==e))):i("update:modelValue",[...t.modelValue,e]))}async function ue(e){void 0!==le.value&&(ee[le.value].$el.close(),"submit"==e.detail.role?(async function(e,n){""!==n?J.risks.update(e,{descr:n}).then((()=>{P("Änderungen gespeichert","success")})).catch((()=>{P("Beim Speichern ist ein Fehler aufgetreten","danger")})):P("Die Beschreibung darf nicht leer sein!","danger")}(le.value,e.detail.data.values[0]),le.value=void 0):le.value=void 0)}return(n,i)=>(o(),s(g,null,[u(d(c),{isOpen:void 0!==le.value,header:"Beschreibung eingeben",buttons:ne,inputs:[{placeholder:"Beschreibung",value:ae.value}],"backdrop-dismiss":!0,onDidDismiss:ue},null,8,["isOpen","inputs"]),d(te)?(o(),h(d(v),{key:0},{default:f((()=>[(o(!0),s(g,null,k(d(te).categories,(n=>(o(),h(d(m),{key:n.id},{default:f((()=>[u(d(y),{slot:"header"},{default:f((()=>[u(d(b),{slot:"start",icon:n.id?re[n.id]:d(_)},null,8,["icon"]),u(d(w),null,{default:f((()=>[x(l(n.descr),1)])),_:2},1024)])),_:2},1024),u(d(C),{slot:"content"},{default:f((()=>[(o(!0),s(g,null,k(n.factors,(n=>(o(),h(d(V),{key:n.id},{default:f((()=>[u(d(A),null,{default:f((()=>[u(d(w),null,{default:f((()=>[x(l(n.descr),1)])),_:2},1024),n.id?(o(),h(d(b),{key:0,slot:"end",icon:d(S),color:"primary",onClick:e=>async function(e){if(void 0!==t.sector){const n=t.sector;return J.risks.add(new K("Neue Gefährdung",n,e))}(async()=>{const n=await W.create({header:"Neue Gefährdung",message:"In welchem Sektor besteht die Gefährung?",inputs:[{type:"radio",label:"Zugang",value:Y.Access},{type:"radio",label:"Umgebung",value:Y.Environment},{type:"radio",label:"Arbeit",value:Y.Work}],buttons:[{text:"Abbrechen",role:"cancel"},{text:"Hinzufügen",role:"submit",handler:n=>J.risks.add(new K("Neue Gefährdung",n,e))}]});await n.present()})()}(n.id)},null,8,["icon","onClick"])):p("",!0)])),_:2},1024),(o(!0),s(g,null,k(n.risks,(n=>(o(),s(g,{key:n.id},[void 0!==e.exclude&&e.exclude.includes(n.id)||void 0!==e.modelValue&&e.modelValue.includes(n.id)!==e.inverted||e.sector&&n.sector!==e.sector?p("",!0):(o(),h(d(B),{key:0,ref_for:!0,ref:e=>ee[n.id]=e},{default:f((()=>[u(d(y),{"router-link":e.linkToFunction(n)},{default:f((()=>[u(d(w),null,{default:f((()=>[x(l(n.descr),1)])),_:2},1024),e.sector?p("",!0):(o(),h(d(G),{key:0,slot:"end"},{default:f((()=>[u(X,{sector:n.sector},null,8,["sector"])])),_:2},1024))])),_:2},1032,["router-link"]),void 0!==e.modelValue?(o(),h(d(D),{key:0,side:"start",onIonSwipe:e=>se(n.id)},{default:f((()=>[e.inverted?(o(),h(d(F),{key:1,color:"warning",onClick:e=>se(n.id),expandable:""},{default:f((()=>[u(d(b),{icon:d(E),slot:"start"},null,8,["icon"]),x(" Enfernen ")])),_:2},1032,["onClick"])):(o(),h(d(F),{key:0,color:"success",onClick:e=>se(n.id),expandable:""},{default:f((()=>[u(d(b),{icon:d(j),slot:"start"},null,8,["icon"]),x(" Auswählen ")])),_:2},1032,["onClick"]))])),_:2},1032,["onIonSwipe"])):p("",!0),u(d(D),{side:"end"},{default:f((()=>[u(d(F),{color:"danger",onClick:e=>oe(n)},{default:f((()=>[u(d(b),{icon:d(I),slot:"end"},null,8,["icon"]),x(" Löschen ")])),_:2},1032,["onClick"]),u(d(F),{onClick:e=>le.value=n.id},{default:f((()=>[u(d(b),{icon:d(U),slot:"end"},null,8,["icon"]),x(" Bearbeiten ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1536))],64)))),128))])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1})):p("",!0)],64))}}))}}}));
