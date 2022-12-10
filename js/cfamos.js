const $ = (selector) => document.querySelector(selector);

let jobList = [];

const processEntries = () =>{
    const email = $('#email');
    const firstname = $('#fname');
    const lastname = $('#lname');

    let isValid = true;

    if (email.value == ''){
        email.nextElementSibling.innerHTML = '*Email required'
        isValid = false;
    }
    else {
        email.nextElementSibling.innerHTML = '';
    }

    if (firstname.value == ''){
        firstname.nextElementSibling.innerHTML = '*First name required'
        isValid = false;
    }
    else {
        email.nextElementSibling.innerHTML = '';
    }
    
    if (lastname.value == ''){
        lastname.nextElementSibling.innerHTML = '*Last name required'
        isValid = false;
    }
    else {
        email.nextElementSibling.innerHTML = '';
    }

    if (isValid == true){
        $('form').submit();
    }

};

document.addEventListener('DOMContentLoaded', () => {
    $('#register').addEventListener('click', processEntries);
});


//Toggle mobile menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else{
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

toggle.addEventListener('click', toggleMenu, false);

//Submenu
const items = document.querySelectorAll(".item");
 
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
 
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}

//Close submenu from anywhere in the page
function closeSubmenu(e){
    let isClickInside = menu.contains(e.target);

    if(!isClickInside && menu.querySelector('.submenu-active')){
        menu.querySelector('.submenu-active').classList.remove('submenu-active');
    }
}

document.addEventListener('click', closeSubmenu, false);

