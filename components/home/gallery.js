import Loading from "./loading"
import Link from 'next/link'
import { useEffect, useState } from "react";
const local_datas = [
        {item_id: "1",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia", img:"./rentalImage/sample.webp"},
        {item_id: "2",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "3",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "4",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "5",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "6",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "7",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "8",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "9",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "10",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "1",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia", img:"./rentalImage/sample.webp"},
        {item_id: "2",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "3",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "4",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "5",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "6",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "7",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "8",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "9",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "10",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "1",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia", img:"./rentalImage/sample.webp"},
        {item_id: "2",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "3",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "4",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "5",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "6",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "7",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "8",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "9",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
        {item_id: "10",item_name:"Rose of Australia Hotel (Terrace Function Room)", item_price:"Min. $500.00/Day", rental_owner:"Rose of Australia" , img:"./rentalImage/sample.webp"},
    ];
   
const Gallery = () =>{
    const [loadingImage, setLoadingImage] = useState(false);
    useEffect(()=>{
        window.onscroll = function(ev) {
            if ((window.innerHeight + window.scrollY + 100) >= document.body.offsetHeight) {
                setLoadingImage(true);
            }
            else{
                setLoadingImage(false);   
            }
        };
    },[])
    const load = () =>{
        if(loadingImage)   return (<div><Loading/></div>);
        else return(<div></div>);
    }
    console.log(loadingImage)
    return(
        <section style={{ background:"#0c0c0c"}}>
            <div className="flex flex-row flex-wrap justify-between gap-8 card_list" style={{ margin:"auto", maxWidth:"1440px", height:"auto",paddingTop:"100px", paddingBottom:"50px"}} >
                { 
                    local_datas.map(({ item_name, item_price, rental_owner, img, item_id }, key) => (
                        <Link href={`cards/${item_id}`}>
                        <div className="card" style={{ width: "250px", height:"300px", background:"#0c0c0c", borderRadius:"2px"}}>  
                            <img src={img} className="flex items-center justify-center m-auto" style={{ width:"250px",height:"200px", borderRadius:"2px 2px 0px 0px"}}/>
                            <p style={{  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", padding:"10px 10px 5px 10px", fontSize:"18px" }}>{item_name}</p>
                            <a href="#" style={{ padding:"5px 10px 5px 10px"}}>{rental_owner}</a> 
                            <p style={{ padding:"5px 10px 5px 10px", fontSize:"12px   "}}>{item_price}</p>
                            <div className="overlay"><h4>Rent Now</h4>
                            </div>
                        </div>
                        </Link>
                    )) 
                } 
            </div>
            {load()}
        </section>
    )
}
export default Gallery