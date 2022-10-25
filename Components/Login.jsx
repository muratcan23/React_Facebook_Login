import React from "react";
import Log from "./Log";

function Login() {
  return (
    <div className="bg-[#ecf0f1] grid grid-cols-2 h-screen w-full max-auto">
      <div className="flex flex-col max-auto justify-center">
        <h1 className="text-blue-500 text-6xl font-bold mx-20">facebook</h1>
        <p className="text-3xl font-semibold mx-20">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="flex flex-col justify-center ">
        <Log />
      </div>
    </div>
  );
}

export default Login;
