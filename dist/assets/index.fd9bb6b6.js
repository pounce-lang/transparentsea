import{r as e,u as t,S as n,L as r,R as a,C as s,i as o,a as l}from"./vendor.1dfbc423.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const o=new URL(e,r);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const l=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${e}`)),a(c)},onload(){n(self[t].moduleMap[o]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const c=l=>{const[c,i]=e.useState(l.pounceCode);let d=(e=>{var t;const n=o(e);try{const e=null==(t=n.next())?void 0:t.value;return e?null==e?void 0:e.stack:[]}catch(r){return console.error(r),[]}})(c);return d||(d=[]),e.createElement("div",{className:"parent"},e.createElement("div",{className:"div1"},"transparentsea"),e.createElement("div",{className:"div2"},e.createElement("textarea",{rows:20,cols:50,wrap:"true",value:t(d),spellCheck:"false"})),e.createElement("div",{className:"div3"},e.createElement("textarea",{rows:20,cols:50,wrap:"true",value:c,onChange:e=>i(e.target.value),spellCheck:"false"})),e.createElement("div",{className:"div4"},e.createElement(n,{style:{width:670,height:500,backgroundColor:"#eee"},width:670,height:500},e.createElement(r,null,d.map(((t,n)=>((t,n="tan")=>{switch(t[1]){case"square":return e.createElement(a,{x:t[2],y:t[3],width:t[4],height:t[4],fill:"pink",shadowBlur:20,draggable:!0,onDragMove:e=>{var n;const r=(null==(n=null==e?void 0:e.target)?void 0:n.attrs)||{x:0,y:0};t[0],t[1],r.x,r.y,t[4]}});case"circle":return e.createElement(s,{x:t[2],y:t[3],radius:t[4],fill:"pink",shadowBlur:20,draggable:!0,onDragMove:e=>{const n=e.target.attrs;t[0],t[1],n.x,n.y,t[4]}});case"stripe":return e.createElement(a,{key:t[0],x:t[2],y:t[3],width:t[4],height:t[5],fill:"blue",opacity:.3,draggable:!0})}})([n,...t])))))))};function i(){const[t,n]=e.useState("\n  \n  ");return e.createElement("div",{className:"App"},e.createElement(c,{pounceCode:"\n# generative art? using pounce programming language: a grid of random rectangles\n[10] [w] compose\n[400] [h] compose\n[40] [startx] compose\n[40] [starty] compose\n[60] [sp] compose \n[50] [sz] compose \n128 seedrandom\n[random 20 * 10 - +] [rnd] compose\n\n[\n  [i] [\n    i 1 + \n    i w % sp * startx + \n    i w / floor sp * starty +] pounce\n] [grid] compose\n\n[stripe] 0  \n[[s i] [s i grid] pounce\n  [s i x y] \n  [s x rnd push y rnd push sz rnd push sz rnd push s i] pounce\n] 60 times\ndrop drop\n            ",shapes:t}))}l.render(e.createElement(e.StrictMode,null,e.createElement(i,null)),document.getElementById("root"));
