"use strict";

let menuItems = document.querySelector('#menuitems'),
    menuIcon = document.querySelector('#menuicon');


    menuIcon.addEventListener('click', function () {
        menuItems.classList.toggle('hidden');
        menuItems.classList.add('mainshow');
      }); 

