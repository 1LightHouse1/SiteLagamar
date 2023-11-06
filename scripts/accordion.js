

var section1Visible = false;
var section2Visible = false;

document.getElementById("biodiversidade").addEventListener("click", function () {
    if (section1Visible) {
        var section1 =document.getElementById("section1");
        section1.classList.toggle(".active");
        section1.style.maxHeight = 0 + "px";
        setTimeout(() =>{
            section1.style.display = "none";
        }, 2000);
        section1Visible = false;

    } else {
        if (section2Visible) {
            var section2 = document.getElementById("section2");
            fechaSecao(section2);
            setTimeout(() =>{
                section1 = document.getElementById("section1");
                abreSecao(section1);
            },2000)
        }else{
            var section1 = document.getElementById("section1");
            abreSecao(section1);
        }
        
      }
});

document.getElementById("sociodiversidade").addEventListener("click", function () {
    if (section2Visible) {
        var section2 = document.getElementById("section2");
        section2.classList.toggle(".active");
        section2.style.maxHeight = 0+"px";
        setTimeout(() =>{
            section2.style.display = "none";
        }, 2000);
        section2Visible = false;
    } else {
        if (section1Visible) {
            var section1 =document.getElementById("section1");
            fechaSecao(section1);
            setTimeout(() =>{
                var section2 = document.getElementById("section2");
                abreSecao(section2);
            }, 2000);
        }else{
            var section2 = document.getElementById("section2");
            abreSecao(section2);
        }
        
        

    }
});


function fechaSecao(params) {
 
    params.classList.toggle(".active");
    params.style.maxHeight = 0+"px";
    setTimeout(() =>{
        params.style.display = "none";
    }, 2000)
    if (params.classList.contains("secao-biodiversidade")) {
        section1Visible = false;  
    } else{
        section2Visible = false;
    }
}

function abreSecao(params) {
    params.classList.toggle(".active");
    params.style.display = "block";
    params.style.maxHeight = params.scrollHeight+"px";
    if (params.classList.contains("secao-biodiversidade")) {
        section1Visible = true;  
    } else{
        section2Visible = true;
    }
}