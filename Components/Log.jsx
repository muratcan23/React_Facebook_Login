import React from "react";

const Log = () => {
  return (
    <div className="flex justify-center bg-white h-80 shadow-lg shadow-black/20 rounded-lg space-y-5 items-center ">
      <form className="flex flex-col space-y-4 justify-center">
        <input
          className="w-80 h-10 rounded-lg px-5 outline-none border border-slate-400 focus:border-lg focus:border-blue-500"
          type="text"
          placeholder="Email or Phone"
        />
        <input
          className="w-80 h-10 rounded-lg px-5 outline-none border border-slate-400 focus:border focus:border-blue-500"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-600 hover:bg-blue-500 text-white h-10 rounded-lg font-semibold text-md">
          Log in
        </button>
        <button className="text-blue-700 font-semibold border-b border-slate-200">
          Forgot Password
        </button>
        <button className="bg-green-600 hover:bg-green-500 text-white font-semibold h-10 rounded-lg">
          Create a New Account
        </button>
      </form>
    </div>
  );
};

export default Log;
