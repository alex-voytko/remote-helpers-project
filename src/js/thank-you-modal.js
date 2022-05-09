const refs = {
  backdrop: document.querySelector('.backdrop'),
  modalBtn: document.querySelector('.modal-btn'),
};

function openThankYouModal() {
  refs.backdrop.classList.add('is-visible');
  refs.modalBtn.addEventListener('click', closeThankYouModal);
  refs.backdrop.addEventListener('click', onBackDropClick);
}

function closeThankYouModal() {
  refs.backdrop.classList.remove('is-visible');
}

function onBackDropClick(e) {
  if (e.target === e.currentTarget) closeThankYouModal();
}

export default openThankYouModal;
