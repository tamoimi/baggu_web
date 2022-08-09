/* menu */
// const myBtn = document.querySelector('.scroll_header .my')
const myBtn = document.getElementById('my')
const myBtn02 = document.getElementById('my_01')
const myCloseBtn = document.querySelector('.my_page #close_btn ')
const myPage = document.querySelector('.my_page')
const myBg = document.querySelector('.my_bg')

myBtn.addEventListener('click', () =>{
  myPage.style.left = '0'
  myBg.style.width = '100%'
})
myBtn02.addEventListener('click', () =>{
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

/* scroll_menu */
const header = document.querySelector('.scroll_header')

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

/* swiper_promotion */ 
new Swiper('.pro_img .swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000
  },
  navigation: {
    nextEl: ".pro_img .swiper-button-next",
    prevEl: ".pro_img .swiper-button-prev"
  }
});


/* promotion_tap */
const tabBtn = document.querySelectorAll('.list .on')
const tabContents = document.querySelectorAll('.pro_img .swiper')
const tabTxt = document.querySelectorAll('.color li')

for (let i = 0; i < tabBtn.length; i++){
  tabBtn[i].addEventListener('click', ()=>{
      tabBtn.forEach((e)=>{
      e.classList.remove('active');
      tabContents.forEach((e)=>{
      e.classList.remove('show')
      tabTxt.forEach((e)=>{
      e.classList.remove('show_txt')
      })
      });
    });
    tabBtn[i].classList.add('active')
    tabContents[i].classList.add('show')
    tabTxt[i].classList.add('show_txt')
  })
}


/* item_tap */
const itemBtn = document.querySelectorAll('.item_tap li')
const itemContents = document.querySelectorAll('.item_wrap')

for(let i = 0; i < itemBtn.length; i++){
  itemBtn[i].addEventListener('click', ()=>{
    itemBtn.forEach((e)=>{
      e.classList.remove('active_tap');
      itemContents.forEach((e)=>{
      e.classList.remove('item_show')
      });
    });
    itemBtn[i].classList.add('active_tap')
    itemContents[i].classList.add('item_show')

  })
}

/* heart_btn */
const toggleBtn = document.querySelectorAll('.fa-heart')

toggleBtn.forEach(function(btns){
  btns.addEventListener('click', function(){
    btns.classList.toggle('fas')
  })
})


/* scroll_btn */
const topBtn = document.querySelector('.toTop')

topBtn.addEventListener('click',()=>{
  gsap.to(window, 2, {
    scrollTo: 0
  })
})

const bottomBtn = document.querySelector('.toBottom')

bottomBtn.addEventListener('click',()=>{
  gsap.to(window, 2, {
    scrollTo: 8000
  })
})