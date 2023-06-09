import React from "react";
import axios from "axios";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <main>
      <div className="main-container">
        <div className="grid">
          {data.map((item, index) => (
            <div key={index} className="card">
              <div className="img-container">
                <Link to={"/product/" + item.id}>
                  <img src={item.urls.regular} alt="" loading="lazy" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
