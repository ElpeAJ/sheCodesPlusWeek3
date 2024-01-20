function linkToAPI(event) {
  event.preventDefault();
  let cityTyped = document.querySelector("#cityTyped");
  let cityElement = document.querySelector("#city");
  let country = document.querySelector("#country");
  cityElement.innerHTML = cityTyped.value;
  country.innerHTML = cityTyped.value;
  console.log(cityTyped.value);
}
let form = document.querySelector("#form");
form.addEventListener("submit", linkToAPI);
