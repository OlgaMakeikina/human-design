const back = document.querySelector('#back');
const next = document.querySelector('#next');
const pictures = document.querySelector('#pictures');
const photos = ["hd-1.jpg", "hd-2.jpg", "hd-3.jpg", "hd-4.jpg", "hd-5.jpg", "hd-6.jpg", "hd-7.jpg"];
let i = 0;

// Функция для смены картинки с анимацией
const changePicture = (direction = 1) => {
  pictures.classList.add('fade-out'); // Запуск анимации исчезновения
  setTimeout(() => {
    i += direction;
    if (i > photos.length - 1) {
      i = 0;
    } else if (i < 0) {
      i = photos.length - 1;
    }
    pictures.src = photos[i];
    pictures.classList.remove('fade-out'); // Возврат прозрачности
  }, 500); // Задержка для завершения анимации
};

// Смена по кнопке "вперед"
next.addEventListener('click', () => changePicture(1));

// Смена по кнопке "назад"
back.addEventListener('click', () => changePicture(-1));

// Автоматическая смена каждые 5 секунд
setInterval(() => changePicture(1), 5000);
