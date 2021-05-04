function generateCat() {
  let image = document.createElement("img");
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
  let div = document.getElementById("flex-box");
  div.appendChild(image);
}