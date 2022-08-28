import React from 'react';
import axios from "axios";
import {useQuery,useQueryClient} from 'react-query'

export const useGetHeroDetail = (heroId) => {
    const queryClient = useQueryClient();
        return useQuery('super-hero'+ heroId, () => {
            return axios.get('http://localhost:4000/supercars/' + heroId) 
        },{
            initialData:() => {
                const car = queryClient.getQueryData('super-cars')?.data?.find((car) => car.id === parseInt(heroId))

                if(car) {
                    return {
                        data:car
                    }
                }
                return undefined
            }
        })
    }
