const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};let e=null;t.start.addEventListener("click",(function(){t.start.setAttribute("disabled",""),t.stop.removeAttribute("disabled"),function(){const t=document.querySelector("body");e=setInterval((()=>{t.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)}()})),t.stop.addEventListener("click",(function(){t.stop.setAttribute("disabled",""),t.start.removeAttribute("disabled"),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.57a3cfa4.js.map
