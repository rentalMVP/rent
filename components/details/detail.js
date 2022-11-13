import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faCommentDots } from "@fortawesome/free-solid-svg-icons"
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"
import { faShopify } from "@fortawesome/free-brands-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import local_datas from '../../data.json';
import { useState, useEffect } from "react"
import { collection, getDocs, addDoc, orderBy, query, limit, startAfter, where, startAt } from "firebase/firestore"
import { db } from "../../pages/lib/init-firebase"
import timediff from "timediff"
import RandomCarousel from "./randomCarousel"

const Detail = ({ id }) => {
    const [pageContent, setPageContent] = useState([]);
    const [drawCarouselButton, setDrawCarouselButton] = useState([]);
    const [drawImagePane, setDrawImagePane] = useState([]);
    const [itemDesc, setItemDesc] = useState('');
    const [ownerDetail, setOwnerDetail] = useState([]);
    console.log(id)
    const getDetails = async (id) => {
        let temp = [];
        let searchID = Number(id);
        const listCollectionRef = collection(db, 'rental_items');
        let q = query(listCollectionRef, where("fields.Item ID", "==", searchID));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            temp.push(doc.data())
        });
        setPageContent(temp);
    }
    const drawCarousel = () => {
        let temp = [];
        let imageGroup = pageContent[0]["fields"]["Item Image"].split(",");
        console.log(imageGroup)
        let imageLength = pageContent[0]["fields"]["Item Image"].split(",").length;
        console.log(imageLength)
        temp.push(<button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
        ></button>)
        for (let i = 1; i < imageLength; i++) {
            temp.push(<button
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide-to={i}
                aria-label={"Slide " + (i + 1)}
            ></button>)
        }
        setDrawCarouselButton(temp);
        let tempImage = [];
        tempImage.push(
            <div className="float-left w-full carousel-item active">
                <center><img src={"https://" + imageGroup[0]}
                    className="block w-full rounded-lg"
                    alt="Wild Landscape"
                    style={{ height: "400px", width: "auto" }}

                /></center>
            </div>
        )
        for (let j = 1; j < imageGroup.length; j++) {
            console.log(imageGroup[j].trim())
            tempImage.push(<div className="float-left w-full carousel-item ">
                <center><img src={"https://" + imageGroup[j].replace(" ", "")}
                    className="block w-full rounded-lg"
                    alt="Wild Landscape"
                    style={{ height: "400px", width: "auto" }} />
                </center></div>)

        }
        setDrawImagePane(tempImage);
    }
    useEffect(async () => {
        id && getDetails(id);
    }, [id]);
    useEffect(() => {
        console.log(pageContent)
        pageContent && pageContent.length > 0 && drawCarousel();
        pageContent && pageContent.length > 0 && setItemDesc(pageContent[0]["fields"]["Item Description"]);
        pageContent && pageContent.length > 0 && getOwnerData(pageContent[0]["fields"]["Rental Owner"]);

    }, [pageContent]);
    const datetime = (fullTime) => {
        let timeDifference = timediff(new Date(fullTime), new Date());
        return (timeDifference["days"] + " days " + timeDifference["hours"] + " hours ago");
    }
    const getOwnerData = async (ownerId) => {
        let temp = [];
        let searchID = ownerId;
        console.log(searchID)
        const listCollectionRef = collection(db, 'rental_owners');
        let q = query(listCollectionRef, where("id", "==", searchID[0]));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            temp.push(doc.data())
        });
        console.log(temp)
        setOwnerDetail(temp);
    }

    const [showMore, setShowMore] = useState(true);
    let showText;
    if (showMore) showText = 'Show more...'
    if (!showMore) showText = 'Show less...'

    return (
        <section style={{ background: "#161616", height: "100%", paddingTop: "50px", paddingBottom: "50px" }}>
            <div style={{ maxWidth: "1200px", margin: "auto", padding: "50px 20px", background: "black", borderRadius: "10px", position: "relative" }} className="flex flex-col flex-nowrap" >
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div id="carouselExampleCrossfade" className="relative w-full carousel slide carousel-fade" data-bs-ride="carousel" style={{ width: "800px" }}>
                            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
                                {drawCarouselButton}
                            </div>
                            <div className="relative flex items-center w-full overflow-hidden carousel-inner" style={{ height: "400px", width: "800px" }}>
                                {drawImagePane}
                            </div>
                            <button
                                className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide="prev"
                            >
                                <span className="inline-block bg-no-repeat carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide="next"
                            >
                                <span className="inline-block bg-no-repeat carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="relative" style={{ width: "700px", margin: "auto" }}>
                            <p style={{ fontFamily: 'Oswald', fontStyle: "normal", fontSize: "40px", fontWeight: "700", color: "white", color: "white", paddingTop: "20px", paddingBottom: "20px" }}>{pageContent && pageContent.length > 0 && pageContent[0]["fields"]["Item Name"]}</p>
                            <p style={{ fontSize: "20px", fontStyle: "italic", fontFamily: "Loistave", fontWeight: "500" }}>{pageContent && pageContent.length > 0 && itemDesc.substr(0, 400)}</p>
                            <button className="show_more" style={{ fontFamily: "Wildy Sans", fontSize: "24px", fontWeight: "600" }} data-bs-toggle="modal" data-bs-target="#exampleModal">{showText}</button>
                        </div>
                        <div style={{ marginTop: "40px", marginLeft: "40px" }}>
                            <p style={{ fontSize: "24px", color: "white" }} className="flex flex-row items-center "><FontAwesomeIcon icon={faMoneyBill} style={{ fontSize: "30px" }}></FontAwesomeIcon>&nbsp;&nbsp;   {pageContent && pageContent.length > 0 && pageContent[0]["fields"]["Item Price"]}</p>
                            <p style={{ fontSize: "24px", color: "white", marginTop: "20px" }} className="flex flex-row items-center "><FontAwesomeIcon icon={faMoneyBill} style={{ fontSize: "30px" }}></FontAwesomeIcon>&nbsp;&nbsp;&nbsp;{pageContent && pageContent.length > 0 && pageContent[0]["fields"]["Item Minimum Price"]}(MInimum Price)</p>
                            <p style={{ fontSize: "24px", color: "white", marginTop: "20px" }} className="flex flex-row items-center "><FontAwesomeIcon icon={faCloudArrowUp} style={{ fontSize: "30px" }}></FontAwesomeIcon>&nbsp;&nbsp;&nbsp;&nbsp;{pageContent && pageContent.length > 0 && datetime(pageContent[0]["fields"]["Last Modified"])}
                            </p>
                            {pageContent && pageContent.length > 0 && <Link href={`/rental_owner/${pageContent[0]["fields"]["Rental Owner"]}`}><p style={{ fontSize: "24px", color: "white", marginTop: "20px", cursor: "pointer" }} className="flex flex-row items-center "><FontAwesomeIcon icon={faShopify} style={{ fontSize: "30px" }}></FontAwesomeIcon>&nbsp;&nbsp;&nbsp;&nbsp;{ownerDetail && ownerDetail.length > 0 && ownerDetail[0]["fields"]["Name"]}
                            </p></Link>}
                            <p style={{ fontSize: "24px", color: "white", marginTop: "20px" }} className="flex flex-row items-center "><FontAwesomeIcon icon={faPhone} style={{ fontSize: "30px" }}></FontAwesomeIcon>&nbsp;&nbsp;&nbsp;&nbsp;{ownerDetail && ownerDetail.length > 0 && ownerDetail[0]["fields"]["Store Phone Number"]}
                            </p>
                        </div>
                    </div>
                    <div>
                        {pageContent && pageContent.length > 0 && <RandomCarousel itemID={pageContent[0]["fields"]["Item ID"]} rentalCategory={pageContent[0]["fields"]["Rental Category"]} />}
                    </div>
                </div>

                <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog relative w-auto pointer-events-none">
                        <div
                            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div
                                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">{pageContent && pageContent.length > 0 && pageContent[0]["fields"]["Item Name"]}</h5>
                                <button type="button"
                                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body relative p-4 text-black">
                            {pageContent && pageContent.length > 0 && pageContent[0]["fields"]["Item Description"]}
                            </div>
                            <div
                                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button type="button" data-bs-dismiss="modal" style={{ background: "black", padding: "5px 20px", borderRadius: "5px", color: "white" }}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
export default Detail

