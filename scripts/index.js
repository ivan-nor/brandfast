// HEADER DROPDOWN
const headerItems = document.querySelectorAll('.header__menu-item:has(.header__submenu-list)')
for (const item of headerItems) {
  const submenu = item.querySelector('.header__submenu-list')

  item.addEventListener('mouseover', () => {
    calcSubmenuWidth(submenu)
    submenu.classList.remove('hidden')
    document.body.classList.add('menu-hovered')
  })
  item.addEventListener('mouseleave', () => {
    submenu.classList.add('hidden')
    document.body.classList.remove('menu-hovered')
  })
}

const calcSubmenuWidth = (submenu) => {
  const headerWidth = document.querySelector('.header').offsetWidth
  const containerWidth = document.querySelector('.header__inner').offsetWidth
  const actionsWidth = document.querySelector('.header__actions').offsetWidth
  const logoWidth = document.querySelector('.header__logo').offsetWidth
  const menuWidth = document.querySelector('.header__menu').offsetWidth
  const submenuWidth = headerWidth - ((headerWidth - containerWidth) / 2) - ((containerWidth - menuWidth - actionsWidth - logoWidth) / 2) - logoWidth

  submenu.style.maxWidth = `${submenuWidth}px`
  submenu.style.width = `${submenuWidth}px`
}

// FOOTER DROPDOWN
const footerItems = document.querySelectorAll('.footer__menu-item:has(.footer__submenu-list)')
for (const item of footerItems) {
  const submenu = item.querySelector('.footer__submenu-list')
  const dropdownIcon = item.querySelector('svg');

  item.addEventListener('mouseover', () => {
    dropdownIcon.classList.add('rotate-180')
    submenu.classList.remove('hidden')
  })
  item.addEventListener('mouseleave', () => {
    dropdownIcon.classList.remove('rotate-180')
    submenu.classList.add('hidden')
  })
}

// ВЫЧИСЛЕНИЕ ОТСТУПА MAIN
window.addEventListener('load', updateMainMargin);
window.addEventListener('resize', updateMainMargin);
function updateMainMargin() {
  // dropdownMenuElement.classList.add('mobile-hidden')
  // dropdownCloseButton.classList.add('hide')
  // dropdownOpenButton.classList.remove('hide')
  const headerHeight = document.querySelector('header').offsetHeight;
  const paddingHeight = headerHeight
  document.querySelector('main').style.paddingTop = `${paddingHeight}px`;
}

// РАСКРАШИВАНИЕ ЗВЕЗД РЕЙТИНГА
const reviewsRatings = document.querySelectorAll('.reviews__card-rating')
for (const rating of reviewsRatings) {
  const value = rating.getAttribute('data-rating')
  const stars = rating.querySelectorAll('.reviews__card-star')

  for (const star of stars) {
    const starNumber = star.getAttribute('data-star')
    const path = star.querySelector('path')

    if (value >= starNumber) {
      path.style.fill = "#F9F9FC"
    }
  }
}

// ВЫПАДАЮЩЕЕ МЕНЮ КРЕДИТНОЙ КАРТЫ
const creditsCardMenuButtons = document.querySelectorAll('.credits-card__button--menu')
creditsCardMenuButtons.forEach((button) => button.addEventListener('focus', () => button.nextElementSibling.classList.remove('hidden')))
creditsCardMenuButtons.forEach((button) => button.addEventListener('blur', () => button.nextElementSibling.classList.add('hidden')))

// КОПИРОВАНИЕ НОМЕРА КАРТЫ В БУФЕР
const creditsCardCopyButtons = document.querySelectorAll('.credits-card__copy')
creditsCardCopyButtons.forEach((button) => button.addEventListener('click', () => {
  const cardNumber = button.previousElementSibling.getAttribute('data-number')
  navigator.clipboard.writeText(cardNumber)
    .then(() => {
        // Уведомление о том, что номер скопирован
        alert('Номер карты скопирован'); // #TODO: изменить на другую всплывашку
    })
    .catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}))

// СКРЫТИЕ НАЧАЛА НОМЕРА КАРТЫ
const cardNumbers = document.querySelectorAll('.credits-card__number')
cardNumbers.forEach((number) => (number.textContent = `**** **** **** ${number.textContent.slice(-4)}`))

// 
