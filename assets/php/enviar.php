<?php
// CONFIG
$destinatario = "kualdry.contacto@gmail.com";

// FUNCIONES AUXILIARES
function sanitizar($campo) {
  return htmlspecialchars(trim($campo));
}

// OBTENER Y SANITIZAR
$nombre   = sanitizar($_POST["nombre"] ?? '');
$email    = sanitizar($_POST["email"] ?? '');
$telefono = sanitizar($_POST["telefono"] ?? '');
$mensaje  = sanitizar($_POST["mensaje"] ?? '');

// VALIDAR
if (!$nombre || !$email || !$mensaje) {
  echo "❌ Por favor completá todos los campos obligatorios.";
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "❌ El correo electrónico no es válido.";
  exit;
}

// ASUNTO Y MENSAJE
$asunto = "Consulta desde el sitio web de Kualdry";
$cuerpo = "Nombre: $nombre\n";
$cuerpo .= "Email: $email\n";
$cuerpo .= "Teléfono: $telefono\n\n";
$cuerpo .= "Mensaje:\n$mensaje";

// CABECERAS
$cabeceras = "From: $email\r\n";
$cabeceras .= "Reply-To: $email\r\n";
$cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

// ENVIAR EMAIL
if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
  echo "OK";
} else {
  echo "❌ Error al enviar el mensaje. Intentá más tarde.";
}
?>
