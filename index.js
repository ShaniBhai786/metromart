
var closebtn = document.getElementById("close");
const togglebtn = document.querySelector(".bars");
const toggleIcon = document.querySelector(".bars i");
const dropdown = document.querySelector(".navlinks");
var searchIcon = document.getElementById("searchIcon");
var searchBar = document.querySelector(".search");
var search = document.getElementById("search"); 
var searchBtn = document.getElementById("btn");

// searchIcon.onclick = function () {
//     searchBar.classList.toggle("show");
// };
searchIcon.addEventListener("click", function(){
searchBar.style.display = "none" ? "inline-block" : "none";
})

togglebtn.onclick = function () {
  dropdown.classList.toggle("open");
};

closebtn.onclick = function () {
  dropdown.classList.toggle("open");
};

var closebtn1 = document.getElementById("remove");
const togglebtn1 = document.getElementById("shoppinG");
const dropdown1 = document.querySelector(".cart");

togglebtn1.onclick = function () {
  dropdown1.classList.toggle("open");
};

closebtn1.onclick = function () {
  dropdown1.classList.toggle("open");
};

var welcome = document.querySelector(".welcome");
var expl = document.querySelector(".explore");
var explore = document.querySelector(".explore h1");
var welRemove = document.getElementById("wel-remove");

explore.onclick = function () {
  welcome.classList.toggle("close");
};
welRemove.onclick = function () {
  welcome.classList.toggle("close");
};

//         var list = document.querySelector('.images');
//         let product = [
//           {
//             id: 1,
//             name: 'PRODUCT NAME 1',
//             image: '1.PNG',
//             price: 120000
//         }
//         ];
//         var inp = document.createAttribute("input");
//         inp.setAttribute("type","text")
//         let listCards  = [];
//             function initApp(){
//             products.forEach((value, key) =>{
//             let newDiv = document.createElement('div');
//             newDiv.classList.add('item');
//             newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>
//             `;
//         list.appendChild(newDiv);
//     })
// }
// initApp();




