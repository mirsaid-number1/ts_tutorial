import React,{useState} from 'react'
import {useQuery} from 'react-query'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './first_style.css';
import { UseReactQuery } from '../../hooks/useQueryHook';
function RQSuperHeroes() {
    let [reUpdate,setReUpdate] = useState(3000);

    const onSuccess = (data) => {
        if(data?.data.length > 3) {
            setReUpdate(0)
        }
        console.log('Data is here bro',data)
        console.log(data?.data.length,reUpdate)
         
    };

    const onError = (error) => {
        if(error) {
            setReUpdate(0)
        }
        console.log('Data is not rendered and we hava an error',error.message);
    };

    const Right = (data) => {
        console.log('that is right bro','here is data',data[0]);
    }
    const False = (error) => {
        console.log(error.message);
    }

        // fetching data when cursor goes to window and mounts very good right ?
    const {isLoading,data,isError,error,isFetching,isStale} = useQuery('super-heroes',() => {
        return axios.get('http://localhost:4000/superheroes');
    },{cacheTime:15000,staleTime:0,refetchOnMount:true,refetchOnWindowFocus:true});  
            //7-8 lessons theme polling
    const {isLoading:loading,data:info,isError:iserror,error:mistake,isFetching:isfetching,isStale:isstale} = useQuery('hyper-heroes',() => {
        return axios.get('http://localhost:4000/superheroes')
    },{});
    const {isLoading:updating,data:base,isError:mistaken,error:disadvantage,isFetching:connecting,refetch:fetchAgain} = useQuery('marvelous-heroes',() => {
        return axios.get('http://localhost:4000/superheroes')
    },{enabled:false});
            // home task displayed success and error callbacks
    const {isLoading:isItLoading,data:real_data,isError:isItError,error:real_error,isFetching:isItFetching} = useQuery('super-cars',() => {
        return axios.get('http://localhost:4000/supercars')
    },{onSuccess,onError,refetchInterval:reUpdate})
            // selecting certain things from data 
    const {isLoading:selectLoading,data:selectData,isError:selectIsError,error:selectError,isFetching:selectIsFetching} = useQuery('super-cars',() => {
        return axios.get('http://localhost:4000/supercars')
    },{select:(data) => {
        const mapping = data.data.map((car) => car.name);
        return mapping
    }})
            // Now I would like to create my useQuery hook yo bro this is slightly different thing
    const {data:malumot} = UseReactQuery('http://localhost:4000/superheroes',Right,False)
    
    console.log('first match',{isFetching,isLoading}, 'the second one here',{isfetching,loading});
    console.log(selectData)
    if(isLoading){
        return <h2>Loading...</h2>  
    }

    if(isError){
        return <h2>{error.message}</h2>
    }
  return (<>
    
    <div className="collection">
        <div className='nested_collection'>
            <h3>RQSuperHeroes</h3>
            <div className='list'>{data?.data.map(item => <div key={item.id} className="listofitem">{item.id}. <span>{item.name}</span> <span>{item.alterEgo}</span></div>)}</div>
        </div>
        <h2>some thing loading down here every 2000 ms 👇</h2>
        <div className='nested_collection'>
            {loading ? <h2>Loading...</h2> : iserror ? <h2>{mistake.message}</h2> : isfetching ? <h2>Fetching..</h2> : <>
            <h3>RQSuperHeroes in interval 2000ms</h3>
            <div className='list'>{info?.data.map(item => <div key={item.id} className="listofitem">{item.id}. <span>{item.name}</span> <span>{item.alterEgo}</span></div>)}</div>
            </> }
        </div>
        <h2> Click button below that helps to you to see data</h2>
        <button onClick={fetchAgain}>Refetch data by clicking</button>
        <div className='nested_collection'>
            {updating ? <h2>Loading...</h2>  : mistaken ? <h2>{disadvantage.message}</h2> : <>
                <h3>RQSuperHeroes by clicking</h3>
                <div className='list'>{base?.data.map(item => <div key={item.id + 1} className="listofitem">{item.id}. <span>{item.name}</span> <span>{item.alterEgo}</span></div>)}</div>
            </>}
        </div>
        <h2>It won't stop if you don't enter over 3 items to the list</h2>
        <div className='nested_collection'>
            {isItLoading ? <h2>Loading...</h2> : isItError ? <h2>{real_error.message}</h2> : isItFetching ? <h2>Fetching..</h2> : <>
            
            <div className='list'>{real_data?.data.map(item => <div key={item.id +' '+item.name} className="listofitem">{item.id}. <span>{item.name}</span> <span>{item.alterEgo}</span></div>)}</div>
            </> }
        </div>
        <h2>Returning selected data from backend</h2>
        <div className='nested_collection'>
            {selectLoading ? <h2>Loading...</h2> : selectIsError ? <h2>{selectError.message}</h2> : selectIsFetching ? <h2>Fetching..</h2> : <>
            
            <div className='list'>{selectData.map(item => <div key={item.name} className="listofitem">{item}</div>)}</div>
            </> }
        </div>
        <h2>Creating custom hook UseReactQuery</h2>
        <div className='nested_collection'>
            {malumot}
        </div>
        <h2>Navigate to another page </h2>
        <div className='nested_collection'>
            {isItLoading ? <h2>Loading...</h2> : isItError ? <h2>{real_error.message}</h2> : isItFetching ? <h2>Fetching..</h2> : <>
            
            <div className='list'>{real_data?.data.map(item => <Link key={item.id +' '+item.name} to={`/hero_detail/${item.id}`} className="listofitem">{item.id}. <span>{item.name}</span> <span>{item.alterEgo}</span></Link>)}</div>
            </> }
        </div>
        <h2>Navigate to another hero</h2>
        <div className='nested_collection'>
            {loading ? <h2>Loading</h2> : iserror ? <h2>{mistake.message}</h2> : isfetching ? <h2>Fetching...</h2> : <>
            <div className='list'>{info?.data.map(item => <Link key={item.id} to={`/superhero_detail/${item.id}`} className='listofitem'>{item.id}. <span>{item.name}</span> <span>{item.alterEgo}</span></Link>)}</div>
            </>}
        </div>
    </div>
    </> 
  )
}

export default RQSuperHeroes




        