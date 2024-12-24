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
