import React, { useEffect, useState } from "react";
import '../styles/navbar.css'
import { BsCart2 } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAmazonPay } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false); // toggle search bar icon
  const smallWidth = window.innerWidth > 700 ? `2%` : `5%`;
  const dynamicWidth = isActive ? `93%` : smallWidth; // dynamically changing the width of the search bar

  // create nav with logo search bar and cart
  // cart is displayed dynamically based on length on items if >0 then display else : null
  // search bar should slide from the right side on mobile view
  // search bar should look for a specific item and display them underneeth the search bar
  // search bar should have close icon that slides it back to a regular icon
  // selecting an object should send to the product page
  return (
    <header>
      <nav>
        <div className="user">
          <HiUserCircle />
        </div>
        <div className="cart">
          <BsCart2 />
        </div>
        <div className="search-bar">
          <input style={{ width: dynamicWidth }} type="text" />{" "}
          <div onClick={() => setIsActive(!isActive)}>
            <div className="search-container">
              {isActive ? (
                <AiFillCloseCircle className="search" />
              ) : (
                <AiOutlineSearch className="search" />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
