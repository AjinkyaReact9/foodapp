import React from 'react'
import { useRouteError } from 'react-router-dom';


const CustomError = () => {
    const errorDetails = useRouteError();
    console.log("errordetails", errorDetails);
  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{height : "100vh"}}>
      <h1>Page Not Found </h1>
      <h6>We can't seem to find the page you're looking for. </h6>
      <div>{errorDetails?.data}</div>
      <div>Status : {errorDetails?.status}</div>
      <div>Description : {errorDetails?.statusText}</div>
    </div>
  )
}

export default CustomError;
