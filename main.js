const url = "https://flagsapi.com/IN/flat/64.png";
let select = document.querySelectorAll("option");
let option = document.querySelectorAll(".select");
let img = document.querySelectorAll("img");

for (const ad of option) {
  for (const op in countryList) {
    let newop = document.createElement("option");
    newop.value = op;
    newop.innerText = countryList[op];
    ad.appendChild(newop);
  }
}
