import React, { useEffect, useState } from "react";
import "./App.css";
import chucknorris from './images/chucknorris.png';

const App=()=>{
 const [joke,setJoke]=useState("");

 const fetchJoke= async()=>{
     const res= await fetch("https://api.chucknorris.io/jokes/random");
     const data=await res.json();
     setJoke(data);
 }

 useEffect(()=>{
     fetchJoke();
 },[])

 console.log(joke)

    return(
        <>
        <div className="App">
            <img className="img" src={chucknorris} alt="Image"/>    
            <h2>Welcome to joke App 🚀</h2>
            <p> {joke.value}</p>
            <button className="btn" onClick={fetchJoke}>Get a new Joke</button>
            <hr/>
            <h5>&copy; Vikas William</h5>
        </div>
        </>
    )
}

export default App;