import React from "react";

function Stripe({data, index}) {
  return (
    <div className={`w-[16.66%] ${index === 0 ? "" : "border-l-[1px]"} p-6 justify-between flex border-t-[1px] border-b-[1px] border-zinc-700 items-center`}>
    <img className="hidden lg:flex"
      src={data.url} alt=""
    />
    <h3 className="font-bold text-lg">{data.Num}</h3>
  </div>
  );

}

export default Stripe;