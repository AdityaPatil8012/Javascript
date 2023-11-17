// text context and innertext;

const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading);
console.log(mainHeading.textContent); // this will give us everything;
console.log(mainHeading.innerText); // This will only give us the displayed text on the page

mainHeading.textContent = 'hello Aditya from textcontext';
console.log(mainHeading.textContent);



