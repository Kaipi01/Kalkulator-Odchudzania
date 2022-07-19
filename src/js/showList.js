export function showList() {
  const selectList = document.querySelector(".select__list");
  const selectListItem = document.querySelector(".select__listItem");
  selectList.classList.toggle("select__list--active");

  selectListItem.forEach((item) => {
    item.addEventListener("click", () => {
      select.textContent = item.textContent;
    });
  });
  selectListItem.forEach((item) => {
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        select.textContent = item.textContent;
      }
    });
  });
  window.addEventListener("click", (e) => {
    closeList(e);
  });
  window.addEventListener("touch", (e) => {
    closeList(e);
  });
  select.addEventListener("keydown", (e) => {
    if (e.key === "Enter") closeList();
  });

  // hide select list
  function closeList(e) {
    console.log(e);
    if (!e.target.classList.contains("select__list")) {
      selectList.classList.remove("select__list--active");
    }
  }
}
