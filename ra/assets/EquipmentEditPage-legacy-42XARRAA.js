System.register(["./TemplateGenericEditPage-legacy-1vQAcaKW.js","./index-legacy-3VNLEERe.js","./helpers-legacy-1KvUtVUY.js","./RiskList.vue_vue_type_script_setup_true_lang-legacy-XreQ_J64.js","./GenericEditModal-legacy-33GesDgU.js","./RiskCatalog.vue_vue_type_script_setup_true_lang-legacy-2Ga3t2P-.js","./RiskListItem-legacy-NQOZLhKt.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-HleU9TYh.js","./liveriskstree-legacy-QTQd1eUd.js","./livequery-legacy-gju75Y6n.js"],(function(e,t){"use strict";var i,s,n,a,u,l,d,o,r,c,m,p,h,g,f,_,k,q,v,b,y,R,V,j,w,I;return{setters:[e=>{i=e.T},e=>{s=e.I,n=e.r,a=e.i,u=e.h,l=e.D,d=e.k,o=e._,r=e.E,c=e.o,m=e.g,p=e.b,h=e.w,g=e.j,f=e.F,_=e.l,k=e.d,q=e.u,v=e.c,b=e.S,y=e.f},e=>{R=e.d,V=e.p},e=>{j=e._},e=>{w=e.G},e=>{I=e._},null,null,null,null],execute:function(){const t={components:{IonList:s,IonItem:n,IonLabel:a,IonListHeader:u,IonInput:l,RiskList:j,RiskCatalog:I,GenericEditModal:w,IonButton:d},emits:["hasSaved","hasAdded"],props:{id:{type:Number},createNew:Boolean,defaultValues:{type:Object,default:{descr:"",tags:[],causeRisks:[]}}},data:()=>({equipment:void 0,addCausedRisks:!1}),methods:{loadFromDb(){void 0!==this.id&&R.equipment.get(this.id).then((e=>{void 0!==e?this.equipment=e:V("Es existiert keine Ausrüstung mit der ID "+this.id+" in der Datenbank.","danger")}))},saveToDb(){if(void 0===this.equipment)return void V("Etwas ist schief gelaufen.");if(""===this.equipment.descr)return void V("Die Beschreibung darf nicht leer sein.");const e={descr:this.equipment.descr,tags:[...this.equipment.tags],causeRisks:[...this.equipment.causeRisks]};this.createNew&&R.equipment.add(e).then((t=>{V(e.descr+" wurde hinzugefügt.","success"),this.$emit("hasAdded",{id:t,...this.equipment})})).catch((e=>{throw V("Beim Speichern ist ein Fehler aufgetreten.","danger"),e})),void 0!==this.id?R.equipment.update(this.id,e).then((()=>{V("Änderungen gespeichert.","success"),console.log(e),this.$emit("hasSaved",{id:this.id,...this.equipment})})).catch((e=>{throw V("Beim Speichern ist ein Fehler aufgetreten.","warning"),e})):V("Ungültige ID","danger")}},mounted(){this.equipment=this.defaultValues,console.log(this.equipment),this.loadFromDb()}},C=o(t,[["render",function(e,t,i,s,n,a){const u=r("ion-input"),l=r("ion-item"),d=r("ion-list"),o=r("ion-label"),k=r("ion-button"),q=r("ion-list-header"),v=r("RiskList"),b=r("RiskCatalog"),y=r("GenericEditModal");return n.equipment?(c(),m(f,{key:0},[p(d,{inset:""},{default:h((()=>[p(l,null,{default:h((()=>[p(u,{label:"Beschreibung","label-placement":"floating",modelValue:n.equipment.descr,"onUpdate:modelValue":t[0]||(t[0]=e=>n.equipment.descr=e)},null,8,["modelValue"])])),_:1}),p(l,null,{default:h((()=>[p(u,{label:"Tags","label-placement":"floating",modelValue:n.equipment.tags.join(" "),"onUpdate:modelValue":t[1]||(t[1]=e=>n.equipment.tags=e.split(" ").map((e=>e.trim().toLowerCase())).filter((e=>""!==e)))},null,8,["modelValue"])])),_:1})])),_:1}),p(v,{modelValue:n.equipment.causeRisks,"onUpdate:modelValue":t[3]||(t[3]=e=>n.equipment.causeRisks=e),"forbid-deletion":"",inverted:"",inset:""},{header:h((()=>[p(q,null,{default:h((()=>[p(o,null,{default:h((()=>[g("Verursachte Gefährdungen...")])),_:1}),p(k,{onClick:t[2]||(t[2]=e=>n.addCausedRisks=!0)},{default:h((()=>[g("Hinzufügen")])),_:1})])),_:1})])),_:1},8,["modelValue"]),p(y,{"is-open":n.addCausedRisks,onWillDismiss:t[5]||(t[5]=e=>n.addCausedRisks=!1),"hide-save":""},{default:h((()=>[p(b,{modelValue:n.equipment.causeRisks,"onUpdate:modelValue":t[4]||(t[4]=e=>n.equipment.causeRisks=e),"link-to-function":()=>{}},null,8,["modelValue"])])),_:1},8,["is-open"])],64)):_("",!0)}]]);e("default",k({__name:"EquipmentEditPage",setup(e){let t,s={descr:"",tags:[],causeRisks:[]},n=!1;const a=q();return"/equipment/new"===a.path?n=!0:t=parseInt(a.params.id),(e,a)=>(c(),v(i,{onShouldCancel:a[2]||(a[2]=t=>e.$router.back()),onSubmit:a[3]||(a[3]=t=>{e.$refs.editor.saveToDb()})},{default:h((()=>[(c(),v(b,null,{default:h((()=>[p(C,{ref:"editor",id:y(t),"create-new":y(n),"default-values":y(s),onHasAdded:a[0]||(a[0]=t=>e.$router.back()),onHasSaved:a[1]||(a[1]=t=>e.$router.back())},null,8,["id","create-new","default-values"])])),_:1}))])),_:1}))}}))}}}));
