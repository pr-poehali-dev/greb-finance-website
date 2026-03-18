import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Главная", href: "#home" },
  { label: "О проекте", href: "#about" },
  { label: "Преподаватели", href: "#teachers" },
  { label: "Статьи", href: "#articles" },
  { label: "Контакты", href: "#contacts" },
];

const FEATURES = [
  {
    icon: "BookOpen",
    title: "Основы финансов",
    desc: "Понимание базовых финансовых инструментов и принципов управления деньгами",
  },
  {
    icon: "TrendingUp",
    title: "Инвестиции",
    desc: "Освоение стратегий инвестирования и формирования капитала на долгосрочную перспективу",
  },
  {
    icon: "Shield",
    title: "Финансовая защита",
    desc: "Создание финансовой подушки безопасности и защита от непредвиденных ситуаций",
  },
  {
    icon: "Target",
    title: "Постановка целей",
    desc: "Планирование и достижение финансовых целей любого масштаба",
  },
  {
    icon: "BarChart2",
    title: "Анализ рынков",
    desc: "Изучение фондовых рынков, валют и современных финансовых инструментов",
  },
  {
    icon: "Lightbulb",
    title: "Финансовое мышление",
    desc: "Формирование правильного отношения к деньгам и финансовым решениям",
  },
];

const TEACHERS = [
  {
    name: "Имя Преподавателя",
    role: "Эксперт по личным финансам",
    bio: "Более 10 лет опыта в области финансового планирования и инвестиций",
    photo: null,
  },
  {
    name: "Имя Преподавателя",
    role: "Инвестиционный аналитик",
    bio: "Специалист по фондовому рынку и портфельным инвестициям",
    photo: null,
  },
  {
    name: "Имя Преподавателя",
    role: "Финансовый консультант",
    bio: "Практикующий консультант с опытом работы с частными и корпоративными клиентами",
    photo: null,
  },
];

const ARTICLES = [
  {
    tag: "Основы",
    title: "Как начать управлять личным бюджетом: пошаговое руководство",
    date: "12 марта 2026",
    read: "7 мин",
  },
  {
    tag: "Инвестиции",
    title: "Первые шаги на фондовом рынке: что нужно знать новичку",
    date: "5 марта 2026",
    read: "10 мин",
  },
  {
    tag: "Планирование",
    title: "Финансовая подушка безопасности: сколько нужно и как накопить",
    date: "28 февраля 2026",
    read: "6 мин",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

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

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-montserrat" style={{ background: "var(--cream)" }}>

      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg py-3" : "py-5"
        }`}
        style={{ background: scrolled ? "var(--navy)" : "transparent" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("#home")}
            className="font-bold text-xl tracking-widest uppercase"
            style={{ color: "var(--gold)" }}
          >
            ГРЕБ
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="nav-link text-sm font-medium tracking-wide transition-colors"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="hidden md:block text-sm font-semibold px-5 py-2 rounded transition-all hover:opacity-90"
            style={{ background: "var(--gold)", color: "var(--navy)" }}
            onClick={() => scrollTo("#contacts")}
          >
            Записаться
          </button>

          <button
            className="md:hidden"
            style={{ color: "white" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 shadow-xl py-6 px-6 flex flex-col gap-4"
            style={{ background: "var(--navy)" }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-base font-medium"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {item.label}
              </button>
            ))}
            <button
              className="mt-2 text-sm font-semibold px-5 py-2 rounded w-fit"
              style={{ background: "var(--gold)", color: "var(--navy)" }}
              onClick={() => scrollTo("#contacts")}
            >
              Записаться
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "var(--navy)" }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 60px)",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Coat of arms placeholder */}
          <div
            className="mb-10 flex justify-center animate-fade-in"
            style={{ animationDuration: "1s" }}
          >
            <div
              className="relative w-36 h-36 rounded-full flex items-center justify-center"
              style={{
                border: "2px solid rgba(201,168,76,0.4)",
                background: "rgba(201,168,76,0.05)",
              }}
            >
              <div
                className="absolute inset-2 rounded-full"
                style={{ border: "1px solid rgba(201,168,76,0.2)" }}
              />
              <div className="text-center">
                <Icon name="Award" size={48} fallback="Star" style={{ color: "var(--gold)" }} />
                <p
                  className="text-[9px] font-semibold tracking-[0.25em] uppercase mt-1"
                  style={{ color: "rgba(201,168,76,0.5)" }}
                >
                  Герб
                </p>
              </div>
            </div>
          </div>

          <p
            className="text-xs font-semibold tracking-[0.35em] uppercase mb-4 animate-fade-up"
            style={{ color: "var(--gold)", animationDelay: "0.2s", opacity: 0 }}
          >
            Образовательный проект
          </p>
          <h1
            className="font-cormorant text-5xl md:text-7xl font-bold leading-tight text-white mb-6 animate-fade-up"
            style={{ animationDelay: "0.35s", opacity: 0 }}
          >
            Финансовая
            <br />
            <span style={{ color: "var(--gold)" }}>грамотность</span>
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{
              color: "rgba(255,255,255,0.55)",
              animationDelay: "0.5s",
              opacity: 0,
            }}
          >
            Проект ГРЕБ помогает освоить финансовые инструменты, научиться управлять деньгами
            и строить уверенное финансовое будущее
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.65s", opacity: 0 }}
          >
            <button
              className="px-8 py-4 rounded font-semibold text-sm tracking-wide transition-all hover:scale-105"
              style={{ background: "var(--gold)", color: "var(--navy)" }}
              onClick={() => scrollTo("#about")}
            >
              Узнать о проекте
            </button>
            <button
              className="px-8 py-4 rounded font-semibold text-sm tracking-wide border text-white transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(201,168,76,0.4)" }}
              onClick={() => scrollTo("#contacts")}
            >
              Записаться на курс
            </button>
          </div>

          {/* Stats row */}
          <div
            className="mt-20 grid grid-cols-3 gap-6 max-w-sm mx-auto animate-fade-up"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            {[
              { num: "500+", label: "Выпускников" },
              { num: "12", label: "Курсов" },
              { num: "5★", label: "Рейтинг" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="font-cormorant text-3xl font-bold"
                  style={{ color: "var(--gold)" }}
                >
                  {s.num}
                </div>
                <div
                  className="text-xs mt-1 tracking-wide"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={22} style={{ color: "var(--gold)", opacity: 0.5 }} />
        </div>
      </section>

      {/* ── О ПРОЕКТЕ ── */}
      <section id="about" className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                О проекте
              </p>
              <h2
                className="font-cormorant text-4xl md:text-5xl font-bold mb-4"
                style={{ color: "var(--navy)" }}
              >
                Почему ГРЕБ?
              </h2>
              <span className="gold-line mx-auto block" />
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <RevealSection>
              <div>
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: "var(--navy)", opacity: 0.72 }}
                >
                  ГРЕБ — образовательный проект для тех, кто хочет взять финансовую жизнь под
                  контроль. Мы убеждены: финансовая грамотность — это не привилегия экономистов,
                  а необходимый навык каждого.
                </p>
                <p
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: "var(--navy)", opacity: 0.72 }}
                >
                  Наши программы разработаны практикующими специалистами и охватывают все аспекты
                  личных финансов — от базового бюджетирования до стратегических инвестиций.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Практические знания от действующих экспертов",
                    "Программы для любого уровня подготовки",
                    "Поддержка и сопровождение после обучения",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "var(--gold)" }}
                      >
                        <Icon name="Check" size={11} style={{ color: "var(--navy)" }} />
                      </div>
                      <span className="text-sm font-medium" style={{ color: "var(--navy)" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            <RevealSection>
              <div
                className="rounded-2xl p-8 border"
                style={{
                  background: "var(--navy)",
                  borderColor: "rgba(201,168,76,0.2)",
                }}
              >
                <p className="font-cormorant text-2xl italic leading-relaxed text-white/90 mb-6">
                  «Финансовая независимость начинается не с большого дохода, а с правильных знаний
                  и привычек»
                </p>
                <span className="gold-line" />
                <p
                  className="mt-4 text-sm font-semibold tracking-wide"
                  style={{ color: "var(--gold)" }}
                >
                  Миссия проекта ГРЕБ
                </p>
              </div>
            </RevealSection>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <RevealSection key={f.title}>
                <div
                  className="card-hover rounded-xl p-6 border bg-white"
                  style={{ borderColor: "rgba(13,27,62,0.08)" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "rgba(201,168,76,0.1)" }}
                  >
                    <Icon name={f.icon} size={22} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ color: "var(--navy)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(13,27,62,0.58)" }}>
                    {f.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПРЕПОДАВАТЕЛИ ── */}
      <section
        id="teachers"
        className="py-24 px-6"
        style={{ background: "var(--navy)" }}
      >
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                Команда
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
                Наши преподаватели
              </h2>
              <span className="gold-line mx-auto block" />
              <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "rgba(255,255,255,0.48)" }}>
                Практикующие эксперты с реальным опытом в финансовой сфере
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8">
            {TEACHERS.map((teacher, i) => (
              <RevealSection key={i}>
                <div
                  className="card-hover rounded-2xl overflow-hidden border"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(201,168,76,0.15)",
                  }}
                >
                  {/* Photo placeholder */}
                  <div
                    className="h-64 flex items-center justify-center relative"
                    style={{ background: "rgba(201,168,76,0.05)" }}
                  >
                    <div className="text-center">
                      <div
                        className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 border-2"
                        style={{
                          borderColor: "var(--gold)",
                          background: "rgba(201,168,76,0.08)",
                        }}
                      >
                        <Icon name="User" size={36} style={{ color: "var(--gold)", opacity: 0.5 }} />
                      </div>
                      <p
                        className="text-[10px] tracking-[0.25em] uppercase"
                        style={{ color: "rgba(201,168,76,0.4)" }}
                      >
                        Фото
                      </p>
                    </div>
                    <div
                      className="absolute top-4 right-4 text-xs px-2 py-1 rounded"
                      style={{
                        background: "rgba(201,168,76,0.12)",
                        color: "var(--gold)",
                      }}
                    >
                      Эксперт
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-white mb-1">{teacher.name}</h3>
                    <p
                      className="text-xs font-medium tracking-wide mb-3"
                      style={{ color: "var(--gold)" }}
                    >
                      {teacher.role}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
                      {teacher.bio}
                    </p>
                    <div
                      className="mt-4 pt-4 border-t"
                      style={{ borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      <button
                        className="text-xs transition-colors"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                      >
                        Подробнее →
                      </button>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── СТАТЬИ ── */}
      <section id="articles" className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                Материалы
              </p>
              <h2
                className="font-cormorant text-4xl md:text-5xl font-bold mb-4"
                style={{ color: "var(--navy)" }}
              >
                Статьи и знания
              </h2>
              <span className="gold-line mx-auto block" />
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ARTICLES.map((article, i) => (
              <RevealSection key={i}>
                <div
                  className="card-hover bg-white rounded-2xl overflow-hidden border flex flex-col"
                  style={{ borderColor: "rgba(13,27,62,0.08)" }}
                >
                  <div
                    className="h-44 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--navy) 0%, #1a3060 100%)",
                    }}
                  >
                    <Icon
                      name="FileText"
                      size={40}
                      style={{ color: "var(--gold)", opacity: 0.35 }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span
                      className="inline-block text-xs font-semibold px-2 py-0.5 rounded mb-3 w-fit"
                      style={{
                        background: "rgba(201,168,76,0.1)",
                        color: "var(--gold)",
                      }}
                    >
                      {article.tag}
                    </span>
                    <h3
                      className="font-semibold text-base leading-snug mb-3 flex-1"
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
                className="px-8 py-3 rounded border font-semibold text-sm tracking-wide transition-all hover:text-white"
                style={{
                  borderColor: "var(--navy)",
                  color: "var(--navy)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--navy)";
                  (e.currentTarget as HTMLButtonElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--navy)";
                }}
              >
                Все статьи
              </button>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── КОНТАКТЫ ── */}
      <section id="contacts" className="py-24 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                Связаться
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
                  className="text-lg leading-relaxed mb-10"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Готовы ответить на ваши вопросы и помочь выбрать подходящую программу обучения
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    { icon: "Mail", label: "Email", value: "info@greb-finance.ru" },
                    { icon: "Phone", label: "Телефон", value: "+7 (000) 000-00-00" },
                    { icon: "MapPin", label: "Адрес", value: "г. Москва" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(201,168,76,0.1)" }}
                      >
                        <Icon name={c.icon} size={18} style={{ color: "var(--gold)" }} />
                      </div>
                      <div>
                        <p
                          className="text-xs mb-0.5"
                          style={{ color: "rgba(255,255,255,0.35)" }}
                        >
                          {c.label}
                        </p>
                        <p className="text-white font-medium">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            <RevealSection>
              <div
                className="rounded-2xl p-8 border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(201,168,76,0.15)",
                }}
              >
                <h3 className="font-semibold text-white text-lg mb-6">Записаться на курс</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { type: "text", placeholder: "Ваше имя" },
                    { type: "tel", placeholder: "Номер телефона" },
                    { type: "email", placeholder: "Email" },
                  ].map((field) => (
                    <input
                      key={field.placeholder}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/30 outline-none transition-all"
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
                  ))}
                  <textarea
                    rows={3}
                    placeholder="Ваш вопрос или комментарий"
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/30 outline-none transition-all resize-none"
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
                    className="w-full py-3 rounded-lg font-semibold text-sm tracking-wide transition-all hover:opacity-90 active:scale-95"
                    style={{ background: "var(--gold)", color: "var(--navy)" }}
                  >
                    Отправить заявку
                  </button>
                  <p
                    className="text-xs text-center"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-10 px-6 border-t"
        style={{ background: "#070f22", borderColor: "rgba(201,168,76,0.1)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="font-bold text-lg tracking-widest"
              style={{ color: "var(--gold)" }}
            >
              ГРЕБ
            </span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
              Финансовая грамотность
            </span>
          </div>
          <nav className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.65)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.35)";
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 ГРЕБ. Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}