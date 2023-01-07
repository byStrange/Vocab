import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getData = () => {
  const data = ref([]);
  const error = ref(null);

  const load = async () => {
      
      try {
        const res =await projectFirestore.collection('topics').get()
        res.docs.forEach(doc => {
            data.value.push(doc.data())
        })
        console.log(data.value)
        console.log(res)
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  load()
    return {data, error};
};

const data = [
  {
    name: "topic 1",
    id: "1",
    words: [
      ["accused", "aybdor"],
      ["play", "oynamoq"],
      ["choose", "tanlamoq"],
    ],
    choosen: false,
  },
  {
    name: "topic 2",
    id: "2",
    words: [
      ["accused", "aybdor"],
      ["play", "oynamoq"],
      ["choose", "tanlamoq"],
    ],
    choosen: false,
  },
  {
    name: "topic 3",
    id: "3",
    words: [
      ["accused", "aybdor"],
      ["play", "oynamoq"],
      ["choose", "tanlamoq"],
    ],
    choosen: true,
  },
];


export { getData, data }