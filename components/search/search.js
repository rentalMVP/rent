import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import SearchCard from "./searchCard"
import local_datas from "../../data.json"
import NewCard from "./newCard"
import { collection, getDocs, addDoc, orderBy, query, limit, startAfter, startAt, where, getDoc } from "firebase/firestore"
import { db } from "../../pages/lib/init-firebase"
const Search = ({ queryText }) => {
    let prop = queryText
    const first = []
    if (prop && prop.indexOf(",") == -1) {
        first[0] = prop
    }
    if (prop && prop.indexOf(",") >= 0) {
        first = prop.split(",")
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
            document.getElementById("searchtext").value = ""
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 8) {
                setDirection(false)
            }
        })
        window.addEventListener('keyup', (e) => {
            if (e.keyCode === 8) {
                setDirection(true)
            }
        })
    }, [])
    useEffect(() => {
        if ((document.getElementById("searchtext").value == "") && direction) {
            text.pop()
        }
    }, [direction])
    useEffect(async () => {
        const buttonGroup = []
        for (let i in text) {
            buttonGroup.push(<button style={{ padding: "0px 10px 0px 10px", fontSize: "20px", background: "#787878", borderRadius: "25px", marginRight: "5px", marginBottom: "5px", fontStyle: "italic", fontFamily: 'RNS Camelia' }} className="flex flex-row items-center" >{text[i]}<FontAwesomeIcon icon={faXmark} style={{ fontSize: "15px", marginLeft: "10px" }} onClick={(e) => deleteButton()} id={i}></FontAwesomeIcon></button>)
        }
        setTmp(buttonGroup);
        let temp = [];
        const listCollectionRef = collection(db, 'rental_items');
        const q = query(listCollectionRef, orderBy("fields.Item ID"), limit(1000))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            temp.push(doc.data())
        });
        for (let k in text) {
            for (let j in temp) {
                if (((temp[j]["fields"]["Item Description"].toLowerCase()).indexOf(text[k].toLowerCase())) >= 0) {
                    searchData.push(temp[j])
                }
            }
        }
        setDrawData(searchData)

    }, [text.length])
    useEffect(() => {
        if (text.length != 0) {
            document.getElementById("searchtext").placeholder = ""
        }
        if (text.length == 0) {
            document.getElementById("searchtext").placeholder = "Dress,South Australia...."
        }
    })
    const deleteButton = () => {
        let arrayId = event.target.id
        let tmp = [...text];
        tmp.splice(arrayId, 1);
        setText(tmp);
    }
    const drawNotification = () => {
        if (searchData.length == 0) {
            return (<div className="flex items-center justify-center text-center my-28" style={{ fontStyle: "italic", fontSize: "24px" }}>There is no matched rental items.</div>)
        }
        if (searchData.length != 0) {
            return (<></>)
        }
    }
    useEffect(() => {
        drawNotification()
    }, [searchData])
    return (
        <section style={{ background: "#161616", height: "100%", paddingTop: "50px", paddingBottom: "50px" }}>
            <p style={{ marginTop: "50px", fontSize: "30px", textAlign: "center", fontFamily: "Optima", color: "white", fontWeight: "700", fontStyle: "italic", marginBottom: "20px" }}> Search whatever you want........</p>
            <div style={{ maxWidth: "800px", margin: "auto", padding: "10px 20px 10px 20px", background: "#3a3a3a", borderRadius: "20px", marginBottom: "30px" }} className="flex flex-row flex-wrap" >
                <div className="flex flex-row flex-wrap">
                    {tmp}
                </div>
                <input type='text' style={{ background: "transparent", border: "1px solid transparent", outline: "none", fontSize: "20px", fontFamily: 'RNS Camelia', width: "auto" }} onChange={(e) => searchText(e.target.value)} id="searchtext" placeholder="" />
            </div>
            <div>
                {
                    drawData && drawData.map(({ fields }, index) => (
                        <NewCard fields={fields} key={index} /> 
                    ))
                }
                {drawNotification()}
            </div>
      

        </section>
    )

}
export default Search


