const Card = ({ item_name, item_price, rental_owner, item_image, item_id }) => {

    return(
       <>
          <div className="card" style={{ width: "250px", height: "300px", background: "#0c0c0c", borderRadius: "2px" }}>
                <img src={ item_image } className="flex items-center justify-center m-auto" style={{ width: "250px", height: "200px", borderRadius: "2px 2px 0px 0px" }} />
                <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", padding: "10px 10px 5px 10px", fontSize: "18px" }}>{item_name}</p>
                <a href="#" style={{ padding: "5px 10px 5px 10px" }}>{rental_owner}</a>
                <p style={{ padding: "5px 10px 5px 10px", fontSize: "12px   " }}>{item_price}</p>
                <div className="overlay"><h4>Rent Now</h4></div>
           </div>
       </> 
    )

}
export default Card