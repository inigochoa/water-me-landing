/**
 * Scroll to section on button click
 */
document.getElementById('btn-call-to-action').addEventListener('click', () => {
  const top = document.getElementById('call-to-action').offsetTop

  window.scroll({
    behavior: 'smooth',
    left: 0,
    top,
  });
});

/**
 * Add a shadow to the header on page scroll
 */
window.onscroll = () => {
  const header = document.getElementById('header')

  switch (window.scrollY) {
    case 0:
      header.classList.remove('shadow-md');
      break;
    default:
      header.classList.add('shadow-md');
  }
};
