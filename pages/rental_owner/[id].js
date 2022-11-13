
import { useRouter } from 'next/router'
import RentalOwner from '../../components/rentalOwner/rentalOwner'
import {okgood, okno} from '../api/firestoreServiceProvider'
export default function RentalOwnersPage() {
    const router = useRouter()
    const { id } = router.query;
    const getRentalOwnerName = (id) =>{
      console.log(id)

    }
    getRentalOwnerName();
  return (
    <>
     {id && <RentalOwner id={id}/>}
    </>
  )
}
