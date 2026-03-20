import Icon from "@/components/ui/icon";
import { SECURITY_CARDS } from "./data";
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

function SecurityCard({
  title,
  icon,
  signs,
  actions,
  important,
  highlighted,
}: {
  title: string;
  icon: string;
  signs: string[];
  actions: string[];
  important?: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        highlighted ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      style={{
        background: highlighted
          ? "linear-gradient(135deg, rgba(220,50,50,0.08), rgba(220,50,50,0.02))"
          : "white",
        borderColor: highlighted
          ? "rgba(220,50,50,0.3)"
          : "rgba(13,27,62,0.08)",
        boxShadow: highlighted
          ? "0 4px 30px rgba(220,50,50,0.08)"
          : "0 2px 12px rgba(0,0,0,0.04)",
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: highlighted
              ? "rgba(220,50,50,0.1)"
              : "rgba(13,27,62,0.05)",
          }}
        >
          <Icon
            name={icon}
            size={22}
            style={{
              color: highlighted ? "#dc3232" : "var(--navy)",
            }}
          />
        </div>
        <div>
          <h3
            className="font-bold text-base mb-1"
            style={{ color: highlighted ? "#dc3232" : "var(--navy)" }}
          >
            {title}
          </h3>
        </div>
      </div>

      {signs.length > 0 && (
        <div className="mb-4">
          <p
            className="text-xs font-bold uppercase tracking-wider mb-2"
            style={{ color: "rgba(13,27,62,0.4)" }}
          >
            <Icon name="AlertTriangle" size={12} className="inline mr-1 -mt-0.5" />
            Признаки
          </p>
          <ul className="flex flex-col gap-1.5">
            {signs.map((s, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm"
                style={{ color: "rgba(13,27,62,0.65)" }}
              >
                <Icon
                  name="AlertCircle"
                  size={14}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#e8a040" }}
                />
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-4 flex-1">
        <p
          className="text-xs font-bold uppercase tracking-wider mb-2"
          style={{ color: highlighted ? "rgba(220,50,50,0.5)" : "rgba(13,27,62,0.4)" }}
        >
          <Icon name="CheckCircle" size={12} className="inline mr-1 -mt-0.5" />
          {highlighted ? "Запомни" : "Что делать"}
        </p>
        <ul className="flex flex-col gap-1.5">
          {actions.map((a, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm font-medium"
              style={{
                color: highlighted ? "#dc3232" : "var(--navy)",
              }}
            >
              <Icon
                name={highlighted ? "ShieldAlert" : "CheckCircle2"}
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{
                  color: highlighted ? "#dc3232" : "#50c882",
                }}
              />
              {a}
            </li>
          ))}
        </ul>
      </div>

      {important && (
        <div
          className="rounded-xl p-3 mt-auto"
          style={{
            background: highlighted
              ? "rgba(220,50,50,0.06)"
              : "rgba(13,27,62,0.04)",
            border: `1px solid ${
              highlighted ? "rgba(220,50,50,0.15)" : "rgba(13,27,62,0.08)"
            }`,
          }}
        >
          <p
            className="text-xs font-bold"
            style={{
              color: highlighted
                ? "#dc3232"
                : "var(--navy)",
            }}
          >
            <Icon name="Info" size={12} className="inline mr-1 -mt-0.5" />
            {important}
          </p>
        </div>
      )}
    </div>
  );
}

const RECOMMENDATIONS = [
  { icon: "Phone", title: "Не отвечайте на незнакомые номера", desc: "Если звонят «из банка» — положите трубку и перезвоните по номеру на карте" },
  { icon: "Lock", title: "Никому не сообщайте коды из СМС", desc: "Даже если звонящий представляется сотрудником банка, полиции или ФСБ" },
  { icon: "Eye", title: "Проверяйте адрес сайта", desc: "Мошенники создают сайты-двойники. Обращайте внимание на каждую букву в URL" },
  { icon: "CreditCard", title: "Не переводите деньги незнакомцам", desc: "«Мама, я попал в аварию!» — всегда перезванивайте родственнику лично" },
  { icon: "Wifi", title: "Не пользуйтесь публичным Wi-Fi для платежей", desc: "Открытые сети — рай для хакеров. Используйте мобильный интернет" },
  { icon: "ShieldCheck", title: "Установите антивирус", desc: "И не переходите по ссылкам из подозрительных сообщений, даже от друзей" },
];

export default function SecuritySection() {
  return (
    <section
      id="security"
      className="py-24 px-6"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <div className="text-center mb-10">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--navy)" }}
            >
              <Icon name="Shield" size={14} className="inline mr-1 -mt-0.5" style={{ color: "#2e6e4a" }} />
              Важно знать
            </p>
            <h2
              className="font-cormorant text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--navy)" }}
            >
              Финансовая грамотность —{" "}
              <span style={{ color: "#2e6e4a" }}>это ещё и безопасность</span>
            </h2>
            <span className="gold-line mx-auto block" />
            <p
              className="mt-4 max-w-2xl mx-auto text-base"
              style={{ color: "rgba(13,27,62,0.55)" }}
            >
              Памятка, которую стоит прочитать каждому. Мошенники не дремлют —
              а вы будьте начеку! 🛡️
            </p>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="flex flex-col md:flex-row items-center gap-6 mb-12 rounded-3xl p-6" style={{ background: "rgba(13,27,62,0.03)", border: "1px solid rgba(13,27,62,0.08)" }}>
            <img
              src="https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/236fe1fa-d3fd-425b-b947-3a1386c94583.jpg"
              alt="Осторожно мошенники"
              className="w-full md:w-64 rounded-2xl shadow-lg"
              style={{ border: "2px solid rgba(220,50,50,0.2)" }}
            />
            <div className="flex-1">
              <h3 className="font-cormorant text-2xl font-bold mb-3" style={{ color: "#dc3232" }}>
                🚨 Осторожно: мошенники не дремлют!
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(13,27,62,0.65)" }}>
                Каждый день тысячи людей становятся жертвами финансовых мошенников.
                Они звонят, пишут, создают поддельные сайты — и всё ради ваших денег.
                Но есть хорошая новость: <strong>зная их приёмы, вы легко их обойдёте!</strong>
              </p>
              <p className="text-sm italic" style={{ color: "rgba(13,27,62,0.45)" }}>
                Помните: настоящий банк никогда не попросит ваш пароль или код из СМС 😉
              </p>
            </div>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {SECURITY_CARDS.map((card) => (
            <RevealSection key={card.title}>
              <SecurityCard {...card} />
            </RevealSection>
          ))}
        </div>

        <RevealSection>
          <div className="mb-12">
            <h3 className="font-cormorant text-3xl font-bold text-center mb-8" style={{ color: "var(--navy)" }}>
              🛡️ Рекомендации: как не попасться мошенникам
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {RECOMMENDATIONS.map((rec, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: "white",
                    borderColor: "rgba(46,110,74,0.15)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(46,110,74,0.1)" }}
                    >
                      <Icon name={rec.icon} size={20} style={{ color: "#2e6e4a" }} />
                    </div>
                    <h4 className="font-bold text-sm" style={{ color: "var(--navy)" }}>
                      {rec.title}
                    </h4>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(13,27,62,0.55)" }}>
                    {rec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="text-center">
            <a
              href="https://cbr.ru/protection_rights/finprosvet/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{
                background: "#2e6e4a",
                color: "white",
              }}
            >
              <Icon name="ExternalLink" size={16} />
              Памятка от Банка России
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}