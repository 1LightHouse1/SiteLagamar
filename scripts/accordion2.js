let botao = document.querySelectorAll('.btn-accordion');
let secaoBio = document.querySelector('.secao-biodiversidade');
let secaoSocio = document.querySelector('.secao-sociodiversidade');

botao.forEach((element)=>{
    element.addEventListener('click',()=>{
        element.classList.toggle('active');
        if(element.classList.contains('active')){
            secaoBio.style.height = secaoBio.scrollHeight+'px';
        }else{
            secaoBio.style.height = 0+'px';
        }
    })
})

