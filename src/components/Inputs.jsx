import {UilSearch, UilLocationPoint} from '@iconscout/react-unicons'
import { useState } from 'react'

function Inputs({units, setUnits, setQuery}) {
  const [city, setCity] = useState('');

  const hadleSearchClick = () =>{
  if (city !== '') setQuery({q: city})
  setCity('')
  };

  const hadleUnitsChange = (e) =>{
    const selecedUnit = e.currentTarget.name
    if (units !== selecedUnit) setUnits(selecedUnit);
    };

  const hadleLocationClick = () =>{
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({lat, lon})
      })
    }
    };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="sm:text-xl xxsm:text-small text-xs font-bold w-full shadow-xl focus:outline-none capitalize rounded focus:border-2 focus:border-white"
          placeholder="Search for city..."
        />
        <UilSearch size={35} onClick={hadleSearchClick} className="relative text-white cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-125 hover:m-1 hover:p-1  font-semibold rounded-lg"/> 
        <UilLocationPoint size={35} onClick={hadleLocationClick} className="relative text-white cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-125 hover:m-1 hover:p-1 font-semibold rounded-lg"/>
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center relative text-white cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:m-1 hover:p-1 font-semibold rounded-lg'>
        <button name='metric' onClick={hadleUnitsChange} className='text-small sm:text-xl text-white font-bold transition ease-out hover:scale-125'>
          °C
        </button>
        <p className='text-small sm:text-xl text-white mx-1'>
          |
        </p>
        <button name='imperial' onClick={hadleUnitsChange} className='text-small sm:text-xl text-white font-bold transition ease-out hover:scale-125'>
          °F
        </button>
      </div>
    </div>
  )
}

export default Inputs