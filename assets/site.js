/* =========================================================
   CONFIGURAÇÃO DO SITE — troque aqui e vale para todas as páginas
   ========================================================= */
const SITE = {
  marca: "Anderson Lucas | Materiais Digitais", // nome da marca (definitivo)
  ano: 2026,
  email: "" // e-mail de contato (opcional). Se ficar vazio, as páginas mostram só "pela Hotmart".
};

/* ---------------------------------------------------------
   Daqui para baixo não precisa mexer.
   --------------------------------------------------------- */
(function () {
  // 1) Escreve o nome da marca em todo elemento com data-marca
  document.querySelectorAll("[data-marca]").forEach(function (el) {
    el.textContent = SITE.marca;
  });
  document.querySelectorAll("[data-ano]").forEach(function (el) {
    el.textContent = SITE.ano;
  });
  document.querySelectorAll("[data-email]").forEach(function (el) {
    if (SITE.email) {
      el.innerHTML = 'Contato: <a href="mailto:' + SITE.email + '">' + SITE.email + "</a>";
    }
  });
  // Completa o título da aba com a marca ("Página | Marca")
  if (document.title.indexOf(SITE.marca) === -1) {
    document.title = document.title + " | " + SITE.marca.split("|")[0].trim();
  }

  // 2) Links: no PC (file://) precisamos de ".../index.html";
  //    no Render (https://) deixamos o endereço limpo, terminando em "/".
  if (location.protocol !== "file:") {
    document.querySelectorAll('a[href$="index.html"]').forEach(function (a) {
      var h = a.getAttribute("href");
      if (/^https?:/.test(h)) return;
      h = h.replace(/index\.html$/, "");
      a.setAttribute("href", h === "" ? "./" : h);
    });
  }
})();
