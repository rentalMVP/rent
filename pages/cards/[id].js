
import { useRouter } from 'next/router'
import Detail from '../../components/details/detail' 
export default function CardsPage() {
    const router = useRouter()
    const { id } = router.query;
    console.log('Query: ', router.query);

  return (
    <>
     <Detail id={id}/>
    </>
  )
}