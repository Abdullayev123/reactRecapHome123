import { useState } from "react";

function Collapsed() {
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <div
        className={`max-w-lg mx-auto bg-slate-950 h-10`}
        onClick={() => setCollapse(!collapse)}
      ></div>
      <div
        className={`max-w-lg  mx-auto bg-slate-800  transition-all overflow-hidden  ease-linear ${
          collapse ? "h-[100px] " : " h-0 "
        }`}
      >
        <p className="text-white">Hello1</p>
        <p className="text-white">Hello1</p>
        <p className="text-white">Hello1</p>
        <p className="text-white">Hello1</p>
      </div>
    </>
  );
}

export default Collapsed;
