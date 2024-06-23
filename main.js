const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";
let dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
let amount = document.querySelector(".amount input");
let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");
let msg = document.querySelector("#msg");

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

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amtvalue = amount.value;
  if (amtvalue < 0 || amtvalue == "") {
    amount.value = 1;
  }
  const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let read = await response.json();
  let data = read[fromcurr.value.toLowerCase()];
  // console.log(fromcurr.value.toLowerCase(), tocurr.value);
  console.log(data[tocurr.value.toLowerCase()]);
  msg.innerText = `1 ${fromcurr.value.toUpperCase()} = ${
    data[tocurr.value.toLowerCase()]
  } ${tocurr.value.toUpperCase()}`;
});
