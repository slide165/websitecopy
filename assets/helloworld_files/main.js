/**
 * use an immediately invoked function expression (IIFE) to create variable scope
 * this way, the variables won't affect the surrounding code outside the IIFE
 *
 * it's now safe to omit semicolons, not sure how I feel about it yet
 */

(function () {

  var navParent = document.querySelector('ul')
  var navItems = document.querySelectorAll('li a')

  var open = false
  var contactBar = document.getElementById('contact-bar')
  var contactNavItem = document.querySelector("nav [href='#contact']")

  navParent.addEventListener('click', setActiveColor, false)
  contactNavItem.addEventListener('click', showHideContactBar, false)

  function setActiveColor(e) {
    if (e.target !== e.currentTarget) {

    for (i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('active')
    }

    e.target.classList.add('active')

    }

    e.stopPropagation()
  }

  function showHideContactBar() {
    if (!open) {
      openNav()
    } else {
      closeNav()
    }
  }

  function openNav() {
    open = true
    contactBar.classList.remove('hide-contact-bar')
    contactBar.classList.add('show-contact-bar')
  }

  function closeNav() {
    open = false
    contactBar.classList.remove ('show-contact-bar')
    contactBar.classList.add('hide-contact-bar')
  }
})()
