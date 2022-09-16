let theme = localStorage.getItem("theme");
if (theme === "dark") document.body.classList.add("dark");
else setBodyTheme("light");

export default function changeTheme() {
  if (theme === "dark") {
    setBodyTheme("light");
    theme = "light";
  } else {
    setBodyTheme("dark");
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
}

function setBodyTheme(theme) {
  document.body.className = "";
  document.body.classList.add(theme);
}