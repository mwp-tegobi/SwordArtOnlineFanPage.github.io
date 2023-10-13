const slide_contReparto1 = document.querySelector('.container1-temp1-re');
const slideReparto = document.querySelector('.slides-temp1-re');
const nextBtnre1 = document.getElementById('next-btnre1');
const prevBtnre1 = document.getElementById('prev-btnre1');

let todosReparto1 = document.querySelectorAll('.container-voice1');
let indexRe1 = 2;
let slideIdRe1;

const firstCloneRe1 = todosReparto1[0].cloneNode(true);
const secondCloneRe1 = todosReparto1[1].cloneNode(true);
const thirdCloneRe1 = todosReparto1[2].cloneNode(true);
const penultimoCloneRe1 = todosReparto1[todosReparto1.length - 1].cloneNode(true);
const lastCloneRe1 = todosReparto1[todosReparto1.length - 2].cloneNode(true);

firstCloneRe1.id = 'first-cloneRe1';
secondCloneRe1.id = 'second-cloneRe1';
thirdCloneRe1.id = 'third-cloneRe1';
penultimoCloneRe1.id = 'penultimo-cloneRe1';
lastCloneRe1.id = 'last-cloneRe1';

slideReparto.append(firstCloneRe1);
slideReparto.append(secondCloneRe1);
slideReparto.append(thirdCloneRe1);
slideReparto.prepend(penultimoCloneRe1);
slideReparto.prepend(lastCloneRe1);

const slideWidthRe = 204;


slideReparto.style.transform = `translateX(${-slideWidthRe * indexRe1}px)`;

const gettodosReparto1 = () => document.querySelectorAll('.container-voice1');

slideReparto.addEventListener('transitionend', () => {
  todosReparto1 = gettodosReparto1();
  if (todosReparto1[indexRe1].id === firstCloneRe1.id) {
    slideReparto.style.transition = 'none';
    indexRe1 = 2;
    slideReparto.style.transform = `translateX(${-slideWidthRe * indexRe1}px)`;
  }
  if (todosReparto1[indexRe1].id === secondCloneRe1.id) {
    slideReparto.style.transition = 'none';
    indexRe1 = 3;
    slideReparto.style.transform = `translateX(${-slideWidthRe * indexRe1}px)`;
  }
  if (todosReparto1[indexRe1].id === thirdCloneRe1.id) {
    slideReparto.style.transition = 'none';
    indexRe1 = 4;
    slideReparto.style.transform = `translateX(${-slideWidthRe * indexRe1}px)`;
  }
  if (todosReparto1[indexRe1].id === lastCloneRe1.id) {
    slideReparto.style.transition = 'none';
    indexRe1 = todosReparto1.length - 5;
    slideReparto.style.transform = `translateX(${-slideWidthRe * indexRe1}px`;
  }
});

const moveToNextslideReparto = () => {
  todosReparto1 = gettodosReparto1();
  if (indexRe1 >= todosReparto1.length - 1) return;
  indexRe1++;
  slideReparto.style.transition = '.7s ease-out';
  slideReparto.style.transform = `translateX(${-slideWidthRe * indexRe1}px)`;
};

const moveToPreviousslideReparto = () => {
  if (indexRe1 <= 0) return;
  indexRe1--;
  slideReparto.style.transition = '.7s ease-out';
  slideReparto.style.transform = `translateX(${-slideWidthRe * indexRe1}px)`;
};

nextBtnre1.addEventListener('click', moveToNextslideReparto);
prevBtnre1.addEventListener('click', moveToPreviousslideReparto);















const slide_contReparto2 = document.querySelector('.container2-temp2-re');
const slideReparto2 = document.querySelector('.slides-temp2-re');
const nextBtnre2 = document.getElementById('next-btnre2');
const prevBtnre2 = document.getElementById('prev-btnre2');

let todosReparto2 = document.querySelectorAll('.container-voice2');
let indexRe2 = 2;
let slideIdRe2;

const firstCloneRe2 = todosReparto2[0].cloneNode(true);
const secondCloneRe2 = todosReparto2[1].cloneNode(true);
const thirdCloneRe2 = todosReparto2[2].cloneNode(true);
const penultimoCloneRe2 = todosReparto2[todosReparto2.length - 1].cloneNode(true);
const lastCloneRe2 = todosReparto2[todosReparto2.length - 2].cloneNode(true);

firstCloneRe2.id = 'first-cloneRe2';
secondCloneRe2.id = 'second-cloneRe2';
thirdCloneRe2.id = 'third-cloneRe2';
penultimoCloneRe2.id = 'penultimo-cloneRe2';
lastCloneRe2.id = 'last-cloneRe2';

slideReparto2.append(firstCloneRe2);
slideReparto2.append(secondCloneRe2);
slideReparto2.append(thirdCloneRe2);
slideReparto2.prepend(penultimoCloneRe2);
slideReparto2.prepend(lastCloneRe2);


slideReparto2.style.transform = `translateX(${-slideWidthRe * indexRe2}px)`;

const gettodosReparto2 = () => document.querySelectorAll('.container-voice2');

slideReparto2.addEventListener('transitionend', () => {
  todosReparto2 = gettodosReparto2();
  if (todosReparto2[indexRe2].id === firstCloneRe2.id) {
    slideReparto2.style.transition = 'none';
    indexRe2 = 2;
    slideReparto2.style.transform = `translateX(${-slideWidthRe * indexRe2}px)`;
  }
  if (todosReparto2[indexRe2].id === secondCloneRe2.id) {
    slideReparto2.style.transition = 'none';
    indexRe2 = 3;
    slideReparto2.style.transform = `translateX(${-slideWidthRe * indexRe2}px)`;
  }
  if (todosReparto2[indexRe2].id === thirdCloneRe2.id) {
    slideReparto2.style.transition = 'none';
    indexRe2 = 4;
    slideReparto2.style.transform = `translateX(${-slideWidthRe * indexRe2}px)`;
  }
  if (todosReparto2[indexRe2].id === lastCloneRe2.id) {
    slideReparto2.style.transition = 'none';
    indexRe2 = todosReparto2.length - 5;
    slideReparto2.style.transform = `translateX(${-slideWidthRe * indexRe2}px`;
  }
});

const moveToNextslideReparto2 = () => {
  todosReparto2 = gettodosReparto2();
  if (indexRe2 >= todosReparto2.length - 1) return;
  indexRe2++;
  slideReparto2.style.transition = '.7s ease-out';
  slideReparto2.style.transform = `translateX(${-slideWidthRe * indexRe2}px)`;
};

const moveToPreviousslideReparto2 = () => {
  if (indexRe2 <= 0) return;
  indexRe2--;
  slideReparto2.style.transition = '.7s ease-out';
  slideReparto2.style.transform = `translateX(${-slideWidthRe * indexRe2}px)`;
};

nextBtnre2.addEventListener('click', moveToNextslideReparto2);
prevBtnre2.addEventListener('click', moveToPreviousslideReparto2);

















const slide_contReparto3 = document.querySelector('.container3-ordinal-re');
const slideReparto3 = document.querySelector('.slides-ordinal-re');
const nextBtnre3 = document.getElementById('next-btnre3');
const prevBtnre3 = document.getElementById('prev-btnre3');

let todosReparto3 = document.querySelectorAll('.container-voice3');
let indexRe3 = 2;
let slideIdRe3;

const firstCloneRe3 = todosReparto3[0].cloneNode(true);
const secondCloneRe3 = todosReparto3[1].cloneNode(true);
const thirdCloneRe3 = todosReparto3[2].cloneNode(true);
const penultimoCloneRe3 = todosReparto3[todosReparto3.length - 1].cloneNode(true);
const lastCloneRe3 = todosReparto3[todosReparto3.length - 2].cloneNode(true);

firstCloneRe3.id = 'first-cloneRe3';
secondCloneRe3.id = 'second-cloneRe3';
thirdCloneRe3.id = 'third-cloneRe3';
penultimoCloneRe3.id = 'penultimo-cloneRe3';
lastCloneRe3.id = 'last-cloneRe3';

slideReparto3.append(firstCloneRe3);
slideReparto3.append(secondCloneRe3);
slideReparto3.append(thirdCloneRe3);
slideReparto3.prepend(penultimoCloneRe3);
slideReparto3.prepend(lastCloneRe3);


slideReparto3.style.transform = `translateX(${-slideWidthRe * indexRe3}px)`;

const gettodosReparto3 = () => document.querySelectorAll('.container-voice3');

slideReparto3.addEventListener('transitionend', () => {
  todosReparto3 = gettodosReparto3();
  if (todosReparto3[indexRe3].id === firstCloneRe3.id) {
    slideReparto3.style.transition = 'none';
    indexRe3 = 2;
    slideReparto3.style.transform = `translateX(${-slideWidthRe * indexRe3}px)`;
  }
  if (todosReparto3[indexRe3].id === secondCloneRe3.id) {
    slideReparto3.style.transition = 'none';
    indexRe3 = 3;
    slideReparto3.style.transform = `translateX(${-slideWidthRe * indexRe3}px)`;
  }
  if (todosReparto3[indexRe3].id === thirdCloneRe3.id) {
    slideReparto3.style.transition = 'none';
    indexRe3 = 4;
    slideReparto3.style.transform = `translateX(${-slideWidthRe * indexRe3}px)`;
  }
  if (todosReparto3[indexRe3].id === lastCloneRe3.id) {
    slideReparto3.style.transition = 'none';
    indexRe3 = todosReparto3.length - 5;
    slideReparto3.style.transform = `translateX(${-slideWidthRe * indexRe3}px`;
  }
});

const moveToNextslideReparto3 = () => {
  todosReparto3 = gettodosReparto3();
  if (indexRe3 >= todosReparto3.length - 1) return;
  indexRe3++;
  slideReparto3.style.transition = '.7s ease-out';
  slideReparto3.style.transform = `translateX(${-slideWidthRe * indexRe3}px)`;
};

const moveToPreviousslideReparto3 = () => {
  if (indexRe3 <= 0) return;
  indexRe3--;
  slideReparto3.style.transition = '.7s ease-out';
  slideReparto3.style.transform = `translateX(${-slideWidthRe * indexRe3}px)`;
};

nextBtnre3.addEventListener('click', moveToNextslideReparto3);
prevBtnre3.addEventListener('click', moveToPreviousslideReparto3);























const slide_contReparto4 = document.querySelector('.container4-alicization-re');
const slideReparto4 = document.querySelector('.slides-alicization-re');
const nextBtnre4 = document.getElementById('next-btnre4');
const prevBtnre4 = document.getElementById('prev-btnre4');

let todosReparto4 = document.querySelectorAll('.container-voice4');
let indexRe4 = 2;
let slideIdRe4;

const firstCloneRe4 = todosReparto4[0].cloneNode(true);
const secondCloneRe4 = todosReparto4[1].cloneNode(true);
const thirdCloneRe4 = todosReparto4[2].cloneNode(true);
const penultimoCloneRe4 = todosReparto4[todosReparto4.length - 1].cloneNode(true);
const lastCloneRe4 = todosReparto4[todosReparto4.length - 2].cloneNode(true);

firstCloneRe4.id = 'first-cloneRe4';
secondCloneRe4.id = 'second-cloneRe4';
thirdCloneRe4.id = 'third-cloneRe4';
penultimoCloneRe4.id = 'penultimo-cloneRe4';
lastCloneRe4.id = 'last-cloneRe4';

slideReparto4.append(firstCloneRe4);
slideReparto4.append(secondCloneRe4);
slideReparto4.append(thirdCloneRe4);
slideReparto4.prepend(penultimoCloneRe4);
slideReparto4.prepend(lastCloneRe4);


slideReparto4.style.transform = `translateX(${-slideWidthRe * indexRe4}px)`;

const gettodosReparto4 = () => document.querySelectorAll('.container-voice4');

slideReparto4.addEventListener('transitionend', () => {
  todosReparto4 = gettodosReparto4();
  if (todosReparto4[indexRe4].id === firstCloneRe4.id) {
    slideReparto4.style.transition = 'none';
    indexRe4 = 2;
    slideReparto4.style.transform = `translateX(${-slideWidthRe * indexRe4}px)`;
  }
  if (todosReparto4[indexRe4].id === secondCloneRe4.id) {
    slideReparto4.style.transition = 'none';
    indexRe4 = 3;
    slideReparto4.style.transform = `translateX(${-slideWidthRe * indexRe4}px)`;
  }
  if (todosReparto4[indexRe4].id === thirdCloneRe4.id) {
    slideReparto4.style.transition = 'none';
    indexRe4 = 4;
    slideReparto4.style.transform = `translateX(${-slideWidthRe * indexRe4}px)`;
  }
  if (todosReparto4[indexRe4].id === lastCloneRe4.id) {
    slideReparto4.style.transition = 'none';
    indexRe4 = todosReparto4.length - 5;
    slideReparto4.style.transform = `translateX(${-slideWidthRe * indexRe4}px`;
  }
});

const moveToNextslideReparto4 = () => {
  todosReparto4 = gettodosReparto4();
  if (indexRe4 >= todosReparto4.length - 1) return;
  indexRe4++;
  slideReparto4.style.transition = '.7s ease-out';
  slideReparto4.style.transform = `translateX(${-slideWidthRe * indexRe4}px)`;
};

const moveToPreviousslideReparto4 = () => {
  if (indexRe4 <= 0) return;
  indexRe4--;
  slideReparto4.style.transition = '.7s ease-out';
  slideReparto4.style.transform = `translateX(${-slideWidthRe * indexRe4}px)`;
};

nextBtnre4.addEventListener('click', moveToNextslideReparto4);
prevBtnre4.addEventListener('click', moveToPreviousslideReparto4);

















const slide_contReparto5 = document.querySelector('.container5-underworld-re');
const slideReparto5 = document.querySelector('.slides-underworld-re');
const nextBtnre5 = document.getElementById('next-btnre5');
const prevBtnre5 = document.getElementById('prev-btnre5');

let todosReparto5 = document.querySelectorAll('.container-voice5');
let indexRe5 = 2;
let slideIdRe5;

const firstCloneRe5 = todosReparto5[0].cloneNode(true);
const secondCloneRe5 = todosReparto5[1].cloneNode(true);
const thirdCloneRe5 = todosReparto5[2].cloneNode(true);
const penultimoCloneRe5 = todosReparto5[todosReparto5.length - 1].cloneNode(true);
const lastCloneRe5 = todosReparto5[todosReparto5.length - 2].cloneNode(true);

firstCloneRe5.id = 'first-cloneRe5';
secondCloneRe5.id = 'second-cloneRe5';
thirdCloneRe5.id = 'third-cloneRe5';
penultimoCloneRe5.id = 'penultimo-cloneRe5';
lastCloneRe5.id = 'last-cloneRe5';

slideReparto5.append(firstCloneRe5);
slideReparto5.append(secondCloneRe5);
slideReparto5.append(thirdCloneRe5);
slideReparto5.prepend(penultimoCloneRe5);
slideReparto5.prepend(lastCloneRe5);


slideReparto5.style.transform = `translateX(${-slideWidthRe * indexRe5}px)`;

const gettodosReparto5 = () => document.querySelectorAll('.container-voice5');

slideReparto5.addEventListener('transitionend', () => {
  todosReparto5 = gettodosReparto5();
  if (todosReparto5[indexRe5].id === firstCloneRe5.id) {
    slideReparto5.style.transition = 'none';
    indexRe5 = 2;
    slideReparto5.style.transform = `translateX(${-slideWidthRe * indexRe5}px)`;
  }
  if (todosReparto5[indexRe5].id === secondCloneRe5.id) {
    slideReparto5.style.transition = 'none';
    indexRe5 = 3;
    slideReparto5.style.transform = `translateX(${-slideWidthRe * indexRe5}px)`;
  }
  if (todosReparto5[indexRe5].id === thirdCloneRe5.id) {
    slideReparto5.style.transition = 'none';
    indexRe5 = 5;
    slideReparto5.style.transform = `translateX(${-slideWidthRe * indexRe5}px)`;
  }
  if (todosReparto5[indexRe5].id === lastCloneRe5.id) {
    slideReparto5.style.transition = 'none';
    indexRe5 = todosReparto5.length - 5;
    slideReparto5.style.transform = `translateX(${-slideWidthRe * indexRe5}px`;
  }
});

const moveToNextslideReparto5 = () => {
  todosReparto5 = gettodosReparto5();
  if (indexRe5 >= todosReparto5.length - 1) return;
  indexRe5++;
  slideReparto5.style.transition = '.7s ease-out';
  slideReparto5.style.transform = `translateX(${-slideWidthRe * indexRe5}px)`;
};

const moveToPreviousslideReparto5 = () => {
  if (indexRe5 <= 0) return;
  indexRe5--;
  slideReparto5.style.transition = '.7s ease-out';
  slideReparto5.style.transform = `translateX(${-slideWidthRe * indexRe5}px)`;
};

nextBtnre5.addEventListener('click', moveToNextslideReparto5);
prevBtnre5.addEventListener('click', moveToPreviousslideReparto5);













const slide_contReparto6 = document.querySelector('.container6-progressive-re');
const slideReparto6 = document.querySelector('.slides-progressive-re');
const nextBtnre6 = document.getElementById('next-btnre6');
const prevBtnre6 = document.getElementById('prev-btnre6');

let todosReparto6 = document.querySelectorAll('.container-voice6');
let indexRe6 = 2;
let slideIdRe6;

const firstCloneRe6 = todosReparto6[0].cloneNode(true);
const secondCloneRe6 = todosReparto6[1].cloneNode(true);
const thirdCloneRe6 = todosReparto6[2].cloneNode(true);
const penultimoCloneRe6 = todosReparto6[todosReparto6.length - 1].cloneNode(true);
const lastCloneRe6 = todosReparto6[todosReparto6.length - 2].cloneNode(true);

firstCloneRe6.id = 'first-cloneRe6';
secondCloneRe6.id = 'second-cloneRe6';
thirdCloneRe6.id = 'third-cloneRe6';
penultimoCloneRe6.id = 'penultimo-cloneRe6';
lastCloneRe6.id = 'last-cloneRe6';

slideReparto6.append(firstCloneRe6);
slideReparto6.append(secondCloneRe6);
slideReparto6.append(thirdCloneRe6);
slideReparto6.prepend(penultimoCloneRe6);
slideReparto6.prepend(lastCloneRe6);


slideReparto6.style.transform = `translateX(${-slideWidthRe * indexRe6}px)`;

const gettodosReparto6 = () => document.querySelectorAll('.container-voice6');

slideReparto6.addEventListener('transitionend', () => {
  todosReparto6 = gettodosReparto6();
  if (todosReparto6[indexRe6].id === firstCloneRe6.id) {
    slideReparto6.style.transition = 'none';
    indexRe6 = 2;
    slideReparto6.style.transform = `translateX(${-slideWidthRe * indexRe6}px)`;
  }
  if (todosReparto6[indexRe6].id === secondCloneRe6.id) {
    slideReparto6.style.transition = 'none';
    indexRe6 = 3;
    slideReparto6.style.transform = `translateX(${-slideWidthRe * indexRe6}px)`;
  }
  if (todosReparto6[indexRe6].id === thirdCloneRe6.id) {
    slideReparto6.style.transition = 'none';
    indexRe6 = 6;
    slideReparto6.style.transform = `translateX(${-slideWidthRe * indexRe6}px)`;
  }
  if (todosReparto6[indexRe6].id === lastCloneRe6.id) {
    slideReparto6.style.transition = 'none';
    indexRe6 = todosReparto6.length - 6;
    slideReparto6.style.transform = `translateX(${-slideWidthRe * indexRe6}px`;
  }
});

const moveToNextslideReparto6 = () => {
  todosReparto6 = gettodosReparto6();
  if (indexRe6 >= todosReparto6.length - 1) return;
  indexRe6++;
  slideReparto6.style.transition = '.7s ease-out';
  slideReparto6.style.transform = `translateX(${-slideWidthRe * indexRe6}px)`;
};

const moveToPreviousslideReparto6 = () => {
  if (indexRe6 <= 0) return;
  indexRe6--;
  slideReparto6.style.transition = '.7s ease-out';
  slideReparto6.style.transform = `translateX(${-slideWidthRe * indexRe6}px)`;
};

nextBtnre6.addEventListener('click', moveToNextslideReparto6);
prevBtnre6.addEventListener('click', moveToPreviousslideReparto6);








