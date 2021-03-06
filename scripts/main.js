let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://github.com/Flacoleo/Ananassi/blob/main/Images/logo_dos.png?raw=true') {
      myImage.setAttribute('src','https://github.com/Flacoleo/Ananassi/blob/main/Images/firefox2.png?raw=true');
    } else {
      myImage.setAttribute('src','https://github.com/Flacoleo/Ananassi/blob/main/Images/logo_dos.png?raw=true');
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
