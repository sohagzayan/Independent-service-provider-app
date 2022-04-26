import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import { useAuthContext } from '../context/AuthContextProvider';
import useLoadData from "../hocks/useLoadData";
const ChackOut = () => {
  const [showBox, setShowBox] = useState(true);
  const {data} = useLoadData()
  const notify = () => toast("Success Fully Send Your Details! 💚");
  const [datas , setDatas] = useState([])
  const {loading} = useAuthContext()


  if(loading){
    return <Loading />
  }
  


  const handleDetails = (e) => {
    e.preventDefault();
    console.log("succesFully Submites");
    setShowBox(false);
    notify();
  };
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Header />
      <h2 className=" text-center text-3xl uppercase text-tomato_light">
        Booking Now
      </h2>
      {showBox ? (
        <div
          className="mx-auto text-center my-10 px-10"
          style={{ width: "100%" }}
        >
          <form onSubmit={handleDetails} className="w-full mx-auto max-w-lg">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white_light text-xs font-bold mb-2">
                  First Name
                </label>
                <input
                  className="appearance-none  w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Jane"
                  required
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white_light text-xs font-bold mb-2">
                  Address
                </label>
                <input
                  className="appearance-none  w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="address"
                  required
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white_light text-xs font-bold mb-2">
                 Number
                </label>
                <input
                  className="appearance-none  w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Number"
                  required
                />
              </div>
         
           
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-white_light text-xs font-bold mb-2">
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                  required
                  
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white_light text-xs font-bold mb-2">
                  City
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                  required
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  State
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>New User</option>
                    <option>Free User</option>
                    <option>Paid User</option>
                    <option>hacker</option>
                    <option>Others</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white_light text-xs font-bold mb-2">
                  Zip
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="90210"
                  required
                />
              </div>
            </div>
            <button className="bg-tomato_light px-6 py-1 rounded-sm text-center">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <h2 className="text-6xl text-center my-40">Thank You Dear</h2>
      )}
    </>
  );
};

export default ChackOut;
