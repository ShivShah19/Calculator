function del() {
  var inputElement = document.querySelector("input");
  var value = inputElement.value;
  console.log(value);
  inputElement.value = value.toString().slice(0, -1);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    result();
  }
});

function result() {
  var result = eval(document.querySelector("input").value);
  document.querySelector("input").value = result;
}
