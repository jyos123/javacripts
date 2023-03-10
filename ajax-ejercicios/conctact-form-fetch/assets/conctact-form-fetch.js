const d = document;
let datos;
function contacForm() {
    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");
    //console.log($inputs);
    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        input.insertAdjacentElement("afterend", $span);
        $span.classList.add("contact-form-error", "none");
    })

    d.addEventListener("keyup", (e) => {
        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
            //         console.log(e.target, pattern);

            if (pattern && $input.value !== "") {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
            }

            if (!pattern) {
                return $input.value === ""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");

            }
        }
    })

    d.addEventListener("submit", (e) => {
        e.preventDefault();
        const $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response");
        $loader.classList.remove("none");
        let res1;

        fetch("https://formsubmit.co/ajax/joliversalamanca@gmail.com", {
            method: "POST",
            headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    },
            body: new FormData(e.target)
        })
            .then(response => {
                console.log(response);
                return response.json()
            })
            .then(data => {
                console.log(data);
                datos = data.success;

                if (data.success == "true") {

                    setTimeout(() => {
                        $loader.classList.add("none");
                        $response.classList.remove("none");
                    }, 2000);

                } else {
                    console.log("Nega");
                    Promise.reject(response);
                }

            })
            .catch(error => {
                console.log("aviso", datos);
                $loader.classList.add("none");
                //console.log("Mi respuesta", error);
                // let message = error.statesText || "Ocurrio un error de envio";
                // $response.innerHTML = `<p>Error: ${error.status} ; ${error.statusText}</p>`;
                alert("ERROR DE ENVIO O CONECCION", error);
                $response.innerHTML = `<P>NO enviado</P>`;
            })
            .finally(() => {
                $form.reset();
                setTimeout(() => {
                    $response.classList.add("none");
                }, 4000);
            });

    });
}
d.addEventListener("DOMContentLoaded", contacForm);
