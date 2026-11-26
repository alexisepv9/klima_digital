import GlassArt from "./GlassArt";
import TypedHeadline from "./TypedHeadline";
export default function Hero() {
  return (
    <main id="inicio">
      <article>
        <h1 aria-label="Tu negocio puede vender en línea, recibir consultas y ordenar sus pedidos.">
          <span className="lead" aria-hidden="true">
            Tu negocio puede
          </span>
          <TypedHeadline />
        </h1>
        <p className="intro">Webs y sistemas a medida para pymes chilenas.</p>
        <div className="actions">
          <a className="cta" href="#contacto">
            Hablemos de tu negocio →
          </a>
        </div>
      </article>
      <GlassArt
        className="glass"
        alt="Símbolo de Klima en vidrio azul y turquesa"
        src="/imagenes/simbolo.webp"
      />
    </main>
  );
}
