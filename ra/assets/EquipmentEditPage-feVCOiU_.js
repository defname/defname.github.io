import{T as E}from"./TemplateGenericEditPage-UyugLRO7.js";import{I,r as D,i as B,h as S,D as F,k as L,_ as N,E as u,o as g,g as T,b as n,w as i,j as _,F as $,l as G,d as x,u as U,c as k,S as A,f}from"./index-YvNBdq1j.js";import{d as c,p as r}from"./helpers-d_hvXeLi.js";import{_ as H}from"./RiskList.vue_vue_type_script_setup_true_lang-90gcz3Cf.js";import{G as j}from"./GenericEditModal-G1FQ8tDY.js";import{_ as y}from"./RiskCatalog.vue_vue_type_script_setup_true_lang-7Ynbd2nN.js";import"./RiskListItem-D_ZFTsPZ.js";import"./GenericList.vue_vue_type_script_setup_true_lang-R-xPe0z_.js";import"./liveriskstree-uYgo7w9o.js";import"./livequery-N0RiMmpp.js";const M={components:{IonList:I,IonItem:D,IonLabel:B,IonListHeader:S,IonInput:F,RiskList:H,RiskCatalog:y,GenericEditModal:j,IonButton:L},emits:["hasSaved","hasAdded"],props:{id:{type:Number},createNew:Boolean,defaultValues:{type:Object,default:{descr:"",tags:[],causeRisks:[]}}},data(){return{equipment:void 0,addCausedRisks:!1}},methods:{loadFromDb(){this.id!==void 0&&c.equipment.get(this.id).then(o=>{if(o===void 0){r("Es existiert keine Ausrüstung mit der ID "+this.id+" in der Datenbank.","danger");return}this.equipment=o})},saveToDb(){if(this.equipment===void 0){r("Etwas ist schief gelaufen.");return}if(this.equipment.descr===""){r("Die Beschreibung darf nicht leer sein.");return}const o={descr:this.equipment.descr,tags:[...this.equipment.tags],causeRisks:[...this.equipment.causeRisks]};if(this.createNew&&c.equipment.add(o).then(e=>{r(o.descr+" wurde hinzugefügt.","success"),this.$emit("hasAdded",{id:e,...this.equipment})}).catch(e=>{throw r("Beim Speichern ist ein Fehler aufgetreten.","danger"),e}),this.id===void 0){r("Ungültige ID","danger");return}c.equipment.update(this.id,o).then(()=>{r("Änderungen gespeichert.","success"),console.log(o),this.$emit("hasSaved",{id:this.id,...this.equipment})}).catch(e=>{throw r("Beim Speichern ist ein Fehler aufgetreten.","warning"),e})}},mounted(){this.equipment=this.defaultValues,console.log(this.equipment),this.loadFromDb()}};function z(o,e,h,m,t,d){const s=u("ion-input"),l=u("ion-item"),q=u("ion-list"),b=u("ion-label"),v=u("ion-button"),R=u("ion-list-header"),V=u("RiskList"),C=u("RiskCatalog"),w=u("GenericEditModal");return t.equipment?(g(),T($,{key:0},[n(q,{inset:""},{default:i(()=>[n(l,null,{default:i(()=>[n(s,{label:"Beschreibung","label-placement":"floating",modelValue:t.equipment.descr,"onUpdate:modelValue":e[0]||(e[0]=a=>t.equipment.descr=a)},null,8,["modelValue"])]),_:1}),n(l,null,{default:i(()=>[n(s,{label:"Tags","label-placement":"floating",modelValue:t.equipment.tags.join(" "),"onUpdate:modelValue":e[1]||(e[1]=a=>t.equipment.tags=a.split(" ").map(p=>p.trim().toLowerCase()).filter(p=>p!==""))},null,8,["modelValue"])]),_:1})]),_:1}),n(V,{modelValue:t.equipment.causeRisks,"onUpdate:modelValue":e[3]||(e[3]=a=>t.equipment.causeRisks=a),"forbid-deletion":"",inverted:"",inset:""},{header:i(()=>[n(R,null,{default:i(()=>[n(b,null,{default:i(()=>[_("Verursachte Gefährdungen...")]),_:1}),n(v,{onClick:e[2]||(e[2]=a=>t.addCausedRisks=!0)},{default:i(()=>[_("Hinzufügen")]),_:1})]),_:1})]),_:1},8,["modelValue"]),n(w,{"is-open":t.addCausedRisks,onWillDismiss:e[5]||(e[5]=a=>t.addCausedRisks=!1),"hide-save":""},{default:i(()=>[n(C,{modelValue:t.equipment.causeRisks,"onUpdate:modelValue":e[4]||(e[4]=a=>t.equipment.causeRisks=a),"link-to-function":()=>{}},null,8,["modelValue"])]),_:1},8,["is-open"])],64)):G("",!0)}const P=N(M,[["render",z]]),ne=x({__name:"EquipmentEditPage",setup(o){let e,h={descr:"",tags:[],causeRisks:[]},m=!1;const t=U();return t.path==="/equipment/new"?m=!0:e=parseInt(t.params.id),(d,s)=>(g(),k(E,{onShouldCancel:s[2]||(s[2]=l=>d.$router.back()),onSubmit:s[3]||(s[3]=l=>{d.$refs.editor.saveToDb()})},{default:i(()=>[(g(),k(A,null,{default:i(()=>[n(P,{ref:"editor",id:f(e),"create-new":f(m),"default-values":f(h),onHasAdded:s[0]||(s[0]=l=>d.$router.back()),onHasSaved:s[1]||(s[1]=l=>d.$router.back())},null,8,["id","create-new","default-values"])]),_:1}))]),_:1}))}});export{ne as default};