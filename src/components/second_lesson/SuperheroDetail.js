import React from 'react'
import axios from 'axios'
import {useQuery,useQueryClient} from 'react-query'
import { useParams } from 'react-router-dom'
function SuperheroDetail() {
    let {heroId} = useParams();
    const queryClient = useQueryClient();
    console.log(heroId);
    const {data,isLoading,isError,error} = useQuery(['superhero-detail',heroId],() => {
        return axios.get(`http://localhost:4000/superheroes/${heroId}`)
    },{initialData:() => {
        const hero = queryClient.getQueryData('hyper-heroes')?.data?.find(hero => hero.id === parseInt(heroId));
        if(hero) {
            return {data:hero}
        }
        return undefined
    }})
  return (
    <div>
        <h2>SuperheroDetail</h2>
        <h3>hm</h3>
        <h2>Lets go {heroId}</h2>
        <div className='nested_collection'>
          {data?.data.name}
        </div>
    </div>
  )
}

export default SuperheroDetail