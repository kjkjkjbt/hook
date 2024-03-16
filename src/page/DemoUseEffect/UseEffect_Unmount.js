import React, { useEffect } from 'react'

const UseEffect_Unmount = () => {
    useEffect (()=> {
        const timeOut = setInterval(()=>{
            console.log('call api')
        },1000)
        // return sẽ chạy khi comp biến mất khỏi giao diện
        return ()=>{
            console.log('khi mất khỏi giao diện')
            clearInterval (timeOut);
        }
    },[])
  return (
    <div>UseEffect_Unmount</div>
  )
}

export default UseEffect_Unmount