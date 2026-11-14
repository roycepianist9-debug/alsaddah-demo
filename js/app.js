/* Al-Saddah landing — hours are a single editable constant. */
const HOURS = "10:00 – 22:00";
// TODO: WhatsApp number and WeChat ID are not known — do not show until confirmed by the owner.

const TAXI_ADDRESS = "广州市越秀区环市中路316号金鹰大厦首层，洒德餐厅";

const I18N = {
  en: {
    title: "Al-Saddah · 洒德餐厅 — Yemeni cuisine in Xiaobei, Guangzhou",
    skip: "Skip to content",
    lang: "Language",
    brandSub: "洒德餐厅",
    navCall: "Call",
    navTaxi: "Taxi card",
    navMenu: "What we serve",
    heroTitle: "Yemeni cooking, just off Xiaobei station",
    heroLede: "Mandi, kabsa, saltah, and bread from the oven — on the ground floor of Jinying Building.",
    badgeMetro: "90 m from Xiaobei Metro, Exit B",
    badgeCuisine: "Yemeni and Gulf cuisine",
    doorKicker: "Finding us",
    doorTitle: "Find the right door",
    doorBody: "Ground floor of Jinying Building (金鹰大厦首层). Look for the gold sign: Sadda Restaurant / 洒德餐厅 — not SABA (沙巴餐厅) next door. There is also a white neon sign: SADDA RESTAURANT BBQ.",
    doorCaption: "The gold fascia on the Jinying Building arcade, with the 金鹰 sign at the edge.",
    taxiTitle: "Show this to your driver",
    copy: "Copy address",
    copied: "Address copied",
    copyFail: "Could not copy. Press and hold the address.",
    metroLabel: "By metro",
    metroBody: "Line 5, Xiaobei Station (小北站), Exit B — about 90 metres on foot.",
    mapsLabel: "Open in maps",
    mapAmap: "Amap",
    mapAmapNote: "Best once you are in mainland China",
    mapBaidu: "Baidu Maps",
    mapApple: "Apple Maps",
    mapGoogle: "Google Maps",
    menuKicker: "The table",
    menuTitle: "What we serve",
    d1en: "Mandi — lamb or chicken",
    d1ar: "المندي باللحم أو الدجاج",
    d1zh: "曼迪手抓饭（羊肉 / 鸡肉）",
    d1desc: "Slow-cooked spiced meat over long-grain rice.",
    d2en: "Kabsa and madhbi",
    d2ar: "الكبسة والمظبي",
    d2zh: "卡布萨、麦兹比",
    d2desc: "Spiced rice and roasted meat in the Yemeni and Gulf style.",
    d3en: "Saltah and fahsa",
    d3ar: "السلتة والفحسة",
    d3zh: "萨尔塔、法赫萨",
    d3desc: "Hot stone-pot Yemeni stews.",
    d4en: "Yemeni bread",
    d4ar: "الخبز اليمني",
    d4zh: "也门大饼、阿拉伯小饼",
    d4desc: "Bread baked in the oven and served fresh.",
    d5en: "Lamb ribs and stir-fried lamb",
    d5ar: "أضلاع الغنم ولحم الغنم المقلي",
    d5zh: "红烧羊排、爆炒羊肉",
    d5desc: "",
    d6en: "Red rice, tea, and Arabic coffee",
    d6ar: "الأرز الأحمر والشاي والقهوة العربية",
    d6zh: "红米饭，茶与阿拉伯咖啡",
    d6desc: "",
    dallahCaption: "Dallah coffee pots in the window of Al-Saddah.",
    groupsKicker: "Gatherings",
    groupsTitle: "Groups and events",
    groupsBody: "Tables for traders, families, and gatherings in Xiaobei. Call if you need a large table or a group meal.",
    hoursKicker: "Today",
    hoursTitle: "Hours",
    hoursConfirm: "Call to confirm",
    reviewKicker: "From a guest",
    reviewTitle: "A note from the room",
    /* REAL review from Amap listing, 匿名用户, 2025-02-03. Source: https://www.amap.com/place/B0FFLOB4SR */
    reviewQuote: "“The fries are crisp outside and tender inside, the garlic lettuce is fresh and light, and the stir-fried lamb is tender and fragrant with chili. Service is attentive, the room is comfortable — recommended.”",
    reviewOrig: "Original in Chinese.",
    reviewAttr: "— Guest on Amap, February 2025",
    reviewCta: "Leave a review",
    dianping: "Dianping",
    googleMaps: "Google Maps",
    footName: "Al-Saddah · 洒德餐厅",
    footAddrLabel: "Address",
    footPhoneLabel: "Phone",
    legal: "广州市洒德餐饮有限公司",
    phonesAria: "Telephone numbers"
  },
  ar: {
    title: "مطعم السدة · 洒德餐厅 — مطبخ يمني في شياوبي، غوانزو",
    skip: "تخطي إلى المحتوى",
    lang: "اللغة",
    brandSub: "洒德餐厅",
    navCall: "اتصال",
    navTaxi: "بطاقة التاكسي",
    navMenu: "ماذا نقدّم",
    heroTitle: "مطبخ يمني، على بُعد خطوات من محطة شياوبي",
    heroLede: "المندي والكبسة والسلتة وخبز الفرن — في الطابق الأرضي من مبنى جينيينغ.",
    badgeMetro: "90 متراً من مترو شياوبي، المخرج B",
    badgeCuisine: "مطبخ يمني وخليجي",
    doorKicker: "الوصول إلينا",
    doorTitle: "ابحث عن الباب الصحيح",
    doorBody: "الطابق الأرضي من مبنى جينيينغ (金鹰大厦首层). ابحث عن اللافتة الذهبية: Sadda Restaurant / 洒德餐厅 — وليس مطعم سابا (沙巴餐厅) المجاور. هناك أيضاً لافتة نيون بيضاء: SADDA RESTAURANT BBQ.",
    doorCaption: "اللافتة الذهبية في رواق مبنى جينيينغ، وعلامة 金鹰 في الطرف.",
    taxiTitle: "أظهر هذا العنوان للسائق",
    copy: "انسخ العنوان",
    copied: "تم نسخ العنوان",
    copyFail: "تعذّر النسخ. اضغط مطوّلاً على العنوان.",
    metroLabel: "بالمترو",
    metroBody: "الخط 5، محطة شياوبي (小北站)، المخرج B — نحو 90 متراً سيراً.",
    mapsLabel: "افتح في الخرائط",
    mapAmap: "خرائط غاوده",
    mapAmapNote: "الأنسب داخل البرّ الصيني",
    mapBaidu: "خرائط بايدو",
    mapApple: "خرائط آبل",
    mapGoogle: "خرائط غوغل",
    menuKicker: "المائدة",
    menuTitle: "ماذا نقدّم",
    d1en: "Mandi — lamb or chicken",
    d1ar: "المندي باللحم أو الدجاج",
    d1zh: "曼迪手抓饭（羊肉 / 鸡肉）",
    d1desc: "لحم متبّل يُطهى على مهل فوق أرز طويل الحبة.",
    d2en: "Kabsa and madhbi",
    d2ar: "الكبسة والمظبي",
    d2zh: "卡布萨、麦兹比",
    d2desc: "أرز وتوابل ولحم مشوي على الطريقة اليمنية والخليجية.",
    d3en: "Saltah and fahsa",
    d3ar: "السلتة والفحسة",
    d3zh: "萨尔塔、法赫萨",
    d3desc: "قدور حجرية يمنية تُقدَّم ساخنة.",
    d4en: "Yemeni bread",
    d4ar: "الخبز اليمني",
    d4zh: "也门大饼、阿拉伯小饼",
    d4desc: "خبز يخرج من الفرن ويُقدَّم طازجاً.",
    d5en: "Lamb ribs and stir-fried lamb",
    d5ar: "أضلاع الغنم ولحم الغنم المقلي",
    d5zh: "红烧羊排、爆炒羊肉",
    d5desc: "",
    d6en: "Red rice, tea, and Arabic coffee",
    d6ar: "الأرز الأحمر والشاي والقهوة العربية",
    d6zh: "红米饭，茶与阿拉伯咖啡",
    d6desc: "",
    dallahCaption: "دلال القهوة في واجهة مطعم السدة.",
    groupsKicker: "اللّقاءات",
    groupsTitle: "المجموعات والمناسبات",
    groupsBody: "طاولات للتجّار والعائلات والتجمّعات في شياوبي. اتصل إن احتجت طاولة كبيرة أو وجبة لمجموعة.",
    hoursKicker: "اليوم",
    hoursTitle: "ساعات العمل",
    hoursConfirm: "اتصل للتأكيد",
    reviewKicker: "من ضيف",
    reviewTitle: "كلمة من القاعة",
    reviewQuote: "«البطاطا المقلية مقرمشة من الخارج وطرية من الداخل، والخس بالثوم منعش، ولحم الغنم المقلي طري وعطري بحرارة الفلفل. الخدمة دقيقة والمكان مريح — أنصح به.»",
    reviewOrig: "الأصل بالصينية.",
    reviewAttr: "— ضيف على خرائط غاوده، فبراير 2025",
    reviewCta: "اكتب تقييماً",
    dianping: "ديانبينغ",
    googleMaps: "خرائط غوغل",
    footName: "مطعم السدة · 洒德餐厅",
    footAddrLabel: "العنوان",
    footPhoneLabel: "الهاتف",
    legal: "广州市洒德餐饮有限公司",
    phonesAria: "أرقام الهاتف"
  },
  zh: {
    title: "洒德餐厅 · Al-Saddah — 广州小北的也门美食",
    skip: "跳到正文",
    lang: "语言",
    brandSub: "Al-Saddah",
    navCall: "打电话",
    navTaxi: "给司机的地址",
    navMenu: "我们提供的菜",
    heroTitle: "也门美食，就在小北",
    heroLede: "曼迪手抓饭、卡布萨、萨尔塔，还有出炉的也门烤饼——金鹰大厦首层。",
    badgeMetro: "距小北站 B出口约90米",
    badgeCuisine: "也门与海湾风味",
    doorKicker: "怎么找",
    doorTitle: "认准这扇门",
    doorBody: "金鹰大厦首层。认准金色招牌「Sadda Restaurant / 洒德餐厅」，不要走隔壁的沙巴餐厅。门店还有一块白色霓虹招牌「SADDA RESTAURANT BBQ」。",
    doorCaption: "金鹰大厦廊下的金色招牌，旁边可见「金鹰」标识。",
    taxiTitle: "把这个地址给司机看",
    copy: "复制地址",
    copied: "已复制地址",
    copyFail: "无法复制，请长按地址。",
    metroLabel: "地铁",
    metroBody: "5号线小北站 B出口，步行约90米。",
    mapsLabel: "在地图中打开",
    mapAmap: "高德地图",
    mapAmapNote: "在内地推荐使用",
    mapBaidu: "百度地图",
    mapApple: "苹果地图",
    mapGoogle: "谷歌地图",
    menuKicker: "餐桌",
    menuTitle: "我们提供的菜",
    d1en: "Mandi — lamb or chicken",
    d1ar: "المندي باللحم أو الدجاج",
    d1zh: "曼迪手抓饭（羊肉 / 鸡肉）",
    d1desc: "慢火香料焖肉，铺在长粒米饭上。",
    d2en: "Kabsa and madhbi",
    d2ar: "الكبسة والمظبي",
    d2zh: "卡布萨、麦兹比",
    d2desc: "也门与海湾风味的香料米饭与烤肉。",
    d3en: "Saltah and fahsa",
    d3ar: "السلتة والفحسة",
    d3zh: "萨尔塔、法赫萨",
    d3desc: "滚烫的也门石锅炖菜。",
    d4en: "Yemeni bread",
    d4ar: "الخبز اليمني",
    d4zh: "也门大饼、阿拉伯小饼",
    d4desc: "烤炉现烤面包。",
    d5en: "Lamb ribs and stir-fried lamb",
    d5ar: "أضلاع الغنم ولحم الغنم المقلي",
    d5zh: "红烧羊排、爆炒羊肉",
    d5desc: "",
    d6en: "Red rice, tea, and Arabic coffee",
    d6ar: "الأرز الأحمر والشاي والقهوة العربية",
    d6zh: "红米饭，茶与阿拉伯咖啡",
    d6desc: "",
    dallahCaption: "洒德餐厅橱窗里的阿拉伯咖啡壶。",
    groupsKicker: "聚会",
    groupsTitle: "团体与宴会",
    groupsBody: "适合小北的商客、家庭和聚餐。如需大桌或团体用餐，请来电商量。",
    hoursKicker: "今日",
    hoursTitle: "营业时间",
    hoursConfirm: "电话确认今日时间",
    reviewKicker: "食客",
    reviewTitle: "一位食客写道",
    reviewQuote: "「炸薯条外脆里嫩，蒜蓉生菜清爽可口，爆炒羊肉鲜嫩香辣，餐厅服务周到细致，环境优雅舒适，推荐品尝！」",
    reviewOrig: "",
    reviewAttr: "—— 高德地图食客，2025年2月",
    reviewCta: "去写评价",
    dianping: "大众点评",
    googleMaps: "谷歌地图",
    footName: "洒德餐厅 · Al-Saddah",
    footAddrLabel: "地址",
    footPhoneLabel: "电话",
    legal: "广州市洒德餐饮有限公司",
    phonesAria: "电话号码"
  }
};

const SUPPORTED = ["en", "ar", "zh"];

function applyLang(lang) {
  if (!SUPPORTED.includes(lang)) lang = "en";
  const dict = I18N[lang];
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = dict.title;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  });
  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    const on = btn.getAttribute("data-set-lang") === lang;
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });
  document.querySelectorAll("[data-hours]").forEach((el) => { el.textContent = HOURS; });
  try { localStorage.setItem("alsaddah-lang", lang); } catch (e) {}
}

function initLang() {
  let lang = "en";
  try { lang = localStorage.getItem("alsaddah-lang") || lang; } catch (e) {}
  const params = new URLSearchParams(location.search);
  if (SUPPORTED.includes(params.get("lang"))) lang = params.get("lang");
  applyLang(lang);
}

function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove("show"), 2200);
}

async function copyAddress() {
  const dict = I18N[document.documentElement.lang] || I18N.en;
  try {
    await navigator.clipboard.writeText(TAXI_ADDRESS);
    showToast(dict.copied);
  } catch (e) {
    const range = document.createRange();
    const node = document.getElementById("taxiAddress");
    range.selectNodeContents(node);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    try {
      document.execCommand("copy");
      showToast(dict.copied);
    } catch (e2) {
      showToast(dict.copyFail);
    }
  }
}

function initTilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("pointermove", (ev) => {
      const r = card.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width - 0.5;
      const y = (ev.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 5}deg)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

function initVideo() {
  const v = document.getElementById("heroVideo");
  if (!v) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { v.pause(); v.removeAttribute("autoplay"); }
  else {
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-set-lang")));
  });
  const copyBtn = document.getElementById("copyAddr");
  if (copyBtn) copyBtn.addEventListener("click", copyAddress);
  initTilt();
  initVideo();
});
