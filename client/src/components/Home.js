import React from "react";
import axios from "axios";
import '../styles/home.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <div className="main-container">
        <div className="grid">
          {data.map((item, index) => (
            <div key={index} className="card">
              <div className="img-container">
                <Link to={'/product/'+ item.id}><img src={item.image} alt="" /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
