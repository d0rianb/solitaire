import{a as e,Z as t,Q as s,S as i,b as l}from"./vendor.835954c3.js";var a,r;!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const i=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,a)=>{const r=new URL(e,i);if(self[t].moduleMap[r])return s(self[t].moduleMap[r]);const n=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){a(new Error(`Failed to import: ${e}`)),l(o)},onload(){s(self[t].moduleMap[r]),l(o)}});document.head.appendChild(o)})),self[t].moduleMap={}}}("/assets/"),(r=a||(a={}))[r.None=1]="None",r[r.Pion=2]="Pion",r[r.Empty=4]="Empty",r[r.Selected=8]="Selected",r[r.Moving=16]="Moving";window.onclick=e=>{let t=d.cells.find((t=>{const s=d.x+t.x*d.dim/7,i=d.y+t.y*d.dim/7;if((s-e.clientX)**2+(i-e.clientY)**2<=300)return t}));if(!t)return;let s=d.cells.find((e=>8==(8&e.state)));if(s||2!=(2&t.state)){if(s)if(i=s,l=t,d.cells.filter((e=>e.x==i.x&&(e.y==i.y+2||e.y==i.y-2)||e.y==i.y&&(e.x==i.x+2||e.x==i.x-2))).includes(l)&&4==(4&l.state)){let e=d.grid.get(Math.min(s.x,t.x)+Math.abs(Math.ceil((s.x-t.x)/2)),Math.min(s.y,t.y)+Math.abs(Math.ceil((s.y-t.y)/2)));e.state&=-3,e.state|=4,t.state&=-5,t.state&=-9,t.state|=2,s.state&=-3,s.state&=-9,s.state|=4}else t.state&=-9,s.state&=-9}else t.state|=8;var i,l};let{width:n,height:o}=l();e.create(n,o);const c=new t("Solitaire");let d=new class{constructor(e,t,s,l){this.x=e,this.y=t,this.dim=Math.min(s,l),this.grid=new i(7,7),this.cells=this.grid.cells,this.cells.forEach((e=>e.state=2)),this.grid.get(3,3).state=4,this.cells.forEach((e=>{(e.x<2||e.x>=5)&&(e.y<2||e.y>=5)&&(e.state=1)}))}render(){s.getItems().forEach(((e,t)=>{const s=e.callback(),i=document.querySelector(`.ue-interface #item-${t+1}`);i&&i.innerText!==s&&(i.innerText=s)})),e.clear();for(let t=0;t<7;t++){const s=this.x+t*this.dim/7;for(let i=0;i<7;i++){const l=this.y+i*this.dim/7,a=this.grid.get(t,i);if(a&&2==(2&a.state)){let t=8==(8&a.state)?"#66c5ed":"#222";e.circle(s,l,5,{fillStyle:t,strokeStyle:t})}else a&&4==(4&a.state)&&e.circle(s,l,5,{fillStyle:"#eee",strokeStyle:"#eee"})}}e.endFrame()}}(n/10,o/5,9*n/10,4*o/5);s.addItem((()=>`Nombre de pion restants: ${d.cells.filter((e=>2==(2&e.state))).length}`),"top-right"),c.setMainLoop((()=>d.render())),c.toggleStats(!1),c.start();