import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faShop } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import timediff from "timediff";


const color_options = ["#262626", "#363636", "#464646", "#565656","666666", "#767676", "#868686","#969696", "a6a6a6"];
const NewCard = ({fields}) => {
    const imageArray = fields["Item Image"].split(",");
    console.log(imageArray.length)
    const image_options = [];
    for(let i in imageArray){
        image_options.push("url('https://"+imageArray[i].replace(" ","")+"')");
    }
    const [id, setID] = useState(0)
    const [image, setImage] = useState(image_options[0]);
    const [color, setColor] = useState(color_options[0]);
    const [direction, setDirection] = useState(0);
    useEffect(() => {
        console.log(id)
        if (direction == 1) {
            document.getElementById("carousel-wrapper").classList.add("anim-next");
        }
        if (direction == 2) {
            document.getElementById("carousel-wrapper").classList.add("anim-previous");
        }
        setTimeout(() => {
            setImage(image_options[id]);
        }, 455);
        setTimeout(() => {
            setColor(color_options[id])
            if (direction == 1) {
                document.getElementById("carousel-wrapper").classList.remove("anim-next");
            }
            if (direction == 2) {
                document.getElementById("carousel-wrapper").classList.remove("anim-previous");
            }
        }, 650);
    }, [id])
    const next = () => {
        if (id == imageArray.length-1) {
            setID(0)
        }
        else { setID(id + 1); }
        setDirection(1);
    }
    const previous = () => {
        if (id == 0) {
            setID(imageArray.length-1)
        }
        else { setID(id - 1) }
        setDirection(2);
    }
    const datetime = (fullTime) => {
        let timeDifference = timediff(new Date(fullTime), new Date());
        return (timeDifference["days"] + " days " + timeDifference["hours"] + " hours ago");
    }

    return (
        <>
       
        <div id="carousel-wrapper">
            <div style={{ borderBottom:"1px solid #161616", padding:"10px 40px", width:"800px", background:color}} className="flex flex-row items-center justify-between">
            <p style={{ fontSize:"25px", color:"white", fontFamily:"Hagen", fontStyle:"italic"}}>{fields["Item Name"]}</p>
            <FontAwesomeIcon icon={ faHeart} style={{ fontSize:" 20px"}}></FontAwesomeIcon>
            </div>
            <div id="menu" style={{ background: color }}>
                <div id="image" style={{ backgroundImage: image , backgroundSize:"contain"}}></div>
                <div id="current-option">
                    <p className="flex flex-row" style={{ fontSize:"20px", color:"white"}}><FontAwesomeIcon icon={ faRotateLeft } style={{ fontSize:"25px", marginRight:"10px", color:"white" }}></FontAwesomeIcon>{datetime(fields["Last Modified"])}</p>
                    <p style={{ fontSize:"20px", marginTop:"15px", color:"white"}}>{fields["Item Price"]}</p>
                    <p style={{ fontSize:"20px", marginTop:"15px", color:"white", fontFamily:'Shalome'}}>{ fields["Rental Category"]}</p>
                    <p style={{ fontSize:"20px", marginTop:"15px", color:"white", fontFamily:'Shalome'}} className="flex flex-row items-center"><FontAwesomeIcon icon={ faShop} style={{ fontSize:"25px", marginRight:"10px"}}></FontAwesomeIcon>{fields["Rental Owner Name"]}</p>
                    <div className="flex flex-row" style={{ marginTop:"30px"}}>
                        <Link href={`/cards/${fields["Item ID"]}`}>
                        <button style={{ width:"300px", background:"white", color:color, padding:"10px 15px", marginRight:"10%", borderRadius:"5px"}}> More detail</button>
                        </Link>
                    </div>
                </div>
                <button id="previous-option" onClick={() => { next() }}></button>
                <button id="next-option" onClick={() => { previous() }}></button>

            </div>
            
        </div>
        </>

    )


}
export default NewCard