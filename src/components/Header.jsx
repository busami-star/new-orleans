import React from "react";

const Header = () => {
  return (
    <header className=" ">
      <nav className=" h-[50px] w-[100%] flex justify-between  ">
        <div className="min-h-[48px] text-[14px] space-x-3 mt-2 ml-2 ">
          <button>Home</button>
          <button>About us</button>
          <button>Contact us</button>
          <button>Services</button>
        </div>
        <div className="space-x-3 mt-2 mr-2  ">
          <button className=" hover:scale-110 transition-all duration-300 transform ">
            Sign in
          </button>
          <button className="hover:scale-110 transition-all duration-300 transform ">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
