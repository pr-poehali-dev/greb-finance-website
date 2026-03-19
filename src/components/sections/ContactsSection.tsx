import Icon from "@/components/ui/icon";
import { CONTACTS } from "./data";
import { useScrollReveal } from "./hooks";

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-24 px-6" style={{ background: "var(--navy)" }}>
      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              <Icon name="MessageCircle" size={14} className="inline mr-1 -mt-0.5" />
              Будем на связи
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
              Задать вопрос или просто поздороваться
            </h2>
            <span className="gold-line mx-auto block" />
          </div>
        </RevealSection>

        <RevealSection>
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            <a
              href={CONTACTS.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border p-6 flex flex-col items-center gap-4 transition-all hover:scale-105 hover:-translate-y-1 group"
              style={{
                background: "rgba(55,145,220,0.08)",
                borderColor: "rgba(55,145,220,0.25)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110"
                style={{ background: "rgba(55,145,220,0.15)" }}
              >
                <Icon name="Send" size={24} style={{ color: "#3791dc" }} />
              </div>
              <div className="text-center">
                <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Telegram
                </p>
                <p className="text-white font-bold">@{CONTACTS.telegram.username}</p>
              </div>
            </a>

            <a
              href={CONTACTS.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border p-6 flex flex-col items-center gap-4 transition-all hover:scale-105 hover:-translate-y-1 group"
              style={{
                background: "rgba(37,211,102,0.08)",
                borderColor: "rgba(37,211,102,0.25)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110"
                style={{ background: "rgba(37,211,102,0.15)" }}
              >
                <Icon name="MessageSquare" size={24} style={{ color: "#25d366" }} />
              </div>
              <div className="text-center">
                <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                  WhatsApp
                </p>
                <p className="text-white font-bold">{CONTACTS.whatsapp.phone}</p>
              </div>
            </a>

            <a
              href={CONTACTS.phone.url}
              className="rounded-3xl border p-6 flex flex-col items-center gap-4 transition-all hover:scale-105 hover:-translate-y-1 group"
              style={{
                background: "rgba(201,168,76,0.08)",
                borderColor: "rgba(201,168,76,0.25)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110"
                style={{ background: "rgba(201,168,76,0.15)" }}
              >
                <Icon name="Phone" size={24} style={{ color: "var(--gold)" }} />
              </div>
              <div className="text-center">
                <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Позвонить
                </p>
                <p className="text-white font-bold">{CONTACTS.phone.number}</p>
              </div>
            </a>
          </div>
        </RevealSection>

        <RevealSection>
          <div
            className="rounded-2xl p-4 text-center border"
            style={{
              background: "rgba(201,168,76,0.06)",
              borderColor: "rgba(201,168,76,0.15)",
            }}
          >
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              <Icon name="Clock" size={14} className="inline mr-1 -mt-0.5" />
              Звоните в разумное время. Если ночью — будьте готовы рассказать историю.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
