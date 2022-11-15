function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let col = "#";
    for (let index = 0; index < 6; index++) {
        col+=letters[Math.floor(Math.random()*16)];
    }
    return col;
}

function clickFun(){
    let col = getRandomColor();
    document.querySelector("#canvas").style.backgroundColor=col;
}

document.querySelector("#button").addEventListener("click",clickFun);