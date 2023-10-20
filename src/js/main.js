const burgerBtn = document.querySelector('.burger-btn');
const navItems = document.querySelector('.nav__items');
const footerYear = document.querySelector('.footer__year');
const navLinks = document.querySelectorAll('.nav__item');
const sections = document.querySelectorAll('section');

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('burger-btn--active');
	navItems.classList.toggle('nav__items--active');
});

navLinks.forEach(element => {
	element.addEventListener('click', () => {
		burgerBtn.classList.remove('burger-btn--active');
		navItems.classList.remove('nav__items--active');
	});
});

window.onscroll = () => {
	sections.forEach(el => {
		let top = window.scrollY;
		let offset = el.offsetTop-200;
		let height = el.offsetHeight;
		let id = el.getAttribute('id');


		if (top >= offset && top <= offset + height) {
			navLinks.forEach(link => {
				link.classList.remove('nav__item--active');
                navItems.querySelector('a[href*=' + id +']').classList.add('nav__item--active');
			});
		} else if (top <= 70) {
            navLinks.forEach(link => {
				link.classList.remove('nav__item--active');
                navItems.querySelector('a[href*=home').classList.add('nav__item--active');
			});
        }
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
