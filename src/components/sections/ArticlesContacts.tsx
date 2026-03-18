import Icon from "@/components/ui/icon";
import { ARTICLES } from "./data";
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

function ArticlesSection() {
  return (
    <section id="articles" className="py-24 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              📖 Материалы
            </p>
            <h2
              className="font-cormorant text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--navy)" }}
            >
              Статьи и знания
            </h2>
            <span className="gold-line mx-auto block" />
            <p className="mt-3 text-sm" style={{ color: "rgba(13,27,62,0.5)" }}>
              Читать не обязательно... но очень рекомендуется 😉
            </p>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ARTICLES.map((article, i) => (
            <RevealSection key={i}>
              <div
                className="card-hover bg-white rounded-3xl overflow-hidden border flex flex-col group"
                style={{ borderColor: "rgba(13,27,62,0.08)" }}
              >
                <div
                  className="h-44 flex flex-col items-center justify-center gap-2 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, var(--navy) 0%, #1a3060 100%)",
                  }}
                >
                  <span className="text-5xl transition-transform duration-300 group-hover:scale-125">
                    {article.emoji}
                  </span>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: "var(--gold)", opacity: 0.6 }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-3 w-fit"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      color: "var(--gold)",
                    }}
                  >
                    {article.tag}
                  </span>
                  <h3
                    className="font-bold text-base leading-snug mb-3 flex-1"
                    style={{ color: "var(--navy)" }}
                  >
                    {article.title}
                  </h3>
                  <div
                    className="flex items-center justify-between text-xs pt-4 border-t"
                    style={{
                      borderColor: "rgba(13,27,62,0.07)",
                      color: "rgba(13,27,62,0.4)",
                    }}
                  >
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {article.read}
                    </span>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection>
          <div className="text-center">
            <button
              className="px-8 py-3 rounded-full border font-bold text-sm tracking-wide transition-all hover:text-white hover:scale-105"
              style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--navy)";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--navy)";
              }}
            >
              Все статьи 📚
            </button>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section id="contacts" className="py-24 px-6" style={{ background: "var(--navy)" }}>
      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              ✉️ Связаться
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
              Контакты
            </h2>
            <span className="gold-line mx-auto block" />
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-12">
          <RevealSection>
            <div>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Есть вопросы? Хотите узнать о программе Сириус 55? Или просто хотите поговорить
                про деньги? 🤑 Мы здесь!
              </p>

              {/* Fun contact cards */}
              <div className="flex flex-col gap-4">
                {[
                  { icon: "Mail", emoji: "📧", label: "Email", value: "info@greb-project.ru" },
                  { icon: "Phone", emoji: "📞", label: "Телефон", value: "+7 (000) 000-00-00" },
                  { icon: "MapPin", emoji: "📍", label: "Программа", value: "Сириус 55" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 p-4 rounded-2xl border transition-all hover:scale-105 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(201,168,76,0.12)",
                    }}
                  >
                    <span className="text-2xl">{c.emoji}</span>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                        {c.label}
                      </p>
                      <p className="text-white font-semibold">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social note */}
              <div
                className="mt-6 p-4 rounded-2xl text-center"
                style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  🌟 Мы обучающиеся, а не организация — отвечаем как можем, но всегда отвечаем!
                </p>
              </div>
            </div>
          </RevealSection>

          <RevealSection>
            <div
              className="rounded-3xl p-8 border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(201,168,76,0.15)",
              }}
            >
              <h3 className="font-bold text-white text-lg mb-2">Написать нам</h3>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
                Ответим быстрее, чем инфляция съедает деньги 😄
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { type: "text", placeholder: "Ваше имя 👤" },
                  { type: "tel", placeholder: "Телефон 📱" },
                  { type: "email", placeholder: "Email 📧" },
                ].map((field) => (
                  <input
                    key={field.placeholder}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    }}
                  />
                ))}
                <textarea
                  rows={3}
                  placeholder="Ваш вопрос или просто привет 👋"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all resize-none"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                />
                <button
                  className="w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all hover:opacity-90 hover:scale-[1.02] flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, var(--gold), #e8c96b)",
                    color: "var(--navy)",
                  }}
                >
                  <span>Отправить</span>
                  <span>🚀</span>
                </button>
                <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.2)" }}>
                  Спам не отправляем. Продаём только знания 😇
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

export default function ArticlesContacts() {
  return (
    <>
      <ArticlesSection />
      <ContactsSection />
    </>
  );
}
