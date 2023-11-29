import React from "react";
import "../index.css";
import "../navbar.css";

const Logo = () => {
  return (
    <div className="flex justify-between items-center ">
      <img
        src="https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700508270/logo_mnofpi.png"
        alt="Logo"
        className="h-12 w-12 rotate-image "
      />
      {/*    <h2 className="mx-2 font-secondary font-semibold">RODAR Y RODAR S.L</h2> */}
    </div>
  );
};

export default Logo;
