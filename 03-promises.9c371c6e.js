!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i={form:document.querySelector(".form"),firstDelay:document.querySelector("[name='delay']"),delayStep:document.querySelector("[name='step']"),amount:document.querySelector("[name='amount']")};function a(e,n){return new Promise((function(o,t){setInterval((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();for(var n=i.firstDelay.valueAsNumber,o=i.delayStep.valueAsNumber,t=i.amount.valueAsNumber,u=1;u<=t;u++)a(u,n).then((function(e){var n=e.position,o=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=o}))}();
//# sourceMappingURL=03-promises.9c371c6e.js.map
