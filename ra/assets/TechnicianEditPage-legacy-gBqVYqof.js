System.register(["./index-legacy-IpYMk95T.js","./TemplateGenericEditPage-legacy-QtQjSfEk.js","./helpers-legacy-NeTv2MoC.js"],(function(e,t){"use strict";var n,i,a,o,l,d,s,r,c,h,u,m,f,I,p,v,g,b,w,N,_,T,D,L,S,F,V,C,y,$,B,E;return{setters:[e=>{n=e.y,i=e.s,a=e.z,o=e.A,l=e.B,d=e.C,s=e.D,r=e.E,c=e.k,h=e.G,u=e.H,m=e.J,f=e.K,I=e._,p=e.v,v=e.o,g=e.g,b=e.b,w=e.w,N=e.F,_=e.j,T=e.t,D=e.L,L=e.M,S=e.N,F=e.r,V=e.O,C=e.P,y=e.c},e=>{$=e.T},e=>{B=e.d,E=e.p}],execute:function(){const t={components:{IonButtons:n,IonInput:i,IonGrid:a,IonRow:o,IonCol:l,IonSelect:d,IonSelectOption:s,IonTextarea:r,IonButton:c,IonCard:h,IonCardHeader:u,IonCardTitle:m,IonCardContent:f},emits:["hasSaved","hasAdded"],props:{technicianId:Number,createNew:Boolean},data:()=>({name:"",fisatId:"",comment:"",fisatLevel:"",modified:!1,technicianData:void 0}),methods:{loadFromDb(e){void 0!==e&&B.technicians.get(e).then((t=>{void 0!==t?(this.technicianData=t,this.resetForm(t)):E(`Es exisitert kein Mitarbeiter mit der ID ${e} in der Datenbank`,"danger")})).catch((e=>{console.log(e)}))},resetForm(e=void 0){if(void 0===e)return this.name="",this.fisatId="",this.fisatLevel="1",void(this.comment="");this.name=e.name,e.fisat?(this.fisatId=e.fisat.id,this.fisatLevel=""+e.fisat.level):(this.fisatId="",this.fisatLevel="1"),this.comment=e.comment?e.comment:""},async saveToDb(){if(void 0===this.technicianId&&!this.createNew)return;let e={name:this.name};if(""===this.name)return E("Es muss ein Name angegeben werden","danger"),!1;if(""!==this.fisatId){let t=parseInt(this.fisatLevel);if(![1,2,3].includes(t))return E("Ungültiges FISAT Level: "+t,"danger"),!1;e.fisat={id:this.fisatId,level:t}}""!==this.comment&&(e.comment=this.comment),this.createNew?B.technicians.add(e).then((t=>(this.modified=!1,E("Angestellter hinzugefügt","success"),this.$emit("hasAdded",{id:t,...e}),!0))).catch((e=>{throw E("Beim Speichern ist ein Fehler aufgetreten","danger"),e})):B.technicians.update(this.technicianId,e).then((()=>(this.modified=!1,E("Änderungen gespeichert","success"),this.$emit("hasSaved",{id:this.technicianId,...e}),!0))).catch((e=>{throw E("Beim Speichern ist ein Fehler aufgetreten","danger"),e}))}},mounted(){this.createNew?this.resetForm():this.loadFromDb(this.technicianId)},watch:{createNew(e){e&&this.resetForm()},technicianId(e){this.createNew||this.loadFromDb(e)}}};e("default",I({components:{IonHeader:D,IonToolbar:L,IonButtons:n,IonTitle:S,IonItem:F,IonContent:V,IonButton:c,IonModal:C,TemplateGenericEditPage:$,TechnicianEditor:I(t,[["render",function(e,t,n,i,a,o){const l=p("ion-card-title"),d=p("ion-card-header"),s=p("ion-input"),r=p("ion-col"),c=p("ion-select-option"),h=p("ion-select"),u=p("ion-row"),m=p("ion-grid"),f=p("ion-card-content"),I=p("ion-card"),D=p("ion-textarea");return v(),g(N,null,[b(I,null,{default:w((()=>[b(d,null,{default:w((()=>[b(d,null,{default:w((()=>[b(l,null,{default:w((()=>[_(T(a.technicianData?a.technicianData.name:"Neuer Mitarbeiter"),1)])),_:1})])),_:1})])),_:1}),b(f,null,{default:w((()=>[b(s,{onIonInput:t[0]||(t[0]=e=>a.modified=!0),label:"Name","label-placement":"floating",placeholder:"Name des Mitarbeiters",modelValue:a.name,"onUpdate:modelValue":t[1]||(t[1]=e=>a.name=e),required:""},null,8,["modelValue"]),b(m,{style:{padding:"0"}},{default:w((()=>[b(u,null,{default:w((()=>[b(r,{style:{padding:"0"}},{default:w((()=>[b(s,{onIonInput:t[2]||(t[2]=e=>a.modified=!0),label:"FISAT-Nr.","label-placement":"floating",modelValue:a.fisatId,"onUpdate:modelValue":t[3]||(t[3]=e=>a.fisatId=e)},null,8,["modelValue"])])),_:1}),b(r,{size:"auto",style:{padding:"0"}},{default:w((()=>[b(h,{onIonInput:t[4]||(t[4]=e=>a.modified=!0),style:{width:"100px"},modelValue:a.fisatLevel,"onUpdate:modelValue":t[5]||(t[5]=e=>a.fisatLevel=e),label:"Level","label-placement":"floating"},{default:w((()=>[b(c,{value:"1"},{default:w((()=>[_("Level 1")])),_:1}),b(c,{value:"2"},{default:w((()=>[_("Level 2")])),_:1}),b(c,{value:"3"},{default:w((()=>[_("Level 3")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),b(I,null,{default:w((()=>[b(f,null,{default:w((()=>[b(D,{onIonInput:t[6]||(t[6]=e=>a.modified=!0),label:"Kommentar","label-placement":"floating",rows:5,modelValue:a.comment,"onUpdate:modelValue":t[7]||(t[7]=e=>a.comment=e)},null,8,["modelValue"])])),_:1})])),_:1})],64)}]])},emits:["shouldSave","shouldCancel","willPresent"],props:{},data:()=>({technicianId:void 0,createNew:!1}),methods:{saveToDb(){this.$refs.editor.saveToDb()}},mounted(){"/technicians/new"===this.$route.path?(this.technicianId=void 0,this.createNew=!0):(this.technicianId=parseInt(this.$route.params.id),this.createNew=!1)}},[["render",function(e,t,n,i,a,o){const l=p("TechnicianEditor"),d=p("TemplateGenericEditPage");return v(),y(d,{onSubmit:t[2]||(t[2]=e=>o.saveToDb()),onShouldCancel:t[3]||(t[3]=t=>e.$router.back())},{default:w((()=>[b(l,{ref:"editor","technician-id":a.technicianId,"create-new":a.createNew,onHasSaved:t[0]||(t[0]=t=>e.$router.back()),onHasAdded:t[1]||(t[1]=t=>e.$router.back())},null,8,["technician-id","create-new"])])),_:1})}]]))}}}));
