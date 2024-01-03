System.register(["./TemplateGenericEditPage-legacy-PPT4N-QR.js","./index-legacy-l9aK7RKf.js","./helpers-legacy-X82L35U6.js","./RiskList.vue_vue_type_script_setup_true_lang-legacy-Gt6J-dTZ.js","./GenericEditModal-legacy-bj_6eKP1.js","./RiskCatalog.vue_vue_type_script_setup_true_lang-legacy-HueAlsRD.js","./RiskListItem-legacy--OFZLq8T.js","./GenericList.vue_vue_type_script_setup_true_lang-legacy-ksUW4ZVe.js","./liveriskstree-legacy-dlv-ajCr.js","./livequery-legacy-GqvLyVpq.js"],(function(e,s){"use strict";var i,a,t,l,u,d,n,r,o,c,m,h,v,f,k,g,p,_,R,b,y,V,I,D,S,j;return{setters:[e=>{i=e.T},e=>{a=e.I,t=e.r,l=e.i,u=e.h,d=e.D,n=e.k,r=e._,o=e.E,c=e.o,m=e.g,h=e.b,v=e.w,f=e.j,k=e.F,g=e.l,p=e.d,_=e.u,R=e.c,b=e.S,y=e.f},e=>{V=e.d,I=e.p},e=>{D=e._},e=>{S=e.G},e=>{j=e._},null,null,null,null],execute:function(){const s={components:{IonList:a,IonItem:t,IonLabel:l,IonListHeader:u,IonInput:d,RiskList:D,RiskCatalog:j,GenericEditModal:S,IonButton:n},emits:["hasSaved","hasAdded"],props:{id:{type:Number},createNew:Boolean,defaultValues:{type:Object,default:{descr:"",solveRisks:[],causeRisks:[]}}},data:()=>({measure:void 0,addSolvedRisks:!1,addCausedRisks:!1}),methods:{loadFromDb(){void 0!==this.id&&V.measures.get(this.id).then((e=>{void 0!==e?this.measure=e:I("Es existiert keine Maßnahme mit der ID "+this.id+" in der Datenbank.","danger")}))},saveToDb(){var e,s;if(""===(null===(e=this.measure)||void 0===e?void 0:e.descr))return void I("Die Beschreibung darf nicht leer sein.");if(0===(null===(s=this.measure)||void 0===s?void 0:s.solveRisks.length))return void I("Eine Maßnahme muss mindestens eine Gefährdung lösen.");if(void 0===this.measure)return void I("Etwas ist schief gelaufen.");const i={descr:this.measure.descr,solveRisks:[...this.measure.solveRisks],causeRisks:[...this.measure.causeRisks]};this.createNew&&V.measures.add(i).then((e=>{I("Die Maßnahme wurde hinzugefügt.","success"),this.$emit("hasAdded",{id:e,...this.measure})})).catch((e=>{throw I("Beim Speichern ist ein Fehler aufgetreten.","danger"),e})),void 0!==this.id?V.measures.update(this.id,i).then((()=>{I("Änderungen gespeichert.","success"),this.$emit("hasSaved",{id:this.id,...this.measure})})).catch((e=>{throw I("Beim Speichern ist ein Fehler aufgetreten.","warning"),e})):I("Ungültige ID","danger")}},mounted(){this.measure=this.defaultValues,console.log(this.measure),this.loadFromDb()}},w=r(s,[["render",function(e,s,i,a,t,l){const u=o("ion-input"),d=o("ion-item"),n=o("ion-list"),r=o("ion-label"),p=o("ion-button"),_=o("ion-list-header"),R=o("RiskList"),b=o("RiskCatalog"),y=o("GenericEditModal");return t.measure?(c(),m(k,{key:0},[h(n,{inset:""},{default:v((()=>[h(d,null,{default:v((()=>[h(u,{label:"Beschreibung","label-placement":"floating",modelValue:t.measure.descr,"onUpdate:modelValue":s[0]||(s[0]=e=>t.measure.descr=e)},null,8,["modelValue"])])),_:1})])),_:1}),h(R,{modelValue:t.measure.solveRisks,"onUpdate:modelValue":s[2]||(s[2]=e=>t.measure.solveRisks=e),"forbid-deletion":"",inverted:"",inset:""},{header:v((()=>[h(_,null,{default:v((()=>[h(r,null,{default:v((()=>[f("Maßnahme für...")])),_:1}),h(p,{onClick:s[1]||(s[1]=e=>t.addSolvedRisks=!0)},{default:v((()=>[f("Hinzufügen")])),_:1})])),_:1})])),_:1},8,["modelValue"]),h(y,{"is-open":t.addSolvedRisks,onWillDismiss:s[4]||(s[4]=e=>t.addSolvedRisks=!1),"hide-save":""},{default:v((()=>[h(b,{modelValue:t.measure.solveRisks,"onUpdate:modelValue":s[3]||(s[3]=e=>t.measure.solveRisks=e),"link-to-function":()=>{}},null,8,["modelValue"])])),_:1},8,["is-open"]),h(R,{modelValue:t.measure.causeRisks,"onUpdate:modelValue":s[6]||(s[6]=e=>t.measure.causeRisks=e),"forbid-deletion":"",inverted:"",inset:""},{header:v((()=>[h(_,null,{default:v((()=>[h(r,null,{default:v((()=>[f("Verursachte Gefährdungen...")])),_:1}),h(p,{onClick:s[5]||(s[5]=e=>t.addCausedRisks=!0)},{default:v((()=>[f("Hinzufügen")])),_:1})])),_:1})])),_:1},8,["modelValue"]),h(y,{"is-open":t.addCausedRisks,onWillDismiss:s[8]||(s[8]=e=>t.addCausedRisks=!1),"hide-save":""},{default:v((()=>[h(b,{modelValue:t.measure.causeRisks,"onUpdate:modelValue":s[7]||(s[7]=e=>t.measure.causeRisks=e),"link-to-function":()=>{},exclude:t.measure.solveRisks},null,8,["modelValue","exclude"])])),_:1},8,["is-open"])],64)):g("",!0)}]]);e("default",p({__name:"MeasureEditPage",setup(e){let s,a={descr:"",solveRisks:[],causeRisks:[]},t=!1;const l=_();if("/measures/new"===l.path){if(t=!0,void 0!==l.query.for){let e=parseInt(l.query.for);a.solveRisks.push(e)}}else s=parseInt(l.params.id);return(e,l)=>(c(),R(i,{onShouldCancel:l[2]||(l[2]=s=>e.$router.back()),onSubmit:l[3]||(l[3]=s=>{e.$refs.editor.saveToDb()})},{default:v((()=>[(c(),R(b,null,{default:v((()=>[h(w,{ref:"editor",id:y(s),"create-new":y(t),"default-values":y(a),onHasAdded:l[0]||(l[0]=s=>e.$router.back()),onHasSaved:l[1]||(l[1]=s=>e.$router.back())},null,8,["id","create-new","default-values"])])),_:1}))])),_:1}))}}))}}}));
