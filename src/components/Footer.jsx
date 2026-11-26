export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerGrid grid">
        <div>
          <a
            className="footerBrand"
            href="#inicio"
            aria-label="Klima Digital, inicio"
          >
            <img alt="Klima Digital" src="/imagenes/logo.webp" />
          </a>
          <p>
            Diseñamos páginas web y sistemas a medida para pymes y emprendedores
            de Chile.
          </p>
        </div>
        <nav aria-label="Navegación del pie de página">
          <h2>Navegación</h2>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
        <div>
          <h2>Contacto</h2>
          <ul>
            <li>
              <a href="mailto:hola@klimadigital.cl">hola@klimadigital.cl</a>
            </li>
            <li>Santiago, Chile</li>
          </ul>
        </div>
        <div>
          <h2>¿Tienes un proyecto?</h2>
          <p>
            <a className="footerCta" href="#contacto">
              Cuéntanos tu idea →
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
