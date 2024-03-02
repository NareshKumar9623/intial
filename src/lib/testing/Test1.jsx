import React from "react";
import { getDocs, collection } from "@firebase/firestore";
import { firestore } from "../firebase/firestore";

const Test1 = () => {


    const handleRead = async (e) => {
        e.preventDefault(); 
        try {
            console.log('handleRead');

            const ref = collection(firestore, "test_data");
            const data = await getDocs(ref);
            console.log(data);

            data.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
            });
        } catch (error) {
            console.error("Error reading data:", error);
        }

        }
 
  return (
    <div className="App">

      <form onSubmit={handleRead}>
        <button type = "submit">Save</button>
      </form>
    </div>
    );
}

export default Test1;