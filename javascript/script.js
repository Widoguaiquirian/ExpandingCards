"use strict";
const boxes = document.querySelectorAll(".container__box");

boxes.forEach(function (box) {
   box.addEventListener("mouseover", function () {
      removeActive();
      box.classList.toggle("active");
   });
});

const removeActive = function () {
   boxes.forEach(function (box) {
      box.classList.remove("active");
   });
};
