import{V as N,s as X,a as Z,b as ee,c as te,d as ae}from"./ValidateDropdown57994.js";import{B as ne,A as q,a as v,k as g,C as A,D as oe,E as ie,G as re,H as se,r as z,p as k,I as ce,d as H,l as le,s as j,J as B,o as L,c as C,w as b,b as D,e as o,i as u,f as y,K as de,t as M,v as T,m as ue,q as pe,x as fe,F as me,y as F,z as E,R as O,j as be,_ as ve}from"../index57994.js";import{V as I,s as xe,c as he,a as P,b as _e}from"./ValidateInputText57994.js";import{s as ge}from"./confirm-dialog57994.js";import{I as U,C as ye}from"./CustomCardForm57994.js";import{_ as we}from"./AppBack.vue_vue_type_script_setup_true_lang57994.js";import{a as Pe}from"./index57994.js";import{u as $e}from"./flow57994.js";import"./index579942.js";var ze=function(t){var e=t.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding-block: `).concat(e("textarea.padding.y"),`;
    padding-inline: `).concat(e("textarea.padding.x"),`;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background `).concat(e("textarea.transition.duration"),", color ").concat(e("textarea.transition.duration"),", border-color ").concat(e("textarea.transition.duration"),", outline-color ").concat(e("textarea.transition.duration"),", box-shadow ").concat(e("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    box-shadow: `).concat(e("textarea.focus.ring.shadow"),`;
    outline: `).concat(e("textarea.focus.ring.width")," ").concat(e("textarea.focus.ring.style")," ").concat(e("textarea.focus.ring.color"),`;
    outline-offset: `).concat(e("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(e("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(e("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-textarea.p-invalid::placeholder {
    color: `).concat(e("textarea.invalid.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: `).concat(e("textarea.sm.font.size"),`;
    padding-block: `).concat(e("textarea.sm.padding.y"),`;
    padding-inline: `).concat(e("textarea.sm.padding.x"),`;
}

.p-textarea-lg {
    font-size: `).concat(e("textarea.lg.font.size"),`;
    padding-block: `).concat(e("textarea.lg.padding.y"),`;
    padding-inline: `).concat(e("textarea.lg.padding.x"),`;
}
`)},ke={root:function(t){var e=t.instance,i=t.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":i.autoResize,"p-textarea-sm p-inputfield-sm":i.size==="small","p-textarea-lg p-inputfield-lg":i.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},Se=ne.extend({name:"textarea",theme:ze,classes:ke}),Te={name:"BaseTextarea",extends:Pe,props:{autoResize:Boolean},style:Se,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},G={name:"Textarea",extends:Te,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){t.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return q(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},De=["value","disabled","aria-invalid"];function Ve(a,t,e,i,x,p){return v(),g("textarea",q({class:a.cx("root"),value:a.d_value,disabled:a.disabled,"aria-invalid":a.invalid||void 0,onInput:t[0]||(t[0]=function(){return p.onInput&&p.onInput.apply(p,arguments)})},p.attrs),null,16,De)}G.render=Ve;class ${static async fetchPractices(t){return await A("/practices",t)}static async fetchPracticeDetail(t,e){return await A(`/practices/${t}`,e)}static async updatePractice(t,e,i){return await oe(`/practices/${t}`,e,i)}static async createPractice(t,e){return await ie("/practices",t,e)}static async deletePractice(t){await re(`/practices/${t}`)}}const Fe=se("practice-store",()=>{const a=z(null),t=z([]),e=z(0),i=k(()=>e.value),x=k(()=>a.value);async function p(c){const d=await $.fetchPractices(c);t.value=d.practices,e.value=d.total_records,t.value.forEach(m=>{m.policy_premium=m.policy_premium/100})}async function l(c,d){a.value=null;const m=await $.fetchPracticeDetail(c,d);a.value=m.practice,a.value.policy_premium=a.value.policy_premium/100}async function f(c,d,m){const S=await $.updatePractice(c,d,m);a.value=S.practice}async function _(c,d){const m=await $.createPractice(c,d);a.value=m.practice}async function s(c){await $.deletePractice(c)}function w(){a.value=null,t.value=[],e.value=0}return{practices:ce(t),currentPractice:x,totalPractices:i,fetchPractices:p,fetchPracticeDetail:l,updatePractice:f,createPractice:_,deletePractice:s,$reset:w}}),Ie={key:0,class:"field"},Ce={key:1},Me=H({__name:"PracticeDataTab",setup(a){const t=le(U.FORM_VALIDATION),e=$e(),{flows:i}=j(e),{value:x}=B("notes"),{value:p}=B("practice_status");L(async()=>{await e.fetchFlows()});const l=k(()=>i.value),f=k(()=>[{label:"Emessa",value:"e"},{label:"Sospesa",value:"x"}]);return(_,s)=>{const w=G,c=xe;return v(),C(ye,null,{title:b(()=>s[1]||(s[1]=[D("Dati")])),content:b(()=>[o(c,{class:"fluid-form-grid sm:grid-cols-3"},{default:b(()=>[o(N,{id:"flow_id",name:"flow_id",label:"Flusso*",options:l.value,"option-value":"id","option-label":"code",detailMode:!0},null,8,["options"]),o(I,{id:"financing_contract_number",name:"financing_contract_number",type:"text",label:"Contratto di finanziamento*",detailMode:u(t)},null,8,["detailMode"]),o(N,{id:"practice_status",name:"practice_status",label:"Stato pratica*",options:f.value,"option-value":"value","option-label":"label",detailMode:u(t)},null,8,["options","detailMode"]),o(I,{id:"policy_premium",name:"policy_premium",type:"number",label:"Premio*",detailMode:u(t)},{suffix:b(()=>s[2]||(s[2]=[D("€")])),_:1},8,["detailMode"]),o(I,{id:"subscription_number",name:"subscription_number",type:"text",label:"Conferma di adesione*",detailMode:u(t)},null,8,["detailMode"]),u(p)==="x"?(v(),g("div",Ie,[s[3]||(s[3]=y("label",{for:"notes",class:"form-label"},"Note",-1)),u(t)?(v(),g("div",Ce,M(u(x)),1)):(v(),C(w,{key:0,id:"notes",modelValue:u(x),"onUpdate:modelValue":s[0]||(s[0]=d=>de(x)?x.value=d:null),rows:"4",placeholder:""},null,8,["modelValue"]))])):T("",!0)]),_:1})]),_:1})}}}),Re={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4"},Ne={class:"flex items-center gap-4"},Ae={key:0},Be={class:"flex flex-row items-stretch gap-2 ml-2"},Ee={key:0,class:"flex flex-row items-stretch gap-4"},Oe={key:1,class:"flex flex-row items-stretch gap-4"},qe=H({__name:"PracticeDetailView",props:{flow_id:{},id:{}},setup(a){const t=a,e=Fe(),{currentPractice:i}=j(e),{resetForm:x,handleSubmit:p}=ue({validationSchema:he({flow_id:P().required("Flusso è obbligatorio"),financing_contract_number:P().required("Numero contratto è obbligatorio"),policy_premium:_e().required("Premio è obbligatorio"),practice_status:P().required("Stato pratica è obbligatorio"),subscription_number:P().required("Numero iscrizione è obbligatorio"),notes:P().optional()}),initialValues:{flow_id:t.flow_id}}),l=z(!1),f=z(!!t.id),_=k(()=>!t.id);async function s(r){try{l.value=!0,await e.fetchPracticeDetail(r),x({values:{...i.value}})}catch(n){console.error(n)}finally{l.value=!1}}async function w(r,n){try{l.value=!0,await e.updatePractice(r,n),F("Pratica aggiornata con successo"),f.value=!0}catch(h){console.error(h)}finally{l.value=!1,s(r)}}async function c(r){var n;try{l.value=!0,await e.createPractice(r),(n=i.value)!=null&&n.id&&(F("Pratica creato con successo"),E.push({name:O.PRATICHE,params:{flow_id:t.flow_id,id:i.value.id}}))}catch(h){console.error(h)}finally{l.value=!1}}async function d(r){try{await e.deletePractice(r),F("Pratica eliminata con successo"),E.push({name:O.PRATICHE,params:{flow_id:t.flow_id}})}catch(n){console.error(n)}}function m(){ge({message:"Stai per eliminare una pratica. Vuoi confermare l'operazione?",header:"Eliminazione pratica",acceptCallback(){t.id&&d(t.id)}})}const S=p(async r=>{r.policy_premium=Math.round(Number(r.policy_premium)*100),t.id?await w(t.id,r):await c(r)});return L(()=>{t.id&&s(t.id)}),pe(U.FORM_VALIDATION,f),(r,n)=>{var R;const h=be,K=Z,J=ee,Y=te,Q=ae,W=X;return v(),g(me,null,[o(we,{title:"Pratiche",url:"/flows/"+t.flow_id},null,8,["url"]),y("form",{onSubmit:n[2]||(n[2]=(...V)=>u(S)&&u(S)(...V))},[y("div",Re,[y("div",Ne,[y("h3",null,[D(M(_.value?"Nuova pratica":"Dettagli pratica")+" ",1),_.value?T("",!0):(v(),g("span",Ae," - "+M((R=u(i))==null?void 0:R.financing_contract_number),1))])]),y("div",Be,[o(fe,{name:"fade",mode:"out-in"},{default:b(()=>[f.value?_.value?T("",!0):(v(),g("div",Oe,[o(h,{class:"self-center",label:"Modifica",severity:"contrast",size:"small",variant:"outlined",rounded:"",onClick:n[1]||(n[1]=V=>f.value=!f.value)}),o(h,{class:"self-center",severity:"danger",size:"small",label:"Elimina",rounded:"",variant:"outlined",onClick:m})])):(v(),g("div",Ee,[_.value?T("",!0):(v(),C(h,{key:0,severity:"secondary",label:"Annulla","icon-pos":"right",size:"small",onClick:n[0]||(n[0]=V=>f.value=!0)})),o(h,{label:"Salva",type:"submit",size:"small",loading:l.value,disabled:l.value,"icon-pos":"right",rounded:""},null,8,["loading","disabled"])]))]),_:1})])]),o(W,{scrollable:"",value:"0"},{default:b(()=>[o(J,null,{default:b(()=>[o(K,{value:"0"},{default:b(()=>n[3]||(n[3]=[D("Dati pratica")])),_:1})]),_:1}),o(Q,null,{default:b(()=>[o(Y,{value:"0"},{default:b(()=>[o(Me)]),_:1})]),_:1})]),_:1})],32)],64)}}}),We=ve(qe,[["__scopeId","data-v-cde80b9c"]]);export{We as default};
