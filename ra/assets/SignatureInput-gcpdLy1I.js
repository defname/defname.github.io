import{d as H,aw as M,x as S,ad as R,ax as V,ay as J,f as h,o as w,g as I,F as k,b as p,w as y,m as D,n as _,az as F,q as A,a5 as O,l as W,a as B,c as L,R as U,C as q,j as E,K as z,G as $,D as j,t as G,_ as X}from"./index-xm7OlJwR.js";import{a as Y}from"./index-RKBsMdZW.js";import{p as K}from"./helpers-IDuM_-et.js";import{S as Z}from"./riskassessment-2SeHuEkN.js";var Q=H({name:"VueDrawingCanvas",props:{strokeType:{type:String,validator:i=>["dash","line","square","circle","triangle","half_triangle"].indexOf(i)!==-1,default:()=>"dash"},fillShape:{type:Boolean,default:()=>!1},width:{type:[String,Number],default:()=>600},height:{type:[String,Number],default:()=>400},image:{type:String,default:()=>""},eraser:{type:Boolean,default:()=>!1},color:{type:String,default:()=>"#000000"},lineWidth:{type:Number,default:()=>5},lineCap:{type:String,validator:i=>["round","square","butt"].indexOf(i)!==-1,default:()=>"round"},lineJoin:{type:String,validator:i=>["miter","round","bevel"].indexOf(i)!==-1,default:()=>"miter"},lock:{type:Boolean,default:()=>!1},styles:{type:[Array,String,Object]},classes:{type:[Array,String,Object]},backgroundColor:{type:String,default:()=>"#FFFFFF"},backgroundImage:{type:String,default:()=>null},watermark:{type:Object,default:()=>null},saveAs:{type:String,validator:i=>["jpeg","png"].indexOf(i)!==-1,default:()=>"png"},canvasId:{type:String,default:()=>"VueDrawingCanvas"},initialImage:{type:Array,default:()=>[]},additionalImages:{type:Array,default:()=>[]},outputWidth:{type:Number},outputHeight:{type:Number}},data(){return{loadedImage:null,drawing:!1,context:null,images:[],strokes:{type:"",from:{x:0,y:0},coordinates:[],color:"",width:"",fill:!1,lineCap:"",lineJoin:""},guides:[],trash:[]}},mounted(){this.setContext(),this.$nextTick(()=>{this.drawInitialImage(),this.drawAdditionalImages()})},watch:{backgroundImage:function(){this.loadedImage=null}},methods:{async setContext(){let i=document.querySelector("#"+this.canvasId);this.context=this.context?this.context:i.getContext("2d"),await this.setBackground()},drawInitialImage(){this.initialImage&&this.initialImage.length>0&&(this.images=[].concat(this.images,this.initialImage),this.redraw(!0))},drawAdditionalImages(){if(this.additionalImages&&this.additionalImages.length>0){let i=document.querySelector("#"+this.canvasId);this.additionalImages.forEach(e=>{this.drawWatermark(i,this.context,e)})}},clear(){this.context.clearRect(0,0,Number(this.width),Number(this.height))},async setBackground(){this.clear(),this.context.fillStyle=this.backgroundColor,this.context.fillRect(0,0,Number(this.width),Number(this.height)),await this.$nextTick(async()=>{await this.drawBackgroundImage()}),this.save()},async drawBackgroundImage(){if(this.loadedImage)this.context.drawImage(this.loadedImage,0,0,Number(this.width),Number(this.height));else return new Promise(i=>{if(!this.backgroundImage){i();return}const e=new Image;e.src=this.backgroundImage,e.onload=()=>{this.context.drawImage(e,0,0,Number(this.width),Number(this.height)),this.loadedImage=e,i()}})},getCoordinates(i){let e,t;if(i.touches&&i.touches.length>0){let a=document.querySelector("#"+this.canvasId).getBoundingClientRect();e=i.touches[0].clientX-a.left,t=i.touches[0].clientY-a.top}else e=i.offsetX,t=i.offsetY;return{x:e,y:t}},startDraw(i){if(!this.lock){this.drawing=!0;let e=this.getCoordinates(i);this.strokes={type:this.eraser?"eraser":this.strokeType,from:e,coordinates:[],color:this.eraser?this.backgroundColor:this.color,width:this.lineWidth,fill:this.eraser||this.strokeType==="dash"||this.strokeType==="line"?!1:this.fillShape,lineCap:this.lineCap,lineJoin:this.lineJoin},this.guides=[]}},draw(i){if(this.drawing){this.context||this.setContext();let e=this.getCoordinates(i);if(this.eraser||this.strokeType==="dash")this.strokes.coordinates.push(e),this.drawShape(this.context,this.strokes,!1);else{switch(this.strokeType){case"line":this.guides=[{x:e.x,y:e.y}];break;case"square":this.guides=[{x:e.x,y:this.strokes.from.y},{x:e.x,y:e.y},{x:this.strokes.from.x,y:e.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"triangle":let t=Math.floor((e.x-this.strokes.from.x)/2)<0?Math.floor((e.x-this.strokes.from.x)/2)*-1:Math.floor((e.x-this.strokes.from.x)/2),s=this.strokes.from.x<e.x?this.strokes.from.x+t:this.strokes.from.x-t;this.guides=[{x:e.x,y:this.strokes.from.y},{x:s,y:e.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"half_triangle":this.guides=[{x:e.x,y:this.strokes.from.y},{x:this.strokes.from.x,y:e.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"circle":let a=this.strokes.from.x-e.x<0?(this.strokes.from.x-e.x)*-1:this.strokes.from.x-e.x;this.guides=[{x:this.strokes.from.x>e.x?this.strokes.from.x-a:this.strokes.from.x+a,y:this.strokes.from.y},{x:a,y:a}];break}this.drawGuide(!0)}}},drawGuide(i){this.redraw(!0),this.$nextTick(()=>{this.context.strokeStyle=this.color,this.context.lineWidth=1,this.context.lineJoin=this.lineJoin,this.context.lineCap=this.lineCap,this.context.beginPath(),this.context.setLineDash([15,15]),this.strokes.type==="circle"?this.context.ellipse(this.guides[0].x,this.guides[0].y,this.guides[1].x,this.guides[1].y,0,0,Math.PI*2):(this.context.moveTo(this.strokes.from.x,this.strokes.from.y),this.guides.forEach(e=>{this.context.lineTo(e.x,e.y)}),i&&this.context.closePath()),this.context.stroke()})},drawShape(i,e,t){i.strokeStyle=e.color,i.fillStyle=e.color,i.lineWidth=e.width,i.lineJoin=e.lineJoin===void 0?this.lineJoin:e.lineJoin,i.lineCap=e.lineCap===void 0?this.lineCap:e.lineCap,i.beginPath(),i.setLineDash([]),e.type==="circle"?i.ellipse(e.coordinates[0].x,e.coordinates[0].y,e.coordinates[1].x,e.coordinates[1].y,0,0,Math.PI*2):(i.moveTo(e.from.x,e.from.y),e.coordinates.forEach(s=>{i.lineTo(s.x,s.y)}),t&&i.closePath()),e.fill?i.fill():i.stroke()},stopDraw(){this.drawing&&(this.strokes.coordinates=this.guides.length>0?this.guides:this.strokes.coordinates,this.images.push(this.strokes),this.redraw(!0),this.drawing=!1,this.trash=[])},reset(){this.lock||(this.images=[],this.strokes={type:"",coordinates:[],color:"",width:"",fill:!1,lineCap:"",lineJoin:""},this.guides=[],this.trash=[],this.redraw(!0))},undo(){if(!this.lock){let i=this.images.pop();i&&(this.trash.push(i),this.redraw(!0))}},redo(){if(!this.lock){let i=this.trash.pop();i&&(this.images.push(i),this.redraw(!0))}},async redraw(i){i=typeof i<"u"?i:!0,await this.setBackground().then(()=>{this.drawAdditionalImages()}).then(()=>{let e=document.createElement("canvas"),t=e.getContext("2d");e.width=Number(this.width),e.height=Number(this.height),t&&(this.images.forEach(s=>{t&&(t.globalCompositeOperation=s.type==="eraser"?"destination-out":"source-over",(s.type!=="circle"||s.type==="circle"&&s.coordinates.length>0)&&this.drawShape(t,s,!(s.type==="eraser"||s.type==="dash"||s.type==="line")))}),this.context.drawImage(e,0,0,Number(this.width),Number(this.height)))}).then(()=>{i&&this.save()})},wrapText(i,e,t,s,a,n){const r=/(\r\n|\n\r|\n|\r)+/g,l=/\s+/g;var c=e.split(r).filter(v=>v.length>0);for(let v=0;v<c.length;v++){for(var d=c[v].split(l).filter(N=>N.length>0),g="",u=0;u<d.length;u++){var o=g+d[u]+" ",C=i.measureText(o),b=C.width;b>a&&u>0?(this.watermark&&this.watermark.fontStyle&&this.watermark.fontStyle.drawType&&this.watermark.fontStyle.drawType==="stroke"?i.strokeText(g,t,s):i.fillText(g,t,s),g=d[u]+" ",s+=n):g=o}this.watermark&&this.watermark.fontStyle&&this.watermark.fontStyle.drawType&&this.watermark.fontStyle.drawType==="stroke"?i.strokeText(g,t,s):i.fillText(g,t,s),s+=d.length>0?n:0}},save(){let i=document.querySelector("#"+this.canvasId);if(this.watermark){let e=document.createElement("canvas"),t=e.getContext("2d");t&&(e.width=Number(this.width),e.height=Number(this.height),t.drawImage(i,0,0,Number(this.width),Number(this.height)),this.drawWatermark(e,t,this.watermark))}else{let e=document.createElement("canvas"),t=e.getContext("2d"),s=this.outputWidth===void 0?this.width:this.outputWidth,a=this.outputHeight===void 0?this.height:this.outputHeight;if(e.width=Number(s),e.height=Number(a),t)return t.drawImage(i,0,0,Number(s),Number(a)),this.$emit("update:image",e.toDataURL("image/"+this.saveAs,1)),e.toDataURL("image/"+this.saveAs,1)}},drawWatermark(i,e,t){if(t.type==="Image"){let s=t.imageStyle?t.imageStyle.width?t.imageStyle.width:Number(this.width):Number(this.width),a=t.imageStyle?t.imageStyle.height?t.imageStyle.height:Number(this.height):Number(this.height);const n=new Image;n.src=t.source,n.onload=()=>{t&&e&&e.drawImage(n,t.x,t.y,Number(s),Number(a));let r=document.createElement("canvas"),l=r.getContext("2d"),c=this.outputWidth===void 0?this.width:this.outputWidth,d=this.outputHeight===void 0?this.height:this.outputHeight;if(r.width=Number(c),r.height=Number(d),l)return l.drawImage(i,0,0,Number(c),Number(d)),this.$emit("update:image",r.toDataURL("image/"+this.saveAs,1)),r.toDataURL("image/"+this.saveAs,1)}}else if(t.type==="Text"){let s=t.fontStyle&&t.fontStyle.font?t.fontStyle.font:"20px serif",a=t.fontStyle&&t.fontStyle.textAlign?t.fontStyle.textAlign:"start",n=t.fontStyle&&t.fontStyle.textBaseline?t.fontStyle.textBaseline:"alphabetic",r=t.fontStyle&&t.fontStyle.color?t.fontStyle.color:"#000000";if(e.font=s,e.textAlign=a,e.textBaseline=n,t.fontStyle&&t.fontStyle.rotate){let u,o;t.fontStyle&&t.fontStyle.width?u=t.x+Math.floor(t.fontStyle.width/2):u=t.x,t.fontStyle&&t.fontStyle.lineHeight?o=t.y+Math.floor(t.fontStyle.lineHeight/2):o=t.y,e.translate(u,o),e.rotate(t.fontStyle.rotate*Math.PI/180),e.translate(u*-1,o*-1)}t.fontStyle&&t.fontStyle.drawType&&t.fontStyle.drawType==="stroke"?(e.strokeStyle=t.fontStyle.color,t.fontStyle&&t.fontStyle.width?this.wrapText(e,t.source,t.x,t.y,t.fontStyle.width,t.fontStyle.lineHeight):e.strokeText(t.source,t.x,t.y)):(e.fillStyle=r,t.fontStyle&&t.fontStyle.width?this.wrapText(e,t.source,t.x,t.y,t.fontStyle.width,t.fontStyle.lineHeight):e.fillText(t.source,t.x,t.y));let l=document.createElement("canvas"),c=l.getContext("2d"),d=this.outputWidth===void 0?this.width:this.outputWidth,g=this.outputHeight===void 0?this.height:this.outputHeight;if(l.width=Number(d),l.height=Number(g),c)return c.drawImage(i,0,0,Number(d),Number(g)),this.$emit("update:image",l.toDataURL("image/"+this.saveAs,1)),l.toDataURL("image/"+this.saveAs,1)}},isEmpty(){return!(this.images.length>0)},getAllStrokes(){return this.images}},render(){return M("canvas",{id:this.canvasId,height:Number(this.height),width:Number(this.width),style:{touchAction:"none",...this.styles},class:this.classes,onMousedown:i=>this.startDraw(i),onMousemove:i=>this.draw(i),onMouseup:()=>this.stopDraw(),onMouseleave:()=>this.stopDraw(),onTouchstart:i=>this.startDraw(i),onTouchmove:i=>this.draw(i),onTouchend:()=>this.stopDraw(),onTouchleave:()=>this.stopDraw(),onTouchcancel:()=>this.stopDraw(),onPointerdown:i=>this.startDraw(i),onPointermove:i=>this.draw(i),onPointerup:()=>this.stopDraw(),onPointerleave:()=>this.stopDraw(),onPointercancel:()=>this.stopDraw()})}});const tt={id:"canvas-outer-wrapper"},et={id:"canvas-inner-wrapper"},it={key:0,class:"ion-padding"},st=H({__name:"SignatureInput",props:{techniciansList:{}},emits:["signature"],setup(i,{expose:e,emit:t}){const s=t,a=i;e({updateDimensions:o});const n=S(-1);R(n,()=>{o()});const r=S(void 0),l=S(300),c=S(200),d=S(""),{isSupported:g,orientation:u}=Y();function o(){l.value=100,c.value=100,setTimeout(()=>{const m=document.getElementById("canvas-inner-wrapper");if(!r||!m)return;let[f,T]=[m.clientWidth,m.clientHeight];l.value=f-20,c.value=T-20,v()},100)}const C=()=>{var f;const x=new Date(Date.now()),m=(f=a.techniciansList)==null?void 0:f.find(T=>T.id===n.value);return m?m.name+", "+x.toLocaleString("de"):x.toLocaleString("de")},b=S({}),v=()=>{b.value={type:"Text",source:C(),x:22,y:22,imageStyle:{},fontStyle:{lineHeight:48,color:"#333333",font:"12px serif",drawType:"fill",textAlign:"left",textBaseline:"top"}}};V(()=>{o(),window.addEventListener("resize",o),window.addEventListener("orientationchange",o)}),J(()=>{window.removeEventListener("resize",o),window.removeEventListener("orientationchange",o)});function N(){o(),r.value.reset()}function P(){s("signature",new Z(d.value),n.value!==-1?n.value:void 0),K("Unterschrift hinzugefügt.","success"),r.value.reset()}return(x,m)=>h(u)==="landscape-primary"||h(u)==="landscape-secondary"?(w(),I(k,{key:0},[n.value!==-1||x.techniciansList===void 0?(w(),I(k,{key:0},[p(h(A),{slot:"fixed",horizontal:"start",vertical:"top"},{default:y(()=>[p(h(D),{onClick:N},{default:y(()=>[p(h(_),{icon:h(F)},null,8,["icon"])]),_:1})]),_:1}),p(h(A),{slot:"fixed",horizontal:"end",vertical:"top"},{default:y(()=>[p(h(D),{onClick:P},{default:y(()=>[p(h(D),null,{default:y(()=>[p(h(_),{icon:h(O)},null,8,["icon"])]),_:1})]),_:1})]),_:1})],64)):W("",!0),B("div",tt,[B("div",et,[n.value!==-1||x.techniciansList===void 0?(w(),L(h(Q),{key:0,image:d.value,"onUpdate:image":m[0]||(m[0]=f=>d.value=f),class:"canvas",ref_key:"canvas",ref:r,width:l.value,watermark:b.value,height:c.value,"background-color":"#ffffff"},null,8,["image","width","watermark","height"])):W("",!0)]),x.techniciansList!==void 0?(w(),I("div",it,[p(h(q),{interface:"action-sheet",modelValue:n.value,"onUpdate:modelValue":m[1]||(m[1]=f=>n.value=f),placeholder:"Wer soll unterzeichnen?"},{default:y(()=>[(w(!0),I(k,null,U(x.techniciansList,f=>(w(),L(h(j),{key:f.id,value:f.id},{default:y(()=>[E(G(f.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])):W("",!0)])],64)):(w(),L(h($),{key:1},{default:y(()=>[p(h(z),null,{default:y(()=>[E(" Zum unterzeichnen Gerät drehen ")]),_:1})]),_:1}))}}),rt=X(st,[["__scopeId","data-v-d7bae5d7"]]);export{rt as S};
