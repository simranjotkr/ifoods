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

//registration form
const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  // get form controls to check for validity
  const name = $('#tellus');
  const email = $('#email');
  const phone = $('#phonenumber');
  var option = document.getElementsByName('allergie');
  const terms = $('#terms');
  let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // check user entries for validity
  let isValid = true;
  if (name.value == ''){
    name.nextElementSibling.textContent = ' This field is required';
    isValid = false;
  } else{
    name.nextElementSibling.textContent = '';
  }

  if (email.value == ''){
    email.nextElementSibling.textContent = ' This filed is required';
    isValid = false;
  } else if (!emailpattern.test(email.value)){
    email.nextElementSibling.textContent = ' Please enter a valid e-mail';
    isValid = false;
  } else {
    email.nextElementSibling.textContent = '';
  }

  if(phone.value ==''){
    phone.nextElementSibling.textContent = ' This field is required';
    isValid = false;
  }else{
    phone.nextElementSibling.textContent = '';
  }

  if (!(option[0].checked || option[1].checked)) {
    allergie.nextElementSibling.textContent = ' This field is required';
    return false;
  }

  if (terms.checked == false) {
    terms.nextElementSibling.textContent = ' This box must be checked';
    isValid = false;
  } else {
    terms.nextElementSibling.textContent = '';
  }

  // submit the form if all fields are valid
  if (isValid == true) {
   $('form').submit();
  }
};

const resetForm = () => {
  $('form').reset();
  $('#tellus').nextElementSibling.textContent = '*';
  $('#email').nextElementSibling.textContent = '*';
  $('#phonenumber').nextElementSibling.textContent = '*';
  $('#vegie').nextElementSibling.textContent = '*';
  $('#terms').nextElementSibling.textContent = '*';
};

document.addEventListener('DOMContentLoaded', () => {
  $('#register').addEventListener('click', processEntries);
  $('#reset_form').addEventListener('click', resetForm);
});