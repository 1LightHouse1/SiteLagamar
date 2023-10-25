var section1Visible = false;
var section2Visible = false;

document.getElementById("biodiversidade").addEventListener("click", function () {
    if (section1Visible) {
        var section1 =document.getElementById("section1");
        section1.classList.toggle(".active");
        section1.style.maxHeight = 0 + "px";
        setTimeout(() =>{
            section1.style.display = "none";
        }, 2000)
        section1Visible = false;

    } else {
        var section1 = document.getElementById("section1");
        section1.classList.toggle(".active");
        section1.style.display = "block";
        section1.style.maxHeight = section1.scrollHeight+"px";
        section1Visible = true;
        
      }
});

document.getElementById("sociodiversidade").addEventListener("click", function () {
    if (section2Visible) {
        var section2 = document.getElementById("section2");
        section2.classList.toggle(".active");
        section2.style.maxHeight = 0+"px";
        setTimeout(() =>{
            section2.style.display = "none";
        }, 2000)
        section2Visible = false;
    } else {
        var section2 = document.getElementById("section2");
        section2.classList.toggle(".active");
        section2.style.display = "block";
        section2.style.maxHeight = section2.scrollHeight+"px";
        section2Visible = true;
        
        

    }
});