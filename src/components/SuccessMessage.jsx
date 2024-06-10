import React from "react";

const SuccessMessage = ({firstName}) => {

  return <div className="flex justify-center pt-10 text-green-500 text-2xl">You are successfully completed <br /> Thank you {firstName}</div>;
};

export default SuccessMessage;
