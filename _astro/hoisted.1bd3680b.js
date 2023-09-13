document.getElementById("btn-call-to-action").addEventListener("click",()=>{const n=document.getElementById("call-to-action").offsetTop;window.scroll({behavior:"smooth",left:0,top:n})});window.onscroll=()=>{const n=document.getElementById("header");switch(window.scrollY){case 0:n.classList.remove("shadow-lg");break;default:n.classList.add("shadow-lg")}};const y=n=>history.state&&history.replaceState(n,""),b=!!document.startViewTransition,p=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),A=n=>document.dispatchEvent(new Event(n)),S=()=>A("astro:page-load"),f="data-astro-transition-persist";let u=0;history.state?(u=history.state.index,scrollTo({left:0,top:history.state.scrollY})):p()&&history.replaceState({index:u,scrollY},"");const k=(n,e)=>{let t=!1,r=!1;return(...i)=>{if(t){r=!0;return}n(...i),t=!0,setTimeout(()=>{r&&(r=!1,n(...i)),t=!1},e)}};async function x(n){const e=await fetch(n),t=await e.text();return{ok:e.ok,html:t}}function v(){const n=document.querySelector('[name="astro-view-transitions-fallback"]');return n?n.getAttribute("content"):"animate"}function T(){for(const n of document.scripts)n.dataset.astroExec=""}function L(){let n=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const t=document.createElement("script");t.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const i=new Promise(h=>{t.onload=h});n=n.then(()=>i)}t.setAttribute(r.name,r.value)}t.dataset.astroExec="",e.replaceWith(t)}return n}function R(n){const e=n.effect;return!e||!(e instanceof KeyframeEffect)||!e.target?!1:window.getComputedStyle(e.target,e.pseudoElement).animationIterationCount==="infinite"}const I=new DOMParser;async function E(n,e,t,r){const i=s=>{const l=s.getAttribute(f),d=l&&n.head.querySelector(`[${f}="${l}"]`);if(d)return d;if(s.matches("link[rel=stylesheet]")){const a=s.getAttribute("href");return n.head.querySelector(`link[rel=stylesheet][href="${a}"]`)}if(s.tagName==="SCRIPT"){let a=s;for(const o of n.scripts)if(a.textContent&&a.textContent===o.textContent||a.type===o.type&&a.src===o.src)return o}return null},h=()=>{n.querySelectorAll("head noscript").forEach(o=>o.remove());const s=document.documentElement,l=[...s.attributes].filter(({name:o})=>(s.removeAttribute(o),o.startsWith("data-astro-")));[...n.documentElement.attributes,...l].forEach(({name:o,value:c})=>s.setAttribute(o,c));for(const o of Array.from(document.head.children)){const c=i(o);c?c.remove():o.remove()}document.head.append(...n.head.children);const d=document.body;document.body.replaceWith(n.body);for(const o of d.querySelectorAll(`[${f}]`)){const c=o.getAttribute(f),w=document.querySelector(`[${f}="${c}"]`);w&&w.replaceWith(o)}scrollTo({left:0,top:0,behavior:"instant"});let a=0;if(!t&&e.hash){const o=decodeURIComponent(e.hash.slice(1)),c=document.getElementById(o);c&&(a=c.offsetTop)&&c.scrollIntoView()}else t&&t.scrollY!==0&&scrollTo(0,t.scrollY);!t&&history.pushState({index:++u,scrollY:a},"",e.href),A("astro:after-swap")},m=[];for(const s of n.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${f}="${s.getAttribute(f)}"], link[rel=stylesheet]`)){const l=document.createElement("link");l.setAttribute("rel","preload"),l.setAttribute("as","style"),l.setAttribute("href",s.getAttribute("href")),m.push(new Promise(d=>{["load","error"].forEach(a=>l.addEventListener(a,d)),document.head.append(l)}))}if(m.length&&await Promise.all(m),r==="animate"){const s=document.getAnimations();document.documentElement.dataset.astroTransitionFallback="old";const l=document.getAnimations().filter(o=>!s.includes(o)&&!R(o)),d=Promise.all(l.map(o=>o.finished)),a=()=>{h(),document.documentElement.dataset.astroTransitionFallback="new"};await d,a()}else h()}async function g(n,e,t){let r;const i=e.href,{html:h,ok:m}=await x(i);if(!m){location.href=i;return}const s=I.parseFromString(h,"text/html");if(!s.querySelector('[name="astro-view-transitions-enabled"]')){location.href=i;return}document.documentElement.dataset.astroTransition=n,b?r=document.startViewTransition(()=>E(s,e,t)).finished:r=E(s,e,t,v());try{await r}finally{await L(),T(),S()}}function P(n){if(document.querySelector(`link[rel=prefetch][href="${n}"]`))return;if(navigator.connection){let t=navigator.connection;if(t.saveData||/(2|3)g/.test(t.effectiveType||""))return}let e=document.createElement("link");e.setAttribute("rel","prefetch"),e.setAttribute("href",n),document.head.append(e)}if(b||v()!=="none"){T(),document.addEventListener("click",e=>{let t=e.target;if(t instanceof Element&&t.tagName!=="A"&&(t=t.closest("a")),!(!t||!(t instanceof HTMLAnchorElement)||t.dataset.astroReload!==void 0||t.hasAttribute("download")||!t.href||t.target&&t.target!=="_self"||t.origin!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||!p())){if(location.pathname===t.pathname&&location.search===t.search){if(t.hash)return;if(e.preventDefault(),y({...history.state,scrollY}),scrollTo({left:0,top:0,behavior:"instant"}),location.hash){const r={index:++u,scrollY:0};history.pushState(r,"",t.href)}return}e.preventDefault(),y({index:u,scrollY}),g("forward",new URL(t.href))}}),addEventListener("popstate",e=>{if(!p()&&e.state){history.scrollRestoration&&(history.scrollRestoration="manual"),location.reload();return}if(e.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}history.scrollRestoration&&(history.scrollRestoration="manual");const t=history.state,r=t.index,i=r>u?"forward":"back";u=r,g(i,new URL(location.href),t)}),["mouseenter","touchstart","focus"].forEach(e=>{document.addEventListener(e,t=>{if(t.target instanceof HTMLAnchorElement){let r=t.target;r.origin===location.origin&&r.pathname!==location.pathname&&p()&&P(r.pathname)}},{passive:!0,capture:!0})}),addEventListener("load",S);const n=()=>{y({...history.state,scrollY})};"onscrollend"in window?addEventListener("scrollend",n):addEventListener("scroll",k(n,300))}