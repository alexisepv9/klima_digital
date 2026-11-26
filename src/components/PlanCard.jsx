import { motion } from "motion/react";
export default function PlanCard({ plan, onSelect }) {
  return (
    <motion.article
      className="compactPlan compare"
      initial={{ opacity: 0.85, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3>{plan.name}</h3>
      <p className="planPrice">
        Desde <strong>{plan.price}</strong> CLP
      </p>
      <p className="purpose">{plan.purpose}</p>
      <ul className="kitSpecs">
        {plan.features.map((feature) => (
          <li key={feature.title}>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d={feature.path} />
            </svg>
            <span>
              <b>{feature.title}</b>
              {feature.detail}
            </span>
          </li>
        ))}
      </ul>
      <a
        className="planAction"
        href="#contacto"
        onClick={() => onSelect(plan.name)}
      >
        Quiero una cotización
      </a>
    </motion.article>
  );
}
