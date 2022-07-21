export function showToolTip(e) {
  let modal;
  if (e.target.classList.contains("hintIcon__BMI")) {
    modal = document.querySelector(".hintIcon__BMI .hintIcon__modal");
    modal.classList.toggle("hintIcon__modal--active");
  } else {
    modal = document.querySelector(".hintIcon__BMR .hintIcon__modal");
    modal.classList.toggle("hintIcon__modal--active");
  }
}

export function hideToolTip(e) {
  const modal = document.querySelectorAll(".hintIcon__modal");
  if (!e.target.classList.contains("hintIcon")) {
    modal.forEach((modal) => {
      modal.classList.remove("hintIcon__modal--active");
    });
  }
}
