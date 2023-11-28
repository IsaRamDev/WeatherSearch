// import UilReact from '@iconscout/react-unicons/icons/uil-react';
import { useEffect, useState } from 'react';
import Forcast from './components/Forcast';
import Inputs from './components/Inputs';
import TemperatureAndDetail from './components/TemperatureAndDetail';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import './index.css'
import getFormattedWeatherData from './services/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState({q: 'berlin'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
  const fetchWeather = async() => {
    const message = query.q ? query.q : 'current location.'
    toast.info("Fetching weather for " + message);

    await getFormattedWeatherData({...query, ...units})
    .then((data) => {
      toast.success(`Successfully fetched weather for ${data.name}, ${data.country}.`)
      setWeather(data);
    });
  }
  fetchWeather();
}, [query, units]);

const formatBackground = () => {
  if (!weather) return 'from-cyan-700'
  const threshold = units === 'metric' ? 20:60
  if(weather.temp <= threshold) return 'from-cyam-700 to-blue-700'

  return 'from-yellow-700 to-orange-700'
}

if (!weather || weather===null) {
  return <div>Loading...</div>;
}

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 shadow-xl shadow-gray-400 ${formatBackground}`}>
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
  );
}

export default App
