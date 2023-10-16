let botao = document.querySelectorAll('.btn-accordion');
let secaoBio = document.querySelector('.secao-biodiversidade');
let secaoSocio = document.querySelector('.secao-sociodiversidade');

botao.forEach((element)=>{


    // if (element.classList.contains('active')) element.classList.toggle('active');

    element.addEventListener('click',()=>{
        element.classList.toggle('active');
        switch (element.id) {
            case "sociodiversidade":
                // Tentando fazer com que uma feche a outra
                // if (secaoBio.style.height != '0px') {
                //     secaoBio.style.height = 0+'px';
                    
                // }
                if(element.classList.contains('active')){
                    secaoSocio.style.height = secaoBio.scrollHeight+'px';
                }else{
                    secaoSocio.style.height = 0+'px';
                }
                break;
            case "biodiversidade":
                // if (secaoSocio.style.height != '0px') {
                //     secaoSocio.style.height = 0+'px';
                // }

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

