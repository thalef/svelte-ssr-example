function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function f(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function i(){return a(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){return Array.from(t.childNodes)}function m(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):u(e)}function g(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return a(e)}function p(t){return g(t," ")}let $;function v(t){$=t}const y=[],x=[],b=[],E=[],_=Promise.resolve();let w=!1;function A(t){b.push(t)}let j=!1;const N=new Set;function C(){if(!j){j=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];v(e),F(e.$$)}for(y.length=0;x.length;)x.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];N.has(e)||(N.add(e),e())}b.length=0}while(y.length);for(;E.length;)E.pop()();w=!1,j=!1,N.clear()}}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const I=new Set;function k(t,e){t&&t.i&&(I.delete(t),t.i(e))}function B(t,n,s){const{fragment:f,on_mount:l,on_destroy:c,after_update:u}=t.$$;f&&f.m(n,s),A(()=>{const n=l.map(e).filter(o);c?c.push(...n):r(n),t.$$.on_mount=[]}),u.forEach(A)}function H(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,_.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(e,o,s,f,l,u,a=[-1]){const i=$;v(e);const d=o.props||{},m=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:n(),dirty:a};let g=!1;if(m.ctx=s?s(e,d,(t,n,...r)=>{const o=r.length?r[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=o)&&(m.bound[t]&&m.bound[t](o),g&&M(e,t)),n}):[],m.update(),g=!0,r(m.before_update),m.fragment=!!f&&f(m.ctx),o.target){if(o.hydrate){const t=h(o.target);m.fragment&&m.fragment.l(t),t.forEach(c)}else m.fragment&&m.fragment.c();o.intro&&k(e.$$.fragment),B(e,o.target,o.anchor),C()}v(i)}class L{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function O(e){let n,r,o,s,$,v;return{c(){n=u("div"),r=u("a"),o=a("Home"),s=i(),$=u("a"),v=a("Fruits"),this.h()},l(t){n=m(t,"DIV",{class:!0});var e=h(n);r=m(e,"A",{href:!0,class:!0});var f=h(r);o=g(f,"Home"),f.forEach(c),s=p(e),$=m(e,"A",{href:!0,class:!0});var l=h($);v=g(l,"Fruits"),l.forEach(c),e.forEach(c),this.h()},h(){d(r,"href","/"),d(r,"class","svelte-s4ffrs"),d($,"href","/fruits"),d($,"class","svelte-s4ffrs"),d(n,"class","Menu svelte-s4ffrs")},m(t,e){l(t,n,e),f(n,r),f(r,o),f(n,s),f(n,$),f($,v)},p:t,i:t,o:t,d(t){t&&c(n)}}}class T extends L{constructor(t){var e;super(),document.getElementById("svelte-s4ffrs-style")||((e=u("style")).id="svelte-s4ffrs-style",e.textContent=".Menu.svelte-s4ffrs{display:flex}a.svelte-s4ffrs{margin-right:1rem}",f(document.head,e)),S(this,t,null,O,s,{})}}function q(t,e,n){const r=t.slice();return r[1]=e[n],r}function D(t){let e,n,r=t[1].name+"";return{c(){e=u("li"),n=a(r)},l(t){e=m(t,"LI",{});var o=h(e);n=g(o,r),o.forEach(c)},m(t,r){l(t,e,r),f(e,n)},p(t,e){1&e&&r!==(r=t[1].name+"")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(n,r)},d(t){t&&c(e)}}}function P(t){let e,n,r,o,s,$;const v=new T({});let y=t[0],x=[];for(let e=0;e<y.length;e+=1)x[e]=D(q(t,y,e));return{c(){var t;(t=v.$$.fragment)&&t.c(),e=i(),n=u("h1"),r=a("Fruits"),o=i(),s=u("ul");for(let t=0;t<x.length;t+=1)x[t].c();this.h()},l(t){var f,l;f=v.$$.fragment,l=t,f&&f.l(l),e=p(t),n=m(t,"H1",{class:!0});var u=h(n);r=g(u,"Fruits"),u.forEach(c),o=p(t),s=m(t,"UL",{});var a=h(s);for(let t=0;t<x.length;t+=1)x[t].l(a);a.forEach(c),this.h()},h(){d(n,"class","svelte-jx9bdn")},m(t,c){B(v,t,c),l(t,e,c),l(t,n,c),f(n,r),l(t,o,c),l(t,s,c);for(let t=0;t<x.length;t+=1)x[t].m(s,null);$=!0},p(t,[e]){if(1&e){let n;for(y=t[0],n=0;n<y.length;n+=1){const r=q(t,y,n);x[n]?x[n].p(r,e):(x[n]=D(r),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=y.length}},i(t){$||(k(v.$$.fragment,t),$=!0)},o(t){!function(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),(void 0).c.push(()=>{I.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}(v.$$.fragment,t),$=!1},d(t){H(v,t),t&&c(e),t&&c(n),t&&c(o),t&&c(s),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(x,t)}}}function U(t,e,n){let{fruits:r}=e;return t.$set=t=>{"fruits"in t&&n(0,r=t.fruits)},[r]}export default class extends L{constructor(t){var e;super(),document.getElementById("svelte-jx9bdn-style")||((e=u("style")).id="svelte-jx9bdn-style",e.textContent="h1.svelte-jx9bdn{margin:2rem 0}",f(document.head,e)),S(this,t,U,P,s,{fruits:0})}}