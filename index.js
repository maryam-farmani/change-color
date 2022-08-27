const colorInput = document.getElementById("color");
const body = document.getElementsByTagName("body")[0];
const btnColor = document.getElementById("btn");


btnColor.addEventListener("click", () => {
    body.style.backgroundColor = colorInput.value;
});


