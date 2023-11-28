/**
 * intro to events
 * click
 * We can use three methods to add an event.
 * 
 * 1) use the "onclick" in the html;
 * 2) select the element in the javascript and use it;
 */

// 2nd method;

const btn = document.querySelector(".btn-headline");
console.log(btn);

// btn.onclick = function(){
//     console.log('you clicked me');
// }

// 3rd method; addEventListener;

// function clickme(){
//   console.log('click me!');
// }

// btn.addEventListener("click", clickme);

btn.addEventListener("click", ()=>{
  console.log('using arrow function');
})


