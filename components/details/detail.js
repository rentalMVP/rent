import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import {faGlobe} from "@fortawesome/free-solid-svg-icons"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import {faCommentDots} from "@fortawesome/free-solid-svg-icons"
import { faArrowRotateLeft} from "@fortawesome/free-solid-svg-icons"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons"
import local_datas from '../../data.json';
import { useState } from "react"

const Detail = ({ id }) => {
    var show_data = ''
    var show_owner= ''
    var showText=''
    var content= Array()
    var themePanel= []
    for(let i in local_datas.rental_items) {
        if(local_datas.rental_items[i].item_id == id){
            show_data = local_datas.rental_items[i];
        }
    }  
    for(let k in local_datas.rental_owners){
        if(local_datas.rental_owners[k]["name"] == show_data["rental_owner"]){
            show_owner = local_datas.rental_owners[k]; 
        }
    }
    for(let p in local_datas.rental_items) {
        if(local_datas.rental_items[p]["rental_owner"] == show_owner["name"]){
            content.push(local_datas.rental_items[p])
        }
    }
    const [ showMore, setShowMore ] = useState(true);
    const writeDetails = () =>{
        let acronym = show_data && show_data["item_description"];
         acronym = acronym && acronym.substr(0, 400);
         if(showMore){
            return( 
                <>
                    <div dangerouslySetInnerHTML={{ __html: '<p style={{ lineHeight:"16px", fontSize:"12px", color:"white"}}>' + acronym+'&nbsp;......</p>'}}></div>
                </>)
            }
        else{
            return(
                <>
                    <div dangerouslySetInnerHTML={{ __html: '<p style={{ lineHeight:"16px", fontSize:"12px", color:"white"}}>' + show_data["item_description"]+'</p>'}}></div>
                </>  
            )
        }           
    } 
    if( showMore ) showText = 'Show more...'
    if( !showMore ) showText = 'Show less...' 
            
    console.log( local_datas.rental_items)
    console.log( show_owner )
    console.log( content )
    if( content.length >= 4) {
        themePanel.push(<FontAwesomeIcon icon={ faAngleLeft} style={{ fontSize:"20px", color:"white"}} className="arrow_left" />)
        for(let a = 0; a < 4 ; a++){
            themePanel.push(<Link href={`/cards/${content[a]["item_id"]}`}><img src={ content[a]["item_image"]} style={{ width:"320px", margin:"5px", border:"solid 2px transparent", borderRadius:"10px"}} className="rental_image"/></Link>) 
        }
        themePanel.push(<FontAwesomeIcon icon={ faAngleRight} style={{ fontSize:"20px", color:"white"}} className="arrow_left" />)
    }
     else{
        for(let b in content){
            themePanel.push(<Link href={`/cards/${content[a]["item_id"]}`}><img src="../cards/sample.webp" style={{ width:"320px", margin:"5px", border:"solid 2px transparent", borderRadius:"10px"}} className="rental_image"/></Link>) 
        }

     }  
    return (
        <section style={{ background: "#161616", height:"100%", paddingTop:"50px" , paddingBottom:"50px"}}>
            <div style={{ maxWidth: "1440px", margin: "auto", padding:"50px 50px 50px 50px", background:"#3a3a3a", borderRadius:"10px", position:"relative"}} className="flex flex-col flex-nowrap" >
                <div className="flex flex-row">
                    <div style={{ width:"900px"}}>
                        <div> 
                            <div id="carouselExampleCrossfade" className="relative w-full carousel slide carousel-fade" data-bs-ride="carousel" style={{ borderRadius:"10px"}}>
                                <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
                                    <button
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                    ></button>
                                    <button
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                    ></button>
                                    <button
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                    ></button>
                                </div>
                                <div className="relative w-full overflow-hidden carousel-inner">
                                    <div className="float-left w-full carousel-item active">
                                        <img src={show_data["item_image"]}
                                            className="block w-full"
                                            alt="Wild Landscape"
                                        />
                                    </div>
                                    <div className="float-left w-full carousel-item">
                                        <img
                                            src="../cards/sample.webp"
                                            className="block w-full"
                                            alt="Camera"
                                        />
                                    </div>
                                    <div className="float-left w-full carousel-item">
                                        <img
                                            src="../cards/sample.webp"
                                            className="block w-full"
                                            alt="Exotic Fruits"
                                        />
                                    </div>
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
                        </div>
                        <div className="relative">
                            <p style={{ fontFamily:'Oswald', fontStyle:"normal", fontSize:"40px", fontWeight:"700", color:"white", padding:"20px", color:"white"}}>{show_data["item_name"]}</p>
                            { writeDetails()}
                            <button  className="show_more" onClick={ () => setShowMore(!showMore)}>{ showText }</button>
                        </div>
                        <div style={{ marginTop:"40px", marginLeft:"40px"}}>
                                <p style={{ fontSize:"24px", color:"white"}} className="flex flex-row items-center "><FontAwesomeIcon icon={ faMoneyBill} style={{ fontSize:"30px"}}></FontAwesomeIcon>&nbsp;&nbsp;   {show_data["item_price"]}</p>
                                <p style={{ fontSize:"24px", color:"white", marginTop:"20px"}} className="flex flex-row items-center "><FontAwesomeIcon icon={ faMoneyBill} style={{ fontSize:"30px"}}></FontAwesomeIcon>&nbsp;&nbsp;&nbsp;{show_data["item_minimun_price"]}(min)</p>
                                <p style={{ fontSize:"24px", color:"white", marginTop:"20px"}} className="flex flex-row items-center "><FontAwesomeIcon icon={ faCalendarCheck} style={{ fontSize:"30px"}}></FontAwesomeIcon>&nbsp;&nbsp;&nbsp;&nbsp;{show_data["last_modified"]}
                                </p>
                                
                                
                        </div>
                    </div>
                    <div style={{ width:"500px", padding:"40px"}}>
                        <p style={{ fontFamily:'Oswald', fontStyle:"normal", fontSize:"50px", fontWeight:"700", color:"white", textAlign:"center"}}>{show_owner["name"]}</p>
                        <a href={show_owner["website"]} style={{ marginTop:"30px", lineHeight:"24px", fontSize:"20px"}} className="flex flex-row items-center">
                            <FontAwesomeIcon icon={faGlobe} style={{ marginRight:"20px", fontSize:"30px"}}/>{show_owner["website"]}</a>
                        <p style={{ lineHeight:"24px", fontSize:"18px",marginTop:"30px", color:"white"}} className="flex flex-row items-center"><FontAwesomeIcon icon={ faLocationDot } style={{ marginRight:"20px", fontSize:"30px", lineHeight:"35px"}}/> { show_owner["address"] }</p>
                        <p style={{ marginTop:"30px", fontFamily:"Roboto", fontSize:"18px", color:"white"}} className="flex flex-row items-center font-bold">
                        <FontAwesomeIcon icon={ faCommentDots } style={{ marginRight:"20px", fontSize:"30px"}}/> {show_owner["reviews"]}
                        </p>
                        <div style={{ marginTop:"30px"}}>
                            <p className="flex flex-row text-center">
                            <img src="../cards/star.svg" style={{ height:"40px"}}/>
                            <img src="../cards/star.svg" style={{ height:"40px"}}/>
                            <img src="../cards/star.svg" style={{ height:"40px"}}/>
                            <img src="../cards/star.svg" style={{ height:"40px"}}/>
                            <img src="../cards/star.svg" style={{ height:"40px"}}/>
                            </p>
                        </div>
                        
                        <button style={{ marginTop:"50px",padding:"10px 80px", fontSize:"24px", background:"white", color:"black", marginRight:"auto", marginLeft:"auto", borderRadius:"10px"}} className="flex flex-row items-center phone"><img src="../cards/call.svg" style={{ width:"30px", marginRight:"20px"}}/> {show_owner["phone_number"]} </button>
                    </div>
                </div>
                <Link href={`/rental_owner/${show_owner["name"]}`}>
                    <p style={{ fontFamily:'Oswald', fontStyle:"normal", fontSize:"40px", fontWeight:"700", color:"white", padding:"10px 20px 10px 20px", color:"white", width:"fit-content", cursor:"pointer", marginTop:"30px"}}>Similar Rental Items</p>
                </Link> 
                <div className="flex flex-row items-center" style={{ padding:"0px 0px 0px 0px", margin:"auto", marginTop:"20px", marginBottom:"20px"}}>
                    { themePanel }
                </div> 
            </div>
            
        </section>
    )
}
export default Detail

