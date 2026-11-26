import plans from "../data/plans.json";
import PlanCard from "./PlanCard";
export default function Services({ onSelect }) {
  return (
    <section id="servicios" className="services page">
      <p className="label">Kits principales</p>
      <h2>
        Encuentra el plan web ideal <em>para tu negocio</em>
      </h2>
      <p className="kitIntro">
        Conoce nuestros tres planes de desarrollo web y encuentra el que mejor
        se adapta a tu propósito. También creamos sistemas y herramientas
        digitales según tus necesidades.
      </p>
      <div className="compactGrid grid">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
