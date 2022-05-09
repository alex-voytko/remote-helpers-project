const feedbackListRef = document.querySelector('.feedback-list');

export default feedbackListRef.addEventListener('click', loadFullText);

function loadFullText(e) {
  if (!e.target.classList.contains('js-read-more')) return;

  document.querySelector(
    `span[data-id="${e.target.dataset.id}"]`,
  ).style.display = 'inline';
  e.target.style.display = 'none';
}
