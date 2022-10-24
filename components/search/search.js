import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import SearchCard from "./searchCard"
const Search = ({ id }) => {
    const [text, setText] = useState([])
    const [direction, setDirection] = useState(false)
    const [tmp, setTmp] = useState([])
    const searchText = (search) => {
            if (search.indexOf(",") > -1) {
                search = search.split(",")
                setText([...text, search])
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
   },[text.length])
   useEffect(() => {
    if(text.length != 0){
        document.getElementById("searchtext").placeholder=""
    }
    if(text.length == 0){
        document.getElementById("searchtext").placeholder="Dress, South Australia...."
    }
   })
   const deleteButton = () =>{
    let arrayId = event.target.id
    let tmp = [...text];
    tmp.splice(arrayId, 1);
    setText(tmp);   
    }
   return (
        <section style={{ background: "#161616", height: "100%", paddingTop: "50px", paddingBottom: "50px" }}>
            <p style={{ marginTop:"50px", fontSize:"30px", textAlign:"center", fontFamily:"Optima", color:"white", fontWeight:"700", fontStyle:"italic", marginBottom:"20px"}}> Search whatever you want........</p>
            <div style={{ maxWidth: "800px", margin: "auto", padding: "10px 20px 10px 20px", background: "#3a3a3a", borderRadius: "20px" }} className="flex flex-row flex-wrap" >
                <div className="flex flex-row flex-wrap">
                    { tmp}
                </div>
                <input type='text' style={{ background: "transparent", border: "1px solid transparent", outline: "none", fontSize: "20px", fontFamily: 'RNS Camelia', width: "auto" }} onChange={(e) => searchText(e.target.value)} id="searchtext" placeholder=""/>
            </div>
            <div>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
            </div>
            
        </section>
    )

}
export default Search