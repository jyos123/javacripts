const d = document;
export default function reponsiveTester(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e)=>{
        if(e.target === $form){
            e.preventDefault();
           //console.log($form);
           tester = window.open($form.direccion.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.ancho.value}`);     
        }
    })

    d.addEventListener("click", (e)=>{
        if (e.target === $form.cerrar) tester.close();
    })

} 