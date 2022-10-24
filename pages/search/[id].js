
import { useRouter } from 'next/router'
import Search from '../../components/search/search'
export default function SearchPage() {
    const router = useRouter()
    const { id } = router.query
    console.log(id)
  return (
    <>
     <Search id={ id }/>
    </>
  )
}