import{_ as v}from"./GenericEditModal.vue_vue_type_script_lang-9WlQ5Mgf.js";import{_ as S}from"../../plugin-vue_export-helper-x3n3nnut.js";import{U as t,C as i,D as a,E as n,F as e,Q as d,O as c,N as u,$ as W}from"../../vendor-fe-4Mo55.js";function p(m,y,o,D,x,l){const s=t("ion-icon"),_=t("ion-button"),r=t("ion-buttons"),f=t("ion-title"),C=t("ion-toolbar"),k=t("ion-header"),b=t("ion-content"),h=t("ion-modal");return i(),a(h,{ref:"modal",onWillPresent:l.onWillPresent,onWillDismiss:l.onWillDismiss},{default:n(()=>[e(k,null,{default:n(()=>[e(C,null,{default:n(()=>[o.hideCancel?u("",!0):(i(),a(r,{key:0,slot:"start"},{default:n(()=>[e(_,{onClick:l.cancel},{default:n(()=>[e(s,{icon:o.iconCancel,slot:o.captionCancel?"start":"icon-only"},null,8,["icon","slot"]),c(" "+d(o.captionCancel),1)]),_:1},8,["onClick"])]),_:1})),e(f,null,{default:n(()=>[c("Bearbeiten")]),_:1}),o.hideSave?u("",!0):(i(),a(r,{key:1,slot:"end"},{default:n(()=>[e(_,{strong:!0,onClick:l.save},{default:n(()=>[e(s,{icon:o.iconSave,slot:o.captionSave?"end":"icon-only"},null,8,["icon","slot"]),c(" "+d(o.captionSave),1)]),_:1},8,["onClick"])]),_:1}))]),_:1})]),_:1}),e(b,{class:"ion-padding"},{default:n(()=>[W(m.$slots,"default")]),_:3})]),_:3},8,["onWillPresent","onWillDismiss"])}const P=S(v,[["render",p]]);export{P as G};
