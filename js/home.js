// Function for Slideshow

$(document).ready(function() {
    var timeToDisplay = 3000;

    var about = $('.about');
    var urls = [
       'https://trayfinder.info/iCovermax.jpg',
       'https://trayfinder.info/icoverMax-1.jpeg',
       'https://trayfinder.info/icover-2.jpg',
       'https://trayfinder.info/iCoverMax-4.jpg',       
    ];

    var index = 0;
    var transition = function() {
        var url = urls[index];

        about.css('background-image', 'url(' + url + ')');

        index = index + 1;
        if (index > urls.length - 1) {
            index = 0;
        }
    };
    
    var run = function() {
        transition();
        about.fadeIn('slow', function() {
            setTimeout(function() {
                about.fadeOut('slow', run);
            }, timeToDisplay);
        });
    }
        
    run();
});

// Email Address Validation

function validation() {
    let form = document.getElementById('form')
    let email = document.getElementById('email').value
    let text = document.getElementById('response')
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  
    if (email.match(pattern)) {
      form.classList.add('valid')
      form.classList.remove('invalid')
      text.innerHTML = "Thanks For Subscribing!"
      text.style.color = '#00ff00'
    } else {
      form.classList.remove('valid')
      form.classList.add('invalid')
      text.innerHTML = "Please Enter Valid Email Address!"
      text.style.color = '#ff0000'
    }
  
    if (email == '') {
      form.classList.remove('valid')
      form.classList.remove('invalid')
      text.innerHTML = "Please Enter Valid Email Address!"
      text.style.color = '#ff0000'
    }
  }



//Toggle Mobile Menu

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
 

// Activate Submenu

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
 
// Event Listeners

for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}

// Close Submenu from anywhere on the page

function closeSubmenu(e){
    let isClickInside = menu.contains(e.target);

    if(!isClickInside && menu.querySelector('.submenu-active')){
        menu.querySelector('.submenu-active').classList.remove('submenu-active');
    }
}

document.addEventListener('click', closeSubmenu, false);

// Cookies Consent

const cookieContainer = document.querySelector(".cookies");
const acceptBtn = document.querySelector(".accept button");

setTimeout(() => {
  cookieContainer.classList.remove("hide");
}, 1000);

acceptBtn.addEventListener("click", () => {
  cookieContainer.classList.add("hide");
});
