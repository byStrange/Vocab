import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getData = () => {
  const data = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection("topics").get();
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
        translation: "olib kelmoq"
      },
      {
        word: "castle",
        translation: "qasr"
      },
      {
        word: "command",
        translation: "buyruq bermoq"
      },
      {
        word: "counsel",
        translation: "maslahat bermoq"
      },
      {
        word: "ensure",
        translation: "ta'minlamoq"
      },
      {
        word: "explosion",
        translation: "portlash"
      },
      {
        word: "jewellery",
        translation: "qimmatbaho tosh"
      },
      {
        word: "land",
        translation: "qo'nmoq"
      },
      {
        word: "meteor",
        translation: "meteorit"
      },
      {
        word: "monster",
        translation: "maxluq"
      },
      {
        word: "northern",
        translation: "shimoliy"
      },
      {
        word: "remote",
        translation: "olis, uzoq"
      },
      {
        word: "southern",
        translation: "janubiy"
      },
      {
        word: "statue",
        translation: "haykal"
      },
      {
        word: "steam",
        translation: "bug'"
      },
      {
        word: "submit",
        translation: "bo'ysunmoq, aytganini qilmoq"
      },
      {
        word: "temple",
        translation: "ibodatxona"
      },
      {
        word: "upper",
        translation: "yuqori, ustki"
      },
      {
        word: "weed",
        translation: "begona o't"
      },
      {
        word: "wing",
        translation: "qanot"
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
        translation: "o'q, yoy"
      },
      {
        word: "battle",
        translation: "jang"
      },
      {
        word: "bow",
        translation: "kamon"
      },
      {
        word: "brave",
        translation: "jasur, qo'rqmas"
      },
      {
        word: "chief",
        translation: "boshliq, sardor"
      },
      {
        word: "disadvantage",
        translation: "kamchilik, salbiy jihat"
      },

      {
        word: "enemy",
        translation: "dushman"
      },
      {
        word: "entrance",
        translation: "kirish yo'li"
      },
      {
        word: "hardly",
        translation: "arang, zo'rg'a"
      },
      {
        word: "intend",
        translation: "niyat qilmoq"
      },
      {
        word: "laughter",
        translation: "kulgi, shodlik"
      },
      {
        word: "log",
        translation: "g'o'la"
      },
      {
        word: "military",
        translation: "armiya"
      },
      {
        word: "obey",
        translation: "bo'ysunmoq"
      },
      {
        word: "secure",
        translation: "olmoq, qo'lga kiritmoq"
      },
      {
        word: "steady",
        translation: "barqaror"
      },
      {
        word: "trust",
        translation: "ishonmoq"
      },
      {
        word: "twist",
        translation: "aylantirib bog'lamoq"
      },
      {
        word: "unless",
        translation: "...magan taqdirda"
      },
      {
        word: "weapon",
        translation: "qurol-yarog'"
      },
    ],
    choosen: true,
  },
];

export { getData, data };
