var buttons = document.querySelectorAll(".accordion");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var target = this.getAttribute("data-target");
    var targetSection = document.getElementById(target);

    if (targetSection.classList.contains("active")) {
      // Rola suavemente para cima quando a seção é fechada
      targetSection.style.maxHeight = "0";
      setTimeout(function() {
        targetSection.classList.remove("active");
      }, 500); // Tempo de espera para a conclusão da animação
    } else {
      var sections = document.querySelectorAll(".secao-caminhos .panel");
      sections.forEach(function(section) {
        section.style.maxHeight = "0";
        section.classList.remove("active");
      });

      // Rola suavemente para baixo quando a seção é aberta
      targetSection.style.maxHeight = targetSection.scrollHeight + "px";
      targetSection.classList.add("active");

      var offsetTop = targetSection.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  });
});