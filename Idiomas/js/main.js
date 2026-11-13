     function alternarIdioma() 
        {
            const textoEn = document.getElementById("texto-en");
            const boton = document.getElementById("btn-traducir");

            if (textoEn.classList.contains("oculta")) {
                textoEn.classList.remove("oculta");
                textoEn.classList.add("activa");
                boton.innerText = "Ver en Español";
            } else {
                textoEn.classList.remove("activa");
                textoEn.classList.add("oculta");
                boton.innerText = "Translate to English";
            }
        }
  