import{d as k,f as e,o,g as b,b as a,w as t,r as v,i as u,j as n,t as y,I as h,h as c,c as i,l as f,F as B,u as C,s as R,v as _,k as m,n as p,x,y as $,z as A,A as D,S as M,B as N,C as V}from"./index-TA_wujje.js";import{_ as I}from"./RiskList.vue_vue_type_script_setup_true_lang-ZobMnSO7.js";import{l as w}from"./livequery-Avxi29E8.js";import"./RiskListItem-SmA2DyMJ.js";import"./helpers-XEDI7-F6.js";import"./GenericList.vue_vue_type_script_setup_true_lang-fIxnK2Oy.js";import"./liveriskstree-7BD0GhmO.js";const L=k({__name:"MeasureDetails",props:{id:{type:Number,required:!0}},setup(d){const l=d,s=w.table("measures").getAsRef(l.id);return(r,g)=>e(s)?(o(),b(B,{key:0},[a(e(h),{inset:""},{default:t(()=>[a(e(v),null,{default:t(()=>[a(e(u),null,{default:t(()=>[n(y(e(s).descr),1)]),_:1})]),_:1})]),_:1}),a(I,{"model-value":e(s).solveRisks,"forbid-deletion":"",inverted:"","forbid-editing":"",inset:""},{header:t(()=>[a(e(c),null,{default:t(()=>[a(e(u),null,{default:t(()=>[n("Maßnahme für...")]),_:1})]),_:1})]),_:1},8,["model-value"]),Array.isArray(e(s).causeRisks)&&e(s).causeRisks.length>0?(o(),i(I,{key:0,"model-value":e(s).causeRisks,"forbid-deletion":"","forbid-editing":"",inverted:"",inset:""},{header:t(()=>[a(e(c),null,{default:t(()=>[a(e(u),null,{default:t(()=>[n("Verursachte Gefährdungen...")]),_:1})]),_:1})]),_:1},8,["model-value"])):f("",!0)],64)):f("",!0)}}),z=k({__name:"MeasureDetailsPage",setup(d){const l=parseInt(C().params.id);return(s,r)=>(o(),i(e(V),null,{default:t(()=>[a(e(D),null,{default:t(()=>[a(e(R),null,{default:t(()=>[a(e(_),{slot:"start"},{default:t(()=>[a(e(m),{onClick:r[0]||(r[0]=g=>s.$router.back())},{default:t(()=>[a(e(p),{icon:e(x),slot:"icon-only"},null,8,["icon"])]),_:1})]),_:1}),a(e($),null,{default:t(()=>[n("Details")]),_:1}),a(e(_),{slot:"end"},{default:t(()=>[a(e(m),{"router-link":"/measures/".concat(e(l),"/edit")},{default:t(()=>[a(e(p),{icon:e(A),slot:"icon-only"},null,8,["icon"])]),_:1},8,["router-link"])]),_:1})]),_:1})]),_:1}),a(e(N),{color:"light"},{default:t(()=>[(o(),i(M,null,{default:t(()=>[a(L,{id:e(l)},null,8,["id"])]),_:1}))]),_:1})]),_:1}))}});export{z as default};
