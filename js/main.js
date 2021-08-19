$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path"); // выбираем все этажи
  var counterUp = $(".counter-up"); // кнопка вверх
  var counterDown = $(".counter-down"); // кнопка вниз

  floorPath.on("mouseover", function () {
    // подсвечиваем этаж при наведении
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });
  counterUp.on("click", function () {
    // прибавляем этаж по нажатию на кнопку вверх
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  counterDown.on("click", function () {
    // прибавляем этаж по нажатию на кнопку вниз
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
});
