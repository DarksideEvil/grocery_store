let searchForm = document.querySelector('.search_form');

document.querySelector('#search_btn').onclick = () => 
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active')
}



let shoppingCart = document.querySelector('.shopping_cart');

document.querySelector('#cart_btn').onclick = () => 
{
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active')
}

let loginForm = document.querySelector('.login_form');

document.querySelector('#login_btn').onclick = () => 
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.toggle('active');
    navbar.classList.remove('active')
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu_btn').onclick = () => 
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.toggle('active')
}

window.onscroll = () => 
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active')
}





var swiper = new Swiper(".product_slider", {
    loop: true,
    spaceBetween: 10,
    
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });



  var swiper = new Swiper(".review_slider", {
    loop: true,
    spaceBetween: 10,
    
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });