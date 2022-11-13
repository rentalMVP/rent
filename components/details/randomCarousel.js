import { collection, getDocs, addDoc, orderBy, query, limit, startAfter, where, startAt, Timestamp } from "firebase/firestore"
import { db } from "../../pages/lib/init-firebase"
import { useEffect , useState} from "react"
import Link from "next/link"
const RandomCarousel = ({ itemID, rentalCategory }) =>{
  const [ similarPane, setSimilarPane] = useState([]);
  console.log(itemID)
  console.log(typeof(rentalCategory))
  const getRentalData = async(itemID, rentalCategory) =>{
    const temp = [];
    const tempPanel = [];
    const listCollectionRef = collection(db, 'rental_items')
    let q = query(listCollectionRef, orderBy("fields.Item ID"), where("fields.Rental Category","==", rentalCategory), limit(4), startAfter(itemID));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        temp.push(doc.data())
    });
    console.log(temp)
    if(temp.length != 0){
      for( let i in temp){
        console.log({i});
        tempPanel.push(
          <Link
            href = {`/cards/${temp[i]["fields"]["Item ID"]}`}
            shallow
          >
            <div className="similarCard">
              <center>
                <img src={"https://"+(temp[i]["fields"]["Item Image"].split(",")[0])} style={{ height:"200px", width:"auto"}} />
              </center>
              <div className="similarOverlay">Show Item</div>
              <div className="detailShow"><p>{temp[i]["fields"]["Item Name"]}</p></div>
            </div>
          </Link>
        );
      }
    }
    else{
      tempPanel.push(<div style={{height:"700px", display:"flex",width:"400px", justifyContent:"center", alignContent:"center", flexDirection:"column" }}><img src='../image/logo.svg' style={{ height: "40px"}}/>
      <p style={{ fontSize:"24px", color:"#ff9005", marginTop:"30px", fontStyle:"italic", fontFamily:"RNS Camelia", textAlign:"center"}}>No Similar item</p></div>)
    }
    console.log(tempPanel)
    setSimilarPane(tempPanel)
  }
  useEffect(() =>{
     getRentalData(itemID, rentalCategory);
  },[itemID]);
  return (
    <>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", paddingTop:"30px"}}>
          {
            similarPane
          }
        </div>
    </>
  )

}
export default RandomCarousel