import { getDocs, collection } from "@firebase/firestore"
import { firestore } from "./firestore"

async function handleRead() {
    console.log('handleRead');
    
    const ref =  collection(firestore, "test_data")
    const data = await getDocs(ref);
    console.log(data);

    data.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });

    return data;
}

export default handleRead;