import GlassArt from "./GlassArt";
export default function About() {
  return (
    <section id="nosotros" className="about page">
      <div className="aboutIntro arrived">
        <div>
          <p className="label">Nosotros</p>
          <h2>
            Más posibilidades para <em>tu negocio.</em>
          </h2>
          <p>
            Creamos páginas web, tiendas online y sistemas a medida para que
            puedas vender, atender a tus clientes y organizar tu trabajo.
          </p>
          <a className="cta" href="#servicios">
            Conoce nuestros servicios →
          </a>
        </div>
        <div className="notebook">
          <img
            className="scene"
            src="/imagenes/notebook.webp"
            alt="Notebook con el símbolo animado de Klima Digital"
          />
          <div className="displayK">
            <GlassArt
              className="micro"
              alt=""
              src="/imagenes/simbolo-mini.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
