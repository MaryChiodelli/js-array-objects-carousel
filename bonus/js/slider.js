const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
	},
	
	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
	},
	
	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
	}
];

const slidesWrapperEl = document.querySelector('.slides-wrapper');
slidesWrapperEl.innerHTML = '';

slides.forEach( (slide) => {
	const li = `<li class="slide">
		<img src="${slide.url}" alt="fotografia scattata in ${slide.title}">
		<div class="slide__content">
			<h3 class="slide__title">${slide.title}</h3>
			<p class="slide__description">${slide.description}</p>
		</div>
    </li>`;
	
	slidesWrapperEl.innerHTML += li;
} );

let slideIndex = 0;

const slidesEl = document.querySelectorAll('.slide');
slidesEl[slideIndex].classList.add('active');

const arrowPrevEl = document.querySelector('.arrow-prev');
const arrowNextEl = document.querySelector('.arrow-next');

arrowNextEl.addEventListener('click', function() {
	const currentSlide = slidesEl[slideIndex];
	let nextSlide = slidesEl[++slideIndex];
	
	if (slideIndex === slidesEl.length) {
		slideIndex = 0;
		nextSlide = slidesEl[slideIndex];
	}
	
	nextSlide.classList.add('active');
	currentSlide.classList.remove('active');
} );

arrowPrevEl.addEventListener('click', function() {
	const currentSlide = slidesEl[slideIndex];
	let prevSlide = slidesEl[--slideIndex];
	
	if (slideIndex === -1) {
		slideIndex = slidesEl.length - 1;
		prevSlide = slidesEl[slideIndex];
	}
	
	currentSlide.classList.remove('active');
	prevSlide.classList.add('active');
} );