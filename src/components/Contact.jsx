import { prepareEmail } from "../lib/contact";
export default function Contact({ message, onMessage }) {
  return (
    <section
      className="page contactSection"
      id="contacto"
      aria-labelledby="contactTitle"
    >
      <div className="contactIntro">
        <p className="label">Hablemos</p>
        <h2 id="contactTitle">
          Cuéntanos qué te gustaría <em>mejorar de tu negocio</em>
        </h2>
        <p>
          No necesitas saber de tecnología para empezar. Cuéntanos tu idea y
          conversemos sobre lo que necesita tu negocio.
        </p>
      </div>
      <div className="contactLayout grid items-start">
        <div className="contactCard">
          <h3>Envíanos un mensaje</h3>
          <p>Cuéntanos qué quieres resolver y cómo podemos contactarte.</p>
          <form
            onSubmit={prepareEmail}
            id="consulta"
            action="mailto:hola@klimadigital.cl"
            method="post"
            encType="text/plain"
          >
            <div className="contactFields grid gap-4">
              <label>
                Nombre completo
                <input
                  name="nombre"
                  required
                  autoComplete="name"
                  placeholder="Ej. Andrea Soto"
                />
              </label>
              <label>
                Correo electrónico
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Ej. andrea@empresa.cl"
                />
              </label>
            </div>
            <label>
              Teléfono o WhatsApp (opcional)
              <input
                type="tel"
                name="telefono"
                autoComplete="tel"
                placeholder="Ej. +56 9 8765 4321"
              />
            </label>
            <label>
              Mensaje sobre tu negocio
              <textarea
                value={message}
                onChange={(event) => onMessage(event.target.value)}
                name="idea"
                rows="4"
                required
                placeholder="Cuéntanos qué problema quieres resolver o qué proyecto tienes en mente."
              ></textarea>
            </label>
            <div className="formActions">
              <p>
                Se abrirá tu aplicación de correo con la consulta lista para
                enviar.
              </p>
              <button className="cta" type="submit">
                Preparar consulta →
              </button>
            </div>
          </form>
        </div>
        <div className="contactSide">
          <div className="contactCard contactQuick">
            <div className="contactQuickTitle">
              <span className="contactIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z M7 9h10 M7 12h7" />
                </svg>
              </span>
              <h3>¿Tienes una duda rápida?</h3>
            </div>
            <p>
              Escríbenos para consultar por un plan o conversar sobre tu
              proyecto.
            </p>
            <a className="cta contactLink" href="mailto:hola@klimadigital.cl">
              Escríbenos por correo →
            </a>
          </div>
          <div className="contactCard">
            <h3>Datos de contacto</h3>
            <dl className="contactData">
              <div>
                <span className="contactIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 5h18v14H3z M3 6l9 7 9-7" />
                  </svg>
                </span>
                <dt>Correo electrónico</dt>
                <dd>
                  <a id="contactEmail" href="mailto:hola@klimadigital.cl">
                    hola@klimadigital.cl
                  </a>
                </dd>
              </div>
              <div>
                <span className="contactIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </span>
                <dt>Ubicación</dt>
                <dd>Santiago, Chile</dd>
              </div>
              <div>
                <span className="contactIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z M12 7v5l3 2" />
                  </svg>
                </span>
                <dt>Horario de atención</dt>
                <dd>Lunes a viernes, de 09:00 a 18:30 h</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
