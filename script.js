const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu-link');

// Открытие/закрытие меню
burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});