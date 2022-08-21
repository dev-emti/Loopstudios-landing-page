togglerMenuButton = document.querySelector('.toggler-menu');
menu = document.querySelector('.menu');


togglerMenuButton.addEventListener("click", (e) => {

    visibility = menu.getAttribute('data-visible');

    

    if(visibility === "true"){
        togglerMenuButton.setAttribute("data-toggler", false);
        menu.setAttribute("data-visible", false);
        
    }else if(visibility === "false"){
        togglerMenuButton.setAttribute("data-toggler", true);
        menu.setAttribute("data-visible", true);
    }
    console.log(togglerMenuButton.getAttribute('data-toggler'));
    console.log(visibility);
})