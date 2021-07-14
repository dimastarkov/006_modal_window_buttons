'use strict';
// собрать все элементы в переменных: .modal, overlay,, close modal, open-modal 
const modalBtn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');


// сделать луп по длине переменной с кнопками, который (луп) будет:
//     запускать eventListener для удаления класса hidden с .modal и .overlay

for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
};
//

// добавлять класс .hidden при нажатии на кнопку closeModal (х) и overlay 
// closeModalBtn.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });


// так как кнопок получается 2 с одинаковым кодом то нужно сделать функцию closeModal(); которая будет добавлять классы .hidden

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);



//закрывать .modal при нажатии по клавише Esc

document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    };
});