var t=Object.defineProperty,e=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(e,i,l)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[i]=l,o=(t,e)=>{for(var i in e||(e={}))s.call(e,i)&&a(t,i,e[i]);if(l)for(var i of l(e))n.call(e,i)&&a(t,i,e[i]);return t},d=(t,l)=>e(t,i(l));class c{constructor(t,e){this.x=t,this.y=e}clone(){return new c(this.x,this.y)}add(t){return new c(this.x+t.x,this.y+t.y)}multiply(t){return new c(this.x*t,this.y*t)}dot(t){return this.x*t.x+this.y*t.y}dist(t){return Math.sqrt((this.x-t.x)**2+(this.y-t.y)**2)}}const h=new c(0,0),r=new c(1,1);class m{constructor(t,e,i,l){this.x=t,this.y=e,this.width=i,this.height=l}}function p(){return{width:window.innerWidth,height:window.innerHeight}}function u(t){return{width:t.clientWidth||t.width,height:t.clientHeight||t.height}}function b(t,e,i,l){const s=document.createElement("canvas");return G(s,t,e,i),l&&(s.oncontextmenu=t=>t.preventDefault()),s}function G(t,e,i,l){const s=l||window.devicePixelRatio||1;(function(t,e,i,l){t.width=e*(l||window.devicePixelRatio||1),t.height=i*(l||window.devicePixelRatio||1),t.style.width=e+"px",t.style.height=i+"px"})(t,e||u(t).width,i||u(t).height,s),1!=s&&t.getContext("2d").setTransform(s,0,0,s,0,0)}function y(t,e){window.addEventListener("DOMContentLoaded",(()=>{var i;const l=null!=(i=document.querySelector(e))?i:document.createElement(e);l.appendChild(t),document.querySelector("body").appendChild(l)}))}function Z(){return performance.now()||Date.now()}function x(){return/complete|interactive|loaded/.test(document.readyState)}var L,W;(W=L||(L={}))[W.KeyboardPressed=0]="KeyboardPressed",W[W.KeyboardDown=1]="KeyboardDown",W[W.Mouse=2]="Mouse",W[W.Window=3]="Window",W[W.Custom=4]="Custom",W[W.All=5]="All";const X=new class{constructor(){this.windowEvents=[],this.customEvents=[],this.mouseEvents=[],this.keyboardEvents=[],this.currentKeyEvents=[]}init(){window.addEventListener("keydown",(t=>{this.currentKeyEvents.find((e=>e.code===t.code))||this.currentKeyEvents.push(t),this.keyboardEvents.filter((t=>t.type===L.KeyboardPressed)).forEach((e=>{t.code===e.name&&e.callback(t)}))})),window.addEventListener("keyup",(t=>{this.currentKeyEvents.length&&(this.currentKeyEvents=this.currentKeyEvents.filter((e=>e.code!==t.code)))})),this.bindEvents()}addEvent(t){switch(t.type){case L.KeyboardDown:case L.KeyboardPressed:this.keyboardEvents.push(t);break;case L.Mouse:this.mouseEvents.push(t),window.addEventListener(t.name,(e=>t.callback(e)));break;case L.Window:this.windowEvents.push(t),this.bindEvents();break;case L.Custom:this.customEvents.push(t)}}getCustomEvent(t){return this.customEvents.find((e=>e.name===t))}bindEvents(){this.windowEvents.forEach((t=>window.addEventListener(t.name,t.callback)))}tick(){this.currentKeyEvents.length&&this.keyboardEvents.filter((t=>t.type===L.KeyboardDown)).forEach((t=>{this.currentKeyEvents.forEach((e=>{e.code===t.name&&t.callback(e)}))}))}},R=new class{constructor(){this.hasStarted=!1,this.animations=[]}add(t){this.animations.push(t),this.hasStarted&&t.options.autostart&&t.start()}init(){this.hasStarted=!0;for(let t of this.animations)t.options.autostart&&t.start()}tick(t){for(let e of this.animations)e.update(t)}};var S,f=((S=function(){function t(t){return l.appendChild(t.dom),t}function e(t){for(var e=0;e<l.children.length;e++)l.children[e].style.display=e===t?"block":"none";i=t}var i=0,l=document.createElement("div");l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",(function(t){t.preventDefault(),e(++i%l.children.length)}),!1);var s=(performance||Date).now(),n=s,a=0,o=t(new S.Panel("FPS","#0ff","#002")),d=t(new S.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new S.Panel("MB","#f08","#201"));return e(0),{REVISION:16,dom:l,addPanel:t,showPanel:e,begin:function(){s=(performance||Date).now()},end:function(){a++;var t=(performance||Date).now();if(d.update(t-s,200),t>n+1e3&&(o.update(1e3*a/(t-n),100),n=t,a=0,c)){var e=performance.memory;c.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t},update:function(){s=this.end()},domElement:l,setMode:e}}).Panel=function(t,e,i){var l=1/0,s=0,n=Math.round,a=n(window.devicePixelRatio||1),o=80*a,d=48*a,c=3*a,h=2*a,r=3*a,m=15*a,p=74*a,u=30*a,b=document.createElement("canvas");b.width=o,b.height=d,b.style.cssText="width:80px;height:48px";var G=b.getContext("2d");return G.font="bold "+9*a+"px Helvetica,Arial,sans-serif",G.textBaseline="top",G.fillStyle=i,G.fillRect(0,0,o,d),G.fillStyle=e,G.fillText(t,c,h),G.fillRect(r,m,p,u),G.fillStyle=i,G.globalAlpha=.9,G.fillRect(r,m,p,u),{dom:b,update:function(d,y){l=Math.min(l,d),s=Math.max(s,d),G.fillStyle=i,G.globalAlpha=1,G.fillRect(0,0,o,m),G.fillStyle=e,G.fillText(n(d)+" "+t+" ("+n(l)+"-"+n(s)+")",c,h),G.drawImage(b,r+a,m,p-a,u,r,m,p-a,u),G.fillRect(r+p-a,m,a,u),G.fillStyle=i,G.globalAlpha=.9,G.fillRect(r+p-a,m,a,n((1-d/y)*u))}}},S);let C=0;let V=[],g=4;const w=["top-left","top-right","bottom-left","bottom-right","custom"];class K{static addItem(t,e,i){K.internalAddItem(t,e,i)}static addButton(t,e,i,l){K.internalAddItem(t,i,l,e)}static internalAddItem(t,e,i,l){const s={callback:"string"==typeof t?()=>t:t,position:e,options:i,onClick:l};V.push(s);const n=V.length;x()?K.addToDom(s,n):window.addEventListener("load",(()=>K.addToDom(s,n)))}static init(){K.addStyle('*,\n*::after,\n*::before {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    font-family: "Roboto";\n    font-weight: 400;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n}\n\ncanvas {\n    z-index: 10;\n    image-rendering: pixelated;\n}\n\n.ue-interface {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    padding: 0.5em;\n    z-index: 10;\n    /* Make the click event pass through */\n    pointer-events: none;\n}\n\n.ue-container>div {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n}\n\n.ue-container>.top-left {\n    top: 0;\n    left: 0;\n}\n\n.ue-container>.top-right {\n    top: 0;\n    right: 0;\n    text-align: right;\n}\n\n.ue-container>.bottom-left {\n    bottom: 0;\n    left: 0;\n}\n\n.ue-container>.bottom-right {\n    bottom: 0;\n    right: 0;\n    text-align: right;\n}\n\n.ue-interface-items {\n    padding: .1em;\n}\n\n.ue-interface-button {\n    cursor: pointer;\n    user-select: none;\n    pointer-events: all;\n}');const t=document.createElement("div");t.classList.add("ue-interface","ue-container");for(let e of w){const i=document.createElement("div");i.classList.add(e),t.appendChild(i)}document.body.appendChild(t)}static addStyle(t){const e=document.createElement("style");e.textContent=t,document.head.append(e)}static addToDom(t,e){var i,l;const s=t.callback(),n=document.createElement("span");n.classList.add("ue-interface-items"),n.id=`item-${e}`,n.innerText=s,Object.entries(t.options||{}).forEach((([t,e])=>n.style[t]=e)),t.position?null==(i=document.querySelector(`.ue-container > .${t.position}`))||i.appendChild(n):null==(l=document.querySelector(".ue-container > .custom"))||l.appendChild(n),t.onClick&&(n.addEventListener("click",(e=>t.onClick(e))),n.classList.add("ue-interface-button"))}static update(){V.forEach(((t,e)=>{const i=t.callback(),l=document.querySelector(`.ue-interface #item-${e+1}`);l&&l.innerText!==i&&(l.innerText=i)}))}static statsShift(t){const e=document.querySelector(".top-left");e&&(e.style.top=`${t}px`)}static setUpdateInterval(t){g=t}static get updateInterval(){return g}static getItems(){return V}}String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};class Y extends Error{constructor(t,e){super(e?`[${e.capitalize()}] - ${t}`:t),this.name="EngineFailure"}}class v extends Y{constructor(t){super(t,"renderer")}}const H={interval:200,loop:!1};const F={strokeStyle:"black",lineWidth:2,lineJoin:"round",lineCap:"round",fillStyle:"transparent",globalAlpha:1,globalCompositeOperation:"add"},k={font:"Roboto",size:16,color:"black",textAlign:"left",textBaseline:"alphabetic"},z=2*Math.PI;let I,N,J,M,U,T=null==self.document&&null==self.window?4:2*(window.devicePixelRatio||1),Q=h;function j(t){return~~(t*T)/T}class B{static create(t,e){let[i,l]=[p().width,p().height];const s=b(t||i,e||l);return y(s,"main"),B.setContext(s.getContext("2d")),s}static createFromCanvas(t){let e=document.querySelector(t);if(!(e&&e instanceof HTMLCanvasElement))throw new v("The selected element is not a canvas");return G(e),B.setContext(e.getContext("2d")),e}static setContext(t){I=t}static getContext(){return I}static setOffset(t,e){Q=new c(t,e)}static getOffset(){return Q}static style(t){if(!I)throw new v("Context has not been initialize. Please use Renderer.setContext");const e=o(o({},F),t);if(e!==N){for(let t in e)I[t]!==e[t]&&(I[t]=e[t]);N=e}}static textStyle(t){if(I){let e=o(o({},k),t);I.font=`${e.size}px ${e.font}`,delete e.size,delete e.font,B.style(o({fillStyle:e.color},e))}}static clear(t){t?(B.style({fillStyle:t}),I.fillRect(0,0,I.canvas.width,I.canvas.height)):I.clearRect(0,0,I.canvas.width,I.canvas.height)}static line(t,e,i,l,s){B.style(s),I.beginPath(),I.moveTo(j(Q.x+t),j(Q.y+e)),I.lineTo(j(Q.x+i),j(Q.y+l)),I.stroke()}static rect(t,e,i,l,s){B.style(s);const[n,a,o,d]=[j(t+Q.x),j(e+Q.y),j(i),j(l)];I.fillRect(n,a,o,d),I.strokeRect(n,a,o,d)}static rectFromCenter(t,e,i,l,s){return B.rect(t-i/2,e-l/2,i,l,s)}static rectFromPoints(t,e,i,l,s){return B.rect(t,e,i-t,l-e,s)}static poly(t,e){if(t.length){B.style(e),I.beginPath(),I.moveTo(j(t[0].x+Q.x),j(t[0].y+Q.y));for(let e=1;e<t.length;e++)I.lineTo(j(t[e].x+Q.x),j(t[e].y+Q.y));I.stroke()}}static circle(t,e,i,l){B.style(l),I.beginPath(),I.arc(j(t+Q.x),j(e+Q.y),i,0,z),I.fill(),I.stroke()}static circleFromRect(t,e,i,l,s){return B.circle(t+i/2,e+l/2,Math.min(i,l)/2,s)}static point(t,e,i){B.circle(t,e,5,i)}static rectSprite(t,e,i,l,s){if(!s.isLoaded)return;B.style({}),I.save(),I.translate(j(t+i/2+Q.x),j(e+l/2+Q.y)),I.scale(s.scale.x,s.scale.y),I.rotate(s.rotation);let n=new m(0,0,s.size.width,s.size.height);s instanceof class extends class{constructor(t,e){if(this.isLoaded=!1,!t)throw new Error("A source path to the resource must be provided");this.id=C++,this.image=new Image,this.image.src=t,this.image.onload=()=>{this.isLoaded=!0,this.onLoad()},this.size={width:this.image.width,height:this.image.height},this.rotation=(null==e?void 0:e.rotation)||0,this.offset=(null==e?void 0:e.offset)||h,this.scale=(null==e?void 0:e.scale)||r}async convertToBitmap(){if(!this.image.width||!this.image.height)return;const t=await createImageBitmap(this.image);return d(o({},this),{image:t})}onLoad(){}}{constructor(t,e,i,l){if(super(t.spriteSheetPath),this.intervalId=-1,this.isAnimated=!1,this.lastRunTimeStamp=0,this.spriteSheet=t,e[0]<1||e[1]<1||i[0]<1||i[1]<1||e[0]>t.cols||e[1]>t.rows||i[0]>t.cols||i[1]>t.rows)throw new Y("Invalid tuples : the stylesheet coordinate starts at (1, 1)");this.from=e,this.to=i;let s=o(o({},H),l);this.interval=s.interval,this.loop=s.loop,this.spriteWidth=this.size.width/t.cols,this.spriteHeight=this.size.height/t.rows,this.coordX=this.from[0],this.coordY=this.from[1]}run(){let t=Z();t-this.lastRunTimeStamp>this.interval&&(this.step(),this.lastRunTimeStamp=t)}animate(){this.isAnimated||(this.intervalId=window.setInterval((()=>this.step()),this.interval),this.isAnimated=!0)}pause(){this.isAnimated&&(window.clearInterval(this.intervalId),this.isAnimated=!1)}reset(){this.coordX=this.from[0],this.coordY=this.from[1]}stop(){this.pause(),this.reset()}setInterval(t){this.interval=t,this.isAnimated&&(window.clearInterval(this.intervalId),this.animate())}step(){this.coordX!==this.to[0]||this.coordY!==this.to[1]?this.coordY<this.to[1]?this.coordX<this.spriteSheet.cols?this.coordX++:(this.coordY++,this.coordX=this.from[0]):this.coordX<this.to[0]&&this.coordX++:this.loop&&(this.coordX=this.from[0],this.coordY=this.from[1])}spriteBox(){return new m((this.coordX-1)*this.spriteWidth,(this.coordY-1)*this.spriteHeight,this.spriteWidth,this.spriteHeight)}}&&(n=s.spriteBox()),I.drawImage(s.image,n.x,n.y,n.width,n.height,j(i*s.offset.x-i/2),j(l*s.offset.y-l/2),j(i),j(l)),I.restore()}static circleSprite(t,e,i,l){l.isLoaded&&(I.save(),I.beginPath(),I.arc(j(t+Q.x),j(e+Q.y),i,0,z),I.clip(),B.rectSprite(t-i,e-i,2*i,2*i,l),I.restore())}static text(t,e,i,l){B.textStyle(l),I.fillText(t,e,i)}static centeredText(t,e,i,l){B.text(t,e,i,d(o({},l),{textAlign:"center",textBaseline:"middle"}))}static tint(t,e,i,l,s){B.rect(e,i,l,s,{fillStyle:t,globalCompositeOperation:"multiply",globalAlpha:.25})}static beginFrame(t){B.clear(t)}static endFrame(){}}class E{constructor(t,e){this.title=t,this.content=e}}class P{constructor(t,e){this.methodName=t,this.args=e}}function D(){return new Worker("data:application/javascript;base64,dmFyIHQ9T2JqZWN0LmRlZmluZVByb3BlcnR5LGU9T2JqZWN0LmRlZmluZVByb3BlcnRpZXMsaT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyxzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMscj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LG89T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxuPShlLGkscyk9PmkgaW4gZT90KGUsaSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6c30pOmVbaV09cyxhPSh0LGUpPT57Zm9yKHZhciBpIGluIGV8fChlPXt9KSlyLmNhbGwoZSxpKSYmbih0LGksZVtpXSk7aWYocylmb3IodmFyIGkgb2YgcyhlKSlvLmNhbGwoZSxpKSYmbih0LGksZVtpXSk7cmV0dXJuIHR9LGM9KHQscyk9PmUodCxpKHMpKTtjbGFzcyBoe2NvbnN0cnVjdG9yKHQsZSxpLHMpe3RoaXMueD10LHRoaXMueT1lLHRoaXMud2lkdGg9aSx0aGlzLmhlaWdodD1zfX1mdW5jdGlvbiBsKCl7cmV0dXJue3dpZHRoOndpbmRvdy5pbm5lcldpZHRoLGhlaWdodDp3aW5kb3cuaW5uZXJIZWlnaHR9fWZ1bmN0aW9uIGQodCl7cmV0dXJue3dpZHRoOnQuY2xpZW50V2lkdGh8fHQud2lkdGgsaGVpZ2h0OnQuY2xpZW50SGVpZ2h0fHx0LmhlaWdodH19ZnVuY3Rpb24gdSh0LGUsaSxzKXtjb25zdCByPXN8fHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxOyFmdW5jdGlvbih0LGUsaSxzKXt0LndpZHRoPWUqKHN8fHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKSx0LmhlaWdodD1pKihzfHx3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSksdC5zdHlsZS53aWR0aD1lKyJweCIsdC5zdHlsZS5oZWlnaHQ9aSsicHgifSh0LGV8fGQodCkud2lkdGgsaXx8ZCh0KS5oZWlnaHQsciksMSE9ciYmdC5nZXRDb250ZXh0KCIyZCIpLnNldFRyYW5zZm9ybShyLDAsMCxyLDAsMCl9Y2xhc3MgeHtjb25zdHJ1Y3Rvcih0LGUpe3RoaXMueD10LHRoaXMueT1lfWNsb25lKCl7cmV0dXJuIG5ldyB4KHRoaXMueCx0aGlzLnkpfWFkZCh0KXtyZXR1cm4gbmV3IHgodGhpcy54K3QueCx0aGlzLnkrdC55KX1tdWx0aXBseSh0KXtyZXR1cm4gbmV3IHgodGhpcy54KnQsdGhpcy55KnQpfWRvdCh0KXtyZXR1cm4gdGhpcy54KnQueCt0aGlzLnkqdC55fWRpc3QodCl7cmV0dXJuIE1hdGguc3FydCgodGhpcy54LXQueCkqKjIrKHRoaXMueS10LnkpKioyKX19Y29uc3QgcD1uZXcgeCgwLDApLGY9bmV3IHgoMSwxKTtTdHJpbmcucHJvdG90eXBlLmNhcGl0YWxpemU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0aGlzLnNsaWNlKDEpfTtjbGFzcyBtIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IodCxlKXtzdXBlcihlP2BbJHtlLmNhcGl0YWxpemUoKX1dIC0gJHt0fWA6dCksdGhpcy5uYW1lPSJFbmdpbmVGYWlsdXJlIn19Y2xhc3MgdyBleHRlbmRzIG17Y29uc3RydWN0b3IodCl7c3VwZXIodCwicmVuZGVyZXIiKX19bGV0IGc9MDtjb25zdCB5PXtpbnRlcnZhbDoyMDAsbG9vcDohMX07Y29uc3Qgdj17c3Ryb2tlU3R5bGU6ImJsYWNrIixsaW5lV2lkdGg6MixsaW5lSm9pbjoicm91bmQiLGxpbmVDYXA6InJvdW5kIixmaWxsU3R5bGU6InRyYW5zcGFyZW50IixnbG9iYWxBbHBoYToxLGdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbjoiYWRkIn0sYj17Zm9udDoiUm9ib3RvIixzaXplOjE2LGNvbG9yOiJibGFjayIsdGV4dEFsaWduOiJsZWZ0Iix0ZXh0QmFzZWxpbmU6ImFscGhhYmV0aWMifSxDPTIqTWF0aC5QSTtsZXQgUyxULGs9bnVsbD09c2VsZi5kb2N1bWVudCYmbnVsbD09c2VsZi53aW5kb3c/NDoyKih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSksUj1wO2Z1bmN0aW9uIFAodCl7cmV0dXJufn4odCprKS9rfWNsYXNzIGp7c3RhdGljIGNyZWF0ZSh0LGUpe2xldFtpLHNdPVtsKCkud2lkdGgsbCgpLmhlaWdodF07Y29uc3Qgcj1mdW5jdGlvbih0LGUsaSxzKXtjb25zdCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImNhbnZhcyIpO3JldHVybiB1KHIsdCxlLGkpLHMmJihyLm9uY29udGV4dG1lbnU9dD0+dC5wcmV2ZW50RGVmYXVsdCgpKSxyfSh0fHxpLGV8fHMpO3JldHVybiBmdW5jdGlvbih0LGUpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJET01Db250ZW50TG9hZGVkIiwoKCk9Pnt2YXIgaTtjb25zdCBzPW51bGwhPShpPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSkpP2k6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtzLmFwcGVuZENoaWxkKHQpLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoImJvZHkiKS5hcHBlbmRDaGlsZChzKX0pKX0ociwibWFpbiIpLGouc2V0Q29udGV4dChyLmdldENvbnRleHQoIjJkIikpLHJ9c3RhdGljIGNyZWF0ZUZyb21DYW52YXModCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KTtpZighKGUmJmUgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkpdGhyb3cgbmV3IHcoIlRoZSBzZWxlY3RlZCBlbGVtZW50IGlzIG5vdCBhIGNhbnZhcyIpO3JldHVybiB1KGUpLGouc2V0Q29udGV4dChlLmdldENvbnRleHQoIjJkIikpLGV9c3RhdGljIHNldENvbnRleHQodCl7Uz10fXN0YXRpYyBnZXRDb250ZXh0KCl7cmV0dXJuIFN9c3RhdGljIHNldE9mZnNldCh0LGUpe1I9bmV3IHgodCxlKX1zdGF0aWMgZ2V0T2Zmc2V0KCl7cmV0dXJuIFJ9c3RhdGljIHN0eWxlKHQpe2lmKCFTKXRocm93IG5ldyB3KCJDb250ZXh0IGhhcyBub3QgYmVlbiBpbml0aWFsaXplLiBQbGVhc2UgdXNlIFJlbmRlcmVyLnNldENvbnRleHQiKTtjb25zdCBlPWEoYSh7fSx2KSx0KTtpZihlIT09VCl7Zm9yKGxldCB0IGluIGUpU1t0XSE9PWVbdF0mJihTW3RdPWVbdF0pO1Q9ZX19c3RhdGljIHRleHRTdHlsZSh0KXtpZihTKXtsZXQgZT1hKGEoe30sYiksdCk7Uy5mb250PWAke2Uuc2l6ZX1weCAke2UuZm9udH1gLGRlbGV0ZSBlLnNpemUsZGVsZXRlIGUuZm9udCxqLnN0eWxlKGEoe2ZpbGxTdHlsZTplLmNvbG9yfSxlKSl9fXN0YXRpYyBjbGVhcih0KXt0PyhqLnN0eWxlKHtmaWxsU3R5bGU6dH0pLFMuZmlsbFJlY3QoMCwwLFMuY2FudmFzLndpZHRoLFMuY2FudmFzLmhlaWdodCkpOlMuY2xlYXJSZWN0KDAsMCxTLmNhbnZhcy53aWR0aCxTLmNhbnZhcy5oZWlnaHQpfXN0YXRpYyBsaW5lKHQsZSxpLHMscil7ai5zdHlsZShyKSxTLmJlZ2luUGF0aCgpLFMubW92ZVRvKFAoUi54K3QpLFAoUi55K2UpKSxTLmxpbmVUbyhQKFIueCtpKSxQKFIueStzKSksUy5zdHJva2UoKX1zdGF0aWMgcmVjdCh0LGUsaSxzLHIpe2ouc3R5bGUocik7Y29uc3RbbyxuLGEsY109W1AodCtSLngpLFAoZStSLnkpLFAoaSksUChzKV07Uy5maWxsUmVjdChvLG4sYSxjKSxTLnN0cm9rZVJlY3QobyxuLGEsYyl9c3RhdGljIHJlY3RGcm9tQ2VudGVyKHQsZSxpLHMscil7cmV0dXJuIGoucmVjdCh0LWkvMixlLXMvMixpLHMscil9c3RhdGljIHJlY3RGcm9tUG9pbnRzKHQsZSxpLHMscil7cmV0dXJuIGoucmVjdCh0LGUsaS10LHMtZSxyKX1zdGF0aWMgcG9seSh0LGUpe2lmKHQubGVuZ3RoKXtqLnN0eWxlKGUpLFMuYmVnaW5QYXRoKCksUy5tb3ZlVG8oUCh0WzBdLngrUi54KSxQKHRbMF0ueStSLnkpKTtmb3IobGV0IGU9MTtlPHQubGVuZ3RoO2UrKylTLmxpbmVUbyhQKHRbZV0ueCtSLngpLFAodFtlXS55K1IueSkpO1Muc3Ryb2tlKCl9fXN0YXRpYyBjaXJjbGUodCxlLGkscyl7ai5zdHlsZShzKSxTLmJlZ2luUGF0aCgpLFMuYXJjKFAodCtSLngpLFAoZStSLnkpLGksMCxDKSxTLmZpbGwoKSxTLnN0cm9rZSgpfXN0YXRpYyBjaXJjbGVGcm9tUmVjdCh0LGUsaSxzLHIpe3JldHVybiBqLmNpcmNsZSh0K2kvMixlK3MvMixNYXRoLm1pbihpLHMpLzIscil9c3RhdGljIHBvaW50KHQsZSxpKXtqLmNpcmNsZSh0LGUsNSxpKX1zdGF0aWMgcmVjdFNwcml0ZSh0LGUsaSxzLHIpe2lmKCFyLmlzTG9hZGVkKXJldHVybjtqLnN0eWxlKHt9KSxTLnNhdmUoKSxTLnRyYW5zbGF0ZShQKHQraS8yK1IueCksUChlK3MvMitSLnkpKSxTLnNjYWxlKHIuc2NhbGUueCxyLnNjYWxlLnkpLFMucm90YXRlKHIucm90YXRpb24pO2xldCBvPW5ldyBoKDAsMCxyLnNpemUud2lkdGgsci5zaXplLmhlaWdodCk7ciBpbnN0YW5jZW9mIGNsYXNzIGV4dGVuZHMgY2xhc3N7Y29uc3RydWN0b3IodCxlKXtpZih0aGlzLmlzTG9hZGVkPSExLCF0KXRocm93IG5ldyBFcnJvcigiQSBzb3VyY2UgcGF0aCB0byB0aGUgcmVzb3VyY2UgbXVzdCBiZSBwcm92aWRlZCIpO3RoaXMuaWQ9ZysrLHRoaXMuaW1hZ2U9bmV3IEltYWdlLHRoaXMuaW1hZ2Uuc3JjPXQsdGhpcy5pbWFnZS5vbmxvYWQ9KCk9Pnt0aGlzLmlzTG9hZGVkPSEwLHRoaXMub25Mb2FkKCl9LHRoaXMuc2l6ZT17d2lkdGg6dGhpcy5pbWFnZS53aWR0aCxoZWlnaHQ6dGhpcy5pbWFnZS5oZWlnaHR9LHRoaXMucm90YXRpb249KG51bGw9PWU/dm9pZCAwOmUucm90YXRpb24pfHwwLHRoaXMub2Zmc2V0PShudWxsPT1lP3ZvaWQgMDplLm9mZnNldCl8fHAsdGhpcy5zY2FsZT0obnVsbD09ZT92b2lkIDA6ZS5zY2FsZSl8fGZ9YXN5bmMgY29udmVydFRvQml0bWFwKCl7aWYoIXRoaXMuaW1hZ2Uud2lkdGh8fCF0aGlzLmltYWdlLmhlaWdodClyZXR1cm47Y29uc3QgdD1hd2FpdCBjcmVhdGVJbWFnZUJpdG1hcCh0aGlzLmltYWdlKTtyZXR1cm4gYyhhKHt9LHRoaXMpLHtpbWFnZTp0fSl9b25Mb2FkKCl7fX17Y29uc3RydWN0b3IodCxlLGkscyl7aWYoc3VwZXIodC5zcHJpdGVTaGVldFBhdGgpLHRoaXMuaW50ZXJ2YWxJZD0tMSx0aGlzLmlzQW5pbWF0ZWQ9ITEsdGhpcy5sYXN0UnVuVGltZVN0YW1wPTAsdGhpcy5zcHJpdGVTaGVldD10LGVbMF08MXx8ZVsxXTwxfHxpWzBdPDF8fGlbMV08MXx8ZVswXT50LmNvbHN8fGVbMV0+dC5yb3dzfHxpWzBdPnQuY29sc3x8aVsxXT50LnJvd3MpdGhyb3cgbmV3IG0oIkludmFsaWQgdHVwbGVzIDogdGhlIHN0eWxlc2hlZXQgY29vcmRpbmF0ZSBzdGFydHMgYXQgKDEsIDEpIik7dGhpcy5mcm9tPWUsdGhpcy50bz1pO2xldCByPWEoYSh7fSx5KSxzKTt0aGlzLmludGVydmFsPXIuaW50ZXJ2YWwsdGhpcy5sb29wPXIubG9vcCx0aGlzLnNwcml0ZVdpZHRoPXRoaXMuc2l6ZS53aWR0aC90LmNvbHMsdGhpcy5zcHJpdGVIZWlnaHQ9dGhpcy5zaXplLmhlaWdodC90LnJvd3MsdGhpcy5jb29yZFg9dGhpcy5mcm9tWzBdLHRoaXMuY29vcmRZPXRoaXMuZnJvbVsxXX1ydW4oKXtsZXQgdD1wZXJmb3JtYW5jZS5ub3coKXx8RGF0ZS5ub3coKTt0LXRoaXMubGFzdFJ1blRpbWVTdGFtcD50aGlzLmludGVydmFsJiYodGhpcy5zdGVwKCksdGhpcy5sYXN0UnVuVGltZVN0YW1wPXQpfWFuaW1hdGUoKXt0aGlzLmlzQW5pbWF0ZWR8fCh0aGlzLmludGVydmFsSWQ9d2luZG93LnNldEludGVydmFsKCgoKT0+dGhpcy5zdGVwKCkpLHRoaXMuaW50ZXJ2YWwpLHRoaXMuaXNBbmltYXRlZD0hMCl9cGF1c2UoKXt0aGlzLmlzQW5pbWF0ZWQmJih3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpLHRoaXMuaXNBbmltYXRlZD0hMSl9cmVzZXQoKXt0aGlzLmNvb3JkWD10aGlzLmZyb21bMF0sdGhpcy5jb29yZFk9dGhpcy5mcm9tWzFdfXN0b3AoKXt0aGlzLnBhdXNlKCksdGhpcy5yZXNldCgpfXNldEludGVydmFsKHQpe3RoaXMuaW50ZXJ2YWw9dCx0aGlzLmlzQW5pbWF0ZWQmJih3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpLHRoaXMuYW5pbWF0ZSgpKX1zdGVwKCl7dGhpcy5jb29yZFghPT10aGlzLnRvWzBdfHx0aGlzLmNvb3JkWSE9PXRoaXMudG9bMV0/dGhpcy5jb29yZFk8dGhpcy50b1sxXT90aGlzLmNvb3JkWDx0aGlzLnNwcml0ZVNoZWV0LmNvbHM/dGhpcy5jb29yZFgrKzoodGhpcy5jb29yZFkrKyx0aGlzLmNvb3JkWD10aGlzLmZyb21bMF0pOnRoaXMuY29vcmRYPHRoaXMudG9bMF0mJnRoaXMuY29vcmRYKys6dGhpcy5sb29wJiYodGhpcy5jb29yZFg9dGhpcy5mcm9tWzBdLHRoaXMuY29vcmRZPXRoaXMuZnJvbVsxXSl9c3ByaXRlQm94KCl7cmV0dXJuIG5ldyBoKCh0aGlzLmNvb3JkWC0xKSp0aGlzLnNwcml0ZVdpZHRoLCh0aGlzLmNvb3JkWS0xKSp0aGlzLnNwcml0ZUhlaWdodCx0aGlzLnNwcml0ZVdpZHRoLHRoaXMuc3ByaXRlSGVpZ2h0KX19JiYobz1yLnNwcml0ZUJveCgpKSxTLmRyYXdJbWFnZShyLmltYWdlLG8ueCxvLnksby53aWR0aCxvLmhlaWdodCxQKGkqci5vZmZzZXQueC1pLzIpLFAocypyLm9mZnNldC55LXMvMiksUChpKSxQKHMpKSxTLnJlc3RvcmUoKX1zdGF0aWMgY2lyY2xlU3ByaXRlKHQsZSxpLHMpe3MuaXNMb2FkZWQmJihTLnNhdmUoKSxTLmJlZ2luUGF0aCgpLFMuYXJjKFAodCtSLngpLFAoZStSLnkpLGksMCxDKSxTLmNsaXAoKSxqLnJlY3RTcHJpdGUodC1pLGUtaSwyKmksMippLHMpLFMucmVzdG9yZSgpKX1zdGF0aWMgdGV4dCh0LGUsaSxzKXtqLnRleHRTdHlsZShzKSxTLmZpbGxUZXh0KHQsZSxpKX1zdGF0aWMgY2VudGVyZWRUZXh0KHQsZSxpLHMpe2oudGV4dCh0LGUsaSxjKGEoe30scykse3RleHRBbGlnbjoiY2VudGVyIix0ZXh0QmFzZWxpbmU6Im1pZGRsZSJ9KSl9c3RhdGljIHRpbnQodCxlLGkscyxyKXtqLnJlY3QoZSxpLHMscix7ZmlsbFN0eWxlOnQsZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uOiJtdWx0aXBseSIsZ2xvYmFsQWxwaGE6LjI1fSl9c3RhdGljIGJlZ2luRnJhbWUodCl7ai5jbGVhcih0KX1zdGF0aWMgZW5kRnJhbWUoKXt9fW5ldyBjbGFzcyBleHRlbmRzIGNsYXNze3NlbmRNZXNzYWdlVG9NYWluVGhyZWFkKHQsZSl7c2VsZi5wb3N0TWVzc2FnZSh7dGl0bGU6dCxkYXRhOmV9KX1sb2coLi4udCl7dGhpcy5zZW5kTWVzc2FnZVRvTWFpblRocmVhZCgibG9nIiwuLi50KX19e2NvbnN0cnVjdG9yKCl7c3VwZXIoKSx0aGlzLmNhbnZhc1Jlc29sdXRpb249MSx0aGlzLm9mZnNjcmVlbkNhbnZhcz1udWxsLHRoaXMuY3R4PW51bGwsdGhpcy50ZXh0dXJlQWxpYXM9bmV3IE1hcCxzZWxmLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCgoe2RhdGE6dH0pPT50aGlzLm9uTWVzc2FnZSh0LnRpdGxlLHQuY29udGVudCkpKX1vbk1lc3NhZ2UodCxlKXtzd2l0Y2godCl7Y2FzZSJpbml0Q2FudmFzIjp0aGlzLm9mZnNjcmVlbkNhbnZhcz1lLmNhbnZhcyx0aGlzLmN0eD10aGlzLm9mZnNjcmVlbkNhbnZhcy5nZXRDb250ZXh0KCIyZCIpLGouc2V0Q29udGV4dCh0aGlzLmN0eCksdGhpcy5zZXRTaXplKGUuZHByLGUud2lkdGgsZS5oZWlnaHQpLHRoaXMuc2VuZE1lc3NhZ2VUb01haW5UaHJlYWQoImluaXRpYWxpemVkIik7YnJlYWs7Y2FzZSJyZW5kZXIiOmZvcihsZXQgdCBvZiBlLnJlbmRlclN0YWNrKXRoaXMuaGFuZGxlRHJhd1JlcXVlc3QodC5tZXRob2ROYW1lLHQuYXJncyk7YnJlYWs7Y2FzZSJuZXdUZXh0dXJlIjp0aGlzLnRleHR1cmVBbGlhcy5zZXQoZS5pZCxlLnRleHR1cmUpfX1zZXRTaXplKHQsZSxpKXtjb25zdCBzPSh0fHwxKSp0aGlzLmNhbnZhc1Jlc29sdXRpb247dGhpcy5vZmZzY3JlZW5DYW52YXMud2lkdGg9ZSpzLHRoaXMub2Zmc2NyZWVuQ2FudmFzLmhlaWdodD1pKnMsInNldFRyYW5zZm9ybSJpbiB0aGlzLmN0eCYmdGhpcy5jdHguc2V0VHJhbnNmb3JtKHMsMCwwLHMsMCwwKX1nZXRUZXh0dXJlKHQpe2NvbnN0IGU9dGhpcy50ZXh0dXJlQWxpYXMuZ2V0KHQudGV4dHVyZUlkKSx7c2NhbGU6aSxyb3RhdGlvbjpzLG9mZnNldDpyfT10O3JldHVybiBjKGEoe30sZSkse3NjYWxlOmkscm90YXRpb246cyxvZmZzZXQ6cn0pfWhhbmRsZURyYXdSZXF1ZXN0KHQsZSl7c3dpdGNoKHQpe2Nhc2Uic3R5bGUiOmouc3R5bGUobnVsbD09ZT92b2lkIDA6ZS5vYmopO2JyZWFrO2Nhc2UiY2xlYXIiOmouY2xlYXIobnVsbD09ZT92b2lkIDA6ZS5jb2xvcik7YnJlYWs7Y2FzZSJsaW5lIjpqLmxpbmUoZS54MSxlLnkxLGUueDIsZS55MixlLm9iaik7YnJlYWs7Y2FzZSJyZWN0IjpqLnJlY3QoZS54LGUueSxlLndpZHRoLGUuaGVpZ2h0LGUub2JqKTticmVhaztjYXNlInJlY3RGcm9tQ2VudGVyIjpqLnJlY3RGcm9tQ2VudGVyKGUueCxlLnksZS53aWR0aCxlLmhlaWdodCxlLm9iaik7YnJlYWs7Y2FzZSJyZWN0RnJvbVBvaW50cyI6ai5yZWN0RnJvbVBvaW50cyhlLngxLGUueTEsZS54MixlLnkyLGUub2JqKTticmVhaztjYXNlInBvbHkiOmoucG9seShlLnBvaW50cyxlLm9iaik7YnJlYWs7Y2FzZSJjaXJjbGUiOmouY2lyY2xlKGUueCxlLnksZS5yYWRpdXMsZS5vYmopO2JyZWFrO2Nhc2UiY2lyY2xlRnJvbVJlY3QiOmouY2lyY2xlRnJvbVJlY3QoZS54LGUueSxlLndpZHRoLGUuaGVpZ2h0LGUub2JqKTticmVhaztjYXNlInBvaW50IjpqLnBvaW50KGUueCxlLnksZS5vYmopO2JyZWFrO2Nhc2UicmVjdFNwcml0ZSI6ai5yZWN0U3ByaXRlKGUueCxlLnksZS53aWR0aCxlLmhlaWdodCx0aGlzLmdldFRleHR1cmUoZSkpO2JyZWFrO2Nhc2UiY2lyY2xlU3ByaXRlIjpqLmNpcmNsZVNwcml0ZShlLngsZS55LGUucmFkaXVzLHRoaXMuZ2V0VGV4dHVyZShlKSk7YnJlYWs7Y2FzZSJ0ZXh0IjpqLnRleHQoZS50ZXh0LGUueCxlLnksbnVsbD09ZT92b2lkIDA6ZS5zdHlsZSk7YnJlYWs7Y2FzZSJjZW50ZXJlZFRleHQiOmouY2VudGVyZWRUZXh0KGUudGV4dCxlLngsZS55LG51bGw9PWU/dm9pZCAwOmUuc3R5bGUpO2JyZWFrO2Nhc2UidGludCI6ai50aW50KGUuY29sb3IsZS54LGUueSxlLndpZHRoLGUuaGVpZ2h0KX19fTsK",{type:"module"})}let O=!1,A=[];const q=new Map;class ${static get worker(){return M}static get workerIsInitialized(){return O}static get offscreenCanvas(){return J}static get renderStack(){return A}static create(t,e){let[i,l]=[p().width,p().height];return U=b(t||i,e||l,1),$.initRenderWorker(U,t||i,e||l),y(U,"main"),U}static createFromCanvas(t){if(U=document.querySelector(t),!(U&&U instanceof HTMLCanvasElement))throw new v("The selected element is not a canvas");return G(U,U.clientWidth,U.clientHeight,1),$.initRenderWorker(U,U.width,U.height),U}static initRenderWorker(t,e,i){st.renderer instanceof $||st.setRendererType("offscreen");let{clientWidth:l,clientHeight:s}=t;M=new D,J=t.transferControlToOffscreen(),this.sendMessageToWorker("initCanvas",{width:e||l,height:i||s,canvas:J,dpr:window.devicePixelRatio||1},[J]),M.onmessage=({data:{title:t,data:e}})=>{switch(t){case"log":console.log("message from the renderer worker : ",e);break;case"initialized":O=!0,this.endFrame();break;default:console.log(t)}}}static addRenderCall(t,e){A.push(new P(t,e||{}))}static sendMessageToWorker(t,e,i){return M.postMessage(new E(t,e),i||[])}static style(t){this.addRenderCall("style",{obj:t})}static clear(t){this.addRenderCall("clear",{color:t})}static line(t,e,i,l,s){this.addRenderCall("line",{x1:t,y1:e,x2:i,y2:l,obj:s})}static rect(t,e,i,l,s){this.addRenderCall("rect",{x:t,y:e,width:i,height:l,obj:s})}static rectFromCenter(t,e,i,l,s){this.addRenderCall("rectFromCenter",{x:t,y:e,width:i,height:l,obj:s})}static rectFromPoints(t,e,i,l,s){this.addRenderCall("rectFromPoints",{x1:t,y1:e,x2:i,y2:l,obj:s})}static poly(t,e){this.addRenderCall("poly",{points:t,obj:e})}static circle(t,e,i,l){this.addRenderCall("circle",{x:t,y:e,radius:i,obj:l})}static circleFromRect(t,e,i,l,s){this.addRenderCall("circleFromRect",{x:t,y:e,width:i,height:l,obj:s})}static point(t,e,i){this.addRenderCall("point",{x:t,y:e,obj:i})}static handleTexture(t,e,i){var l;if(t.isLoaded)if(q.has(t.id)){const{scale:l,rotation:s,offset:n}=t;this.addRenderCall(e,d(o({},i),{textureId:t.id,scale:l,rotation:s,offset:n}))}else null==(l=t.convertToBitmap())||l.then((e=>{q.set(t.id,e),this.sendMessageToWorker("newTexture",{id:t.id,texture:e})}))}static rectSprite(t,e,i,l,s){this.handleTexture(s,"rectSprite",{x:t,y:e,width:i,height:l})}static async circleSprite(t,e,i,l){this.handleTexture(l,"circleSprite",{x:t,y:e,radius:i})}static text(t,e,i,l){this.addRenderCall("text",{text:t,x:e,y:i,style:l})}static centeredText(t,e,i,l){this.addRenderCall("centeredText",{text:t,x:e,y:i,style:l})}static tint(t,e,i,l,s){this.addRenderCall("circle",{color:t,x:e,y:i,width:l,height:s})}static beginFrame(t){A=[],this.clear(t)}static endFrame(){O&&(this.sendMessageToWorker("render",{renderStack:A}),A=[])}}const _=(tt="OffscreenCanvas",window&&tt in window?$:B);var tt;function et(){const t=new f,e=document.createElement("div");return e.classList.toggle("stats"),t.showPanel(0),e.appendChild(t.dom),document.body.appendChild(e),K.statsShift(48),t}class it{constructor(t,e=60){if(this.requestId=0,this.animate=t,this.fps=e,!window)throw new Y("No window context","core")}start(){let t=Z();const e=1e3/this.fps,i=l=>{this.requestId=window.requestAnimationFrame(i);const s=l-t;s>=e-.1&&(t=l-s%e,this.animate(s))};this.requestId=window.requestAnimationFrame(i)}stop(){window.cancelAnimationFrame(this.requestId)}}let lt="normal";class st{constructor(t,e,i=60){this.fps=60,this.name=t,this.env=e,this.tick=0,this.stats=null,this.showStatsPanel=!0,this.gameLoop=this.env?()=>e.update():null,this.fps=i,this.makeAnimationFrame()}static setRendererType(t){lt=t}static get renderer(){return"normal"===lt?B:_}toggleStats(t){this.showStatsPanel=void 0!==t?t:!this.showStatsPanel,this.showStatsPanel?this.stats=et():(this.stats=null,document.querySelector(".stats")&&document.querySelector(".stats").remove())}makeAnimationFrame(){this.update&&(this.animationFrame=new it((t=>this.update(t)),this.fps))}setMainLoop(t){this.gameLoop=t,this.makeAnimationFrame()}setFPS(t){this.fps=t,this.makeAnimationFrame()}update(t){var e,i;null==(e=this.stats)||e.begin(),X.tick(),R.tick(t),this.gameLoop&&this.gameLoop(t),this.tick%K.updateInterval==0&&K.update(),null==(i=this.stats)||i.end(),this.tick++}start(){if(!this.gameLoop)throw new Error("No game loop");if(!this.animationFrame)throw new Error("AnimationFrame");x()?this.internalStart():window.addEventListener("DOMContentLoaded",(()=>this.internalStart()))}internalStart(){this.name&&(document.title=this.name),X.init(),R.init(),K.init(),this.showStatsPanel&&(this.stats=et()),this.animationFrame.start()}}class nt{constructor(t,e){this.rows=e,this.cols=t,this.cells=[],this.focusCell=null,this.createCells(),this.defineNeighboors()}createCells(){for(let t=0;t<this.cols;t++)for(let e=0;e<this.rows;e++)this.cells.push(new at(t,e))}updateCell(t){if(this.cells.includes(t)){if(1!==t.width||1!==t.height){if(t.width>1){let e=t.width-1,i=this.cells.filter((i=>i.y===t.y&&i.x>t.x&&i.x<=t.x+e));this.cells=this.cells.filter((t=>!i.includes(t)))}if(t.height>1){let e=t.height-1,i=this.cells.filter((i=>i.x===t.x&&i.y>t.y&&i.y<=t.y+e));this.cells=this.cells.filter((t=>!i.includes(t)))}}this.defineNeighboors(),this.cells[this.cells.indexOf(t)]=t}}defineNeighboors(){this.cells.forEach((t=>{t.neighboors.top=t.y>=1?this.cells.filter((e=>e.x<=t.x&&e.x+e.width>t.x&&e.y===t.y-t.height))[0]:null,t.neighboors.bottom=t.y<=this.rows-1?this.cells.filter((e=>e.x<=t.x&&e.x+e.width>t.x&&e.y===t.y+t.height))[0]:null,t.neighboors.left=t.x>=1?this.cells.filter((e=>e.y<=t.y&&e.y+e.height>t.y&&e.x===t.x-t.width))[0]:null,t.neighboors.right=t.x<=this.cols-1?this.cells.filter((e=>e.y<=t.y&&e.y+e.height>t.y&&e.x===t.x+t.width))[0]:null}))}get(t,e){return this.cells[t*this.cols+e]}clear(){this.cells.forEach((t=>t.state=null))}}class at{constructor(t,e,i=1,l=1){this.x=t,this.y=e,this.width=i,this.height=l,this.state=null,this.neighboors={}}}export{K as Q,nt as S,st as Z,B as a,p as b};
