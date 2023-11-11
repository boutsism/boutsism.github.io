const year = document.querySelector('.copyright');
year.innerHTML = 'Copyright' + ' ' + new Date().getFullYear() + ' ' + '-' + ' ' + 'Minas Mpoutsis';
const navButton = document.querySelector('nav button');
const mobileBar = document.querySelector('nav .hidden');
navButton.addEventListener('click', () => {
	mobileBar.classList.toggle('hidden');
});
function scrollAbout() {
	const learnMore = document.querySelector('.about');
	learnMore.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function scrollProjects() {
	const Projects = document.querySelector('.projects');
	Projects.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function scrollContact() {
	const Contact = document.querySelector('.contact');
	Contact.scrollIntoView({ behavior: 'smooth', block: 'end' });
}
function scrollToTop() {
	scrollTo({ top: 0, behavior: 'smooth' });
}
const hamburger = document.querySelector('.hamburger');
function handleScroll() {
	if (hamburger) {
		hamburger.classList.add('hidden');
	}
}
window.addEventListener('scroll', handleScroll);
