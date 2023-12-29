System.register(["./index-legacy-igOIciSO.js","./TemplateGenericEditPage-legacy-HUozRh3T.js","./helpers-legacy-c5WTGrnR.js","./GenericEditModal-legacy-1UvZYT1p.js"],(function(e,t){"use strict";var i,n,a,o,l,d,s,c,r,h,m,u,f,I,p,g,v,b,w,N,_,L,T,D,y,S,V,F,E,$,B;return{setters:[e=>{i=e.s,n=e.q,a=e.h,o=e.I,l=e.C,d=e.H,s=e.J,c=e.K,r=e.L,h=e.M,m=e.N,u=e.j,f=e._,I=e.D,p=e.o,g=e.f,v=e.a,b=e.w,w=e.F,N=e.i,_=e.t,L=e.z,T=e.r,D=e.x,y=e.A,S=e.O,V=e.c},e=>{F=e.T},e=>{E=e.d,$=e.p},e=>{B=e.G}],execute:function(){const t={components:{IonButtons:i,IonItem:n,IonLabel:a,IonList:o,IonInput:l,IonGrid:d,IonRow:s,IonCol:c,IonSelect:r,IonSelectOption:h,IonTextarea:m,IonButton:u,GenericEditModalVue:B},emits:["hasSaved","hasAdded"],props:{technicianId:Number,createNew:Boolean},data:()=>({name:"",fisatId:"",comment:"",fisatLevel:"",modified:!1,technicianData:void 0}),methods:{loadFromDb(e){void 0!==e&&E.technicians.get(e).then((t=>{void 0!==t?(this.technicianData=t,this.resetForm(t)):$(`Es exisitert kein Mitarbeiter mit der ID ${e} in der Datenbank`,"danger")})).catch((e=>{console.log(e)}))},resetForm(e=void 0){if(void 0===e)return this.name="",this.fisatId="",this.fisatLevel="1",void(this.comment="");this.name=e.name,e.fisat?(this.fisatId=e.fisat.id,this.fisatLevel=""+e.fisat.level):(this.fisatId="",this.fisatLevel="1"),this.comment=e.comment?e.comment:""},async saveToDb(){if(void 0===this.technicianId&&!this.createNew)return;let e={name:this.name};if(""===this.name)return $("Es muss ein Name angegeben werden","danger"),!1;if(""!==this.fisatId){let t=parseInt(this.fisatLevel);if(![1,2,3].includes(t))return $("Ungültiges FISAT Level: "+t,"danger"),!1;e.fisat={id:this.fisatId,level:t}}""!==this.comment&&(e.comment=this.comment),this.createNew?E.technicians.add(e).then((t=>(this.modified=!1,$("Angestellter hinzugefügt","success"),this.$emit("hasAdded",{id:t,...e}),!0))).catch((e=>{throw $("Beim Speichern ist ein Fehler aufgetreten","danger"),e})):E.technicians.update(this.technicianId,e).then((()=>(this.modified=!1,$("Änderungen gespeichert","success"),this.$emit("hasSaved",{id:this.technicianId,...e}),!0))).catch((e=>{throw $("Beim Speichern ist ein Fehler aufgetreten","danger"),e}))}},mounted(){this.createNew?this.resetForm():this.loadFromDb(this.technicianId)},watch:{createNew(e){e&&this.resetForm()},technicianId(e){this.createNew||this.loadFromDb(e)}}};e("default",f({components:{IonHeader:L,IonToolbar:T,IonButtons:i,IonTitle:D,IonItem:n,IonContent:y,IonButton:u,IonModal:S,TemplateGenericEditPage:F,TechnicianEditor:f(t,[["render",function(e,t,i,n,a,o){const l=I("ion-label"),d=I("ion-item"),s=I("ion-input"),c=I("ion-col"),r=I("ion-select-option"),h=I("ion-select"),m=I("ion-row"),u=I("ion-grid"),f=I("ion-list"),L=I("ion-textarea");return p(),g(w,null,[v(f,{inset:!0},{default:b((()=>[v(d,{lines:"none"},{default:b((()=>[v(l,{color:"secondary",style:{"font-size":"130%","font-weight":"bold"}},{default:b((()=>[N(_(a.technicianData?a.technicianData.name:"Neuer Mitarbeiter"),1)])),_:1})])),_:1}),v(d,null,{default:b((()=>[v(s,{onIonInput:t[0]||(t[0]=e=>a.modified=!0),label:"Name","label-placement":"floating",placeholder:"Name des Mitarbeiters",modelValue:a.name,"onUpdate:modelValue":t[1]||(t[1]=e=>a.name=e),required:""},null,8,["modelValue"])])),_:1}),v(d,null,{default:b((()=>[v(u,{style:{padding:"0"}},{default:b((()=>[v(m,null,{default:b((()=>[v(c,{style:{padding:"0"}},{default:b((()=>[v(s,{onIonInput:t[2]||(t[2]=e=>a.modified=!0),label:"FISAT-Nr.","label-placement":"floating",modelValue:a.fisatId,"onUpdate:modelValue":t[3]||(t[3]=e=>a.fisatId=e)},null,8,["modelValue"])])),_:1}),v(c,{size:"auto",style:{padding:"0"}},{default:b((()=>[v(h,{onIonInput:t[4]||(t[4]=e=>a.modified=!0),style:{width:"100px"},modelValue:a.fisatLevel,"onUpdate:modelValue":t[5]||(t[5]=e=>a.fisatLevel=e),label:"Level","label-placement":"floating"},{default:b((()=>[v(r,{value:"1"},{default:b((()=>[N("Level 1")])),_:1}),v(r,{value:"2"},{default:b((()=>[N("Level 2")])),_:1}),v(r,{value:"3"},{default:b((()=>[N("Level 3")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),v(f,{inset:""},{default:b((()=>[v(d,null,{default:b((()=>[v(L,{onIonInput:t[6]||(t[6]=e=>a.modified=!0),label:"Kommentar","label-placement":"floating",rows:5,modelValue:a.comment,"onUpdate:modelValue":t[7]||(t[7]=e=>a.comment=e)},null,8,["modelValue"])])),_:1})])),_:1})],64)}]])},emits:["shouldSave","shouldCancel","willPresent"],props:{},data:()=>({technicianId:void 0,createNew:!1}),methods:{saveToDb(){this.$refs.editor.saveToDb()}},mounted(){"/technicians/new"===this.$route.path?(this.technicianId=void 0,this.createNew=!0):(this.technicianId=parseInt(this.$route.params.id),this.createNew=!1)}},[["render",function(e,t,i,n,a,o){const l=I("TechnicianEditor"),d=I("TemplateGenericEditPage");return p(),V(d,{onSubmit:t[2]||(t[2]=e=>o.saveToDb()),onShouldCancel:t[3]||(t[3]=t=>e.$router.back())},{default:b((()=>[v(l,{ref:"editor","technician-id":a.technicianId,"create-new":a.createNew,onHasSaved:t[0]||(t[0]=t=>e.$router.back()),onHasAdded:t[1]||(t[1]=t=>e.$router.back())},null,8,["technician-id","create-new"])])),_:1})}]]))}}}));
