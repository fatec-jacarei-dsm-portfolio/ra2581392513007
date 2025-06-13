document.addEventListener('DOMContentLoaded', function() {
  const elementsToAnimate = document.querySelectorAll('body *');

  function handleScroll() {
    elementsToAnimate.forEach((element) => {
      const boundingBox = element.getBoundingClientRect();
      if (boundingBox.top <= window.innerHeight * 0.75 && !element.classList.contains('fade-in')) {
        element.classList.add('fade-in');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Executa a verificação inicial ao carregar a página
});
