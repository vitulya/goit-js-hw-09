const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};let e=null;t.btnStart.addEventListener("click",(()=>{e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btnStart.disabled=!0,t.btnStop.disabled=!1})),t.btnStop.addEventListener("click",(()=>{clearInterval(e),t.btnStart.disabled=!1,t.btnStop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.a81f3d53.js.map
