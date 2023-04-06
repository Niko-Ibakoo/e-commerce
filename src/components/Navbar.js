import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { BsCart2 } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAmazonPay } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false); // toggle search bar icon
  const smallWidth = window.innerWidth > 700 ? `2%` : `5%`;
  const dynamicWidth = isActive ? `93%` : smallWidth; // dynamically changing the width of the search bar
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState([]);
  const toggVisibility = toggle ? "visible" : "hidden";

  // create nav with logo search bar and cart DONE
  // cart is displayed dynamically based on length on items if >0 then display else : null
  // search bar should slide from the right side on mobile view DONE
  // search bar should look for a specific item and display them underneeth the search bar
  // search bar should have close icon that slides it back to a regular icon DONE
  // selecting an object should send to the product page

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data));
  }, []);
  //search data
  const onSearch = (searchedProduct) => {
    setInputValue(searchedProduct);
    setToggle(false);
  };

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
          <input
            onClick={() => setToggle(true)}
            style={{ width: dynamicWidth }}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
          />{" "}
          {inputValue && (
            <div onClick={() => setInputValue("")} className="clear">
              Clear
            </div>
          )}
          <div onClick={() => setIsActive(!isActive)}>
            <div className="search-container">
              {isActive ? (
                <AiFillCloseCircle className="search" />
              ) : (
                <AiOutlineSearch className="search" />
              )}
            </div>
          </div>
          <div style={{ visibility: toggVisibility }} className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = inputValue.toLocaleLowerCase();
                const product = item.title.toLocaleLowerCase();
                // if searchTermi exists and it includes the value return something else return nothing
                if (searchTerm && product.includes(searchTerm)) {
                  return searchTerm;
                }
                // return searchTerm && product.includes(searchTerm); shorter version
              })
              .map((item, index) => (
                <Link
                  to={"/test/" + item.id}
                  onClick={() => onSearch(item.title)}
                  key={index}
                  className="dropdown-row"
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
