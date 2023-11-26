import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div className="flex justify-center">
      <h1 className="text-3xl mt-28">Opps! There is an {error.status} error 😅</h1>
    </div>
  )
}

export default Error
