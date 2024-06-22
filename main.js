const url = "https://flagsapi.com/IN/flat/64.png";
let option = document.querySelectorAll(".select");

for (const ad of option) {
  for (const op in countryList) {
    let newop = document.createElement("option");
    // console.log(op);
    newop.value = op;
    newop.innerText = countryList[op];
    ad.appendChild(newop);
  }
}
