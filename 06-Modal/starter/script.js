'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// function to open modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// function to close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// loop through all buttons and add event listener
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// close modal when clicking on x
btnCloseModal.addEventListener('click', closeModal);

// close modal when clicking outside of modal
overlay.addEventListener('click', closeModal);

// close modal when pressing escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
