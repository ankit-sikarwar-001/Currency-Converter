const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
  for (const currcode in countryList) {
    let newop = document.createElement("option");
    newop.innerText = currcode;
    newop.value = currcode;
    if (select.name == "from" && newop.value == "USD") {
      newop.selected = "selected";
    } else if (select.name == "to" && newop.value == "INR") {
      newop.selected = "selected";
    }
    select.appendChild(newop);
    select.addEventListener("change", (element) => {
      let elem = select.parentElement.querySelector("img");
      updateflag(element.target, elem);
    });
  }
}
let updateflag = (evt, img) => {
  let currcode = countryList[evt.value];
  img.src = `https://flagsapi.com/${currcode}/flat/64.png`;
};
