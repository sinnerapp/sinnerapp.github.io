"use strict";(self["webpackChunk_403app"]=self["webpackChunk_403app"]||[]).push([[800],{800:function(e,t,o){o.r(t),o.d(t,{default:function(){return Y}});var r=o(252),a=o(963),s=o(577);const i={class:"px-4"},l={class:"mb-4"},n={key:0,class:"text-2xl font-semibold dark:text-white"},d={class:"mt-8 filters"},c={class:"mb-4"},p={class:"relative"},g=(0,r._)("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[(0,r._)("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,r._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),h=(0,r._)("button",{type:"submit",class:"text-white absolute right-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 transition duration-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"}," Search ",-1),u=(0,r._)("span",{class:"flex items-center gap-1"},[(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[(0,r._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"})]),(0,r.Uk)(" Options ")],-1),f=[u],m={for:"filterModal",ref:"filterModalRef"},v={class:"mt-4 filters-container"},b=["action"],w={class:"flex flex-col gap-2 select-provider"},y={for:"provider"},k=["value"],x={key:0,class:"flex flex-col gap-2"},P=(0,r._)("label",{for:"pageOptions"},"Search: ",-1),_={key:1,class:"flex flex-col gap-2"},$=(0,r._)("label",{for:"pageOptions"},"Page: ",-1),S={key:2,class:"flex flex-col gap-2"},D=(0,r._)("label",{for:"pageOptions"},"Sort: ",-1),I={ref:"go_button",class:"px-4 py-2 font-semibold text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"},M={class:"flex justify-between mt-4"},C={class:"text-lg text-gray-300"};function q(e,t,o,u,q,K){const O=(0,r.up)("Modal"),F=(0,r.up)("Contents");return(0,r.wg)(),(0,r.iD)("section",i,[(0,r._)("div",l,[o.greets?((0,r.wg)(),(0,r.iD)("h1",n," Explore Some Goodies 😏 ")):(0,r.kq)("",!0),(0,r._)("div",d,[(0,r._)("div",c,[(0,r._)("div",p,[g,(0,r._)("form",{onSubmit:t[1]||(t[1]=(0,a.iM)((t=>e.$refs.go_button.click()),["prevent"]))},[(0,r.wy)((0,r._)("input",{type:"search",id:"default-search",class:"block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500",placeholder:"Search something...","onUpdate:modelValue":t[0]||(t[0]=e=>q.selectedKey=e),required:""},null,512),[[a.nr,q.selectedKey]]),h],32)])]),(0,r._)("button",{onClick:t[2]||(t[2]=t=>e.$refs.filterModalRef.click()),type:"button",class:"px-4 py-2 font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md cursor-pointer items-centergap-2 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"},f),(0,r._)("label",m,null,512),(0,r.Wm)(O,{modalTitle:"Filters Tab",modalID:"filterModal",modalClasses:"dark:bg-gray-800 dark:text-white"},{default:(0,r.w5)((()=>[(0,r._)("div",v,[(0,r._)("form",{onSubmit:t[7]||(t[7]=(0,a.iM)(((...e)=>K.changeProvider&&K.changeProvider(...e)),["prevent"])),action:`#/explore/${q.selectedProvider}`,class:"flex flex-col gap-5"},[(0,r._)("div",w,[(0,r._)("label",y,"Change Provider To : "+(0,s.zw)(q.selectedProvider),1),(0,r.wy)((0,r._)("select",{id:"provider",class:"block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:text-black",placeholder:"Select a Provider",required:"","onUpdate:modelValue":t[3]||(t[3]=e=>q.selectedProvider=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(q.availableProvider,((e,t)=>((0,r.wg)(),(0,r.iD)("option",{key:t,value:e.from},(0,s.zw)(e.from),9,k)))),128))],512),[[a.bM,q.selectedProvider]])]),K.checkForParams("page")?((0,r.wg)(),(0,r.iD)("div",x,[P,(0,r.wy)((0,r._)("input",{type:"text",class:"w-24 text-black input input-sm",name:"search","onUpdate:modelValue":t[4]||(t[4]=e=>q.selectedKey=e)},null,512),[[a.nr,q.selectedKey]])])):(0,r.kq)("",!0),K.checkForParams("page")?((0,r.wg)(),(0,r.iD)("div",_,[$,(0,r.wy)((0,r._)("input",{type:"text",pattern:"^[0-9]*$","onUpdate:modelValue":t[5]||(t[5]=e=>q.selectedPage=e),class:"w-24 text-black input input-sm",name:"page"},null,512),[[a.nr,q.selectedPage]])])):(0,r.kq)("",!0),K.checkForParams("sort")?((0,r.wg)(),(0,r.iD)("div",S,[D,(0,r.wy)((0,r._)("select",{id:"sort",class:"block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:text-black",name:"sort",placeholder:"Sort content by: ","onUpdate:modelValue":t[6]||(t[6]=e=>q.selectedSort=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(K.getProp("sort"),((e,t)=>((0,r.wg)(),(0,r.iD)("option",{key:t},(0,s.zw)(e),1)))),128))],512),[[a.bM,q.selectedSort]])])):(0,r.kq)("",!0),(0,r._)("div",null,[(0,r._)("button",I," Change Provider \\\\ Go... ",512)])],40,b)])])),_:1})]),(0,r._)("div",M,[(0,r._)("h4",C," Showing "+(0,s.zw)((q.contents.data.length||[]).length)+" Items ",1)])]),((0,r.wg)(),(0,r.j4)(F,{contents:q.contents,key:q.contents.uKey,onPaginateBack:K.paginateBack,onPaginateForward:K.paginateForward},null,8,["contents","onPaginateBack","onPaginateForward"]))])}const K=["id"],O={class:"modal modal-bottom sm:modal-middle"},F={class:"text-lg font-bold"},T={class:"modal-action"},j=["for"];function B(e,t,o,a,i,l){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("input",{type:"checkbox",id:o.modalID,class:"modal-toggle"},null,8,K),(0,r._)("div",O,[(0,r._)("div",{class:(0,s.C_)(["modal-box",o.modalClasses])},[(0,r._)("h3",F,(0,s.zw)(o.modalTitle),1),(0,r.WI)(e.$slots,"default",{class:"py-4"}),(0,r._)("div",T,[(0,r._)("label",{for:o.modalID,class:"btn"},"Close",8,j)])],2)])],64)}var U={name:"Modal",props:["modalID","modalTitle","modalClasses"]},z=o(744);const A=(0,z.Z)(U,[["render",B]]);var E=A,H=o(578),R=o(484),V=o.n(R),J=(o(110),{props:["greets","defaultProvider"],data(){let e=this.defaultProvider,t=this.$route.query.page||1,o="",r=this.$route.query.search||"milf";return{contents:{},currentPage:1,sortBy:null,provider:this.$route.params.provider||this.defaultProvider,apiEndpoints:["https://janda.sinkaroid.org","https://wandering-flip-flops-ant.cyclic.app"],selectedProvider:e,selectedPage:t,selectedSort:o,selectedKey:r,availableProvider:[{from:"pururin",params:{sort:["newest","most-popular","highest-rated","most-viewed","title","random"],page:1,key:1}},{from:"nhentai",params:{sort:["popular-today","popular-week","popular"],page:1,key:1}},{from:"hentaifox",params:{sort:["latest","popular"],page:1,key:1}},{from:"asmhentai",params:{page:1}},{from:"hentai2read",params:{page:1,key:1}},{from:"3hentai",params:{key:1,page:1,sort:["recent","popular-24h","popular-7d","popular"]}}]}},components:{Contents:H.Z,Modal:E},methods:{dataIsExpired(e){return new Date(e)<new Date},changeProvider(){this.provider=this.selectedProvider,this.selectedPage=1,this.$router.push(`/explore/${this.provider}?search=${this.selectedKey}&sort=${this.selectedSort}&page=${this.selectedPage}`),this.fetchAPI()},checkForParams(e){const t=this.availableProvider.map((e=>e.from)).indexOf(this.selectedProvider),o=this.availableProvider[t];return!!o.params&&o.params.hasOwnProperty(e)},getIndexOfProp(){const e=this.availableProvider.map((e=>e.from)).indexOf(this.selectedProvider);return e},getProp(e){const t=this.availableProvider.map((e=>e.from)).indexOf(this.selectedProvider),o=this.availableProvider[t];return e?o.params[e]:o.params},fetchAPI(){try{fetch(`${this.apiEndpoints[0]}/${this.provider}/search?key=${this.selectedKey}&sort=${this.selectedSort}&page=${this.selectedPage}`).then((e=>(200!==e.status&&(console.log("Request Timeout... Using Alternatives"),fetch(`${this.apiEndpoints[1]}/${this.provider}/search?key=${this.selectedKey}&sort=${this.selectedSort}&page=${this.selectedPage}`).then((e=>{if(200!==e.status)throw new Error("uncaught error");return e.json()})).then((e=>{if(e.created_at=new Date,e.expired_at=V()().add(45,"minute"),e.provider=this.defaultProvider,this.contents=e,!e.data.length)return!1;localStorage.setItem("cached_data",JSON.stringify(e)),console.log("Request Success!")}))),e.json()))).then((e=>{if(e.created_at=new Date,e.expired_at=V()().add(45,"minute"),e.provider=this.defaultProvider,this.contents=e,!e.data.length)return!1;localStorage.setItem("cached_data",JSON.stringify(e)),console.log("Request Success!")})).catch((e=>{console.log(e)}))}catch(e){console.log(e)}},paginateForward(){console.log("paginate next"),this.selectedPage++,this.$router.push(`/explore/${this.provider}?search=${this.selectedKey}&sort=${this.selectedSort}&page=${this.selectedPage}`),this.fetchAPI(),window.scrollTo({top:0,behavior:"smooth"})},paginateBack(){if(!this.$route.query.page||1==this.$route.query.page)return!1;console.log("paginate back"),this.selectedPage--,this.$router.push(`/explore/${this.provider}?search=${this.selectedKey}&sort=${this.selectedSort}&page=${this.selectedPage}`),this.fetchAPI(),window.scrollTo({top:0,behavior:"smooth"})}},created(){const e=localStorage.getItem("cached_data");e||this.fetchAPI(),this.contents=JSON.parse(e)}});const N=(0,z.Z)(J,[["render",q]]);var Y=N}}]);
//# sourceMappingURL=800.bda38e1d.js.map