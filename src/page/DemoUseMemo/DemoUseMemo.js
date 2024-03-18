import React, { useMemo, useState } from 'react';
import CartChild from './CartChild';

const DemoUseMemo = () => {
  const [like, setLike] = useState(0);
  const arrCart = [
    { id: 1, name: 'iphone', price: 300 },
    { id: 1, name: 'samsung', price: 400 },
    { id: 1, name: 'blackbery', price: 500 },
  ];
//   sd catch lại array, obj. Còn usecallback thi catch lại function 
  const cartUseMemo = useMemo (()=> {
    return arrCart;
  },[like])
  return (
    <div className="container mx-auto">
      <p className="text-2xl">Like :{like}</p>
      <button
        className="bg-red-500 text-white rounded-md p-2"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Tăng Like
      </button>
      {/* <CartChild arrCart ={arrCart} /> */}
      <CartChild arrCart ={cartUseMemo} />

    </div>
  );
};

export default DemoUseMemo;
