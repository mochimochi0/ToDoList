'use strict'
winidow.onload = function(){
    const add = document.getElementById('list');

    document.getElementById('form').onsubmit = function(event){
        event.preventDefault();


        const item = document.getElementById('form').word.value;

    const li = `<li class="d-flex list-group-item justify-content-between align-items-center mt-2">
    <span>${item}</span>
    <i class="fas fa-trash-restore-alt delete"></i>
    </li>`;

    add.insertAdjacentHTML('afterbegin',li)


    var reset=document.getElementById('input');
    reset.value = '';

    };


// 削除機能

list.addEventListener('click',function(e){
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
})

};
