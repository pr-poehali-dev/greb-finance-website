export const NAV_ITEMS = [
  { label: "Главная", href: "#home" },
  { label: "О проекте", href: "#about" },
  { label: "Преподаватели", href: "#teachers" },
  { label: "Статьи", href: "#articles" },
  { label: "Контакты", href: "#contacts" },
];

export const FEATURES = [
  {
    icon: "Lightbulb",
    emoji: "💡",
    title: "Доход",
    desc: "Как зарабатывать больше и не тратить на глупости — спойлер: кофе в офисе считается",
  },
  {
    icon: "TrendingUp",
    emoji: "📈",
    title: "Инвестиции",
    desc: "Фондовый рынок — это не казино. Хотя иногда похоже. Но мы научим разнице!",
  },
  {
    icon: "ShoppingCart",
    emoji: "🛒",
    title: "Инфляция",
    desc: "Почему вчера было дешевле? Разбираемся, как деньги тают быстрее мороженого",
  },
  {
    icon: "Home",
    emoji: "🏠",
    title: "Кредит",
    desc: "Брать или не брать — вот в чём вопрос. Мы поможем ответить без слёз",
  },
  {
    icon: "PiggyBank",
    emoji: "🐷",
    title: "Бюджет",
    desc: "Куда уходят деньги? Таблица, которая откроет страшную правду о ваших тратах",
  },
  {
    icon: "Target",
    emoji: "🎯",
    title: "Финансовые цели",
    desc: "Мечтаете об айфоне? Или о квартире? Научим копить на оба варианта",
  },
];

export const TEACHERS = [
  {
    name: "Имя Преподавателя",
    role: "Наставник по финансам",
    bio: "Объясняет сложное простыми словами. Иногда с мемами — и это работает!",
    emoji: "🧑‍🏫",
    photo: null as string | null,
  },
  {
    name: "Имя Преподавателя",
    role: "Гуру инвестиций",
    bio: "Знает про акции всё. Особенно то, что нужно знать именно вам",
    emoji: "📊",
    photo: null as string | null,
  },
  {
    name: "Имя Преподавателя",
    role: "Эксперт по бюджету",
    bio: "Помогает найти деньги там, где их «не было». Спойлер: они были",
    emoji: "💰",
    photo: null as string | null,
  },
];

export const ARTICLES = [
  {
    tag: "Основы",
    emoji: "🧾",
    title: "Как начать управлять бюджетом и не сойти с ума",
    date: "12 марта 2026",
    read: "7 мин",
  },
  {
    tag: "Инвестиции",
    emoji: "🚀",
    title: "Первые шаги на фондовом рынке: без паники!",
    date: "5 марта 2026",
    read: "10 мин",
  },
  {
    tag: "Планирование",
    emoji: "🛡️",
    title: "Финансовая подушка: сколько нужно и с чего начать",
    date: "28 февраля 2026",
    read: "6 мин",
  },
];

export const COAT_OF_ARMS_URL =
  "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/28562c26-42b5-4bac-ad2a-1c93a7d98a22.png";

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

export const SENIOR_METHODISTS: TeamMember[] = [
  {
    name: "Жигалкина Анастасия Викторовна",
    role: "Старший методист",
    photo: "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/3cc17b31-fe4b-4a92-b4f3-21e01eb6d1c0.jpg",
  },
  {
    name: "Капустина Ольга Леонидовна",
    role: "Старший методист",
    photo: "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/99ba55b7-91c7-42fb-bc20-4777bbe3a5c1.jpg",
  },
  {
    name: "Грачева Ольга Викторовна",
    role: "Старший методист",
    photo: "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/6d5a5056-7a92-4bc5-9568-ae53c98f243f.png",
  },
  {
    name: "Каримова Алия Абаевна",
    role: "Старший методист",
    photo: "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/dde420fb-71d3-4a2a-a47f-a3598060f7ea.jpg",
  },
  {
    name: "Ушакова Елена Владимировна",
    role: "Старший методист",
    photo: "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/c58563be-6873-4d6c-8d9f-2750acd1f631.jpg",
  },
];

export const FUN_FACTS = [
  { num: "💸", label: "Деньги — не главное", sub: "...но без них никуда" },
  { num: "7", label: "Тем в программе", sub: "от бюджета до инвестиций" },
  { num: "55", label: "Сириус", sub: "наша программа" },
];