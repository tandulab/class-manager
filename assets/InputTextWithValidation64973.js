import{u as c}from"./vee-validate.esm64973.js";import{_ as p,r as _,b as m,e as f,g as d,i as u,f as g,n as y}from"../index64973.js";const V={props:{type:{type:String,default:"text"},modelValue:{type:String,default:""},name:{type:String,required:!0},label:{type:String,required:!0},successMessage:{type:String,default:""},placeholder:{type:String,default:""}},setup(a,l){const{value:e,errorMessage:t,handleBlur:r,handleChange:n,meta:o}=c(a.name,void 0,{initialValue:a.modelValue,valueProp:a.modelValue});return{onInput:i=>{n(i,!0),l("update:modelValue",i.target.value)},handleChange:n,handleBlur:r,errorMessage:t,inputValue:e,meta:o}}};const h={class:"field"},v=["for"],x=["id"];function b(a,l,e,t,r,n){const o=_("InputText");return m(),f("div",h,[d("label",{for:e.name},u(e.label),9,v),g(o,{modelValue:t.inputValue,"onUpdate:modelValue":l[0]||(l[0]=s=>t.inputValue=s),"aria-describedby":`${e.name}-help`,class:y([{"p-invalid":t.errorMessage},"w-full"]),type:e.type},null,8,["modelValue","aria-describedby","class","type"]),d("small",{id:`${e.name}-help`,class:"p-error"},u(t.errorMessage),9,x)])}const B=p(V,[["render",b],["__scopeId","data-v-e0149809"]]);export{B as I};
