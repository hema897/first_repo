import React, { useEffect } from 'react'
import { useLocation,useParams } from 'react-router-dom';

export const UserDetails = (props) => {
    // const location = useLocation();
    // var userId=location.pathname.split("/");
    // userId=userId[userId.length-1];
    const params = useParams();
    const userId = params.userId
   
  return (
    <div>{`userId - ${userId}`}</div>
  )
}
