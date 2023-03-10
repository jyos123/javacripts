import STRIPE_KEYS from "./strip-key.js"

const $tacos = document.getElementById("tacos");
const $template = document.getElementById("taco-template").content;
const $fragment = document.createDocumentFragment();
console.log($template);
const fetchOption ={
    
    headers:{
        Authorization:`Bearer ${STRIPE_KEYS.secret}`
    }
};  

let productos, precios;

Promise.all([
    fetch("https://api.stripe.com/v1/products",fetchOption),    
    fetch("https://api.stripe.com/v1/prices",fetchOption)
])
.then(todasLasRespuestas =>Promise.all(todasLasRespuestas.map(respuestaIndividual => respuestaIndividual.json())))
.then(jsonRespuesta => {
    console.log(jsonRespuesta);
    productos = jsonRespuesta[0].data;
    precios = jsonRespuesta[1].data;
    //console.log(productos, precios);

    precios.forEach(el => {
        let productoData = productos.filter(producto => producto.id === el.product);
        console.log(productoData);
        $template.querySelector(".taco").setAttribute("data-precio", el.id);
        $template.querySelector("img").src = productoData[0].images[0];
        $template.querySelector("img").alt = productoData[0].name;
        $template.querySelector("figcaption").innerHTML =`
        ${productoData[0].name} <br> 
        ${el.unit_amount} ${el.currency}
        ` 
        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });
     $tacos.appendChild($fragment);   
})
.catch(error=>{
    console.log(error);
})

