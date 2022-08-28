import React,{useState,useEffect} from 'react'
import axios from 'axios';
function OWSuperHeroes() {
    let [data, setData] = useState([]);
    let [loading,setLoading] = useState(true);
    let [error, setError] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/superheroes').then(res => {
            console.log(res.data);
            setData(res.data);
            setLoading(false)
        }).catch((err) => {
            setError(err.message) 
            setLoading(false)
        })
    },[])

    if(loading) {
        return <h2>Loading...</h2>  
    }
    if(error) {
        return <h2>{error}</h2>
    }
  return (
    <>
    <div className="collection">
        <h3>OWSuperHeroes</h3>
        
        <div className='list'>{data.map(item => <div key={item.id}>{item.id}. <span>{item.name}</span> <span>{item.alterEgo}</span></div>)}</div>
        </div>
    
    </>    
  )
}

export default OWSuperHeroes