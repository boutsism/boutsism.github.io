import{n as d,s as m}from"./scheduler.e108d1fd.js";const u=[];function p(e,t=d){let n;const o=new Set;function r(s){if(m(e,s)&&(e=s,n)){const c=!u.length;for(const l of o)l[1](),u.push(l,e);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(s){r(s(e))}function a(s,c=d){const l=[s,c];return o.add(l),o.size===1&&(n=t(r,i)||d),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:a}}var g;const E=((g=globalThis.__sveltekit_175h0hc)==null?void 0:g.base)??"";var k;const w=((k=globalThis.__sveltekit_175h0hc)==null?void 0:k.assets)??E,A="1699202213637",y="sveltekit:snapshot",I="sveltekit:scroll",x="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const h={..._,"":_.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function N(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||S(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:o,download:i}}function P(e){let t=null,n=null,o=null,r=null,i=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=v(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:h[o??"off"],preload_data:h[r??"off"],keep_focus:c(t),noscroll:c(n),reload:c(i),replace_state:c(a)}}function b(e){const t=p(e);let n=!0;function o(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function i(a){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&a(s=c)})}return{notify:o,set:r,subscribe:i}}function R(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==A;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:o}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function V(e){e.client}const Y={url:b({}),page:b({}),navigating:p(null),updated:R()};export{x as I,_ as P,I as S,y as a,N as b,P as c,Y as d,E as e,L as f,O as g,V as h,S as i,U as s};