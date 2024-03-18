// rafce
import React from "react";

const DemoHookFormik = () => {
  return (
    <div className="container mx-auto">
      <form action="" className="border rounded p-3 space-y-4 ">
        <h3 className="text-3xl font-bold ">Form Register</h3>
        {/* Tên */}
        <div>
          <label className="w-full text-xl block">Nhập tên</label>
          <input
            className="w-1/2 border rounded-lg p-2"
            type="text"
            name="fullName"
            id="fullName"
          />
        </div>
        {/* phone */}
        <div>
          <label className="w-full text-xl block">Nhập số điện thoại</label>
          <input
            className="w-1/2 border rounded-lg p-2"
            type="text"
            name="phone"
            id="phone"
          />
        </div>
        {/* password */}
        <div>
          <label className="w-full text-xl block">insert pw </label>
          <input
            className="w-1/2 border rounded-lg p-2"
            type="text"
            name="pass"
            id="pass"
          />
        </div>
        {/* email */}
        <div>
          <label className="w-full text-xl block">Nhập số pass</label>
          <input
            className="w-1/2 border rounded-lg p-2"
            type="text"
            name="email"
            id="email"
          />
        </div>
      </form>
    </div>
  );
};

export default DemoHookFormik;
