'use strict';

import { InfoCookies } from "./modules/InfoCookies.js";

const infCookie = new InfoCookies;

const closeLink = document.querySelector('.cookies__close a');

closeLink.addEventListener('click', (e) => {

    e.preventDefault();

    infCookie.setCookie();
});


const hamburger = document.querySelector('#menu');

const nav = document.querySelector('nav');

const link = document.querySelectorAll('.nav__item');

const body = document.querySelector('body');


function closeAll(){
    
    nav.classList.remove('display-block');
    
    hamburger.classList.remove('display-none');
}

hamburger.addEventListener('click', (e)=>{
    
    e.stopPropagation(); 
   
    
    nav.classList.add('display-block');

    hamburger.classList.add('display-none');

});

body.addEventListener('click', closeAll);




