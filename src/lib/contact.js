// Prepara el borrador en el cliente de correo del visitante.
export function prepareEmail(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const details = [
    "Nombre: " + data.get("nombre").trim(),
    "Correo: " + data.get("email").trim(),
  ];
  const phone = data.get("telefono").trim();
  if (phone) details.push("Teléfono o WhatsApp: " + phone);
  const body = [...details, "", data.get("idea").trim()].join("\r\n");
  window.location.href =
    event.currentTarget.action +
    "?subject=Consulta%20Klima%20Digital&body=" +
    encodeURIComponent(body);
}
