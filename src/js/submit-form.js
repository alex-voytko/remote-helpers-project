import { addUserData } from './api.js';
import openThankYouModal from './thank-you-modal.js';

const formRef = document.querySelector('.form');

export default formRef.addEventListener('submit', formZipSubmit);

function formZipSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  addUserData(formData)
    .then(data => {
      console.log(data);
      setTimeout(openThankYouModal, 2000);
    })
    .catch(error => console.log(error.message));

  formRef.reset();
}
