var section1Visible = false;
var section2Visible = false;

document.getElementById("biodiversidade").addEventListener("click", function () {
    if (section1Visible) {
        document.getElementById("section1").style.display = "none";
        section1Visible = false;
    } else {
        document.getElementById("section1").style.display = "block";
        section1Visible = true;
      }
});

document.getElementById("sociodiversidade").addEventListener("click", function () {
    if (section2Visible) {
        document.getElementById("section2").style.display = "none";
        section2Visible = false;
    } else {
        document.getElementById("section2").style.display = "block";
        section2Visible = true;
      }
});