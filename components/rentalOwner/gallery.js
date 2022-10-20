import Loading from "../home/loading"
import Link from 'next/link'
import { useEffect, useState } from "react";
import local_datas from '../../data.json';

console.log(local_datas);
const Gallery = ({id}) => {
    let drawItems = Array()
    let realIeams = Array()
    const [loadingImage, setLoadingImage] = useState(false);
    useEffect(() => {
        window.onscroll = function (ev) {
            if ((window.innerHeight + window.scrollY + 100) >= document.body.offsetHeight) {
                setLoadingImage(true);
            }
            else {
                setLoadingImage(false);
            }
        };
    }, [])
    const load = () => {
        if (loadingImage) return (<div><Loading /></div>);
        else return (<div></div>);
    }
    for(let i in local_datas.rental_items){
        if(local_datas.rental_items[i]["rental_owner"] == id){
            drawItems.push(local_datas.rental_items[i])
        }
    }
    if(drawItems.length >= 30){
        for( let j = 0; j < 30; j++){
            realIeams.push(drawItems[j])
        }  
    }
    else realIeams = drawItems
    return (
        <section style={{ background: "#161616" }}>
            <div className="flex flex-row flex-wrap justify-center gap-8 card_list" style={{ margin: "auto", maxWidth: "1440px", height: "auto", paddingTop: "100px", paddingBottom: "50px", background: '#161616' }} >
                {
                    drawItems && drawItems.length > 0 && drawItems.map(({ item_name, item_price, rental_owner, item_image, item_id }, key) => (
                        <Link href={`/cards/${item_id}`}>
                            <div className="card" style={{ width: "250px", height: "300px", background: "#0c0c0c", borderRadius: "2px" }}>
                                <img src={ item_image } className="flex items-center justify-center m-auto" style={{ width: "250px", height: "200px", borderRadius: "2px 2px 0px 0px" }} />
                                <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", padding: "10px 10px 5px 10px", fontSize: "18px" }}>{item_name}</p>
                                <a href="#" style={{ padding: "5px 10px 5px 10px" }}>{rental_owner}</a>
                                <p style={{ padding: "5px 10px 5px 10px", fontSize: "12px   " }}>{item_price}</p>
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
