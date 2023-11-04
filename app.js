const year = document.querySelector('.copyright');
year.innerHTML = 'Copyright' + ' ' + new Date().getFullYear() + ' ' + '-' + ' ' + 'Minas Mpoutsis';
const navButton = document.querySelector('nav button');
const mobileBar = document.querySelector('nav .hidden');
navButton.addEventListener('click', () => {
	mobileBar.classList.toggle('hidden');
});
