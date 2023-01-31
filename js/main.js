let myNav = document.querySelector('nav');
let menu = document.querySelectorAll('nav .menu-list li a')
let langicon=document.querySelector('.langselect')
let logo2 = document.getElementById('logo');
let logo3 = document.querySelector('#logo');
let search1 = document.querySelector('.search-wrapper .input-holder .search-icon span::before');
let search2 = document.querySelector(' .search-wrapper .input-holder .search-icon span::after')
let search3=document.querySelector(' .search-wrapper .close::before, .search-wrapper .close::after')


window.onscroll = () => {
  
    if (window.scrollY > 400) {
        let logo3=document.querySelector('.menu-mobile #logo')
        myNav.style.backgroundColor = '#1f1f1fc4';
        langicon.style.color='white'
        menu.forEach(e => {
            e.style.color='white'
        })
        logo2.classList.add('active');
        logo3.classList.add('active');
        search1.style.backgroundColor='black'
        
    } 

    else{
        myNav.style.backgroundColor = 'transparent';
        menu.forEach(e => {
            e.style.color='black'
        })
        let logo3=document.querySelector('.menu-mobile #logo')
        langicon.style.color='black'
        logo2.classList.remove('active');
        logo3.classList.remove('active')
    }
};

// setTimeout(() => {
//     let top=document.querySelector('.top i a')
//     console.log('arwa ahmed haider', document.querySelector('.slick-active'));
//     console.log(top)
// }, 2000);
// top.addEventListener('mouseup', () => {
//   setTimeout(() => {
//     let currentslide = document.querySelector('.slick-center').id;
//     console.log(currentslide)
  
//     if (currentslide == 'slick-slide00') {
        
//         console.log('yes', hrefslid)
    
        
        
//     }
//         else if (currentslide == 'slick-slide01') { }
//         else if (currentslide == 'slick-slide02') { }
//         else if (currentslide == 'slick-slide03') { }
//         else if(currentslide=='slick-slide04'){}
//   }, 2000);
    
// })


// open modal

// slick-slide slick-current slick-active slick-center


function servicesEn(){
    // let top = document.querySelector('.top a');
    let currentslide = document.querySelector('.slick-center').id;
    // console.log(document.querySelectorAll('.slick-slide'));
   
    if (currentslide == 'slick-slide00') {
        window.open('./webdevelopment.html')
    }
   
    else if (currentslide == 'slick-slide01') { 
        window.open('./digital.html')
   }
    else if (currentslide == 'slick-slide02') { 
        window.open('./services.html')
    }
    else if (currentslide == 'slick-slide03') {
        window.open('./design.html')
     }
    else if (currentslide == 'slick-slide04') {
        window.open('./mobile.html');
        
    }
    else if (currentslide == 'slick-slide05') {
        window.open('./Written-content.html');
        
    }
    else if (currentslide == 'slick-slide06') {
        window.open('./create-brand.html');
        
    }
    else if (currentslide == 'slick-slide07') {
        window.open('./Advert.html');
        
    }
    else {
         window.open('./order-gallery.html');  
    }
  
   
}
function servicesar(){
    // let top = document.querySelector('.top a');
    let currentslide = document.querySelector('.slick-center').id;
    // console.log(document.querySelectorAll('.slick-slide'));
   
    if (currentslide == 'slick-slide00') {
        window.open('./webdevelopment-rtl.html')
    }
   
    else if (currentslide == 'slick-slide01') { 
        window.open('./digital-rtl.html')
   }
    else if (currentslide == 'slick-slide02') { 
        window.open('./services-rtl.html')
    }
    else if (currentslide == 'slick-slide03') {
        window.open('./design-rtl.html')
     }
    else if (currentslide == 'slick-slide04') {
        window.open('./mobile-rtl.html');
        
    }
  
    else if (currentslide == 'slick-slide05') {
        window.open('./Written-content.html');
        
    }
    else if (currentslide == 'slick-slide06') {
        window.open('./create-brand.html');
        
    }
    else if (currentslide == 'slick-slide07') {
        window.open('./Advert.html');
        
    }
    else {
         window.open('./order-gallery.html');  
    }
  
   
}
function servicesindexEn(){
    // let top = document.querySelector('.top a');
    let currentslide = document.querySelector('.slick-center').id;
    // console.log(document.querySelectorAll('.slick-slide'));
   
    if (currentslide == 'slick-slide00') {
        window.open('./pages/webdevelopment.html')
    }
   
    else if (currentslide == 'slick-slide01') { 
        window.open('./pages/digital.html')
   }
    else if (currentslide == 'slick-slide02') { 
        window.open('./pages/services.html')
    }
    else if (currentslide == 'slick-slide03') {
        window.open('./pages/design.html')
     }
    else if (currentslide == 'slick-slide04') {
        window.open('./pages/mobile.html');
        
    }
    else if (currentslide == 'slick-slide05') {
        window.open('./pages/Written-content.html');
        
    }
    else if (currentslide == 'slick-slide06') {
        window.open('./pages/create-brand.html');
        
    }
    else if (currentslide == 'slick-slide07') {
        window.open('./pages/Advert.html');
        
    }
    else {
         window.open('./pages/order-gallery.html');  
    }
  
   
}
function servicesindexEer(){
    // let top = document.querySelector('.top a');
    let currentslide = document.querySelector('.slick-center').id;
    // console.log(document.querySelectorAll('.slick-slide'));
   
    if (currentslide == 'slick-slide00') {
        window.open('./pages/webdevelopment-rtl.html')
    }
   
    else if (currentslide == 'slick-slide01') { 
        window.open('./pages/digital-rtl.html')
   }
    else if (currentslide == 'slick-slide02') { 
        window.open('./pages/services-rtl.html')
    }
    else if (currentslide == 'slick-slide03') {
        window.open('./pages/design-rtl.html')
     }
    else if (currentslide == 'slick-slide04') {
        window.open('./pages/mobile-rtl.html');
        
    }
    else if (currentslide == 'slick-slide05') {
        window.open('./pages/Written-content.html');
        
    }
    else if (currentslide == 'slick-slide06') {
        window.open('./pages/create-brand.html');
        
    }
    else if (currentslide == 'slick-slide07') {
        window.open('./pages/Advert.html');
        
    }
    else {
         window.open('./pages/order-gallery.html');  
    }
  
   
}

let menulang = document.querySelector('.langselect');
let selectlang = document.querySelector('.langselect ul');
let select = document.querySelector('.langselect ul li');

menulang.addEventListener('click', () => {
   
    selectlang.style.opacity = 1;
    selectlang.style.display = 'block ';

 
   

});
menulang.addEventListener('mouseleave', () => {
    selectlang.style.opacity = 0;
    selectlang.style.display = 'none ';
})
function model(){
    document.querySelector('.modalbook').style.display = 'block';
}
let closeicon = document.querySelectorAll('.cloes');
closeicon.forEach( (e) => {
    e.addEventListener('click', () => {
        document.querySelector('.modalbook').style.display = 'none'
        document.querySelector('.modalcontact').style.display = 'none'
    });
})
function model2(){
    document.querySelector('.modalcontact').style.display = 'block';
}



// slide arrow change


// start slidshow





// start slidshow





// start nav scrolling


