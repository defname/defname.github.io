import{d as y,u as I,e as R,o as f,c as p,w as s,f as e,g as V,b as r,r as c,i as g,j as l,t as m,a as M,ak as b,l as _,E as B,I as A,h as T,k as h,F as v}from"./index-5rsASdAi.js";import{u as N}from"./riskassessment-yCzzjVhw.js";import{l as w}from"./liveriskstree-pxGe7UlO.js";import{l as x}from"./livequery-M4HMqvFe.js";import{_ as E}from"./MeasureCatalog.vue_vue_type_script_setup_true_lang-GE2hcMwK.js";import{_ as L}from"./AddedByList.vue_vue_type_script_setup_true_lang-2ZuiM781.js";import{T as C}from"./TemplateRiskAssessmentPage-kaU-BqH1.js";import"./helpers-2Jj7VzUw.js";import"./GenericList.vue_vue_type_script_setup_true_lang-FY7Hjaf2.js";const $={style:{"font-size":"1.2rem","margin-bottom":"0.3rem"}},q=y({__name:"RAEditRiskEntry",setup(z){const t=N(),i=x.table("measures"),a=parseInt(I().params.riskId),o=w.getAsRef(a),k=R(()=>{if(!i.isReady().value)return[];t.getMeasures(a).map(u=>i.get(u))});return t.getMeasures(a),(u,n)=>(f(),p(C,null,{default:s(()=>[e(o)&&e(t).isReady&&e(i).isReady()?(f(),V(v,{key:0},[r(e(A),{lines:"none"},{default:s(()=>[r(e(c),{class:"ion-margin-bottom"},{default:s(()=>[r(e(g),{position:"stacked"},{default:s(()=>[l(m(e(o).factor.category.descr)+" ➤ "+m(e(o).factor.descr),1)]),_:1}),M("p",$,m(e(o).descr),1),e(t).getMeta(e(a)).addedBy.length>0?(f(),p(e(b),{key:0},{default:s(()=>[r(L,{"trigger-list":e(t).getMeta(e(a)).addedBy},null,8,["trigger-list"])]),_:1})):_("",!0)]),_:1}),r(e(c),null,{default:s(()=>[l(m(e(t).getMeta(e(a)))+" ",1),r(e(B),{label:"Kommentar","auto-grow":"","label-placement":"floating",modelValue:e(t).getMeta(e(a)).comment,"onUpdate:modelValue":n[0]||(n[0]=d=>e(t).getMeta(e(a)).comment=d)},null,8,["modelValue"])]),_:1})]),_:1}),r(E,{modelValue:e(t).measures[e(a)],"onUpdate:modelValue":n[1]||(n[1]=d=>e(t).measures[e(a)]=d),entries:k.value,inverted:""},{header:s(()=>[r(e(T),null,{default:s(()=>[r(e(g),null,{default:s(()=>[l("Ausgewählte Maßnahmen")]),_:1}),r(e(h),{"router-link":u.$route.path+"/addmeasures"},{default:s(()=>[l("Hinzufügen")]),_:1},8,["router-link"])]),_:1})]),_:1},8,["modelValue","entries"])],64)):_("",!0)]),_:1}))}});export{q as default};
