const leftArrow = document.querySelector(".fa-chevron-left");
const rightArrow = document.querySelector(".fa-chevron-right");
const image0 = document.getElementById("image-0");
const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");
const image4 = document.getElementById("image-4");
const imgArr = [image0, image1, image2, image3, image4];

const images = document.querySelectorAll(".image");

const circle = document.querySelector(".img-circles");
const circle0 = document.querySelector(".circle-zero");
const circle1 = document.querySelector(".circle-one");
const circle2 = document.querySelector(".circle-two");
const circle3 = document.querySelector(".circle-three");
const circle4 = document.querySelector(".circle-four");

const circles = document.querySelectorAll(".circle");
console.log(circle);

let i = 0;

rightArrow.addEventListener("click", () => {
  next();
});

leftArrow.addEventListener("click", () => {
  previous();
});

circle.addEventListener("click", (e) => {
  slideshowCircle(e.target.classList);
});

function slideshowCircle(e) {
  if (e.contains("circle-zero")) {
    console.log("zero");

    circles.forEach((circle) => {
      circle.classList.remove("fill");
    });
    e.add("fill");

    images.forEach((image) => {
      image.classList.add("hidden-img");
      image0.classList.remove("hidden-img");
    });
  }

  if (e.contains("circle-one")) {
    console.log("one");

    circles.forEach((circle) => {
      circle.classList.remove("fill");
    });
    e.add("fill");

    images.forEach((image) => {
      image.classList.add("hidden-img");
      image1.classList.remove("hidden-img");
    });
  }
  if (e.contains("circle-two")) {
    console.log("two");

    circles.forEach((circle) => {
      circle.classList.remove("fill");
    });
    e.add("fill");

    images.forEach((image) => {
      image.classList.add("hidden-img");
      image2.classList.remove("hidden-img");
    });
  }
  if (e.contains("circle-three")) {
    console.log("three");

    circles.forEach((circle) => {
      circle.classList.remove("fill");
    });
    e.add("fill");

    images.forEach((image) => {
      image.classList.add("hidden-img");
      image3.classList.remove("hidden-img");
    });
  }
  if (e.contains("circle-four")) {
    console.log("four");

    circles.forEach((circle) => {
      circle.classList.remove("fill");
    });
    e.add("fill");

    images.forEach((image) => {
      image.classList.add("hidden-img");
      image4.classList.remove("hidden-img");
    });
  } else {
    return;
  }
}

function next() {
  switch (i) {
    case 0:
      image0.classList.add("hidden-img");
      image1.classList.remove("hidden-img");
      circles.forEach((circle) => {
        circle.classList.remove("fill");
      });
      circle1.classList.add("fill");
      break;

    case 1:
      image1.classList.add("hidden-img");
      image2.classList.remove("hidden-img");
      circles.forEach((circle) => {
        circle.classList.remove("fill");
      });
      circle2.classList.add("fill");
      break;

    case 2:
      image2.classList.add("hidden-img");
      image3.classList.remove("hidden-img");
      circles.forEach((circle) => {
        circle.classList.remove("fill");
      });
      circle3.classList.add("fill");
      break;

    case 3:
      image3.classList.add("hidden-img");
      image4.classList.remove("hidden-img");
      circles.forEach((circle) => {
        circle.classList.remove("fill");
      });
      circle4.classList.add("fill");
      break;

    case 4:
      image4.classList.add("hidden-img");
      image0.classList.remove("hidden-img");
      circles.forEach((circle) => {
        circle.classList.remove("fill");
      });
      circle0.classList.add("fill");
      break;

    default:
      return;
  }
  i++;
  if (i > 4) {
    i = 0;
  }
}

function previous() {
  switch (i) {
    case 0:
      image0.classList.add("hidden-img");
      image4.classList.remove("hidden-img");
      circles.forEach((circle) => {
        circle.classList.remove("fill");
      });
      circle4.classList.add("fill");
      break;

    case 4:
      image4.classList.add("hidden-img");
      image3.classList.remove("hidden-img");
      circles.forEach((circle) => {
        circle.classList.remove("fill");
      });
      circle3.classList.add("fill");
      break;

    case 3:
      image3.classList.add("hidden-img");
      image2.classList.remove("hidden-img");
      circles.forEach((circle) => {
        circle.classList.remove("fill");
      });
      circle2.classList.add("fill");
      break;

    case 2:
      image2.classList.add("hidden-img");
      image1.classList.remove("hidden-img");
      circles.forEach((circle) => {
        circle.classList.remove("fill");
      });
      circle1.classList.add("fill");
      break;

    case 1:
      image1.classList.add("hidden-img");
      image0.classList.remove("hidden-img");
      circles.forEach((circle) => {
        circle.classList.remove("fill");
      });
      circle0.classList.add("fill");
      break;

    default:
      return;
  }
  i--;
  if (i < 0) {
    i = 4;
    image0.classList.add("hidden-img");
    image4.classList.remove("hidden-img");

    circles.forEach((circle) => {
      circle.classList.remove("fill");
    });
    circle4.classList.add("fill");
  }
  console.log(i);
}
