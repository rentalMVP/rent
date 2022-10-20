import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

const StickySearch = () =>{
    return(
        <div className="flex flex-row items-center stickySearch">
            <FontAwesomeIcon icon={ faMagnifyingGlass} style={{ fontSize:"1vw", marginRight:"0vw", color:"white"}} className="searchIcon"/> 
            <input type="text" placeholder="search....."/>
        </div>
    )
}
export default StickySearch

