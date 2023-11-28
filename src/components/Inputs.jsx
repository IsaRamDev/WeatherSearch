import {UilSearch, UilLocationPoint} from '@iconscout/react-unicons'
import { useState } from 'react'
import { toast } from 'react-toastify';

function Inputs({units, setUnits, setQuery}) {
  const [city, setCity] = useState('');

  const hadleSearchClick = () =>{
  if (city !== '') setQuery({q: city})
  };

  const hadleUnitsChange = (e) =>{
    const selecedUnit = e.currentTarget.name
    if (units !== selecedUnit) setUnits(selecedUnit);
    };

  const hadleLocationClick = () =>{
    if (navigator.geolocation){
      toast.info('Fetching users location.')
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Location fetched.')
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({lat, lon})
      })
    }
    };

  return (
    <div className="flex flex-row justify-centermy-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          placeholder="Search for city..."
        />
        <UilSearch size={25} onClick={hadleSearchClick} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        <UilLocationPoint size={25} onClick={hadleLocationClick} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' onClick={hadleUnitsChange} className='text-xl text-white font-light transition ease-out hover:scale-125'>
          °C
        </button>
        <p className='text-xl text-white mx-1'>
          |
        </p>
        <button name='imperial' onClick={hadleUnitsChange} className='text-xl text-white font-light transition ease-out hover:scale-125'>
          °F
        </button>
      </div>
    </div>
  )
}

export default Inputs