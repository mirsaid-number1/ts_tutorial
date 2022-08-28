import React, { Fragment } from 'react'
import axios from 'axios'
import {useInfiniteQuery} from 'react-query'
function InfiniteQuery() {
    const {data,hasNextPage,fetchNextPage} = useInfiniteQuery(['colors'],({pageParam=1}) => {
        return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
    },{
        getNextPageParam:(_lastpage,pages) => {
            if(pages.length < 4) {
              return pages.length + 1
            }
            return undefined
        }
    })
  return (
    <div>
        <h2>InfiniteQuery</h2>
        <div>{data?.pages.map((groupPages,index) => {
            return(
                <Fragment key={index}>
                    {
                        groupPages.data.map(color => <div key={color.id}>
                            <h2>{color.id}.{color.label}</h2>
                        </div>)
                    } 
                </Fragment>)
        })}</div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More...</button>
    </div>
  )
}

export default InfiniteQuery