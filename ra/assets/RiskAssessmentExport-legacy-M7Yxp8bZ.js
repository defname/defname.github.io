System.register(["./index-legacy-IpYMk95T.js","./riskassessment-legacy-BsFxfJQP.js","./helpers-legacy-NeTv2MoC.js","./TemplateRiskAssessmentPage-legacy-PhbrePjF.js","./livequery-legacy-tw_pjM41.js","./liveriskstree-legacy-NBd86sO6.js"],(function(n,e){"use strict";var l,t,s,u,r,i,a,c,d,o,h,g,p,m,f,k,y,b,v,A,T,H,M;return{setters:[n=>{l=n.d,t=n.x,s=n.o,u=n.c,r=n.w,i=n.b,a=n.j,c=n.f,d=n.k,o=n.H,h=n.J,g=n.K,p=n.a,m=n.t,f=n.g,k=n.l,y=n.R,b=n.F,v=n.G},n=>{A=n.u,T=n.b},n=>{H=n.S},n=>{M=n.T},null,null],execute:function(){const e={id:"print"},E=p("h1",null,"Einsatzplanung",-1),L=p("p",null," Es wird grundsätzlich nach den geltenden Regeln und Vorschriften der DGUV, dem Arbeitsschutzgesetz, der BetrSichV, den TRBS und der FISAT FSR-SZP gearbeitet. ",-1),j=p("strong",null,"Ausführende Firma:",-1),z=p("strong",null,"Einsatzdatum:",-1),_=p("strong",null,"Einsatzort:",-1),w=p("strong",null,"Durchzuführende Arbeiten:",-1),D=p("br",null,null,-1),G={key:0},S=p("strong",null,"Aufsichtsführende Höhenarbeiter:",-1),x=p("p",null,[p("strong",null,"Höhenarbeiter:")],-1),R=p("thead",null,[p("tr",null,[p("th",null,"Name"),p("th",null,"FISAT-Nr"),p("th",null,"Level")])],-1),F=p("strong",null,"Ausrüstung:",-1),I=p("h2",null,"Zugangsverfahren",-1),P={key:0},B=p("strong",null,"Einstieg:",-1),N=["innerHTML"],V={key:1},Z=p("strong",null,"Ausstieg:",-1),q=["innerHTML"],C={key:2},U=p("strong",null,"Anschlagpunkte:",-1),J=["innerHTML"],K=["innerHTML"],W=p("h2",null,"Notfall- und Rettungsplan",-1),$=["innerHTML"],O=p("h1",null,"Gefährdungsermittlung",-1),Q={key:0},X={key:1},Y={key:2},nn=p("thead",null,[p("tr",null,[p("th",null,"Gefährdung"),p("th",null,"Maßnahme")])],-1),en={colspan:"2"},ln={class:"factor"},tn={key:0},sn=p("h1",null,"Empfangsbestätigung",-1),un=p("p",null," Es wird bestätigt, über Gefahren und Maßnahmen aufgeklärt worden zu sein. ",-1),rn=["src"];n("default",l({__name:"RiskAssessmentExport",setup(n){const l=A(),an=T();async function cn(){!function(n){const e=window.open("","print","");if(!e)return;e.open(),e.document.write(`<html>\n    <head>\n        <link rel="stylesheet" href="/ra/print.css" />\n    </head>\n    <body>${n.outerHTML}\n    </body>\n    </html>`),e.document.close();const l=e.document.createElement("script");l.setAttribute("src","/ra/print.js"),e.document.head.appendChild(l)}(document.getElementById("print"))}return t(""),(n,t)=>(s(),u(M,null,{default:r((()=>[i(c(d),{"router-link":"/riskassessment/"+c(l).id+"/sign"},{default:r((()=>[a("Unterzeichnen")])),_:1},8,["router-link"]),i(c(d),{onClick:t[0]||(t[0]=n=>cn())},{default:r((()=>[a("Drucken")])),_:1}),i(c(v),null,{default:r((()=>[i(c(o),null,{default:r((()=>[i(c(h),null,{default:r((()=>[a("Druckvorschau")])),_:1})])),_:1}),i(c(g),null,{default:r((()=>[p("div",e,[E,L,p("p",null,[j,a(" "+m(c(an).company),1)]),p("p",null,[z,a(" "+m(c(an).startDate)+" "+m(c(an).endDate?c(an).endDate:""),1)]),p("p",null,[_,a(" "+m(c(an).address),1)]),p("p",null,[w,D,a(" "+m(c(an).jobDescr),1)]),c(an).supervisors?(s(),f("p",G,[S,a(" "+m(c(an).supervisors.map((n=>n.name)).join(", ")),1)])):k("",!0),x,p("table",null,[R,(s(!0),f(b,null,y(c(an).technicians,(n=>{var e,l;return s(),f("tr",null,[p("td",null,m(n.name),1),p("td",null,m(null===(e=n.fisat)||void 0===e?void 0:e.id),1),p("td",null,m(null===(l=n.fisat)||void 0===l?void 0:l.level),1)])})),256))]),p("p",null,[F,p("ul",null,[(s(!0),f(b,null,y(c(an).equipment,(n=>(s(),f("li",null,m(n.descr),1)))),256))])]),I,(s(!0),f(b,null,y(c(an).access,(n=>(s(),f(b,null,[p("p",null,[p("strong",null,m(n.title),1)]),n.access?(s(),f("p",P,[B,a(),p("span",{innerHTML:n.access},null,8,N)])):k("",!0),n.exit?(s(),f("p",V,[Z,a(),p("span",{innerHTML:n.exit},null,8,q)])):k("",!0),n.anchorPoints?(s(),f("p",C,[U,a(),p("span",{innerHTML:n.anchorPoints},null,8,J)])):k("",!0),n.comment?(s(),f("p",{key:3,innerHTML:n.comment},null,8,K)):k("",!0)],64)))),256)),W,(s(!0),f(b,null,y(c(an).access,(n=>(s(),f(b,null,[p("p",null,[p("strong",null,m(n.title),1)]),p("p",{innerHTML:n.rescue},null,8,$)],64)))),256)),O,(s(!0),f(b,null,y([c(H).Access,c(H).Environment,c(H).Work],(n=>(s(),f(b,null,[n===c(H).Access?(s(),f("h3",Q,"Gefahren durch die ausgewählten Zugangstechniken")):n===c(H).Environment?(s(),f("h3",X,"Gefahren durch die Arbeitsumgebung")):(s(),f("h3",Y,"Gefahren durch die Arbeit")),p("table",null,[nn,p("tbody",null,[(s(!0),f(b,null,y(c(an).categories,(e=>(s(),f(b,null,[e.risks.filter((e=>e.risk.sector===n)).length?(s(),f(b,{key:0},[p("tr",null,[p("th",en,m(e.descr),1)]),(s(!0),f(b,null,y(e.risks.filter((e=>e.risk.sector===n)),(n=>(s(),f("tr",null,[p("td",null,[p("span",ln,m(n.risk.factor.descr),1),a(" "+m(n.risk.descr),1)]),p("td",null,[n.measures.length>1?(s(),f("ul",tn,[(s(!0),f(b,null,y(n.measures,(n=>(s(),f("li",null,m(n.descr),1)))),256))])):1===n.measures.length?(s(),f(b,{key:1},[a(m(n.measures[0].descr),1)],64)):k("",!0)])])))),256))],64)):k("",!0)],64)))),256))])])],64)))),256)),sn,un,(s(!0),f(b,null,y(c(an).signatures,(n=>(s(),f("div",null,[p("img",{src:n.signature},null,8,rn)])))),256))])])),_:1})])),_:1})])),_:1}))}}))}}}));