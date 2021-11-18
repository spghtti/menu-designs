const button = document.getElementById('mainMenuButton');
const mainMenu = document.getElementById('mainMenuChildren');
const body = document.getElementsByClassName('body');
button.addEventListener('click', function () {
  if (mainMenu.style.maxHeight == '1000px') {
    mainMenu.style.maxHeight = '0px';
    body[0].style.filter = 'blur(0px)';
  } else {
    mainMenu.style.maxHeight = '1000px';
    body[0].style.filter = 'blur(4px)';
  }
});
