var botaoBiodiversidade = document.getElementById("biodiversidade");
var botaoSociodiversidade = document.getElementById("sociodiversidade");

var section1Visible = false;
var section2Visible = false;

botaoBiodiversidade.addEventListener("click", function () {
    if (section1Visible) {
        var section1 = document.getElementById("section1");
        section1.classList.toggle(".active");
        section1.style.maxHeight = 0 + "px";
        botaoBiodiversidade.toggleAttribute("disabled");
         setTimeout(() =>{
            section1.style.display = "none";
            botaoBiodiversidade.toggleAttribute("disabled");
         }, 2000);
        section1Visible = false;

    } else {
        if (section2Visible) {
            var section2 = document.getElementById("section2");
            fechaSecao(section2, botaoSociodiversidade);
            setTimeout(() =>{
                section1 = document.getElementById("section1");
                abreSecao(section1, botaoBiodiversidade);
            },2000)
        }else{
            var section1 = document.getElementById("section1");
            abreSecao(section1, botaoBiodiversidade);
        }
        
      }
});

botaoSociodiversidade.addEventListener("click", function () {
    if (section2Visible) {
        var section2 = document.getElementById("section2");
        section2.classList.toggle(".active");
        section2.style.maxHeight = 0+"px";
        botaoSociodiversidade.toggleAttribute("disable");
        setTimeout(() =>{
            section2.style.display = "none";
            botaoSociodiversidade.toggleAttribute("disable");
        }, 2000);
        section2Visible = false;
    } else {
        if (section1Visible) {
            var section1 = document.getElementById("section1");
            fechaSecao(section1, botaoBiodiversidade);
            setTimeout(() =>{
                var section2 = document.getElementById("section2");
                abreSecao(section2, botaoSociodiversidade);
            }, 2000);
        }else{
            var section2 = document.getElementById("section2");
            abreSecao(section2, botaoSociodiversidade);
        }
        
        

    }
});


function fechaSecao(params, botao) {
 
    params.classList.toggle(".active");
    params.style.maxHeight = 0+"px";
    botaoBiodiversidade.toggleAttribute("disable");
    setTimeout(() =>{
        params.style.display = "none";
        botaoBiodiversidade.toggleAttribute("disable");
    }, 2000)
    if (params.classList.contains("secao-biodiversidade")) {
        section1Visible = false;  
    } else{
        section2Visible = false;
    }
}

function abreSecao(params, botao) {
    params.classList.toggle(".active");
    params.style.display = "block";
    params.style.maxHeight = params.scrollHeight+"px";
    botao.toggleAttribute("disable");
    setTimeout(() => {
        botao.toggleAttribute("disable");
    }, 2000)
    if (params.classList.contains("secao-biodiversidade")) {
        section1Visible = true;  
    } else{
        section2Visible = true;
    }
}