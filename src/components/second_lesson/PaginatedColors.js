import axios from 'axios'
import React,{useState} from 'react'
import {useQuery} from 'react-query'
function PaginatedColors() {
    let [pageNumber,setPageNumber] = useState(1);
    let {data,isError,error,isLoading} = useQuery(['colors',pageNumber],() => {
        return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
    },{keepPreviousData:true})
    console.log(pageNumber)
    console.log(data)
  return (
    <div style={{width:'100%'}}>
        <h2>PaginatedColors</h2>
        <div style={{display:'flex',width:'60%',justifyContent:'space-around',margin:'0 auto',height:'100px',color:'white',fontSize:'25px',fontWeight:'bold',textAlign:'center'}}>
            {data?.data.map(item => <div key={item.id} style={{width:'49%',height:'100%',backgroundColor:item.label}}>{item.id}.{item.label}</div>)}
        </div>
        <div>
        <button onClick={() => setPageNumber((prev) => prev - 1)} disabled={pageNumber === 1}>Previous</button>
        <button onClick={() => setPageNumber((prev) => prev + 1)} disabled={pageNumber === 4}>Next</button>
        </div>
    </div>
  )
}

export default PaginatedColors