import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faCommentDots } from "@fortawesome/free-solid-svg-icons"
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons"
import local_datas from '../../data.json';
import React from 'react'
import Gallery from "../home/gallery"
import { collection, getDocs, addDoc, orderBy, query, limit, startAfter, startAt, where } from "firebase/firestore"
import { db } from "../../pages/lib/init-firebase"
import { useEffect, useState } from "react"
const RentalOwner = ({ id }) => {
    const [ownerContent, setOwnerContent] = useState([]);
    const [showData, setShowData] = useState([]);
    const [lastPage, setLastPage] = useState(false);
    const [lastDocument, setLastDocument] = useState(3324);
    const getRentalOwnerDetail = async (id) => {
        console.log(id)
        let temp = [];
        const listCollectionRef = collection(db, 'rental_owners');
        let q = query(listCollectionRef, where("id", "==", id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            temp.push(doc.data())
        });
        console.log(temp);
        setOwnerContent(temp)
    }
    const loadData = async (lastDocument, id) => {
        console.log(lastDocument, typeof(id))
        const temp = [];
        const listCollectionRef = collection(db, 'rental_items')
        let q = query(listCollectionRef, orderBy("fields.Item ID"), where("fields.Rental Owner Name", "==", id), limit(30))
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
            temp.push(doc.data())
        });
        console.log(temp)
        if (querySnapshot.docs.length < 30) {
            setLastPage(true)
        }
        let length = temp.length;
        console.log(temp[length - 1]["fields"]["Item ID"])
        setLastDocument(temp[length - 1]["fields"]["Item ID"])
        console.log(temp)
        setShowData([...showData, ...temp]);
       

    }
    useEffect(() => {
        getRentalOwnerDetail(id);
    }, []);
    useEffect(() => {
        ownerContent && ownerContent.length > 0 && loadData(lastDocument, ownerContent[0]["fields"]["Name"]);

    },[ownerContent]);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      })
      const handleScroll = () => {
        if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
          setTimeout(() => {
            if(!lastPage){
              ownerContent && ownerContent.length > 0 && loadData(lastDocument,ownerContent[0]["fields"]["Name"]);
            }
          }, 2000);
        }
      };
    // if (!rentalOwnerShow[0]) return <h1>No owner</h1>
    return (
        <section>
            <div style={{ background: "#161616", height: "100%", paddingTop: "50px", paddingBottom: "50px" }}>
                <div style={{ maxWidth: "1440px", margin: "auto", background: "black", borderRadius: "10px", padding: "50px", position: "relative" }} className="flex flex-row">
                    {ownerContent && ownerContent.length > 0 && <img src={ownerContent[0]["fields"]["Rental Store photos"]} style={{ width: "800px", height: "500px", background: "white", backgroundSize: "cover" }} />
                    }
                    <div style={{ width: "500px", height: "500px", background: "trnasparent", backgroundSize: "cover", marginLeft: "50px" }}>
                        <p style={{ fontFamily: 'Oswald', fontStyle: "normal", fontSize: "50px", fontWeight: "700", color: "white", textAlign: "center" }}>{ownerContent && ownerContent.length > 0 && ownerContent[0]["fields"]["Name"]}</p>
                        <a href={ownerContent && ownerContent.length > 0 && ownerContent[0]["fields"]["Website"]} style={{ marginTop: "40px", lineHeight: "24px", fontSize: "20px" }} className="flex flex-row items-center">
                            <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "20px", fontSize: "30px" }} />{ownerContent && ownerContent.length > 0 && ownerContent[0]["fields"]["Website"]}</a>
                        <p style={{ lineHeight: "24px", fontSize: "18px", marginTop: "40px", color: "white" }} className="flex flex-row items-center"><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "20px", fontSize: "30px" }} />{ownerContent && ownerContent.length > 0 && ownerContent[0]["fields"]["Store Address"]}</p>
                        <p style={{ marginTop: "40px", fontFamily: "Roboto", fontSize: "18px", color: "white" }} className="flex flex-row items-center font-bold">
                            <FontAwesomeIcon icon={faCommentDots} style={{ marginRight: "20px", fontSize: "30px" }} /> {ownerContent && ownerContent.length > 0 && ownerContent[0]["fields"]["Reviews"]}
                        </p>
                        <p style={{ marginTop: "40px", fontFamily: "Roboto", fontSize: "18px", color: "white" }} className="flex flex-row items-center font-bold">
                            <FontAwesomeIcon icon={faGoogle} style={{ marginRight: "20px", fontSize: "30px" }} /> Google Rating {ownerContent && ownerContent.length > 0 && ownerContent[0]["fields"]["Google Rating"]}
                        </p>
                        <p style={{ marginTop: "40px", fontFamily: "Roboto", fontSize: "18px", color: "white" }} className="flex flex-row items-center font-bold">
                            <FontAwesomeIcon icon={faPhoneVolume} style={{ marginRight: "20px", fontSize: "30px" }} /> {ownerContent && ownerContent.length > 0 && ownerContent[0]["fields"]["Store Phone Number"]}
                        </p>
                    </div>
                    <FontAwesomeIcon icon={faPhoneFlip} style={{ position: "absolute", bottom: "40px", right: "40px", fontSize: "40px", borderRadius: "50%" }} className="return" />
                </div>
                <Gallery showData={showData} lastPage={lastPage} />
            </div>
        </section>
    )
}
export default RentalOwner
