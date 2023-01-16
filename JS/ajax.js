/* =========== XMLHttpRequest ================== */
(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
                $fragment.appendChild($li);
            })
            $xhr.appendChild($fragment);
        } else {
            let message = xhr.status || "Ocurrio un error";
            $xhr.innerHTML = `Erro ${xhr.status}: ${message}`;
        }

    })

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
}
)();

/* =========== FETCH ================== */
(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(rest => {
            return rest.ok ? rest.json() : Promise.reject(rest);
        })
        .then(json => {
            //console.log(json);
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
                $fragment.appendChild($li);
                $fetch.appendChild($fragment);
            })
            $fetch.appendChild($fragment);
        })
        .catch(err => {

            let message = err.status || "Ocurrio un error";
            $fetch.innerHTML = `Erro ${err.status}: ${message}`;
        })
        .finally(() => {
            //console.log("Esto se ejecuta independientemente del then o del catch");
        });
})();
/* =========== FETCH ASYNC ================== */
(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            json = await res.json();
           //console.log(res, json);
            if (!res.ok) throw { status: res.status, statusText: res.statusText };


            json.forEach(el => {
                //console.log(`${el.name}--${el.email}--${el.phone}`);
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);

        } catch (err) {
            let message = err.status || "Ocurrio un error";
            $fetchAsync.innerHTML = `Erro ${err.status}: ${message}`;
        } finally {
            //console.log("Esto se ejecuta independientemente del then o del catch");
            
        }
    }
    
    getData();
})();
/* =========== AXIOS ================== */
(()=>{
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();
     
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
         //console.log(res);
         res.data.forEach(el => {
            //console.log(`${el.name}--${el.email}--${el.phone}`);
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment);

    })  
    .catch(err =>{
        console.log("catch" ,err.responseText);
        let message = err.response.statusText || "Ocurrio un error";
            $axios.innerHTML = `Erro ${err.response.status}: ${message}`;
    })
    .finally(()=>{
        //console.log("Esto se ejecuta independientemente del then o del catch");
        
    })
})();
/* =========== AXIOS ASYNC ================== */
(()=>{
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();
    async function getData(){
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users");
            json = await res.data;
            console.log(res, json);
            
            res.data.forEach(el => {
                //console.log(`${el.name}--${el.email}--${el.phone}`);
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
                $fragment.appendChild($li);
            });
            $axiosAsync.appendChild($fragment);
            
        } catch (err) {
            let message = err.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Erro ${err.response.status}: ${message}`;

        }finally{
            
            console.log("Esto se ejecuta independientemente del then o del catch");
        }
    }
    getData();
})();

 
















