import React from "react";
import { MdCancel } from "react-icons/md";

const LoginErrorMssg = ({ message }) => {
  return (
    <div className="flex w-full bg-[#edd3c7] absolute px-2 py-[1px] space-x-2 items-center border-[#eb9d8b] border-2 ">
      <MdCancel className="text-[#ff7519]" />
      <span className="flex text-sm">{message}</span>
    </div>
  );
};

export default LoginErrorMssg;
