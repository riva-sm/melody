$(document).ready(function () {
  var currentFloor = 2; // переменная где хранится текущий этаж
  var floorPath = $(".home-image path"); // выбираем все этажи
  var counterUp = $(".counter-up"); // кнопка вверх
  var counterDown = $(".counter-down"); // кнопка вниз
  var modal = $(".modal"); // модальное окно
  var modalCloseButton = $(".modal-close-button");
  var flatsPath = $(".flats path"); // выбираем все квартиры
  var currentFlat = "1";
  var viewFlatsButton = $(".view-flats");

  floorPath.on("mouseover", function () {
    // подсвечиваем этаж при наведении
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем в счетчик справа
  });

  flatsPath.on("mouseover", function () {
    // flatsPath.removeClass("current-flat");
    currentFlat = $(this).attr("data-flat");
    console.log(currentFlat);
    // $(".flat-item").toggleClass("active");
  });

  floorPath.on("click", toggleModal); // при клике на этаж откарывается модальное окно

  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () {
    // прибавляем этаж по нажатию на кнопку вверх
    if (currentFloor < 18) {
      // проверяем значение этажа, оно не должно быть больше 18
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); // форматируем переменную с этажом, чтоб было 01, а не 1

      $(".counter").text(usCurrentFloor); // записываем значение этажа в счтетчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // прибавляем активный класс к текущему этажу
    }
  });

  counterDown.on("click", function () {
    // прибавляем этаж по нажатию на кнопку вниз
    if (currentFloor > 2) {
      // проверяем значение этажа, оно не должно быть меньше 2
      currentFloor--; // отнимаем  один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); // форматируем переменную с этажом, чтоб было 01, а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счтетчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // прибавляем активный класс к текущему этажу
    }
  });
  function toggleModal() {
    // функция открыть-закрыть модальное окно
    modal.toggleClass("is-open");
  }
});
