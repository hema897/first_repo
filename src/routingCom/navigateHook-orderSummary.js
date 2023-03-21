import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NavigateHookOrder = () => {
  const navigate = useNavigate();
  return (
    <div>order-Summary
      <button onClick={()=>navigate(-1)}>order</button>
    </div>
  )
}
