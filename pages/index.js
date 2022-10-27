import Search from "../components/home/search"
import Gallery from "../components/home/gallery"
import local_datas from "./../data"
import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "./lib/init-firebase"
export default function IndexPage() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("All");
  const [showData, setShowData] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [lastPage, setLastPage] = useState(1);

  // const getlists = () => {
  //   const listCollectionRef = collection(db, 'rental_owner')
  //   getDocs(listCollectionRef).then(response => {
  //     const lsts = response.docs.map(doc => ({
  //       data: doc.data(),
  //       id: doc.id
  //     }))
  //     setlists(lsts)
  //     console.log(lsts)
  //   }).catch(error => { console.log(error.message) })
  // }

  const paginationData = (pageNumber, pageLimit = 30) => {
    const temp = listItems;
    return temp.slice((pageNumber - 1) * pageLimit, pageNumber * 30);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  const handleScroll = () => {
    if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
      console.log(page);
      setTimeout(() => {
        if(page + 1 <= lastPage) {
          setPage(page + 1);
        }
      }, 2000);
    }
  };
  useEffect(() => {
    const temp = [];
    let show_owner = 'All';
    setShowData([]);
    setPage(1);
    if (category == "Venue Rental") {
      for (let i in local_datas.rental_owners) {
        if (local_datas.rental_owners[i]["category"] == "Venue Rental") {
          show_owner = local_datas.rental_owners[i]["name"]
        }
      }
      for (let j in local_datas.rental_items) {
        if (local_datas.rental_items[j]["rental_owner"] == show_owner)
          temp.push(local_datas.rental_items[j])
      }
      setListItems(temp);
    }
    if (category == "Camera Equipment Rental") {
      for (let i in local_datas.rental_owners) {
        if (local_datas.rental_owners[i]["category"] == "Camera Equipment Rental") {
          show_owner = local_datas.rental_owners[i]["name"]
        }
      }
      for (let j in local_datas.rental_items) {
        if (local_datas.rental_items[j]["rental_owner"] == show_owner)
          temp.push(local_datas.rental_items[j])
      }
      setListItems(temp);
    }
    if (category == "All") {
      setListItems(local_datas.rental_items);
    }
  }, [category]);

  useEffect(() => {
    const fetchData = paginationData(page, 30);
    console.log("page number is ", page);
    setShowData([...showData, ...fetchData]);
    if(listItems.length % 30 > 0) {
      setLastPage(listItems.length / 30 + 1)
    } else {
      setLastPage(listItems.length / 30);
    }
  }, [page, listItems])

  return (
    <div>
      <Search category={category} setCategory={setCategory} />
      <Gallery showData={showData} page={page} lastPage={lastPage} />
    </div>
  )
}
