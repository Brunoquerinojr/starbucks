//Fazer esta função 2° (Ela troca a imagem do sorvete grande)
function imgSlider(anything) {
   document.querySelector('.starbucks').src = anything;
}

//Fazer esta 3° (Ela troca a cor do círculo)
function changeCircleColor(color){
    const circulo = document.querySelector('.circulo');
    circulo.style.background = color;
}

//Fazer esta função 1° (Ela altera o estado Ativo/Desativo)
function toggleMenu() {
    var menuToogle = document.querySelector(".toggle"); //cria uma variavel e usa o DOM para selecionar a classe (toggle)
    var links = document.querySelector(".links"); //Cria uma variavel e usa o DOM para selecionar a classe (.links)
    menuToogle.classList.toggle('active') //Troca o estado da classe (.toggle) para ativo
    links.classList.toggle('active') //Troca o estado da classe (.links) para ativo 
}