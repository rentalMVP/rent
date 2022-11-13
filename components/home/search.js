import CategoryList from "./categoryList"

const Search = ( {category, setCategory}) =>{
    return(
        <section style={{ width:"100%", height:"400px", background:"#1f1f1f"}} className="search">
            <p style={{ paddingTop:"150px", textAlign:"center", color:"white", fontFamily:'Optima', fontStyle:"italic", fontSize:"40px", fontWeight:"700"}}>Explore Sydney's Largest Rental Directory. </p>
            <CategoryList category = {category} setCategory = {setCategory}/>
            {/* <ul className="flex flex-row" style={{width:"fit-content", margin:"auto", marginTop:"10px"}}>
                <li style={{ marginRight:"20px", fontSize:"20px", fontFamily:"Oswald", padding:"5px"}} className="li_text" onClick={ () => setCategory("All")}>
                   All
                </li>
                <li style={{ marginRight:"20px", fontSize:"20px", fontFamily:"Oswald", padding:"5px"}} className="li_text" onClick={ () => setCategory("Venue Rental")}>
                   Venue Rental
                </li>
                <li style={{  fontSize:"20px" , fontFamily:"Oswald", padding:"5px"}} className="li_text" onClick={ () => setCategory("Camera Equipment Rental")}>
                Camera Equipment Rental 
                </li>
            </ul> */}
            <div style={{ width:"400px", background:"white", margin:"auto", padding:"10px", marginTop:"20px", borderRadius:"5px"}} className="flex flex-row items-center justify-around">
                <input type="text" className="outline-none home_search" placeholder="Enter Car name, address, clothes" style={{ fontSize:"16px", width:"300px", padding:"5px", color:"black"}}/>
                <img src='./image/search-engine-icon.svg' style={{ height:"24px"}}/>
            </div>
        </section>
    )
}
export default Search