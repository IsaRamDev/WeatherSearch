// import UilReact from '@iconscout/react-unicons/icons/uil-react';
import { useEffect, useState } from 'react';
import Forcast from './components/Forcast';
import Inputs from './components/Inputs';
import TemperatureAndDetail from './components/TemperatureAndDetail';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import './index.css'
import getFormattedWeatherData from './services/weatherService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clouds from './assets/clouds.jpg';
import rain from './assets/rain.jpg';
import clear from './assets/clear.jpg';
import truenos from './assets/truenos.jpg';
import frio from './assets/frio.jpg';
import caliente from './assets/caliente.jpg';
import drizzle from './assets/drizzle.jpg';
import smoke from './assets/smoke.jpg';

function App() {
  const [query, setQuery] = useState({q: 'berlin'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
  const fetchWeather = async() => {
    await getFormattedWeatherData({...query, units: units})
    .then((data) => {
      setWeather(data);
    });
  }
  fetchWeather();
}, [query, units]);

  if (!weather || weather===null) { 
  return 
}

const details= weather.details
const backgroundStyle = (details === "Clouds" | "Squall" | "Tornado")
? { backgroundImage: `url(${clouds})` } 
: (details === "Rain")
? { backgroundImage: `url(${rain})` } 
: (details === "Snow")
? { backgroundImage: `url(${frio})` } 
: (details === "Drizzle" | "Mist" | "Fog")
? { backgroundImage: `url(${drizzle})` } 
: (details === "Clear")
? { backgroundImage: `url(${clear})` } 
: (details === "Dust" | "Sand" | "Ash")
? { backgroundImage: `url(${caliente})` } 
: (details === "Thunderstorm")
? { backgroundImage: `url(${truenos})` } 
: {backgroundImage: `url(${smoke})`}

  return (
    <div className={`mx-auto max-w-screen mt-4 md:py-5 py-0 md:px-32 xsm:px-20 px-5 rounded shadow-md bg-cover bg-center bg-no-repeat`} style={backgroundStyle}>
      <div className={`mx-auto max-w-screen-md mt-4 py-5 lg:px-32 md:px-20 px-3 xxsm:px-10 rounded shadow-md bg-cover bg-center bg-no-repeat`} style={{ backgroundColor: 'rgba(0, 123, 255, 0.3)' }}> {/* Cambios aquí */}
        <TopButtons setQuery={setQuery}/>
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && 
          <>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetail weather={weather} />

            <Forcast title={'hourly forcast'} items={weather.hourly}/>
            <Forcast title={'daily forcast'} items={weather.daily}/>
          </>
        }
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      </div>
    </div>
  );
}

export default App
