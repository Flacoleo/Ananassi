let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo_dos.png') {
      myImage.setAttribute('src','Images/firefox2.png');
    } else {
      myImage.setAttribute('src','Images/logo_dos.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Escriba su nombre.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('Irene', myName);
    myHeading.innerHTML = 'Ananassi Virtual Solutions, ' + myName;
  }
}

if(!localStorage.getItem('Irene')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Ananassi Virtual Solutions, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
