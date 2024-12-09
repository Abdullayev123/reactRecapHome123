import { useState } from "react";

function Drawer() {
  const [drawer, setDrawer] = useState(true);
  return (
    <>
      <button className="text-orange-700" onClick={() => setDrawer(!drawer)}>
        drawer
      </button>
      <div
        className={`flex flex-col h-screen w-52 bg-black transition-all fixed top-0 left-0  -z-10 ${
          drawer ? "-translate-x-full" : "translate-x-0"
        }`}
      ></div>
    </>
  );
}

export default Drawer;
