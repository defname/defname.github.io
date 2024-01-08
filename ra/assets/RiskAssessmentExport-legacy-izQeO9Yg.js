System.register(["./index-legacy-dNI7AN09.js","./riskassessment-legacy-9eQx62Ou.js","./GenericEditModal-legacy-GZKP2IZM.js","./helpers-legacy-AqRZ00pO.js","./TemplateRiskAssessmentPage-legacy-gcFzPTaI.js","./SignatureInput-legacy-0Efab3Wo.js","./livequery-legacy-4DUv93Zw.js","./liveriskstree-legacy-Lsh6y_hv.js","./index-legacy-RRv_Ytq9.js"],(function(n,e){"use strict";var l,t,s,u,r,i,a,c,d,o,g,h,p,m,f,k,y,v,b,T,A,H,M,j,E;return{setters:[n=>{l=n.d,t=n.x,s=n.o,u=n.c,r=n.w,i=n.b,a=n.j,c=n.f,d=n.k,o=n.H,g=n.J,h=n.K,p=n.a,m=n.t,f=n.g,k=n.l,y=n.R,v=n.F,b=n.G},n=>{T=n.u,A=n.b},n=>{H=n.G},n=>{M=n.S},n=>{j=n.T},n=>{E=n.S},null,null,null],execute:function(){const e={id:"print"},L=p("h1",null,"Einsatzplanung",-1),_=p("p",null," Es wird grundsätzlich nach den geltenden Regeln und Vorschriften der DGUV, dem Arbeitsschutzgesetz, der BetrSichV, den TRBS und der FISAT FSR-SZP gearbeitet. ",-1),z=p("strong",null,"Ausführende Firma:",-1),D=p("strong",null,"Einsatzdatum:",-1),S=p("strong",null,"Einsatzort:",-1),G=p("strong",null,"Durchzuführende Arbeiten:",-1),w=p("br",null,null,-1),x={key:0},R=p("strong",null,"Aufsichtsführende Höhenarbeiter:",-1),F=p("p",null,[p("strong",null,"Höhenarbeiter:")],-1),I=p("thead",null,[p("tr",null,[p("th",null,"Name"),p("th",null,"FISAT-Nr"),p("th",null,"Level")])],-1),P=p("strong",null,"Ausrüstung:",-1),N=p("h2",null,"Zugangsverfahren",-1),U={key:0},B=p("strong",null,"Einstieg:",-1),C=["innerHTML"],V={key:1},Z=p("strong",null,"Ausstieg:",-1),q=["innerHTML"],K={key:2},W=p("strong",null,"Anschlagpunkte:",-1),$=["innerHTML"],J=["innerHTML"],O=p("h2",null,"Notfall- und Rettungsplan",-1),Q=["innerHTML"],X=p("h1",null,"Gefährdungsermittlung",-1),Y={key:0},nn={key:1},en={key:2},ln=p("thead",null,[p("tr",null,[p("th",null,"Gefährdung"),p("th",null,"Maßnahme")])],-1),tn={colspan:"2"},sn={class:"factor"},un={key:0},rn=["src"],an={key:2},cn=[p("strong",null,"Ohne Unterschrift",-1)],dn=p("h1",null,"Empfangsbestätigung",-1),on=p("p",null," Es wird bestätigt, über Gefahren und Maßnahmen aufgeklärt worden zu sein. ",-1),gn=["src"];n("default",l({__name:"RiskAssessmentExport",setup(n){const l=T(),hn=A(),pn=t(void 0),mn=t(!1);async function fn(){!function(n){const e=window.open("","print","");if(!e)return;e.open(),e.document.write(`<html>\n    <head>\n        <link rel="stylesheet" href="/ra/print.css" />\n    </head>\n    <body>${n.outerHTML}\n    </body>\n    </html>`),e.document.close();const l=e.document.createElement("script");l.setAttribute("src","/ra/print.js"),e.document.head.appendChild(l)}(document.getElementById("print"))}function kn(n){l.signature=n}return(n,t)=>(s(),u(j,null,{default:r((()=>[i(c(d),{"router-link":"/riskassessment/"+c(l).id+"/sign"},{default:r((()=>[a("Unterzeichnen (Technicker)")])),_:1},8,["router-link"]),i(c(d),{onClick:t[0]||(t[0]=n=>mn.value=!0)},{default:r((()=>[a("Unterzeichnen")])),_:1}),i(c(d),{onClick:t[1]||(t[1]=n=>fn())},{default:r((()=>[a("Drucken")])),_:1}),i(H,{"is-open":mn.value,"hide-save":"",onWillDismiss:t[2]||(t[2]=n=>mn.value=!1),onDidPresent:t[3]||(t[3]=e=>n.$refs.signatureinput.updateDimensions())},{default:r((()=>[i(E,{onSignature:kn,ref_key:"signatureinput",ref:pn},null,512)])),_:1},8,["is-open"]),i(c(b),null,{default:r((()=>[i(c(o),null,{default:r((()=>[i(c(g),null,{default:r((()=>[a("Druckvorschau")])),_:1})])),_:1}),i(c(h),null,{default:r((()=>[p("div",e,[L,_,p("p",null,[z,a(" "+m(c(hn).company),1)]),p("p",null,[D,a(" "+m(c(hn).startDate)+" "+m(c(hn).endDate?c(hn).endDate:""),1)]),p("p",null,[S,a(" "+m(c(hn).address),1)]),p("p",null,[G,w,a(" "+m(c(hn).jobDescr),1)]),c(hn).supervisors?(s(),f("p",x,[R,a(" "+m(c(hn).supervisors.map((n=>n.name)).join(", ")),1)])):k("",!0),F,p("table",null,[I,(s(!0),f(v,null,y(c(hn).technicians,(n=>{var e,l;return s(),f("tr",null,[p("td",null,m(n.name),1),p("td",null,m(null===(e=n.fisat)||void 0===e?void 0:e.id),1),p("td",null,m(null===(l=n.fisat)||void 0===l?void 0:l.level),1)])})),256))]),p("p",null,[P,p("ul",null,[(s(!0),f(v,null,y(c(hn).equipment,(n=>(s(),f("li",null,m(n.descr),1)))),256))])]),N,(s(!0),f(v,null,y(c(hn).access,(n=>(s(),f(v,null,[p("p",null,[p("strong",null,m(n.title),1)]),n.access?(s(),f("p",U,[B,a(),p("span",{innerHTML:n.access},null,8,C)])):k("",!0),n.exit?(s(),f("p",V,[Z,a(),p("span",{innerHTML:n.exit},null,8,q)])):k("",!0),n.anchorPoints?(s(),f("p",K,[W,a(),p("span",{innerHTML:n.anchorPoints},null,8,$)])):k("",!0),n.comment?(s(),f("p",{key:3,innerHTML:n.comment},null,8,J)):k("",!0)],64)))),256)),O,(s(!0),f(v,null,y(c(hn).access,(n=>(s(),f(v,null,[p("p",null,[p("strong",null,m(n.title),1)]),p("p",{innerHTML:n.rescue},null,8,Q)],64)))),256)),X,(s(!0),f(v,null,y([c(M).Access,c(M).Environment,c(M).Work],(n=>(s(),f(v,null,[n===c(M).Access?(s(),f("h3",Y,"Gefahren durch die ausgewählten Zugangstechniken")):n===c(M).Environment?(s(),f("h3",nn,"Gefahren durch die Arbeitsumgebung")):(s(),f("h3",en,"Gefahren durch die Arbeit")),p("table",null,[ln,p("tbody",null,[(s(!0),f(v,null,y(c(hn).categories,(e=>(s(),f(v,null,[e.risks.filter((e=>e.risk.sector===n)).length?(s(),f(v,{key:0},[p("tr",null,[p("th",tn,m(e.descr),1)]),(s(!0),f(v,null,y(e.risks.filter((e=>e.risk.sector===n)),(n=>(s(),f("tr",null,[p("td",null,[p("span",sn,m(n.risk.factor.descr),1),a(" "+m(n.risk.descr),1)]),p("td",null,[n.measures.length>1?(s(),f("ul",un,[(s(!0),f(v,null,y(n.measures,(n=>(s(),f("li",null,m(n.descr),1)))),256))])):1===n.measures.length?(s(),f(v,{key:1},[a(m(n.measures[0].descr),1)],64)):k("",!0)])])))),256))],64)):k("",!0)],64)))),256))])])],64)))),256)),c(hn).signature?(s(),f("img",{key:1,src:c(hn).signature.signature},null,8,rn)):(s(),f("p",an,cn)),dn,on,(s(!0),f(v,null,y(c(hn).signatures,(n=>(s(),f("div",null,[p("img",{src:n.signature},null,8,gn)])))),256))])])),_:1})])),_:1})])),_:1}))}}))}}}));
