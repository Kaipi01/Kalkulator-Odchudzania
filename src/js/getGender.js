const radioBtnFemale = document.querySelector("#female");
const radioBtnMale = document.querySelector("#male");

let gender;

export function getGender(btn) {
  if (btn.id === "female") {
    radioBtnFemale.classList.add("radioBtn--active");
    radioBtnMale.classList.remove("radioBtn--active");
    gender = "female";
  } else {
    radioBtnMale.classList.add("radioBtn--active");
    radioBtnFemale.classList.remove("radioBtn--active");
    gender = "male";
  }
}

export { gender };
