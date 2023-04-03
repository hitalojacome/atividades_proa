function modo_escuro(){
    document.getElementById("fundo").style.backgroundColor = "#000";
    document.getElementById("fundo").style.color = "#ACACAC";
    document.getElementById("myImage").src = "imagens/corinthians.jpg"
}
function modo_daltonico(){
    document.getElementById("fundo").style.backgroundColor = "#f5246f";
    document.getElementById("fundo").style.color = "#28f5ac";
    document.getElementById("myImage").src = "imagens/daltonismo.jpg"
}
function modo_normal(){
    document.getElementById("fundo").style.backgroundColor = "#fff";
    document.getElementById("fundo").style.color = "#000";
    document.getElementById("myImage").src = "imagens/estrada.jpg"
}
function modo_baixa_visao(){
    document.getElementById("fundo").style.backgroundColor = "#fff";
    document.getElementById("fundo").style.color = "#000";
    document.getElementById("myImage").src = "imagens/estrada.jpg"
    document.getElementById("titulo").style.fontSize = "60px"
    document.getElementById("paragrafo").style.fontSize = "40px"
}
function modo_visao(){
    document.getElementById("fundo").style.backgroundColor = "#fff";
    document.getElementById("fundo").style.color = "#000";
    document.getElementById("myImage").src = "imagens/estrada.jpg"
    document.getElementById("titulo").style.fontSize = "30px"
    document.getElementById("paragrafo").style.fontSize = "20px"
}