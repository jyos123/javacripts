const d = document;
export default function countDown(id, limitDate, finalMessage){
    const $countdown =d.getElementById(id),
        countdownDate = new Date(limitDate).getTime();
        //console.log(countdownDate);
        let countDownTempo = setInterval(() => {
            let now = new Date().getTime(),
            limitTime = countdownDate - now,
            days =Math.floor(limitTime/(1000 * 60 *60 * 24)),
            hours = Math.floor((limitTime%(1000 * 60 *60 * 24))/(1000 * 60 *60)),
            minutes = Math.floor((limitTime%(1000 * 60 *60))/(1000 * 60)),
            seconst = Math.floor((limitTime%(1000 * 60))/(1000));
            $countdown.innerHTML=`<h3>Fatan ${days} dias ${hours} horas ${minutes} minutos ${seconst} segundos</h3>`;
          
            if(limitDate<0){
               clearInterval(countDownTempo);
               $countdown.innerHTML = `<h3>${finalMessage}</h3>`     
          }      
        }, 1000);


};