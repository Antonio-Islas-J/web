document.addEventListener("DOMContentLoaded", () => {
  const menuCheckbox = document.getElementById("menu");
  const navbar = document.querySelector(".menu .navbar");
  const btnInfo = document.querySelector(".btn-info");
  const extraInfo = document.getElementById("extra-info");
  const email = document.getElementById("email");
  const copiedMsg = document.getElementById("copied-msg");

  // Mostrar/ocultar el contenido extra al hacer clic
  btnInfo.addEventListener("click", (e) => {
    e.preventDefault();
    extraInfo.classList.toggle("hidden");
  });

  // Ocultar el contenido extra al hacer scroll solo en pantallas grandes
  window.addEventListener("scroll", () => {
    if (window.innerWidth >= 768 && !extraInfo.classList.contains("hidden")) {
      extraInfo.classList.add("hidden");
    }
  });

  // Mostrar/ocultar el menú con animación
  menuCheckbox.addEventListener("change", () => {
    if (menuCheckbox.checked) {
      navbar.classList.add("show");
    } else {
      navbar.classList.remove("show");
    }
  });

  // Cerrar el menú al dar clic en un enlace
  const menuLinks = document.querySelectorAll(".menu .navbar a");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (menuCheckbox.checked) {
        menuCheckbox.checked = false;
        navbar.classList.remove("show");
      }
    });
  });

  // Copiar correo al portapapeles al hacer clic
  if (email && copiedMsg) {
    email.addEventListener("click", () => {
      const correo = email.textContent;
      navigator.clipboard.writeText(correo).then(() => {
        copiedMsg.style.display = "inline";
        setTimeout(() => {
          copiedMsg.style.display = "none";
        }, 1500);
      }).catch(err => {
        console.error("Error al copiar el correo:", err);
      });
    });
  }
});