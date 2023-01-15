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
        details: {
          explanation:
            "When person is anxious, they worry that something bad will happen.",
          example: "She was anxious about not making her appointment on time",
        },
      },
      {
        word: "awful",
        translation: "juda yomon",
        details: {
          explanation: "When something is awful, it's very bad",
          example: "Her performance last night was awful",
        },
      },
      {
        word: "consist",
        translation: "iborat bo'lmoq",
        details: {
          explanation: "To consist of is to be made of parts or things",
          example:
            "Today's choices for lunch consisted of pizza, hamburgers, and hot dogs",
        },
      },
      {
        word: "desire",
        translation: "xoxlamoq, istamoq",
        details: {
          explanation: "To desire is to want something",
          example: "My sister desires a big house and lots of money",
        },
      },
      {
        word: "eager",
        translation: "chanqoq, sabrsiz",
        details: {
          explanation:
            "When a person is eager about something, they are excited about it",
          example: "The man was eager to talk about the good news",
        },
      },
      {
        word: "household",
        translation: "oila a'zolar",
        details: {
          explanation: "A household is all the people who live in one house",
          example: "Our household is made up of my father, my mother and me",
        },
      },
      {
        word: "intent",
        translation: "maqsad, niyat",
        details: {
          explanation: "An intent is a plan to do something",
          example: "Her intent is to visit Italy next summer",
        },
      },
      {
        word: "landscape",
        translation: "manzara, landshaft",
        details: {
          explanation: "A landscape is how an area of land looks",
          example: "The landscape of the country is very green",
        },
      },
      {
        word: "lift",
        translation: "ko'tarmoq",
        details: {
          explanation: "To lift something is to move it higher",
          example: "The man tried to lift the box",
        },
      },
      {
        word: "load",
        translation: "yuklamoq",
        details: {
          explanation: "To load is to put objects into something",
          example: "The man loaded the boxes into a truck",
        },
      },
      {
        word: "lung",
        translation: "o'pka",
        details: {
          explanation:
            "A lung is the organ in the body that fills with air when breathing",
          example: "Having strong lungs in necessary for a healthy life",
        },
      },
      {
        word: "motion",
        translation: "harakat",
        details: {
          explanation: "A motion is amovement that someone makes",
          example: "The police officer made a motion with his hand",
        },
      },
      {
        word: "pace",
        translation: "temp, surat",
        details: {
          explanation: "The pace of something is the speed at which it happens",
          example: "I ran the race at a slower pace than my friend",
        },
      },
      {
        word: "polite",
        translation: "odobli",
        details: {
          explanation:
            "When someone is polite, they are acting in a thoughtful way",
          example: "The boy was very polite: he behaved very thoughtfully",
        },
      },
      {
        word: "possess",
        translation: "egalik qilmoq, bor bo'lmoq",
        details: {
          explanation: "To possess something is to have it or own it",
          example: "My uncle possesses three sheep, a chicken, a cow and a dog",
        },
      },
      {
        word: "rapidly",
        translation: "juda tez",
        details: {
          explanation: "When something happens rapidly, it happens very fast",
          example: "The train moved rapidly on the tracks",
        },
      },
      {
        word: "remark",
        translation: "ta'kidlamoq",
        details: {
          explanation: "To remark is to say something",
          example:
            "The teacher remarked on how quickly the students were learning",
        },
      },
      {
        word: "seek",
        translation: "qidirmoq, izlamoq",
        details: {
          explanation: "To seek is to look for someting or somebody",
          example: "If I have a problem, I seek my sister's advice",
        },
      },
      {
        word: "shine",
        translation: "charaqlamoq",
        details: {
          explanation: "To shine is to make a bright light",
          example: "The candles are shining in the dark room",
        },
      },
      {
        word: "spill",
        translation: "to'kib yubormoq",
        details: {
          explanation:
            "To spill is to have something fall out if its container",
          example: "I spilled the coffee on the table",
        },
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
        details: {
          explanation:
            "To bring means to take someone or something to a person or a place",
          example: "Oscar will bring in all the boxes",
        },
      },
      {
        word: "castle",
        translation: "qasr",
        details: {
          explanation:
            "A castle is a building with strong walls where royalty usually lives",
          example: "The castle was built many years ago",
        },
      },
      {
        word: "command",
        translation: "buyruq bermoq",
        details: {
          explanation: "To command someone is to tell them to do something",
          example: "The general commanded his army to attack",
        },
      },
      {
        word: "counsel",
        translation: "maslahat bermoq",
        details: {
          explanation:
            "To counsel someone is to listen and give advice about a problem",
          example: "The teacher counseled the girl about her troubles",
        },
      },
      {
        word: "ensure",
        translation: "ta'minlamoq",
        details: {
          explanation: "To ensure is to make certain that something happens",
          example: "Eating good food ensures that we stay healthy",
        },
      },
      {
        word: "explosion",
        translation: "portlash",
        details: {
          explanation:
            "An explosion is a violent burst, usually with a loud sound",
          example: "A nuclear explosion can cause great damage",
        },
      },
      {
        word: "jewellery",
        translation: "qimmatbaho tosh",
        details: {
          explanation:
            "Jewelry is something that people wear like earrings or necklaces",
          example: "The woman looked beautiful with her nice dress and jewelry",
        },
      },
      {
        word: "land",
        translation: "qo'nmoq",
        details: {
          explanation:
            "To land means to come to the ground usually from a ship or aircraft",
          example: "The parachutist landed safely on the ground",
        },
      },
      {
        word: "meteor",
        translation: "meteorit",
        details: {
          explanation:
            "A meteor is a rock from outer space that falls to Earth",
          example: "We saw a meteor in the sky last night",
        },
      },
      {
        word: "monster",
        translation: "maxluq",
        details: {
          explanation:
            "A monster is any imaginary frightening creature that looks strange",
          example: "The monster scared everyone in the village",
        },
      },
      {
        word: "northern",
        translation: "shimoliy",
        details: {
          explanation:
            "If something is northern, it is in the direction of north",
          example: "It is much colder in northern countries than it is here",
        },
      },
      {
        word: "remote",
        translation: "olis, uzoq",
        details: {
          explanation:
            "If something is remote, it is very far away and difficult to get to.",
          example: "It look many days to get to the remote island",
        },
      },
      {
        word: "southern",
        translation: "janubiy",
        details: {
          explanation: "If something is southern, it is the direction of south",
          example:
            "Taegu is located in the southern part of the Korean peninsula",
        },
      },
      {
        word: "statue",
        translation: "haykal",
        details: {
          explanation:
            "A statue is an image of a person or animal made of stone or metal",
          example: "I saw a beautiful statue of a lion today",
        },
      },
      {
        word: "steam",
        translation: "bug'",
        details: {
          explanation:
            "Steam is water that has become hot and has turned into a misty gas",
          example: "We could see the steam rise from the boiling water",
        },
      },
      {
        word: "submit",
        translation: "bo'ysunmoq, aytganini qilmoq",
        details: {
          explanation:
            "To submit to someone is to agree to do what they tell you to do",
          example: "She submitted to her mother's wishes and did her homework",
        },
      },
      {
        word: "temple",
        translation: "ibodatxona",
        details: {
          explanation:
            "A temple is a building that is used for religious purposes",
          example: "The people visited the temple to pray",
        },
      },
      {
        word: "upper",
        translation: "yuqori, ustki",
        details: {
          explanation: "Upper means higher in position or place",
          example: "A hone's attic is at the upper part of the structure",
        },
      },
      {
        word: "weed",
        translation: "begona o't",
        details: {
          explanation:
            "A weed is a plant, especially one that is not useful or wanted",
          example: "The yard of the house was full of ugly weeds",
        },
      },
      {
        word: "wing",
        translation: "qanot",
        details: {
          explanation: "A wing is the part of an animal that lets it fly",
          example: "The bird used its wings to fly across the water",
        },
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
        details: {
          explanation: "An arrow is a thin, straight stick shot from a bow.",
          example: "The arrow flew through the air and hit the target.",
        },
      },
      {
        word: "battle",
        translation: "jang",
        details: {
          explanation: "A battle is a fight between two armies during a war.",
          example: "The battle lasted for many days.",
        },
      },
      {
        word: "bow",
        translation: "kamon",
        details: {
          explanation:
            "A bow is a weapon made of curved wood and string that shoots arrows.",
          example: "He went hunting with a bow and arrow",
        },
      },
      {
        word: "brave",
        translation: "jasur, qo'rqmas",
        details: {
          explanation:
            "When people are brave, they are not afraid to face pain or danger.",
          example:
            "The brave firefighter saved the girl from the burning building.",
        },
      },
      {
        word: "chief",
        translation: "boshliq, sardor",
        details: {
          explanation: "A chief is the leader of a group of people.",
          example: "The chief led the people through the mountains.",
        },
      },
      {
        word: "disadvantage",
        translation: "kamchilik, salbiy jihat",
        details: {
          explanation:
            "A disadvantage is a situation where someone is likely to lose.",
          example:
            "Mike had a disadvantage in the race since he hurt his knee.",
        },
      },
      {
        word: "enemy",
        translation: "dushman",
        details: {
          explanation:
            "An enemy is a country that is fighting another country during a war.",
          example: "The enemy prepared to attack the kingdom.",
        },
      },
      {
        word: "entrance",
        translation: "kirish yo'li",
        details: {
          explanation:
            "An entrance is a place where someone can enter an area.",
          example:
            "The gate was locked, so Bill had to find a different entrance.",
        },
      },
      {
        word: "hardly",
        translation: "arang, zo'rg'a",
        details: {
          explanation:
            "If something hardly happens, it almost does not happen at all.",
          example: "I hardly saw the concert since I had to leave early.",
        },
      },
      {
        word: "intend",
        translation: "niyat qilmoq",
        details: {
          explanation: "To intend to do something means to plan to do it.",
          example: "I intend to finish college in three years.",
        },
      },
      {
        word: "laughter",
        translation: "kulgi, shodlik",
        details: {
          explanation:
            "Laughter is the sound produced by laughing about something funny.",
          example: "Susan’s joke made her classmates burst into laughter.",
        },
      },
      {
        word: "log",
        translation: "g'o'la",
        details: {
          explanation:
            "A log is a thick piece of wood that is cut from a tree.",
          example: "The fire was too small, so we added another log to it.",
        },
      },
      {
        word: "military",
        translation: "armiya",
        details: {
          explanation: "The military is the armed forces of a country.",
          example: "I joined the m ilitary after I finished high school.",
        },
      },
      {
        word: "obey",
        translation: "bo'ysunmoq",
        details: {
          explanation:
            "To obey means to follow what a law or a person says you must do.",
          example:
            "My little sister did not obey my mother. Now she is in trouble.",
        },
      },
      {
        word: "secure",
        translation: "olmoq, qo'lga kiritmoq",
        details: {
          explanation:
            "To secure something means to get it after a lot of effort",
          example:
            "I was able to secure a good grade on my test after weeks ofstudying.",
        },
      },
      {
        word: "steady",
        translation: "barqaror",
        details: {
          explanation:
            "When someone or something is steady, they are under control.",
          example:
            "The problem was hard but she remained steady and solved it.",
        },
      },
      {
        word: "trust",
        translation: "ishonmoq",
        details: {
          explanation:
            "To trust is to believe that someone is honest and will do what is right.",
          example:
            "I trust my friends; they don’t tell my secrets to other people.",
        },
      },
      {
        word: "twist",
        translation: "aylantirib bog'lamoq",
        details: {
          explanation:
            "To twist something is to wrap it around itself or another thing.",
          example: "She twisted the spaghetti around her fork.",
        },
      },
      {
        word: "unless",
        translation: "...magan taqdirda",
        details: {
          explanation: "Unless means if not or except when.",
          example:
            "Unless you clean your room, you cannot play with your friends.",
        },
      },
      {
        word: "weapon",
        translation: "qurol-yarog'",
        details: {
          explanation: "A weapon is an object that can be used to hurt people.",
          example: "Swords have been used as weapons for thousands of years.",
        },
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
        details: {
          explanation:
            "The chest is the front part of a person’s body under the neck.",
          example: "The water in the lake was as high as my chest.",
        },
      },
      {
        word: "confidence",
        translation: "ishonch, dadillik",
        details: {
          explanation:
            "If you have confidence about something, you are sure of it.",
          example: "I have confidence that I did well on the test.",
        },
      },
      {
        word: "consequence",
        translation: "natija, oqibat",
        details: {
          explanation: "A consequence is a result of a choice or action.",
          example:
            "Asa consequence of missing my bus, I had to find another way to work.",
        },
      },
      {
        word: "disaster",
        translation: "falokat, halokat",
        details: {
          explanation: "A disaster is a really bad thing that happens.",
          example: "When the car crashed, it was a disaster.",
        },
      },
      {
        word: "disturb",
        translation: "bezovta qilmoq",
        details: {
          explanation: "To disturb someone means to upset them.",
          example: "The loud noise disturbed me while I was working.",
        },
      },
      {
        word: "estimate",
        translation: "tahmin hisoblamoq",
        details: {
          explanation: "To estimate something means to make a guess about it",
          example: "The boy estimated that he was one meter tall.",
        },
      },
      {
        word: "honor",
        translation: "sharaflamoq, hurmat qilmoq",
        details: {
          explanation:
            "When you honor people or things, you show respect for them.",
          example: "I honor my science teacher by working hard in class.",
        },
      },
      {
        word: "impress",
        translation: "lol qoldirmoq",
        details: {
          explanation: "To impress someone means to make that person proud.",
          example: "He was able to impress the girls with his new dance.",
        },
      },
      {
        word: "marathon",
        translation: "marafon",
        details: {
          explanation:
            "A marathon is a very long foot race just over 42 kilometers.",
          example: "I ran a marathon, and now my legs are tired.",
        },
      },
      {
        word: "narrow",
        translation: "tor",
        details: {
          explanation: "When something is narrow, it is very thin.",
          example: " The bridge is too narrow for a car to drive over.",
        },
      },
      {
        word: "pale",
        translation: "xira",
        details: {
          explanation:
            "When something is pale, it does not have a bright color.",
          example: "The g irl’s skin was very pale.",
        },
      },
      {
        word: "rough",
        translation: "g'adir-budir, dag'al",
        details: {
          explanation: "When something is rough, it is not even or smooth.",
          example: "The rough ground hurt my feet.",
        },
      },
      {
        word: "satisfy",
        translation: "qoniqtirmoq",
        details: {
          explanation: "To satisfy someone means to make them happy.",
          example: "It will satisfy my teacher if I finish all my homework.",
        },
      },
      {
        word: "scream",
        translation: "baqirmoq, qichqirmoq",
        details: {
          explanation: "To scream means to make a loud noise with your mouth.",
          example: "The girl saw a spider and screamed.",
        },
      },
      {
        word: "sensitive",
        translation: "sezuvchan, ta'sirchan",
        details: {
          explanation:
            "When someone or something is sensitive, they are easily hurt",
          example: "My teeth are sensitive to cold things.",
        },
      },
      {
        word: "shade",
        translation: "soya",
        details: {
          explanation:
            "The shade is a dark area that something makes when it blocks the sun.",
          example: "It was hot outside, so the boy sat in the shade of a tree.",
        },
      },
      {
        word: "supplement",
        translation: "to'ldirmoq, qo'shmoq",
        details: {
          explanation:
            "To supplement something is to add something else to it in a good way.",
          example: "He supplements his diet with fresh fruits.",
        },
      },
      {
        word: "terror",
        translation: "dahshat, qo'rquv",
        details: {
          explanation: "When someone feels terror, they are scared.",
          example: "I felt a sense of terror when the tiger chased me.",
        },
      },
      {
        word: "threat",
        translation: "xavf, xatar",
        details: {
          explanation: "A threat is something bad that might happen.",
          example: "Due to the dark clouds, there was a threat of a bad storm.",
        },
      },
      {
        word: "victim",
        translation: "qurbon",
        details: {
          explanation:
            "A victim is a person that had something bad happen to them.",
          example: "I was a victim of a robbery.",
        },
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
        details: {
          explanation: "An ancestor is a family member from the past.",
          example: "My ancestors came from Germany.",
        },
      },
      {
        word: "angle",
        translation: "taraf, tomon, burchak",
        details: {
          explanation:
            "An angle is the direction from which you look at something.",
          example: "The giraffe turned its head to see from another angle.",
        },
      },
      {
        word: "boot",
        translation: "etik",
        details: {
          explanation: "A boot is a heavy shoe that goes over your ankle.",
          example: "He wore boots so that his feet wouldn’t get wet.",
        },
      },
      {
        word: "border",
        translation: "chegara",
        details: {
          explanation: "A border is the edge of an area.",
          example: "The postcard had a pretty green border of pine needles.",
        },
      },
      {
        word: "congratulate",
        translation: "tabriklamoq, qutlamoq",
        details: {
          explanation:
            "To congratulate someone is to tell them that you are happy for them.",
          example:
            "Bill and Angela congratulated each other on a job well done.",
        },
      },
      {
        word: "frame",
        translation: "ramka",
        details: {
          explanation: "A frame is a border for a picture or mirror.",
          example: "I have to get a frame for my friend’s picture.",
        },
      },
      {
        word: "heaven",
        translation: "jannat",
        details: {
          explanation:
            "Heaven is the place that some people believe people go when they die.",
          example: "When I die, I hope that I go to heaven.",
        },
      },
      {
        word: "incredible",
        translation: "aqlga sig'mas",
        details: {
          explanation:
            "If someone or something is incredible, it is hard to believe they are true.",
          example: "I have an incredible story to tell you about my vacation",
        },
      },
      {
        word: "legend",
        translation: "afsona",
        details: {
          explanation: "A legend is a story from the past.",
          example: "There is a well-known legend about a king and his queen",
        },
      },
      {
        word: "praise",
        translation: "maqtamoq",
        details: {
          explanation:
            "To praise is to show that you like someone or something.",
          example: "The coach praised both athletes after a good practice.",
        },
      },
      {
        word: "proceed",
        translation: "bir yo'nalishdan bormoq",
        details: {
          explanation: "To proceed is to go in a certain direction.",
          example:
            "My son and I proceeded to the beach so we could go fishing.",
        },
      },
      {
        word: "pure",
        translation: "sof, musaffo",
        details: {
          explanation: "If something is pure, it is very clear and beautiful.",
          example: "The rose was pure. It had no dirt or imperfections.",
        },
      },
      {
        word: "relative",
        translation: "qarindosh",
        details: {
          explanation: "A relative is a family member.",
          example: "My relatives came by to see the new baby",
        },
      },
      {
        word: "senior",
        translation: "katta yoshdagi",
        details: {
          explanation:
            "If one is senior, they are the oldest or have been there the longest.",
          example: "Because he got his job first, Bob is the senior chef.",
        },
      },
      {
        word: "silent",
        translation: "jim, sokin, tinch",
        details: {
          explanation: "If someone or something is silent, they make no sound.",
          example: "Since no one was home, the house was silent.",
        },
      },
      {
        word: "sink",
        translation: "cho'kmoq",
        details: {
          explanation: "To sink into something is to slowly fall into it.",
          example: "The boat had a hole in it, and it sank into the ocean.",
        },
      },
      {
        word: "superior",
        translation: "uston, yuqori",
        details: {
          explanation:
            "If someone or something is superior, they are better than another.",
          example: "I think cooking outdoors is superior to cooking indoors.",
        },
      },
      {
        word: "surround",
        translation: "o'rab olmoq",
        details: {
          explanation:
            "To surround something is to close in on it from all sides.",
          example: "We surrounded the suspect on all four sides.",
        },
      },
      {
        word: "thick",
        translation: "qalin, keng",
        details: {
          explanation: "If something is thick, it is wide and solid.",
          example: "The fog was so thick that I couldn’t see through it.",
        },
      },
      {
        word: "wrap",
        translation: "o'ramoq",
        details: {
          explanation: "To wrap is to cover something on all sides.",
          example: "I wrapped his gift and put a bow on it.",
        },
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
        details: {
          explanation:
            "If someone goes or travels abroad, they go to another country.",
          example: "My brother wants to go abroad next year.",
        },
      },
      {
        word: "anger",
        translation: "jahlini chiqarmoq",
        details: {
          explanation: "To anger someone is to make them mad.",
          example: "It angers me when people are rude.",
        },
      },
      {
        word: "bride",
        translation: "kelinchak",
        details: {
          explanation:
            "A bride is a woman who is getting married or has just gotten married.",
          example: "The bride looked beautiful in her wedding dress.",
        },
      },
      {
        word: "brief",
        translation: "qisqa",
        details: {
          explanation: "If something is brief, it only lasts fora short time.",
          example: "The meeting this afternoon was very brief.",
        },
      },
      {
        word: "chase",
        translation: "quvlamoq, quvmoq",
        details: {
          explanation:
            "To chase someone or something is to follow them in order to catch them",
          example: "I was chased by an angry native.",
        },
      },
      {
        word: "disappoint",
        translation: "hafa qilmoq",
        details: {
          explanation: "To disappoint is to make one feel sad or unsatisfied.",
          example:
            "I do not want to disappoint my family, so I try to do well at school.",
        },
      },
      {
        word: "dive",
        translation: "sho'ng'imoq",
        details: {
          explanation: "To dive is to jump into water.",
          example: "I will dive into the lake once we get there.",
        },
      },
      {
        word: "exchange",
        translation: "ayriboshlamoq",
        details: {
          explanation:
            "To exchange means to give something for another thing in return.",
          example: "I exchanged my foreign money for American dollars.",
        },
      },
      {
        word: "favor",
        translation: "yordam, muruvvat",
        details: {
          explanation: "A favor is something you do for someone to help them.",
          example: "Can you do me a favor and turn off the lights?",
        },
      },
      {
        word: "fee",
        translation: "to'lov, badal",
        details: {
          explanation:
            "A fee is an amount of money that a person or company asks for a service.",
          example: "I had to pay an hourly fee to speak with my lawyer.",
        },
      },
      {
        word: "forever",
        translation: "abadiy",
        details: {
          explanation:
            "If something lasts forever, it means it lasts for all time.",
          example:
            "The young couple promised that they would love each other forever",
        },
      },
      {
        word: "guy",
        translation: "erkak kishi",
        details: {
          explanation: "A guy is an informal way to call a man.",
          example: "The guy at the flower shop was really helpful today.",
        },
      },
      {
        word: "lovely",
        translation: "yoqimli, suyukli",
        details: {
          explanation:
            "If people or things are lovely, they are good-looking or beautiful",
          example: "The trees look lovely in the fall.",
        },
      },
      {
        word: "mood",
        translation: "kayfiyat",
        details: {
          explanation: "A mood is the way someone is feeling.",
          example: "I am in a good mood because I did well on my math test.",
        },
      },
      {
        word: "palace",
        translation: "qasr, saroy",
        details: {
          explanation:
            "A palace is a very large building. It is often the home of a royal family.",
          example: "The king and queen live in a beautiful palace.",
        },
      },
      {
        word: "permit",
        translation: "ruxsat etmoq",
        details: {
          explanation: "To permit something is to let someone do it.",
          example:
            "I was sick, so my mother permitted me to stay home from school.",
        },
      },
      {
        word: "protest",
        translation: "norozilik bildirmoq",
        details: {
          explanation:
            "To protest something is to argue about it with someone.",
          example: "The people protested the decision of the president.",
        },
      },
      {
        word: "sculpture",
        translation: "haykal",
        details: {
          explanation:
            "A sculpture is a piece of art that is made from wood, clay, or stone.",
          example: "I/I/e saw an old sculpture of Buddha at the museum.",
        },
      },
      {
        word: "tribe",
        translation: "qabila",
        details: {
          explanation:
            "A tribe is a group of people who live in the same culture.",
          example:
            "There’s a small tribe of people who live in the mountains of Spain.",
        },
      },
      {
        word: "youth",
        translation: "yoshlik payt",
        details: {
          explanation: "Youth is a time in people’s lives when they are young.",
          example: "My mother wanted to be a nurse in her youth.",
        },
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
        details: {
          explanation: "To do something on time's basis is how often you do it",
          example: "My grandfather gets his hearing checked on a yearly basis",
        },
      },
      {
        word: "biology",
        translation: "biologiya",
        details: {
          explanation: "Biology is the study of living things",
          example: "We learned about the human heart in biology class",
        },
      },
      {
        word: "cage",
        translation: "qafas",
        details: {
          explanation:
            "A cage is something that holds an animal so it cannot leave",
          example: "We put the parrots in their cage at night",
        },
      },
      {
        word: "colleague",
        translation: "hamkasb",
        details: {
          explanation: "A colleague is somebody you work with",
          example: "My colleague helped me finish the job",
        },
      },
      {
        word: "colony",
        translation: "mustamlaka, koloniya",
        details: {
          explanation: "A colomy is a country controlled by another country",
          example: "The USA was at one time a colony of Great Britain",
        },
      },
      {
        word: "debate",
        translation: "muhokama qilmoq",
        details: {
          explanation:
            "To debate is to serously discuss something with someone",
          example: "The husband and wife debated over which TV to buy",
        },
      },
      {
        word: "depart",
        translation: "jo'nab ketmoq",
        details: {
          explanation:
            "To depart is to leave some place so you can go to another place",
          example: "The plane departed for Italy at 3:00 this afternoon",
        },
      },
      {
        word: "depress",
        translation: "dilini xufton qilmoq",
        details: {
          explanation: "To depress someone is to make them sad",
          example: "The bad news from work depressed the man",
        },
      },
      {
        word: "factual",
        translation: "asosli, dalilga boy",
        details: {
          explanation: "When something is factual, it's true",
          example: "John learns about history from factual books",
        },
      },
      {
        word: "fascinate",
        translation: "maftun qilmoq, qiziqtirmoq",
        details: {
          explanation:
            "To fascinate someone is to make them really like something",
          example: "The kitten was fascinated by the ball of yarn",
        },
      },
      {
        word: "mission",
        translation: "missiya, topshiriq",
        details: {
          explanation:
            "A mission is an important job that is sometimes far away",
          example: "The woman's mission was to help sick people",
        },
      },
      {
        word: "nevertheless",
        translation: "shunga qaramay",
        details: {
          explanation:
            "You use nevertheless to shoe that something goes against a fact",
          example:
            "He is usually friendly. Nevertheless, he wasn't this afternoon",
        },
      },
      {
        word: "occupation",
        translation: "kasb",
        details: {
          explanation: "An occupation is a person's job",
          example: "My father's occupation is a dentist",
        },
      },
      {
        word: "overseas",
        translation: "okean orti",
        details: {
          explanation:
            "If you go overseas, you got to country on the other side of on ocean",
          example: "John often goes overseas for vacations",
        },
      },
      {
        word: "persuade",
        translation: "ko'ndirmoq",
        details: {
          explanation:
            "To persuade someone is to make them agree to do something",
          example: "The children persuaded their parents to buy them gifts",
        },
      },
      {
        word: "route",
        translation: "marshrut, yo'nalish",
        details: {
          explanation: "A route is the way you go from one place to another",
          example: "I saw many new houses along the route to the city",
        },
      },
      {
        word: "ruins",
        translation: "xaroba",
        details: {
          explanation: "Runis are old buildings that are not used anymore",
          example: "I visited some interesting ruins in Greece",
        },
      },
      {
        word: "scholar",
        translation: "bilimdon",
        details: {
          explanation:
            "A scholar is a person who studies something and knows much about it",
          example: "The scholar knew much about art history",
        },
      },
      {
        word: "significant",
        translation: "muhim, ahamiyatli",
        details: {
          explanation:
            "When someone or something is significant, they are important",
          example:
            "I read many significant novels as a literature major in university",
        },
      },
      {
        word: "volcano",
        translation: "vulqon",
        details: {
          explanation:
            "A volcano is a mountain with a hole on top where hot liquid comes out",
          example: "When the volcane erupted, smoke and heat filled the air",
        },
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
        details: {
          explanation: "If something is broad, it is wide",
          example: "The river is very long and broad",
        },
      },
      {
        word: "bush",
        translation: "buta",
        details: {
          explanation:
            "A bush is a plant with many thin branches. It is smaller thna a tree",
          example: "My dad and I planted some small bushes around the house",
        },
      },
      {
        word: "capable",
        translation: "qobiliyatli, o'quvli",
        details: {
          explanation:
            "If somone or something is capable of something, they can do it",
          example: "The Olypmic athlete is capable of lifting a lot if weight",
        },
      },
      {
        word: "cheat",
        translation: "g'irromlik qilmoq",
        details: {
          explanation:
            "To cheat is to bo dishonest so that you can win or do well",
          example: "They cheated on the test by sharing answers",
        },
      },
      {
        word: "concentrate",
        translation: "diqqatini jamlamoq",
        details: {
          explanation:
            "To concentrate on someone or something is to give your full attention",
          example:
            "I could not conventrate on my homework because the room was so loud",
        },
      },
      {
        word: "conclude",
        translation: "deb xulosa qilmoq",
        details: {
          explanation:
            "To conclude is to arrive at a logical end by look at evidence",
          example:
            "I saw crumbs on my dog's face, so I concluded that he ate my cookie",
        },
      },
      {
        word: "confident",
        translation: "o'ziga ishongan",
        details: {
          explanation:
            "Condifdent means that one believes they can do something without failing",
          example:
            "She was confident she could climb the mountain due to her training",
        },
      },
      {
        word: "considerable",
        translation: "sezilarli, salmoqli",
        details: {
          explanation:
            "If something is considerable, it is large in size, amount or extent",
          example: "They paid a considerable amount of money for that car",
        },
      },
      {
        word: "convey",
        translation: "ifodalamoq",
        details: {
          explanation: "To onvey is to communicate or make ideas known",
          example:
            "That picture of a crying child conveys a feeling of sadness",
        },
      },
      {
        word: "definite",
        translation: "aniq, yaqqol",
        details: {
          explanation:
            "If something is definite, it is certain or sure to be true.",
          example:
            "There is a definite connection between hard work and success.",
        },
      },
      {
        word: "delight",
        translation: "zavq, shavq",
        details: {
          explanation:
            "There is a definite connection between hard work and success.",
          example: "He felt such delight after getting a promotion at work.",
        },
      },
      {
        word: "destination",
        translation: "manzil",
        details: {
          explanation:
            "A destination is the place where someone or something is going to.",
          example: "The destination of this plane is Munich, Germany",
        },
      },
      {
        word: "dictate",
        translation: "aytib yozdirmoq",
        details: {
          explanation:
            "To dictate something is to read it aloud so it can be written down.",
          example:
            "He dictated his speech so his secretary could write it down",
        },
      },
      {
        word: "edge",
        translation: "qirra, chet",
        details: {
          explanation:
            "The edge of something is the part of it that is farthest from the center.",
          example: "He ran to the edge of the cliff.",
        },
      },
      {
        word: "path",
        translation: "so'qmoq",
        details: {
          explanation:
            "A path is a way from one place to another that people can walk along.",
          example: "We followed a path through the woods.",
        },
      },
      {
        word: "resort",
        translation: "asos qilib olmoq, asoslamoq",
        details: {
          explanation:
            "To resort to something is to depend on it in order to solve a problem",
          example: "I hope they don’t resort to violence to end the argument.",
        },
      },
      {
        word: "shadow",
        translation: "soya",
        details: {
          explanation:
            "A shadow is the dark area that is made when something blocks light.",
          example: "The man’s shadow was taller than he was.",
        },
      },
      {
        word: "succeed",
        translation: "muvaffaqiyat qozonmoq",
        details: {
          explanation:
            "To succeed is to complete something that you planned or tried to do.",
          example: "He will continue to work on the robot until he succeeds.",
        },
      },
      {
        word: "suspect",
        translation: "deb shubhalanmoq",
        details: {
          explanation: "To suspect something is to believe that it is true.",
          example: "I suspect that those kids stole the money.",
        },
      },
      {
        word: "valley",
        translation: "vodiy",
        details: {
          explanation:
            "A valley is a low area of land between two mountains or hills.",
          example:
            "We looked at the valley below from the top of the mountain.",
        },
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
        details: {
          explanation:
            "to abuse someone or something means to hurt them on purpose",
          example: "The mean man abused his dog when it barked too loudly",
        },
      },
      {
        word: "afford",
        translation: "qurbi yetmoq",
        details: {
          explanation:
            "to afford something means you have enough money to pay for it",
          example:
            "I've been saving my money, so I can afford to buy a new bike",
        },
      },
    ],
    choosen: false,
  },
];

export { getData, data };
