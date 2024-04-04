const mainFunc = () => {
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
  const updateButton = () => {
    if (currentSlide <= 0) {
      btnLeft.style.color = "white";
      btnRigth.style.color = "black";
    } else if (currentSlide >= slides.length - 1) {
      btnRigth.style.color = "white";
      btnLeft.style.color = "black";
    } else {
      btnRigth.style.color = "black";
      btnLeft.style.color = "black";
    }
  };
  const updateState = () => {
    updateButton();
    activeThumbnail();
  };
  thumbnail.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentSlide = index;
      listImg.style.transform = `translateX(-${index * 700}px)`;

      updateState();
    });
  });
  btnRigth.addEventListener("click", () => {
    if (currentSlide >= 3) {
      return;
    } else {
      currentSlide = currentSlide + 1;
      listImg.style.transform = `translateX(-${currentSlide * 700}px)`;

      updateState();
    }
  });

  btnLeft.addEventListener("click", () => {
    if (currentSlide <= 0) {
      return;
    } else {
      currentSlide = currentSlide - 1;

      listImg.style.transform = `translateX(-${currentSlide * 700}px)`;

      updateState();
    }
  });
};
mainFunc();
