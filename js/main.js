    let back = document.querySelector(".back")
    let menu_bg = document.querySelector(".menu_bg")


    let scrollToTopp = () =>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }




    back.addEventListener("click",()=>{
        scrollToTopp()
    })


    window.addEventListener("scroll",()=>{
        let scroling = window.scrollY
        if(scroling > 100){
            back.style.display = "block"
        }else{
            back.style.display = "none"
        }
        if(scroling > 50){
            menu_bg.classList.add("bg")
        }else{
            menu_bg.classList.remove("bg")
        }
    })