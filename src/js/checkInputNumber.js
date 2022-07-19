export function checkInputNumber(e) {
  if (e.target.value < 1) {
    e.target.value = 1;
  } else {
    if (e.target.name === "age") {
      if (e.target.value > 199) e.target.value = 199;
    } else if (e.target.value > 999) e.target.value = 999;
  }
}
