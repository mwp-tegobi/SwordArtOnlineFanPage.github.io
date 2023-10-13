let click_container_temp = document.querySelectorAll(".click_desp")
let target_container_desp = document.querySelectorAll(".temps_infos_item")



click_container_temp.forEach((el,ind) =>{
    el.addEventListener("click", (e) =>{
        target_container_desp.forEach((el1,ind) =>{
            if(el1.id === e.target.id){el1.scrollIntoView({behavior: "smooth"});}
        })
    })
})



