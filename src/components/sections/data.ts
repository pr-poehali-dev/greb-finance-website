export const NAV_ITEMS = [
  { label: "Главная", href: "#home" },
  { label: "О проекте", href: "#about" },
  { label: "Команда", href: "#team" },
  { label: "Услуги", href: "#services" },
  { label: "Безопасность", href: "#security" },
  { label: "Контакты", href: "#contacts" },
];

export const FEATURES = [
  {
    icon: "Lightbulb",
    title: "Доход",
    desc: "Как зарабатывать больше и не тратить на глупости — спойлер: кофе в офисе считается.",
  },
  {
    icon: "TrendingUp",
    title: "Инвестиции",
    desc: "Фондовый рынок — это не казино. Хотя иногда похоже. Но мы научим разнице!",
  },
  {
    icon: "ShoppingCart",
    title: "Инфляция",
    desc: "Почему вчера было дешевле? Разбираемся, как деньги тают быстрее мороженого.",
  },
  {
    icon: "Home",
    title: "Кредит",
    desc: "Брать или не брать — вот в чём вопрос. Мы поможем ответить без слёз.",
  },
  {
    icon: "PiggyBank",
    title: "Бюджет",
    desc: "Куда уходят деньги? Таблица, которая откроет страшную правду о ваших тратах.",
  },
  {
    icon: "Target",
    title: "Финансовые цели",
    desc: "Мечтаете об айфоне? Или о квартире? Научим копить на оба варианта.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  fun: string;
};

export const ALL_TEACHERS: TeamMember[] = [
  {
    name: "Алексеенко Елена Вячеславовна",
    role: "Доцент кафедры ЭММ",
    photo: "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/de44346d-7546-4f65-ba70-f64d3a4e6beb.jpg",
    fun: "Доцент кафедры ЭММ ФГБОУ ВО «ОмГПУ». Знает о финансах всё — и немного больше!",
  },
  {
    name: "Гешко Олеся Александровна",
    role: "Доцент кафедры ЭММ",
    photo: "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/dbe32f14-bfc3-4a51-8cf2-18adefffb329.jpg",
    fun: "Доцент кафедры ЭММ ФГБОУ ВО «ОмГПУ». Превращает экономику в увлекательное приключение!",
  },
];

export const COAT_OF_ARMS_URL =
  "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/75e99066-0532-4e29-a989-e155cec63639.png";

export const FUN_FACTS = [
  { num: "7", label: "Тем в программе", sub: "от бюджета до инвестиций" },
  { num: "55", label: "Сириус", sub: "финансовая грамотность: просто о сложном" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: string;
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: "horoscope",
    title: "Финансовый гороскоп на неделю",
    description:
      "Что звёзды говорят о вашем кошельке? Гороскоп от штатного астролога-экономиста.",
    price: 150,
    icon: "Star",
    featured: true,
  },
  {
    id: "affirmation",
    title: "Персональная денежная аффирмация",
    description:
      'Фраза-настрой перед открытием банковского приложения. Пример: «Я — магнит для денег, но только до зарплаты». Пришлём в аудио.',
    price: 200,
    icon: "AudioLines",
  },
  {
    id: "crisis-plan",
    title: "Антикризисный план на день",
    description:
      "Если вы потратили всё до копейки — экстренная инструкция из трёх пунктов, как дожить до стипендии.",
    price: 300,
    icon: "ShieldAlert",
  },
  {
    id: "scratch",
    title: "Виртуальный скретч-слой",
    description:
      "Стираете слой — читаете шутку или совет. Денег нет, но улыбка гарантирована.",
    price: 120,
    icon: "Sparkles",
  },
];

export type SecurityCard = {
  title: string;
  icon: string;
  signs: string[];
  actions: string[];
  important?: string;
  highlighted?: boolean;
};

export const SECURITY_CARDS: SecurityCard[] = [
  {
    title: "СМС и звонки от «банка»",
    icon: "Smartphone",
    signs: [
      "Сообщение о блокировке карты",
      "Уведомление о выигрыше",
      "Просьба вернуть «ошибочный» перевод",
    ],
    actions: [
      "Не переходить по ссылке из СМС",
      "Не перезванивать на номер из сообщения",
      "Проверить информацию, позвонив в банк по номеру на вашей карте",
    ],
    important: "Контактный центр Банка России: 8 800 300-30-00 (круглосуточно, бесплатно)",
  },
  {
    title: "Просят в долг в соцсетях",
    icon: "MessageCircle",
    signs: [
      "Сообщение от друга с просьбой срочно перевести деньги",
      "Причины: лечение, выкуп, экстренная ситуация",
    ],
    actions: [
      "Не переводить деньги сразу",
      "Перезвонить другу по телефону",
      "Скорее всего, его страницу взломали",
    ],
  },
  {
    title: "Три главных «НИКОГДА»",
    icon: "Shield",
    signs: [],
    actions: [
      "НИКОГДА не сообщай три цифры на обороте карты (CVV/CVC)",
      "НИКОГДА не называй PIN-код",
      "НИКОГДА не говори пароли из СМС",
    ],
    important: "Даже «сотрудникам банка»! Настоящие сотрудники никогда не спрашивают эти данные.",
    highlighted: true,
  },
  {
    title: "Подозрительные сайты",
    icon: "Globe",
    signs: [
      "Очень низкие цены",
      "Оплата только переводом на карту физлица",
      "Сайт недавно создан",
    ],
    actions: [
      "Проверить адрес сайта",
      "Поискать отзывы на сторонних ресурсах",
      "Не переводить деньги незнакомцам",
    ],
  },
];

export const CARD_PRIZES = [
  "Лайфхак дня: не бери кредит, если хочешь спать спокойно.",
  "Ты выиграл виртуальную монетку! Потрать её с умом.",
  "Секретное слово: «копилка». Произнеси трижды — и деньги не уйдут налево.",
  "Поздравляем! Ты — главный финансист дня.",
  "Лучшая инвестиция — это хорошее настроение.",
  "Финансовый совет: прежде чем купить — подожди 24 часа.",
  "Деньги не растут на деревьях, но знания — бесплатны!",
  "Твоя копилка гордится тобой. Продолжай в том же духе.",
];

export const RANDOM_ADVICE = [
  "Лучшая инвестиция — это хорошее настроение.",
  "Деньги любят тишину, а финансовая грамотность — действия.",
  "Перед покупкой спроси себя: это хочу или это нужно?",
  "Подушка безопасности спасает не только на дороге.",
  "Знание — сила. Особенно когда речь о процентных ставках.",
  "Если бы деньги могли говорить, они бы просили о бюджете.",
  "Сложный процент — восьмое чудо света. Используй его!",
  "Не бойся инвестировать в себя — это самый надёжный актив.",
];

export const SERVICES_TITLE = "Финансовая лаборатория";
export const SERVICES_SUBTITLE = "Эксперименты с деньгами (виртуальными, конечно!)";

export const SCAM_IMAGES = {
  thief: "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/236fe1fa-d3fd-425b-b947-3a1386c94583.jpg",
  infographic: "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/8c1ad858-6c52-4f3a-b362-3d3c9adb8eb4.jpg",
};

export const SIRIUS_LOGO_URL = "https://cdn.poehali.dev/projects/647abaef-28f5-495e-a890-6d594b0e5fe1/bucket/2a471c76-b870-4fc9-afe4-b309c1bcbd4b.jpg";

export const CONTACTS = {
  telegram: { username: "G_Cheburashka", url: "tg://resolve?domain=G_Cheburashka" },
  whatsapp: { phone: "+7 902 574-77-83", url: "https://wa.me/79025747783" },
  phone: { number: "+7 902 574-77-83", url: "tel:+79025747783" },
};

export const PAYMENT_CARD = "2200 7020 7250 7788";
export const PAYMENT_BANK = "Т-Банк";