import{y as v,s as C,z as E,A as $,B as k,C as B,D,E as x,k as g,G as y,H as A,J as P,K as G,_ as b,v as a,o as w,g as H,b as n,w as o,F as M,j as c,t as U,L as z,M as K,N as O,r as j,O as q,P as J,c as R}from"./index-GiGbSzE5.js";import{T as Q}from"./TemplateGenericEditPage-HZLLDHm2.js";import{d as f,p as l}from"./helpers-jin3i-cC.js";const W={components:{IonButtons:v,IonInput:C,IonGrid:E,IonRow:$,IonCol:k,IonSelect:B,IonSelectOption:D,IonTextarea:x,IonButton:g,IonCard:y,IonCardHeader:A,IonCardTitle:P,IonCardContent:G},emits:["hasSaved","hasAdded"],props:{technicianId:Number,createNew:Boolean},data(){return{name:"",fisatId:"",comment:"",fisatLevel:"",modified:!1,technicianData:void 0}},methods:{loadFromDb(t){t!==void 0&&f.technicians.get(t).then(e=>{if(e===void 0){l("Es exisitert kein Mitarbeiter mit der ID ".concat(t," in der Datenbank"),"danger");return}this.technicianData=e,this.resetForm(e)}).catch(e=>{console.log(e)})},resetForm(t=void 0){if(t===void 0){this.name="",this.fisatId="",this.fisatLevel="1",this.comment="";return}this.name=t.name,t.fisat?(this.fisatId=t.fisat.id,this.fisatLevel=""+t.fisat.level):(this.fisatId="",this.fisatLevel="1"),this.comment=t.comment?t.comment:""},async saveToDb(){if(this.technicianId===void 0&&!this.createNew)return;let t={name:this.name};if(this.name==="")return l("Es muss ein Name angegeben werden","danger"),!1;if(this.fisatId!==""){let e=parseInt(this.fisatLevel);if(![1,2,3].includes(e))return l("Ungültiges FISAT Level: "+e,"danger"),!1;t.fisat={id:this.fisatId,level:e}}this.comment!==""&&(t.comment=this.comment),this.createNew?f.technicians.add(t).then(e=>(this.modified=!1,l("Angestellter hinzugefügt","success"),this.$emit("hasAdded",{id:e,...t}),!0)).catch(e=>{throw l("Beim Speichern ist ein Fehler aufgetreten","danger"),e}):f.technicians.update(this.technicianId,t).then(()=>(this.modified=!1,l("Änderungen gespeichert","success"),this.$emit("hasSaved",{id:this.technicianId,...t}),!0)).catch(e=>{throw l("Beim Speichern ist ein Fehler aufgetreten","danger"),e})}},mounted(){this.createNew?this.resetForm():this.loadFromDb(this.technicianId)},watch:{createNew(t){t&&this.resetForm()},technicianId(t){this.createNew||this.loadFromDb(t)}}};function X(t,e,T,N,i,h){const m=a("ion-card-title"),d=a("ion-card-header"),r=a("ion-input"),p=a("ion-col"),u=a("ion-select-option"),V=a("ion-select"),F=a("ion-row"),L=a("ion-grid"),I=a("ion-card-content"),_=a("ion-card"),S=a("ion-textarea");return w(),H(M,null,[n(_,null,{default:o(()=>[n(d,null,{default:o(()=>[n(d,null,{default:o(()=>[n(m,null,{default:o(()=>[c(U(i.technicianData?i.technicianData.name:"Neuer Mitarbeiter"),1)]),_:1})]),_:1})]),_:1}),n(I,null,{default:o(()=>[n(r,{onIonInput:e[0]||(e[0]=s=>i.modified=!0),label:"Name","label-placement":"floating",placeholder:"Name des Mitarbeiters",modelValue:i.name,"onUpdate:modelValue":e[1]||(e[1]=s=>i.name=s),required:""},null,8,["modelValue"]),n(L,{style:{padding:"0"}},{default:o(()=>[n(F,null,{default:o(()=>[n(p,{style:{padding:"0"}},{default:o(()=>[n(r,{onIonInput:e[2]||(e[2]=s=>i.modified=!0),label:"FISAT-Nr.","label-placement":"floating",modelValue:i.fisatId,"onUpdate:modelValue":e[3]||(e[3]=s=>i.fisatId=s)},null,8,["modelValue"])]),_:1}),n(p,{size:"auto",style:{padding:"0"}},{default:o(()=>[n(V,{onIonInput:e[4]||(e[4]=s=>i.modified=!0),style:{width:"100px"},modelValue:i.fisatLevel,"onUpdate:modelValue":e[5]||(e[5]=s=>i.fisatLevel=s),label:"Level","label-placement":"floating"},{default:o(()=>[n(u,{value:"1"},{default:o(()=>[c("Level 1")]),_:1}),n(u,{value:"2"},{default:o(()=>[c("Level 2")]),_:1}),n(u,{value:"3"},{default:o(()=>[c("Level 3")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n(_,null,{default:o(()=>[n(I,null,{default:o(()=>[n(S,{onIonInput:e[6]||(e[6]=s=>i.modified=!0),label:"Kommentar","label-placement":"floating",rows:5,modelValue:i.comment,"onUpdate:modelValue":e[7]||(e[7]=s=>i.comment=s)},null,8,["modelValue"])]),_:1})]),_:1})],64)}const Y=b(W,[["render",X]]),Z={components:{IonHeader:z,IonToolbar:K,IonButtons:v,IonTitle:O,IonItem:j,IonContent:q,IonButton:g,IonModal:J,TemplateGenericEditPage:Q,TechnicianEditor:Y},emits:["shouldSave","shouldCancel","willPresent"],props:{},data(){return{technicianId:void 0,createNew:!1}},methods:{saveToDb(){this.$refs.editor.saveToDb()}},mounted(){this.$route.path==="/technicians/new"?(this.technicianId=void 0,this.createNew=!0):(this.technicianId=parseInt(this.$route.params.id),this.createNew=!1)}};function ee(t,e,T,N,i,h){const m=a("TechnicianEditor"),d=a("TemplateGenericEditPage");return w(),R(d,{onSubmit:e[2]||(e[2]=r=>h.saveToDb()),onShouldCancel:e[3]||(e[3]=r=>t.$router.back())},{default:o(()=>[n(m,{ref:"editor","technician-id":i.technicianId,"create-new":i.createNew,onHasSaved:e[0]||(e[0]=r=>t.$router.back()),onHasAdded:e[1]||(e[1]=r=>t.$router.back())},null,8,["technician-id","create-new"])]),_:1})}const oe=b(Z,[["render",ee]]);export{oe as default};
