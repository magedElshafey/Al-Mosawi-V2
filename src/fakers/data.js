import graduated from "../assets/graduated.png";
import arrow from "../assets/arrow.svg";
import top from "../assets/top.svg";
import book from "../assets/book.svg";
// prochart
import mob from "../assets/mob.png";
import mob2 from "../assets/mob-01.png";
import mob3 from "../assets/mob-02.png";
export const header = [
  {
    id: 1,
    title: "معلومات الحساب",
    enTitle: "account details",
    path: "/account",
  },
  {
    id: 2,
    title: "حاسبة الفوركس",
    enTitle: "forex calculator",
    path: "/forex-calc",
  },
  {
    id: 3,
    title: "المدونة",
    enTitle: "blogs",
    path: "/blogs",
  },
  {
    id: 4,
    title: "التقويم الاقتصادي",
    enTitle: "Economic calendar",
    path: "/takweem",
  },
  {
    id: 5,
    title: "الدورات التعليمية",
    enTitle: "courses",
    path: "/courses",
  },
  {
    id: 6,
    title: "قسم البروشارت",
    enTitle: "PROCHART",
    path: "/user/prochart",
  },
  {
    id: 7,
    title: "الإستشارات",
    enTitle: "consulting",
    path: "/consulting",
  },
  {
    id: 8,
    title: "اسأل أحمد الموسوي",
    enTitle: "Ask Ahmed Al-Mosawi",
    path: "/ask",
  },
];
export const reqPaper = {
  title: "ما هي الأوراق المطلوبة؟",
  details: [
    "البطاقة المدنية من الأمام والخلف",
    "اثبات عنوان / سكن",
    "جواز السفر",
  ],
};
export const conditions = {
  title: "شروط رفع الأوراق بطريقة صحيحة",
  details: [
    {
      title:
        "رفع نسخة ممسوحة ضوئيا أو صورة بكاميرة الموبايل وان تكون الأوراق سارية وبإسمك",
      isTrue: true,
    },
    {
      isTrue: false,
      title: "لا يتم قبول ملفات",
    },
    {
      isTrue: true,
      title:
        "يجب ان يتطابق مستند إثبات العنوان مع العنوان الذي قدمته عند التسجيل",
    },
  ],
};
export const purchasDetails = [
  "نقوم بإرسال رابط الدفع",
  "يتم تفعيل الاشتراك فورا",
];
export const forexAccDetails = [
  {
    id: 1,
    title: "حاسبة الفوركس",
    img: graduated,
    path: "/forex-calc",
    enTitle: "forex calculator",
  },
  {
    id: 2,
    title: "المدونة",
    img: arrow,
    path: "/blogs",
    enTitle: "blogs",
  },
  {
    id: 3,
    title: "التقويم الاقتصادي",
    img: top,
    enTitle: "Economic calendar",
  },
  {
    id: 4,
    title: "الدورات التعليمية ",
    img: book,
    path: "/courses",
    enTitle: "courses",
  },
  {
    id: 5,
    title: "قسم البروشارت",
    img: graduated,
    path: "/user/prochart",
    enTitle: "PROCHART",
  },
  {
    id: 6,
    title: "الإستشارات",
    img: book,
    path: "/consulting",
    enTitle: "consulting",
  },
];
export const userProchart = [
  {
    id: 1,
    title: "تحليلات و توصيات",
    enTitle: "Analysis and recommendations",
    img: graduated,
    path: "/recommendations",
  },
  {
    id: 2,
    title: "فيديو البروشارت",
    enTitle: "prochart video",
    img: arrow,
    path: "/prochart/video",
  },
  {
    id: 3,
    title: "التعلم",
    enTitle: "learning",
    img: top,
    path: "/courses",
  },
  {
    id: 4,
    title: "التحليل الاقتصادي",
    enTitle: "Economic analysis",
    img: book,
    path: "/blogs",
  },
  {
    id: 5,
    title: "حاسبة الفوركس",
    enTitle: "Forex calculator",
    img: graduated,
    path: "/forex-calc",
  },
  {
    id: 6,
    title: "الإستشارات",
    enTitle: "consulting",
    img: book,
    path: "/consulting",
  },
];
export const accountDetails = {
  name: "عبدالله البراك",
  number: "01022153359",
  accountType: "max",
  accountNum: "151324864",
  amount: 150,
  btnText: "طلب تعديل المعلومات",
};
export const monthlyWithdraw = {
  title: "السحب الشهري",
  enTitle: "Monthly withdrawal",
  desc: "يتم عمل سحب شهري لكل حسابات العملاءالتي تحتوى على 300 دولار للفوز بجائزة 600 دولار",
  enDesc:
    "A monthly draw is held for all customer accounts that contain $300 to win a $600 prize",
  winnerText: "الفائز بجائزة الشهر الحالي",
  enWinnetText: "Current month's prize winner",
  winnerName: "سعيد عبدالله العامري",
};
export const recommendationHistory = {
  deals: 25,
  profits: 390,
  losses: 15,
  numOfPoints: 6500,
  date: "من 1/5/2022 الي 30/5/2022",
};
export const recommendationDetails = [
  {
    currency: "ETH",
    date: "4/7/1998",
    type: "شراء",
    state: "منتهية",
    number: 35.6,
    btnText: "عرض الصفقة",
  },
  {
    currency: "ETH",
    date: "4/7/1998",
    type: "شراء",
    state: "منتهية",
    number: 35.6,
    btnText: "عرض الصفقة",
  },
  {
    currency: "ETH",
    date: "4/7/1998",
    type: "شراء",
    state: "منتهية",
    number: 35.6,
    btnText: "عرض الصفقة",
  },
  {
    currency: "ETH",
    date: "4/7/1998",
    type: "بيع",
    state: "منتهية",
    number: 35.6,
    btnText: "عرض الصفقة",
  },
  {
    currency: "ETH",
    date: "4/7/1998",
    type: "بيع",
    state: "منتهية",
    number: 35.6,
    btnText: "عرض الصفقة",
  },
];
export const maxCards = [
  {
    id: 1,
    title: "pro",
    deposit: 100,
    credit: 0,
    currencies: ["EGP", "USD", "EUR"],
    points: 0.0,
    maximum: "1 : 500",
    minmumm: 0.0,
    commissions: "صفر",
    height: "40%",
  },
  {
    id: 2,
    title: "classic",
    deposit: 100,
    credit: 0,
    currencies: ["EGP", "USD", "EUR"],
    points: 0.0,
    maximum: "1 : 500",
    minmumm: 0.0,
    commissions: "صفر",
    height: "70%",
  },
  {
    id: 3,
    title: "VIP",
    deposit: 100,
    credit: 0,
    currencies: ["EGP", "USD", "EUR"],
    points: 0.0,
    maximum: "1 : 500",
    minmumm: 0.0,
    commissions: "صفر",
    height: "100%",
  },
];
export const proCards = [
  {
    id: 2,
    title: "vip",
    desc: "مميزات فتح حسابات مع أحمد الموسوى",
    details: [
      "متابعة أخبار السوق عبر",
      "تحليل فني واقتصادي اسبوعى للأسواق العالمية",
      "السحب اشهري للفوز بمبلغ 600 دولار",
      "خصم علي خدماتنا (اشتراكات بروشارت  و الدولارت)",
      "اجتماع شهرى مع أ / أحمد مرة للتحدث عن أسواق الفوركس",
      "خصم 5% علي العمولات",
      "خدمة عملاء خاصة على مدار اليوم",
    ],
  },
  {
    id: 2,
    title: "classic",
    desc: "مميزات فتح حسابات مع أحمد الموسوى",
    details: [
      "متابعة أخبار السوق عبر",
      "تحليل فني واقتصادي اسبوعى للأسواق العالمية",
      "السحب اشهري للفوز بمبلغ 600 دولار",
      "خصم علي خدماتنا (اشتراكات بروشارت  و الدولارت)",
      "اجتماع شهرى مع أ / أحمد مرة للتحدث عن أسواق الفوركس",
      "خصم 5% علي العمولات",
      "خدمة عملاء خاصة على مدار اليوم",
    ],
  },
];
export const whyTickmill = [
  {
    id: 1,
    title: "شروط تداول  متفوقة",
    desc: "تمتع بإمكانية الوصول إلى أكثر من 150 أداة مالية, مع سبريد منخفض يبدأ من 0.0 نقطة, وعمولات هي الأقل في السوق",
  },
  {
    id: 2,
    title: "تنفيذ فائق السرعة",
    desc: "تمتع بإمكانية الوصول إلى أكثر من 150 أداة مالية, مع سبريد منخفض يبدأ من 0.0 نقطة, وعمولات هي الأقل في السوق",
  },
  {
    id: 3,
    title: "الاستراتيجيات المسموحة",
    desc: "تمتع بإمكانية الوصول إلى أكثر من 150 أداة مالية, مع سبريد منخفض يبدأ من 0.0 نقطة, وعمولات هي الأقل في السوق",
  },
  {
    id: 4,
    title: "أمان أموال العملاء",
    desc: "تمتع بإمكانية الوصول إلى أكثر من 150 أداة مالية, مع سبريد منخفض يبدأ من 0.0 نقطة, وعمولات هي الأقل في السوق",
  },
  {
    id: 5,
    title: "تكنلوجيا رائدة",
    desc: "تمتع بإمكانية الوصول إلى أكثر من 150 أداة مالية, مع سبريد منخفض يبدأ من 0.0 نقطة, وعمولات هي الأقل في السوق",
  },
  {
    id: 6,
    title: "دعم مختص",
    desc: "تمتع بإمكانية الوصول إلى أكثر من 150 أداة مالية, مع سبريد منخفض يبدأ من 0.0 نقطة, وعمولات هي الأقل في السوق",
  },
];
export const media = {
  partener: ["skrill", "nesteller", "webmoney", "sticpay"],
  details: [
    {
      id: 1,
      title: "الحوالات المصرفية",
    },
    {
      id: 2,
      title: "الحوالات البنكية",
    },
    {
      id: 3,
      title: "بطاقات فيزا وماستر كارد",
    },
    {
      id: 4,
      title: "المحافظ الالكترونية",
    },
  ],
};
export const how = [
  {
    title: "كيف تتم عملية الايداع والسحب",
    details: ["أي كلام", "أي كلام", "أي كلام", "أي كلام", "أي كلام"],
  },
  {
    title: "تراخيص الشركة",
    details: ["أي كلام", "أي كلام", "أي كلام", "أي كلام", "أي كلام"],
  },
];
export const successSlider = [
  {
    static: {
      title: "النجاح في التداول",
      desc: "يبدأ مع اختيارك",
      desc2: "لصفقات ناجحة",
      desc3: "صفقات متميزة حققناها ... لا تتردد بالاطلاع عليها",
    },
    slides: {
      title: "صفقات العملاء",
      desc: "  إذا كنت من محبي التداول على العملات مثل الدولار واليورو شاهد النقاط التي حققناها في هذه الصفقة",
      img: mob,
    },
  },
  {
    static: {
      title: "النجاح في التداول",
      desc: "يبدأ مع اختيارك",
      desc2: "لصفقات ناجحة",
      desc3: "صفقات متميزة حققناها ... لا تتردد بالاطلاع عليها",
    },
    slides: {
      title: "صفقات ",
      desc: "  إذا كنت من محبي التداول على العملات مثل الدولار واليورو شاهد النقاط التي حققناها في هذه الصفقة",
      img: mob2,
    },
  },
  {
    static: {
      title: "النجاح في التداول",
      desc: "يبدأ مع اختيارك",
      desc2: "لصفقات ناجحة",
      desc3: "صفقات متميزة حققناها ... لا تتردد بالاطلاع عليها",
    },
    slides: {
      title: "تيست",
      desc: "  إذا كنت من محبي التداول على العملات مثل الدولار واليورو شاهد النقاط التي حققناها في هذه الصفقة",
      img: mob3,
    },
  },
];
export const test = {
  status: "success",
  message: "",
  ask: {
    title:
      '<p><span style="color: #FF0000;"><strong>Elsaed</strong></span></p>',
    des: "<p>Good Moring Guys</p>",
    image:
      "http://127.0.0.1:8000/uploads/ask/1/en/76oDUB1ralvGvsLmQIeBbtJMNjs0ssWE6ixhStIV.png",
  },
  data: [
    {
      id: 4,
      user: {
        id: 64,
        name: "السعيد البرشلي",
        userName: null,
        email: "saed@gmail.com",
        phone: "01224845766",
        address: null,
        photo:
          "http://127.0.0.1:8000/AdminAssets/app-assets/images/portrait/small/avatar-s-11.jpg",
        birth: null,
        gender: null,
      },
      message: "السلام عليكم علوى حابيب قلبي",
      created_at: "2023-10-10",
      replies: [
        {
          id: 1,
          user: {
            id: 1,
            name: "محمد سلطان",
            userName: null,
            email: "admin@admin.com",
            phone: "01008015133",
            address: null,
            photo:
              "http://127.0.0.1:8000/uploads/users/1/S7j8zkAjFm6NMqOU9aDKiGFLFyZdWeUHSh0sNysv.png",
            birth: null,
            gender: null,
          },
          replies: "حبيبى كيف شو أخبار معاليك .؟",
          created_at: "2023-10-10",
        },
      ],
    },
    {
      id: 5,
      user: {
        id: 64,
        name: "السعيد البرشلي",
        userName: null,
        email: "saed@gmail.com",
        phone: "01224845766",
        address: null,
        photo:
          "http://127.0.0.1:8000/AdminAssets/app-assets/images/portrait/small/avatar-s-11.jpg",
        birth: null,
        gender: null,
      },
      message:
        "بخير ي صديقى موسوى\nبدى طلب سلفهة لاخر الشهر لان لسا القبض منزلش",
      created_at: "2023-10-11",
      replies: [
        {
          id: 2,
          user: {
            id: 1,
            name: "محمد سلطان",
            userName: null,
            email: "admin@admin.com",
            phone: "01008015133",
            address: null,
            photo:
              "http://127.0.0.1:8000/uploads/users/1/S7j8zkAjFm6NMqOU9aDKiGFLFyZdWeUHSh0sNysv.png",
            birth: null,
            gender: null,
          },
          replies: "<p>بس كدا ي باشا انت تؤمر كم بتريد ؟</p>",
          created_at: "2023-10-11",
        },
      ],
    },
    {
      id: 6,
      user: {
        id: 64,
        name: "السعيد البرشلي",
        userName: null,
        email: "saed@gmail.com",
        phone: "01224845766",
        address: null,
        photo:
          "http://127.0.0.1:8000/AdminAssets/app-assets/images/portrait/small/avatar-s-11.jpg",
        birth: null,
        gender: null,
      },
      message: "بدى حوالي مليون دولار ي موسوى ي صديقى",
      created_at: "2023-10-11",
      replies: [],
    },
  ],
};
