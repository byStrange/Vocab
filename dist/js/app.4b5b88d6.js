(function(){"use strict";var t={7949:function(t,o,e){e(7658);var n=e(9242),s=e(65),i=e(3396);function a(t,o,e,n,s,a){const r=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(r)}const r={class:"container d-center"};function c(t,o,e,n,s,a){const c=(0,i.up)("Nav"),d=(0,i.up)("Box"),l=(0,i.up)("Panel"),p=(0,i.up)("List");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(c,{onShowList:o[0]||(o[0]=t=>s.data_switched="on"),data_switched:s.data_switched,onShowTopics:o[1]||(o[1]=t=>s.showWord=!1),showButtons:!0},null,8,["data_switched"]),(0,i.Wm)(d,{showWord:s.showWord,unknownWords:s.unknownWords,onChangeShowWord:o[2]||(o[2]=o=>a.changeShowWord(t.$data)),onStartTest:o[3]||(o[3]=t=>a.startTest(t)),wordFromChoosenTopic:s.word,topics:a.topics,linky:!1,topicName:s.choosenTopic?.name},null,8,["showWord","unknownWords","wordFromChoosenTopic","topics","topicName"]),(0,i.Wm)(l,{onNextBtnClick:a.nextWord,onShowBtnClick:a.makeWordReversed,buttonName:s.buttonName},null,8,["onNextBtnClick","onShowBtnClick","buttonName"]),(0,i.Wm)(p,{data_switched:s.data_switched,onCloseListModal:a.closeListModal,topics:a.topics},null,8,["data_switched","onCloseListModal","topics"])])}const d={class:"panel"};function l(t,o,e,n,s,a){return(0,i.wg)(),(0,i.iD)("div",d,[(0,i.WI)(t.$slots,"default"),e.showButtons?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"btn",onClick:o[0]||(o[0]=(...t)=>a.showTopics&&a.showTopics(...t))},"topics")):(0,i.kq)("",!0),e.showButtons?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"btn",onClick:o[1]||(o[1]=(...t)=>a.showList&&a.showList(...t))},"List")):(0,i.kq)("",!0)])}var p={name:"Nav",props:{showButtons:{type:Boolean,default:!1}},methods:{showList(){this.$emit("showList")},showTopics(){this.$emit("showTopics")}}},u=e(89);const h=(0,u.Z)(p,[["render",l]]);var w=h,m=e(7139);const f={class:"box d-center"},v={key:0,class:"content",ref:"word"},k={key:1,class:"topics d-center",ref:"topics"},g=["onClick","data-id"],x=["onClick","data-id"],y={key:1,class:"loader"},_=(0,i._)("div",{class:"loader"},null,-1),T=[_];function W(t,o,e,n,s,a){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",f,[e.showWord?((0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("span",null,(0,m.zw)(e.wordFromChoosenTopic),1)],512)):(0,i.kq)("",!0),e.showWord?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",k,[a.isLoaded?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(e.topics,(t=>((0,i.wg)(),(0,i.iD)(i.HY,{key:t.id},[e.linky?((0,i.wg)(),(0,i.j4)(r,{key:0,to:{name:"Topic",params:{topicId:t.id}}},{default:(0,i.w5)((()=>[(0,i._)("div",{class:(0,m.C_)(["topic d-center",{choosen:t.choosen}]),onClick:o=>a.selectTopic(t.id),"data-id":t.id},[(0,i._)("span",null,(0,m.zw)(t.name),1)],10,g)])),_:2},1032,["to"])):((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,m.C_)(["topic d-center",{choosen:t.choosen}]),onClick:o=>a.selectTopic(t.id),"data-id":t.id},[(0,i._)("span",null,(0,m.zw)(t.name),1)],10,x))],64)))),128)):((0,i.wg)(),(0,i.iD)("div",y,T)),(0,i.WI)(t.$slots,"default")],512))])}var b={name:"Box",props:["showWord","wordFromChoosenTopic","unknownWords","topics","linky","topicName"],methods:{selectTopic(t){const o=t,e=this.topics.find((t=>t.id===o));e.choosen=!0,this.topics.forEach((t=>{t.id!==o&&(t.choosen=!1)})),this.$emit("changeShowWord",!0),this.$emit("startTest",e)}},computed:{isLoaded(){return this.$store.state.isLoaded}}};const D=(0,u.Z)(b,[["render",W]]);var C=D;const N=["data-switched"],B=(0,i._)("span",null,"×",-1),I=[B],L={key:0},$={class:"word"},O={style:{"font-weight":"bold"}},S={class:"details closed"},A={key:0},M={key:1};function q(t,o,e,n,s,a){return(0,i.wg)(),(0,i.iD)("div",{class:"list",ref:"list","data-switched":e.data_switched},[(0,i._)("div",{class:"close d-center",onClick:o[0]||(o[0]=(...t)=>a.close&&a.close(...t))},I),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.topics,(t=>((0,i.wg)(),(0,i.iD)(i.HY,{key:t.id},[t.choosen?((0,i.wg)(),(0,i.iD)("ul",L,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.words,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t,onClick:o[1]||(o[1]=t=>a.toggleDetail(t)),ref_for:!0,ref:"word"+t},[(0,i._)("div",$,[(0,i._)("span",O,(0,m.zw)(t.word),1),(0,i.Uk)(" - "),(0,i._)("span",null,(0,m.zw)(t.translation),1)]),(0,i._)("div",S,[t?.details?.explanation?((0,i.wg)(),(0,i.iD)("i",A,(0,m.zw)(t.details.explanation),1)):(0,i.kq)("",!0),t?.details?.example?((0,i.wg)(),(0,i.iD)("span",M,(0,m.zw)(t.details.example),1)):(0,i.kq)("",!0)])])))),128))])):(0,i.kq)("",!0)],64)))),128))],8,N)}var H={methods:{close(){this.$emit("closeListModal")},toggleDetail(t){t.currentTarget.querySelector(".details").classList.toggle("closed")}},props:["topics","data_switched"],name:"List"};const K=(0,u.Z)(H,[["render",q]]);var E=K;const Y={class:"panel"};function R(t,o,e,n,s,a){return(0,i.wg)(),(0,i.iD)("div",Y,[(0,i._)("button",{class:"btn secondary",title:"Show answer",onClick:o[0]||(o[0]=(...t)=>a.showBtnClick&&a.showBtnClick(...t))},"Show"),(0,i._)("button",{class:"btn",title:"Next word",onClick:o[1]||(o[1]=(...t)=>a.nextBtnClick&&a.nextBtnClick(...t))},(0,m.zw)(e.buttonName),1)])}var j={props:["buttonName"],name:"Nav",methods:{nextBtnClick(){this.$emit("nextBtnClick")},showBtnClick(){this.$emit("showBtnClick")}}};const z=(0,u.Z)(j,[["render",R]]);var P=z,Z={data(){return{data_switched:"off",showWord:!1,choosenTopic:null,word:null,fullWord:null,unknownWords:[],currentIndex:0,buttonName:"Next"}},computed:{topics(){return this.$store.state.topics}},methods:{changeShowWord(t){this.showWord=t},startTest(t){this.currentIndex=0,this.choosenTopic=t,this.fullWord=this.choosenTopic.words[this.currentIndex],this.word=this.fullWord["translation"]},nextWord(){if(this.choosenTopic.words.length-1==this.currentIndex)return this.currentIndex=0,void(this.buttonName="Restart");this.buttonName="Next",this.fullWord=this.choosenTopic.words[this.currentIndex],this.currentIndex+=1,this.word=this.fullWord["translation"]},makeWordReversed(){this.unknownWords.includes(this.fullWord)||this.unknownWords.push(this.fullWord),this.word=this.fullWord["translation"]===this.word?this.fullWord["word"]:this.fullWord["translation"]},closeListModal(){this.data_switched="off"}},mounted(){},name:"Main",components:{Nav:w,Box:C,List:E,Panel:P}};const X=(0,u.Z)(Z,[["render",c]]);var U=X;const F={class:"container d-center"},G=(0,i._)("span",{class:"title"},"Choose topic",-1),V={key:0};function J(t,o,e,s,a,r){const c=(0,i.up)("Nav"),d=(0,i.up)("Box");return(0,i.wg)(),(0,i.iD)("div",F,[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[G])),_:1}),(0,i.Wm)(d,{topics:r.topics,linky:!0},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"topic d-center",style:{"font-size":"4rem","flex-direction":"column",gap:"5px"},onClick:o[2]||(o[2]=t=>a.showAddTopicButton=!0)},[a.showAddTopicButton?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.wy)((0,i._)("input",{class:"form-input mini",type:"text",placeholder:"topic name","onUpdate:modelValue":o[0]||(o[0]=t=>a.topicName=t)},null,512),[[n.nr,a.topicName]]),(0,i._)("button",{class:"btn",onClick:o[1]||(o[1]=(...t)=>r.createTopic&&r.createTopic(...t))},"save")],64)):((0,i.wg)(),(0,i.iD)("span",V,"+"))])])),_:1},8,["topics"])])}var Q={name:"Add",data(){return{access:{BIN_ID:"63d16138ace6f33a22c7d290",API_KEY:"$2b$10$WprOL5YhSf4LIiTxpgl6J.Oe.0GpRkAONcKwvXZdTKgp81wEBtGAe"},showAddTopicButton:!1,topicName:null}},computed:{topics(){return this.$store.state.topics}},methods:{createTopic(){const t={name:this.topicName,id:String(this.topics.length+1),words:[],choosen:!1};this.$store.commit("addTopic",{newTopic:t}),this.showAddTopicButton=!1,this.topicName=null}},components:{Box:C,Nav:w}};const tt=(0,u.Z)(Q,[["render",J]]);var ot=tt,et={name:"App",components:{Main:U,Add:ot}};const nt=(0,u.Z)(et,[["render",a]]);var st=nt,it=e(2483);const at={class:"container d-center"},rt={class:"box",style:{"flex-direction":"column",overflow:"auto",padding:"10px","min-height":"0"}},ct=(0,i._)("summary",null,"Words",-1),dt=(0,i._)("summary",null,"Add Word",-1),lt={class:"add"},pt={class:"field"};function ut(t,o,e,s,a,r){return(0,i.wg)(),(0,i.iD)("div",at,[(0,i._)("div",rt,[(0,i._)("details",null,[ct,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.currentTopic.words,(t=>((0,i.wg)(),(0,i.iD)("span",{key:t,class:"word"},(0,m.zw)(t.word)+" - "+(0,m.zw)(t.translation),1)))),128))]),(0,i._)("details",null,[dt,(0,i._)("div",lt,[(0,i._)("div",pt,[(0,i.wy)((0,i._)("input",{class:"form-input",type:"text",placeholder:"Word","onUpdate:modelValue":o[0]||(o[0]=t=>a.data.word=t)},null,512),[[n.nr,a.data.word]]),(0,i.wy)((0,i._)("input",{class:"form-input",type:"text",placeholder:"Translation","onUpdate:modelValue":o[1]||(o[1]=t=>a.data.translation=t)},null,512),[[n.nr,a.data.translation]])]),(0,i.wy)((0,i._)("textarea",{class:"form-input",type:"text",placeholder:"Example","onUpdate:modelValue":o[2]||(o[2]=t=>a.data.example=t)},null,512),[[n.nr,a.data.example]]),(0,i.wy)((0,i._)("textarea",{class:"form-input",type:"text",placeholder:"Explanation","onUpdate:modelValue":o[3]||(o[3]=t=>a.data.explanation=t)},null,512),[[n.nr,a.data.explanation]]),(0,i._)("button",{class:"btn secondary",onClick:o[4]||(o[4]=(...t)=>r.add&&r.add(...t))},"Add")])])])])}var ht={name:"Topic",data(){return{currentTopic:null,data:{word:"",translation:"",example:"",explanation:""}}},created(){this.topics=this.$store.state.topics,this.currentTopic=this.topics.find((t=>t.id===this.$route.params.topicId))},methods:{add(){this.$store.commit("addWord",{topicId:this.$route.params.topicId,newWord:{word:this.data.word,translation:this.data.translation,details:{example:this.data.example,explanation:this.data.explanation}}}),this.data={word:"",translation:"",example:"",explanation:""}}}};const wt=(0,u.Z)(ht,[["render",ut]]);var mt=wt;const ft=[{path:"/",redirect:"/vocab"},{path:"/vocab",name:"Main",component:U},{path:"/:pathMatch(.*)*",redirect:"/vocab"},{path:"/add",name:"Add",component:ot},{path:"/add/:topicId",name:"Topic",component:mt}],vt=(0,it.p7)({history:(0,it.PO)(),routes:ft});var kt=vt;const gt=(0,s.MT)({state(){return{topics:null,isLoaded:!1,access:{BIN_ID:"63d16138ace6f33a22c7d290",API_KEY:"$2b$10$WprOL5YhSf4LIiTxpgl6J.Oe.0GpRkAONcKwvXZdTKgp81wEBtGAe"}}},mutations:{loadData(t){var o=[];let e=new XMLHttpRequest;e.onreadystatechange=()=>{e.readyState==XMLHttpRequest.DONE&&(o=JSON.parse(e.responseText),t.topics=o["record"],t.isLoaded=!0)},e.open("GET",`https://api.jsonbin.io/v3/b/${t.access.BIN_ID}/latest`,!0),e.setRequestHeader("X-Master-Key",t.access.API_KEY),e.send()},addWord(t,o){let e=t.topics.find((t=>t.id===o.topicId));e.words.push(o.newWord),this.commit("saveData")},addTopic(t,o){t.topics.push(o.newTopic),this.commit("saveData")},saveData(t){let o=new XMLHttpRequest;o.onreadystatechange=()=>{o.readyState==XMLHttpRequest.DONE&&console.log(o.responseText)},o.open("PUT",`https://api.jsonbin.io/v3/b/${t.access.BIN_ID}`,!0),o.setRequestHeader("X-Master-Key",t.access.API_KEY),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(t.topics))}}});gt.commit("loadData");const xt=(0,n.ri)(st);xt.use(kt),xt.use(gt),xt.mount("#app")}},o={};function e(n){var s=o[n];if(void 0!==s)return s.exports;var i=o[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,n,s,i){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],s=t[l][1],i=t[l][2];for(var r=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](n[c])}))?n.splice(c--,1):(r=!1,i<a&&(a=i));if(r){t.splice(l--,1);var d=s();void 0!==d&&(o=d)}}return o}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,s,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var s,i,a=n[0],r=n[1],c=n[2],d=0;if(a.some((function(o){return 0!==t[o]}))){for(s in r)e.o(r,s)&&(e.m[s]=r[s]);if(c)var l=c(e)}for(o&&o(n);d<a.length;d++)i=a[d],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},n=self["webpackChunkvocab"]=self["webpackChunkvocab"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(7949)}));n=e.O(n)})();
//# sourceMappingURL=app.4b5b88d6.js.map