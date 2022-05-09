import logos from './swiper-templates.js';

const desktopLogosRef = document.querySelector('#js-swiper');
const desktopViewport = 1200;
let desktopMode = false;

document.addEventListener('DOMContentLoaded', onLoadViewportCheck);
window.addEventListener('resize', _.throttle(onViewportChange, 500), false);

function onLoadViewportCheck(e) {
  if (e.target.body.clientWidth >= desktopViewport) {
    desktopMode = true;
    desktopLogosRef.insertAdjacentHTML('beforeend', logos);
    return;
  }
  desktopLogosRef.innerHTML = '';
}

function onViewportChange(e) {
  if (!desktopMode) {
    if (e.target.innerWidth >= desktopViewport) {
      desktopMode = true;
      desktopLogosRef.insertAdjacentHTML('beforeend', logos);
    }
  }
  if (desktopMode) {
    if (e.target.innerWidth < desktopViewport) {
      desktopMode = false;
      desktopLogosRef.innerHTML = '';
    }
  }
}
