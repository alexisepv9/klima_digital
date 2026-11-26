import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
const words = ["vender en línea.", "recibir consultas.", "ordenar pedidos."];
export default function TypedHeadline() {
  const ref = useRef(null),
    visible = useInView(ref),
    reduced = useReducedMotion();
  const [text, setText] = useState(words[0]);
  // Cada ciclo escribe, pausa y borra. Al desmontar se cancela el temporizador.
  useEffect(() => {
    if (!visible || reduced) return;
    let index = 0,
      length = words[0].length,
      deleting = true,
      timer;
    function tick() {
      const word = words[index];
      length += deleting ? -1 : 1;
      setText(word.slice(0, length));
      let delay = deleting ? 36 : 78;
      if (length === word.length) {
        deleting = true;
        delay = 2400;
      }
      if (length === 0) {
        deleting = false;
        index = (index + 1) % words.length;
        delay = 200;
      }
      timer = setTimeout(tick, delay);
    }
    setText(words[0]);
    timer = setTimeout(tick, 2400);
    return () => clearTimeout(timer);
  }, [visible, reduced]);
  return (
    <span ref={ref} className="typed" aria-hidden="true">
      {reduced ? words[0] : text}
    </span>
  );
}
