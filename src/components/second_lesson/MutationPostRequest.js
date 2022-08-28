import React, { useState } from 'react'
import axios from 'axios';
import {useQuery} from 'react-query'
import { Link } from 'react-router-dom';
import { usePost,useDelete } from '../../hooks/useMutation';
function MutationPostRequest() {
  let [name,setName] = useState('');
  let [alterEgo,setAlterEgo] = useState('');
    let {mutate:addHero,status:statusCode,isError:iserror,error:mistake} = usePost();
    let {mutate:deleteHero} = useDelete();
  const {data,error,isLoading,isError} = useQuery('superhero-mutation',() => {
    return axios.get('http://localhost:4000/superheroes')
  })
  function Sumbit(){
    console.log({name,alterEgo})
    addHero({name,alterEgo})
  }

  function Delete(id) {
    deleteHero(id);
  }
    return (
    <div style={{width:'100%'}}>
        <div style={{display:'flex',flexDirection:'column',maxWidth:'350px',margin:'0 auto'}}>
            <label htmlFor='name'>Name:</label>
            <input type={'text'} id='name' name='name' placeholder='name...' onChange={(e) => setName(e.target.value)}/>
       
            <label htmlFor='alterEgo'>Alter Ego:</label>
            <input type={'text'} id='alterEgo' name='alterEgo' placeholder='alterEgo...' onChange={(e) => setAlterEgo(e.target.value)}/>
            <button onClick={Sumbit}>Submit</button>
        </div>
        <div>
            {data?.data.map(item => <div key={item.id}><Link to={`/superhero_detail/${item.id}`} >{item.name}</Link>::::::<span onClick={() => Delete(item.id)}>delete</span></div>)}
        </div>
    </div>
  )
}

export default MutationPostRequest