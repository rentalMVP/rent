import Search from "../components/home/search"
import Gallery from "../components/home/gallery"
import local_datas from "./../data"
import { useState, useEffect } from "react"
import { collection, getDocs, addDoc, orderBy, query, limit, startAt} from "firebase/firestore"
import { db } from "./lib/init-firebase"
import Airtable from "airtable"
import { async } from "@firebase/util"
export default function IndexPage() {
  const [listCategory, setListCategory] = useState([]);
  const [category, setCategory] = useState("All");
  const [showData, setShowData] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [lastPage, setLastPage] = useState(false);
  const listCollectionRef = collection(db, 'rental_items');
  const [lastDocument, setLastDocument] = useState(3324);
  const temp = [];
  const loadData = async () => {
    console.log("Load");
    const q = query(listCollectionRef, orderBy("fields.Item ID"), limit(30), startAt(lastDocument));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    });
    if (querySnapshot.docs.length < 30) {
      setLastPage(true)
    }
    setLastDocument(Number(lastDocument) + 30);
    console.log(temp)
    setShowData([...showData, ...temp])
    console.log(showData);
  }

  let resultList = [];
  const getData = () => {
    console.log('Base ', process.env.NEXT_PUBLIC_BASE)
    let base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_API_KEY }).base(process.env.NEXT_PUBLIC_BASE);
    base('Rental Items').select({
      filterByFormula: "{Added to Firebase} = ''",
      pageSize: 100,
    }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function (record) {
        console.log(record["_rawJson"]);
        resultList = resultList.concat(record._rawJson);
        setTimeout(() => { }, 500);
        base('Rental Items').update(record._rawJson.id, {
          "Item ID": record._rawJson.fields["Item ID"],
          "Item Name": record._rawJson.fields["Item Name"],
          "Item Description": record._rawJson.fields["Item Description"],
          "Item Image": record._rawJson.fields["Item Image"],
          "Item Minimum Price": record._rawJson.fields["Item Minimum Price"],
          "Charge Rate Type": record._rawJson.fields["Charge Rate Type"],
          "Rental Owner": record._rawJson.fields["Rental Owner"],
          "Added to Firebase": true,
          // "Last Modified": "2022-11-03T06:12:55.000Z"
        }, { typecast: true }, function (err, record) {
          if (err) {
            console.error(err);
            return;
          }
        });

        addDoc(listCollectionRef, { id: record._rawJson["id"], createdTime: record._rawJson["createdTime"], fields: record._rawJson["fields"] }).then(response => (console.log(response))).catch(error => {
          console.log(error.message)
        });

      });
      setTimeout(() => { }, 1000);
      fetchNextPage();
    }, function done(err) {
      if (err) { console.error(err); return; }
    });
  }
  useEffect(() => {
    getData();
    loadData();
    // getCategory();
    categoryList();
  }, [])
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })
  const handleScroll = () => {
    if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
      setTimeout(() => {
        loadData();
      }, 2000);
    }
  };
  useEffect(() => {
    const temp = [];
    let show_owner = 'All';
    setShowData([]);
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
  // const getCategory = () => {
  //   const listCollectionRef = collection(db, 'rental_owners');
  //   let base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_API_KEY }).base(process.env.NEXT_PUBLIC_BASE);
  //   base('Rental Owners').select({
  //     pageSize: 100,
  //   }).eachPage(function page(records, fetchNextPage) {
  //     records.forEach(function (record) {
  //       console.log(record["_rawJson"]);
  //       setTimeout(() => { }, 500);
  //       addDoc(listCollectionRef, { id: record._rawJson["id"], createdTime: record._rawJson["createdTime"], fields: record._rawJson["fields"] }).then(response => (console.log(response))).catch(error => {
  //         console.log(error.message)
  //       });

  //     });
  //     setTimeout(() => { }, 1000);
  //     fetchNextPage();
  //   }, function done(err) {
  //     if (err) { console.error(err); return; }
  //   });

  // }
  const categoryList = async () =>{
    const categoryCollectionRef = collection(db, 'rental_owners');
    const q = query(categoryCollectionRef, orderBy("fields.Reviews"));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
  }

  return (
    <div>
      <Search category={category} setCategory={setCategory} />
      <Gallery showData={showData} lastPage={lastPage} />
    </div>
  )
}
