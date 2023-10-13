// slider de los personajes de la temporada 1
const slideContainer1 = document.querySelector('.container1-temp1-pj');
const slide1 = document.querySelector('.slides-temp1-pj');
const nextBtn1 = document.getElementById('next-btn1');
const prevBtn1 = document.getElementById('prev-btn1');

let slides1 = document.querySelectorAll('.slide-cards-temp1');
let index1 = 3;
let slideId1;

const firstClone1 = slides1[0].cloneNode(true);
const secondClone1 = slides1[1].cloneNode(true);
const thirdClone1 = slides1[2].cloneNode(true);
const penultimoClone1 = slides1[slides1.length - 1].cloneNode(true);
const lastClone1 = slides1[slides1.length - 2].cloneNode(true);

firstClone1.id = 'first-clone1';
secondClone1.id = 'second-clone1';
thirdClone1.id = 'third-clone1';
penultimoClone1.id = 'penultimo-clone1';
lastClone1.id = 'last-clone1';

slide1.append(firstClone1);
slide1.append(secondClone1);
slide1.append(thirdClone1);
slide1.prepend(penultimoClone1);
slide1.prepend(lastClone1);

const slideWidth = 280;

slide1.style.transform = `translateX(${-slideWidth * index1}px)`;

const getSlides1 = () => document.querySelectorAll('.slide-cards-temp1');

slide1.addEventListener('transitionend', () => {
  slides1 = getSlides1();
  if (slides1[index1].id === firstClone1.id) {
    slide1.style.transition = 'none';
    index1 = 2;
    slide1.style.transform = `translateX(${-slideWidth * index1}px)`;
  }
  //agregado por mi

  if (slides1[index1].id === secondClone1.id) {
    slide1.style.transition = 'none';
    index1 = 3;
    slide1.style.transform = `translateX(${-slideWidth * index1}px)`;
  }
  if (slides1[index1].id === thirdClone1.id) {
    slide1.style.transition = 'none';
    index1 = 4;
    slide1.style.transform = `translateX(${-slideWidth * index1}px)`;
  }

  //hasta aca

  if (slides1[index1].id === lastClone1.id) {
    slide1.style.transition = 'none';
    index1 = slides1.length - 5;
    slide1.style.transform = `translateX(${-slideWidth * index1}px`;
  }
});

const moveToNextSlide1 = () => {
  slides1 = getSlides1();
  if (index1 >= slides1.length - 1) return;
  index1++;
  slide1.style.transition = '.7s ease-out';
  slide1.style.transform = `translateX(${-slideWidth * index1}px)`;
};

const moveToPreviousSlide1 = () => {
  if (index1 <= 0) return;
  index1--;
  slide1.style.transition = '.7s ease-out';
  slide1.style.transform = `translateX(${-slideWidth * index1}px)`;
};

nextBtn1.addEventListener('click', moveToNextSlide1);
prevBtn1.addEventListener('click', moveToPreviousSlide1);


//slider de los personajes de la temporada 2
const slideContainer2 = document.querySelector('.container2-temp2-pj');
const slide2 = document.querySelector('.slides-temp2-pj');
const nextBtn2 = document.getElementById('next-btn2');
const prevBtn2 = document.getElementById('prev-btn2');

let slides2 = document.querySelectorAll('.slide-cards-temp2');
let index2 = 2;
let slideId2;

const firstClone2 = slides2[0].cloneNode(true);
const secondClone2 = slides2[1].cloneNode(true);
const thirdClone2 = slides2[2].cloneNode(true);
const penultimoClone2 = slides2[slides2.length - 1].cloneNode(true);
const lastClone2 = slides2[slides2.length - 2].cloneNode(true);

firstClone2.id = 'first-clone2';
secondClone2.id = 'second-clone2';
thirdClone2.id = 'third-clone2';
penultimoClone2.id = 'penultimo-clone2';
lastClone2.id = 'last-clone2';

slide2.append(firstClone2);
slide2.append(secondClone2);
slide2.append(thirdClone2);
slide2.prepend(penultimoClone2);
slide2.prepend(lastClone2);



slide2.style.transform = `translateX(${-slideWidth * index2}px)`;

const getSlides2 = () => document.querySelectorAll('.slide-cards-temp2');

slide2.addEventListener('transitionend', () => {
  slides2 = getSlides2();
  if (slides2[index2].id === firstClone2.id) {
    slide2.style.transition = 'none';
    index2 = 2;
    slide2.style.transform = `translateX(${-slideWidth * index2}px)`;
  }
  if (slides2[index2].id === secondClone2.id) {
    slide2.style.transition = 'none';
    index2 = 3;
    slide2.style.transform = `translateX(${-slideWidth * index2}px)`;
  }
  if (slides2[index2].id === thirdClone2.id) {
    slide2.style.transition = 'none';
    index2 = 4;
    slide2.style.transform = `translateX(${-slideWidth * index2}px)`;
  }
  if (slides2[index2].id === lastClone2.id) {
    slide2.style.transition = 'none';
    index2 = slides2.length - 5;
    slide2.style.transform = `translateX(${-slideWidth * index2}px`;
  }
});

const moveToNextSlide2 = () => {
  slides2 = getSlides2();
  if (index2 >= slides2.length - 1) return;
  index2++;
  slide2.style.transition = '.7s ease-out';
  slide2.style.transform = `translateX(${-slideWidth * index2}px)`;
};

const moveToPreviousSlide2 = () => {
  if (index2 <= 0) return;
  index2--;
  slide2.style.transition = '.7s ease-out';
  slide2.style.transform = `translateX(${-slideWidth * index2}px)`;
};

nextBtn2.addEventListener('click', moveToNextSlide2);
prevBtn2.addEventListener('click', moveToPreviousSlide2);



//slider de los personajes de la pelicula ordinal
const slideContainer3 = document.querySelector('.container3-ordinal-pj');
const slide3 = document.querySelector('.slides-ordinal-pj');
const nextBtn3 = document.getElementById('next-btn3');
const prevBtn3 = document.getElementById('prev-btn3');

let slides3 = document.querySelectorAll('.slide-cards-ordinal');
let index3 = 2;
let slideId3;

const firstClone3 = slides3[0].cloneNode(true);
const secondClone3 = slides3[1].cloneNode(true);
const thirdClone3 = slides3[2].cloneNode(true);
const lastClone3 = slides3[slides3.length - 1].cloneNode(true);
const penultimoClone3 = slides3[slides3.length - 2].cloneNode(true);

firstClone3.id = 'first-clone3';
secondClone3.id = 'second-clone3';
thirdClone3.id = 'third-clone3';
lastClone3.id = 'last-clone3';
penultimoClone3.id = 'penultimo-clone3';

slide3.append(firstClone3);
slide3.append(secondClone3);
slide3.append(thirdClone3);
slide3.prepend(lastClone3);
slide3.prepend(penultimoClone3);

slide3.style.transform = `translateX(${-slideWidth * index3}px)`;

const getSlides3 = () => document.querySelectorAll('.slide-cards-ordinal');

slide3.addEventListener('transitionend', () => {
  slides3 = getSlides3();
  if (slides3[index3].id === firstClone3.id) {
    slide3.style.transition = 'none';
    index3 = 2;
    slide3.style.transform = `translateX(${-slideWidth * index3}px)`;
   }
  if (slides3[index3].id === secondClone3.id) {
    slide3.style.transition = 'none';
    index3 = 3;
    slide3.style.transform = `translateX(${-slideWidth * index3}px)`;
   }
  if (slides3[index3].id === thirdClone3.id) {
    slide3.style.transition = 'none';
    index3 = 4;
    slide3.style.transform = `translateX(${-slideWidth * index3}px)`;
  }
  if (slides3[index3].id === lastClone3.id) {
    slide3.style.transition = 'none';
    index3 = slides3.length - 4;
    slide3.style.transform = `translateX(${-slideWidth * index3}px`;
  }
  if (slides3[index3].id === penultimoClone3.id) {
    slide3.style.transition = 'none';
    index3 = slides3.length - 5;
    slide3.style.transform = `translateX(${-slideWidth * index3}px`;
  }

});

const moveToNextSlide3 = () => {
  slides3 = getSlides3();
  if (index3 >= slides3.length - 1) return;
  index3++;
  slide3.style.transition = '.7s ease-out';
  slide3.style.transform = `translateX(${-slideWidth * index3}px)`;
};

const moveToPreviousSlide3 = () => {
  if (index3 <= 0) return;
  index3--;
  slide3.style.transition = '.7s ease-out';
  slide3.style.transform = `translateX(${-slideWidth * index3}px)`;
};

nextBtn3.addEventListener('click', moveToNextSlide3);
prevBtn3.addEventListener('click', moveToPreviousSlide3);



//slider de los personajes de la temporada alicization
const slideContainer4 = document.querySelector('.container4-alicization-pj');
const slide4 = document.querySelector('.slides-alicization-pj');
const nextBtn4 = document.getElementById('next-btn4');
const prevBtn4 = document.getElementById('prev-btn4');

let slides4 = document.querySelectorAll('.slide-cards-alicization');
let index4 = 2;
let slideId4;

const firstClone4 = slides4[0].cloneNode(true);
const secondClone4 = slides4[1].cloneNode(true);
const thirdClone4 = slides4[2].cloneNode(true);
const penultimoClone4 = slides4[slides4.length - 1].cloneNode(true);
const lastClone4 = slides4[slides4.length - 2].cloneNode(true);

firstClone4.id = 'first-clone4';
secondClone4.id = 'second-clone4';
thirdClone4.id = 'third-clone4';
penultimoClone4.id = 'penultimo-clone4';
lastClone4.id = 'last-clone4';

slide4.append(firstClone4);
slide4.append(secondClone4);
slide4.append(thirdClone4);
slide4.prepend(penultimoClone4);
slide4.prepend(lastClone4);


slide4.style.transform = `translateX(${-slideWidth * index4}px)`;

const getSlides4 = () => document.querySelectorAll('.slide-cards-alicization');

slide4.addEventListener('transitionend', () => {
  slides4 = getSlides4();
  if (slides4[index4].id === firstClone4.id) {
    slide4.style.transition = 'none';
    index4 = 2;
    slide4.style.transform = `translateX(${-slideWidth * index4}px)`;
  }
  //agregado por mi

  if (slides4[index4].id === secondClone4.id) {
    slide4.style.transition = 'none';
    index4 = 3;
    slide4.style.transform = `translateX(${-slideWidth * index4}px)`;
  }
  if (slides4[index4].id === thirdClone4.id) {
    slide4.style.transition = 'none';
    index4 = 4;
    slide4.style.transform = `translateX(${-slideWidth * index4}px)`;
  }

  //hasta aca

  if (slides4[index4].id === lastClone4.id) {
    slide4.style.transition = 'none';
    index4 = slides4.length - 5;
    slide4.style.transform = `translateX(${-slideWidth * index4}px`;
  }
});

const moveToNextSlide4 = () => {
  slides4 = getSlides4();
  if (index4 >= slides4.length - 1) return;
  index4++;
  slide4.style.transition = '.7s ease-out';
  slide4.style.transform = `translateX(${-slideWidth * index4}px)`;
};

const moveToPreviousSlide4 = () => {
  if (index4 <= 0) return;
  index4--;
  slide4.style.transition = '.7s ease-out';
  slide4.style.transform = `translateX(${-slideWidth * index4}px)`;
};

nextBtn4.addEventListener('click', moveToNextSlide4);
prevBtn4.addEventListener('click', moveToPreviousSlide4);


//slider de los personajes de la temporada war of underworld
const slideContainer5 = document.querySelector('.container5-underworld-pj');
const slide5 = document.querySelector('.slides-underworld-pj');
const nextBtn5 = document.getElementById('next-btn5');
const prevBtn5 = document.getElementById('prev-btn5');

let slides5 = document.querySelectorAll('.slide-cards-underworld');
let index5 = 2;
let slideId5;

const firstClone5 = slides5[0].cloneNode(true);
const secondClone5 = slides5[1].cloneNode(true);
const thirdClone5 = slides5[2].cloneNode(true);
const penultimoClone5 = slides5[slides5.length - 1].cloneNode(true);
const lastClone5 = slides5[slides5.length - 2].cloneNode(true);

firstClone5.id = 'first-clone5';
secondClone5.id = 'second-clone5';
thirdClone5.id = 'third-clone5';
penultimoClone5.id = 'penultimo-clone5';
lastClone5.id = 'last-clone5';

slide5.append(firstClone5);
slide5.append(secondClone5);
slide5.append(thirdClone5);
slide5.prepend(penultimoClone5);
slide5.prepend(lastClone5);

slide5.style.transform = `translateX(${-slideWidth * index5}px)`;

const getSlides5 = () => document.querySelectorAll('.slide-cards-underworld');

slide5.addEventListener('transitionend', () => {
  slides5 = getSlides5();
  if (slides5[index5].id === firstClone5.id) {
    slide5.style.transition = 'none';
    index5 = 2;
    slide5.style.transform = `translateX(${-slideWidth * index5}px)`;
  }

  if (slides5[index5].id === secondClone5.id) {
    slide5.style.transition = 'none';
    index5 = 3;
    slide5.style.transform = `translateX(${-slideWidth * index5}px)`;
  }
  if (slides5[index5].id === thirdClone5.id) {
    slide5.style.transition = 'none';
    index5 = 4;
    slide5.style.transform = `translateX(${-slideWidth * index5}px)`;
  }

  if (slides5[index5].id === lastClone5.id) {
    slide5.style.transition = 'none';
    index5 = slides5.length - 5;
    slide5.style.transform = `translateX(${-slideWidth * index5}px`;
  }
});

const moveToNextSlide5 = () => {
  slides5 = getSlides5();
  if (index5 >= slides5.length - 1) return;
  index5++;
  slide5.style.transition = '.7s ease-out';
  slide5.style.transform = `translateX(${-slideWidth * index5}px)`;
};

const moveToPreviousSlide5 = () => {
  if (index5 <= 0) return;
  index5--;
  slide5.style.transition = '.7s ease-out';
  slide5.style.transform = `translateX(${-slideWidth * index5}px)`;
};

nextBtn5.addEventListener('click', moveToNextSlide5);
prevBtn5.addEventListener('click', moveToPreviousSlide5);




//slider de los personajes de la temporada war of progressive
const slideContainer6 = document.querySelector('.container6-progressive-pj');
const slide6 = document.querySelector('.slides-progressive-pj');
const nextBtn6 = document.getElementById('next-btn6');
const prevBtn6 = document.getElementById('prev-btn6');

let slides6 = document.querySelectorAll('.slide-cards-progressive');
let index6 = 2;
let slideId6;

const firstClone6 = slides6[0].cloneNode(true);
const secondClone6 = slides6[1].cloneNode(true);
const thirdClone6 = slides6[2].cloneNode(true);
const penultimoClone6 = slides6[slides6.length - 1].cloneNode(true);
const lastClone6 = slides6[slides6.length - 2].cloneNode(true);

firstClone6.id = 'first-clone6';
secondClone6.id = 'second-clone6';
thirdClone6.id = 'third-clone6';
penultimoClone6.id = 'penultimo-clone6';
lastClone6.id = 'last-clone6';

slide6.append(firstClone6);
slide6.append(secondClone6);
slide6.append(thirdClone6);
slide6.prepend(penultimoClone6);
slide6.prepend(lastClone6);

slide6.style.transform = `translateX(${-slideWidth * index6}px)`;

const getSlides6 = () => document.querySelectorAll('.slide-cards-progressive');

slide6.addEventListener('transitionend', () => {
  slides6 = getSlides6();
  if (slides6[index6].id === firstClone6.id) {
    slide6.style.transition = 'none';
    index6 = 2;
    slide6.style.transform = `translateX(${-slideWidth * index6}px)`;
  }

  if (slides6[index6].id === secondClone6.id) {
    slide6.style.transition = 'none';
    index6 = 3;
    slide6.style.transform = `translateX(${-slideWidth * index6}px)`;
  }
  if (slides6[index6].id === thirdClone6.id) {
    slide6.style.transition = 'none';
    index6 = 4;
    slide6.style.transform = `translateX(${-slideWidth * index6}px)`;
  }

  if (slides6[index6].id === lastClone6.id) {
    slide6.style.transition = 'none';
    index6 = slides6.length - 5;
    slide6.style.transform = `translateX(${-slideWidth * index6}px`;
  }
});

const moveToNextSlide6 = () => {
  slides6 = getSlides6();
  if (index6 >= slides6.length - 1) return;
  index6++;
  slide6.style.transition = '.7s ease-out';
  slide6.style.transform = `translateX(${-slideWidth * index6}px)`;
};

const moveToPreviousSlide6 = () => {
  if (index6 <= 0) return;
  index6--;
  slide6.style.transition = '.7s ease-out';
  slide6.style.transform = `translateX(${-slideWidth * index6}px)`;
};

nextBtn6.addEventListener('click', moveToNextSlide6);
prevBtn6.addEventListener('click', moveToPreviousSlide6);








//  ------------------------------------------- el hover sobre los botones que dice official clip y opening anime
const eventoClipVideo1 = document.querySelectorAll(".evento-clip-sao");

eventoClipVideo1.forEach((elementoVideoName, indexVideoName1) => {
	elementoVideoName.addEventListener("mouseenter", () =>{
		const eventoClipVideoName = document.querySelectorAll(".evento-clip-name_sao");

		eventoClipVideoName.forEach((elementoCambio,indexVideoName22) => {
			if (indexVideoName1 == indexVideoName22){
				eventoClipVideoName[indexVideoName1].style.color = `rgb(255, 255, 255)`;
				eventoClipVideoName[indexVideoName1].style.borderBottom = `2px solid #008CC4`;
				eventoClipVideoName[indexVideoName1].style.borderTop = `2px solid transparent`;
			}
			elementoVideoName.addEventListener("mouseleave", () =>{

				eventoClipVideoName.forEach((elementoCambio,indexVideoName22) => {
					if (indexVideoName1 == indexVideoName22){
						eventoClipVideoName[indexVideoName1].style.color = `rgb(0, 0, 0)`;
						eventoClipVideoName[indexVideoName1].style.borderBottom = `2px solid transparent`;
						eventoClipVideoName[indexVideoName1].style.borderTop = `2px solid #008CC4`;
					}	
				})
			})	
		})
	})
})





//    ------------------------------------------------- audios con cada container
const audioTodos = document.querySelectorAll('.audios_todos');
const playPauseContainer = document.querySelectorAll('.play-pause_container');
const stopContainer = document.querySelectorAll('.stop_container');

const pincheMovImg = document.querySelectorAll('.pinche-mov');
const pincheMovCuadrado = document.querySelectorAll('.pinche-container-mov');
const discoGiro = document.querySelectorAll('.disco-giro');
const playBtn = document.querySelectorAll('.play-btn');
const pauseBtn = document.querySelectorAll('.pause-btn');

const volumeSliderAudio = document.querySelectorAll('.volume-slider');
const volumeMuteIconAudio = document.querySelectorAll('.mute-icon');
const volumeHighIconAudio = document.querySelectorAll('.volume-icon');

const volumeContainer = document.querySelectorAll('.volumen-container');
const volume_containerSlide = document.querySelectorAll('.volume_containerSlide');

const progressContainerMusic = document.querySelectorAll('.progress-container-music');
const progressMusicBlue = document.querySelectorAll('.progressMusic');

const currTime = document.querySelectorAll('.tiempo00');

audioTodos.forEach((elementoAudios, indexAudios) =>{
	var elementoAudiosId = elementoAudios.id;
	
	playPauseContainer.forEach((elementoPlayPauseContainer, indexPlayPauseContainer) => {
		
		elementoPlayPauseContainer.addEventListener("click", () => {
			if(indexPlayPauseContainer == indexAudios){
				elementoPlayPauseContainer.disabled = true;
				elementoPlayPauseContainer.style.backgroundColor = `#003347`;

				if (elementoAudios.paused) {
					stopContainer.forEach((elementoStopContainer, indexStopContainer) => {
						if (indexStopContainer == indexAudios) {
							elementoStopContainer.disabled = true;
							elementoStopContainer.style.backgroundColor = `#003347`;
						}
					})

					setTimeout ( function () {
						elementoPlayPauseContainer.disabled = false;
						elementoPlayPauseContainer.style.backgroundColor = `#008CC4`;

						stopContainer.forEach((elementoStopContainer, indexStopContainer) => {
							if (indexStopContainer == indexAudios) {
								elementoStopContainer.disabled = false;
								elementoStopContainer.style.backgroundColor = `#008CC4`;
							}
						})
					}, 2000);

					setTimeout ( function () {
						elementoAudios.play();
					}, 2000);
						discoGiro.forEach((elementoGiroDisco, indexGiroDisco) =>{
							if(elementoAudios.play && indexAudios == indexGiroDisco){
								elementoGiroDisco.style.animation = `giro-musica 4s linear .6s infinite`;
							}
						})
						pincheMovImg.forEach((elementoPincheImg, indexPincheImg) =>{
							if(elementoAudios.play && indexAudios == indexPincheImg){
								elementoPincheImg.style.animation = `animacion-pinche-1 1s linear forwards`;
							}
						})
						pincheMovCuadrado.forEach((elementoPincheCuadrado, indexPincheCuadrado) =>{
							if(elementoAudios.play && indexAudios == indexPincheCuadrado){
								elementoPincheCuadrado.style.transform = `rotatez(29deg)`;
							}
						})
						playBtn.forEach((elementoPlayBtn, indexPlayBtn) =>{
							if(elementoAudios.play && indexAudios == indexPlayBtn){
								elementoPlayBtn.classList.toggle("hide");
							}
						})
						pauseBtn.forEach((elementoPauseBtn, indexPauseBtn) =>{
							if(elementoAudios.play && indexAudios == indexPauseBtn){
								elementoPauseBtn.classList.toggle("hide");
							}
						})
				}
				else {
					setTimeout ( function () {
						elementoPlayPauseContainer.disabled = false;
						elementoPlayPauseContainer.style.backgroundColor = `#008CC4`;

						}, 2000);
					elementoAudios.pause();
					discoGiro.forEach((elementoGiroDisco, indexGiroDisco) =>{
						if(elementoAudios.play && indexAudios == indexGiroDisco){
							elementoGiroDisco.style.animationPlayState = `paused`;
						}
					})
					pincheMovImg.forEach((elementoPincheImg, indexPincheImg) =>{
						if(elementoAudios.play && indexAudios == indexPincheImg){
							elementoPincheImg.style.animation = `animacion-pinche-1-back 1s linear forwards`;
						}
					})
					pincheMovCuadrado.forEach((elementoPincheCuadrado, indexPincheCuadrado) =>{
						if(elementoAudios.play && indexAudios == indexPincheCuadrado){
							elementoPincheCuadrado.style.transform = `rotatez(0deg)`;
						}
					})
					playBtn.forEach((elementoPlayBtn, indexPlayBtn) =>{
						if(elementoAudios.play && indexAudios == indexPlayBtn){
							elementoPlayBtn.classList.toggle("hide");
						}
					})
					pauseBtn.forEach((elementoPauseBtn, indexPauseBtn) =>{
						if(elementoAudios.play && indexAudios == indexPauseBtn){
							elementoPauseBtn.classList.toggle("hide");
						}
					})
				}
			}
		})
	});

	stopContainer.forEach((elementoStopContainer, indexStopContainer) => {
		elementoStopContainer.addEventListener("click", () => {
			if(indexStopContainer == indexAudios){
				console.log(elementoAudiosId + " ---> clickeado");
				if (elementoAudios.paused || elementoAudios.ended){
					discoGiro.forEach((elementoGiroDisco, indexGiroDisco) => {
						if(elementoAudios.play && indexAudios == indexGiroDisco){
							elementoGiroDisco.style.animationPlayState = `paused`;
						}
					})
					pincheMovImg.forEach((elementoPincheImg, indexPincheImg) => {
						if(elementoAudios.play && indexAudios == indexPincheImg){
							elementoPincheImg.style.animation = `animacion-pinche-1-back 1s linear forwards`;
						}
					})
					pincheMovCuadrado.forEach((elementoPincheCuadrado, indexPincheCuadrado) => {
						if(elementoAudios.play && indexAudios == indexPincheCuadrado){
							elementoPincheCuadrado.style.transform = `rotatez(0deg)`;
						}
					})
					elementoAudios.currentTime = 0;
				}
				else {
					elementoAudios.pause();
					discoGiro.forEach((elementoGiroDisco, indexGiroDisco) => {
						if(elementoAudios.play && indexAudios == indexGiroDisco){
							elementoGiroDisco.style.animationPlayState = `paused`;
						}
					})
					pincheMovImg.forEach((elementoPincheImg, indexPincheImg) => {
						if(elementoAudios.play && indexAudios == indexPincheImg){
							elementoPincheImg.style.animation = `animacion-pinche-1-back 1s linear forwards`;
						}
					})
					pincheMovCuadrado.forEach((elementoPincheCuadrado, indexPincheCuadrado) => {
						if(elementoAudios.play && indexAudios == indexPincheCuadrado){
							elementoPincheCuadrado.style.transform = `rotatez(0deg)`;
						}
					})
					playBtn.forEach((elementoPlayBtn, indexPlayBtn) =>{
						if(elementoAudios.play && indexAudios == indexPlayBtn){
							elementoPlayBtn.classList.toggle("hide");
						}
					})
					pauseBtn.forEach((elementoPauseBtn, indexPauseBtn) =>{
						if(elementoAudios.play && indexAudios == indexPauseBtn){
							elementoPauseBtn.classList.toggle("hide");
						}
					})
					elementoAudios.currentTime = 0;
				}
			}
		})	
	});

	elementoAudios.addEventListener("ended", () => {
		discoGiro.forEach((elementoGiroDisco, indexGiroDisco) =>{
			if(elementoAudios.play && indexAudios == indexGiroDisco){
				elementoGiroDisco.style.animationPlayState = `paused`;
			}
		})
		pincheMovImg.forEach((elementoPincheImg, indexPincheImg) =>{
			if(elementoAudios.play && indexAudios == indexPincheImg){
				elementoPincheImg.style.animation = `animacion-pinche-1-back 1s linear forwards`;
			}
		})
		pincheMovCuadrado.forEach((elementoPincheCuadrado, indexPincheCuadrado) =>{
			if(elementoAudios.play && indexAudios == indexPincheCuadrado){
				elementoPincheCuadrado.style.transform = `rotatez(0deg)`;
			}
		})
		playBtn.forEach((elementoPlayBtn, indexPlayBtn) =>{
			if(elementoAudios.play && indexAudios == indexPlayBtn){
				elementoPlayBtn.classList.toggle("hide");
			}
		})
		pauseBtn.forEach((elementoPauseBtn, indexPauseBtn) =>{
			if(elementoAudios.play && indexAudios == indexPauseBtn){
				elementoPauseBtn.classList.toggle("hide");
			}
		})
		elementoAudios.currentTime = 0;
	});

	volume_containerSlide.forEach ((elementoContainerSlideVolume, indexContainerSlideVolume) => {
		elementoContainerSlideVolume.addEventListener('change', () => {
			if(indexAudios == indexContainerSlideVolume) {
				elementoAudios.volume = elementoContainerSlideVolume.value / 100;
				if(elementoAudios.volume == 0) {
					elementoAudios.muted = true;
					volumeMuteIconAudio.forEach((elementoVolumeMute, indexVolumeMute) => {
						if(indexAudios == indexVolumeMute){
							elementoVolumeMute.classList.toggle("hide");
						}	
					})
					volumeHighIconAudio.forEach((elementoVolumeHigh, indexVolumeHigh) => {
						if(indexAudios == indexVolumeHigh){
							elementoVolumeHigh.classList.toggle("hide");
						}
					})
				}
				else{
					elementoAudios.muted = false;
				}
			}
		})
	});
	
	volumeMuteIconAudio.forEach((elementoVolumeMute, indexVolumeMute) => { //ver de nuevo esto, cuando modifico un volumen,se me modifica de todos
		elementoVolumeMute.addEventListener("click", () => {

			if(indexAudios == indexVolumeMute) {
				volumeMuteIconAudio.forEach((elementoVolumeMute2, indexVolumeMute2) => {
					if(indexAudios == indexVolumeMute2){
						elementoVolumeMute2.classList.toggle("hide");
					}
				})
				volumeHighIconAudio.forEach((elementoVolumeHigh2, indexHighAudio2) => {
					if(indexAudios == indexHighAudio2){
						elementoVolumeHigh2.classList.toggle("hide");
					}
				})
				elementoAudios.muted = false;
				volumeSliderAudio.value = 100;
				volume_containerSlide.forEach ((elementoContainerSlideVolume, indexContainerSlideVolume) => {
					if(indexAudios == indexContainerSlideVolume) {
						elementoContainerSlideVolume.value = 100; // no tiene que ser 100 porque si tenia menos
																  // tendria que volver a ese valor
					}	
					
				})
			}
		})
	});

	volumeHighIconAudio.forEach((elementoVolumeHigh, indexVolumeHigh) => { //ver de nuevo esto, cuando modifico un volumen,se me modifica de todos
		elementoVolumeHigh.addEventListener("click", () => {

			if(indexAudios == indexVolumeHigh) {
				volumeMuteIconAudio.forEach((elementoVolumeMute2, indexVolumeMute2) => {
					if(indexAudios == indexVolumeMute2){
						elementoVolumeMute2.classList.toggle("hide");
					}
				})
				volumeHighIconAudio.forEach((elementoVolumeHigh2, indexHighAudio2) => {
					if(indexAudios == indexHighAudio2){
						elementoVolumeHigh2.classList.toggle("hide");
					}
				})
				elementoAudios.muted = true;
				volumeSliderAudio.value = 0;

				volume_containerSlide.forEach ((elementoContainerSlideVolume, indexContainerSlideVolume) => {
						if(indexAudios == indexContainerSlideVolume) {
							elementoContainerSlideVolume.value = 0;
						}
					
				})
			}
		})
	});
	
	progressContainerMusic.forEach ((elementoProgressMusic, indexProgressMusic) => { //update del cambio en la barra de tiempo
		elementoProgressMusic.addEventListener('click', (event) => {
			if(indexAudios == indexProgressMusic) {
				const totalWidth = elementoProgressMusic.offsetWidth

				progressMusicBlue.forEach ((elementoMusicBlue, indexMusicBlue) => {
					const elementoMusicBlueWidth = event.offsetX
					const current = (elementoMusicBlueWidth / totalWidth) * elementoAudios.duration
					elementoAudios.currentTime = current
				})
			}
		})
		
	});	

	progressMusicBlue.forEach ((elementoProgressMusicBlue, indexProgressMusicBlue) => { //update del cambio en la barra de tiempo
		elementoAudios.addEventListener("timeupdate", (event) => {
			if(indexAudios == indexProgressMusicBlue) {
				const {duration, currentTime} = event.target
				const percent = (currentTime / duration) * 100
				elementoProgressMusicBlue.style.width = percent + "%" 
			}
		})	
	});
	
	audioTodos.forEach((elementoTimeUpdate, indexTimeUpdate) => {	// update del cambio de tiempo (en el current time)
		elementoTimeUpdate.addEventListener("timeupdate", () => {

			if(indexAudios == indexTimeUpdate) {
				const currentTimeAudio = elementoTimeUpdate.currentTime;
				const durationAudio = elementoTimeUpdate.duration;
				let progress1Width = (currentTimeAudio / durationAudio) * 100;

				progressMusicBlue.forEach ((elementoMusicBlue, indexMusicBlue) => {
					let progreso = elementoMusicBlue.id;

					if(indexAudios == indexMusicBlue) {
						elementoMusicBlue.style.width = `${progress1Width}%`;
					}	
				})
				currTime.forEach((elementoCurrTime, indexCurrTime) => {
					if(indexAudios == indexCurrTime) {
						let currentMin = Math.floor(currentTimeAudio / 60);
						let currentSec = Math.floor(currentTimeAudio % 60);
						if(currentSec < 10){
						currentSec = `0${currentSec}`;
						}
						elementoCurrTime.textContent = "0" + currentMin + ":" + currentSec;
					}
				})
			}
		})
	});
}) // fin del foreach de cada audio


//----------------------------   click de cada video y despliega el cartel del conteiner que tiene el video
var contenedorEventoParaVideos = document.querySelectorAll(".evento-clip-sao");
var contenedorInfo2 = document.querySelector(".contenedor-info2");
let container_body = document.querySelector(".container_body")

contenedorEventoParaVideos.forEach((elementoVideo,indexVideo) =>{
	elementoVideo.addEventListener("click", eventoclickAbrir_2, false);
});

function eventoclickAbrir_2(e) {
	if(e.target !== e.currentTarget){
		var clickedItem = e.target.id;
		let contenedorEventoClick1 = contenedorEventoParaVideos;
		let contenedorInfoHijos = contenedorInfo2.children;
		let aString = clickedItem.toString();
		
		const aHacerClick = document.querySelectorAll('.desplegar_info2');

		aHacerClick.forEach((elemento1,index1) =>{
			let cortar = elemento1.id;
			const aStringInfo = cortar.toString();
			let res = aStringInfo.includes(aString);
			if(res == true) {
				contenedorInfoHijos[index1].style.display = 'flex';
				container_body.style.overflowY = "hidden";
			}
		});
	}
	e.stopPropagation();
}

//  ------------------------------------- click para cerrar cada info de pj
const botonCerradoInfoVideo = document.querySelectorAll(".cerrar_info2");

botonCerradoInfoVideo.forEach((elementoCerrado2,indexCerrado) =>{
	elementoCerrado2.addEventListener("click", () => {
		const aHacerClickCerrar = document.querySelectorAll('.desplegar_info2');

		aHacerClickCerrar.forEach((elementoCloseInfo,indexCloseInfo) => {
			if(indexCloseInfo == indexCerrado) {
				elementoCloseInfo.style.display = 'none';
				container_body.style.overflowY = "scroll";	
				const videosTodos = document.querySelectorAll('.videos_todos');
				
				videosTodos.forEach((elementoVideos, indexVideos) =>{
					if(indexVideos == indexCloseInfo){
						if(elementoVideos.paused){}
						else {
							elementoVideos.pause();
	
							playBtnVideo.forEach((elementoPlayBtnVideo, indexPlayBtnVideo) =>{
								if(indexVideos == indexPlayBtnVideo){  elementoPlayBtnVideo.classList.toggle("hide");}
							  })
							  pauseBtnVideo.forEach((elementoPauseBtnVideo, indexPauseBtnVideo) =>{
								if(indexVideos == indexPauseBtnVideo){  elementoPauseBtnVideo.classList.toggle("hide");}
							  })
						}
					}
					else if (indexVideos == (indexCloseInfo + 1)){
						if(elementoVideos.paused){}
						else {
							elementoVideos.pause();
	
							playBtnVideo.forEach((elementoPlayBtnVideo, indexPlayBtnVideo) =>{
								if(indexVideos == indexPlayBtnVideo){	elementoPlayBtnVideo.classList.toggle("hide");}
							  })
							  pauseBtnVideo.forEach((elementoPauseBtnVideo, indexPauseBtnVideo) =>{
								if(indexVideos == indexPauseBtnVideo){  elementoPauseBtnVideo.classList.toggle("hide");}
							  })
						}
					}
					else if (indexVideos == (indexCloseInfo + 2)){
						if(elementoVideos.paused){}
						else {
							elementoVideos.pause();
	
							playBtnVideo.forEach((elementoPlayBtnVideo, indexPlayBtnVideo) =>{
								if(indexVideos == indexPlayBtnVideo){	elementoPlayBtnVideo.classList.toggle("hide");}
							  })
							  pauseBtnVideo.forEach((elementoPauseBtnVideo, indexPauseBtnVideo) =>{
								if(indexVideos == indexPauseBtnVideo){  elementoPauseBtnVideo.classList.toggle("hide");}
							  })
						}
					}
					else if (indexVideos == (indexCloseInfo + 3)){
						if(elementoVideos.paused){}
						else {
							elementoVideos.pause();
	
							playBtnVideo.forEach((elementoPlayBtnVideo, indexPlayBtnVideo) =>{
								if(indexVideos == indexPlayBtnVideo){
									elementoPlayBtnVideo.classList.toggle("hide");
								}
							  })
							  pauseBtnVideo.forEach((elementoPauseBtnVideo, indexPauseBtnVideo) =>{
								if(indexVideos == indexPauseBtnVideo){
									  elementoPauseBtnVideo.classList.toggle("hide");
								}
							  })
						}
					}
				})
			}
		})		
	})
})



//    ------------------------------------------------- videos con cada container
const videosTodos = document.querySelectorAll('.videos_todos');
const videosScreen = document.querySelectorAll('.video-op-temp');
const playPauseContainerVideo = document.querySelectorAll('.boton-play-pausa-video');
const resetBtnVideo = document.querySelectorAll('.reset-btn-video');

const playBtnVideo = document.querySelectorAll('.play-btn-video');
const pauseBtnVideo = document.querySelectorAll('.pause-btn-video');
const fullScreenVideo = document.querySelectorAll('.boton-fullscreen-video');

const progressContainerVideo = document.querySelectorAll('.progress-container-video');
const progressVideoBlue = document.querySelectorAll('.progressCon_Video');

const volumeSliderVideo = document.querySelectorAll('.volume-slider-video');
const volumeMuteIconVideo = document.querySelectorAll('.volume-mute-video');
const volumeHighIconVideo = document.querySelectorAll('.volume-btn-video');

const currTimeVideo = document.querySelectorAll('.tiempo00_video');



videosTodos.forEach((elementoVideos, indexVideos) =>{
	var elementoVideosId = elementoVideos.id;

	playPauseContainerVideo.forEach((elementoPlayPauseVideo, indexPlayPauseVideo) => {
		elementoPlayPauseVideo.addEventListener("click", () => {
			if(indexVideos == indexPlayPauseVideo){
				if (elementoVideos.paused) {
					elementoVideos.play();
					playBtnVideo.forEach((elementoPlayBtnVideo, indexPlayBtnVideo) =>{
						if(indexVideos == indexPlayBtnVideo){
							elementoPlayBtnVideo.classList.toggle("hide");
						}
					})
					pauseBtnVideo.forEach((elementoPauseBtnVideo, indexPauseBtnVideo) =>{
						if(indexVideos == indexPauseBtnVideo){
							elementoPauseBtnVideo.classList.toggle("hide");
						}
					})		
				}
				else {
					elementoVideos.pause();	
					playBtnVideo.forEach((elementoPlayBtnVideo, indexPlayBtnVideo) =>{
						if(indexVideos == indexPlayBtnVideo){
							elementoPlayBtnVideo.classList.toggle("hide");
						}
					})
					pauseBtnVideo.forEach((elementoPauseBtnVideo, indexPauseBtnVideo) =>{
						if(indexVideos == indexPauseBtnVideo){
							elementoPauseBtnVideo.classList.toggle("hide");
						}
					})
				}
			}		
		})
	});

	elementoVideos.addEventListener("ended", () => {
		playBtnVideo.forEach((elementoPlayBtnVideo, indexPlayBtnVideo) =>{
			if(indexVideos == indexPlayBtnVideo){
				elementoPlayBtnVideo.classList.toggle("hide");
			}
		})
		pauseBtnVideo.forEach((elementoPauseBtnVideo, indexPauseBtnVideo) =>{
			if(indexVideos == indexPauseBtnVideo){
				elementoPauseBtnVideo.classList.toggle("hide");
			}
		})		
		elementoVideos.currentTime = 0;
	});

	fullScreenVideo.forEach((elemenetoFullScreen, indexFullScreen) => {
		elemenetoFullScreen.addEventListener("click", () => {
			if(indexVideos == indexFullScreen){
				if(elementoVideos.requestFullscreen){
					elementoVideos.requestFullscreen();
				}
			}
		});
	});

	videosScreen.forEach((elemenetoHacerFullScreen, indexHacerFullScreen) => {
		elemenetoHacerFullScreen.addEventListener("dblclick", () => {
			if(indexVideos == indexHacerFullScreen){
				if(elementoVideos.requestFullscreen){
					elementoVideos.requestFullscreen();
				}
			}
		})
	});

	resetBtnVideo.forEach((elementoResetVideo, indexResetVideo) => {
		elementoResetVideo.addEventListener("click", () => {
			if(indexVideos == indexResetVideo){
				if(elementoVideos.paused){
					elementoVideos.currentTime = 0;
					elementoVideos.pause();
					// playBtnVideo.forEach((elementoPlayBtnVideo, indexPlayBtnVideo) =>{
					// 	if(indexVideos == indexPlayBtnVideo){
					// 		elementoPlayBtnVideo.classList.toggle("hide");
					// 	}
					// })
					// pauseBtnVideo.forEach((elementoPauseBtnVideo, indexPauseBtnVideo) =>{
					// 	if(indexVideos == indexPauseBtnVideo){
					// 		elementoPauseBtnVideo.classList.toggle("hide");
					// 	}
					// })

					
				}
				else if(elementoVideos.play){
					elementoVideos.currentTime = 0;
					elementoVideos.pause();
					
					playBtnVideo.forEach((elementoPlayBtnVideo, indexPlayBtnVideo) =>{
						if(indexVideos == indexPlayBtnVideo){
							elementoPlayBtnVideo.classList.toggle("hide");
						}
					})
					pauseBtnVideo.forEach((elementoPauseBtnVideo, indexPauseBtnVideo) =>{
						if(indexVideos == indexPauseBtnVideo){
							elementoPauseBtnVideo.classList.toggle("hide");
						}
					})
				}
			}
		})	
	});

	progressContainerVideo.forEach ((elementoProgressVideo, indexProgressVideo) => {
		elementoProgressVideo.addEventListener('click', (event) => {
			if(indexVideos == indexProgressVideo) {
				const totalWidth = elementoProgressVideo.offsetWidth

				progressVideoBlue.forEach ((elementoVideoBlue, indexVideoBlue) => {
					const elementoVideoBlueWidth = event.offsetX
					const current = (elementoVideoBlueWidth / totalWidth) * elementoVideos.duration
					elementoVideos.currentTime = current
				})
			}
		})
		
	});	

	progressVideoBlue.forEach ((elementoVideoBlue, indexVideoBlue) => { //update del cambio en la barra de tiempo
		elementoVideos.addEventListener("timeupdate", (event) => {
			if(indexVideos == indexVideoBlue) {
				const {duration, currentTime} = event.target
				const percent = (currentTime / duration) * 100
				elementoVideoBlue.style.width = percent + "%" 
			}
		})	
	});

	videosTodos.forEach((elementoTimeUpdateVideo, indexTimeUpdateVideo) => {	// update del cambio de tiempo (en el current time)
		elementoTimeUpdateVideo.addEventListener("timeupdate", () => {

			if(indexVideos == indexTimeUpdateVideo) {
				const currentTimeAudio = elementoTimeUpdateVideo.currentTime;

				const durationAudio = elementoTimeUpdateVideo.duration;
		
				let progress1WidthVideo = (currentTimeAudio / durationAudio) * 100;


				progressVideoBlue.forEach ((elementoVideoBlue, indexVideoBlue) => {
					let progreso = elementoVideoBlue.id
					if(indexVideos == indexVideoBlue) {
						elementoVideoBlue.style.width = `${progress1WidthVideo}%`;
					}	
				})
				currTimeVideo.forEach((elementoCurrTimeVideo, indexCurrTimeVideo) => {
					if(indexVideos == indexCurrTimeVideo) {
						let currentMin = Math.floor(currentTimeAudio / 60);
						let currentSec = Math.floor(currentTimeAudio % 60);
						if(currentSec < 10){
						currentSec = `0${currentSec}`;
						}
						elementoCurrTimeVideo.textContent = "0" + currentMin + ":" + currentSec;
					}
				})
			}
		})
	});

	volumeSliderVideo.forEach ((elementoVideoSlideVolume, indexVideoSlideVolume) => {
		elementoVideoSlideVolume.addEventListener('change', () => {
			if(indexVideos == indexVideoSlideVolume) {
				elementoVideos.volume = elementoVideoSlideVolume.value / 100;
				if(elementoVideos.volume == 0) {
					elementoVideos.muted = true;
					volumeMuteIconVideo.forEach((elementoVolumeMuteVideo, indexVolumeMuteVideo) => {
						if(indexVideos == indexVolumeMuteVideo){
							elementoVolumeMuteVideo.classList.toggle("hide");
						}	
					})
					volumeHighIconVideo.forEach((elementoVolumeHighVideo, indexVolumeHighVideo) => {
						if(indexVideos == indexVolumeHighVideo){
							elementoVolumeHighVideo.classList.toggle("hide");
						}
					})
				}
				else{
					elementoVideos.muted = false;
				}
			}
		})
	});
	
	volumeMuteIconVideo.forEach((elementoVolumeMuteVideo, indexVolumeMuteVideo) => { //ver de nuevo esto, cuando modifico un volumen,se me modifica de todos
		elementoVolumeMuteVideo.addEventListener("click", () => {

			if(indexVideos == indexVolumeMuteVideo) {
				volumeMuteIconVideo.forEach((elementoVolumeMuteVideo2, indexVolumeMuteVideo2) => {
					if(indexVideos == indexVolumeMuteVideo2){
						elementoVolumeMuteVideo2.classList.toggle("hide");
					}	
				})
				volumeHighIconVideo.forEach((elementoVolumeHighVideo, indexVolumeHighVideo) => {
					if(indexVideos == indexVolumeHighVideo){
						elementoVolumeHighVideo.classList.toggle("hide");
					}
				})
				elementoVideos.muted = false;
				volumeSliderVideo.value = 100;
				volumeSliderVideo.forEach ((elementoVideoSlideVolume, indexVideoSlideVolume) => {
					if(indexVideos == indexVideoSlideVolume) {
						elementoVideoSlideVolume.value = 100; // no tiene que ser 100 porque si tenia menos
																  // tendria que volver a ese valor
					}	
					
				})
			}
		})
	});

	volumeHighIconVideo.forEach((elementoVolumeHighVideo, indexVolumeHighVideo) => { //ver de nuevo esto, cuando modifico un volumen,se me modifica de todos
		elementoVolumeHighVideo.addEventListener("click", () => {

			if(indexVideos == indexVolumeHighVideo) {
				volumeMuteIconVideo.forEach((elementoVolumeMuteVideo2, indexVolumeMuteVideo2) => {
					if(indexVideos == indexVolumeMuteVideo2){
						elementoVolumeMuteVideo2.classList.toggle("hide");
					}	
				})
				volumeHighIconVideo.forEach((elementoVolumeHighVideo, indexVolumeHighVideo) => {
					if(indexVideos == indexVolumeHighVideo){
						elementoVolumeHighVideo.classList.toggle("hide");
					}
				})
				elementoVideos.muted = true;
				volumeSliderVideo.value = 0;

				volumeSliderVideo.forEach ((elementoVideoSlideVolume, indexVideoSlideVolume) => {
					if(indexVideos == indexVideoSlideVolume) {
						elementoVideoSlideVolume.value = 0; // no tiene que ser 100 porque si tenia menos
																  // tendria que volver a ese valor
					}	
					
				})
			}
		})
	});
})		




//----------------------------   click de cada pj y despliega el cartel de info
var contenedorEvento = document.querySelectorAll(".nombres-pj");
var contenedorInfo = document.querySelector(".contenedor-info");

contenedorEvento.forEach((elemento,index) =>{
	elemento.addEventListener("click", eventoclickAbrir_1, false);
});

function eventoclickAbrir_1(e) {
	if(e.target !== e.currentTarget){
		var clickedItem = e.target.id;
		let contenedorEventoClick1 = contenedorEvento;
		let contenedorInfoHijos = contenedorInfo.children;
		let aString = clickedItem.toString();
		const aHacerClick = document.querySelectorAll('.desplegar_info');	
		aHacerClick.forEach((elemento1,index1) =>{
			let cortar = elemento1.id;
			const aStringInfo = cortar.toString()
	
			let res = aStringInfo.includes(aString)
			if(res == true) {	
				contenedorInfoHijos[index1].style.display = 'flex';
				container_body.style.overflowY = "hidden";
			}
		});	
	}
	e.stopPropagation();
}

//  ------------------------------------- click para cerrar cada info de pj
const botonCerradoInfo = document.querySelectorAll(".cerrar_info");

botonCerradoInfo.forEach((elementoCerrado,indexCerrado) =>{
	elementoCerrado.addEventListener("click", eventoclickCerrar_1, false);
})

function eventoclickCerrar_1(e) {
	const aHacerClickCerrar = document.querySelectorAll('.desplegar_info');
	aHacerClickCerrar.forEach((elementoCloseInfo,indexCloseInfo) =>{
		if(true) {	
			elementoCloseInfo.style.display = 'none';
			container_body.style.overflowY = "visible";

		}
	});
}

// -----------------	 clicks en la info de cada pj - cambia a siguiente imagen	--------------------
const buttonsInfo = document.querySelectorAll("[data-carousel-button]")

buttonsInfo.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})