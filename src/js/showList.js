export default function showList() {
  const selectList = document.querySelector(".select__list");
  const selectP = document.querySelector(".select__p");
  const selectListItem = document.querySelectorAll(".select__listItem");
  selectList.classList.toggle("select__list--active");

  selectListItem.forEach((item) => {
    item.addEventListener("click", () => {
      showListItemContentOnSelect(item)
    });
  });

  selectListItem.forEach((item) => {
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        showListItemContentOnSelect(item)
      }
    });
  });
  window.addEventListener("click", (e) => {
    closeList(e);
  });
  window.addEventListener("touch", (e) => {
    closeList(e);
  });
  selectList.addEventListener("keydown", (e) => {
    if (e.key === "Enter") closeList();
  });

  function closeList(e) {
    if (
      !e.target.classList.contains("select__p") &&
      !e.target.classList.contains("select") &&
      !e.target.classList.contains("select__icon")
    )
      selectList.classList.remove("select__list--active");
  }

  function showListItemContentOnSelect(item) {
    selectP.textContent = item.textContent;
    selectP.classList.add("select__p--active");
  }
}
