let allItems = document.querySelectorAll(".li-list");

let Text = document.querySelectorAll(".text");
let Indicator = document.querySelector(".indicator");

allItems.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    for (const index of allItems) {
      index.classList.remove("active");
    }

    for (const text of Text) {
      text.style.opacity = "0";
    }

    Indicator.style.transform = `translateX(calc(70px * ${index}))`;
    item.classList.add("active");
    item.childNodes[0].nextSibling.childNodes[2].nextSibling.style.opacity =
      "1";

  });
});
