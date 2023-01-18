import STRIPE_KEYS from "./strip-key.js"

const $tacos = document.getElementById("tacos");
const $template = document.getElementById("taco-template");
const $fragment = document.createDocumentFragment();

const fetchOption ={
    
    headers:{
        Authorization:`Bearer ${STRIPE_KEYS.secret}`
    }
};

let products, prices;

Promise.all([
    fetch("https://api.stripe.com/v1/products",fetchOption),    
    fetch("https://api.stripe.com/v1/prices",fetchOption)
])
.then(todasLasRespuestas =>Promise.all(todasLasRespuestas.map(respuestaIndividual => respuestaIndividual.json())))
.then(jsonRespuesta => {
    // console.log(jsonRespuesta);
    products = jsonRespuesta[0].data;
    prices = jsonRespuesta[1].data;
    console.log(products, prices);
})
.catch()
