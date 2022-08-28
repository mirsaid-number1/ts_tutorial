import React from 'react'
import {useParams} from 'react-router-dom'
import { useGetHeroDetail } from '../../hooks/useSuperheroDetail';
function RQSuperHero() {
    let getid = useParams();
    let id = getid.id;
    const {data,isLoading} = useGetHeroDetail(id)
   console.log(data);
   console.log(data?.data.name);
    return (
    <div>
        <h2>Lets go {id}</h2>
        <div className='nested_collection'>
          {data?.data.name}
        </div>
        
    </div>
  )
}

export default RQSuperHero