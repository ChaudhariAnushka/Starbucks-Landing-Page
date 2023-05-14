var menu = document.getElementById("menu")
var menu= document.getElementById("nav")
//var menubtn = document.getElementById("menu")
sideNav.style.right = "-250px"

menu.onclick = function(){
    if (nav.style.right == "-250px") 
    {
        nav.style.right = "0";
        menu.src = "https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png"
    }
    else{
        nav.style.right = "-250px" ;
        menu.src = "https://manula.s3.amazonaws.com/user/484/img/bulleted-menu-no-stroke-manual.png" 
       

    }
}

// let menu = document.querySelector(menu);
// let navbar = document.querySelector(navbar);

// menu.onclick = () =>{
//     menu.classList.toggle('fa-solid fa-bars')
//     navbar.classList.toggle('active')

// }
// window.onscroll = () =>{
//     menu.classList.remove('fa-solid fa-bars')
//     navbar.classList.remove('active')
// }