import Loading from "./loading"
import Link from 'next/link'
import { useEffect, useState } from "react";
import { faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";
const Gallery = ({ showData, page, lastPage }) => {
    // const valid_data = [];
    // if (show_data.length >= 30) {
    //     for (let i = 0; i < 30; i++) {
    //         valid_data.push(show_data[i])
    //     }
    // }


    const load = () => {
        if (true)
            return <Loading />
        else return (<div></div>);
    }

    return (
        <section style={{ background: "#161616" }}>
            <div className="flex flex-row flex-wrap justify-center gap-8 card_list" style={{ margin: "auto", maxWidth: "1440px", height: "auto", paddingTop: "100px", paddingBottom: "50px", background: '#161616' }} >
                {
                    showData && showData.length > 0 && showData.map(({ item_name, item_price, rental_owner, item_image, item_id }, index) => (
                        <Link key={index} href={`/cards/${item_id}`}>
                            <div className="card" style={{ width: "250px", height: "300px", background: "#0c0c0c", borderRadius: "2px" }}>
                                <img src={item_image} className="flex items-center justify-center m-auto" style={{ width: "250px", height: "200px", borderRadius: "2px 2px 0px 0px" }} />
                                <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", padding: "10px 10px 5px 10px", fontSize: "18px" }}>{item_name}</p>
                                <a href="#" style={{ padding: "5px 10px 5px 10px" }}>{rental_owner}</a>
                                <p style={{ padding: "5px 10px 5px 10px", fontSize: "12px" }}>{item_price}</p>
                                <div className="overlay"><h4>Rent Now</h4>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            {
                page == lastPage ? '' : load()
            }
        </section>
    )
}
export default Gallery
