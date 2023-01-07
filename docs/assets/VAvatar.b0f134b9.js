import{d as i,a5 as f,a6 as x,a7 as v,l as g,u as k,c as d,B as $,a8 as B,I as z,m as G,j as T,a9 as R,a as F,n as U,o as M,r as D,s as W,z as J,aa as Y,E as q,W as H,F as K}from"./index.20ad9618.js";const oe=(e,a)=>{const t=e.__vccOpts||e;for(const[s,n]of a)t[s]=n;return t};function re(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return i({name:t!=null?t:f(x(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a}},setup(s,n){let{slots:l}=n;return()=>{var o;return v(s.tag,{class:e},(o=l.default)==null?void 0:o.call(l))}}})}const ue=i({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...g()},setup(e,a){let{slots:t}=a;return k(()=>d(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},t)),{}}}),m=["sm","md","lg","xl","xxl"],N=(()=>m.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),h=(()=>m.reduce((e,a)=>(e["offset"+f(a)]={type:[String,Number],default:null},e),{}))(),j=(()=>m.reduce((e,a)=>(e["order"+f(a)]={type:[String,Number],default:null},e),{}))(),V={col:Object.keys(N),offset:Object.keys(h),order:Object.keys(j)};function Q(e,a,t){let s=e;if(!(t==null||t===!1)){if(a){const n=a.replace(e,"");s+=`-${n}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const X=["auto","start","end","center","baseline","stretch"],ie=i({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...h,order:{type:[String,Number],default:null},...j,alignSelf:{type:String,default:null,validator:e=>X.includes(e)},...g()},setup(e,a){let{slots:t}=a;const s=$(()=>{const n=[];let l;for(l in V)V[l].forEach(r=>{const u=e[r],c=Q(l,r,u);c&&n.push(c)});const o=n.some(r=>r.startsWith("v-col-"));return n.push({"v-col":!o||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return v(e.tag,{class:s.value},(n=t.default)==null?void 0:n.call(t))}}}),Z=["sm","md","lg","xl","xxl"],y=["start","end","center"],_=["space-between","space-around","space-evenly"];function S(e,a){return Z.reduce((t,s)=>(t[e+f(s)]=a(),t),{})}const p=[...y,"baseline","stretch"],P=e=>p.includes(e),L=S("align",()=>({type:String,default:null,validator:P})),ee=[...y,..._],A=e=>ee.includes(e),E=S("justify",()=>({type:String,default:null,validator:A})),te=[...y,..._,"stretch"],w=e=>te.includes(e),I=S("alignContent",()=>({type:String,default:null,validator:w})),b={align:Object.keys(L),justify:Object.keys(E),alignContent:Object.keys(I)},ae={align:"align",justify:"justify",alignContent:"align-content"};function ne(e,a,t){let s=ae[e];if(t!=null){if(a){const n=a.replace(e,"");s+=`-${n}`}return s+=`-${t}`,s.toLowerCase()}}const ce=i({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:P},...L,justify:{type:String,default:null,validator:A},...E,alignContent:{type:String,default:null,validator:w},...I,...g()},setup(e,a){let{slots:t}=a;const s=$(()=>{const n=[];let l;for(l in b)b[l].forEach(o=>{const r=e[o],u=ne(l,o,r);u&&n.push(u)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return v(e.tag,{class:["v-row",s.value]},(n=t.default)==null?void 0:n.call(t))}}});const se=B({start:Boolean,end:Boolean,icon:z,image:String,...G(),...T(),...R(),...g(),...F(),...U({variant:"flat"})},"v-avatar"),de=i({name:"VAvatar",props:se(),setup(e,a){let{slots:t}=a;const{themeClasses:s}=M(e),{colorClasses:n,colorStyles:l,variantClasses:o}=D(e),{densityClasses:r}=W(e),{roundedClasses:u}=J(e),{sizeClasses:c,sizeStyles:O}=Y(e);return k(()=>{var C;return d(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},s.value,n.value,r.value,u.value,c.value,o.value],style:[l.value,O.value]},{default:()=>[e.image?d(q,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?d(H,{key:"icon",icon:e.icon},null):(C=t.default)==null?void 0:C.call(t),K(!1,"v-avatar")]})}),{}}});export{de as V,oe as _,ce as a,ie as b,re as c,ue as d};
