/* Burger*/
let burger = document.getElementsByClassName('burger')

function burgerMenu(selector) {
  let menu = document.getElementsByClassName('burger')[0];
  let overlay = document.getElementsByClassName('overlay')[0];
  let overlayOuter = document.getElementsByClassName('overley-burger-outer')[0]
  let button = document.getElementsByClassName('burger-menu-btn')[0];
  let links = document.querySelectorAll('.burger-links');
  let logoTitle = document.getElementsByClassName('logo-title')[0];
  
  function switchMenu(){
    if(menu.classList.contains('burger-active')){
      menu.classList.add('burger-dissactive');
      setTimeout(function(){
        menu.classList.remove('burger-dissactive');
        menu.classList.remove('burger-active');
        overlayOuter.classList.remove('overley-burger-outer-active');
        overlay.classList.remove('overlay-active');
        logoTitle.classList.remove('logo-title-active');
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

/* Slider*/

let petsInfo = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];

let pets = document.querySelectorAll('div.carousel');
let currentPet = 0;

let currentPetLeft = 0;
let currentPetRight = 1;
let currentPetOne = 0;
let currentPetTwo = 1;
let currentPetThree = 2;




function getRandomIntInclusive(min, max) {
  let previousNumPet = currentPet;
  let nextNumPet;
  min = Math.ceil(min);
  max = Math.floor(max);
  do{
    nextNumPet = Math.floor(Math.random() * (max - min + 1)) + min;
  }while(nextNumPet === previousNumPet);

  return currentPet = nextNumPet;
};

function getRandomIntInclusiveForTwoElements(min, max){
  let nextNumPetOne = 0;
  let nextNumPetTwo = 0;
  min = Math.ceil(min);
  max = Math.floor(max);
  do{
    nextNumPetOne = Math.floor(Math.random() * (max - min + 1)) + min;
    nextNumPetTwo = Math.floor(Math.random() * (max - min + 1)) + min;
  }while(nextNumPetOne === nextNumPetTwo);
  currentPetLeft = nextNumPetOne;
  currentPetRight = nextNumPetTwo;
  return currentPetLeft, currentPetRight;
}

function getRandomIntInclusiveForThreeElements(min, max){
  let nextNumPetOne = 0;
  let nextNumPetTwo = 0;
  let nextNumPetThree = 0;
  min = Math.ceil(min);
  max = Math.floor(max);
  do{
    nextNumPetOne = Math.floor(Math.random() * (max - min + 1)) + min;
    nextNumPetTwo = Math.floor(Math.random() * (max - min + 1)) + min;
    nextNumPetThree = Math.floor(Math.random() * (max - min + 1)) + min;
  }while(nextNumPetOne === nextNumPetTwo || nextNumPetOne === nextNumPetThree || 
         nextNumPetTwo === nextNumPetThree);
  currentPetOne = nextNumPetOne;
  currentPetTwo = nextNumPetTwo;
  currentPetThree = nextNumPetThree;
  return currentPetOne, currentPetTwo,currentPetThree;
}

let isEnabled = true;

function changeCurrentPet() {
  if(window.screen.width < 768){
    getRandomIntInclusive(0,7);
  }else if(window.screen.width <= 1280){
    getRandomIntInclusiveForTwoElements(0,7);
  }else{
    getRandomIntInclusiveForThreeElements(0,7);
  }
}

function hidePet(direction) {
  if(window.screen.width < 768){
    isEnabled = false;
    pets[currentPet].classList.add(direction);
    pets[currentPet].addEventListener('animationend', function() {
      if(direction === 'to-left'){
        this.classList.add('hide-pet-to-left');
      }else{
        this.classList.add('hide-pet-to-right');
      }
      this.classList.remove('active', direction);
    });
  }else if(window.screen.width <= 1280){
    if(direction === 'to-left'){
      isEnabled = false;
      pets[currentPetLeft].classList.add('to-left-one');
      pets[currentPetRight].classList.add('to-left-two');
      pets[currentPetLeft].addEventListener('animationend', function() {
        this.classList.add('hide-pet-to-right-one');
        this.classList.remove('to-left-one', 'active-one');
      });
      pets[currentPetRight].addEventListener('animationend', function() {
        this.classList.add('hide-pet-to-right-two');
        this.classList.remove('to-left-two', 'active-two');
      });
    }else if(direction === 'to-right'){
      isEnabled = false;
      pets[currentPetLeft].classList.add('to-right-one', 'active-one');
      pets[currentPetRight].classList.add('to-right-two', 'active-two');
      pets[currentPetLeft].addEventListener('animationend', function() {
        this.classList.add('hide-pet-to-right-one');
        this.classList.remove('to-right-one', 'active-one');
      });
      pets[currentPetRight].addEventListener('animationend', function() {
        this.classList.add('hide-pet-to-right-two');
        this.classList.remove('to-right-two', 'active-two');
      });
    }
  }else{
    if(direction === 'to-left'){
      isEnabled = false;
      pets[currentPetOne].classList.add('to-left-one');
      pets[currentPetTwo].classList.add('to-left-two');
      pets[currentPetThree].classList.add('to-left-three');
      pets[currentPetOne].addEventListener('animationend', function() {
        this.classList.remove('to-left-one', 'active-one');
        this.classList.add('hide-pet-to-right-one');
      });
      pets[currentPetTwo].addEventListener('animationend', function() {
        this.classList.remove('to-left-two', 'active-two');
        this.classList.add('hide-pet-to-right-two');
      });
      pets[currentPetThree].addEventListener('animationend', function() {
        this.classList.remove('to-left-three', 'active-three');
        this.classList.add('hide-pet-to-right-three');
      });
    }else if(direction === 'to-right'){
      isEnabled = false;
      pets[currentPetOne].classList.add('to-right-one');
      pets[currentPetTwo].classList.add('to-right-two');
      pets[currentPetThree].classList.add('to-right-three');
      pets[currentPetOne].addEventListener('animationend', function() {
        this.classList.remove('to-right-one', 'active-one');
        this.classList.add('hide-pet-to-right-one');
      });
      pets[currentPetTwo].addEventListener('animationend', function() {
        this.classList.remove('to-right-two', 'active-two');
        this.classList.add('hide-pet-to-right-two');
      });
      pets[currentPetThree].addEventListener('animationend', function() {
        this.classList.remove('to-right-three', 'active-three');
        this.classList.add('hide-pet-to-right-three');
      });
    }
  }
}

function showPet(direction) {
  if(window.screen.width < 768){
    if(direction === 'from-right'){
      pets[currentPet].classList.add('next', direction);
      pets[currentPet].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
      });
    }else{
      pets[currentPet].classList.add('previous', direction);
      pets[currentPet].addEventListener('animationend', function() {
        this.classList.remove('previous', direction);
        this.classList.add('active');
        isEnabled = true;
      });
    }
  }else if(window.screen.width <= 1280){
    if(direction === 'from-right'){
      pets[currentPetLeft].classList.add('from-right-one');
      pets[currentPetRight].classList.add('from-right-two');
      pets[currentPetLeft].addEventListener('animationend', function() {
        this.classList.add('active-one');
        this.classList.remove('hide-pet-to-right-one', 'hide-pet-to-right-two');
        this.classList.remove('from-right-one');
        isEnabled = true;
      });
      pets[currentPetRight].addEventListener('animationend', function() {
        this.classList.add('active-two');
        this.classList.remove('hide-pet-to-right-one','hide-pet-to-right-two');
        this.classList.remove('from-right-two');
        isEnabled = true;
      });
    }else if(direction === 'from-left'){
      pets[currentPetLeft].classList.add('from-left-one');
      pets[currentPetRight].classList.add('from-left-two');
      pets[currentPetLeft].addEventListener('animationend', function() {
        this.classList.add('active-one');
        this.classList.remove('hide-pet-to-right-one', 'hide-pet-to-right-two');
        this.classList.remove('from-left-one');
        isEnabled = true;
      });
      pets[currentPetRight].addEventListener('animationend', function() {
        this.classList.add('active-two');
        this.classList.remove('hide-pet-to-right-one', 'hide-pet-to-right-two');
        this.classList.remove('from-left-two');
        isEnabled = true;
      });
    }
  }else{
    if(direction === 'from-right'){
      pets[currentPetOne].classList.add('from-right-one');
      pets[currentPetTwo].classList.add('from-right-two');
      pets[currentPetThree].classList.add('from-right-three');
      pets[currentPetOne].addEventListener('animationend', function() {
        this.classList.add('active-one');
        this.classList.remove('from-right-one','hide-pet-to-right-one', 'hide-pet-to-right-two','hide-pet-to-right-three');
        isEnabled = true;
      });
      pets[currentPetTwo].addEventListener('animationend', function() {
        this.classList.add('active-two');
        this.classList.remove('from-right-two','hide-pet-to-right-one', 'hide-pet-to-right-two','hide-pet-to-right-three');
        isEnabled = true;
      });
      pets[currentPetThree].addEventListener('animationend', function() {
        this.classList.add('active-three');
        this.classList.remove('from-right-three','hide-pet-to-right-one', 'hide-pet-to-right-two','hide-pet-to-right-three');
        isEnabled = true;
      });
    }else if(direction === 'from-left'){
      pets[currentPetOne].classList.add('from-left-one');
      pets[currentPetTwo].classList.add('from-left-two');
      pets[currentPetThree].classList.add('from-left-three');
      pets[currentPetOne].addEventListener('animationend', function() {
        this.classList.add('active-one');
        this.classList.remove('from-left-one','hide-pet-to-right-one', 'hide-pet-to-right-two','hide-pet-to-right-three');
        isEnabled = true;
      });
      pets[currentPetTwo].addEventListener('animationend', function() {
        this.classList.add('active-two');
        this.classList.remove('from-left-two','hide-pet-to-right-one', 'hide-pet-to-right-two','hide-pet-to-right-three');
        isEnabled = true;
      });
      pets[currentPetThree].addEventListener('animationend', function() {
        this.classList.add('active-three');
        this.classList.remove('from-left-three','hide-pet-to-right-one', 'hide-pet-to-right-two','hide-pet-to-right-three');
        isEnabled = true;
      });
    }
  }
}

function nextPet(n) {
  if(window.screen.width < 767){
    hidePet('to-left');
    changeCurrentPet();
    showPet('from-right');
  }else if(window.screen.width <= 1280){
    hidePet('to-left');
    changeCurrentPet();
    setTimeout(function () {
      showPet('from-right');
    },1000);
  }else{
    hidePet('to-left');
    changeCurrentPet();
    setTimeout(function () {
      showPet('from-right');
    },1000);
    //showPet('from-right');
  }
}

function previousPet(n) {
  hidePet('to-right');
  changeCurrentPet();
  if(window.screen.width <= 767){
    showPet('from-left');
  }else{
    setTimeout(function () {
      showPet('from-left');
    },1000);
  }
}

document.querySelector('div.arrow-left').addEventListener('click', function() {
  if(isEnabled){
    previousPet(currentPet);
  }
});

document.querySelector('div.arrow-right').addEventListener('click', function() {
  if(isEnabled){
    if(window.screen.width < 768){
      nextPet(currentPet);
    }else if(window.screen.width <= 1280){
      nextPet();
    }else{
      nextPet();
    }
  }
});