import{y as m,x as p,C as o,J as t,F as c,u,Z as V,M as f,L as g,P as C,D as T,E as k,Q as b,O as B,b6 as I}from"../../vendor-fe-4Mo55.js";const h={class:"tag-input"},v=C("br",null,null,-1),F=m({__name:"TagInput",props:{modelValue:{},allTags:{}},setup(r){const n=r,d=p(()=>{console.log("FOO");const e=new Set([...n.allTags,...n.modelValue]);return console.log(e),[...e]});return(e,s)=>(o(),t("div",h,[c(u(V),{label:"Tags","label-placement":"floating",modelValue:e.modelValue.join(" "),"onUpdate:modelValue":s[0]||(s[0]=l=>e.$emit("update:modelValue",l.split(" ").map(a=>a.trim().toLowerCase()).filter(a=>a!=="")))},null,8,["modelValue"]),v,(o(!0),t(f,null,g(d.value,l=>(o(),T(u(I),{outline:!e.modelValue.includes(l),onClick:a=>e.$emit("update:modelValue",e.modelValue.includes(l)?e.modelValue.filter(i=>i!==l):[...e.modelValue,l])},{default:k(()=>[B(b(l),1)]),_:2},1032,["outline","onClick"]))),256))]))}});export{F as _};
