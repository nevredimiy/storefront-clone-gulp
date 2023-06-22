import { isTouchDevice } from '../js/functions/touch-or-desktop';


if (isTouchDevice()) {
  const menuItemHasChildrens = document.querySelectorAll('.menu-item-has-children');
  if(menuItemHasChildrens.length > 0 ){
    menuItemHasChildrens.forEach(menuItem => {

      menuItem.addEventListener('click', () => {
        if (!menuItem.classList.contains('_active')) {
          menuItemHasChildrens.forEach(item => {
            if (item.classList.contains('_active')) {
              item.classList.remove('_active');
            }
          });
          menuItem.classList.add('_active');
        } else {
          menuItem.classList.remove('_active');
        }
        menuItem.querySelector('.menu-item-has-children__icon').classList.toggle('rotate-180');
      });
      // hide the menu when a click event occurs outside the menu
      document.addEventListener('click', (event) => {
        if (!menuItem.contains(event.target)) {
          menuItem.classList.remove('_active');
        }
      });
    });
  }

  const carts = document.querySelectorAll('[data-cart]');
  if (carts.length > 0) {
    carts.forEach(cart => {
      cart.addEventListener('click', () => {
        cart.classList.toggle('_active');
      });
      // hide the menu when a click event occurs outside the menu
      document.addEventListener('click', (event) => {
        if (!cart.contains(event.target)) {
          cart.classList.remove('_active');
        }
      });
    });
  }
}
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);


//Orbit
  const bgColorClass = [
    'aquamarine',
    'bisque',
    'burlywood',
    'cornflowerblue',
    'darkkhaki',
    'darksalmon',
    'lightcoral',
    'aquamarine',
    'bisque',
    'burlywood',
    'cornflowerblue',
    'darkkhaki',
    'darksalmon',
    'lightcoral',
    'aquamarine',
    'bisque',
    'burlywood',
    'cornflowerblue',
    'darkkhaki',
    'darksalmon',
    'lightcoral'
  ];

const orbitLists = document.querySelectorAll('[data-orbit]');

if (orbitLists.length > 0) {
  orbitLists.forEach(orbitList => {

    let itemsOrbit = orbitList.querySelectorAll(':scope > *'); //select all li insert ul

    for (let i = 0; i < itemsOrbit.length; i++) {
      let deg = 360 / itemsOrbit.length * i;
      itemsOrbit[i].style.transform = `rotate(${deg}deg)`;
      itemsOrbit[i].querySelector(':scope > a').style.transform = `rotate(${-deg}deg)`;
      itemsOrbit[i].querySelector(':scope > a').style.backgroundColor = bgColorClass[i];
    }
  });
}




