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


  // Таймер
  let deadLine = '2021-11-06'; // дата до которой будет идти отсчёт

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()); // t - это переменная, которая является разницей между конечной датой и текущего времени.
    let seconds = Math.floor((t / 1000) % 60), //округляем до целых чисел.
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);

      function addZero(num) {
        if (num <= 9) {
          return '0' + num;
        } else return num;
      };

      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }

  }

  setClock('timer', deadLine);

});
// это событие срабатывает тогда, когда полностью загрузилась DOM структура нашего документа. Но некоторые картинки могли ещё не догрузиться.