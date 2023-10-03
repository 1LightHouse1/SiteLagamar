var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Fecha todas as seções abertas
    var panels = document.getElementsByClassName("panel");
    for (var j = 0; j < panels.length; j++) {
      panels[j].style.maxHeight = null;
    }

    // Abre ou fecha a seção clicada
    var panel = this.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
  });
}