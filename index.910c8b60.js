const e=document.querySelectorAll(".toggleButton"),t=document.querySelectorAll(".section");e.forEach((e,s)=>{e.addEventListener("click",()=>{t[s].classList.remove("visible"),t[s].classList.add("hidden");let e=(s+1)%t.length;t[e].classList.remove("hidden"),t[e].classList.add("visible")})});const s=document.getElementsByClassName("carousel__item");s.length;
//# sourceMappingURL=index.910c8b60.js.map
