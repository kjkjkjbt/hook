import React, { useCallback, useState } from "react";
import CommentChild from "./CommentChild";

const DemoUseCallBack = () => {
  const [like, setLike] = useState(0);
  const [number, setNumber] = useState(0);
  const renderLike =() => { 
    // so sánh địa chỉ ô nhớ 
    return `like ${like}`;
  }
  const callbackRenderLike =useCallback (renderLike,[like]);
  return (
    <div className="container mx-auto">
      <p className="text-2xl">Like :{like}</p>
      <p className="text-2xl"> Number : {number} </p>
      <button
        className="bg-red-300 text-white rounded-md p-2"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Tăng Like
      </button>
      <button
        className="bg-yellow-200 text-white rounded-md p-2"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Tăng number
      </button>
      {/* <CommentChild like={like} /> */}
      {/* <CommentChild renderLike = {renderLike} /> */}
      <CommentChild  renderLike = {callbackRenderLike} />
    </div>
  );
};

export default DemoUseCallBack;
