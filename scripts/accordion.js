var botaoBiodiversidade = document.getElementById("biodiversidade");
var botaoSociodiversidade = document.getElementById("sociodiversidade");

var section1Visible = false;
var section2Visible = false;
var section3Visible = false;

botaoBiodiversidade.addEventListener("click", function () {
    if (section1Visible) {
        var section1 = document.getElementById("section1");
        var section3 = document.getElementById("section3");
        section1.classList.toggle(".active");
        section3.classList.toggle(".active");
        section1.style.maxHeight = 0 + "px";
        section3.style.maxHeight = 0 + "px";

        alterarStatusBotao(botaoBiodiversidade);
         setTimeout(() =>{
            section1.style.display = "none";
            section3.style.display = "none";
            alterarStatusBotao(botaoBiodiversidade);
         }, 2000);
        section1Visible = false;
        section3Visible = false;


    } else {
        if (section2Visible) {
            var section2 = document.getElementById("section2");
            var section3 = document.getElementById("section3");
            alterarStatusBotao(botaoBiodiversidade);
            fechaSecao(section2, botaoSociodiversidade);
            fechaSecao(section3, botaoSociodiversidade);

            setTimeout(() =>{
                section1 = document.getElementById("section1");
                section3 = document.getElementById("section3");
                abreSecao(section1, botaoBiodiversidade);
                abreSecao(section3, botaoBiodiversidade);
                alterarStatusBotao(botaoBiodiversidade);

            },2000);


        }else{
            var section1 = document.getElementById("section1");
            var section3 = document.getElementById("section3");
            abreSecao(section1, botaoBiodiversidade);
            abreSecao(section3, botaoBiodiversidade);
        }
        
      }
});

botaoSociodiversidade.addEventListener("click", function () {
    if (section2Visible) {

        var section2 = document.getElementById("section2");
        var section3 = document.getElementById("section3");
        section2.classList.toggle(".active");
        section2.style.maxHeight = 0+"px";
        section3.classList.toggle(".active");
        section3.style.maxHeight = 0+"px";

        alterarStatusBotao(botaoSociodiversidade);

        setTimeout(() =>{
            section2.style.display = "none";
            section3.style.display = "none";

            alterarStatusBotao(botaoSociodiversidade);

        }, 2000);
        section2Visible = false;
        section3Visible = false;
    } else {
        if (section1Visible) {

            var section1 = document.getElementById("section1");
            var section3 = document.getElementById("section3");
            fechaSecao(section1, botaoBiodiversidade);
            fechaSecao(section3, botaoBiodiversidade);

            alterarStatusBotao(botaoSociodiversidade);

            setTimeout(() =>{
                var section2 = document.getElementById("section2");
                var section3 = document.getElementById("section3");
                abreSecao(section2, botaoSociodiversidade);
                abreSecao(section3, botaoSociodiversidade);
                alterarStatusBotao(botaoSociodiversidade);


            }, 2000);
        }else{

            var section2 = document.getElementById("section2");
            var section3 = document.getElementById("section3");
            abreSecao(section2, botaoSociodiversidade);
            abreSecao(section3, botaoSociodiversidade);
        }
        
        

    }
});


function fechaSecao(params, botao) {
 
    params.classList.toggle(".active");
    params.style.maxHeight = 0+"px";
    alterarStatusBotao(botao);
    setTimeout(() =>{
        params.style.display = "none";
        alterarStatusBotao(botao);
    }, 2000)
    if (params.classList.contains("secao-biodiversidade")) {
        section1Visible = false;  
        section3Visible = false;
    } else{
        section2Visible = false;
    }
}

function abreSecao(params, botao) {
    params.classList.toggle(".active");
    params.style.display = "block";
    params.style.maxHeight = params.scrollHeight+"px";
    alterarStatusBotao(botao);
    setTimeout(() => {
        alterarStatusBotao(botao);
    }, 2000)
    if (params.classList.contains("secao-biodiversidade")) {
        section1Visible = true;  
        section3Visible = true;
    } else{
        section2Visible = true;
    }
}

function alterarStatusBotao(botao) {
    botao.toggleAttribute("disabled");
    botao.classList.toggle("disabled");
}