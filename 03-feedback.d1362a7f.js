!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o,i,a="Expected a function",l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,g=d||m||Function("return this")(),v=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return g.Date.now()};function S(e,t,n){var r,o,i,l,u,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(a);function g(t){var n=r,i=o;return r=o=void 0,c=t,l=e.apply(i,n)}function v(e){return c=e,u=setTimeout(T,t),s?g(e):l}function S(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function T(){var e=b();if(S(e))return j(e);u=setTimeout(T,function(e){var n=t-(e-f);return d?y(n,i-(e-c)):n}(e))}function j(e){return u=void 0,m&&r?g(e):(r=o=void 0,l)}function E(){var e=b(),n=S(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return v(f);if(d)return u=setTimeout(T,t),g(f)}return void 0===u&&(u=setTimeout(T,t)),l}return t=h(t)||0,O(n)&&(s=!!n.leading,i=(d="maxWait"in n)?p(h(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),E.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},E.flush=function(){return void 0===u?l:j(b())},E}function O(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(O(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=O(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var o=f.test(t);return o||c.test(t)?s(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(a);return O(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,maxWait:t,trailing:o})};var T={form:document.querySelector(".feedback-form"),emailInputEl:document.querySelector("input"),messageTextareaEl:document.querySelector("textarea")};T.form.addEventListener("input",e(t)((function(e){e.preventDefault(),"email"===e.target.name?I.email=e.target.value:"message"===e.target.name&&(I.message=e.target.value);localStorage.setItem(E,JSON.stringify(I))}),500)),T.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(I),localStorage.removeItem(E),T.form.reset(),T.emailInputEl.placeholder="",T.messageTextareaEl.placeholder=""}));var j,E="feedback-form-state",I=null!==(j=JSON.parse(localStorage.getItem(E)))&&void 0!==j?j:{};(null===(o=JSON.parse(localStorage.getItem(E)))||void 0===o?void 0:o.email)&&(T.emailInputEl.placeholder=JSON.parse(localStorage.getItem(E)).email),(null===(i=JSON.parse(localStorage.getItem(E)))||void 0===i?void 0:i.message)&&(T.messageTextareaEl.placeholder=JSON.parse(localStorage.getItem(E)).message)}();
//# sourceMappingURL=03-feedback.d1362a7f.js.map
