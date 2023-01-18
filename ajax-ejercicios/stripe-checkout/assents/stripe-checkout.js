import STRIPE_KEYS from "./strip-key.js"

const $tacos = document.getElementById("tacos");
const $template = document.getElementById("taco-template");
const $fragment = document.createDocumentFragment();

fetch("https://api.stripe.com/v1/products",{
    headers:{
        Authorization:`Bearer ${STRIPE_KEYS.secret}`,
    }
})
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((json)=>{
    console.log(json);
})

