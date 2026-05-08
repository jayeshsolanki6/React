import React from 'react'
import {useParams} from 'react-router-dom'
const PageNotFound = () => {
    const params = useParams()
  return (
   <div>
    {params.id ? `404 ${params.id} Page not found` : "404 Page not found"}
   </div>
  )
}

export default PageNotFound