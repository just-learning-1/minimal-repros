(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7942:function(e,t,n){"use strict";var r=n(5696);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},u=n(4957),c=n(9898),a=n(639);var s={};function l(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var t=u.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?u.resolveHref(o,e.as):c||i}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,w=a.useIntersection({rootMargin:"200px"}),T=r(w,2),x=T[0],E=T[1],L=i.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);i.default.useEffect((function(){var e=E&&n&&u.isLocalURL(d),t="undefined"!==typeof g?g:o&&o.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(o,d,p,{locale:t})}),[p,d,E,g,n,o]);var _={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:a,scroll:c}))}(e,o,d,p,h,m,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&l(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof g?g:o&&o.locale,M=o&&o.isLocaleDomain&&u.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);_.href=M||u.addBasePath(u.addLocale(p,k,o&&o.defaultLocale))}return i.default.cloneElement(t,_)};t.default=f},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,a=e.disabled||!u,s=o.useRef(),l=o.useState(!1),f=r(l,2),d=f[0],p=f[1],v=o.useState(t?t.current:null),h=r(v,2),m=h[0],y=h[1],g=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),a||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,u=r.elements;return u.set(e,t),i.observe(e),function(){u.delete(e),i.unobserve(e),0===u.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:n}))}),[a,m,n,d]);return o.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&y(t.current)}),[t]),[g,d]};var o=n(7294),i=n(6286),u="undefined"!==typeof IntersectionObserver;var c=new Map},3047:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(1664),o=n(5893),i=n(3454);function u(){var e=i.env.PATH_BASE||"";return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Issues and Their Minimal Repros"}),(0,o.jsx)("ol",{children:(0,o.jsxs)("ul",{children:[(0,o.jsx)(r.default,{href:"/radix-dialog-mobile-eats-first-pointer-event-after-dismiss",as:"".concat(e,"/radix-dialog-mobile-eats-first-pointer-event-after-dismiss"),children:(0,o.jsx)("a",{children:"Issue: Radix Dialog on mobile eats first pointer event after dismiss"})})," ",(0,o.jsx)("em",{children:"Created 2022-05-14"})]})})]})}},3454:function(e,t,n){"use strict";var r,o;e.exports=(null===(r=n.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(o=n.g.process)||void 0===o?void 0:o.env)?n.g.process:n(7663)},5653:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3047)}])},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,a=[],s=!1,l=-1;function f(){s&&c&&(s=!1,c.length?a=c.concat(a):l=-1,a.length&&d())}function d(){if(!s){var e=u(f);s=!0;for(var t=a.length;t;){for(c=a,a=[];++l<t;)c&&c[l].run();l=-1,t=a.length}c=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||s||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},u=!0;try{t[e](i,i.exports,r),u=!1}finally{u&&delete n[e]}return i.exports}r.ab="//";var o=r(162);e.exports=o}()},1664:function(e,t,n){e.exports=n(7942)}},function(e){e.O(0,[774,888,179],(function(){return t=5653,e(e.s=t);var t}));var t=e.O();_N_E=t}]);