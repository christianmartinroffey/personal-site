import React, {useState} from 'react'


function Location() {


  const [message, setMessage] = useState();

  async function fetchData() {
    try {
      const response = await fetch('https://api.teleport.org/api/urban_areas/');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
 

  return (

    <div className="wrapper pt-5" id="dark-page"> 
    <p> this is the locatin comparison page with API</p>
    </div>

    
  )
}

export default Location

