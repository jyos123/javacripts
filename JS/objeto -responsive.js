const d = document,
    w = window; 

    export default function reponsiveMedia(id, md, mobileContent, desktopContent ){
        let breakPoint = w.matchMedia(md);
        const responsive =(e)=>{
            if(e.matches){
               d.getElementById(id).innerHTML=desktopContent;     
            }else{
                d.getElementById(id).innerHTML=mobileContent;     

            }    
            //console.log(breakPoint);
        };

        breakPoint.addListener(responsive);
        responsive(breakPoint);
    }