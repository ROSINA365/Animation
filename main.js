// select element function
const selectElement = function (element) {
	return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
	body.classList.toggle('open');
});

// mine isnt working
// the addEventListener seems to be the error


// we want to do the animation on the scroll.
//scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distance: '25rem',
	delay: 300

});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '25rem',
	delay: 600

});

sr.reveal('.animate-top', {
	origin: 'top ',
	duration: 1000,
	distance: '25rem',
	delay: 600

});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distance: '25rem',
	delay: 600

});

// to trigger the animations I need to link the Scroll Reveal in js.bbnn
