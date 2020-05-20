let li = document.querySelectorAll('li');

for (let i = 0; i < li.length; i++) {
	li[i].addEventListener('mouseenter', function(e) {
		li[i].classList.toggle('active-item');
	});
	li[i].addEventListener('mouseleave', function(e) {
		li[i].classList.toggle('active-item');
	});
}