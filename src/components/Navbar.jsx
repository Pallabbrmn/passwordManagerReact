import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[80px] flex justify-between items-center px-10  bg-[#0B6DFF]">
      <div>
        <p className="text-white text-xl font-bold">
          pass
          <span className="border py-[2px] px-2 rounded-full bg-white text-[#0B6DFF]">
            Guard
          </span>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="border rounded-full px-4 py-1 bg-white">
          <input
            className="border-none outline-none "
            type="text"
            placeholder="serach..."
          />
        </div>
        <div className="size-[35px] border rounded-full flex justify-center items-center">
          <p className="text-white">P</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
