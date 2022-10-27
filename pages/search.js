import { useRouter } from 'next/router'
import Search from '../components/search/search'
export default function SearchPage() {
    const router = useRouter()
    const queryText = router.query["query"]
    console.log(queryText)
  return (
    <>
      {queryText && <Search  queryText={queryText}/>}
    </>
  )
}