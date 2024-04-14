import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RouterAPI = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(y=>{
            setData(y.data);
        })
    }, [])
  return (
    <div>
      {
        data.map((value,index)=>{
            return(<div key={index}>Title: {value.title}<br></br>Price: ${value.price}<br></br>Category: {value.category}<br></br>Description: {value.description}<hr></hr></div>)
        })
      }
    </div>
  )
}

export default RouterAPI
