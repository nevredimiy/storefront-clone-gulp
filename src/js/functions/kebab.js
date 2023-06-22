const kebab = document?.querySelector('[data-kebab]');
const menu = document?.querySelector('[data-menu]');
const body = document?.querySelector('body');
const header = document.querySelector('header');
const menuActive = document?.querySelector('.menu-active');


const headerHeight = header.offsetHeight;
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

(function () {
  kebab?.addEventListener('click', () => {
    body.style.overflow = "hidden";
    kebab?.classList.toggle('kebab--active');
    menu?.classList.toggle('menu--active');
    // if (menu.classList.contains('menu--active')) {
    //   bgDropCreate();
    // } else {
    //   document?.querySelector('.bg-drop').remove();
    // }

  });
})();


//====================dropdown menu========================
const menuItems = document.querySelectorAll('.menu__item'); //Массив li верхнее уровня

//функция закрывает все открытыте подменю
const closeAllDrobdowns = () => {
  let dropdowns = document?.querySelectorAll('.show-dropmenu');
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('show-dropmenu');
  });
};

menuItems.forEach(item => {                     //перебираем все li верхнего уровня
  item.addEventListener('click', () => {        //отслеживаем событие клик на li
    let dropdown = item.querySelector('.dropdown');       //подменю, которое находиться внутри li, на которого кликнули (ul.dropdown)
    let iconLink = item.querySelector('[data-dropdownicon]'); //иконка стрелочка или шеврон (svg.[data-dropdownicon])
    if (iconLink) {
      iconLink.classList.toggle('open-menu'); //клас для анимации или изменения положения
    }

    if (!dropdown) { closeAllDrobdowns(); return; } //если у li, на которое кликнули, нет подменю, то закрываем все открытие подменю и завершаем цикл
    if (dropdown.classList.contains('show-dropmenu')) {  //проверяем на наличии класа у подменю
        dropdown.classList.remove('show-dropmenu');
    } else {
      closeAllDrobdowns();
      dropdown.classList.add('show-dropmenu');
    }
  });
});

//создание подложки под мобильное меню.
function bgDropCreate() {
  let bgDrop = document.createElement('div');
  bgDrop.classList.add('bg-drop');
  header.append(bgDrop);
}
