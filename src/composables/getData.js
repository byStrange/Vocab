import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getData = () => {
  const error = ref([]);
  
  //   const load = async () => {
  //     try {
  //       const res = await projectFirestore.collection("topics").get();
  // console.log(res)
  //       data = res.docs.map((doc) => {
  //         return { ...doc.data(), id: doc.id };
  //       });
  //     } catch (err) {
  //       error.value = err.message;
  //     }
  //   };
  // load();
  return { error, data };
};

export { getData };
