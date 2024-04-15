let nextBut = document.getElementById("next");
let prevBut = document.getElementById("prev");
let sliderDiv = document.querySelector(".large-slider");
let listDiv = document.querySelector(".large-slider .list");
let thumbnailDiv = document.querySelector(".large-slider .thumbnail");

let itemSlider = document.querySelectorAll(".large-slider .list .item");
let itemThumbnail = document.querySelectorAll(".large-slider .thumbnail .item");

nextBut.onclick = function () {
  showSlider("next");
};

prevBut.onclick = function () {
  showSlider("prev");
};

let timeRunning = 1000;
let runTimeOut;
function showSlider(type) {
  let itemSlider = document.querySelectorAll(".large-slider .list .item");
  let itemThumbnail = document.querySelectorAll(
    ".large-slider .thumbnail .item"
  );

  if (type == "next") {
    listDiv.appendChild(itemSlider[0]);
    thumbnailDiv.appendChild(itemThumbnail[0]);
    sliderDiv.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listDiv.prepend(itemSlider[positionLastItem]);
    thumbnailDiv.prepend(itemThumbnail[positionLastItem]);
    sliderDiv.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    sliderDiv.classList.remove("next");
    sliderDiv.classList.remove("prev");
  }, timeRunning);
}
