function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},l={},r=t.parcelRequire4c75;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in l){var t=l[e];delete l[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){l[e]=t},t.parcelRequire4c75=r);var n=r("8zd4h");const o=document.querySelector(".feedback-form");o.addEventListener("input",e(n)((function(e){i={email:s.value,message:u.value},localStorage.setItem("feedback-form-state",JSON.stringify(i))}),500)),o.addEventListener("submit",(function(e){if(e.preventDefault(),console.log({email:s.value,message:u.value}),""===s.value||""===u.value)return alert("Please fill in all the fields!");localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),i={}}));let i=JSON.parse(localStorage.getItem("feedback-form-state"))||{};const{email:s,message:u}=o.elements;i&&(s.value=i.email||"",u.value=i.message||"");
//# sourceMappingURL=03-feedback.2c9f125f.js.map
