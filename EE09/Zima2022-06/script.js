function backgroundColor(color) {
    document.getElementById("prawy").style.backgroundColor = color;
}
function fontColor() {
    let color = document.getElementById("fontColor").value;
    document.getElementById("prawy").style.color = color;
}
function fontSize() {
    document.getElementById("prawy").style.fontSize = document.getElementById("fontSize").value;
}
function imageBorder() {
    if(document.getElementById("imageBorder").checked){
        document.querySelector("#prawy img").style.border = "1px solid white";
    }else{
        document.querySelector("#prawy img").style.border = "none";
    }
}
function listStyle() {
    let shapes = document.querySelector('input[name="shape"]:checked').id;
    document.querySelector("#prawy ul").style.listStyle = shapes;
}