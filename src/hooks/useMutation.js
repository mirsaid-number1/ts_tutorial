import React from 'react'
import axios from 'axios'
import {useMutation,useQueryClient} from 'react-query'

const applyData = (hero) => {
    return axios.post('http://localhost:4000/superheroes',hero)
  }
const deleteData = (id) => {
    return axios.delete(`http://localhost:4000/superheroes/${id}`)
}
export const usePost = () => {
    const queryClient = useQueryClient();
    
  return useMutation(applyData,{
    onSuccess: (data) => {
          // Just invalidation query is not good way, which it means it is refetching query once again in 
          // order to get new data 👇👇👇👇👇👇👇👇👇👇👇👇👇👇
       // queryClient.invalidateQueries('superhero-mutation');
       queryClient.setQueryData('superhero-mutation',(oldData) => {
          return {
            ...oldData,
            data:[...oldData.data, data.data]
          }
       })
    }
  });
}

export const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteData,{
    onSuccess: (deleted) => {
      console.log(deleted)
      queryClient.invalidateQueries('superhero-mutation');
    }
  })
}

