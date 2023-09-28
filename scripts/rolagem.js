$("#botao-comecar").click(function() {
    $('html, body').animate({
      scrollTop: $("secao-apresentacao").offset().top
    }, 2000);
  });