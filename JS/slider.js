const d = document;

export default function slider(){
    const  $nextBtn = d.querySelector(".slider-btns .next"),
        $prevBtn = d.querySelector(".slider-btns .prev"),
        $slider = d.querySelectorAll(".slider-slide");

        let i =0;
        d.addEventListener("click", (e)=>{
            if(e.target === $prevBtn){
                e.preventDefault();
                $slider[i].classList.remove("active");
                i--;  

                if(i<0){
                    i = $slider.length-1;
                    
                } 
                
                
                $slider[i].classList.add("active");
            }

            if(e.target === $nextBtn){
                e.preventDefault();
                $slider[i].classList.remove("active");
                i++;

                if(i>= $slider.length){
                    i = 0;
                    
                } 
                
                $slider[i].classList.add("active");
            }
        })
}