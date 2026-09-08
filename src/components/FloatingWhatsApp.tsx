import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappHref } from "@/lib/content";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-50">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noreferrer"
        className="inline-flex size-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_24px_-6px_rgba(37,211,102,0.45)] transition-transform hover:scale-[1.04] active:scale-[0.97] sm:size-14"
        aria-label="מעבר לשיחה אישית בוואטסאפ"
      >
        <WhatsAppIcon className="size-6 sm:size-7" />
      </a>
    </div>
  );
}
