import { useState } from "react";
import "./navbar.scss";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="" className="logoItem" />
        <span>saceanu</span>
      </div>
      <div className="icons">
        <img
          className="iconSearch"
          src="/search.svg"
          alt=""
          onClick={() => setOpen(true)}
        />
        {open && <SearchBar setOpen={setOpen} />}

        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/19594009/pexels-photo-19594009/free-photo-of-portrait-of-woman-in-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="userImgItem"
          />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
