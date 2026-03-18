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
  photo: string;
};

export const SENIOR_METHODISTS: TeamMember[] = [
  { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/fc1142b1-5496-4bed-a0b6-586418480f0b.jpg" },
  { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/56b76a0b-9c98-41fc-b70b-6fc2aa40fd05.png" },
  { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/af78ad60-c2d1-48ec-9646-50b41db9fe37.jpg" },
];

export const TEAM_GROUPS = [
  {
    title: "Педагог-организатор",
    emoji: "🎯",
    color: "#c9a84c",
    bg: "rgba(201,168,76,0.08)",
    border: "rgba(201,168,76,0.2)",
    members: [
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/55d5bca7-2a81-4100-bf47-66e4615140c0.png" },
    ],
  },
  {
    title: "Педагог-психолог",
    emoji: "🧠",
    color: "#9b7fe8",
    bg: "rgba(155,127,232,0.08)",
    border: "rgba(155,127,232,0.2)",
    members: [
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/736addc4-89e5-4ea2-b9c7-5abbf3cdf391.jpg" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/b957a5a8-40f5-41b8-aa3c-c272e8cea078.png" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/7a9cb1bd-d39e-4338-abea-c9f0c59a81aa.jpg" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/7cfee147-5085-4037-9822-6cef444b184b.png" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/8950acf5-efae-4494-afe0-b537245b711a.png" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/ca647040-90a0-4d31-a0b9-ac775786829a.png" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/64ef3d58-9222-462a-b0ce-04658d3e215a.jpg" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/d9bcf64b-a159-429c-a08d-a8bf0b6bdfc9.jpg" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/9af1202d-ba84-4b96-b49c-c11f01125512.png" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/ca2e9bee-c0ee-473e-aa9e-37a58d36326c.jpg" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/d02f022a-5163-4130-8328-8d4474120d73.png" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/22bbfa16-5721-4345-9e76-46fa7549f845.png" },
    ],
  },
  {
    title: "Старший методист",
    emoji: "⭐",
    color: "#c9a84c",
    bg: "rgba(201,168,76,0.08)",
    border: "rgba(201,168,76,0.2)",
    members: [
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/3e5ac1a5-c5ed-4d65-8feb-3e668c7c0947.jpg" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/4b502983-d2da-45f8-80cb-bf77e3ab7770.jpg" },
    ],
  },
  {
    title: "Методист",
    emoji: "📚",
    color: "#5cb8e4",
    bg: "rgba(92,184,228,0.08)",
    border: "rgba(92,184,228,0.2)",
    members: [
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/a89898c9-c53e-476b-9889-8a2e29cf4a91.jpg" },
    ],
  },
  {
    title: "Педагог-организатор",
    emoji: "🎯",
    color: "#c9a84c",
    bg: "rgba(201,168,76,0.08)",
    border: "rgba(201,168,76,0.2)",
    members: [
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/47251a63-ff1d-4382-bfe3-78bcde23eec7.png" },
      { name: "Имя Фамилия", photo: "https://cdn.poehali.dev/files/51e517b6-afa6-426f-a8a5-27fe60a45751.png" },
    ],
  },
];

export const FUN_FACTS = [
  { num: "💸", label: "Деньги — не главное", sub: "...но без них никуда" },
  { num: "7", label: "Тем в программе", sub: "от бюджета до инвестиций" },
  { num: "55", label: "Сириус", sub: "наша программа" },
];