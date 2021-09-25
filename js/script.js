//Меню бургер

const iconeBurger = document.querySelector('.header__burger')
if (iconeBurger) {
	const menuBody = document.querySelector('.header__body-menu')
	iconeBurger.addEventListener('click', function(e) {
		document.body.classList.toggle('_lock')
		iconeBurger.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})

}