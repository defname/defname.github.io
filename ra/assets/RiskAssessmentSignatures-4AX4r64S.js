import{d as L,al as P,x as v,a2 as V,e as M,am as J,an as F,ao as q,ap as U,o as S,c as C,w as m,f as u,g as k,F as T,b as x,m as A,n as _,aq as j,q as W,U as $,l as E,a as D,R as z,C as G,G as X,j as B,K as Y,D as K,t as Q,_ as Z}from"./index-GiGbSzE5.js";import{T as tt}from"./TemplateRiskAssessmentPage-yMK-9Szp.js";import{u as et}from"./riskassessment-_DJ9f63x.js";import{i as it,n as st,a as nt,t as R,b as ot}from"./index-Ay4NRktw.js";import{l as at}from"./livequery-94J2AFfx.js";import"./helpers-jin3i-cC.js";import"./liveriskstree-PCEDwoX-.js";var rt=L({name:"VueDrawingCanvas",props:{strokeType:{type:String,validator:i=>["dash","line","square","circle","triangle","half_triangle"].indexOf(i)!==-1,default:()=>"dash"},fillShape:{type:Boolean,default:()=>!1},width:{type:[String,Number],default:()=>600},height:{type:[String,Number],default:()=>400},image:{type:String,default:()=>""},eraser:{type:Boolean,default:()=>!1},color:{type:String,default:()=>"#000000"},lineWidth:{type:Number,default:()=>5},lineCap:{type:String,validator:i=>["round","square","butt"].indexOf(i)!==-1,default:()=>"round"},lineJoin:{type:String,validator:i=>["miter","round","bevel"].indexOf(i)!==-1,default:()=>"miter"},lock:{type:Boolean,default:()=>!1},styles:{type:[Array,String,Object]},classes:{type:[Array,String,Object]},backgroundColor:{type:String,default:()=>"#FFFFFF"},backgroundImage:{type:String,default:()=>null},watermark:{type:Object,default:()=>null},saveAs:{type:String,validator:i=>["jpeg","png"].indexOf(i)!==-1,default:()=>"png"},canvasId:{type:String,default:()=>"VueDrawingCanvas"},initialImage:{type:Array,default:()=>[]},additionalImages:{type:Array,default:()=>[]},outputWidth:{type:Number},outputHeight:{type:Number}},data(){return{loadedImage:null,drawing:!1,context:null,images:[],strokes:{type:"",from:{x:0,y:0},coordinates:[],color:"",width:"",fill:!1,lineCap:"",lineJoin:""},guides:[],trash:[]}},mounted(){this.setContext(),this.$nextTick(()=>{this.drawInitialImage(),this.drawAdditionalImages()})},watch:{backgroundImage:function(){this.loadedImage=null}},methods:{async setContext(){let i=document.querySelector("#"+this.canvasId);this.context=this.context?this.context:i.getContext("2d"),await this.setBackground()},drawInitialImage(){this.initialImage&&this.initialImage.length>0&&(this.images=[].concat(this.images,this.initialImage),this.redraw(!0))},drawAdditionalImages(){if(this.additionalImages&&this.additionalImages.length>0){let i=document.querySelector("#"+this.canvasId);this.additionalImages.forEach(e=>{this.drawWatermark(i,this.context,e)})}},clear(){this.context.clearRect(0,0,Number(this.width),Number(this.height))},async setBackground(){this.clear(),this.context.fillStyle=this.backgroundColor,this.context.fillRect(0,0,Number(this.width),Number(this.height)),await this.$nextTick(async()=>{await this.drawBackgroundImage()}),this.save()},async drawBackgroundImage(){if(this.loadedImage)this.context.drawImage(this.loadedImage,0,0,Number(this.width),Number(this.height));else return new Promise(i=>{if(!this.backgroundImage){i();return}const e=new Image;e.src=this.backgroundImage,e.onload=()=>{this.context.drawImage(e,0,0,Number(this.width),Number(this.height)),this.loadedImage=e,i()}})},getCoordinates(i){let e,t;if(i.touches&&i.touches.length>0){let n=document.querySelector("#"+this.canvasId).getBoundingClientRect();e=i.touches[0].clientX-n.left,t=i.touches[0].clientY-n.top}else e=i.offsetX,t=i.offsetY;return{x:e,y:t}},startDraw(i){if(!this.lock){this.drawing=!0;let e=this.getCoordinates(i);this.strokes={type:this.eraser?"eraser":this.strokeType,from:e,coordinates:[],color:this.eraser?this.backgroundColor:this.color,width:this.lineWidth,fill:this.eraser||this.strokeType==="dash"||this.strokeType==="line"?!1:this.fillShape,lineCap:this.lineCap,lineJoin:this.lineJoin},this.guides=[]}},draw(i){if(this.drawing){this.context||this.setContext();let e=this.getCoordinates(i);if(this.eraser||this.strokeType==="dash")this.strokes.coordinates.push(e),this.drawShape(this.context,this.strokes,!1);else{switch(this.strokeType){case"line":this.guides=[{x:e.x,y:e.y}];break;case"square":this.guides=[{x:e.x,y:this.strokes.from.y},{x:e.x,y:e.y},{x:this.strokes.from.x,y:e.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"triangle":let t=Math.floor((e.x-this.strokes.from.x)/2)<0?Math.floor((e.x-this.strokes.from.x)/2)*-1:Math.floor((e.x-this.strokes.from.x)/2),s=this.strokes.from.x<e.x?this.strokes.from.x+t:this.strokes.from.x-t;this.guides=[{x:e.x,y:this.strokes.from.y},{x:s,y:e.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"half_triangle":this.guides=[{x:e.x,y:this.strokes.from.y},{x:this.strokes.from.x,y:e.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"circle":let n=this.strokes.from.x-e.x<0?(this.strokes.from.x-e.x)*-1:this.strokes.from.x-e.x;this.guides=[{x:this.strokes.from.x>e.x?this.strokes.from.x-n:this.strokes.from.x+n,y:this.strokes.from.y},{x:n,y:n}];break}this.drawGuide(!0)}}},drawGuide(i){this.redraw(!0),this.$nextTick(()=>{this.context.strokeStyle=this.color,this.context.lineWidth=1,this.context.lineJoin=this.lineJoin,this.context.lineCap=this.lineCap,this.context.beginPath(),this.context.setLineDash([15,15]),this.strokes.type==="circle"?this.context.ellipse(this.guides[0].x,this.guides[0].y,this.guides[1].x,this.guides[1].y,0,0,Math.PI*2):(this.context.moveTo(this.strokes.from.x,this.strokes.from.y),this.guides.forEach(e=>{this.context.lineTo(e.x,e.y)}),i&&this.context.closePath()),this.context.stroke()})},drawShape(i,e,t){i.strokeStyle=e.color,i.fillStyle=e.color,i.lineWidth=e.width,i.lineJoin=e.lineJoin===void 0?this.lineJoin:e.lineJoin,i.lineCap=e.lineCap===void 0?this.lineCap:e.lineCap,i.beginPath(),i.setLineDash([]),e.type==="circle"?i.ellipse(e.coordinates[0].x,e.coordinates[0].y,e.coordinates[1].x,e.coordinates[1].y,0,0,Math.PI*2):(i.moveTo(e.from.x,e.from.y),e.coordinates.forEach(s=>{i.lineTo(s.x,s.y)}),t&&i.closePath()),e.fill?i.fill():i.stroke()},stopDraw(){this.drawing&&(this.strokes.coordinates=this.guides.length>0?this.guides:this.strokes.coordinates,this.images.push(this.strokes),this.redraw(!0),this.drawing=!1,this.trash=[])},reset(){this.lock||(this.images=[],this.strokes={type:"",coordinates:[],color:"",width:"",fill:!1,lineCap:"",lineJoin:""},this.guides=[],this.trash=[],this.redraw(!0))},undo(){if(!this.lock){let i=this.images.pop();i&&(this.trash.push(i),this.redraw(!0))}},redo(){if(!this.lock){let i=this.trash.pop();i&&(this.images.push(i),this.redraw(!0))}},async redraw(i){i=typeof i<"u"?i:!0,await this.setBackground().then(()=>{this.drawAdditionalImages()}).then(()=>{let e=document.createElement("canvas"),t=e.getContext("2d");e.width=Number(this.width),e.height=Number(this.height),t&&(this.images.forEach(s=>{t&&(t.globalCompositeOperation=s.type==="eraser"?"destination-out":"source-over",(s.type!=="circle"||s.type==="circle"&&s.coordinates.length>0)&&this.drawShape(t,s,!(s.type==="eraser"||s.type==="dash"||s.type==="line")))}),this.context.drawImage(e,0,0,Number(this.width),Number(this.height)))}).then(()=>{i&&this.save()})},wrapText(i,e,t,s,n,r){const l=/(\r\n|\n\r|\n|\r)+/g,h=/\s+/g;var d=e.split(l).filter(w=>w.length>0);for(let w=0;w<d.length;w++){for(var c=d[w].split(h).filter(N=>N.length>0),a="",o=0;o<c.length;o++){var f=a+c[o]+" ",y=i.measureText(f),I=y.width;I>n&&o>0?(this.watermark&&this.watermark.fontStyle&&this.watermark.fontStyle.drawType&&this.watermark.fontStyle.drawType==="stroke"?i.strokeText(a,t,s):i.fillText(a,t,s),a=c[o]+" ",s+=r):a=f}this.watermark&&this.watermark.fontStyle&&this.watermark.fontStyle.drawType&&this.watermark.fontStyle.drawType==="stroke"?i.strokeText(a,t,s):i.fillText(a,t,s),s+=c.length>0?r:0}},save(){let i=document.querySelector("#"+this.canvasId);if(this.watermark){let e=document.createElement("canvas"),t=e.getContext("2d");t&&(e.width=Number(this.width),e.height=Number(this.height),t.drawImage(i,0,0,Number(this.width),Number(this.height)),this.drawWatermark(e,t,this.watermark))}else{let e=document.createElement("canvas"),t=e.getContext("2d"),s=this.outputWidth===void 0?this.width:this.outputWidth,n=this.outputHeight===void 0?this.height:this.outputHeight;if(e.width=Number(s),e.height=Number(n),t)return t.drawImage(i,0,0,Number(s),Number(n)),this.$emit("update:image",e.toDataURL("image/"+this.saveAs,1)),e.toDataURL("image/"+this.saveAs,1)}},drawWatermark(i,e,t){if(t.type==="Image"){let s=t.imageStyle?t.imageStyle.width?t.imageStyle.width:Number(this.width):Number(this.width),n=t.imageStyle?t.imageStyle.height?t.imageStyle.height:Number(this.height):Number(this.height);const r=new Image;r.src=t.source,r.onload=()=>{t&&e&&e.drawImage(r,t.x,t.y,Number(s),Number(n));let l=document.createElement("canvas"),h=l.getContext("2d"),d=this.outputWidth===void 0?this.width:this.outputWidth,c=this.outputHeight===void 0?this.height:this.outputHeight;if(l.width=Number(d),l.height=Number(c),h)return h.drawImage(i,0,0,Number(d),Number(c)),this.$emit("update:image",l.toDataURL("image/"+this.saveAs,1)),l.toDataURL("image/"+this.saveAs,1)}}else if(t.type==="Text"){let s=t.fontStyle&&t.fontStyle.font?t.fontStyle.font:"20px serif",n=t.fontStyle&&t.fontStyle.textAlign?t.fontStyle.textAlign:"start",r=t.fontStyle&&t.fontStyle.textBaseline?t.fontStyle.textBaseline:"alphabetic",l=t.fontStyle&&t.fontStyle.color?t.fontStyle.color:"#000000";if(e.font=s,e.textAlign=n,e.textBaseline=r,t.fontStyle&&t.fontStyle.rotate){let o,f;t.fontStyle&&t.fontStyle.width?o=t.x+Math.floor(t.fontStyle.width/2):o=t.x,t.fontStyle&&t.fontStyle.lineHeight?f=t.y+Math.floor(t.fontStyle.lineHeight/2):f=t.y,e.translate(o,f),e.rotate(t.fontStyle.rotate*Math.PI/180),e.translate(o*-1,f*-1)}t.fontStyle&&t.fontStyle.drawType&&t.fontStyle.drawType==="stroke"?(e.strokeStyle=t.fontStyle.color,t.fontStyle&&t.fontStyle.width?this.wrapText(e,t.source,t.x,t.y,t.fontStyle.width,t.fontStyle.lineHeight):e.strokeText(t.source,t.x,t.y)):(e.fillStyle=l,t.fontStyle&&t.fontStyle.width?this.wrapText(e,t.source,t.x,t.y,t.fontStyle.width,t.fontStyle.lineHeight):e.fillText(t.source,t.x,t.y));let h=document.createElement("canvas"),d=h.getContext("2d"),c=this.outputWidth===void 0?this.width:this.outputWidth,a=this.outputHeight===void 0?this.height:this.outputHeight;if(h.width=Number(c),h.height=Number(a),d)return d.drawImage(i,0,0,Number(c),Number(a)),this.$emit("update:image",h.toDataURL("image/"+this.saveAs,1)),h.toDataURL("image/"+this.saveAs,1)}},isEmpty(){return!(this.images.length>0)},getAllStrokes(){return this.images}},render(){return P("canvas",{id:this.canvasId,height:Number(this.height),width:Number(this.width),style:{touchAction:"none",...this.styles},class:this.classes,onMousedown:i=>this.startDraw(i),onMousemove:i=>this.draw(i),onMouseup:()=>this.stopDraw(),onMouseleave:()=>this.stopDraw(),onTouchstart:i=>this.startDraw(i),onTouchmove:i=>this.draw(i),onTouchend:()=>this.stopDraw(),onTouchleave:()=>this.stopDraw(),onTouchcancel:()=>this.stopDraw(),onPointerdown:i=>this.startDraw(i),onPointermove:i=>this.draw(i),onPointerup:()=>this.stopDraw(),onPointerleave:()=>this.stopDraw(),onPointercancel:()=>this.stopDraw()})}});function lt(i){var e;const t=R(i);return(e=t==null?void 0:t.$el)!=null?e:t}const H=it?window:void 0;function ht(...i){let e,t,s,n;if(typeof i[0]=="string"||Array.isArray(i[0])?([t,s,n]=i,e=H):[e,t,s,n]=i,!e)return st;Array.isArray(t)||(t=[t]),Array.isArray(s)||(s=[s]);const r=[],l=()=>{r.forEach(a=>a()),r.length=0},h=(a,o,f,y)=>(a.addEventListener(o,f,y),()=>a.removeEventListener(o,f,y)),d=V(()=>[lt(e),R(n)],([a,o])=>{if(l(),!a)return;const f=nt(o)?{...o}:o;r.push(...t.flatMap(y=>s.map(I=>h(a,y,I,f))))},{immediate:!0,flush:"post"}),c=()=>{d(),l()};return ot(c),c}function dt(){const i=v(!1);return J()&&F(()=>{i.value=!0}),i}function ut(i){const e=dt();return M(()=>(e.value,!!i()))}function ct(i={}){const{window:e=H}=i,t=ut(()=>e&&"screen"in e&&"orientation"in e.screen),s=t.value?e.screen.orientation:{},n=v(s.type),r=v(s.angle||0);return t.value&&ht(e,"orientationchange",()=>{n.value=s.type,r.value=s.angle}),{isSupported:t,orientation:n,angle:r,lockOrientation:d=>t.value&&typeof s.lock=="function"?s.lock(d):Promise.reject(new Error("Not supported")),unlockOrientation:()=>{t.value&&typeof s.unlock=="function"&&s.unlock()}}}const ft={id:"canvas-outer-wrapper"},gt={id:"canvas-inner-wrapper"},pt={class:"ion-padding"},mt=L({__name:"RiskAssessmentSignatures",setup(i){const e=et(),t=at.table("technicians"),s=M(()=>!t.isReady||!e.isReady?[]:e.technicians.map(b=>t.get(b))),n=v(-1),r=v(void 0),l=v(300),h=v(200),d=v(""),{isSupported:c,orientation:a}=ct();function o(){l.value=100,h.value=100,setTimeout(()=>{const g=document.getElementById("canvas-inner-wrapper");if(!r||!g)return;let[p,O]=[g.clientWidth,g.clientHeight];l.value=p-20,h.value=O-20,I()},100)}const f=()=>{const b=new Date(Date.now()),g=s.value.find(p=>p.id===n.value);return g?g.name+", "+b.toLocaleString("de"):b.toLocaleString("de")},y=v({}),I=()=>{y.value={type:"Text",source:f(),x:22,y:22,imageStyle:{},fontStyle:{lineHeight:48,color:"#333333",font:"12px serif",drawType:"fill",textAlign:"left",textBaseline:"top"}}};q(()=>{o(),window.addEventListener("resize",o),window.addEventListener("orientationchange",o)}),U(()=>{window.removeEventListener("resize",o),window.removeEventListener("orientationchange",o)});function w(){o(),r.value.reset()}function N(){e.updateTechnicianSignature(n.value,d.value)}return(b,g)=>(S(),C(tt,null,{default:m(()=>[u(a)==="landscape-primary"||u(a)==="landscape-secondary"?(S(),k(T,{key:0},[n.value!==-1?(S(),k(T,{key:0},[x(u(W),{slot:"fixed",horizontal:"start",vertical:"top"},{default:m(()=>[x(u(A),{onClick:w},{default:m(()=>[x(u(_),{icon:u(j)},null,8,["icon"])]),_:1})]),_:1}),x(u(W),{slot:"fixed",horizontal:"end",vertical:"top"},{default:m(()=>[x(u(A),{onClick:N},{default:m(()=>[x(u(A),null,{default:m(()=>[x(u(_),{icon:u($)},null,8,["icon"])]),_:1})]),_:1})]),_:1})],64)):E("",!0),D("div",ft,[D("div",gt,[n.value!==-1?(S(),C(u(rt),{key:0,image:d.value,"onUpdate:image":g[0]||(g[0]=p=>d.value=p),class:"canvas",ref_key:"canvas",ref:r,width:l.value,watermark:y.value,height:h.value,"background-color":"#ffffff"},null,8,["image","width","watermark","height"])):E("",!0)]),D("div",pt,[x(u(G),{interface:"action-sheet",modelValue:n.value,"onUpdate:modelValue":g[1]||(g[1]=p=>n.value=p),placeholder:"Wer soll unterzeichnen?"},{default:m(()=>[(S(!0),k(T,null,z(s.value,p=>(S(),C(u(K),{key:p.id,value:p.id},{default:m(()=>[B(Q(p.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])])],64)):(S(),C(u(X),{key:1},{default:m(()=>[x(u(Y),null,{default:m(()=>[B(" Zum unterzeichnen Gerät drehen ")]),_:1})]),_:1}))]),_:1}))}}),Ct=Z(mt,[["__scopeId","data-v-69f9d410"]]);export{Ct as default};
