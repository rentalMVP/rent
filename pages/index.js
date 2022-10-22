import Search from "../components/home/search"
import Gallery from "../components/home/gallery"
import dynamic from 'next/dynamic'
import local_datas from "./../data"
import { useState, useEffect } from "react"
export default function IndexPage() {
  let show_owner = 'All'
  let show_data = Array()
  const[ category , setCategory] = useState("All")
  if( category == "Venue Rental"){
     for(let i in local_datas.rental_owners){
      if(local_datas.rental_owners[i]["category"] == "Venue Rental"){
        show_owner = local_datas.rental_owners[i]["name"]
        }
     }
     for ( let j in local_datas.rental_items){
      if( local_datas.rental_items[j]["rental_owner"] == show_owner)
      show_data.push(local_datas.rental_items[j])
     } 
  }
  if( category == "Camera Equipment Rental"){
    for(let i in local_datas.rental_owners){
     if(local_datas.rental_owners[i]["category"] == "Camera Equipment Rental"){
       show_owner = local_datas.rental_owners[i]["name"]
       }
    } 
    for ( let j in local_datas.rental_items){
      if( local_datas.rental_items[j]["rental_owner"] == show_owner)
      show_data.push(local_datas.rental_items[j])
     } 
 }
 if( category == "All"){
    show_data=local_datas.rental_items
 }
 console.log(category)
 console.log(show_data)
  return (
    <>
     <Search category={category} setCategory={setCategory}/>
     <Gallery show_data = { show_data }/>
    </>
  )
}
