import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
function ParallelQueries() {
    const fetchingSupercars = () => {
        return axios.get('http://localhost:4000/supercars')
    }
    const fetchingSuperheroes = () => {
        return axios.get('http://localhost:4000/superheroes')
    }
    let {data:superHeroesData,
        isLoading:superHeroesIsLoading,
        isError:superHeroesIsError,
        error:superHeroesError
    } = useQuery('fetching-super-heroes',fetchingSuperheroes);
    let {data:superCarsData,
        isLoading:superCarsIsLoading,
        isError:superCarsIsError,
        error:superCarsError
    } = useQuery('fetching-super-cars',fetchingSupercars);
    let style_parent = {
        width:'80%',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        fontSize:'25px'
    }
    let style_child = {
        display:'flex',
        flexDirection:'column'
    }
  return (
    <div style={style_parent}>
        <div style={style_child}>{superHeroesIsError ? superHeroesError.message : superHeroesIsLoading ? <h2>Loading...</h2> :  superHeroesData?.data.map(item => <div key={item.id}>{item.name}</div>)}</div>
        <div style={style_child}>{superCarsIsError ? superCarsError.message : superCarsIsLoading ? <h2>Loading...</h2> : superCarsData?.data.map(item => <div key={item.id}>{item.name}</div>)}</div>
    </div>
  )
}

export default ParallelQueries