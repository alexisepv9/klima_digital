/** Abre el chat de Klima Digital con su número chileno en formato internacional. */
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56993934311"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con Klima Digital por WhatsApp (abre una pestaña nueva)"
      title="Hablar por WhatsApp"
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 grid size-14 place-items-center rounded-full bg-[#128c4a] text-white shadow-lg ring-2 ring-white transition-transform hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#124735] motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" width="31" height="31" fill="white">
        <path d="M20.52 3.45A11.86 11.86 0 0 0 12.08 0C5.51 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.59 5.96L.06 24l6.31-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.57 0 11.92-5.34 11.92-11.91 0-3.18-1.24-6.18-3.48-8.44ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.87 9.87 0 0 1-1.51-5.25c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.44 9.89-9.9 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34Z"/>
      </svg>
    </a>
  );
}
