document.getElementById("formulario-contacto").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const estado = document.getElementById("mensaje-estado");

  // Reinicio de estado
  estado.textContent = "Enviando...";
  estado.style.display = "block";
  estado.className = ""; // limpia clases previas

  try {
    const response = await fetch("/assets/php/enviar.php", {
      method: "POST",
      body: data
    });

    const resultado = await response.text();

    if (resultado.includes("OK")) {
      estado.textContent = "✅ Consulta enviada con éxito.";
      estado.classList.add("estado-ok");
      form.reset();
    } else {
      estado.textContent = resultado || "❌ Error al enviar. Intente nuevamente.";
      estado.classList.add("estado-error");
    }

  } catch (error) {
    estado.textContent = "❌ Error de conexión. Intente más tarde.";
    estado.classList.add("estado-error");
  }
});