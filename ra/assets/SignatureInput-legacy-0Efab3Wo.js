System.register(["./index-legacy-dNI7AN09.js","./index-legacy-RRv_Ytq9.js","./helpers-legacy-AqRZ00pO.js","./riskassessment-legacy-9eQx62Ou.js"],(function(t,e){"use strict";var i,s,a,o,r,n,h,l,d,u,c,g,m,f,y,p,w,x,v,k,S,b,I,N,T,C,D,A,L,E,_,W,B,H,P,M,J,j;return{setters:[t=>{i=t.d,s=t.al,a=t.x,o=t.a2,r=t.e,n=t.am,h=t.an,l=t.ao,d=t.ap,u=t.f,c=t.o,g=t.g,m=t.F,f=t.b,y=t.w,p=t.m,w=t.n,x=t.aq,v=t.q,k=t.U,S=t.l,b=t.a,I=t.c,N=t.R,T=t.C,C=t.j,D=t.K,A=t.G,L=t.D,E=t.t,_=t._},t=>{W=t.i,B=t.n,H=t.a,P=t.t,M=t.b},t=>{J=t.p},t=>{j=t.S}],execute:function(){var e=document.createElement("style");e.textContent="#canvas-outer-wrapper[data-v-d7bae5d7]{display:flex;flex-direction:column;height:100%;overflow:overlay}#canvas-outer-wrapper[data-v-d7bae5d7] #canvas-inner-wrapper[data-v-d7bae5d7]{flex-grow:2;display:flex;padding:10px}\n",document.head.appendChild(e);var O=i({name:"VueDrawingCanvas",props:{strokeType:{type:String,validator:t=>-1!==["dash","line","square","circle","triangle","half_triangle"].indexOf(t),default:()=>"dash"},fillShape:{type:Boolean,default:()=>!1},width:{type:[String,Number],default:()=>600},height:{type:[String,Number],default:()=>400},image:{type:String,default:()=>""},eraser:{type:Boolean,default:()=>!1},color:{type:String,default:()=>"#000000"},lineWidth:{type:Number,default:()=>5},lineCap:{type:String,validator:t=>-1!==["round","square","butt"].indexOf(t),default:()=>"round"},lineJoin:{type:String,validator:t=>-1!==["miter","round","bevel"].indexOf(t),default:()=>"miter"},lock:{type:Boolean,default:()=>!1},styles:{type:[Array,String,Object]},classes:{type:[Array,String,Object]},backgroundColor:{type:String,default:()=>"#FFFFFF"},backgroundImage:{type:String,default:()=>null},watermark:{type:Object,default:()=>null},saveAs:{type:String,validator:t=>-1!==["jpeg","png"].indexOf(t),default:()=>"png"},canvasId:{type:String,default:()=>"VueDrawingCanvas"},initialImage:{type:Array,default:()=>[]},additionalImages:{type:Array,default:()=>[]},outputWidth:{type:Number},outputHeight:{type:Number}},data:()=>({loadedImage:null,drawing:!1,context:null,images:[],strokes:{type:"",from:{x:0,y:0},coordinates:[],color:"",width:"",fill:!1,lineCap:"",lineJoin:""},guides:[],trash:[]}),mounted(){this.setContext(),this.$nextTick((()=>{this.drawInitialImage(),this.drawAdditionalImages()}))},watch:{backgroundImage:function(){this.loadedImage=null}},methods:{async setContext(){let t=document.querySelector("#"+this.canvasId);this.context=this.context?this.context:t.getContext("2d"),await this.setBackground()},drawInitialImage(){this.initialImage&&this.initialImage.length>0&&(this.images=[].concat(this.images,this.initialImage),this.redraw(!0))},drawAdditionalImages(){if(this.additionalImages&&this.additionalImages.length>0){let t=document.querySelector("#"+this.canvasId);this.additionalImages.forEach((e=>{this.drawWatermark(t,this.context,e)}))}},clear(){this.context.clearRect(0,0,Number(this.width),Number(this.height))},async setBackground(){this.clear(),this.context.fillStyle=this.backgroundColor,this.context.fillRect(0,0,Number(this.width),Number(this.height)),await this.$nextTick((async()=>{await this.drawBackgroundImage()})),this.save()},async drawBackgroundImage(){if(!this.loadedImage)return new Promise((t=>{if(!this.backgroundImage)return void t();const e=new Image;e.src=this.backgroundImage,e.onload=()=>{this.context.drawImage(e,0,0,Number(this.width),Number(this.height)),this.loadedImage=e,t()}}));this.context.drawImage(this.loadedImage,0,0,Number(this.width),Number(this.height))},getCoordinates(t){let e,i;if(t.touches&&t.touches.length>0){let s=document.querySelector("#"+this.canvasId).getBoundingClientRect();e=t.touches[0].clientX-s.left,i=t.touches[0].clientY-s.top}else e=t.offsetX,i=t.offsetY;return{x:e,y:i}},startDraw(t){if(!this.lock){this.drawing=!0;let e=this.getCoordinates(t);this.strokes={type:this.eraser?"eraser":this.strokeType,from:e,coordinates:[],color:this.eraser?this.backgroundColor:this.color,width:this.lineWidth,fill:!this.eraser&&"dash"!==this.strokeType&&"line"!==this.strokeType&&this.fillShape,lineCap:this.lineCap,lineJoin:this.lineJoin},this.guides=[]}},draw(t){if(this.drawing){this.context||this.setContext();let e=this.getCoordinates(t);if(this.eraser||"dash"===this.strokeType)this.strokes.coordinates.push(e),this.drawShape(this.context,this.strokes,!1);else{switch(this.strokeType){case"line":this.guides=[{x:e.x,y:e.y}];break;case"square":this.guides=[{x:e.x,y:this.strokes.from.y},{x:e.x,y:e.y},{x:this.strokes.from.x,y:e.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"triangle":let t=Math.floor((e.x-this.strokes.from.x)/2)<0?-1*Math.floor((e.x-this.strokes.from.x)/2):Math.floor((e.x-this.strokes.from.x)/2),i=this.strokes.from.x<e.x?this.strokes.from.x+t:this.strokes.from.x-t;this.guides=[{x:e.x,y:this.strokes.from.y},{x:i,y:e.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"half_triangle":this.guides=[{x:e.x,y:this.strokes.from.y},{x:this.strokes.from.x,y:e.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"circle":let s=this.strokes.from.x-e.x<0?-1*(this.strokes.from.x-e.x):this.strokes.from.x-e.x;this.guides=[{x:this.strokes.from.x>e.x?this.strokes.from.x-s:this.strokes.from.x+s,y:this.strokes.from.y},{x:s,y:s}]}this.drawGuide(!0)}}},drawGuide(t){this.redraw(!0),this.$nextTick((()=>{this.context.strokeStyle=this.color,this.context.lineWidth=1,this.context.lineJoin=this.lineJoin,this.context.lineCap=this.lineCap,this.context.beginPath(),this.context.setLineDash([15,15]),"circle"===this.strokes.type?this.context.ellipse(this.guides[0].x,this.guides[0].y,this.guides[1].x,this.guides[1].y,0,0,2*Math.PI):(this.context.moveTo(this.strokes.from.x,this.strokes.from.y),this.guides.forEach((t=>{this.context.lineTo(t.x,t.y)})),t&&this.context.closePath()),this.context.stroke()}))},drawShape(t,e,i){t.strokeStyle=e.color,t.fillStyle=e.color,t.lineWidth=e.width,t.lineJoin=void 0===e.lineJoin?this.lineJoin:e.lineJoin,t.lineCap=void 0===e.lineCap?this.lineCap:e.lineCap,t.beginPath(),t.setLineDash([]),"circle"===e.type?t.ellipse(e.coordinates[0].x,e.coordinates[0].y,e.coordinates[1].x,e.coordinates[1].y,0,0,2*Math.PI):(t.moveTo(e.from.x,e.from.y),e.coordinates.forEach((e=>{t.lineTo(e.x,e.y)})),i&&t.closePath()),e.fill?t.fill():t.stroke()},stopDraw(){this.drawing&&(this.strokes.coordinates=this.guides.length>0?this.guides:this.strokes.coordinates,this.images.push(this.strokes),this.redraw(!0),this.drawing=!1,this.trash=[])},reset(){this.lock||(this.images=[],this.strokes={type:"",coordinates:[],color:"",width:"",fill:!1,lineCap:"",lineJoin:""},this.guides=[],this.trash=[],this.redraw(!0))},undo(){if(!this.lock){let t=this.images.pop();t&&(this.trash.push(t),this.redraw(!0))}},redo(){if(!this.lock){let t=this.trash.pop();t&&(this.images.push(t),this.redraw(!0))}},async redraw(t){t=void 0===t||t,await this.setBackground().then((()=>{this.drawAdditionalImages()})).then((()=>{let t=document.createElement("canvas"),e=t.getContext("2d");t.width=Number(this.width),t.height=Number(this.height),e&&(this.images.forEach((t=>{e&&(e.globalCompositeOperation="eraser"===t.type?"destination-out":"source-over",("circle"!==t.type||"circle"===t.type&&t.coordinates.length>0)&&this.drawShape(e,t,"eraser"!==t.type&&"dash"!==t.type&&"line"!==t.type))})),this.context.drawImage(t,0,0,Number(this.width),Number(this.height)))})).then((()=>{t&&this.save()}))},wrapText(t,e,i,s,a,o){const r=/\s+/g;var n=e.split(/(\r\n|\n\r|\n|\r)+/g).filter((t=>t.length>0));for(let c=0;c<n.length;c++){for(var h=n[c].split(r).filter((t=>t.length>0)),l="",d=0;d<h.length;d++){var u=l+h[d]+" ";t.measureText(u).width>a&&d>0?(this.watermark&&this.watermark.fontStyle&&this.watermark.fontStyle.drawType&&"stroke"===this.watermark.fontStyle.drawType?t.strokeText(l,i,s):t.fillText(l,i,s),l=h[d]+" ",s+=o):l=u}this.watermark&&this.watermark.fontStyle&&this.watermark.fontStyle.drawType&&"stroke"===this.watermark.fontStyle.drawType?t.strokeText(l,i,s):t.fillText(l,i,s),s+=h.length>0?o:0}},save(){let t=document.querySelector("#"+this.canvasId);if(this.watermark){let e=document.createElement("canvas"),i=e.getContext("2d");i&&(e.width=Number(this.width),e.height=Number(this.height),i.drawImage(t,0,0,Number(this.width),Number(this.height)),this.drawWatermark(e,i,this.watermark))}else{let e=document.createElement("canvas"),i=e.getContext("2d"),s=void 0===this.outputWidth?this.width:this.outputWidth,a=void 0===this.outputHeight?this.height:this.outputHeight;if(e.width=Number(s),e.height=Number(a),i)return i.drawImage(t,0,0,Number(s),Number(a)),this.$emit("update:image",e.toDataURL("image/"+this.saveAs,1)),e.toDataURL("image/"+this.saveAs,1)}},drawWatermark(t,e,i){if("Image"===i.type){let s=i.imageStyle&&i.imageStyle.width?i.imageStyle.width:Number(this.width),a=i.imageStyle&&i.imageStyle.height?i.imageStyle.height:Number(this.height);const o=new Image;o.src=i.source,o.onload=()=>{i&&e&&e.drawImage(o,i.x,i.y,Number(s),Number(a));let r=document.createElement("canvas"),n=r.getContext("2d"),h=void 0===this.outputWidth?this.width:this.outputWidth,l=void 0===this.outputHeight?this.height:this.outputHeight;if(r.width=Number(h),r.height=Number(l),n)return n.drawImage(t,0,0,Number(h),Number(l)),this.$emit("update:image",r.toDataURL("image/"+this.saveAs,1)),r.toDataURL("image/"+this.saveAs,1)}}else if("Text"===i.type){let s=i.fontStyle&&i.fontStyle.font?i.fontStyle.font:"20px serif",a=i.fontStyle&&i.fontStyle.textAlign?i.fontStyle.textAlign:"start",o=i.fontStyle&&i.fontStyle.textBaseline?i.fontStyle.textBaseline:"alphabetic",r=i.fontStyle&&i.fontStyle.color?i.fontStyle.color:"#000000";if(e.font=s,e.textAlign=a,e.textBaseline=o,i.fontStyle&&i.fontStyle.rotate){let t,s;t=i.fontStyle&&i.fontStyle.width?i.x+Math.floor(i.fontStyle.width/2):i.x,s=i.fontStyle&&i.fontStyle.lineHeight?i.y+Math.floor(i.fontStyle.lineHeight/2):i.y,e.translate(t,s),e.rotate(i.fontStyle.rotate*Math.PI/180),e.translate(-1*t,-1*s)}i.fontStyle&&i.fontStyle.drawType&&"stroke"===i.fontStyle.drawType?(e.strokeStyle=i.fontStyle.color,i.fontStyle&&i.fontStyle.width?this.wrapText(e,i.source,i.x,i.y,i.fontStyle.width,i.fontStyle.lineHeight):e.strokeText(i.source,i.x,i.y)):(e.fillStyle=r,i.fontStyle&&i.fontStyle.width?this.wrapText(e,i.source,i.x,i.y,i.fontStyle.width,i.fontStyle.lineHeight):e.fillText(i.source,i.x,i.y));let n=document.createElement("canvas"),h=n.getContext("2d"),l=void 0===this.outputWidth?this.width:this.outputWidth,d=void 0===this.outputHeight?this.height:this.outputHeight;if(n.width=Number(l),n.height=Number(d),h)return h.drawImage(t,0,0,Number(l),Number(d)),this.$emit("update:image",n.toDataURL("image/"+this.saveAs,1)),n.toDataURL("image/"+this.saveAs,1)}},isEmpty(){return!(this.images.length>0)},getAllStrokes(){return this.images}},render(){return s("canvas",{id:this.canvasId,height:Number(this.height),width:Number(this.width),style:{touchAction:"none",...this.styles},class:this.classes,onMousedown:t=>this.startDraw(t),onMousemove:t=>this.draw(t),onMouseup:()=>this.stopDraw(),onMouseleave:()=>this.stopDraw(),onTouchstart:t=>this.startDraw(t),onTouchmove:t=>this.draw(t),onTouchend:()=>this.stopDraw(),onTouchleave:()=>this.stopDraw(),onTouchcancel:()=>this.stopDraw(),onPointerdown:t=>this.startDraw(t),onPointermove:t=>this.draw(t),onPointerup:()=>this.stopDraw(),onPointerleave:()=>this.stopDraw(),onPointercancel:()=>this.stopDraw()})}});function R(t){var e;const i=P(t);return null!=(e=null==i?void 0:i.$el)?e:i}const U=W?window:void 0;function q(t){const e=function(){const t=a(!1);return n()&&h((()=>{t.value=!0})),t}();return r((()=>(e.value,Boolean(t()))))}function z(t={}){const{window:e=U}=t,i=q((()=>e&&"screen"in e&&"orientation"in e.screen)),s=i.value?e.screen.orientation:{},r=a(s.type),n=a(s.angle||0);return i.value&&function(...t){let e,i,s,a;if("string"==typeof t[0]||Array.isArray(t[0])?([i,s,a]=t,e=U):[e,i,s,a]=t,!e)return B;Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]);const r=[],n=()=>{r.forEach((t=>t())),r.length=0},h=o((()=>[R(e),P(a)]),(([t,e])=>{if(n(),!t)return;const a=H(e)?{...e}:e;r.push(...i.flatMap((e=>s.map((i=>((t,e,i,s)=>(t.addEventListener(e,i,s),()=>t.removeEventListener(e,i,s)))(t,e,i,a))))))}),{immediate:!0,flush:"post"}),l=()=>{h(),n()};M(l)}(e,"orientationchange",(()=>{r.value=s.type,n.value=s.angle})),{isSupported:i,orientation:r,angle:n,lockOrientation:t=>i.value&&"function"==typeof s.lock?s.lock(t):Promise.reject(new Error("Not supported")),unlockOrientation:()=>{i.value&&"function"==typeof s.unlock&&s.unlock()}}}const F={id:"canvas-outer-wrapper"},$={id:"canvas-inner-wrapper"},V={key:0,class:"ion-padding"};t("S",_(i({__name:"SignatureInput",props:{techniciansList:{}},emits:["signature"],setup(t,{expose:e,emit:i}){const s=i,r=t;e({updateDimensions:M});const n=a(-1);o(n,(()=>{M()}));const h=a(void 0),_=a(300),W=a(200),B=a(""),{isSupported:H,orientation:P}=z();function M(){_.value=100,W.value=100,setTimeout((()=>{const t=document.getElementById("canvas-inner-wrapper");if(!h||!t)return;let[e,i]=[t.clientWidth,t.clientHeight];_.value=e-20,W.value=i-20,q()}),100)}const R=()=>{var t;const e=new Date(Date.now()),i=null===(t=r.techniciansList)||void 0===t?void 0:t.find((t=>t.id===n.value));return i?i.name+", "+e.toLocaleString("de"):e.toLocaleString("de")},U=a({}),q=()=>{U.value={type:"Text",source:R(),x:22,y:22,imageStyle:{},fontStyle:{lineHeight:48,color:"#333333",font:"12px serif",drawType:"fill",textAlign:"left",textBaseline:"top"}}};function G(){M(),h.value.reset()}function K(){s("signature",new j(B.value),-1!==n.value?n.value:void 0),J("Unterschrift hinzugefügt.","success"),h.value.reset()}return l((()=>{M(),window.addEventListener("resize",M),window.addEventListener("orientationchange",M)})),d((()=>{window.removeEventListener("resize",M),window.removeEventListener("orientationchange",M)})),(t,e)=>"landscape-primary"===u(P)||"landscape-secondary"===u(P)?(c(),g(m,{key:0},[-1!==n.value||void 0===t.techniciansList?(c(),g(m,{key:0},[f(u(v),{slot:"fixed",horizontal:"start",vertical:"top"},{default:y((()=>[f(u(p),{onClick:G},{default:y((()=>[f(u(w),{icon:u(x)},null,8,["icon"])])),_:1})])),_:1}),f(u(v),{slot:"fixed",horizontal:"end",vertical:"top"},{default:y((()=>[f(u(p),{onClick:K},{default:y((()=>[f(u(p),null,{default:y((()=>[f(u(w),{icon:u(k)},null,8,["icon"])])),_:1})])),_:1})])),_:1})],64)):S("",!0),b("div",F,[b("div",$,[-1!==n.value||void 0===t.techniciansList?(c(),I(u(O),{key:0,image:B.value,"onUpdate:image":e[0]||(e[0]=t=>B.value=t),class:"canvas",ref_key:"canvas",ref:h,width:_.value,watermark:U.value,height:W.value,"background-color":"#ffffff"},null,8,["image","width","watermark","height"])):S("",!0)]),void 0!==t.techniciansList?(c(),g("div",V,[f(u(T),{interface:"action-sheet",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t),placeholder:"Wer soll unterzeichnen?"},{default:y((()=>[(c(!0),g(m,null,N(t.techniciansList,(t=>(c(),I(u(L),{key:t.id,value:t.id},{default:y((()=>[C(E(t.name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])])):S("",!0)])],64)):(c(),I(u(A),{key:1},{default:y((()=>[f(u(D),null,{default:y((()=>[C(" Zum unterzeichnen Gerät drehen ")])),_:1})])),_:1}))}}),[["__scopeId","data-v-d7bae5d7"]]))}}}));
