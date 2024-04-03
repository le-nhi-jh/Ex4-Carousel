let currentSlide = 0;

const slides = document.querySelectorAll(".carousel-item");
const btnLeft = document.querySelector(".btn-left");
const btnRigth = document.querySelector(".btn-right");
const listImg = document.querySelector(".list-img");
const thumbnail = document.querySelectorAll(".thumbnails-item");
const activeThumbnail = () => {
  thumbnail.forEach((item, index) => {
    if (index === currentSlide) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};
thumbnail.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentSlide = index;
    listImg.style.transform = `translateX(-${index * 700}px)`;
    if (currentSlide === 0) {
      btnLeft.style.color = "white";
      btnRigth.style.color = "black";
    } else if (currentSlide === 3) {
      btnRigth.style.color = "white";
      btnLeft.style.color = "black";
    } else {
      btnLeft.style.color = "black";
      btnRigth.style.color = "black";
    }
    activeThumbnail();
  });
});
btnRigth.addEventListener("click", () => {
  if (currentSlide >= 3) {
    return;
  } else {
    btnLeft.style.opacity = 1;
    currentSlide = currentSlide + 1;
    listImg.style.transform = `translateX(-${currentSlide * 700}px)`;
    if (currentSlide >= 3) {
      btnRigth.style.color = "white";
    }
    btnLeft.style.color = "black";
    console.log(currentSlide);
    activeThumbnail();
  }
});

btnLeft.addEventListener("click", () => {
  if (currentSlide <= 0) {
    return;
  } else {
    currentSlide = currentSlide - 1;
    btnLeft.style.opacity = 1;
    console.log(currentSlide);
    listImg.style.transform = `translateX(-${currentSlide * 700}px)`;
    if (currentSlide <= 0) {
      btnLeft.style.color = "white";
    }
    btnRigth.style.color = "black";
    activeThumbnail();
  }
});
