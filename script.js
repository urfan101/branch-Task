let newBox = document.querySelector(".new-box")
let shopButton = document.querySelector(".shop-button")

shopButton.addEventListener("click", ()=>{
    if(newBox.classList.contains("disp-none")){
        newBox.classList.replace("disp-none", "disp-block")
    } else {
        newBox.classList.replace("disp-block", "disp-none")
    }
});

document.addEventListener("click", (event) => {
    if (!newBox.contains(event.target) && !shopButton.contains(event.target)) {
        if (!newBox.classList.contains("disp-none")) {
            newBox.classList.replace("disp-block", "disp-none");
        }
    }
});