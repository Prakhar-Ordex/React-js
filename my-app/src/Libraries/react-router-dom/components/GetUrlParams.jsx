import React from 'react'
import { useSearchParams } from 'react-router-dom'

const GetUrlParams = () => {
    const [serchParams, setSerchParams] = useSearchParams();
    console.log(serchParams)
    console.log(serchParams.get('name'))
    console.log(serchParams.get('city'))
  return (
    <div>
          <h1>GetUrlParams</h1>
          <input type="text" name="" id="" onChange={(e) => setSerchParams({job:e.target.value,name:"shlok",city:"ahmedsabad"})} />
          <button onClick={()=>setSerchParams({name:"shlok",city:"ahmedsabad"})}>Update Url Param Value</button>
    </div>
  )
}

export default GetUrlParams
