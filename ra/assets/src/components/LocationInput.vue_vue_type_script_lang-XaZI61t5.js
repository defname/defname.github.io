import{M as t}from"./Map-SkMPt4OP.js";import{aj as a,ak as o}from"../../vendor-fe-4Mo55.js";const i={components:{Map:t,IonSearchbar:a},emits:["update:modelValue"],props:{modelValue:String},data(){return{address:"",results:[],locateIcon:o}},watch:{address(e){this.$emit("update:modelValue",e)},modelValue(e){e!==this.address&&(this.address=e,this.search(e))}},methods:{setAddress(e){this.address=this.$refs.map.displayName(e,!0)},onSearch(e){console.log(),this.$emit("update:modelValue",e.detail.value),this.search(e.detail.value)},search(e){fetch("https://nominatim.openstreetmap.org/search?q=".concat(encodeURIComponent(e),"&format=geojson&countrycodes=de")).then(s=>s.json()).then(s=>{console.log(s),this.results=s.features})}},mounted(){this.modelValue&&(this.address=this.modelValue,this.search(this.address))}};export{i as _};
