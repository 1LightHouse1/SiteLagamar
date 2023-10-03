function toggleSection(sectionNumber) {
    var section = document.querySelector(".secao-caminhos #section" + sectionNumber);
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  }