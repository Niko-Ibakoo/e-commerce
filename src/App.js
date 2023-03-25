import React from "react";
import axios from "axios";
import { useState } from "react";
import Home from "./components/Home";
function App() {

  const[name,setName] = useState('') // set this to the name ogf pokemon
  const pokemon = "mewtwo" //

  //use this to make an API callg , then whatever comes back from that call 
  // res is equal to whatever came from the API, is now temporarily stored as 'res' for us to decide what to do
  // res=> console.log(res) will console log that data so we can see what it contains and decide exactly what we want
  // setName(res) will store the data coming from the API in our own variable for us to use.
  // my commenting fucking sucks so I apoligize , I hope it makes sense.
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res=>setName(res.data.name))

  return (
    <div className="App">
    <Home/>
      <h1>hello there</h1>
      {name}
      <h2>hey there</h2>
    </div>
  );
}

export default App;
