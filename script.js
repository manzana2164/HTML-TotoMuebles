window.addEventListener('load', function() {
  const carousel = document.querySelector('.carousel');
  const items = carousel.querySelectorAll('.carousel__item');
  const itemWidth = items[0].offsetWidth;
  const btnPrev = carousel.querySelector('#prevBtn');
  const btnNext = carousel.querySelector('#nextBtn');

  let currentItem = 0;
  const itemsCount = items.length;

  // Función para mover el carrusel hacia el elemento anterior
  function prevItem() {
    currentItem--;
    if (currentItem < 0) {
      currentItem = itemsCount - 1;
    }
    setTransform();
  }

  // Función para mover el carrusel hacia el siguiente elemento
  function nextItem() {
    currentItem++;
    if (currentItem >= itemsCount) {
      currentItem = 0;
    }
    setTransform();
  }

  // Función para establecer la transformación CSS que mueve el carrusel
  function setTransform() {
    items.forEach((item) => {
      item.style.transform = `translateX(-${currentItem * itemWidth}px)`;
    });
  }

  // Agregar eventos de click a los botones anterior y siguiente
  btnPrev.addEventListener('click', prevItem);
  btnNext.addEventListener('click', nextItem);
});