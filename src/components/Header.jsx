export default function Header() {
  return (
    <header>
      <a href="#inicio" aria-label="Klima Digital, inicio">
        <img alt="Klima Digital" src="/imagenes/logo.webp" />
      </a>
      <nav aria-label="Principal">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto ↗</a>
      </nav>
    </header>
  );
}
