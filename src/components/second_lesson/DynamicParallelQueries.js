import React, { useEffect, useState } from 'react';
import {useQueries,useQuery} from 'react-query';
import axios from 'axios';

function DynamicParallelQueries() {
    let [selectedCars,setSelectedCars] = useState([]);
    let fetchingSupercars = () => {
        return axios.get('http://localhost:4000/supercars');
    }
    let dynamicFetch = (id) => {
        return axios.get(`http://localhost:4000/supercars/${id}`)
    }

    let {data,isError,error,isLoading} = useQuery('dynamic-menu',fetchingSupercars);
    console.log(selectedCars)

    const noMatch = async(id) => {
     if(!selectedCars.includes(id)) {
        let arr =  [...selectedCars,id];
         setSelectedCars(arr)
        }
    }

    const queryResults = useQueries(
        selectedCars.map(id => {
            return {
                queryKey:['dynamic-call',id],
                queryFn: () => dynamicFetch(id)
            }
        })
    );
    console.log(queryResults)
    console.log(selectedCars.length > 1 ? queryResults[0].data.data.name : null)
    console.log(queryResults.map(item => item.data?.data.name))
  return (
    <div>
        <h2 style={{textAlign:'center'}}>DynamicParallelQueries</h2>
        {data?.data.map(item => {
            return <div onClick={() => noMatch(item.id)} key={item.id} style={{cursor:"pointer"}}>{item.name}</div>
        })}
        <h2>Here is down here selected items detail</h2>
        hello
       <div>{queryResults.map(obj => {return <div key={obj?.data?.data.id}>
            <div style={{display:'flex',width:'100%',alignItems:'center',margin:'0 auto'}}><h2>Name</h2> : {obj?.data?.data.name}</div>
            <div></div>
            </div>
        })}</div> 


       
    </div>
  )
}

export default DynamicParallelQueries