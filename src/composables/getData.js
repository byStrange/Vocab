import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getData = () => {
  const data = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection("topics").get();
      const data = [];
      data.forEach((e) => {
        projectFirestore.collection("topics").add(e);
      });
      res.docs.forEach((doc) => {
        data.value.push(doc.data());
      });
      console.log(data.value);
      console.log(res);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  load();
  return { data, error };
};

const data = [
  {
    name: "Essentials.2.1",
    id: "1",
    words: [
      {
        word: "anxious",
        translation: "xavotirlangan, tashvishlangan",
      },
      {
        word: "awful",
        translation: "juda yomon",
      },
      {
        word: "consist",
        translation: "iborat bo'lmoq",
      },
      {
        word: "desire",
        translation: "xoxlamoq, istamoq",
      },
      {
        word: "eager",
        translation: "chanqoq, sabrsiz",
      },
      {
        word: "household",
        translation: "oila a'zolar",
      },
      {
        word: "intent",
        translation: "maqsad, niyat",
      },
      {
        word: "landscape",
        translation: "manzara, landshaft",
      },
      {
        word: "lift",
        translation: "ko'tarmoq",
      },
      {
        word: "load",
        translation: "yuklamoq",
      },
      {
        word: "lung",
        translation: "o'pka",
      },
      {
        word: "motion",
        translation: "harakat",
      },
      {
        word: "pace",
        translation: "temp, surat",
      },
      {
        word: "polite",
        translation: "odobli",
      },
      {
        word: "possess",
        translation: "egalik qilmoq, bor bo'lmoq",
      },
      {
        word: "rapidly",
        translation: "juda tez",
      },
      {
        word: "remark",
        translation: "ta'kidlamoq",
      },
      {
        word: "seek",
        translation: "qidirmoq, izlamoq",
      },
      {
        word: "shine",
        translation: "charaqlamoq",
      },
      {
        word: "spill",
        translation: "to'kib yubormoq",
      },
    ],
    choosen: false,
  },
  {
    name: "Essentials.2.2",
    id: "2",
    words: [
      {
        word: "bring",
        translation: "olib kelmoq",
      },
      {
        word: "castle",
        translation: "qasr",
      },
      {
        word: "command",
        translation: "buyruq bermoq",
      },
      {
        word: "counsel",
        translation: "maslahat bermoq",
      },
      {
        word: "ensure",
        translation: "ta'minlamoq",
      },
      {
        word: "explosion",
        translation: "portlash",
      },
      {
        word: "jewellery",
        translation: "qimmatbaho tosh",
      },
      {
        word: "land",
        translation: "qo'nmoq",
      },
      {
        word: "meteor",
        translation: "meteorit",
      },
      {
        word: "monster",
        translation: "maxluq",
      },
      {
        word: "northern",
        translation: "shimoliy",
      },
      {
        word: "remote",
        translation: "olis, uzoq",
      },
      {
        word: "southern",
        translation: "janubiy",
      },
      {
        word: "statue",
        translation: "haykal",
      },
      {
        word: "steam",
        translation: "bug'",
      },
      {
        word: "submit",
        translation: "bo'ysunmoq, aytganini qilmoq",
      },
      {
        word: "temple",
        translation: "ibodatxona",
      },
      {
        word: "upper",
        translation: "yuqori, ustki",
      },
      {
        word: "weed",
        translation: "begona o't",
      },
      {
        word: "wing",
        translation: "qanot",
      },
    ],
    choosen: false,
  },
  {
    name: "Essentials2.3",
    id: "3",
    words: [
      {
        word: "arrow",
        translation: "o'q, yoy",
      },
      {
        word: "battle",
        translation: "jang",
      },
      {
        word: "bow",
        translation: "kamon",
      },
      {
        word: "brave",
        translation: "jasur, qo'rqmas",
      },
      {
        word: "chief",
        translation: "boshliq, sardor",
      },
      {
        word: "disadvantage",
        translation: "kamchilik, salbiy jihat",
      },

      {
        word: "enemy",
        translation: "dushman",
      },
      {
        word: "entrance",
        translation: "kirish yo'li",
      },
      {
        word: "hardly",
        translation: "arang, zo'rg'a",
      },
      {
        word: "intend",
        translation: "niyat qilmoq",
      },
      {
        word: "laughter",
        translation: "kulgi, shodlik",
      },
      {
        word: "log",
        translation: "g'o'la",
      },
      {
        word: "military",
        translation: "armiya",
      },
      {
        word: "obey",
        translation: "bo'ysunmoq",
      },
      {
        word: "secure",
        translation: "olmoq, qo'lga kiritmoq",
      },
      {
        word: "steady",
        translation: "barqaror",
      },
      {
        word: "trust",
        translation: "ishonmoq",
      },
      {
        word: "twist",
        translation: "aylantirib bog'lamoq",
      },
      {
        word: "unless",
        translation: "...magan taqdirda",
      },
      {
        word: "weapon",
        translation: "qurol-yarog'",
      },
    ],
    choosen: false,
  },
  {
    name: "Essentials2.4",
    id: "4",
    words: [
      {
        word: "chest",
        translation: "bag'r, ko'ks",
      },
      {
        word: "confidence",
        translation: "ishonch, dadillik",
      },
      {
        word: "consequence",
        translation: "natija, oqibat",
      },
      {
        word: "disaster",
        translation: "falokat, halokat",
      },
      {
        word: "disturb",
        translation: "bezovta qilmoq",
      },
      {
        word: "estimate",
        translation: "tahmin hisoblamoq",
      },
      {
        word: "honor",
        translation: "sharaflamoq, hurmat qilmoq",
      },
      {
        word: "impress",
        translation: "lol qoldirmoq",
      },
      {
        word: "marathon",
        translation: "marafon",
      },
      {
        word: "narrow",
        translation: "tor",
      },
      {
        word: "pale",
        translation: "xira",
      },

      {
        word: "rough",
        translation: "g'adir-budir, dag'al",
      },
      {
        word: "satisfy",
        translation: "qoniqtirmoq",
      },
      {
        word: "scream",
        translation: "baqirmoq, qichqirmoq",
      },
      {
        word: "sensitive",
        translation: "sezuvchan, ta'sirchan",
      },
      {
        word: "shade",
        translation: "soya",
      },
      {
        word: "supplement",
        translation: "to'ldirmoq, qo'shmoq",
      },
      {
        word: "terror",
        translation: "dahshat, qo'rquv",
      },
      {
        word: "threat",
        translation: "xavf, xatar",
      },
      {
        word: "victim",
        translation: "qurbon",
      },
    ],
  },
  {
    name: "Essentials2.5",
    id: "5",
    words: [
      {
        word: "ancestor",
        translation: "ajdod",
      },
      {
        word: "angle",
        translation: "taraf, tomon, burchak",
      },
      {
        word: "boot",
        translation: "etik",
      },
      {
        word: "border",
        translation: "chegara",
      },
      {
        word: "congratulate",
        translation: "tabriklamoq, qutlamoq",
      },
      {
        word: "frame",
        translation: "ramka",
      },
      {
        word: "heaven",
        translation: "jannat",
      },
      {
        word: "incredible",
        translation: "aqlga sig'mas",
      },
      {
        word: "legend",
        translation: "afsona",
      },
      {
        word: "praise",
        translation: "maqtamoq",
      },

      {
        word: "proceed",
        translation: "bir yo'nalishdan bormoq",
      },
      {
        word: "pure",
        translation: "sof, musaffo",
      },
      {
        word: "relative",
        translation: "qarindosh",
      },
      {
        word: "senior",
        translation: "katta yoshdagi",
      },
      {
        word: "silent",
        translation: "jim, sokin, tinch",
      },
      {
        word: "sink",
        translation: "cho'kmoq",
      },
      {
        word: "superior",
        translation: "uston, yuqori",
      },
      {
        word: "surround",
        translation: "o'rab olmoq",
      },
      {
        word: "thick",
        translation: "qalin, keng",
      },
      {
        word: "wrap",
        translation: "o'ramoq",
      },
    ],
    choosen: false,
  },
  {
    name: "Essentials.2.6",
    id: "6",
    words: [
      {
        word: "abroad",
        translation: "xorij, chet el",
      },
      {
        word: "anger",
        translation: "jahlini chiqarmoq",
      },
      {
        word: "bride",
        translation: "kelinchak",
      },
      {
        word: "brief",
        translation: "qisqa",
      },
      {
        word: "chase",
        translation: "quvlamoq, quvmoq",
      },
      {
        word: "disappoint",
        translation: "hafa qilmoq",
      },
      {
        word: "dive",
        translation: "sho'ng'imoq",
      },
      {
        word: "exchange",
        translation: "ayriboshlamoq",
      },
      {
        word: "favor",
        translation: "yordam, muruvvat",
      },
      {
        word: "fee",
        translation: "to'lov, badal",
      },
      {
        word: "forever",
        translation: "abadiy",
      },
      {
        word: "guy",
        translation: "erkak kishi",
      },
      {
        word: "lovely",
        translation: "yoqimli, suyukli",
      },
      {
        word: "mood",
        translation: "kayfiyat",
      },
      {
        word: "palace",
        translation: "qasr, saroy",
      },
      {
        word: "permit",
        translation: "ruxsat etmoq",
      },
      {
        word: "protest",
        translation: "norozilik bildirmoq",
      },
      {
        word: "sculpture",
        translation: "haykal",
      },
      {
        word: "tribe",
        translation: "qabila",
      },
      {
        word: "youth",
        translation: "yoshlik payt",
      },
    ],
    choosen: false,
  },
  {
    name: "Essentials.2.7",
    id: "7",
    words: [
      {
        word: "basis",
        translation: "tartib yo'nalish",
      },
      {
        word: "biology",
        translation: "biologiya",
      },
      {
        word: "cage",
        translation: "qafas",
      },
      {
        word: "colleague",
        translation: "hamkasb",
      },
      {
        word: "colony",
        translation: "mustamlaka, koloniya",
      },
      {
        word: "debate",
        translation: "muhokama qilmoq",
      },
      {
        word: "depart",
        translation: "jo'nab ketmoq",
      },
      {
        word: "depress",
        translation: "dilini xufton qilmoq",
      },
      {
        word: "factual",
        translation: "asosli, dalilga boy",
      },
      {
        word: "fascinate",
        translation: "maftun qilmoq, qiziqtirmoq",
      },
      {
        word: "mission",
        translation: "missiya, topshiriq",
      },
      {
        word: "nevertheless",
        translation: "shunga qaramay",
      },
      {
        word: "occupation",
        translation: "kasb",
      },
      {
        word: "overseas",
        translation: "okean orti",
      },
      {
        word: "persuade",
        translation: "ko'ndirmoq",
      },
      {
        word: "route",
        translation: "marshrut, yo'nalish",
      },
      {
        word: "ruins",
        translation: "xaroba",
      },
      {
        word: "scholar",
        translation: "bilimdon",
      },
      {
        word: "significant",
        translation: "muhim, ahamiyatli",
      },
      {
        word: "volcano",
        translation: "vulqon",
      },
    ],
    choosen: false,
  },
  {
    name: "Essentials.2.8",
    id: "8",
    words: [
      {
        word: "broad",
        translation: "keng, katta",
      },
      {
        word: "bush",
        translatiohn: "buta",
      },
      {
        word: "capable",
        translation: "qobiliyatli, o'quvli",
      },
      {
        word: "cheat",
        translation: "g'irromlik qilmoq",
      },
      {
        word: "concentrate",
        translation: "diqqatini jamlamoq",
      },
      {
        word: "conclude",
        translation: "deb xulosa qilmoq",
      },
      {
        word: "confident",
        translation: "o'ziga ishongan",
      },
      {
        word: "considerable",
        translation: "sezilarli, salmoqli",
      },
      {
        word: "convey",
        translation: "ifodalamoq",
      },
      {
        word: "definite",
        translation: "aniq, yaqqol",
      },
      {
        word: "delight",
        translation: "zavq, shavq",
      },
      {
        word: "destination",
        translation: "manzil",
      },
      {
        word: "dictate",
        translation: "aytib yozdirmoq",
      },
      {
        word: "edge",
        translation: "qirra, chet",
      },
      {
        word: "path",
        translation: "so'qmoq",
      },
      {
        word: "resort",
        translation: "asos qilib olmoq, asoslamoq",
      },
      {
        word: "shadow",
        translation: "soya",
      },
      {
        word: "succeed",
        translation: "muvaffaqiyat qozonmoq",
      },
      {
        word: "suspect",
        translation: "deb shubhalanmoq",
      },
      {
        word: "valley",
        translation: "vodiy",
      },
    ],
    choosen: false,
  },
  {
    name: "Essentials.2.9",
    id: "9",
    words: [
      {
        word: "admire",
        translation: "qoyil qolmoq",
      },
      {
        word: "aid",
        translation: "yordam bermoq",
      },
      {
        word: "attempt",
        translation: "urinmoq, harakat qilmoq",
      },
      {
        word: "authority",
        translation: "vokolat, huquq",
      },
      {
        word: "capital",
        translation: "poytaxt",
      },
      {
        word: "cooperate",
        translation: "hamkorlik qilmoq",
      },
      {
        word: "defend",
        translation: "mudofaa qilmoq",
      },
      {
        word: "destruction",
        translation: "vayrona",
      },
      {
        word: "disorder",
        translation: "tartibsizlik",
      },
      {
        word: "division",
        translation: "bo'lish taqsimlash",
      },
      {
        word: "enable",
        translation: "imkoniyat bermoq",
      },
      {
        word: "frustrate",
        translation: "umidsizlantirmoq",
      },
      {
        word: "govern",
        translation: "nazorat qilmoq, boshqarmoq",
      },
      {
        word: "plenty",
        translation: "yetarli miqdor",
      },
      {
        word: "relieve",
        translation: "og'irini yengillashtirmoq",
      },
      {
        word: "reputation",
        translation: "obro",
      },
      {
        word: "royal",
        translation: "qirollik",
      },
      {
        word: "slave",
        translation: "qul",
      },
      {
        word: "struggle",
        translation: "kurashmoq, yoqlashmoq",
      },
      {
        word: "stupid",
        translation: "ahmoq, tentak",
      },
    ],
    choosen: false,
  },
  {
    name: "Essentials.2.10",
    id: "10",
    words: [
      {
        word: "citizen",
        translation: "fuqaro",
      },
      {
        word: "council",
        translation: "kengash, konsullik",
      },
      {
        word: "declare",
        translation: "aytmoq, bildirmoq",
      },
      {
        word: "enormous",
        translation: "ulkan, juda katta",
      },
      {
        word: "extraordinary",
        translation: "turfa, g'ayritabiiy",
      },
      {
        word: "fog",
        translation: "tuman",
      },
      {
        word: "funeral",
        translation: "dafn marosimi",
      },
      {
        word: "giant",
        translation: "bahaybat, gigant",
      },
      {
        word: "impression",
        translation: "taassurot",
      },
      {
        word: "income",
        translation: "daromad",
      },
      {
        word: "mad",
        translation: "badjahl, jahldor",
      },
      {
        word: "ought",
        translation: "kerak, lozim",
      },
      {
        word: "resist",
        translation: "qarshilik ko'rsatmoq",
      },
      {
        word: "reveal",
        translation: "ko'rsatmoq",
      },
      {
        word: "rid",
        translation: "xalos qilmoq",
      },
      {
        word: "sword",
        translation: "qilich, shamshir",
      },
      {
        word: "tale",
        translation: "ertak, hikoya",
      },
      {
        word: "trap",
        translation: "tutqunlikda saqlamoq",
      },
      {
        word: "trial",
        translation: "sud jarayoni",
      },
      {
        word: "violent",
        translation: "zo'ravon, quturgan",
      },
    ],
    choosen: false,
  },
  {
    name: "Essentials.2.11",
    id: "11",
    words: [
      {
        word: "admission",
        translation: "ruxsat, kirish",
      },
      {
        word: "astronomy",
        translation: "astronomiya",
      },
      {
        word: "blame",
        translation: "ayblamoq",
      },
      {
        word: "chemistry",
        translation: "kimyo",
      },
      {
        word: "despite",
        translation: "ga qaramsdan",
      },
      {
        word: "dinosaur",
        translation: "dinozavr",
      },
      {
        word: "exhibit",
        translation: "eksponat",
      },
      {
        word: "fame",
        translation: "shon-shuhrat, obro'",
      },
      {
        word: "forecast",
        translation: "ob-havo ma'lumoti",
      },
      {
        word: "genius",
        translation: "juda aqlli, geniy",
      },
      {
        word: "gentle",
        translation: "muloyim, yuvosh",
      },
      {
        word: "geography",
        translation: "geografiya",
      },
      {
        word: "iterface",
        translation: "xalaqit bermoq",
      },
      {
        word: "lightly",
        translation: "muloyimlik bilan",
      },
      {
        word: "principal",
        translation: "maktab direktori",
      },
      {
        word: "row",
        translation: "qator, saf",
      },
      {
        word: "shelf",
        translation: "tokcha",
      },
      {
        word: "spite",
        translation: "out of spite - qasddan",
      },
      {
        word: "super",
        translation: "juda yaxshi",
      },
      {
        word: "wet",
        translation: "nam, xo'l",
      },
    ],
    choosen: false,
  },
  {
    name: "Essentails.2.12",
    id: "12",
    words: [
      {
        word: "abuse",
        translation: " haqorat qlmoq, so'kmoq",
        explanation : "to abuse someone or something means to hurt them on purpose",
        example: "The mean man abused his dog when it barked too loudly"
      },
      {
        word: "afford",
        translation: "",
      },
    ],
    choosen: false,
  },
];

export { getData, data };
