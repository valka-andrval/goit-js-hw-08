function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var l={id:e,exports:{}};return r[e]=l,t.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=l);var o=l("8zd4h");form=document.querySelector(".feedback-form"),form.addEventListener("input",e(o)((function(e){n={email:f.value,message:i.value},localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),form.addEventListener("submit",(function(e){if(e.preventDefault(),console.log({email:f.value,message:i.value}),""===f.value||""===i.value)return alert("Please fill in all the fields!");localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),n={}}));let n=JSON.parse(localStorage.getItem("feedback-form-state"))||{};const{email:f,message:i}=form.elements;n&&(f.value=n.email||"",i.value=n.message||"");
//# sourceMappingURL=03-feedback.55a0b004.js.map
