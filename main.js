
function newColor(){
    var code ="0123456789ABCDEF";
    var color = "#";


    for(var i=0;i<6;i++)
    {
        color = color + code[Math.floor(Math.random()*16)];
    }
    document.body.style.background = color;
    document.querySelector("#hex").innerHTML = color;
}