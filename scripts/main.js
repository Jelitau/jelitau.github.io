let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hiiii to my Play Ground, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name. \nYour Name will be stored locally on your Device.', 'Username');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hiiii to my Play Ground, ' + myName;
}