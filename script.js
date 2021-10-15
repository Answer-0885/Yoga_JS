window.addEventListener('DOMContentLoaded', function () {

  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  } // Здесь скрываем всё содержимое 4х Табов 

  hideTabContent(1); // и оставляем содержимое только первого Таба.

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  } // здесь мы проверяем если у нас всё скрыто т.е. есть класс hide, то мы убираем этот класс и добавляем класс show т.е. делаем наш контент видимым.

  info.addEventListener('click', function (event) { // здесь в зависимости от нажатого таба мы скрываем всё лишнее и оставляем только тот content, который соответствует нажатому Табу.
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break; // останавливает цикл.
        }
      }
    }

  });
});
// это событие срабатывает тогда, когда полностью загрузилась DOM структура нашего документа. Но некоторые картинки могли ещё не догрузиться.