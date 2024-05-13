import { Avatar } from "@mui/material";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      className="dev z-10 sticky left-0 right-0 top-0 py-3 px-5 
    lg:px-10 flex justify-between items-center w-[100vw]"
    >
      <p className="font-bold text-1g">DEV PRO MANAGER</p>

      <div className="flex items-center gap-5">
        <p>DEV PRO MG</p>
        <Avatar src="https://media.istockphoto.com/id/1470505351/photo/portrait-of-a-smiling-doctor-holding-glasses-and-a-mobile-phone-at-the-office.jpg?s=1024x1024&w=is&k=20&c=7qEjVevQHDkL8dPHuwJ3uRVGH4uOOljLhCtSq4vsA-Q=">
          C
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
