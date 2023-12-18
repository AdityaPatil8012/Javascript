// Events intro;

// there are 3 methods to add a event;

// 1) first method; on the html element itself;

onclick = "console.log('you clicked me')"

// 2) Second method; 

const btn = document.querySelector(".btn-headline");

// console.log(btn);

// btn.onclick = function(){
//   console.log('hello Aditya');
// }

// 3) third method; by adding event listener;

function clickMe(){
  console.log("hello from function");
}

btn.addEventListener("click", clickMe);