/* menu */
const myBtn = document.getElementById('my')
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


/* best_item_swiper */ 
new Swiper('.best_item .swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: ".best_item .swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".best_item .swiper-button-next",
    prevEl: ".best_item .swiper-button-prev"
  }
});


/* cart */ 
let productwrap = document.querySelector('.product_wrap')
let filterbox = document.querySelector('.filterbox')
let sortreset = document.querySelector('.sortreset')
let descending = document.querySelector('.descending')
let ascending = document.querySelector('.ascending')

/* cart ?????? ?????? ???????????? ?????? */
let cartList=[];


/* Product ????????? ?????? (Product ?????? base) */
class Product{
  constructor(id, name, price, img, hover, itemInCart){
    this.id = id
    this.name = name
    this.price = price
    this.img = img
    this.hover = hover
    this.itemInCart = itemInCart
  }
  output(){
    return `
    <div class='product' id='${this.id}'>
    <a href="../detail_page/detail.html">
      <div class='imgwrap' id='cart-img' name=''>
      <img src='${this.img}' alt='' class='stay_img'>
      <img src='${this.hover}' alt='' class='hover_img'>
      </div>
      </a>
      <div class='text_wrap'>
        <strong>${this.name}</strong>
        <p>${this.price}???</p>
        <i class='xi-cart' id='add-to-cart'></i>
      </div>
    </div>`
  }
}

const products = []
products.push(new Product(0, '??????????????? ??????????????? ??????', 1000, './img/standard_img01.jpg', './img/standard_img01-1.jpg', false))
products.push(new Product(1, '????????? ??????', 2000, './img/standard_img02.jpg', './img/standard_img02-1.jpg', false))
products.push(new Product(2, '?????? ??????', 5000, './img/standard_img03.jpg', './img/standard_img03-1.jpg', false))
products.push(new Product(3, '????????? ??????', 6000, './img/standard_img04.jpg', './img/standard_img04-1.jpg', false))
products.push(new Product(4, '?????? ???????????? ?????????', 7000, './img/standard_img05.jpg', './img/standard_img05-1.jpg', false))
products.push(new Product(5, '????????? ????????? ??????', 8000, './img/standard_img06.jpg', './img/standard_img06-1.jpg', false))
products.push(new Product(6, '?????? ??????', 3000, './img/standard_img07.jpg', './img/standard_img07-1.jpg', false))
products.push(new Product(7, '????????? ???????????? ??????', 4000, './img/standard_img08.jpg', './img/standard_img08-1.jpg', false))

products.push(new Product(8, '????????? ???????????? ??????', 1000, './img/standard_img09.jpg', './img/standard_img09-1.jpg', false))
products.push(new Product(9, '??????????????? ??????????????? ??????', 2000, './img/standard_img10.jpg', './img/standard_img10-1.jpg', false))
products.push(new Product(10, '?????? ???????????? ?????????', 5000, './img/standard_img11.jpg', './img/standard_img11-1.jpg', false))
products.push(new Product(11, '????????? ??????', 6000, './img/standard_img12.jpg', './img/standard_img12-1.jpg', false))
products.push(new Product(12, '?????? ??????', 7000, './img/standard_img13.jpg', './img/standard_img13-1.jpg', false))
products.push(new Product(13, '?????? ??????', 8000, './img/standard_img14.jpg', './img/standard_img14-1.jpg', false))
products.push(new Product(14, '????????? ????????? ??????', 3000, './img/standard_img15.jpg', './img/standard_img15-1.jpg', false))
products.push(new Product(15, '????????? ???????????? ??????', 4000, './img/standard_img16.jpg', './img/standard_img16-1.jpg', false))

products.push(new Product(16, '????????? ????????? ??????', 1000, './img/standard_img17.jpg', './img/standard_img17-1.jpg', false))
products.push(new Product(17, '????????? ???????????? ??????', 2000, './img/standard_img18.jpg', './img/standard_img18-1.jpg', false))
products.push(new Product(18, '?????? ??????', 5000, './img/standard_img19.jpg', './img/standard_img19-1.jpg', false))
products.push(new Product(19, '?????? ??????', 6000, './img/standard_img20.jpg', './img/standard_img20-1.jpg', false))
products.push(new Product(20, '????????? ???????????? ??????', 7000, './img/standard_img21.jpg', './img/standard_img21-1.jpg', false))
products.push(new Product(21, '????????? ??????', 8000, './img/standard_img22.jpg', './img/standard_img22-1.jpg', false))
products.push(new Product(22, '??????????????? ??????????????? ??????', 3000, './img/standard_img23.jpg', './img/standard_img23-1.jpg', false))
products.push(new Product(23, '?????? ???????????? ?????????', 4000, './img/standard_img24.jpg', './img/standard_img24-1.jpg', false))

products.push(new Product(24, '?????? ??????', 1000, './img/standard_img25.jpg', './img/standard_img25-1.jpg', false))
products.push(new Product(25, '????????? ???????????? ??????', 2000, './img/standard_img26.jpg', './img/standard_img26-1.jpg', false))
products.push(new Product(26, '????????? ????????? ??????', 5000, './img/standard_img27.jpg', './img/standard_img27-1.jpg', false))
products.push(new Product(27, '?????? ???????????? ?????????', 6000, './img/standard_img28.jpg', './img/standard_img28-1.jpg', false))
products.push(new Product(28, '????????? ???????????? ??????', 7000, './img/standard_img29.jpg', './img/standard_img29-1.jpg', false))
products.push(new Product(29, '??????????????? ??????????????? ??????', 8000, './img/standard_img30.jpg', './img/standard_img30-1.jpg', false))
products.push(new Product(30, '????????? ??????', 3000, './img/standard_img31.jpg', './img/standard_img31-1.jpg', false))
products.push(new Product(31, '?????? ??????', 4000, './img/standard_img32.jpg', './img/standard_img32-1.jpg', false))



/* ?????? ?????? ??? ?????? (??????????????????) =map ??????*/
products.forEach((product)=>{
  productwrap.insertAdjacentHTML('beforeend', product.output());
})


/* filter */
// ????????????
function ProductSortUp() {
  while (productwrap.hasChildNodes()) {
    productwrap.removeChild(productwrap.childNodes[0]);
  }
  const NewProducts = [...products];
  NewProducts.sort(function (a, b) {
    return b.price < a.price ? 1:-1;
  });
  NewProducts.forEach((product)=>{
    productwrap.insertAdjacentHTML('beforeend', product.output());
  })
}

// ????????????
function ProductSortDown() {
  while (productwrap.hasChildNodes()) {
    productwrap.removeChild(productwrap.firstChild);
  }
  const NewProducts = [...products];
  NewProducts.sort(function (a, b) {
    return a.price < b.price ? 1:-1;
  });
  NewProducts.forEach((product)=>{
    productwrap.insertAdjacentHTML('beforeend', product.output());
  })
}

// ?????? ????????? ????????????
function ProductBasic() {
  while (productwrap.hasChildNodes()) {
    productwrap.removeChild(productwrap.firstChild);
  }
  products.forEach((product)=>{
    productwrap.insertAdjacentHTML('beforeend', product.output());
  })
}

// ???????????? & ??????
filterbox.addEventListener('click', (e)=>{
  if (e.target == descending) {
    ProductSortUp();
  } else if (e.target == ascending) {
    ProductSortDown();
  } else if (e.target == sortreset) {
    ProductBasic();
  } else {
    return;
  }
});


function removeFromCart(itemId){
  products[itemId].itemInCart = false
  cartList = cartList.filter((list)=>list.id!=itemId);
  addItem()
}

/* ??????????????? ?????? (class ?????? ??? ??????) */


/* cartBtn toggle */
let cartBtn = document.querySelector('.cart_btn')
let cartBox = document.querySelector('.cart_chart')

let isOpen = false

cartBtn.addEventListener('click', function(){
  if(isOpen == false){
    cartBox.style.left = '0'
    isOpen = true
  } else {
    cartBox.style.left = '-100%'
    isOpen = false
  }
})



/* ?????? ??????????????? ???????????? */
let addtocarts = document.querySelectorAll('#add-to-cart')
addtocarts.forEach((e) => {e.addEventListener('click',()=> addToCart(e.parentNode.parentNode.id))});

function addToCart(id) {
  if(!products[id].itemInCart){
      cartList=[...cartList,products[id]];
      addItem()
      alert('???????????? ?????? ???????????????.')
  }
  else{
      alert('?????? ????????? ???????????????.')
  }
  products[id].itemInCart= true
}


/** ?????? ??????????????? ?????? */
let totalPrice;
let totalItems;

function addItem(){
  totalPrice = 0;
  totalItems = 0;
  let clrNode=document.getElementById('item-body');
      clrNode.innerHTML= '';
      console.log(clrNode.childNodes)
      cartList.map((cart)=>
      {
          let cartCont = document.getElementById('item-body');
          totalPrice = totalPrice + cart.price;
          totalItems = totalItems + 1;

          let tempCart = document.createElement('div')
          tempCart.setAttribute('class','cart-list');
          tempCart.setAttribute('id',cart.id);

          let listImg = document.createElement('img');
          listImg.setAttribute('id','list-img');
          listImg.src = cart.img
          tempCart.appendChild(listImg)

          let listName = document.createElement('h3');
          listName.setAttribute('class','list-name');
          listName.innerHTML = cart.name;
          tempCart.appendChild(listName)

          let listprice = document.createElement('h3');
          listprice.setAttribute('class','price');
          listprice.innerHTML = cart.price+'???';
          tempCart.appendChild(listprice);

          let listQuantity = document.createElement('h3');
          listQuantity.setAttribute('class','quantity');
          listQuantity.innerHTML = '1';
          tempCart.appendChild(listQuantity);

          let listTrash = document.createElement('i');
          listTrash.setAttribute('class','xi-trash');
          listTrash.setAttribute('id','remove');
          tempCart.appendChild(listTrash);
          cartCont.appendChild(tempCart)
          
      })
      document.getElementById('total-amount').innerHTML = '??? ?????? ' + totalPrice + '???' ;
      document.getElementById('total-items').innerHTML = '??? ?????? : ' + totalItems;
}


/* ?????? ??????????????? */
document.addEventListener('click',function(e){
  if(e.target.id=='remove'){
      var itemId = e.target.parentNode.id
      removeFromCart(itemId)
  }
})


/* ????????? */
let showmore = document.querySelector('.showmore')
let hide = document.querySelector('.hide')

showmore.addEventListener('click', function(){
  productwrap.style.height = '100%'
  showmore.style.display = 'none'
  hide.style.display = 'block'
})

hide.addEventListener('click', function(){
  productwrap.style.height = '1800px'
  showmore.style.display = 'block'
  hide.style.display = 'none'
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
    scrollTo: 7171
  })
})
