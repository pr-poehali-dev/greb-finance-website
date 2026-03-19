import Icon from "@/components/ui/icon";
import { FEATURES, COAT_OF_ARMS_URL } from "./data";
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

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              <Icon name="BookOpen" size={14} className="inline mr-1 -mt-0.5" />
              О проекте
            </p>
            <h2
              className="font-cormorant text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--navy)" }}
            >
              Зачем это всё
            </h2>
            <span className="gold-line mx-auto block" />
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <RevealSection>
            <div>
              <p
                className="text-lg leading-relaxed mb-5"
                style={{ color: "rgba(13,27,62,0.72)" }}
              >
                Мы решили, что финансовая грамотность — это не только скучные
                таблицы и графики. Это ещё и умение посмеяться над своими ошибками
                (например, над спонтанной покупкой пятой кружки с котиками).
              </p>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "rgba(13,27,62,0.72)" }}
              >
                Наш герб — напоминание:{" "}
                <strong style={{ color: "var(--navy)" }}>
                  деньги любят счёт, а жизнь — улыбку
                </strong>
                . Мы сами только учимся управлять финансами — и делимся этим с
                вами. Никакого занудства, только польза и немного юмора.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: "GraduationCap",
                    text: "Профильная смена по финансовой грамотности — Сириус 55",
                  },
                  {
                    icon: "BookOpen",
                    text: "Изучаем: доход, инфляцию, кредит, инвестиции, бюджет, финансовые цели",
                  },
                  {
                    icon: "Globe",
                    text: "Наш продукт — этот сайт. Да, тот самый, что вы читаете!",
                  },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(201,168,76,0.12)" }}
                    >
                      <Icon name={item.icon} size={16} style={{ color: "var(--gold)" }} />
                    </div>
                    <span
                      className="text-sm font-medium pt-1"
                      style={{ color: "var(--navy)" }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="flex flex-col gap-4">
              <div
                className="rounded-3xl p-6 flex items-center gap-5 border"
                style={{
                  background: "var(--navy)",
                  borderColor: "rgba(201,168,76,0.2)",
                }}
              >
                <img
                  src={COAT_OF_ARMS_URL}
                  alt="Герб финансовой грамотности"
                  className="w-20 h-20 object-contain flex-shrink-0 rounded-xl"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(201,168,76,0.3))",
                    mixBlendMode: "screen",
                  }}
                />
                <div>
                  <p className="font-cormorant text-xl italic text-white/90 mb-1">
                    «Финансовая грамотность — это суперсила, доступная каждому»
                  </p>
                  <span className="gold-line block mt-2" />
                  <p
                    className="mt-2 text-xs font-bold tracking-wide"
                    style={{ color: "var(--gold)" }}
                  >
                    Девиз участников смены
                  </p>
                </div>
              </div>

              <div
                className="rounded-3xl p-5 border text-center"
                style={{
                  background: "rgba(201,168,76,0.07)",
                  borderColor: "rgba(201,168,76,0.2)",
                }}
              >
                <Icon
                  name="PiggyBank"
                  size={36}
                  className="mx-auto mb-2"
                  style={{ color: "var(--gold)" }}
                />
                <p
                  className="font-bold text-sm"
                  style={{ color: "var(--navy)" }}
                >
                  Знаете ли вы, что 80% людей не ведут бюджет?
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "rgba(13,27,62,0.55)" }}
                >
                  Мы входим в оставшиеся 20%. И вас научим!
                </p>
              </div>
            </div>
          </RevealSection>
        </div>

        <RevealSection>
          <div className="text-center mb-8">
            <h3
              className="font-cormorant text-3xl font-bold"
              style={{ color: "var(--navy)" }}
            >
              <Icon name="BookOpen" size={24} className="inline mr-2 -mt-1" style={{ color: "var(--gold)" }} />
              Что мы изучаем — это ещё только малость
            </h3>
            <p
              className="text-sm mt-2"
              style={{ color: "rgba(13,27,62,0.5)" }}
            >
              6 тем — от простого к сложному (и от скучного к интересному)
            </p>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <RevealSection key={f.title}>
              <div
                className="card-hover rounded-2xl p-6 border bg-white group cursor-default"
                style={{ borderColor: "rgba(13,27,62,0.08)" }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.1)" }}
                  >
                    <Icon
                      name={f.icon}
                      size={22}
                      style={{ color: "var(--gold)" }}
                    />
                  </div>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(13,27,62,0.05)" }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{ color: "var(--navy)" }}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "var(--navy)" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(13,27,62,0.58)" }}
                >
                  {f.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}