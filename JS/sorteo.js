const d = document;

export default function draw(btn, selector){
    const getWinner = (selector) =>{
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random()*$players.length);
        //console.log($players);
        //console.log($players[random]);
        //console.log(random,$players.length);
        return `El gandor es ${$players[random].textContent}`

    } 

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn)){
            let resul = getWinner(selector);
            console.log(resul);
        }
    })
}