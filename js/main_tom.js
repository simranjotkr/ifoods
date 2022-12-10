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


// Contact us page 
  const $ = (selector) => document.querySelector(selector);

  document.addEventListener('DOMContentLoaded', () => {
      $('#contactus-btn-submit').addEventListener('click', processContactus);
    });
   
  const processContactus = () => {
    // get form controls to check for validity
  
    const fname = $('#firstname');
    const lname = $('#lastname');
    const email = $('#email');
    const message = $('#message');
    //const message = document.getElementById('message').value;
    console.log(message);
    // check user entries for validity
    let isValid = true;
    let namepattern = /^[a-zA-Z]{2,30}$/;
    let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (fname.value == '') {
      fname.nextElementSibling.textContent = 'This field is required.';
      isValid = false;
    } else if (!namepattern.test(fname.value)) {
      fname.nextElementSibling.textContent = 'Please enter first name with letter only and more than 1 letter!!!';
      isValid = false;
    }
    else {
      fname.nextElementSibling.textContent = '';
    }
  
    if (lname.value == '') {
      lname.nextElementSibling.textContent = 'This field is required.';
      isValid = false;
    } else if (!namepattern.test(lname.value)) {
      lname.nextElementSibling.textContent = 'Please enter last name with letter only and more than 1 letter!!!';
      isValid = false;
    } else {
      lname.nextElementSibling.textContent = '';
    }
  
    if (email.value == '') {
      email.nextElementSibling.textContent = 'This field is required.';
      isValid = false;
    } else if (!emailpattern.test(email.value)) {
      email.nextElementSibling.textContent = 'Please enter a valid email address !!!';
      isValid = false;
    } else {
      email.nextElementSibling.textContent = '';
    }
  
    if (message.value == '') {
      message.nextElementSibling.textContent = 'This field is required.';
      isValid = false;
    } else {
      message.nextElementSibling.textContent = '';
    }
  
    // submit the form if all fields are valid
    if (isValid == true) {
      $('form').submit();
    }
  };

//healthy_eating page
getStars();
function getStars() {
  const ratings = {
    eat_a : 4.60,
    eat_b : 3.15,
    eat_c : 4.50,
    eat_d : 3.30,
    eat_e : 2.74,
    eat_f : 3.80
  };
  
  const starTotal = 5;
  
  for(const x in ratings) {  
    const starPercentage = (ratings[x] / starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    document.querySelector(`.${x} .stars-inner`).style.width = starPercentageRounded; 
  }
}


//vote
const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');

for (x=0; x<stars.length; x++){
  stars[x].starValue = (x+1);
  ["click", "mouseover", "mouseout"].forEach(function(e){
    stars[x].addEventListener(e, showRating);
  })
}

function showRating(e) {
  let type = e.type;
  let starValue = this.starValue;

  if (type === 'click'){
    if (starValue > 0){
      output.innerHTML = "You rated this " + starValue + " stars.";
    }
  }

  stars.forEach(function(elem, ind){
    if (type === 'click'){
      if (ind < starValue){
        elem.classList.add("orange");
      }
      else {
        elem.classList.remove("orange");
      }
    }
    if (type === 'mouseover'){
      if (ind < starValue){
        elem.classList.add("yellow");
      }
      else {
        elem.classList.remove("yellow");
      }
    }
    if (type === 'mouseout'){
        elem.classList.remove("yellow");
      }
  })
}

function voteConfirm(){
  //document.querySelector('.output').innerHTML = "Thank you";
  window.location.reload();
  //alert('Thank you for your vote.');
}



// food-festival page
function getCoupon() {

  let random = (Math.floor((Math.random() * 10)%5+1)*10);

  const getDiscountBtn = document.querySelector(".get-discount-btn");
  const couponContainer = document.querySelector(".coupon-container");
  const closeBtn = document.querySelector(".coupon-container .close");

  couponContainer.classList.add("active");
  document.getElementById("coupon1").innerHTML = `${random}% off`;
  document.getElementById("coupon2").innerHTML = `HUMSAVE${random}`;
  
  closeBtn.addEventListener('click', () => {
  couponContainer.classList.remove("active");
  });

}
