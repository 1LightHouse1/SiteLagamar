let botao = document.querySelectorAll('.btn-accordion');
let secaoBio = document.querySelector('.secao-biodiversidade');
let secaoSocio = document.querySelector('.secao-sociodiversidade');

botao.forEach((element)=>{
    element.addEventListener('click',()=>{
        var botoes = document.getElementsByClassName('btn-accordion');
        if (!element.classList.contains('active')) {
            for (let index = 0; index < botoes.length; index++) {
                if (botoes[index].classList.contains('active')) {
                    botoes[index].classList.toggle('active');
                }
            }
            element.classList.toggle('active');
        } else element.classList.toggle('active');
        
        
        switch (element.id) {
            case "sociodiversidade":
                // Tentando fazer com que uma feche a outra
                if (secaoBio.style.height != '0px') {
                    secaoBio.style.height = 0+'px';
                }
                if(element.classList.contains('active')){
                    secaoSocio.style.height = secaoBio.scrollHeight+'px';
                }else{
                    secaoSocio.style.height = 0+'px';
                }
                break;
            case "biodiversidade":
                if (secaoSocio.style.height != '0px') {
                    secaoSocio.style.height = 0+'px';
                }

                if(element.classList.contains('active')){
                    secaoBio.style.height = secaoBio.scrollHeight+'px';
                }else{
                    secaoBio.style.height = 0+'px';
                }
            break;
            default:
                break;
        }

    })
})