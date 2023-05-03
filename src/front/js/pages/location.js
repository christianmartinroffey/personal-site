import React, { useState, useEffect } from "react";
import axios from "axios";
import UnsplashAPIIMG from "../component/UnsplashAPIIMG";

function Location() {
  const [city, setCity] = useState();
  const [data, setData] = useState();
  {
    /*async function fetchData() {
    try {
      const response = await fetch('https://api.teleport.org/api/cities/');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
fetchData();*/
  }

  useEffect(() => {
    async function getCity() {
      try {
        const res = await fetch("https://api.teleport.org/api/cities/");
        const data = await res.json();
        setCity(res.data);
        console.log(data, "city");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getCity();
  }, []);

  const handleCity = (city) => {
    setCity(city.target.value);
  };

  const searchCity = (city) => {
    console.log(city);
  };

  return (
    <div className="wrapper pt-5" id="dark-page">
      <div className="container">
      <div className="row">
        <div className="col">
          <UnsplashAPIIMG />
        </div>
        <div className="col">
          <p> this is the locatin comparison page with API</p>
          <form onSubmit={searchCity}>
            <p> Enter your city name:</p>
            <div>
              <input type="text" value={city} onChange={handleCity} />
              <button className="btn-primary p-2">Search</button>
            </div>
          </form>
        </div>
        <div className="col">
          {city == undefined ? (
            <p>no cities</p>
          ) : (
            city.map((item) => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Location;
