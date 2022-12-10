fetch("articles.json")
.then(response => response.json())
.then(articles => {
	localStorage.setItem("articles", JSON.stringify(articles));
});

let container = document.querySelector(".content");
let loadMoreButton = document.querySelector(".content button");

let initialItems = 3;
let loadItems = 3;

function loadInitialItems(){
	let articles = JSON.parse(localStorage.getItem("articles"));
	let out = "";
	let counter = 0;
	for(let article of articles){
		if(counter < initialItems){
			out += `
				<div class="article">
					<div class="left">
						<img src="${article.image}" alt="">
					</div>
					<div class="right">
						<p class="title">${article.title}</p>
						<p class="about">${article.about}</p>
						<a class="read" href="${article.read}" target="_blank">Read article</a>
					</div>
				</div>
			`;
		}
		counter++;
	}

	let div = document.createElement("div");
	container.insertBefore(div, loadMoreButton);
	div.innerHTML = out;	
}

function loadData(){
	let articles = JSON.parse(localStorage.getItem("articles"));
	let currentDisplayedItems = document.querySelectorAll(".article").length;
	
	let out = "";
	let counter = 0;
	for(let article of articles){
		if(counter >= currentDisplayedItems && counter < loadItems + currentDisplayedItems){
			out += `
				<div class="article">
					<div class="left">
						<img src="${article.image}" alt="">
					</div>
					<div class="right">
						<p class="title">${article.title}</p>
						<p class="about">${article.about}</p>
						<a class="read" href="${article.read}" target="_blank">Read article</a>
					</div>
				</div>
			`;
		}
		counter++;
	}

	let div = document.createElement("div");
	container.insertBefore(div, loadMoreButton);
	div.innerHTML = out;	
	div.style.opacity = 0;

	if(document.querySelectorAll(".article").length == articles.length){
		loadMoreButton.style.display = "none";
	}

	fadeIn(div);
}

function fadeIn(div){
	let opacity = 0;
	let interval = setInterval(function(){
		if (opacity <= 1) {
			opacity = opacity + 0.1;
			div.style.opacity = opacity;
		}else{
			clearInterval(interval);
		} 
	}, 30);
}

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