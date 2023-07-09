document.addEventListener("DOMContentLoaded", function () {
/*
**
*/
  const header = document.querySelector('header');
  let headerHeight = header.offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

  /*
  ** Mobile menu
  */

  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  const menuItemHasChildren = document.querySelectorAll('.menu-item-has-children');

  const toggleMenu = () => {
    if (burger.classList.contains('burger--active')) {
      menu.style.cssText = `
      visibility: visible;
    `;
    } else {
      setTimeout(() => {
        menu.style.visibility = 'hidden';
      }, 300);
    }
  };

  burger.addEventListener('click', toggleMenu);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.style.visibility = '';
    } else {
      headerHeight = header.offsetHeight;
      document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`); //Для того, что бы высота data-menu появлялвсь на правильной высоте. Например, моб из альбомного в книжный, где высота шапки разная.
    }
  });

  const menuItemHasChildrens = document.querySelectorAll('.menu-item-has-children');
  if (menuItemHasChildrens.length > 0) {
    menuItemHasChildrens.forEach(menuItem => {
      let iconChevron = menuItem.querySelector('.menu-item-has-children__icon');
      menuItem.addEventListener('click', () => {
        if (!menuItem.classList.contains('_active')) {
          menuItemHasChildrens.forEach(item => {
            if (item.classList.contains('_active')) {
              item.classList.remove('_active');
              iconChevron.classList.remove('rotate-180');
              menuItem.style.backgroundColor = '';
            }
          });
          menuItem.classList.add('_active');
          iconChevron.classList.add('rotate-180');
          menuItem.style.backgroundColor = '#D9D3C7';
        } else {
          menuItem.classList.remove('_active');
          iconChevron.classList.remove('rotate-180');
          menuItem.style.backgroundColor = '';
        }
      });
      // hide the menu when a click event occurs outside the menu
      document.addEventListener('click', (event) => {
        if (!menuItem.contains(event.target)) {
          menuItem.classList.remove('_active');
          iconChevron.classList.remove('rotate-180');
          menuItem.style.backgroundColor = '';
        }
      });

      //hover effect for device wich width more 768 px
      menuItem.addEventListener("mouseenter", () => {
        if (!menuItem.classList.contains('menu-item-has-children__hover')) {
          menuItemHasChildrens.forEach(item => {
            if (item.classList.contains('_active')) {
              item.classList.remove('_active');
              iconChevron.classList.remove('rotate-180');
              menuItem.style.backgroundColor = '';
            }
          });
          menuItem.classList.add('menu-item-has-children__hover');
          iconChevron.classList.add('rotate-180');
          menuItem.style.backgroundColor = '#D9D3C7';
        }
      });
      menuItem.addEventListener("mouseleave", () => {
        menuItemHasChildrens.forEach(item => {
          if (item.classList.contains('_active')) {
            item.classList.remove('_active');
            iconChevron.classList.remove('rotate-180');
            menuItem.style.backgroundColor = '';
          }
          if (item.classList.contains('menu-item-has-children__hover')) {
            item.classList.remove('menu-item-has-children__hover');
            iconChevron.classList.remove('rotate-180');
            menuItem.style.backgroundColor = '';
          }
        });
      });
    });
  }


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
        let sec = deg / 200;
        itemsOrbit[i].style.transitionDelay = `${sec}s`;
        itemsOrbit[i].style.transform = `rotate(${deg}deg)`;
        itemsOrbit[i].querySelector(':scope > a').style.transform = `rotate(${-deg}deg)`;
        itemsOrbit[i].querySelector(':scope > a').style.backgroundColor = bgColorClass[i];
      }
    });
  }


  //Плавное появление текста при скролле - когда блок находиться в зоне видимости, то кнему применяеться определенный класс
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }

  let options = {
    threshold: [0.5]
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');

  for (let elm of elements) {
    observer.observe(elm);
  }

});
