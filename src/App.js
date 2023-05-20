import React, {useState} from 'react';
import axios from 'axios';
import data from './weather.json';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState(' ');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0f4f8ebc9f0688ce0e0f21ee234dc374`


  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <div className='app'>
      <div className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value) }
          onKeyDown={searchLocation}
          placeholder='Enter location'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}</h1> : null}
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>65°F</p>
            <p>Feels Like</p>
          </div>
          <div className='himidity'>
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className='humidity'>
            <p className='bold'>12 MPh</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
