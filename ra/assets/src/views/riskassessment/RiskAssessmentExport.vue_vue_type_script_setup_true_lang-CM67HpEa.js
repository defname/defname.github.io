import{y as C,t as E,bi as w,C as t,D as x,E as c,F as h,O as i,u as s,_ as k,ba as z,bb as I,b3 as G,P as n,Q as u,J as l,N as p,L as _,M as a,b4 as $}from"../../../vendor-fe-4Mo55.js";import{u as B,a as N}from"../../composables/riskassessment-yedfBpr3.js";import{G as P}from"../../components/GenericEditModal-0xE-bflg.js";import{S as f}from"../../composables/database-EV4tUyzx.js";import{T as S}from"../../components/TemplateRiskAssessmentPage-jWM7FwVS.js";import{S as V}from"../../components/SignatureInput-vFhBPR11.js";import{u as F}from"../../composables/pdfexport-Nf5L2g7o.js";const R={id:"print"},U=n("h1",null,"Einsatzplanung",-1),j=n("p",null," Es wird grundsätzlich nach den geltenden Regeln und Vorschriften der DGUV, dem Arbeitsschutzgesetz, der BetrSichV, den TRBS und der FISAT FSR-SZP gearbeitet. ",-1),W=n("strong",null,"Ausführende Firma:",-1),Z=n("strong",null,"Einsatzdatum:",-1),O=n("strong",null,"Einsatzort:",-1),q=n("strong",null,"Durchzuführende Arbeiten:",-1),J=n("br",null,null,-1),Q={key:0},K=n("strong",null,"Aufsichtsführende Höhenarbeiter:",-1),X=n("p",null,[n("strong",null,"Höhenarbeiter:")],-1),Y=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"FISAT-Nr"),n("th",null,"Level")])],-1),nn=n("strong",null,"Ausrüstung:",-1),en=n("h2",null,"Zugangsverfahren",-1),tn={key:0},sn=n("strong",null,"Einstieg:",-1),ln=["innerHTML"],rn={key:1},un=n("strong",null,"Ausstieg:",-1),on=["innerHTML"],an={key:2},dn=n("strong",null,"Anschlagpunkte:",-1),cn=["innerHTML"],hn=["innerHTML"],_n=n("h2",null,"Notfall- und Rettungsplan",-1),pn=["innerHTML"],mn=n("h1",null,"Gefährdungsermittlung",-1),gn={key:0},fn={key:1},kn={key:2},bn=n("thead",null,[n("tr",null,[n("th",null,"Gefährdung"),n("th",null,"Maßnahme")])],-1),yn={colspan:"2"},vn={class:"factor"},En={key:0},Tn=["src"],An={key:2},Dn=n("strong",null,"Ohne Unterschrift",-1),Mn=[Dn],Hn=n("h1",null,"Empfangsbestätigung",-1),Ln=n("p",null," Es wird bestätigt, über Gefahren und Maßnahmen aufgeklärt worden zu sein. ",-1),Cn=["src"],Pn=C({__name:"RiskAssessmentExport",setup(wn){const y=B(),{exportData:o,updateExportData:v}=N(),{open:T}=F(),A=E(void 0),b=E(!1);function D(g){const r=window.open("","print","");if(!r)return;r.open(),r.document.write('<html>\n    <head>\n        <link rel="stylesheet" href="/ra/print.css" />\n    </head>\n    <body>'.concat(g.outerHTML,"\n    </body>\n    </html>")),r.document.close();const e=r.document.createElement("script");e.setAttribute("src","/ra/print.js"),r.document.head.appendChild(e)}async function M(){D(document.getElementById("print"))}function H(g){y.signature=g,v()}return w(()=>{v()}),(g,r)=>(t(),x(S,null,{default:c(()=>[h(s(k),{"router-link":"/riskassessment/"+s(y).id+"/sign"},{default:c(()=>[i("Unterzeichnen (Technicker)")]),_:1},8,["router-link"]),h(s(k),{onClick:r[0]||(r[0]=e=>b.value=!0)},{default:c(()=>[i("Unterzeichnen")]),_:1}),h(s(k),{onClick:r[1]||(r[1]=e=>M())},{default:c(()=>[i("Drucken")]),_:1}),h(s(k),{onClick:r[2]||(r[2]=e=>s(T)())},{default:c(()=>[i("PDF")]),_:1}),h(P,{"is-open":b.value,"hide-save":"",onWillDismiss:r[3]||(r[3]=e=>b.value=!1),onDidPresent:r[4]||(r[4]=e=>g.$refs.signatureinput.updateDimensions())},{default:c(()=>[h(V,{onSignature:H,ref_key:"signatureinput",ref:A},null,512)]),_:1},8,["is-open"]),h(s($),null,{default:c(()=>[h(s(z),null,{default:c(()=>[h(s(I),null,{default:c(()=>[i("Druckvorschau")]),_:1})]),_:1}),h(s(G),null,{default:c(()=>[n("div",R,[U,j,n("p",null,[W,i(" "+u(s(o).company),1)]),n("p",null,[Z,i(" "+u(s(o).startDate)+" "+u(s(o).endDate?s(o).endDate:""),1)]),n("p",null,[O,i(" "+u(s(o).address),1)]),n("p",null,[q,J,i(" "+u(s(o).jobDescr),1)]),s(o).supervisors?(t(),l("p",Q,[K,i(" "+u(s(o).supervisors.map(e=>e.name).join(", ")),1)])):p("",!0),X,n("table",null,[Y,(t(!0),l(a,null,_(s(o).technicians,e=>{var m,d;return t(),l("tr",null,[n("td",null,u(e.name),1),n("td",null,u((m=e.fisat)==null?void 0:m.id),1),n("td",null,u((d=e.fisat)==null?void 0:d.level),1)])}),256))]),n("p",null,[nn,n("ul",null,[(t(!0),l(a,null,_(s(o).equipment,e=>(t(),l("li",null,u(e.descr),1))),256))])]),en,(t(!0),l(a,null,_(s(o).access,e=>(t(),l(a,null,[n("p",null,[n("strong",null,u(e.title),1)]),e.access?(t(),l("p",tn,[sn,i(),n("span",{innerHTML:e.access},null,8,ln)])):p("",!0),e.exit?(t(),l("p",rn,[un,i(),n("span",{innerHTML:e.exit},null,8,on)])):p("",!0),e.anchorPoints?(t(),l("p",an,[dn,i(),n("span",{innerHTML:e.anchorPoints},null,8,cn)])):p("",!0),e.comment?(t(),l("p",{key:3,innerHTML:e.comment},null,8,hn)):p("",!0)],64))),256)),_n,(t(!0),l(a,null,_(s(o).access,e=>(t(),l(a,null,[n("p",null,[n("strong",null,u(e.title),1)]),n("p",{innerHTML:e.rescue},null,8,pn)],64))),256)),mn,(t(!0),l(a,null,_([s(f).Access,s(f).Environment,s(f).Work],e=>(t(),l(a,null,[e===s(f).Access?(t(),l("h3",gn,"Gefahren durch die ausgewählten Zugangstechniken")):e===s(f).Environment?(t(),l("h3",fn,"Gefahren durch die Arbeitsumgebung")):(t(),l("h3",kn,"Gefahren durch die Arbeit")),n("table",null,[bn,n("tbody",null,[(t(!0),l(a,null,_(s(o).categories,m=>(t(),l(a,null,[m.risks.filter(d=>d.risk.sector===e).length?(t(),l(a,{key:0},[n("tr",null,[n("th",yn,u(m.descr),1)]),(t(!0),l(a,null,_(m.risks.filter(d=>d.risk.sector===e),d=>(t(),l("tr",null,[n("td",null,[n("span",vn,u(d.risk.factor.descr),1),i(" "+u(d.risk.descr),1)]),n("td",null,[d.measures.length>1?(t(),l("ul",En,[(t(!0),l(a,null,_(d.measures,L=>(t(),l("li",null,u(L.descr),1))),256))])):d.measures.length===1?(t(),l(a,{key:1},[i(u(d.measures[0].descr),1)],64)):p("",!0)])]))),256))],64)):p("",!0)],64))),256))])])],64))),256)),s(o).signature?(t(),l("img",{key:1,src:s(o).signature.signature},null,8,Tn)):(t(),l("p",An,Mn)),Hn,Ln,(t(!0),l(a,null,_(s(o).signatures,e=>(t(),l("div",null,[n("img",{src:e.signature},null,8,Cn)]))),256))])]),_:1})]),_:1})]),_:1}))}});export{Pn as _};
