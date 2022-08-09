/* my_page menu */ 
const myBtn = document.querySelector('.header .my')
const myCloseBtn = document.querySelector('.my_page #close_btn ')
const myPage = document.querySelector('.my_page')
const myBg = document.querySelector('.my_bg')

myBtn.addEventListener('click', () =>{
  myPage.style.left = '0'
  myBg.style.width = '100%'
})
myCloseBtn.addEventListener('click', () =>{
  myPage.style.left = '-540px'
  myBg.style.width = '0'
})
myBg.addEventListener('click', () =>{
  myPage.style.left = '-540px'
  myBg.style.width = '0'
})

/* menu_tap */ 
const myPageTap = document.getElementById('myPage')
const myCommTap = document.getElementById('community')
const tap01 = document.querySelector('.tap_01')
const tap02 = document.querySelector('.tap_02')

myPageTap.addEventListener('click', function onClick() {
  myPageTap.style.backgroundColor = '#007157';
  myPageTap.style.color = 'white';
  myCommTap.style.backgroundColor = 'transparent';
  myCommTap.style.color = 'black';
  tap01.style.display = 'block'
  tap02.style.display = 'none'
});
myCommTap.addEventListener('click', function onClick() {
  myCommTap.style.backgroundColor = '#007157';
  myCommTap.style.color = 'white';
  myPageTap.style.backgroundColor = 'transparent';
  myPageTap.style.color = 'black';
  tap01.style.display = 'none';
  tap02.style.display = 'block'
});





/* swiper_detail */ 
new Swiper('.detail .swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".detail .swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".detail .swiper-button-next",
    prevEl: ".detail .swiper-button-prev"
  }
});


/* swiper_item */ 
new Swiper('.rel_item .swiper', {
  slidesPerView: 3,
  spaceBetween: 60,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: ".info01 .swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".info01 .swiper-button-next",
    prevEl: ".info01 .swiper-button-prev"
  }
});

/* scroll_wrap */ 
const header = document.querySelector('.scroll_wrap')

window.addEventListener('scroll', ()=> {
  if(window.scrollY>200){
    gsap.to(header, 0.3, {
      opacity: 1,
      display: 'block'
    })
  }else {
    gsap.to(header, 0.3, {
      opacity: 0,
      display: 'none'
    })
  }
})


/* footer_tap */ 
const li_01 = document.querySelector('.li_01')
const li_02 = document.querySelector('.li_02')
const li_03 = document.querySelector('.li_03')
const li_04 = document.querySelector('.li_04')

window.addEventListener('scroll', function() {         
    if (window.scrollY >= 900) {
      li_01.classList.add('clicked')
    } else {
      li_01.classList.remove('clicked')
    }
});
window.addEventListener('scroll', function() {         
    if (window.scrollY >= 8700) {
      li_02.classList.add('clicked')
      li_01.classList.remove('clicked')
    } else {
      li_02.classList.remove('clicked')
    }
});
window.addEventListener('scroll', function() {         
    if (window.scrollY >= 9400) {
      li_03.classList.add('clicked')
      li_02.classList.remove('clicked')
    } else {
      li_03.classList.remove('clicked')
    }
});
window.addEventListener('scroll', function() {         
    if (window.scrollY >= 10000) {
      li_04.classList.add('clicked')
      li_03.classList.remove('clicked')
    } else {
      li_04.classList.remove('clicked')
    }
});

li_01.addEventListener('click',()=>{
  gsap.to(window, 0.3, {
    scrollTo: 900,
  })
})

li_02.addEventListener('click',()=>{
  gsap.to(window, 0.3, {
    scrollTo: 9000
  })
})

li_03.addEventListener('click',()=>{
  gsap.to(window, 0.3, { 
    scrollTo: 9900
  })
})

li_04.addEventListener('click',()=>{
  gsap.to(window, 0.3, {
    scrollTo: 10600
  })
})
/* footer_tap */ 



/* heart_icon */
const icon = document.getElementById('icon') 
const colored = document.getElementById('colored') 

icon.addEventListener('click', function(){
  colored.style.display ='block'
  icon.style.display ='none'
})
colored.addEventListener('click', function(){
  icon.style.display ='block'
  colored.style.display ='none'
})


/* price_count */
const mius = document.querySelector('.mius')
const number = document.querySelector('.number')
const plus = document.querySelector('.plus')
const total = document.querySelector('.total_price .total')

let count = 0 
number.innerText = 0

let product_price = 15000

plus.addEventListener('click', function(){
  count=count+1
  number.innerText = count;
  total.innerText = count*product_price
})
mius.addEventListener('click', function(){
  if(count>0){
    count=count-1
    number.innerText = count;
    total.innerText = count*product_price
  }
})



/* btn */
const topBtn = document.querySelector('.toTop')

topBtn.addEventListener('click',()=>{
  gsap.to(window, 2, {
    scrollTo: 0
  })
})

const bottomBtn = document.querySelector('.toBottom')

bottomBtn.addEventListener('click',()=>{
  gsap.to(window, 1, {
    scrollTo: 12000
  })
})

