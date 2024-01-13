import{T as B}from"./TemplateGenericEditPage-Ot0MunGG.js";import{d as V,e as D,o as c,g as h,b as o,f,s as q,F as b,R as $,a as F,c as _,w as a,t as L,j as k,ax as N,I as G,r as U,i as y,h as A,k as H,_ as M,v as u,l as j,u as O,S as z}from"./index-fc_sw4La.js";import{d as g,p as m}from"./helpers-1B5OLZ5S.js";import{_ as P}from"./RiskList.vue_vue_type_script_setup_true_lang-astd3g3a.js";import{G as Q}from"./GenericEditModal-rrwlFOvS.js";import{_ as W}from"./RiskCatalog.vue_vue_type_script_setup_true_lang-pUe_J02a.js";import{l as x}from"./livequery-m_pyRb0j.js";import"./RiskListItem-ABVUgfhl.js";import"./GenericList.vue_vue_type_script_setup_true_lang-uGqW44F-.js";import"./liveriskstree-Z7QRcm69.js";const J={class:"tag-input"},K=F("br",null,null,-1),X=V({__name:"TagInput",props:{modelValue:{},allTags:{}},setup(l){const e=l,p=D(()=>{console.log("FOO");const s=new Set([...e.allTags,...e.modelValue]);return console.log(s),[...s]});return(s,t)=>(c(),h("div",J,[o(f(q),{label:"Tags","label-placement":"floating",modelValue:s.modelValue.join(" "),"onUpdate:modelValue":t[0]||(t[0]=i=>s.$emit("update:modelValue",i.split(" ").map(n=>n.trim().toLowerCase()).filter(n=>n!=="")))},null,8,["modelValue"]),K,(c(!0),h(b,null,$(p.value,i=>(c(),_(f(N),{outline:!s.modelValue.includes(i),onClick:n=>s.$emit("update:modelValue",s.modelValue.includes(i)?s.modelValue.filter(d=>d!==i):[...s.modelValue,i])},{default:a(()=>[k(L(i),1)]),_:2},1032,["outline","onClick"]))),256))]))}}),Y={components:{IonList:G,IonItem:U,IonLabel:y,IonListHeader:A,IonInput:q,RiskList:P,RiskCatalog:W,GenericEditModal:Q,IonButton:H,TagInput:X},emits:["hasSaved","hasAdded"],props:{id:{type:Number},createNew:Boolean,defaultValues:{type:Object,default:{descr:"",tags:[],causeRisks:[]}}},data(){return{equipment:void 0,addCausedRisks:!1}},computed:{allTags(){return x.table("equipment").entries().reduce((e,p)=>(e.push(...p.tags),e),[])}},methods:{loadFromDb(){this.id!==void 0&&g.equipment.get(this.id).then(l=>{if(l===void 0){m("Es existiert keine Ausrüstung mit der ID "+this.id+" in der Datenbank.","danger");return}this.equipment=l})},saveToDb(){if(this.equipment===void 0){m("Etwas ist schief gelaufen.");return}if(this.equipment.descr===""){m("Die Beschreibung darf nicht leer sein.");return}const l={descr:this.equipment.descr,tags:[...this.equipment.tags],causeRisks:[...this.equipment.causeRisks]};if(this.createNew&&g.equipment.add(l).then(e=>{m(l.descr+" wurde hinzugefügt.","success"),this.$emit("hasAdded",{id:e,...this.equipment})}).catch(e=>{throw m("Beim Speichern ist ein Fehler aufgetreten.","danger"),e}),this.id===void 0){m("Ungültige ID","danger");return}g.equipment.update(this.id,l).then(()=>{m("Änderungen gespeichert.","success"),console.log(l),this.$emit("hasSaved",{id:this.id,...this.equipment})}).catch(e=>{throw m("Beim Speichern ist ein Fehler aufgetreten.","warning"),e})}},mounted(){this.equipment=this.defaultValues,console.log(this.equipment),this.loadFromDb()}};function Z(l,e,p,s,t,i){const n=u("ion-input"),d=u("ion-item"),v=u("TagInput"),R=u("ion-list"),T=u("ion-label"),C=u("ion-button"),I=u("ion-list-header"),w=u("RiskList"),E=u("RiskCatalog"),S=u("GenericEditModal");return t.equipment?(c(),h(b,{key:0},[o(R,{inset:"",lines:"none"},{default:a(()=>[o(d,null,{default:a(()=>[o(n,{label:"Beschreibung","label-placement":"floating",modelValue:t.equipment.descr,"onUpdate:modelValue":e[0]||(e[0]=r=>t.equipment.descr=r)},null,8,["modelValue"])]),_:1}),o(d,null,{default:a(()=>[o(v,{modelValue:t.equipment.tags,"onUpdate:modelValue":e[1]||(e[1]=r=>t.equipment.tags=r),allTags:i.allTags},null,8,["modelValue","allTags"])]),_:1})]),_:1}),o(w,{modelValue:t.equipment.causeRisks,"onUpdate:modelValue":e[3]||(e[3]=r=>t.equipment.causeRisks=r),"forbid-deletion":"",inverted:"",inset:""},{header:a(()=>[o(I,null,{default:a(()=>[o(T,null,{default:a(()=>[k("Verursachte Gefährdungen...")]),_:1}),o(C,{onClick:e[2]||(e[2]=r=>t.addCausedRisks=!0)},{default:a(()=>[k("Hinzufügen")]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(S,{"is-open":t.addCausedRisks,onWillDismiss:e[5]||(e[5]=r=>t.addCausedRisks=!1),"hide-save":""},{default:a(()=>[o(E,{modelValue:t.equipment.causeRisks,"onUpdate:modelValue":e[4]||(e[4]=r=>t.equipment.causeRisks=r),"link-to-function":()=>{}},null,8,["modelValue"])]),_:1},8,["is-open"])],64)):j("",!0)}const ee=M(Y,[["render",Z]]),me=V({__name:"EquipmentEditPage",setup(l){let e,p={descr:"",tags:[],causeRisks:[]},s=!1;const t=O();return t.path==="/equipment/new"?s=!0:e=parseInt(t.params.id),(i,n)=>(c(),_(B,{onShouldCancel:n[2]||(n[2]=d=>i.$router.back()),onSubmit:n[3]||(n[3]=d=>{i.$refs.editor.saveToDb()})},{default:a(()=>[(c(),_(z,null,{default:a(()=>[o(ee,{ref:"editor",id:f(e),"create-new":f(s),"default-values":f(p),onHasAdded:n[0]||(n[0]=d=>i.$router.back()),onHasSaved:n[1]||(n[1]=d=>i.$router.back())},null,8,["id","create-new","default-values"])]),_:1}))]),_:1}))}});export{me as default};
