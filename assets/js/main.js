let obraActualId = null;

// Abrir obra
function abrirObra(obraId) {
  const obra = obras.find(o => o.id === obraId);
  if (!obra) return;

  obraActualId = obraId;

  const detalleContainer = document.querySelector('#detalle-obra-container');
  if (!detalleContainer) return;

  detalleContainer.innerHTML = `
    <div class="detalle-obra">
      <button class="cerrar-obra" onclick="cerrarObra()">✕</button>

      <div class="detalle-obra-contenido">
        <div class="detalle-obra-img-principal">
          <img src="${obra.imagenes[0]}" id="imagen-grande" alt="${obra.titulo}">
        </div>
        <div class="detalle-obra-info">
          <h2>${obra.titulo}</h2>
          <p><strong>Ubicación:</strong> ${obra.ubicacion}</p>
          <p><strong>Superficie:</strong> ${obra.superficie}</p>
          <p><strong>Año:</strong> ${obra.anio}</p>
          <p class="descripcion">${obra.descripcion}</p>
        </div>
      </div>

      <div class="detalle-obra-miniaturas">
        <button class="arrow left" onclick="scrollMiniaturas(-1)">‹</button>
        <div class="miniaturas-wrapper" id="miniaturas-wrapper">
          ${obra.imagenes.map((src, i) => `
            <img src="${src}" class="miniatura" onclick="mostrarImagenGrande('${src}')" alt="mini-${i}">
          `).join('')}
        </div>
        <button class="arrow right" onclick="scrollMiniaturas(1)">›</button>
      </div>

      <div class="detalle-obra-navegacion">
        <button class="btn-nav-obra" onclick="navegarObra(-1)">⬅</button>
        <button class="btn-nav-obra" onclick="cerrarObra()">Volver a obras</button>
        <button class="btn-nav-obra" onclick="navegarObra(1)">➡</button>
      </div>
    </div>
  `;
}

// Cargar las portadas
document.addEventListener('DOMContentLoaded', cargarPortadasObras);

function cargarPortadasObras() {
  const grilla = document.querySelector('.grilla-obras');
  if (!grilla) return;

  grilla.innerHTML = obras.map(obra => `
    <div class="portada-obra" onclick="abrirObra('${obra.id}')">
      <div class="card">
        <div class="portada-img-wrapper">
          <img src="${obra.imagenes[0]}" alt="${obra.titulo}">
        </div>
        <div class="portada-info">
          <h3>${obra.titulo}</h3>
          <p>${obra.ubicacion}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Desplazamiento de miniaturas
function scrollMiniaturas(direccion) {
  const wrapper = document.getElementById('miniaturas-wrapper');
  if (wrapper) wrapper.scrollLeft += direccion * 120;
}

// Cambiar imagen principal
function mostrarImagenGrande(src) {
  const imagen = document.getElementById('imagen-grande');
  if (imagen) {
    imagen.style.opacity = 0;
    setTimeout(() => {
      imagen.src = src;
      imagen.style.opacity = 1;
    }, 200);
  }
}

// Navegar entre obras
function navegarObra(direccion) {
  const actual = obras.findIndex(o => o.id === obraActualId);
  if (actual === -1) return;

  let nuevo = actual + direccion;
  if (nuevo < 0) nuevo = obras.length - 1;
  if (nuevo >= obras.length) nuevo = 0;

  abrirObra(obras[nuevo].id);
}

// Cierre suave
function cerrarObra() {
  const detalle = document.querySelector('.detalle-obra');
  if (detalle) {
    detalle.classList.add('fadeOut');
    setTimeout(() => detalle.remove(), 300);
  }
}

// ------------------------
// LIGHTBOX POPUP LÓGICA
// ------------------------

document.addEventListener("click", function (e) {
  if (e.target.matches("#imagen-grande")) {
    e.preventDefault();
    e.stopPropagation();

    const src = e.target.getAttribute("src");
    if (!src) return;

    const obra = obras.find(o => o.titulo === e.target.alt);
    if (!obra || !obra.imagenes || !obra.imagenes.length) return;

    const index = obra.imagenes.indexOf(src);
    if (index === -1) return;

    crearPopupImagen(obra.imagenes, index);
  }

  // Cerrar popup
  if (e.target.matches(".popup-close") || e.target.matches(".popup-overlay")) {
    const popup = document.querySelector(".popup-overlay");
    if (popup) {
      popup.classList.add("fadeOut");
      setTimeout(() => popup.remove(), 300);
    }
  }

  // Navegación en popup
  if (e.target.matches(".popup-prev") || e.target.matches(".popup-next")) {
    const overlay = document.querySelector(".popup-overlay");
    if (!overlay) return;

    const imagenes = JSON.parse(overlay.dataset.imagenes);
    let index = parseInt(overlay.dataset.index);
    if (isNaN(index)) return;

    index += e.target.matches(".popup-prev") ? -1 : 1;

    if (index >= 0 && index < imagenes.length) {
      const img = overlay.querySelector(".popup-img");
      img.classList.add("fadeOut");

      setTimeout(() => {
        img.src = imagenes[index];
        img.classList.remove("fadeOut");
        overlay.dataset.index = index;
      }, 250);
    }
  }
});

function crearPopupImagen(imagenes, index) {
  if (!imagenes || index < 0 || index >= imagenes.length) return;

  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  overlay.dataset.imagenes = JSON.stringify(imagenes);
  overlay.dataset.index = index;

  overlay.innerHTML = `
    <button class="popup-close" aria-label="Cerrar imagen">✕</button>
    <button class="popup-prev">‹</button>
    <img src="${imagenes[index]}" alt="zoom" class="popup-img">
    <button class="popup-next">›</button>
  `;

  document.body.appendChild(overlay);
}
