
let i = 0;
function changeColor() {
    let name = document.getElementById("lanre");
    let colors = ['black', 'blue', 'green', 'grey', 'brown'];
    name.style.backgroundColor = colors[i];
    i = (i +1) % colors.length;
    
}

setInterval(changeColor, 1000);