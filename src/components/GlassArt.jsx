import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
// Anima la ilustración original solo mientras está en pantalla.
export default function GlassArt({ className, src, alt }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  const reduce = useReducedMotion();
  const animate = visible && !reduce;
  return (
    <div ref={ref} className={className}>
      <motion.img
        src={src}
        alt={alt}
        animate={
          animate
            ? { rotate: [0, 1.6, 0], scale: [1, 1.025, 1] }
            : { rotate: 0, scale: 1 }
        }
        transition={{
          duration: 6,
          repeat: animate ? Infinity : 0,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
