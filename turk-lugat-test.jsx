import { useState, useEffect } from "react";

// ─── O'ZGARTIRING: O'z ma'lumotlaringizni shu yerga yozing ──────────────────
const BRANDING = {
  appName: "Turk Tili Lug'at Testi",
  ownerName: "Hilol Edu",        // ← o'z ismingiz / kanalингiz nomi
  ownerHandle: "@hilol_edu",     // ← Telegram username
  ownerEmoji: "🎓",              // ← o'z emojingiz
  accentColor: "#6366f1",        // ← asosiy rang
};
// ─────────────────────────────────────────────────────────────────────────────

const vocabularyByLevel = {
  B1: [
    { turk: "abone", uzbek: "obunachi" },
    { turk: "acil", uzbek: "shoshilinch" },
    { turk: "bedel", uzbek: "badal, to'lov" },
    { turk: "borç", uzbek: "qarz" },
    { turk: "boru", uzbek: "quvur" },
    { turk: "deneyim", uzbek: "tajriba" },
    { turk: "depozito", uzbek: "depozit" },
    { turk: "döşeme", uzbek: "pol, to'shama" },
    { turk: "durum", uzbek: "holat" },
    { turk: "emlak", uzbek: "ko'chmas mulk" },
    { turk: "etki", uzbek: "ta'sir" },
    { turk: "fatura", uzbek: "kommunal hisob" },
    { turk: "ısıtma", uzbek: "isitish" },
    { turk: "ihtiyaç", uzbek: "ehtiyoj" },
    { turk: "işlem", uzbek: "jarayon" },
    { turk: "kiralık", uzbek: "ijara" },
    { turk: "konum", uzbek: "manzil" },
    { turk: "mevki", uzbek: "mavqe" },
    { turk: "sigorta", uzbek: "sug'urta" },
    { turk: "vergi", uzbek: "soliq" },
    { turk: "akıtmak", uzbek: "oqizmoq" },
    { turk: "ayırmak", uzbek: "ajratmoq" },
    { turk: "boşaltmak", uzbek: "bo'shatmoq" },
    { turk: "doldurmak", uzbek: "to'ldirmoq" },
    { turk: "ısınmak", uzbek: "isinmoq" },
    { turk: "kurtulmak", uzbek: "qutulmoq" },
    { turk: "söndürmek", uzbek: "o'chirmoq" },
    { turk: "telaşlanmak", uzbek: "xavotir olmoq" },
    { turk: "zenginleşmek", uzbek: "boyimoq" },
    { turk: "sığmak", uzbek: "sig'moq" },
    { turk: "amaç", uzbek: "maqsad" },
    { turk: "ayrıntı", uzbek: "tafsilot" },
    { turk: "azim", uzbek: "qaror, kuch" },
    { turk: "başarı", uzbek: "muvaffaqiyat" },
    { turk: "başlık", uzbek: "sarlavha" },
    { turk: "beklenti", uzbek: "kutish" },
    { turk: "benzerlik", uzbek: "o'xshashlik" },
    { turk: "cazip", uzbek: "jozibali" },
    { turk: "danışman", uzbek: "maslahatchi" },
    { turk: "davranış", uzbek: "o'zini tutish" },
    { turk: "değişiklik", uzbek: "o'zgarish" },
    { turk: "engel", uzbek: "to'siq" },
    { turk: "etkileyici", uzbek: "ta'sirli" },
    { turk: "fırsat", uzbek: "fursat" },
    { turk: "firma", uzbek: "kompaniya" },
    { turk: "geçici", uzbek: "o'tkinchi" },
    { turk: "gıda", uzbek: "ozuqa" },
    { turk: "girişim", uzbek: "tashabbus" },
    { turk: "girişimci", uzbek: "tashabbuskor" },
    { turk: "görev", uzbek: "vazifa" },
    { turk: "güç", uzbek: "kuch" },
    { turk: "hizmet", uzbek: "xizmat" },
    { turk: "ikramiye", uzbek: "mukofot" },
    { turk: "kazanç", uzbek: "qozonish" },
    { turk: "korkunç", uzbek: "qo'rqinchli" },
    { turk: "macera", uzbek: "sarguzasht" },
    { turk: "performans", uzbek: "namoyish" },
    { turk: "risk", uzbek: "xavf" },
    { turk: "sorumlu", uzbek: "mas'ul" },
    { turk: "tehlike", uzbek: "tahlika" },
    { turk: "yapay zeka", uzbek: "sun'iy intellekt" },
    { turk: "yetenek", uzbek: "qobiliyat" },
    { turk: "zafer", uzbek: "zafar" },
    { turk: "zorluk", uzbek: "qiyinchilik" },
    { turk: "aşmak", uzbek: "oshib o'tmoq" },
    { turk: "belirlemek", uzbek: "aniqlamoq" },
    { turk: "eleştirmek", uzbek: "tanqid qilmoq" },
    { turk: "geliştirmek", uzbek: "rivojlantirmoq" },
    { turk: "güvenmek", uzbek: "ishonmoq" },
    { turk: "kurmak", uzbek: "qurmoq" },
    { turk: "kurtarmak", uzbek: "qutqarmoq" },
    { turk: "paylaşmak", uzbek: "baham ko'rmoq" },
    { turk: "ulaşmak", uzbek: "yetishmoq" },
    { turk: "yaratmak", uzbek: "yaratmoq" },
    { turk: "yönetmek", uzbek: "boshqarmoq" },
    { turk: "motive etmek", uzbek: "motivatsiya bermoq" },
    { turk: "söz tutmak", uzbek: "so'zida turmoq" },
    { turk: "alerji", uzbek: "allergiya" },
    { turk: "antibiyotik", uzbek: "antibiotik" },
    { turk: "bağımlı", uzbek: "qaram" },
    { turk: "bağırsak", uzbek: "ichak" },
    { turk: "bakteri", uzbek: "bakteriya" },
    { turk: "besin", uzbek: "oziq-ovqat" },
    { turk: "beyin", uzbek: "miya" },
    { turk: "böbrek", uzbek: "buyrak" },
    { turk: "bulantı", uzbek: "ko'ngil aynishi" },
    { turk: "bulaşıcı", uzbek: "yuqumli" },
    { turk: "çürük", uzbek: "chirigan" },
    { turk: "dalak", uzbek: "taloq" },
    { turk: "damar", uzbek: "tomir" },
    { turk: "eklem", uzbek: "qo'shma" },
    { turk: "felç", uzbek: "falaj" },
    { turk: "iltihap", uzbek: "yallig'lanish" },
    { turk: "ishal", uzbek: "diareya" },
    { turk: "karaciğer", uzbek: "jigar" },
    { turk: "kızamık", uzbek: "qizamiq" },
    { turk: "kronik hastalık", uzbek: "surunkali kasallik" },
    { turk: "kusma", uzbek: "qusish" },
    { turk: "mide", uzbek: "oshqazon" },
    { turk: "migren", uzbek: "migren" },
    { turk: "mikrop", uzbek: "mikrop" },
    { turk: "nezle", uzbek: "shamollash" },
    { turk: "obezite", uzbek: "semizlik" },
    { turk: "salgın", uzbek: "epidemiya" },
    { turk: "toksin", uzbek: "zahar" },
    { turk: "virüs", uzbek: "virus" },
    { turk: "yara", uzbek: "yara" },
    { turk: "bulaşmak", uzbek: "yuqmoq" },
    { turk: "kızarmak", uzbek: "qizarmoq" },
    { turk: "şişmek", uzbek: "shishmoq" },
    { turk: "terlemek", uzbek: "terlamoq" },
    { turk: "titremek", uzbek: "titramoq" },
    { turk: "yaralanmak", uzbek: "yaralanmoq" },
    { turk: "iyileşmek", uzbek: "yaxshilanmoq" },
    { turk: "akıcı", uzbek: "ravon" },
    { turk: "akran", uzbek: "tengdosh" },
    { turk: "araştırma", uzbek: "tadqiqot" },
    { turk: "arzu", uzbek: "istak, orzu" },
    { turk: "bağlantı", uzbek: "ulanish" },
    { turk: "baskı", uzbek: "bosim" },
    { turk: "bilgi", uzbek: "ma'lumot" },
    { turk: "bilinçli", uzbek: "ongli" },
    { turk: "denge", uzbek: "muvozanat" },
    { turk: "disiplin", uzbek: "intizom" },
    { turk: "esneklik", uzbek: "moslashuvchanlik" },
    { turk: "gurur", uzbek: "g'urur" },
    { turk: "hafıza", uzbek: "xotira" },
    { turk: "iletişim", uzbek: "aloqa" },
    { turk: "ilişki", uzbek: "munosabat" },
    { turk: "kalite", uzbek: "sifat" },
    { turk: "kavram", uzbek: "tushuncha" },
    { turk: "koordinasyon", uzbek: "muvofiqlashtirish" },
    { turk: "kurum", uzbek: "tashkilot" },
    { turk: "makale", uzbek: "maqola" },
    { turk: "melodi", uzbek: "ohang" },
    { turk: "proje", uzbek: "loyiha" },
    { turk: "ritim", uzbek: "ritm" },
    { turk: "sektör", uzbek: "sektor" },
    { turk: "siyaset", uzbek: "siyosat" },
    { turk: "ustalık", uzbek: "mahorat" },
    { turk: "uzay", uzbek: "fazo, kosmos" },
    { turk: "yöntem", uzbek: "usul" },
    { turk: "zeka", uzbek: "aql" },
    { turk: "açlık", uzbek: "ochlik" },
    { turk: "ebeveyn", uzbek: "ota-ona" },
    { turk: "empati", uzbek: "hamdardlik" },
    { turk: "keşke", uzbek: "koshki edi" },
    { turk: "pışmanlık", uzbek: "pushaymonlik" },
    { turk: "sabır", uzbek: "sabr" },
    { turk: "umutsuz", uzbek: "umidsiz" },
    { turk: "ürün", uzbek: "mahsulot" },
    { turk: "pişman olmak", uzbek: "pushaymon bo'lmoq" },
    { turk: "talep etmek", uzbek: "talab qilmoq" },
    { turk: "barış", uzbek: "tinchlik" },
    { turk: "beden dili", uzbek: "badan tili" },
    { turk: "dindarlık", uzbek: "dindorlik" },
    { turk: "dolunay", uzbek: "to'lin oy" },
    { turk: "etkinlik", uzbek: "faoliyat" },
    { turk: "hayat tarzı", uzbek: "hayot tarzi" },
    { turk: "karmaşık", uzbek: "murakkab" },
    { turk: "kumaş", uzbek: "mato" },
    { turk: "onur", uzbek: "hurmat, sharaf" },
    { turk: "organik", uzbek: "organik" },
    { turk: "sakinlik", uzbek: "sokinlik" },
    { turk: "tarım", uzbek: "qishloq xo'jaligi" },
    { turk: "temsilci", uzbek: "vakil" },
    { turk: "iptal etmek", uzbek: "bekor qilmoq" },
    { turk: "söz vermek", uzbek: "va'da bermoq" },
    { turk: "kabul etmek", uzbek: "qabul qilmoq" },
    { turk: "reddetmek", uzbek: "rad etmoq" },
  ],
  B2: [
    { turk: "buhar", uzbek: "bug'" },
    { turk: "geçim", uzbek: "tirikchilik" },
    { turk: "gezgin", uzbek: "sayyoh" },
    { turk: "hac", uzbek: "haj" },
    { turk: "heves", uzbek: "ishtiyoq" },
    { turk: "ibadet", uzbek: "ibodat" },
    { turk: "içten", uzbek: "samimiy" },
    { turk: "içtenlik", uzbek: "samimiylik" },
    { turk: "konaklama", uzbek: "turar joy" },
    { turk: "konukseverlik", uzbek: "mehmondo'stlik" },
    { turk: "kutsal", uzbek: "muqaddas" },
    { turk: "mütevazı", uzbek: "kamtarin" },
    { turk: "sezon", uzbek: "mavsum" },
    { turk: "şifalı", uzbek: "shifobaxsh" },
    { turk: "vitrin", uzbek: "vitrina" },
    { turk: "yarımada", uzbek: "yarimorol" },
    { turk: "misafirperver", uzbek: "mehmondo'st" },
    { turk: "hayran kalmak", uzbek: "hayratlanmoq" },
    { turk: "övmek", uzbek: "maqtamoq" },
    { turk: "batarya", uzbek: "batareya" },
    { turk: "buluş", uzbek: "ixtiro" },
    { turk: "direksiyon", uzbek: "avtomobil ro'li" },
    { turk: "dokunmatik", uzbek: "sensorli" },
    { turk: "donanım", uzbek: "uskuna" },
    { turk: "ekran", uzbek: "ekran" },
    { turk: "erişim", uzbek: "kirish" },
    { turk: "fren", uzbek: "tormoz" },
    { turk: "kılıf", uzbek: "g'ilof" },
    { turk: "kullanıcı", uzbek: "foydalanuvchi" },
    { turk: "mucit", uzbek: "ixtirochi" },
    { turk: "patent", uzbek: "patent" },
    { turk: "sim kart", uzbek: "sim karta" },
    { turk: "sosyal ağ", uzbek: "ijtimoiy tarmoq" },
    { turk: "şarj", uzbek: "zaryad" },
    { turk: "titreşim", uzbek: "tebranish" },
    { turk: "uygulama", uzbek: "ilova" },
    { turk: "varlıklı", uzbek: "badavlat" },
    { turk: "yazılım", uzbek: "dasturiy ta'minot" },
    { turk: "vites", uzbek: "tezlik (mashinada)" },
    { turk: "otonom", uzbek: "avtonom" },
    { turk: "indirmek", uzbek: "yuklab olmoq" },
    { turk: "yüklemek", uzbek: "yuklamoq" },
    { turk: "besteci", uzbek: "bastakor" },
    { turk: "boncuk", uzbek: "munchoq" },
    { turk: "çalgı", uzbek: "cholg'u asbob" },
    { turk: "çelik", uzbek: "po'lat" },
    { turk: "desen", uzbek: "naqsh" },
    { turk: "devrim", uzbek: "inqilob" },
    { turk: "etik", uzbek: "axloq" },
    { turk: "evrensel", uzbek: "umumjahon" },
    { turk: "gösterişli", uzbek: "hashamatli" },
    { turk: "gurbet", uzbek: "g'urbat" },
    { turk: "hasret", uzbek: "sog'inch" },
    { turk: "kürk", uzbek: "shuba, mo'yna" },
    { turk: "makam", uzbek: "maqom" },
    { turk: "moda", uzbek: "moda" },
    { turk: "oruç", uzbek: "ro'za" },
    { turk: "yiğitlik", uzbek: "mardlik" },
    { turk: "göç", uzbek: "ko'chish" },
    { turk: "kuşak", uzbek: "nasl, avlod" },
    { turk: "tohum", uzbek: "urug'" },
    { turk: "beyin göçü", uzbek: "miya drenaji" },
    { turk: "etkilemek", uzbek: "ta'sir qilmoq" },
    { turk: "etkilenmek", uzbek: "ta'sirlanmoq" },
    { turk: "bürokrasi", uzbek: "rasmiyatchilik" },
    { turk: "delil", uzbek: "dalil" },
    { turk: "dolandırıcılık", uzbek: "firibgarlik" },
    { turk: "göçmenlik", uzbek: "muhojirlik" },
    { turk: "kazara", uzbek: "tasodifan" },
    { turk: "kısas", uzbek: "qasos" },
    { turk: "korsan", uzbek: "internet qaroqchisi" },
    { turk: "mücadele", uzbek: "kurash" },
    { turk: "müebbet", uzbek: "umrbod" },
    { turk: "muamma", uzbek: "muammo" },
    { turk: "rekortmen", uzbek: "rekordchi" },
    { turk: "sabıka", uzbek: "sudlanganlik" },
    { turk: "siber", uzbek: "kiber" },
    { turk: "soygunculuk", uzbek: "talonchilik" },
    { turk: "söyleşi", uzbek: "suhbat" },
    { turk: "savcı", uzbek: "prokuror" },
    { turk: "hakim", uzbek: "sudya" },
    { turk: "tanık", uzbek: "guvoh" },
    { turk: "yankesiclik", uzbek: "kissavurlik" },
    { turk: "yolsuzluk", uzbek: "korrupsiya" },
    { turk: "tazminat", uzbek: "tovon" },
    { turk: "engellemek", uzbek: "to'sqinlik qilmoq" },
    { turk: "tutuklamak", uzbek: "hibsga olmoq" },
    { turk: "sorgulamak", uzbek: "so'roq qilmoq" },
    { turk: "ispatlamak", uzbek: "isbotlamoq" },
    { turk: "mahkum etmek", uzbek: "hukm qilmoq" },
    { turk: "alışkanlık", uzbek: "odat" },
    { turk: "atmosfer", uzbek: "atmosfera" },
    { turk: "deprem", uzbek: "zilzila" },
    { turk: "doğa", uzbek: "tabiat" },
    { turk: "iklim", uzbek: "iqlim" },
    { turk: "karanlık", uzbek: "qorong'ulik" },
    { turk: "kuraklık", uzbek: "qurg'oqchilik" },
    { turk: "manzara", uzbek: "manzara" },
    { turk: "nem", uzbek: "nam" },
    { turk: "sel", uzbek: "sel" },
    { turk: "sihirbaz", uzbek: "sehrgar" },
    { turk: "toz", uzbek: "chang" },
    { turk: "tsunami", uzbek: "sunami" },
    { turk: "yağmur", uzbek: "yomg'ir" },
    { turk: "yer çekimi", uzbek: "yer tortishish kuchi" },
    { turk: "hortum", uzbek: "tornado" },
    { turk: "kum fırtınası", uzbek: "qum bo'roni" },
    { turk: "gökkuşağı", uzbek: "kamalak" },
    { turk: "yanardağ", uzbek: "vulqon" },
    { turk: "yıldırım", uzbek: "chaqmoq" },
    { turk: "donmak", uzbek: "muzlamoq" },
    { turk: "taşmak", uzbek: "toshmoq" },
    { turk: "anlam", uzbek: "ma'no" },
    { turk: "ayran", uzbek: "ayron" },
    { turk: "döviz", uzbek: "valyuta" },
    { turk: "düğün", uzbek: "to'y" },
    { turk: "ehliyet", uzbek: "haydovchilik guvohnomasi" },
    { turk: "ekip", uzbek: "jamoa" },
    { turk: "geleneksel", uzbek: "an'anaviy" },
    { turk: "heyecan", uzbek: "hayajon" },
    { turk: "inanç", uzbek: "ishonch" },
    { turk: "karar", uzbek: "qaror" },
    { turk: "nakit", uzbek: "naqd pul" },
    { turk: "öncelik", uzbek: "ustuvorlik" },
    { turk: "rakip", uzbek: "raqib" },
    { turk: "sanatçı", uzbek: "san'atkor" },
    { turk: "sinir", uzbek: "asab" },
    { turk: "siyasetçi", uzbek: "siyosatchi" },
    { turk: "sözleşme", uzbek: "shartnoma" },
    { turk: "ünlü", uzbek: "mashhur" },
    { turk: "vatandaş", uzbek: "vatandosh" },
    { turk: "refah", uzbek: "farovonlik" },
    { turk: "öneri", uzbek: "taklif" },
    { turk: "lazım", uzbek: "kerak" },
    { turk: "gürültü", uzbek: "shovqin-suron" },
    { turk: "sınır", uzbek: "chegara" },
    { turk: "bitirmek", uzbek: "bitirmoq" },
    { turk: "kaybolmak", uzbek: "yo'qolmoq" },
    { turk: "çözmek", uzbek: "hal qilmoq" },
    { turk: "vazgeçmek", uzbek: "voz kechmoq" },
    { turk: "kazanmak", uzbek: "g'alaba qozonmoq" },
  ],
};

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function getOptions(correct, pool, field) {
  const others = pool.filter((w) => w[field] !== correct[field]).map((w) => w[field]);
  return shuffle([correct[field], ...shuffle(others).slice(0, 3)]);
}

const TOTAL = 10;
const LEVELS = ["B1", "B2", "B1 + B2"];
const LC = { B1: "#3b82f6", B2: "#8b5cf6", "B1 + B2": "#06b6d4" };

function getPool(lvl) {
  if (lvl === "B1 + B2") return [...vocabularyByLevel.B1, ...vocabularyByLevel.B2];
  return vocabularyByLevel[lvl] || [];
}

// ── Natija emojiси ────────────────────────────────────────────────────────────
function gradeInfo(pct) {
  if (pct >= 90) return { text: "A'lo!", emoji: "🏆", color: "#f59e0b" };
  if (pct >= 70) return { text: "Yaxshi!", emoji: "🌟", color: "#22c55e" };
  if (pct >= 50) return { text: "O'rtacha", emoji: "💪", color: "#3b82f6" };
  return { text: "Mashq kerak", emoji: "📚", color: "#f87171" };
}

export default function App() {
  const [screen, setScreen] = useState("welcome");   // welcome | home | quiz | result
  const [username, setUsername] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [direction, setDirection] = useState("turk-uzbek");
  const [level, setLevel] = useState("B1");
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [shake, setShake] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [history, setHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem("lugat_history") || "[]"); } catch { return []; }
  });

  function saveHistory(newEntry) {
    const updated = [newEntry, ...history].slice(0, 10);
    setHistory(updated);
    try { localStorage.setItem("lugat_history", JSON.stringify(updated)); } catch {}
  }

  function handleWelcome() {
    const name = inputVal.trim();
    if (!name) return;
    setUsername(name);
    setScreen("home");
  }

  function startQuiz(dir) {
    setDirection(dir);
    const pool = getPool(level);
    setQuestions(shuffle(pool).slice(0, TOTAL));
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setAnswers([]);
    setScreen("quiz");
  }

  function handleSelect(option) {
    if (selected !== null) return;
    setSelected(option);
    const q = questions[current];
    const af = direction === "turk-uzbek" ? "uzbek" : "turk";
    const isCorrect = option === q[af];
    if (isCorrect) { setScore((s) => s + 1); setPulse(true); setTimeout(() => setPulse(false), 500); }
    else { setShake(true); setTimeout(() => setShake(false), 500); }
    setAnswers((prev) => [...prev, { question: q, chosen: option, correct: isCorrect }]);
    setTimeout(() => {
      if (current + 1 >= TOTAL) {
        const pct = Math.round(((score + (isCorrect ? 1 : 0)) / TOTAL) * 100);
        saveHistory({ user: username, level, dir, score: score + (isCorrect ? 1 : 0), pct, date: new Date().toLocaleDateString("uz-UZ") });
        setScore((s) => s + (isCorrect ? 1 : 0));
        setScreen("result");
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }, 900);
  }

  const q = questions[current];
  const askF = direction === "turk-uzbek" ? "turk" : "uzbek";
  const ansF = direction === "turk-uzbek" ? "uzbek" : "turk";
  const pool = getPool(level);
  const options = q ? getOptions(q, pool, ansF) : [];
  const pct = Math.round((score / TOTAL) * 100);
  const gi = gradeInfo(pct);
  const lc = LC[level] || BRANDING.accentColor;

  return (
    <div style={S.root}>
      {/* Fon geometriyasi */}
      <div style={{ ...S.blob, top: "-80px", left: "-80px", background: `${BRANDING.accentColor}18` }} />
      <div style={{ ...S.blob, bottom: "-60px", right: "-60px", background: `${lc}14`, width: "300px", height: "300px" }} />

      {/* ── WELCOME ────────────────────────────────── */}
      {screen === "welcome" && (
        <div style={S.card}>
          <div style={S.ownerBadge}>
            <span>{BRANDING.ownerEmoji}</span>
            <span style={S.ownerName}>{BRANDING.ownerName}</span>
            <span style={S.ownerHandle}>{BRANDING.ownerHandle}</span>
          </div>
          <div style={S.flagRow}>
            <span style={S.flag}>🇹🇷</span>
            <span style={{ ...S.arrow, color: BRANDING.accentColor }}>⇄</span>
            <span style={S.flag}>🇺🇿</span>
          </div>
          <h1 style={S.title}>{BRANDING.appName}</h1>
          <p style={S.sub}>B1 · B2 darajalar · Hilol Edu lug'ati</p>

          <div style={S.welcomeBox}>
            <p style={S.welcomeLabel}>Ismingizni kiriting</p>
            <input
              style={S.input}
              type="text"
              placeholder="Masalan: Jasur"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleWelcome()}
              maxLength={20}
            />
            <button
              style={{ ...S.startBtn, background: BRANDING.accentColor, opacity: inputVal.trim() ? 1 : 0.5 }}
              onClick={handleWelcome}
            >
              Boshlash →
            </button>
          </div>

          {history.length > 0 && (
            <div style={S.histBox}>
              <p style={S.histTitle}>⏱ Oxirgi natijalar</p>
              {history.slice(0, 4).map((h, i) => (
                <div key={i} style={S.histRow}>
                  <span style={S.histUser}>👤 {h.user}</span>
                  <span style={S.histLvl}>{h.level}</span>
                  <span style={{ ...S.histScore, color: h.pct >= 70 ? "#4ade80" : "#f87171" }}>{h.score}/{TOTAL}</span>
                  <span style={S.histDate}>{h.date}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── HOME ───────────────────────────────────── */}
      {screen === "home" && (
        <div style={S.card}>
          <div style={S.ownerBadge}>
            <span>{BRANDING.ownerEmoji}</span>
            <span style={S.ownerName}>{BRANDING.ownerName}</span>
            <span style={S.ownerHandle}>{BRANDING.ownerHandle}</span>
          </div>

          <div style={S.userGreet}>
            <div style={{ ...S.avatar, background: lc }}>
              {username.charAt(0).toUpperCase()}
            </div>
            <div>
              <p style={S.greetHi}>Salom, <strong>{username}</strong>! 👋</p>
              <p style={S.greetSub}>Qaysi darajadan test topshirmoqchisiz?</p>
            </div>
          </div>

          <p style={S.secLabel}>DARAJA</p>
          <div style={S.levelRow}>
            {LEVELS.map((lvl) => (
              <button key={lvl} style={{ ...S.levelBtn, background: level === lvl ? LC[lvl] : "rgba(255,255,255,0.05)", border: `1px solid ${level === lvl ? LC[lvl] : "rgba(255,255,255,0.1)"}`, color: level === lvl ? "#fff" : "#8080b0", fontWeight: level === lvl ? "700" : "500" }} onClick={() => setLevel(lvl)}>
                {lvl}
              </button>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "#5050a0", fontSize: "12px", marginBottom: "18px" }}>
            📚 {getPool(level).length} ta so'z mavjud
          </p>

          <p style={S.secLabel}>YO'NALISH</p>
          <div style={S.dirCol}>
            <button style={{ ...S.dirBtn, background: `linear-gradient(135deg, ${lc}ee, ${lc}99)` }} onClick={() => startQuiz("turk-uzbek")}>
              <span>🇹🇷 Turkcha</span><span style={S.arr}>→</span><span>🇺🇿 O'zbekcha</span>
            </button>
            <button style={{ ...S.dirBtn, background: `linear-gradient(135deg, ${lc}99, ${lc}ee)` }} onClick={() => startQuiz("uzbek-turk")}>
              <span>🇺🇿 O'zbekcha</span><span style={S.arr}>→</span><span>🇹🇷 Turkcha</span>
            </button>
          </div>

          <button style={S.backBtn} onClick={() => setScreen("welcome")}>← Orqaga</button>
        </div>
      )}

      {/* ── QUIZ ───────────────────────────────────── */}
      {screen === "quiz" && q && (
        <div style={S.card}>
          {/* Top bar */}
          <div style={S.quizTop}>
            <div style={{ ...S.avatar, background: lc, width: "28px", height: "28px", fontSize: "12px" }}>
              {username.charAt(0).toUpperCase()}
            </div>
            <span style={{ color: "#8080b0", fontSize: "12px" }}>{username}</span>
            <span style={{ flex: 1 }} />
            <span style={{ ...S.metaBadge, color: lc, borderColor: `${lc}44` }}>{level} · {current + 1}/{TOTAL}</span>
            <span style={S.scoreBadge}>✔ {score}</span>
          </div>

          <div style={S.progBar}>
            <div style={{ ...S.progFill, width: `${(current / TOTAL) * 100}%`, background: lc }} />
          </div>

          <div style={{ ...S.qBox, borderColor: `${lc}44`, background: `${lc}11`, animation: shake ? "shake .4s" : pulse ? "pulse .4s" : "none" }}>
            <p style={S.qLabel}>{direction === "turk-uzbek" ? "🇹🇷 Turk so'zi:" : "🇺🇿 O'zbek so'zi:"}</p>
            <h2 style={S.qWord}>{q[askF]}</h2>
          </div>

          <p style={S.chooseLabel}>{direction === "turk-uzbek" ? "🇺🇿 O'zbekcha tarjimasi:" : "🇹🇷 Turkcha tarjimasi:"}</p>
          <div style={S.grid}>
            {options.map((opt) => {
              const isC = opt === q[ansF], isCh = opt === selected;
              let bs = { ...S.optBtn, borderColor: `${lc}33` };
              if (selected !== null) {
                if (isC) bs = { ...bs, ...S.optOk };
                else if (isCh) bs = { ...bs, ...S.optErr };
                else bs = { ...bs, opacity: 0.3 };
              }
              return <button key={opt} style={bs} onClick={() => handleSelect(opt)}>{opt}</button>;
            })}
          </div>

          {/* Owner watermark */}
          <p style={S.watermark}>{BRANDING.ownerEmoji} {BRANDING.ownerHandle}</p>
        </div>
      )}

      {/* ── RESULT ─────────────────────────────────── */}
      {screen === "result" && (
        <div style={S.card}>
          <div style={S.ownerBadge}>
            <span>{BRANDING.ownerEmoji}</span>
            <span style={S.ownerName}>{BRANDING.ownerName}</span>
            <span style={S.ownerHandle}>{BRANDING.ownerHandle}</span>
          </div>

          <div style={{ ...S.resCircle, borderColor: gi.color, background: `${gi.color}18`, boxShadow: `0 0 30px ${gi.color}33` }}>
            <span style={{ fontSize: "28px" }}>{gi.emoji}</span>
            <span style={S.resScore}>{score}/{TOTAL}</span>
            <span style={S.resPct}>{pct}%</span>
          </div>

          <h2 style={{ ...S.grade, color: gi.color }}>{gi.text}</h2>
          <p style={{ textAlign: "center", color: "#8080b0", fontSize: "13px", marginBottom: "4px" }}>
            👤 {username} · <span style={{ color: lc }}>{level} daraja</span>
          </p>

          <div style={S.reviewList}>
            {answers.map((a, i) => (
              <div key={i} style={{ ...S.reviewItem, borderLeft: `3px solid ${a.correct ? "#4ade80" : "#f87171"}` }}>
                <span style={S.revQ}>{a.question[askF]}</span>
                <span style={S.revArr}>→</span>
                <span style={a.correct ? S.revOk : S.revErr}>{a.correct ? a.chosen : `${a.chosen} ✗`}</span>
                {!a.correct && <span style={S.revAns}>({a.question[ansF]} ✓)</span>}
              </div>
            ))}
          </div>

          <div style={S.resBtns}>
            <button style={{ ...S.retryBtn, background: lc }} onClick={() => startQuiz(direction)}>🔄 Qayta</button>
            <button style={S.homeBtn} onClick={() => setScreen("home")}>🏠 Bosh sahifa</button>
          </div>
          <p style={S.watermark}>{BRANDING.ownerEmoji} {BRANDING.ownerHandle}</p>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Nunito:wght@400;600;700&display=swap');
        @keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
        @keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        *{box-sizing:border-box;margin:0;padding:0}
        input:focus{outline:none}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#060612}::-webkit-scrollbar-thumb{background:#6366f144;border-radius:3px}
      `}</style>
    </div>
  );
}

const S = {
  root: { minHeight: "100vh", background: "linear-gradient(135deg,#050510 0%,#0c0820 50%,#050510 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Nunito',sans-serif", padding: "20px", position: "relative", overflow: "hidden" },
  blob: { position: "absolute", width: "360px", height: "360px", borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" },
  card: { background: "rgba(8,6,22,0.97)", border: "1px solid rgba(100,80,220,0.2)", borderRadius: "22px", padding: "28px 24px", width: "100%", maxWidth: "500px", boxShadow: "0 0 60px rgba(60,40,200,0.12),0 24px 60px rgba(0,0,0,0.9)", animation: "fadeIn .4s ease", position: "relative", zIndex: 1 },
  ownerBadge: { display: "flex", alignItems: "center", gap: "6px", justifyContent: "center", marginBottom: "14px", background: "rgba(100,80,220,0.08)", border: "1px solid rgba(100,80,220,0.18)", borderRadius: "20px", padding: "5px 14px", width: "fit-content", margin: "0 auto 14px" },
  ownerName: { color: "#c0b8f0", fontSize: "12px", fontWeight: "700" },
  ownerHandle: { color: "#5050a0", fontSize: "11px" },
  flagRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "10px" },
  flag: { fontSize: "28px" },
  arrow: { fontSize: "18px", fontWeight: "bold" },
  title: { fontFamily: "'Cinzel',serif", fontSize: "18px", color: "#c0b8f0", textAlign: "center", marginBottom: "4px" },
  sub: { color: "#5050a0", textAlign: "center", fontSize: "12px", marginBottom: "22px" },
  welcomeBox: { background: "rgba(100,80,220,0.07)", border: "1px solid rgba(100,80,220,0.15)", borderRadius: "14px", padding: "20px", marginBottom: "16px" },
  welcomeLabel: { color: "#8080b0", fontSize: "12px", marginBottom: "10px", textAlign: "center" },
  input: { width: "100%", padding: "11px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(100,80,220,0.25)", borderRadius: "10px", color: "#c0b8f0", fontSize: "15px", fontFamily: "'Nunito',sans-serif", marginBottom: "12px" },
  startBtn: { width: "100%", padding: "12px", border: "none", borderRadius: "10px", color: "#fff", fontSize: "15px", fontWeight: "700", fontFamily: "'Nunito',sans-serif", cursor: "pointer" },
  histBox: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(100,80,220,0.1)", borderRadius: "12px", padding: "14px" },
  histTitle: { color: "#5050a0", fontSize: "11px", letterSpacing: "1px", marginBottom: "8px" },
  histRow: { display: "flex", alignItems: "center", gap: "8px", padding: "5px 0", borderBottom: "1px solid rgba(100,80,220,0.08)" },
  histUser: { color: "#c0b8f0", fontSize: "12px", flex: 1 },
  histLvl: { color: "#6060c0", fontSize: "11px", background: "rgba(100,80,220,0.1)", padding: "1px 7px", borderRadius: "8px" },
  histScore: { fontSize: "12px", fontWeight: "700" },
  histDate: { color: "#4040a0", fontSize: "11px" },
  userGreet: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", background: "rgba(100,80,220,0.07)", borderRadius: "12px", padding: "14px" },
  avatar: { width: "38px", height: "38px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "700", fontSize: "16px", flexShrink: 0 },
  greetHi: { color: "#c0b8f0", fontSize: "14px" },
  greetSub: { color: "#6060a0", fontSize: "12px", marginTop: "2px" },
  secLabel: { color: "#4040a0", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px", textAlign: "center" },
  levelRow: { display: "flex", gap: "8px", marginBottom: "8px", justifyContent: "center" },
  levelBtn: { flex: 1, padding: "9px 4px", borderRadius: "10px", cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontSize: "13px", transition: "all .2s", maxWidth: "120px" },
  dirCol: { display: "flex", flexDirection: "column", gap: "9px", marginBottom: "12px" },
  dirBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "13px 20px", border: "none", borderRadius: "12px", cursor: "pointer", color: "#fff", fontSize: "14px", fontFamily: "'Nunito',sans-serif", fontWeight: "700" },
  arr: { fontSize: "14px", opacity: 0.7 },
  backBtn: { width: "100%", padding: "8px", background: "transparent", border: "1px solid rgba(100,80,220,0.15)", borderRadius: "10px", color: "#4040a0", fontFamily: "'Nunito',sans-serif", fontSize: "13px", cursor: "pointer", marginTop: "4px" },
  quizTop: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" },
  metaBadge: { fontSize: "11px", background: "rgba(255,255,255,0.04)", padding: "3px 9px", borderRadius: "20px", border: "1px solid" },
  scoreBadge: { color: "#4ade80", fontSize: "11px", background: "rgba(74,222,128,0.08)", padding: "3px 9px", borderRadius: "20px" },
  progBar: { height: "3px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", marginBottom: "14px", overflow: "hidden" },
  progFill: { height: "100%", borderRadius: "2px", transition: "width .4s ease" },
  qBox: { border: "1px solid", borderRadius: "14px", padding: "20px", textAlign: "center", marginBottom: "14px" },
  qLabel: { color: "#7060a0", fontSize: "11px", letterSpacing: "1px", marginBottom: "8px" },
  qWord: { fontFamily: "'Cinzel',serif", color: "#c0b8f0", fontSize: "23px" },
  chooseLabel: { color: "#7060a0", fontSize: "11px", letterSpacing: "1px", marginBottom: "9px", textAlign: "center" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" },
  optBtn: { padding: "12px 8px", background: "rgba(255,255,255,0.04)", border: "1px solid", borderRadius: "10px", color: "#c0b8f0", fontSize: "13px", fontFamily: "'Nunito',sans-serif", fontWeight: "600", cursor: "pointer", textAlign: "center", lineHeight: "1.3" },
  optOk: { background: "rgba(74,222,128,0.12)", border: "1px solid #4ade80", color: "#4ade80" },
  optErr: { background: "rgba(248,113,113,0.12)", border: "1px solid #f87171", color: "#f87171" },
  watermark: { textAlign: "center", color: "#3030a0", fontSize: "11px", marginTop: "12px" },
  resCircle: { width: "100px", height: "100px", borderRadius: "50%", border: "3px solid", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" },
  resScore: { fontFamily: "'Cinzel',serif", fontSize: "22px", color: "#c0b8f0", lineHeight: 1 },
  resPct: { color: "#7060a0", fontSize: "11px", marginTop: "2px" },
  grade: { fontFamily: "'Cinzel',serif", textAlign: "center", fontSize: "18px", marginBottom: "6px" },
  reviewList: { maxHeight: "190px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "6px", margin: "12px 0" },
  reviewItem: { display: "flex", alignItems: "center", gap: "5px", padding: "6px 10px", background: "rgba(255,255,255,0.03)", borderRadius: "8px", flexWrap: "wrap", fontSize: "12px" },
  revQ: { color: "#c0b8f0", fontWeight: "700" },
  revArr: { color: "#7060a0" },
  revOk: { color: "#4ade80" },
  revErr: { color: "#f87171" },
  revAns: { color: "#7060a0", fontSize: "11px" },
  resBtns: { display: "flex", gap: "9px" },
  retryBtn: { flex: 1, padding: "11px", border: "none", borderRadius: "10px", color: "#fff", fontFamily: "'Nunito',sans-serif", fontWeight: "700", fontSize: "14px", cursor: "pointer" },
  homeBtn: { flex: 1, padding: "11px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(100,80,220,0.2)", borderRadius: "10px", color: "#7060a0", fontFamily: "'Nunito',sans-serif", fontWeight: "700", fontSize: "14px", cursor: "pointer" },
};
