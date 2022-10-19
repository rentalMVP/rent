import Search from "../components/home/search"
import Gallery from "../components/home/gallery"
import dynamic from 'next/dynamic'




export default function IndexPage() {
  return (
    <>
     <Search/>
     <Gallery/>
    </>
  )
}
