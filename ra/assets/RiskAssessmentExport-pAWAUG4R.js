import{d as k,G as T,o as t,c as y,w as m,b,j as d,f as r,k as H,a as e,t as l,g as s,l as h,V as a,F as i}from"./index-oWrzEUv7.js";import{u as L,b as A}from"./riskassessment-V5H7yVQ5.js";import{T as M}from"./TemplateRiskAssessmentPage-DZJJYMX5.js";import"./helpers-IDUXs_Eo.js";import"./livequery-uY1wsXKv.js";import"./liveriskstree-x-rP5pdV.js";const x={id:"print"},E=e("h1",null,"Einsatzplanung",-1),D=e("p",null," Es wird grundsätzlich nach den geltenden Regeln und Vroschriften der DGUV, dem Arbeitsschutzgesetz, der BetrSichV, den TRBS und der FISAT FSR-SZP gearbeitet. ",-1),B=e("strong",null,"Ausführende Firma:",-1),V=e("strong",null,"Einsatzdatum:",-1),v=e("strong",null,"Einsatzort:",-1),z=e("strong",null,"Durchzuführende Arbeiten:",-1),N=e("br",null,null,-1),R={key:0},S=e("strong",null,"Aufsichtsführende Höhenarbeiter:",-1),F=e("p",null,[e("strong",null,"Höhenarbeiter:")],-1),G={style:{width:"100%"}},w=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"FISAT-Nr"),e("th",null,"Level")])],-1),C=e("strong",null,"Ausrüstung:",-1),I=e("h2",null,"Zugangsverfahren",-1),P={key:0},j=e("strong",null,"Einstieg:",-1),Z=["innerHTML"],$={key:1},q=e("strong",null,"Ausstieg:",-1),U=["innerHTML"],J={key:2},K=e("strong",null,"Anschlagpunkte:",-1),O=["innerHTML"],Q=["innerHTML"],W=e("h2",null,"Notfall- und Rettungsplan",-1),X=["innerHTML"],Y=e("h1",null,"Gefährdungsermittlung",-1),ee=e("h3",null,"Gefahren durch die ausgewählten Zugangstechniken",-1),ne={style:{width:"100%"}},te=e("thead",null,[e("tr",null,[e("th",null,"Gefährdung"),e("th",null,"Maßnahme")])],-1),se={style:{"border-top":"1px solid"}},le={key:0},_e=k({__name:"RiskAssessmentExport",setup(re){L();const u=A();T("");function g(c){const o=window.open("","print","");o==null||o.open(),o==null||o.document.write('<html>\n    <head>\n        <link rel="stylesheet" href="/ra/print.css" />\n    </head>\n    <body>'.concat(c.innerHTML,"</body>\n    </html>")),o==null||o.print()}function f(){g(document.getElementById("print"))}return(c,o)=>(t(),y(M,null,{default:m(()=>[b(r(H),{onClick:o[0]||(o[0]=n=>f())},{default:m(()=>[d("Drucken")]),_:1}),e("div",x,[E,D,e("p",null,[B,d(" "+l(r(u).company),1)]),e("p",null,[V,d(" "+l(r(u).startDate)+" "+l(r(u).endDate?r(u).endDate:""),1)]),e("p",null,[v,d(" "+l(r(u).address),1)]),e("p",null,[z,N,d(" "+l(r(u).jobDescr),1)]),r(u).supervisors?(t(),s("p",R,[S,d(" "+l(r(u).supervisors.map(n=>n.name).join(", ")),1)])):h("",!0),F,e("table",G,[w,(t(!0),s(i,null,a(r(u).technicians,n=>{var _,p;return t(),s("tr",null,[e("td",null,l(n.name),1),e("td",null,l((_=n.fisat)==null?void 0:_.id),1),e("td",null,l((p=n.fisat)==null?void 0:p.level),1)])}),256))]),e("p",null,[C,e("ul",null,[(t(!0),s(i,null,a(r(u).equipment,n=>(t(),s("li",null,l(n.descr),1))),256))])]),I,(t(!0),s(i,null,a(r(u).access,n=>(t(),s(i,null,[e("p",null,[e("strong",null,l(n.title),1)]),n.access?(t(),s("p",P,[j,d(),e("span",{innerHTML:n.access},null,8,Z)])):h("",!0),n.exit?(t(),s("p",$,[q,d(),e("span",{innerHTML:n.exit},null,8,U)])):h("",!0),n.anchorPoints?(t(),s("p",J,[K,d(),e("span",{innerHTML:n.anchorPoints},null,8,O)])):h("",!0),n.comment?(t(),s("p",{key:3,innerHTML:n.comment},null,8,Q)):h("",!0)],64))),256)),W,(t(!0),s(i,null,a(r(u).access,n=>(t(),s(i,null,[e("p",null,[e("strong",null,l(n.title),1)]),e("p",{innerHTML:n.rescue},null,8,X)],64))),256)),Y,ee,(t(!0),s(i,null,a(r(u).risks,n=>(t(),s(i,null,[e("p",null,l(n.risk.descr),1),e("p",null,l(n.meta),1)],64))),256)),e("table",ne,[te,(t(!0),s(i,null,a(r(u).risks,n=>(t(),s("tr",se,[e("td",null,l(n.risk.descr),1),e("td",null,[n.measures.length>1?(t(),s("ul",le,[(t(!0),s(i,null,a(n.measures,_=>(t(),s("li",null,l(_.descr),1))),256))])):n.measures.length===1?(t(),s(i,{key:1},[d(l(n.measures[0].descr),1)],64)):h("",!0)])]))),256))])])]),_:1}))}});export{_e as default};