import socksImage from "@/Assets/JE_241018_LisaMarie_Fall44686_2048x.webp";
import ballImage from "@/Assets/5d00d397cb443.jpg";

export const WHATSAPP_NUMBER = "972524650830";

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const heroContent = {
  badge: "פילאטיס מזרן מקצועי · מכל מקום",
  headline: "פילאטיס מקצועי",
  headlineAccent: "שעובד בשבילך",
  headlineSuffix: "מכל מקום, בכל זמן",
  subtitle:
    "נעים מאוד, אני לי ואנונו. אני כאן כדי לעזור לכם לחזק את הגוף, לשפר יציבה ולהרגיש פשוט מצוין – באמצעות שיעורי פילאטיס מזרן מדויקים וממוקדים שמגיעים ישירות אליכם לסלון.",
  ctaPrimary: "בחרו אימון ונתחיל",
  ctaSecondary: "שאלות? דברו איתי",
};

export const painPoints = [
  {
    id: "consistency",
    icon: "Clock",
    tag: "גמישות מלאה",
    title: "קשה להתמיד במסגרת?",
    description:
      "יצרתי עבורכם אימון איכותי ויעיל שאפשר לעשות בבית, בזמן שנוח לכם, בלי לבזבז זמן על נסיעות ובלי צורך בציוד יקר.",
    color: "from-rose-100 to-rose-50",
    iconBg: "bg-rose-100",
  },
  {
    id: "strength",
    icon: "Heart",
    tag: "תוצאות אמיתיות",
    title: "חיזוק אמיתי בלי כאבים",
    description:
      "האימונים שלי מתמקדים בחיזוק שרירי הליבה והפחתת כאבי גב, כדי לשמור על גוף חזק וגמיש כחלק בלתי נפרד משגרת החיים.",
    color: "from-amber-100 to-amber-50",
    iconBg: "bg-amber-100",
  },
  {
    id: "clarity",
    icon: "Eye",
    tag: "מתחילים ועד מתקדמים",
    title: "הסברים בגובה העיניים",
    description:
      "הגישה שלי משלבת מקצועיות חסרת פשרות עם הסברים פשוטים וברורים. התרגולים בנויים בצורה הדרגתית, כך שכל אחד יבין את התנועה וירגיש את העבודה הנכונה בגוף.",
    color: "from-sky-100 to-sky-50",
    iconBg: "bg-sky-100",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "בחרו שיעור",
    description: "גלשו בספריית האימונים ובחרו את השיעור שמתאים לכם – שיעור מלא 25 דק׳ או אתגר ממוקד 12 דק׳.",
    icon: "Search",
  },
  {
    step: 2,
    title: "שלחו הודעה ללי",
    description: "לחצו על כפתור הוואטסאפ, שלחו הודעה ותקבלו תשובה תוך דקות עם פרטי התשלום.",
    icon: "MessageCircle",
  },
  {
    step: 3,
    title: "קבלו את הסרטון",
    description: "מיד אחרי התשלום הסרטון שלכם מגיע – להפעלה מיידית מכל מכשיר, כמה פעמים שרוצים.",
    icon: "Play",
  },
  {
    step: 4,
    title: "התחילו להתאמן!",
    description: "פרשו מזרן, לחצו play וקדימה. 25 דקות שיגרמו לכם להרגיש שינוי – מובטח.",
    icon: "Zap",
  },
];

export const classes = [
  {
    id: "full-class",
    title: "שיעורי פילאטיס מזרן מלאים",
    cardLabel: "אימון גוף מלא",
    badge: "הפופולרי ביותר",
    description:
      "שיעור פילאטיס מזרן מלא, בנוי כתהליך הדרגתי שמאפשר התמדה והתקדמות. אידיאלי לשגרת אימונים קבועה המחזקת את הליבה ומשפרת גמישות ויציבה.",
    duration: "25 דקות",
    price: 99,
    ctaText: "לפרטים נוספים",
    ctaWhatsapp: "לרכישת השיעור המלא בוואטסאפ",
    whatsappMessage: "היי לי! אשמח לרכוש את השיעור המלא (25 דקות) ב-99 ש\"ח",
    image: "https://images.unsplash.com/photo-1758599879024-7379d769f664?w=600&h=400&fit=crop&fm=webp&q=80",
  },
  {
    id: "challenge",
    title: "אתגרי פילאטיס ממוקדים",
    cardLabel: "אימון קצר ואפקטיבי",
    badge: "מושלם לימים עמוסים",
    description:
      "יש לכם רק רבע שעה? האתגרים שלי הם שיעורים קצרים, ממוקדים ויעילים במיוחד, שנועדו להכניס בוסט של אנרגיה וחיזוק גם בימים הכי עמוסים.",
    duration: "12 דקות",
    price: 59,
    ctaText: "לפרטים נוספים",
    ctaWhatsapp: "לרכישת האתגר הממוקד בוואטסאפ",
    whatsappMessage: "היי לי! אשמח לרכוש את האתגר הממוקד (12 דקות) ב-59 ש\"ח",
    image: "https://images.unsplash.com/photo-1767611119700-68b1249332c6?w=600&h=400&fit=crop&fm=webp&q=80",
  },
];

export const products = [
  {
    id: "ball",
    name: "כדור פילאטיס קטן",
    description:
      "מושלם לגיוון התרגילים, הוספת אתגר לשרירי הליבה ועבודה על שיווי משקל.",
    price: 25,
    image: ballImage,
    ctaText: "הוסיפי לאימון שלך",
  },
  {
    id: "socks",
    name: "גרביים מונעות החלקה",
    description:
      "לעבודה בטוחה, יציבה ונוחה על המזרן או על הרצפה.",
    price: 25,
    image: socksImage,
    ctaText: "הוסיפי לאימון שלך",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "מיכל כ.",
    text: "אחרי שנים שלא הצלחתי להתמיד – השיעורים של לי שינו לי את החיים. ההסברים מדויקים ואני מרגישה את השינוי בגוף כבר אחרי שבועיים.",
    rating: 5,
  },
  {
    id: 2,
    name: "רונית ד.",
    text: "כאמא עסוקה ל-3 ילדים, 25 דקות בסלון זה בדיוק מה שהייתי צריכה. המחיר שווה כל שקל!",
    rating: 5,
  },
  {
    id: 3,
    name: "נועה ש.",
    text: "לי מקצועית ברמה אחרת. גם האתגרים הקצרים נותנים תחושת אימון אמיתי. ממליצה בחום!",
    rating: 5,
  },
  {
    id: 4,
    name: "דנה א.",
    text: "סבלתי מכאבי גב כרוניים. אחרי חודש של אימונים עם לי, הכאבים כמעט נעלמו. תודה ענקית!",
    rating: 5,
  },
];

export const aboutContent = {
  title: "הגישה שלי",
  textParts: [
    "אני מאמינה שפילאטיס הוא לא רק אימון – הוא תהליך. כל תרגיל בנוי כדי לקחת אתכם צעד קדימה: מהבנה של התנועה, דרך חיזוק הדרגתי, ועד לתחושה אמיתית של כוח וגמישות.",
    "הגישה שלי משלבת מקצועיות ודיוק עם הסברים פשוטים בגובה העיניים – כי כל גוף ראוי לאימון נכון, בין אם זה הצעד הראשון שלכם או שאתם כבר מתאמנים שרוצים להעמיק.",
  ],
  image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=500&h=500&fit=crop&crop=faces&fm=webp&q=80",
};

export const contactInfo = {
  name: "לי ואנונו",
  brand: "Pilates by Lilush",
  phone: "052-4650830",
  email: "Vanunulee@gmail.com",
  footerHeadline: "גלגלו את המזרן, אני כבר מחכה לכם.",
};
