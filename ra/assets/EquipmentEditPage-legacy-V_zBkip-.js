System.register(["./TemplateGenericEditPage-legacy-5enzZF_m.js","./index-legacy-sTcrDMYq.js","./helpers-legacy-Rp8Wbxgk.js","./RiskList.vue_vue_type_script_setup_true_lang-legacy--Dk9wVFE.js","./GenericEditModal-legacy-ewPrqCzC.js","./RiskCatalog.vue_vue_type_script_setup_true_lang-legacy-8j8MoSN6.js","./livequery-legacy-tkInflhO.js","./RiskListItem-legacy-rJmffrxK.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-eGB1eg0m.js","./liveriskstree-legacy-1-jYbkaU.js"],(function(e,t){"use strict";var i,l,s,a,n,u,d,o,r,c,m,p,g,h,f,_,k,v,q,V,b,R,y,I,w,T,j,C,D,S,E,L;return{setters:[e=>{i=e.T},e=>{l=e.d,s=e.e,a=e.o,n=e.g,u=e.b,d=e.f,o=e.s,r=e.F,c=e.R,m=e.a,p=e.c,g=e.w,h=e.t,f=e.j,_=e.ax,k=e.I,v=e.r,q=e.i,V=e.h,b=e.k,R=e._,y=e.v,I=e.l,w=e.u,T=e.S},e=>{j=e.d,C=e.p},e=>{D=e._},e=>{S=e.G},e=>{E=e._},e=>{L=e.l},null,null,null],execute:function(){const t={class:"tag-input"},$=m("br",null,null,-1),B={components:{IonList:k,IonItem:v,IonLabel:q,IonListHeader:V,IonInput:o,RiskList:D,RiskCatalog:E,GenericEditModal:S,IonButton:b,TagInput:l({__name:"TagInput",props:{modelValue:{},allTags:{}},setup(e){const i=e,l=s((()=>{console.log("FOO");const e=new Set([...i.allTags,...i.modelValue]);return console.log(e),[...e]}));return(e,i)=>(a(),n("div",t,[u(d(o),{label:"Tags","label-placement":"floating",modelValue:e.modelValue.join(" "),"onUpdate:modelValue":i[0]||(i[0]=t=>e.$emit("update:modelValue",t.split(" ").map((e=>e.trim().toLowerCase())).filter((e=>""!==e))))},null,8,["modelValue"]),$,(a(!0),n(r,null,c(l.value,(t=>(a(),p(d(_),{outline:!e.modelValue.includes(t),onClick:i=>e.$emit("update:modelValue",e.modelValue.includes(t)?e.modelValue.filter((e=>e!==t)):[...e.modelValue,t])},{default:g((()=>[f(h(t),1)])),_:2},1032,["outline","onClick"])))),256))]))}})},emits:["hasSaved","hasAdded"],props:{id:{type:Number},createNew:Boolean,defaultValues:{type:Object,default:{descr:"",tags:[],causeRisks:[]}}},data:()=>({equipment:void 0,addCausedRisks:!1}),computed:{allTags:()=>L.table("equipment").entries().reduce(((e,t)=>(e.push(...t.tags),e)),[])},methods:{loadFromDb(){void 0!==this.id&&j.equipment.get(this.id).then((e=>{void 0!==e?this.equipment=e:C("Es existiert keine Ausrüstung mit der ID "+this.id+" in der Datenbank.","danger")}))},saveToDb(){if(void 0===this.equipment)return void C("Etwas ist schief gelaufen.");if(""===this.equipment.descr)return void C("Die Beschreibung darf nicht leer sein.");const e={descr:this.equipment.descr,tags:[...this.equipment.tags],causeRisks:[...this.equipment.causeRisks]};this.createNew&&j.equipment.add(e).then((t=>{C(e.descr+" wurde hinzugefügt.","success"),this.$emit("hasAdded",{id:t,...this.equipment})})).catch((e=>{throw C("Beim Speichern ist ein Fehler aufgetreten.","danger"),e})),void 0!==this.id?j.equipment.update(this.id,e).then((()=>{C("Änderungen gespeichert.","success"),console.log(e),this.$emit("hasSaved",{id:this.id,...this.equipment})})).catch((e=>{throw C("Beim Speichern ist ein Fehler aufgetreten.","warning"),e})):C("Ungültige ID","danger")}},mounted(){this.equipment=this.defaultValues,console.log(this.equipment),this.loadFromDb()}},G=R(B,[["render",function(e,t,i,l,s,d){const o=y("ion-input"),c=y("ion-item"),m=y("TagInput"),p=y("ion-list"),h=y("ion-label"),_=y("ion-button"),k=y("ion-list-header"),v=y("RiskList"),q=y("RiskCatalog"),V=y("GenericEditModal");return s.equipment?(a(),n(r,{key:0},[u(p,{inset:"",lines:"none"},{default:g((()=>[u(c,null,{default:g((()=>[u(o,{label:"Beschreibung","label-placement":"floating",modelValue:s.equipment.descr,"onUpdate:modelValue":t[0]||(t[0]=e=>s.equipment.descr=e)},null,8,["modelValue"])])),_:1}),u(c,null,{default:g((()=>[u(m,{modelValue:s.equipment.tags,"onUpdate:modelValue":t[1]||(t[1]=e=>s.equipment.tags=e),allTags:d.allTags},null,8,["modelValue","allTags"])])),_:1})])),_:1}),u(v,{modelValue:s.equipment.causeRisks,"onUpdate:modelValue":t[3]||(t[3]=e=>s.equipment.causeRisks=e),"forbid-deletion":"",inverted:"",inset:""},{header:g((()=>[u(k,null,{default:g((()=>[u(h,null,{default:g((()=>[f("Verursachte Gefährdungen...")])),_:1}),u(_,{onClick:t[2]||(t[2]=e=>s.addCausedRisks=!0)},{default:g((()=>[f("Hinzufügen")])),_:1})])),_:1})])),_:1},8,["modelValue"]),u(V,{"is-open":s.addCausedRisks,onWillDismiss:t[5]||(t[5]=e=>s.addCausedRisks=!1),"hide-save":""},{default:g((()=>[u(q,{modelValue:s.equipment.causeRisks,"onUpdate:modelValue":t[4]||(t[4]=e=>s.equipment.causeRisks=e),"link-to-function":()=>{}},null,8,["modelValue"])])),_:1},8,["is-open"])],64)):I("",!0)}]]);e("default",l({__name:"EquipmentEditPage",setup(e){let t,l={descr:"",tags:[],causeRisks:[]},s=!1;const n=w();return"/equipment/new"===n.path?s=!0:t=parseInt(n.params.id),(e,n)=>(a(),p(i,{onShouldCancel:n[2]||(n[2]=t=>e.$router.back()),onSubmit:n[3]||(n[3]=t=>{e.$refs.editor.saveToDb()})},{default:g((()=>[(a(),p(T,null,{default:g((()=>[u(G,{ref:"editor",id:d(t),"create-new":d(s),"default-values":d(l),onHasAdded:n[0]||(n[0]=t=>e.$router.back()),onHasSaved:n[1]||(n[1]=t=>e.$router.back())},null,8,["id","create-new","default-values"])])),_:1}))])),_:1}))}}))}}}));
