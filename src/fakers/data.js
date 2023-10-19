// prochart
import pie from "../assets/pie-chart.png";
import star from "../assets/star.png";
import wall from "../assets/wall.png";
// course details
import challenger from "../assets/challenger.png";
import mt4 from "../assets/mt4-devices.png";
import advantage from "../assets/advan.png";
import firstImg from "../assets/firstImg.png";
import secondImg from "../assets/secondImg.png";
import thirdImg from "../assets/thirdImg.png";
import fourthImg from "../assets/FOURTHiMG.png";
import fifthImg from "../assets/fifthImg.png";
import sixthImg from "../assets/sixthImg.png";
import seventhImg from "../assets/fifthImg.png";
// rev
import avatar from "../assets/team-4.png";
// icons

import graduated from "../assets/graduated.png";
import arrow from "../assets/arrow.svg";
import top from "../assets/top.svg";
import book from "../assets/book.svg";
// prochart
import mob from "../assets/mob.png";
import mob2 from "../assets/mob-01.png";
import mob3 from "../assets/mob-02.png";

export const aboutUs = [
  {
    title: "تواصل معنا",
    path: "/contact",
  },
  {
    title: "عن أحمد",
    path: "/ahmed",
  },
  {
    title: "اسم الرابط",
    path: "/",
  },
];

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
export const whatOffer = [
  "اتجاهات / السلعة - العملة - المعدن - المؤشر",
  "نقاط الدخول و أسبابها",
  "تحليل اقتصادي عميق للسوق",
  "اهم الاخبار",
  "وقف الخسارة و الأهداف",
  "صفقات لحظية و استثمارية مختلفة المدة لتتناسب مع رغباتك",
  "مناطق البيع و الشراء",
];
export const quota = [
  {
    id: 1,
    title: "البرونزية",
    details: [
      {
        title: "مثال نصي علي المحتوي",
        isTrue: true,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: true,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: false,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: false,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: false,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: false,
      },
    ],
    price: 40,
    offer: "",
    img: wall,
  },
  {
    id: 2,
    title: "الفضية",
    details: [
      {
        title: "مثال نصي علي المحتوي",
        isTrue: true,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: true,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: true,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: true,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: false,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: false,
      },
    ],
    price: 40,
    offer: 8,
    img: star,
  },
  {
    id: 3,
    title: "الذهبية",
    details: [
      {
        title: "مثال نصي علي المحتوي",
        isTrue: true,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: true,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: true,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: true,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: true,
      },
      {
        title: "مثال نصي علي المحتوي",
        isTrue: true,
      },
    ],
    price: 80,
    offer: 30,
    img: pie,
  },
];
export const purchasDetails = [
  "نقوم بإرسال رابط الدفع",
  "يتم تفعيل الاشتراك فورا",
];
export const courseOne = [
  {
    id: 1,
    title: "دورة أساسيات التداول",
    img: null,

    details: [
      "ما هو الفوركس",
      "ما هو السبريد",
      "الرافعة المالية",
      "طريقة فتح حساب حقيقي",
      "قراءة العملات",
      "حجم العقد و النقاط",
      "اختيار الشركة المرخصة",
      "استخدام برنامج التداول mt4",
    ],
  },
  {
    id: 2,
    title: "دورة إدارة رأس المال",
    img: null,
    details: [
      "أهمية ادارة راس المال",
      "أسباب الخسائر و الأرباح",
      "ادارة الصفقات المفتوحة",
      "كيف تبدأ باحترافية",
      "اعداد خطة التداول",
      "برنامج حساب الخسارة و الربح ",
      "كيف تحافظ علي نفسيتك",
    ],
  },
];
export const courseTwo = [
  {
    id: 1,
    title: "دورة أساسيات التداول",
    img: firstImg,
    details: [
      "ما هو الفوركس",
      "ما هو السبريد",
      "الرافعة المالية",
      "طريقة فتح حساب حقيقي",
      "قراءة العملات",
      "حجم العقد و النقاط",
      "اختيار الشركة المرخصة",
      "استخدام برنامج التداول mt4",
    ],
  },
  {
    id: 2,
    title: "دورة إدارة رأس المال",
    img: secondImg,
    details: [
      "أهمية ادارة راس المال",
      "أسباب الخسائر و الأرباح",
      "ادارة الصفقات المفتوحة",
      "كيف تبدأ باحترافية",
      "اعداد خطة التداول",
      "برنامج حساب الخسارة و الربح ",
      "كيف تحافظ علي نفسيتك",
    ],
  },
  {
    id: 3,
    title: "دورة استراتيجتك",
    img: thirdImg,
    details: [
      "اهمية الاستراتيجيات الناجحة",
      "ادارة الصفقات المفتوحة",
      "الدعم و المقاومات",
      "برنامج حساب الخسارة و الربح",
      "طريقة وضع الاستراتيجية",
      "كيف تحافظ علي نفسيتك",
      "التسجيل في trading view",
    ],
  },
];
export const courseThree = [
  {
    id: 1,
    title: "الشموع اليبانية",
    img: fourthImg,
    details: [
      "قراءة وشرح أهم أنواع الشموع بالأمثلة على الشارت وكيفية استخدامهم في التحليل الفني",
    ],
  },
  {
    id: 2,
    title: "الدعم و المقاومة",
    img: fifthImg,
    details: [
      "تحديد مناطق الدعوم و المقاومات",
      "تعيين افضل مناطق لدخزل الصفقات الجديدة ز تحقيق ارباح كبيرة",
    ],
  },
  {
    id: 3,
    title: "الاتجاهات",
    img: sixthImg,
    details: [
      "معرفة انواع الاتجاهات (صاعد | هابط)",
      "تحديد أنواع الوامر (بيع | شراء) اعتمادا علي الاتجاه العام",
      "معرفة طريقة التداول الأمثل (مع الاتجاه او عكس الاتجاه)",
    ],
  },
  {
    id: 4,
    title: "النماذج الفنية",
    img: seventhImg,
    details: [
      "شرح اهم نماذج فنية مهمة",
      "تدريب علي استخراج النماذج الفنية من الشارت",
      "رسم و تحديد النموذج و استخدامها بطريقة احترافية ",
      "ستتعلم كيفية تحديد المناطق الشرائية ووضع الأهداف",
    ],
  },
];
export const coursesDetails = [
  {
    id: 1,
    title: "مستوى متحدي السوق / Challanger",
    img: challenger,
    desc: "هل انت مستعد لتعلم كل ما يخص عالم التداول؟",
    descTwo:
      "نوفر لك مستوى متحدي السوق بدورات متميزة جدا ستساعدك على فهم اساسيات سوق الفوركس والحصول على تجربة استثنائية",
    time: "ساعتين - 4 ساعات",
    price: 170,
    offer: 10,
    to: "أساسي للمبتدئين",
    aboutCourse: [
      "إن عالم التداول هو سوق ليبس صعب ولكن لابد من التعلم حتى تستطيعفهم المصطلحات وتعلم كيف ستدير رأس مالك لتحقيق صفقات ناجحة",
      "لحسن الحظ أننا في شركة أحمد الموسوي سنقدم لك كل ما تحتاجه من الصفر لتدخل السوق بثقة أكبر. فإذا كنت تبحث عن دورات تعرفك على اساسيات سوق التداول وتسهل عليك إدارة رأس مالك.فهذه الدورات صممت خصيصا لك",
    ],
    mt4,
    advantage,
    advantageQuestion:
      "ماذا استفيد من شراء هذه الدورة!! بعد التعلم ماذا أكون تعلمت!! وكيف اطبق اللي اتعلمتة عند التداول؟",
    advantageDetails: [
      "عند شرائك الدورات المتوفرة في هذا المستوى فستكون على دراية ومعرفةأكبر بسوق التداول وستتعلم كيف تدير رأس مالك وهو من أكثر الأمور صعوبة",
      "إذ بعد شرائك هذه الدورات ستكون قادرا على فهم المصطلحات المتعلقة بعالمالتداول وستتعرف على كيفية العمل على المنصات وكيف ستبدأ اول صفقة لك كما أن سيكون لديك معلومات كافية ستساعدك لإدارة رأس مالك",
    ],
    reviews: [
      {
        id: 1,
        name: "ماجد الشافعي",
        jobTitle: "مطور مواقع",
        opinion: "دورة مية المية المية المية المية",
        img: avatar,
      },
      {
        id: 2,
        name: "محمد سليمان",
        jobTitle: "مصمم جرافيك",
        opener:
          "دورة رائعة استفدت كتير وأتمنى لكم المزيد من النجاح والتفوق شكرا مستر أحمد",
        img: avatar,
      },
    ],
    why: [
      {
        id: 1,
        question: "لماذا أساسيات التداول؟",
        answer:
          "إن الضياع في بداية التداول هو أكثر مسبب للخسارة, فأي بناء قوي يجب ان يقوم على أساسيات متينة جدا. ومن هذا المنطلق أن تعلمك للأساسيات التداول خطوة بخطوة ومن خبير متمرس بهذا السوق تجعل منك قوي أمام الصدمات.",
      },
      {
        id: 2,
        question: "لماذا ادارة راس المال",
        answer:
          "إن الضياع في بداية التداول هو أكثر مسبب للخسارة, فأي بنر متمرس بهذا السوق تجعل منك قوي أمام الصدمات.",
      },
    ],

    course: {
      hasIcons: true,
      hasImg: false,
      details: [
        {
          id: 1,
          title: "دورة أساسيات التداول",
          img: null,
          details: [
            "ما هو الفوركس",
            "ما هو السبريد",
            "الرافعة المالية",
            "طريقة فتح حساب حقيقي",
            "قراءة العملات",
            "حجم العقد و النقاط",
            "اختيار الشركة المرخصة",
            "استخدام برنامج التداول mt4",
          ],
        },
        {
          id: 2,
          title: "دورة إدارة رأس المال",
          img: null,
          details: [
            "أهمية ادارة راس المال",
            "أسباب الخسائر و الأرباح",
            "ادارة الصفقات المفتوحة",
            "كيف تبدأ باحترافية",
            "اعداد خطة التداول",
            "برنامج حساب الخسارة و الربح ",
            "كيف تحافظ علي نفسيتك",
          ],
        },
      ],
    },
  },
  {
    id: 2,
    title: "مستوى المحترفين / Professional ",
    img: challenger,
    desc: "إحترف التداول وطور مهاراتك مع مستوى المحترفين",
    descTwo:
      "لأننا نؤمن بأن الاستثمار بالتعلم هو النجاح.. نضع بين أيديكم مجموعة مميزة من الدورات التعليمية من الصفر حتى الإحترافية",
    time: "5 ساعات - 7 ساعات",
    price: 170,
    offer: 10,
    to: "أساسي للمبتدئين",
    aboutCourse: [
      "إن عالم التداول هو سوق ليبس صعب ولكن لابد من التعلم حتى تستطيعفهم المصطلحات وتعلم كيف ستدير رأس مالك لتحقيق صفقات ناجحة",
      "لحسن الحظ أننا في شركة أحمد الموسوي سنقدم لك كل ما تحتاجه من الصفر لتدخل السوق بثقة أكبر. فإذا كنت تبحث عن دورات تعرفك على اساسيات سوق التداول وتسهل عليك إدارة رأس مالك.فهذه الدورات صممت خصيصا لك",
    ],
    mt4: null,
    advantage,
    advantageQuestion:
      "ماذا استفيد من شراء هذه الدورة!! بعد التعلم ماذا أكون تعلمت!! وكيف اطبق اللي اتعلمتة عند التداول؟",
    advantageDetails: [
      "عند شرائك الدورات المتوفرة في هذا المستوى فستكون على دراية ومعرفةأكبر بسوق التداول وستتعلم كيف تدير رأس مالك وهو من أكثر الأمور صعوبة",
      "إذ بعد شرائك هذه الدورات ستكون قادرا على فهم المصطلحات المتعلقة بعالمالتداول وستتعرف على كيفية العمل على المنصات وكيف ستبدأ اول صفقة لك كما أن سيكون لديك معلومات كافية ستساعدك لإدارة رأس مالك",
    ],
    reviews: [
      {
        id: 1,
        name: "ماجد الشافعي",
        jobTitle: "مطور مواقع",
        opinion: "دورة مية المية المية المية المية",
        img: avatar,
      },
      {
        id: 2,
        name: "محمد سليمان",
        jobTitle: "مصمم جرافيك",
        opener:
          "دورة رائعة استفدت كتير وأتمنى لكم المزيد من النجاح والتفوق شكرا مستر أحمد",
        img: avatar,
      },
    ],
    why: [
      {
        id: 1,
        question: "لماذا أساسيات التداول؟",
        answer:
          "إن الضياع في بداية التداول هو أكثر مسبب للخسارة, فأي بناء قوي يجب ان يقوم على أساسيات متينة جدا. ومن هذا المنطلق أن تعلمك للأساسيات التداول خطوة بخطوة ومن خبير متمرس بهذا السوق تجعل منك قوي أمام الصدمات.",
      },
      {
        id: 2,
        question: "لماذا ادارة راس المال",
        answer:
          "إن الضياع في بداية التداول هو أكثر مسبب للخسارة, فأي بنر متمرس بهذا السوق تجعل منك قوي أمام الصدمات.",
      },
    ],

    course: {
      hasIcons: true,
      hasImg: true,

      details: [
        {
          id: 1,
          title: "دورة أساسيات التداول",
          img: firstImg,
          details: [
            "ما هو الفوركس",
            "ما هو السبريد",
            "الرافعة المالية",
            "طريقة فتح حساب حقيقي",
            "قراءة العملات",
            "حجم العقد و النقاط",
            "اختيار الشركة المرخصة",
            "استخدام برنامج التداول mt4",
          ],
        },
        {
          id: 2,
          title: "دورة إدارة رأس المال",
          img: secondImg,
          details: [
            "أهمية ادارة راس المال",
            "أسباب الخسائر و الأرباح",
            "ادارة الصفقات المفتوحة",
            "كيف تبدأ باحترافية",
            "اعداد خطة التداول",
            "برنامج حساب الخسارة و الربح ",
            "كيف تحافظ علي نفسيتك",
          ],
        },
        {
          id: 3,
          title: "دورة استراتيجتك",
          img: thirdImg,
          details: [
            "اهمية الاستراتيجيات الناجحة",
            "ادارة الصفقات المفتوحة",
            "الدعم و المقاومات",
            "برنامج حساب الخسارة و الربح",
            "طريقة وضع الاستراتيجية",
            "كيف تحافظ علي نفسيتك",
            "التسجيل في trading view",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: "مستوى الخبراء / expert ",
    img: challenger,
    desc: "طور مهاراتك الأن وتداول كالخبراء",
    descTwo:
      "في هذا المستوى ستكون قادرا على التداول كالخبراء المتمرسين في السوق... ماذا تنتظر سجل الان وابدا التداول كالخبراء",
    time: "5 ساعات - 7 ساعات",
    price: 870,
    offer: 20,
    to: "متوسط الخبرة للمتداولين",
    aboutCourse: [
      "إذا كنت تتطلع للتداول كخبير والتنبؤ بالأسعار وتحركاتها المستقبلية, فلا بد من تعلم التحليل الفني الذي سيساعدك جدا على اختيار مناطق الدخول والخروج من الصفقة وذلك لكي تستطيع تحقيق أرباح كبيرة معتمدا على نفسك",
    ],
    mt4: null,
    advantage,
    advantageQuestion:
      "ماذا استفيد من شراء هذه الدورة!! بعد التعلم ماذا أكون تعلمت!! وكيف اطبق اللي اتعلمتة عند التداول؟",
    advantageDetails: [
      "عند شرائك الدورات المتوفرة في هذا المستوى فستكون على دراية ومعرفةأكبر بسوق التداول وستتعلم كيف تدير رأس مالك وهو من أكثر الأمور صعوبة",
      "إذ بعد شرائك هذه الدورات ستكون قادرا على فهم المصطلحات المتعلقة بعالمالتداول وستتعرف على كيفية العمل على المنصات وكيف ستبدأ اول صفقة لك كما أن سيكون لديك معلومات كافية ستساعدك لإدارة رأس مالك",
    ],
    reviews: [
      {
        id: 2,
        name: "محمد سليمان",
        jobTitle: "مصمم جرافيك",
        opinion:
          "دورة رائعة استفدت كتير وأتمنى لكم المزيد من النجاح والتفوق شكرا مستر أحمد",
        img: avatar,
      },
      {
        id: 1,
        name: "ماجد الشافعي",
        jobTitle: "مطور مواقع",
        opinion: "دورة مية المية المية المية المية",
        img: avatar,
      },
    ],
    why: [
      {
        id: 1,
        question: "لماذا أساسيات التداول؟",
        answer:
          "إن الضياع في بداية التداول هو أكثر مسبب للخسارة, فأي بناء قوي يجب ان يقوم على أساسيات متينة جدا. ومن هذا المنطلق أن تعلمك للأساسيات التداول خطوة بخطوة ومن خبير متمرس بهذا السوق تجعل منك قوي أمام الصدمات.",
      },
      {
        id: 2,
        question: "لماذا ادارة راس المال",
        answer:
          "إن الضياع في بداية التداول هو أكثر مسبب للخسارة, فأي بنر متمرس بهذا السوق تجعل منك قوي أمام الصدمات.",
      },
    ],

    course: {
      hasIcons: false,
      hasImg: true,

      details: [
        {
          id: 1,
          title: "الشموع اليبانية",
          img: fourthImg,
          details: [
            "قراءة وشرح أهم أنواع الشموع بالأمثلة على الشارت وكيفية استخدامهم في التحليل الفني",
          ],
        },
        {
          id: 2,
          title: "الدعم و المقاومة",
          img: fifthImg,
          details: [
            "تحديد مناطق الدعوم و المقاومات",
            "تعيين افضل مناطق لدخزل الصفقات الجديدة ز تحقيق ارباح كبيرة",
          ],
        },
        {
          id: 3,
          title: "الاتجاهات",
          img: sixthImg,
          details: [
            "معرفة انواع الاتجاهات (صاعد | هابط)",
            "تحديد أنواع الوامر (بيع | شراء) اعتمادا علي الاتجاه العام",
            "معرفة طريقة التداول الأمثل (مع الاتجاه او عكس الاتجاه)",
          ],
        },
        {
          id: 4,
          title: "النماذج الفنية",
          img: seventhImg,
          details: [
            "شرح اهم نماذج فنية مهمة",
            "تدريب علي استخراج النماذج الفنية من الشارت",
            "رسم و تحديد النموذج و استخدامها بطريقة احترافية ",
            "ستتعلم كيفية تحديد المناطق الشرائية ووضع الأهداف",
          ],
        },
      ],
    },
  },
];
export const forexAccDetails = [
  {
    id: 1,
    title: "حاسبة الفوركس",
    img: graduated,
    path: "/forex-calc",
  },
  {
    id: 2,
    title: "المدونة",
    img: arrow,
    path: "/blogs",
  },
  {
    id: 3,
    title: "التقويم الاقتصادي",
    img: top,
  },
  {
    id: 4,
    title: "الدورات التعليمية ",
    img: book,
    path: "/courses",
  },
  {
    id: 5,
    title: "قسم البروشارت",
    img: graduated,
    path: "/user/prochart",
  },
  {
    id: 6,
    title: "الإستشارات",
    img: book,
    path: "/consulting",
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
export const blogsFilter = [
  {
    id: 1,
    title: "جميع الأقسام",
  },
  {
    id: 2,
    title: "تحليلات و أخبار VIP",
  },
  {
    id: 3,
    title: "اسم القسم",
  },
  {
    id: 4,
    title: "اسم القسم",
  },
  {
    id: 5,
    title: "اسم القسم",
  },
];
export const expertCourses = [
  {
    id: 1,
    title: "أساسيات التداول نص تجريبي",
    btnText: "أكمل المشاعدة",
    ratio: 75,
    img: challenger,
  },
  {
    id: 2,
    title: "أساسيات التداول نص تجريبي",
    btnText: "أكمل المشاعدة",
    ratio: 100,
    img: challenger,
  },
  {
    id: 3,
    title: "أساسيات التداول نص تجريبي",
    btnText: "أكمل المشاعدة",
    ratio: 50,
    img: challenger,
  },
];
export const newCourses = [
  {
    id: 1,
    title: "أساسيات التداول نص تجريبي",
    img: challenger,
    price: 150,
    time: "2 ساعات - 4 ساعات ",
  },
  {
    id: 2,
    title: "أساسيات التداول نص تجريبي",
    img: challenger,
    price: 100,
    time: "5 ساعات - 8 ساعات ",
  },
  {
    id: 3,
    title: "أساسيات التداول نص تجريبي",
    img: challenger,
    price: 450,
    time: "2 ساعات - 4 ساعات ",
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
  desc: "يتم عمل سحب شهري لكل حسابات العملاءالتي تحتوى على 300 دولار للفوز بجائزة 600 دولار",
  winnerText: "الفائز بجائزة الشهر الحالي",
  winnerName: "سعيد عبدالله العامري",
};
export const recommendationHistory = {
  deals: 25,
  profits: 390,
  losses: 15,
  numOfPoints: 6500,
  date: "من 1/5/2022 الي 30/5/2022",
};
export const dealsHeader = {
  stopLosees: 0.9759,
  goalThree: 0.9762,
  goalTwo: 0.9762,
  goalOne: 0.9762,
  buying: 0.9762,
  bitcoin: 1.1203,
};
export const dealsDetails = {
  title: "bitcoin",
  published: "5/10/2023",
  finished: "5/11/2023",
  descOne:
    "يتم شرح الهدف الاول هنا نص تجريبي يتم استبدالة بالنص الاصلي . هذا النص تجريبي شكرا للمعاينة",
  descTwos:
    "يتم شرح الهدف الاول هنا نص تجريبي يتم استبدالة بالنص الاصلي . هذا النص تجريبي شكرا للمعاينة",
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
