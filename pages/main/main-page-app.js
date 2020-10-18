let burger = document.getElementsByClassName('burger')

function burgerMenu(selector) {
  let menu = document.getElementsByClassName('burger')[0];
  let overlay = document.getElementsByClassName('overlay')[0];
  let overlayOuter = document.getElementsByClassName('overley-burger-outer')[0]
  let button = document.getElementsByClassName('burger-menu-btn')[0];
  let links = document.querySelectorAll('.burger-links');
  let logoTitle = document.getElementsByClassName('logo-title')[0];
  console.log(overlay)
  
  function switchMenu(){
    if(menu.classList.contains('burger-active')){
      menu.classList.add('burger-dissactive');
      setTimeout(function(){
        menu.classList.remove('burger-dissactive');
        menu.classList.remove('burger-active');
      },1000);
    }else{
      menu.classList.add('burger-active');
      overlay.classList.add('overlay-active');
      menu.classList.remove('burger-dissactive');
      overlayOuter.classList.add('overley-burger-outer-active');
      logoTitle.classList.add('logo-title-active');
    }
  }

  button.addEventListener('click', (e) => {
    e.preventDefault();
    switchMenu();
  });

  links[3].addEventListener('click', () => switchMenu());
  links[2].addEventListener('click', () => switchMenu());
  links[0].addEventListener('click', () => switchMenu());
  overlay.addEventListener('click', () => switchMenu());
  overlayOuter.addEventListener('click', () => switchMenu());
  logoTitle.addEventListener('click', () => switchMenu());
  
}

burgerMenu(burger);