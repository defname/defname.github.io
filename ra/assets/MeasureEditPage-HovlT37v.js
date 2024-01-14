import{T as w}from"./TemplateGenericEditPage-Jc6DB1dI.js";import{I as S,r as D,i as E,h as x,s as F,k as B,_ as M,v as a,o as c,g as G,b as t,w as i,j as p,F as N,l as L,d as T,u as U,c as C,S as y,f as k}from"./index-Mp0SBjDu.js";import{d as v,p as u}from"./helpers-NsTiBvop.js";import{_ as H}from"./RiskList.vue_vue_type_script_setup_true_lang-oRjS4Tp8.js";import{G as z}from"./GenericEditModal-wb1PNcGR.js";import{_ as A}from"./RiskCatalog.vue_vue_type_script_setup_true_lang-SOYv8a8W.js";import"./RiskListItem-IdYFUTID.js";import"./GenericList.vue_vue_type_script_setup_true_lang-omjn2ojH.js";import"./liveriskstree-BmKhT2F4.js";import"./livequery-bNlwf3Pc.js";const $={components:{IonList:S,IonItem:D,IonLabel:E,IonListHeader:x,IonInput:F,RiskList:H,RiskCatalog:A,GenericEditModal:z,IonButton:B},emits:["hasSaved","hasAdded"],props:{id:{type:Number},createNew:Boolean,defaultValues:{type:Object,default:{descr:"",solveRisks:[],causeRisks:[]}}},data(){return{measure:void 0,addSolvedRisks:!1,addCausedRisks:!1}},methods:{loadFromDb(){this.id!==void 0&&v.measures.get(this.id).then(l=>{if(l===void 0){u("Es existiert keine Maßnahme mit der ID "+this.id+" in der Datenbank.","danger");return}this.measure=l})},saveToDb(){var e,m;if(((e=this.measure)==null?void 0:e.descr)===""){u("Die Beschreibung darf nicht leer sein.");return}if(((m=this.measure)==null?void 0:m.solveRisks.length)===0){u("Eine Maßnahme muss mindestens eine Gefährdung lösen.");return}if(this.measure===void 0){u("Etwas ist schief gelaufen.");return}const l={descr:this.measure.descr,solveRisks:[...this.measure.solveRisks],causeRisks:[...this.measure.causeRisks]};if(this.createNew)return v.measures.add(l).then(r=>{u("Die Maßnahme wurde hinzugefügt.","success"),this.$emit("hasAdded",{id:r,...this.measure})}).catch(r=>{throw u("Beim Speichern ist ein Fehler aufgetreten.","danger"),r});if(this.id===void 0){u("Ungültige ID","danger");return}return v.measures.update(this.id,l).then(()=>{u("Änderungen gespeichert.","success"),this.$emit("hasSaved",{id:this.id,...this.measure})}).catch(r=>{throw u("Beim Speichern ist ein Fehler aufgetreten.","warning"),r})}},mounted(){this.measure=this.defaultValues,console.log(this.measure),this.loadFromDb()}};function j(l,e,m,r,s,d){const o=a("ion-input"),f=a("ion-item"),I=a("ion-list"),h=a("ion-label"),R=a("ion-button"),_=a("ion-list-header"),g=a("RiskList"),b=a("RiskCatalog"),V=a("GenericEditModal");return s.measure?(c(),G(N,{key:0},[t(I,{inset:""},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{label:"Beschreibung","label-placement":"floating",modelValue:s.measure.descr,"onUpdate:modelValue":e[0]||(e[0]=n=>s.measure.descr=n)},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{modelValue:s.measure.solveRisks,"onUpdate:modelValue":e[2]||(e[2]=n=>s.measure.solveRisks=n),"forbid-deletion":"",inverted:"",inset:""},{header:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[p("Maßnahme für...")]),_:1}),t(R,{onClick:e[1]||(e[1]=n=>s.addSolvedRisks=!0)},{default:i(()=>[p("Hinzufügen")]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(V,{"is-open":s.addSolvedRisks,onWillDismiss:e[4]||(e[4]=n=>s.addSolvedRisks=!1),"hide-save":""},{default:i(()=>[t(b,{modelValue:s.measure.solveRisks,"onUpdate:modelValue":e[3]||(e[3]=n=>s.measure.solveRisks=n),"link-to-function":()=>{}},null,8,["modelValue"])]),_:1},8,["is-open"]),t(g,{modelValue:s.measure.causeRisks,"onUpdate:modelValue":e[6]||(e[6]=n=>s.measure.causeRisks=n),"forbid-deletion":"",inverted:"",inset:""},{header:i(()=>[t(_,null,{default:i(()=>[t(h,null,{default:i(()=>[p("Verursachte Gefährdungen...")]),_:1}),t(R,{onClick:e[5]||(e[5]=n=>s.addCausedRisks=!0)},{default:i(()=>[p("Hinzufügen")]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(V,{"is-open":s.addCausedRisks,onWillDismiss:e[8]||(e[8]=n=>s.addCausedRisks=!1),"hide-save":""},{default:i(()=>[t(b,{modelValue:s.measure.causeRisks,"onUpdate:modelValue":e[7]||(e[7]=n=>s.measure.causeRisks=n),"link-to-function":()=>{},exclude:s.measure.solveRisks},null,8,["modelValue","exclude"])]),_:1},8,["is-open"])],64)):L("",!0)}const q=M($,[["render",j]]),se=T({__name:"MeasureEditPage",setup(l){let e,m={descr:"",solveRisks:[],causeRisks:[]},r=!1;const s=U();if(s.path==="/measures/new"){if(r=!0,s.query.for!==void 0){let d=parseInt(s.query.for);m.solveRisks.push(d)}}else e=parseInt(s.params.id);return(d,o)=>(c(),C(w,{onShouldCancel:o[2]||(o[2]=f=>d.$router.back()),onSubmit:o[3]||(o[3]=f=>{d.$refs.editor.saveToDb()})},{default:i(()=>[(c(),C(y,null,{default:i(()=>[t(q,{ref:"editor",id:k(e),"create-new":k(r),"default-values":k(m),onHasAdded:o[0]||(o[0]=f=>d.$router.back()),onHasSaved:o[1]||(o[1]=f=>d.$router.back())},null,8,["id","create-new","default-values"])]),_:1}))]),_:1}))}});export{se as default};
