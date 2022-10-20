import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faCommentDots } from "@fortawesome/free-solid-svg-icons"
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons"
import local_datas from '../../data.json';
import React from 'react'
import Gallery from "../rentalOwner/gallery"
const RentalOwner = ({id}) =>{
    let rentalOwnerShow = Array()
    for( let i in local_datas.rental_owners){
        if(local_datas.rental_owners[i]["name"] == id)
        rentalOwnerShow.push(local_datas.rental_owners[i])
    }
    console.log({rentalOwnerShow})
    if (!rentalOwnerShow[0]) return <h1>No owner</h1>
    return(
        <section>
            <div style={{ background: "#161616", height:"100%", paddingTop:"50px" , paddingBottom:"50px"}}>
                <div style={{ maxWidth:"1440px", margin:"auto", background:"#3a3a3a", borderRadius:"10px", padding:"50px", position:"relative"}} className="flex flex-row">
                    <div style={{ width:"800px", height:"500px", background:"white", backgroundImage:"url(../rentalImage/sample.webp)", backgroundSize:"cover"}}>  
                    </div>
                    <div style={{ width:"500px", height:"500px", background:"trnasparent", backgroundSize:"cover", marginLeft:"50px"}}>  
                        <p style={{ fontFamily:'Oswald', fontStyle:"normal", fontSize:"50px", fontWeight:"700", color:"white", textAlign:"center"}}>{ rentalOwnerShow[0]["name"] }</p>
                        <a href={ rentalOwnerShow[0]["website"] } style={{ marginTop:"40px", lineHeight:"24px", fontSize:"20px"}} className="flex flex-row items-center">
                            <FontAwesomeIcon icon={faGlobe} style={{ marginRight:"20px", fontSize:"30px"}}/>{ rentalOwnerShow[0]["website"] }</a>
                        <p style={{ lineHeight:"24px", fontSize:"18px",marginTop:"40px", color:"white"}} className="flex flex-row items-center"><FontAwesomeIcon icon={ faLocationDot } style={{ marginRight:"20px", fontSize:"30px"}}/>{ rentalOwnerShow[0]["address"] }</p>
                        <p style={{ marginTop:"40px", fontFamily:"Roboto", fontSize:"18px", color:"white"}} className="flex flex-row items-center font-bold">
                        <FontAwesomeIcon icon={ faCommentDots } style={{ marginRight:"20px", fontSize:"30px"}}/> { rentalOwnerShow[0]["reviews"] }
                        </p>
                        <p style={{ marginTop:"40px", fontFamily:"Roboto", fontSize:"18px", color:"white"}} className="flex flex-row items-center font-bold"> 
                        <FontAwesomeIcon icon={faGoogle} style={{ marginRight:"20px", fontSize:"30px"}}/> Google Rating { rentalOwnerShow[0]["google_rating"] }
                        </p>
                        <p style={{ marginTop:"40px", fontFamily:"Roboto", fontSize:"18px", color:"white"}} className="flex flex-row items-center font-bold"> 
                        <FontAwesomeIcon icon={faPhoneVolume} style={{ marginRight:"20px", fontSize:"30px"}}/> { rentalOwnerShow[0]["phone_number"] }
                        </p>   
                    </div>
                    <FontAwesomeIcon icon={ faPhoneFlip } style={{ position:"absolute", bottom:"40px",  right:"40px", fontSize:"40px", borderRadius:"50%"}}  className="return"/>
                </div>
                <Gallery id={ id }/>
            </div>
        </section>
        )
}
export default RentalOwner
