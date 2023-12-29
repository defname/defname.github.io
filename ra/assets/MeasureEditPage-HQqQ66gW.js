import{T as w}from"./TemplateGenericEditPage-rtNOckVj.js";import{I as D,q as S,h as E,g as x,C as F,j as B,_ as M,D as a,o as v,f as G,a as t,w as i,i as p,F as N,k as L,d as T,u as U,c as C,S as y,e as k}from"./index-pK9Jxw9y.js";import{d as c,p as u}from"./helpers-_vyyZU2O.js";import{_ as H}from"./RiskList.vue_vue_type_script_setup_true_lang-tjsIzWuj.js";import{G as q}from"./GenericEditModal--GkTMFHi.js";import{_ as z}from"./RiskCatalog.vue_vue_type_script_setup_true_lang-_20QW0o7.js";import"./RiskListItem-jqq0QLj8.js";import"./GenericList.vue_vue_type_script_setup_true_lang-yMOk-ZyN.js";import"./liveriskstree-HKGbfupc.js";import"./livequery-xJJKFniU.js";const A={components:{IonList:D,IonItem:S,IonLabel:E,IonListHeader:x,IonInput:F,RiskList:H,RiskCatalog:z,GenericEditModal:q,IonButton:B},emits:["hasSaved","hasAdded"],props:{id:{type:Number},createNew:Boolean,defaultValues:{type:Object,default:{descr:"",solveRisks:[],causeRisks:[]}}},data(){return{measure:void 0,addSolvedRisks:!1,addCausedRisks:!1}},methods:{loadFromDb(){this.id!==void 0&&c.measures.get(this.id).then(l=>{if(l===void 0){u("Es existiert keine Maßnahme mit der ID "+this.id+" in der Datenbank.","danger");return}this.measure=l})},saveToDb(){var e,m;if(((e=this.measure)==null?void 0:e.descr)===""){u("Die Beschreibung darf nicht leer sein.");return}if(((m=this.measure)==null?void 0:m.solveRisks.length)===0){u("Eine Maßnahme muss mindestens eine Gefährdung lösen.");return}if(this.measure===void 0){u("Etwas ist schief gelaufen.");return}const l={descr:this.measure.descr,solveRisks:[...this.measure.solveRisks],causeRisks:[...this.measure.causeRisks]};if(this.createNew&&c.measures.add(l).then(r=>{u("Die Maßnahme wurde hinzugefügt.","success"),this.$emit("hasAdded",{id:r,...this.measure})}).catch(r=>{throw u("Beim Speichern ist ein Fehler aufgetreten.","danger"),r}),this.id===void 0){u("Ungültige ID","danger");return}c.measures.update(this.id,l).then(()=>{u("Änderungen gespeichert.","success"),this.$emit("hasSaved",{id:this.id,...this.measure})}).catch(r=>{throw u("Beim Speichern ist ein Fehler aufgetreten.","warning"),r})}},mounted(){this.measure=this.defaultValues,console.log(this.measure),this.loadFromDb()}};function $(l,e,m,r,s,d){const o=a("ion-input"),f=a("ion-item"),I=a("ion-list"),h=a("ion-label"),R=a("ion-button"),_=a("ion-list-header"),g=a("RiskList"),b=a("RiskCatalog"),V=a("GenericEditModal");return s.measure?(v(),G(N,{key:0},[t(I,{inset:""},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{label:"Beschreibung","label-placement":"floating",modelValue:s.measure.descr,"onUpdate:modelValue":e[0]||(e[0]=n=>s.measure.descr=n)},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{modelValue:s.measure.solveRisks,"onUpdate:modelValue":e[2]||(e[2]=n=>s.measure.solveRisks=n),"forbid-deletion":"",inverted:"",inset:""},{header:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[p("Maßnahme für...")]),_:1}),t(R,{onClick:e[1]||(e[1]=n=>s.addSolvedRisks=!0)},{default:i(()=>[p("Hinzufügen")]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(V,{"is-open":s.addSolvedRisks,onWillDismiss:e[4]||(e[4]=n=>s.addSolvedRisks=!1),"hide-save":""},{default:i(()=>[t(b,{modelValue:s.measure.solveRisks,"onUpdate:modelValue":e[3]||(e[3]=n=>s.measure.solveRisks=n),"link-to-function":()=>{}},null,8,["modelValue"])]),_:1},8,["is-open"]),t(g,{modelValue:s.measure.causeRisks,"onUpdate:modelValue":e[6]||(e[6]=n=>s.measure.causeRisks=n),"forbid-deletion":"",inverted:"",inset:""},{header:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[p("Verursachte Gefährdungen...")]),_:1}),t(R,{onClick:e[5]||(e[5]=n=>s.addCausedRisks=!0)},{default:i(()=>[p("Hinzufügen")]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(V,{"is-open":s.addCausedRisks,onWillDismiss:e[8]||(e[8]=n=>s.addCausedRisks=!1),"hide-save":""},{default:i(()=>[t(b,{modelValue:s.measure.causeRisks,"onUpdate:modelValue":e[7]||(e[7]=n=>s.measure.causeRisks=n),"link-to-function":()=>{},exclude:s.measure.solveRisks},null,8,["modelValue","exclude"])]),_:1},8,["is-open"])],64)):L("",!0)}const j=M(A,[["render",$]]),se=T({__name:"MeasureEditPage",setup(l){let e,m={descr:"",solveRisks:[],causeRisks:[]},r=!1;const s=U();if(s.path==="/measures/new"){if(r=!0,s.query.for!==void 0){let d=parseInt(s.query.for);m.solveRisks.push(d)}}else e=parseInt(s.params.id);return(d,o)=>(v(),C(w,{onShouldCancel:o[2]||(o[2]=f=>d.$router.back()),onSubmit:o[3]||(o[3]=f=>{d.$refs.editor.saveToDb()})},{default:i(()=>[(v(),C(y,null,{default:i(()=>[t(j,{ref:"editor",id:k(e),"create-new":k(r),"default-values":k(m),onHasAdded:o[0]||(o[0]=f=>d.$router.back()),onHasSaved:o[1]||(o[1]=f=>d.$router.back())},null,8,["id","create-new","default-values"])]),_:1}))]),_:1}))}});export{se as default};
