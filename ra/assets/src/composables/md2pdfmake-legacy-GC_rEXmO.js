System.register([],(function(t,e){"use strict";return{execute:function(){function e(t){const e=t.split(/(\*\*|\*)/g).filter((t=>""!==t));return e.forEach((t=>{})),{text:e}}t({a:function(){return{emphasis:{italics:!0},strong:{bold:!0}}},s:function(t,n){const s=t.split("\n").map((t=>t.trimEnd())).reduce(((t,e)=>""!==e||0!==t.length&&""!==t.slice(-1)[0]?[...t,e]:t),[]),i=[[]];let r=0;return s.forEach((t=>{if(""===t)return r++,void i.push([]);i[r].push(t)})),i.map((t=>t.length>1&&t[0].startsWith("- ")&&t[1].startsWith("- ")?{ul:t.map((t=>e(t.slice(2)))),style:"ul"}:t.length>1&&t[0].match(/^\d+\. /)&&t[1].match(/^\d+\. /)?{ol:t.map((t=>e(t.match(/^\d+\. (.*)/)[1]))),style:"ol"}:{text:[e(t.map((t=>t.trim())).join(" "))],style:"p"}))}})}}}));
