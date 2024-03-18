// rafce
import { useFormik } from "formik";
import React from "react";
import * as yup from  "yup";

const DemoHookFormik = () => {
    const formRegister = useFormik ({
        initialValues :{ fullName: "", phone :"" , pass : "" , email:"" },
        onSubmit:(values) => {
            console.log(values);
        },
        validationSchema:yup.object( ).shape({
            fullName:yup
            .string()
            .required ("can't be blank")
            .min (2, "too short")
            .max (10, "more than 6 letters and less than 10 letters"),
            email :yup 
            .string ()
            // .email("invalid Email")
            .required ("Email can not be empty")
            .matches (/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Invalid Email'),
            phone: yup
            .number ()
            .typeError("number", "Must be numbers")
            
        })
    })
  return (
    <div className="container mx-auto">
        <form
        onSubmit={formRegister.handleSubmit}
        action=""
        className="border rounded p-3 space-y-4"
      ></form>
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
            onChange={formRegister.handleChange}
          />
          <p className="text-red-200" > {formRegister.errors.fullName} </p>
        </div>
        {/* phone */}
        <div>
          <label className="w-full text-xl block">Nhập số điện thoại</label>
          <input
            className="w-1/2 border rounded-lg p-2"
            type="text"
            name="phone"
            id="phone"
            onChange={formRegister.handleChange}
          />
        <p className="text-red-200" > {formRegister.errors.phone} </p>

        </div>

        {/* password */}
        <div>
          <label className="w-full text-xl block">insert pw </label>
          <input
            className="w-1/2 border rounded-lg p-2"
            type="text"
            name="pass"
            id="pass"
            onChange={formRegister.handleChange}
          />       
           <p className="text-red-200" > {formRegister.errors.pass} </p>

        </div>

        {/* email */}
        <div>
          <label className="w-full text-xl block">Nhập email </label>
          <input
            className="w-1/2 border rounded-lg p-2"
            type="text"
            name="email"
            id="email"
            onChange={formRegister.handleChange}
          />
            <p className="text-red-200" > {formRegister.errors.email} </p>

        </div>
        {/* Button */}
        <div>
          <button
            type="submit"
            className="bg-green-600 text-white rounded-lg p-2"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemoHookFormik;
