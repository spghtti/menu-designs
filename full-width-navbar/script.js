const dropdowns = document.querySelectorAll('.dropdown');
const showDropdowns = function (element) {
  dropdowns[element].style.maxHeight = '400px';
  dropdowns[element].style.opacity = '1';
};

const hideDropdowns = function () {
  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].style.maxHeight = '0';
    dropdowns[i].style.opacity = '0';
  }
};
hideDropdowns();

document.querySelectorAll('.tab').forEach((item) => {
  item.addEventListener('mouseover', (event) => {
    hideDropdowns();
    showDropdowns(item.id);
  });
});

document.querySelectorAll('.dropdown').forEach((item) => {
  item.addEventListener('mouseout', function () {
    hideDropdowns();
  });
});

const body = document.getElementById('body');
body.addEventListener('click', function () {
  hideDropdowns();
});
