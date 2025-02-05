

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



const sliderWrapper = document.querySelector('.news-slider-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const slidesPerPage = 3;
let newsData = [];

// Функция для загрузки новостей
async function fetchNews() {
  try {
    const response = await fetch('newsData.json'); // Загружаем JSON файл
    newsData = await response.json();
    renderNews();
    updateSlider();
  } catch (error) {
    console.error('Ошибка при загрузке новостей:', error);
  }
}

// Функция для отрисовки новостей
/*
function renderNews() {
  sliderWrapper.innerHTML = ''; // Очищаем слайдер перед рендерингом
  newsData.forEach((news) => {
    const slide = document.createElement('div');
    slide.className = 'news-slide';
    slide.innerHTML = `
      <h3>${news.title}</h3>
       <img src="${news.image}" alt="${news.title}">
      <p>${news.description}</p>
      <a href="article.html?id=${news.id}" class="read-more">Читать далее</a>
    `;
    sliderWrapper.appendChild(slide);
  });
}

// Обновляем видимый слайд
function updateSlider() {
  const offset = -currentIndex * 100;
  sliderWrapper.style.transform = `translateX(${offset}%)`;
}

// Управление кнопками
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : Math.ceil(newsData.length / slidesPerPage) - 1;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < Math.ceil(newsData.length / slidesPerPage) - 1) ? currentIndex + 1 : 0;
  updateSlider();
});

// Загружаем данные при загрузке страницы
fetchNews();
*/


// accordion
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


/* quote */
/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 250,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#b5dcd5"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#b5dcd5"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#b5dcd5",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 250,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);





