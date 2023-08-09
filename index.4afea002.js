const e=document.querySelectorAll(".toggleButton"),s=document.querySelectorAll(".section");e.forEach((e,t)=>{e.addEventListener("click",()=>{s[t].classList.remove("visible"),s[t].classList.add("hidden");let e=(t+1)%s.length;s[e].classList.remove("hidden"),s[e].classList.add("visible")})});
//# sourceMappingURL=index.4afea002.js.map
