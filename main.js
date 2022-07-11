/* btn */
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