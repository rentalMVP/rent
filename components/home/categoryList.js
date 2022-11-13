
import { useEffect, useState } from "react";
import { db } from "../../pages/lib/init-firebase";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { async } from "@firebase/util";

const CategoryList = ({ category, setCategory}) => {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(async () => {
        const temp = [];
        const categoryCollectionRef = collection(db, 'rental_owners');
        const q = query(categoryCollectionRef, orderBy("fields.Reviews"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            temp.push(doc.data())
        });
        console.log(temp);
        let rental = new Set();
        for (let i in temp) {
            rental.add(temp[i]["fields"]["Rental Category"]);
        }
        console.log(rental)
        const tmpArray = [];
        rental.forEach((value) => {
            tmpArray.push(value);
        })
        setCategoryList(tmpArray);

    }, [])
    const showAllCategory = () => {
        return (
            categoryList && categoryList.length > 0 && categoryList.map((value, index) => (
                <li style={{ marginRight: "20px", fontSize: "20px", fontFamily: "Oswald", padding: "5px" }} className="li_text" onClick={() => setCategory(value)}>
                    {value}
                </li>
            ))
        )
    }
    return (<ul className="flex flex-row" style={{ width: "fit-content", margin: "auto", marginTop: "10px" }}>
        <li style={{ marginRight: "20px", fontSize: "20px", fontFamily: "Oswald", padding: "5px" }} className="li_text" onClick={() => setCategory("All")}>
            All
        </li>
        {showAllCategory()}
    </ul>)

}
export default CategoryList