import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import SearchCard from "./searchCard"
import local_datas from "../../data.json"
const Search = ({ queryText }) => {
    console.log(queryText)
    let prop = queryText
    const first = []

    console.log(prop)
  
    if( prop  && prop.indexOf(",") == -1){
        console.log("1")
        first[0] = prop
        console.log(first)
    }
    if( prop && prop.indexOf(",") >= 0){
        console.log("2")
        first = prop.split(",")
        console.log(first)
    }
    const [text, setText] = useState(first)
    const [direction, setDirection] = useState(false)
    const [tmp, setTmp] = useState([])
    const [drawData, setDrawData] = useState([])
    const searchData = []
    const searchText = (search) => {
        if (search.indexOf(",") > -1) {
            search = search.split(",")
            setText([...text, search[0]])
            console.log(text)
            document.getElementById("searchtext").value = ""
        }
    }
    useEffect(() => {
       window.addEventListener('keydown', (e) => {
        if(e.keyCode === 8){
            setDirection(false) 
        }
       })
       window.addEventListener('keyup', (e) => {
        if(e.keyCode === 8){
            setDirection(true) 
        }
       })
    },[])
    console.log(direction)
    useEffect( () =>{
        if(( document.getElementById("searchtext").value == "") && direction){
            text.pop()
            console.log(text)
        }
    },[direction])
   useEffect(() =>{
    const buttonGroup = []
     for( let i in text){
        buttonGroup.push(<button style={{ padding:"0px 10px 0px 10px", fontSize:"20px", background:"#787878", borderRadius:"25px", marginRight:"5px", marginBottom:"5px", fontStyle:"italic",fontFamily: 'RNS Camelia'}} className="flex flex-row items-center" >{text[i]}<FontAwesomeIcon icon={ faXmark } style={{ fontSize:"15px", marginLeft:"10px"}} onClick={ (e) => deleteButton() } id={i}></FontAwesomeIcon></button>)
     }
     setTmp(buttonGroup);
     for(let k in text){
        for( let j in local_datas.rental_items){
           console.log((local_datas.rental_items[j]["item_name"].toLowerCase()).indexOf(text[k].toLowerCase() ))
           if (((local_datas.rental_items[j]["item_name"].toLowerCase()).indexOf(text[k].toLowerCase())) >= 0){
            searchData.push(local_datas.rental_items[j])
           }
        }
     }
     setDrawData(searchData)
     console.log(searchData)
 
   },[text.length])
   useEffect(() => {
    if(text.length != 0){
        document.getElementById("searchtext").placeholder=""
    }
    if(text.length == 0){
        document.getElementById("searchtext").placeholder="Dress,South Australia...."
    }
   })
   const deleteButton = () =>{
    let arrayId = event.target.id
    let tmp = [...text];
    tmp.splice(arrayId, 1);
    setText(tmp);   
    }
    const drawNotification = () =>{
        console.log(searchData.length)
        if(searchData.length == 0){
            return(<div className="flex items-center justify-center text-center my-28" style={{ fontStyle:"italic", fontSize:"24px"}}>There is no matched rental items.</div>)
        }
        if(searchData.length != 0 ){
            return(<></>)
        }
    }
    useEffect(() =>{
        drawNotification()
    },[searchData])
   return (
        <section style={{ background: "#161616", height: "100%", paddingTop: "50px", paddingBottom: "50px" }}>
            <p style={{ marginTop:"50px", fontSize:"30px", textAlign:"center", fontFamily:"Optima", color:"white", fontWeight:"700", fontStyle:"italic", marginBottom:"20px"}}> Search whatever you want........</p>
            <div style={{ maxWidth: "800px", margin: "auto", padding: "10px 20px 10px 20px", background: "#3a3a3a", borderRadius: "20px" }} className="flex flex-row flex-wrap" >
                <div className="flex flex-row flex-wrap">
                    { tmp }
                </div>
                <input type='text' style={{ background: "transparent", border: "1px solid transparent", outline: "none", fontSize: "20px", fontFamily: 'RNS Camelia', width: "auto" }} onChange={(e) => searchText(e.target.value)} id="searchtext" placeholder=""/>
            </div>
            <div>
                {
                    drawData && drawData.map(({ item_name, item_id, item_price, item_minimun_price, last_modified, phone_number, item_image}, index) =>(
                        <SearchCard item_name={ item_name } item_price ={ item_price } item_id = { item_id } item_minimun_price = { item_minimun_price } last_modified = { last_modified } phone_number = { phone_number } item_image={ item_image} key = {index}/>
                    ))
                }
                { drawNotification ()}
            </div>
            
        </section>
    )

}
export default Search


