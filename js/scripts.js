// function displayArray() {
// moved to hadleFAvoriteThings function
// }
function handleFavoriteThings(event) {
  event.preventDefault();
  let input1 = document.querySelector("input#thing1").value;
  let input2 = document.querySelector("input#thing2").value;
  let input3 = document.querySelector("input#thing3").value;
  let input4 = document.querySelector("input#thing4").value;
console.log(input1 + " input 1");
  const thingsArray = [input1, input2, input3, input4];
  console.log(thingsArray);
  let newThingsArray = [];
  newThingsArray.push(thingsArray [1]);
  newThingsArray.push(thingsArray [0]);
  newThingsArray.push(thingsArray [2]);
  // newThingsArray.push
  console.log(newThingsArray);  
  const ul = document.createElement("ul");
  const body = document.querySelector("body");
  const firstLi = document.createElement("li");
  const secondLi = document.createElement("li");
  const thirdLi = document.createElement("li");

  body.append(ul);
  ul.append(firstLi, secondLi, thirdLi);
  firstLi.append(newThingsArray [0]);
  secondLi.append(newThingsArray [1]);
  thirdLi.append(newThingsArray [2]);
  
  // displayArray(); 
}




window.addEventListener("load", function() {
  const form = document.getElementById("Favorite-Things");
  form.addEventListener("submit", handleFavoriteThings); 
  
});

