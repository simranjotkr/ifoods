// Alert amount after clicking Donate Here!

function alertTask(){
  let newAmount = document.getElementById("amount").value;
  alert(`Thank you for donating \$${newAmount} !`);
};

// Supporters list of donaters - ideally pulled from a Database

let btnGet = document.querySelector('#show');
let myTable = document.querySelector('#table');


let supporters = [
    { name: 'Humber College Foundation', amount: '$200'},
    { name: 'Nithya Thayananthan', amount: '$100'},
    { name: 'Popeyes', amount: '$500'},
    { name: 'Tim Hortons', amount: '$200'},
    { name: 'Chick-Fil-A', amount: '$200'},
    { name: 'Mcdonalds', amount: '$200'},
    { name: 'Pizzaiolo', amount: '$200'},
];

let headers = ['Name', 'Amount'];


function tgl(){
  let t = document.getElementById('myTable');
  if( t.style.display === "none" ){
    t.style.display = "block";
    let table1 = document.createElement('table');
  let headerRow = document.createElement('tr');

  headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);

  });

  table1.appendChild(headerRow);

  supporters.forEach(sup => {
    let row = document.createElement('tr');

    Object.values(sup).forEach(text => {
      let cell = document.createElement('td');
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    })

    table1.appendChild(row);
    console.log(table1);

  });
  t.append(table1);
  }
  else { t.style.display = "none"};
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
