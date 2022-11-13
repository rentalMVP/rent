import Link from 'next/link'
import { useState, useEffect } from 'react'
import { db } from "../../pages/lib/init-firebase"
import { collection, query, where, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';
const GalleryItem = ({ fields, index, id }) => {
    const [rentalOwenrName, setRentalOwnerName] = useState('');
    useEffect(async() => {
        const q = query(collection(db, "rental_owners"), where("id", "==", fields["Rental Owner"][0]));
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
            let temp=[];
            temp =( doc.id, " => ", doc.data());
            setRentalOwnerName(temp.fields["Name"])
        });
    }, [])

    return (
        <Link  key={index} href={`/cards/${fields["Item ID"]}`}>
            <div className="card" style={{ width: "300px", height: "300px", background: "transparent", borderRadius: "2px" }}>
                <img src={"http://" + fields["Item Image"].split(',')[0]} className="flex items-center justify-center m-auto" style={{ width: "300px", height: "200px", borderRadius: "2px 2px 0px 0px", borderRadius:"10px" }} />
                <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", padding: "10px 10px 5px 10px", fontSize: "18px" }}>{fields["Item Name"]}</p>
                <a href="#" style={{ padding: "5px 10px 5px 10px" }}>{
                    rentalOwenrName
                }</a>
                <p style={{ padding: "5px 10px 5px 10px", fontSize: "12px" }}>{fields["Item Price"]}</p>
                <div className="overlay"><h4>Rent Now</h4>
                </div>
            </div>
        </Link>
    )

}
export default GalleryItem