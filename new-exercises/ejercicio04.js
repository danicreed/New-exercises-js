let cubo = document.getElementById("cubo")
let imga = document.getElementById("imga")

cubo.onmouseover = function () {
cubo.style.backgroundColor = "blue"

imga.style.width = "400px"
imga.style.height = "200px"
}

cubo.onmouseout = function () {

cubo.style.backgroundColor = "white"
imga.style.width = "800px"
imga.style.height = "400px"
}