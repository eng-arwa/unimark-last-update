
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
    else {
         window.open('./mobile.html');  
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
    else {
         window.open('./mobile-rtl.html');  
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
    else {
         window.open('./pages/mobile.html');  
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
    else {
         window.open('./pages/mobile-rtl.html');  
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
let closeicon = document.querySelector('.cloes');
closeicon.addEventListener('click', () => {
    document.querySelector('.modalbook').style.display = 'none'
});


// slide arrow change


// start slidshow





// start slidshow







