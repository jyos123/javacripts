document.addEventListener("DOMContentLoaded", (e) =>{
    const includeHTML = (el, url)=>{
        const xhr = new XMLHttpRequest();
        //console.log(xhr);
        console.log(xhr.status);
        xhr.addEventListener("readystatechange", e=>{
            if(xhr.readyState!==4)return;
            if(xhr.status>=200 && xhr.status<300){
                el.outerHTML = xhr.responseText;
            }else{
                let message = xhr.statusText || "Error al cargar archivo, verifique que estes haciend por http o https";
                el.outerHTML = `<div><p>${xhr.status} ${message}</p></div>`;
            }
        })

        xhr.open("GET", url);
        xhr.setRequestHeader("Content-type", "text/html;charset=utf-8");
        xhr.send();
    };
    document.querySelectorAll("[data-include]").forEach(el =>includeHTML(el, el.getAttribute("data-include")));
    //console.log(el.getAttribute("data-include"));
});