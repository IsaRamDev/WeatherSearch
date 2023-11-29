import {
  UilTemperature,
  UilTear,
  UilWind,
} from '@iconscout/react-unicons'
import { iconUrlFromCode } from '../services/weatherService'


function TemperatureAndDetail({
  // eslint-disable-next-line react/prop-types
  weather:{details, icon, temp,  speed, humidity, feels_like,
}}) {
  return (
    <div>
      <div className='flex items-center justify-center py-0 text-small sm:text-xl text-white font-bold'>
        <img className='w-20' src={iconUrlFromCode(icon)} alt="" />
        <p> 
          {details}
        </p>
      </div>
      <div className='flex flex-row items-center justify-center py-3 text-white font-bold'>
        <p className='text-5xl m-auto'>
          {temp.toFixed()}°
        </p>
        <div className='flex flex-col space-y-2 m-auto'>
          <div className='flex  text-xs sm:text-sm items-center justify-center'>
            <UilTemperature size={18} className="mr-1" />
            Real feel: 
            <span className=' ml-1'>
              {feels_like.toFixed()}°
            </span>
          </div>
          <div className='flex text-xs sm:text-sm items-center justify-center'>
            <UilTear size={18} className="mr-1" />
            Humidity: 
            <span className=' ml-1'>
              {humidity.toFixed()}%
            </span>
          </div>
          <div className='flex text-xs sm:text-sm items-center justify-center'>
            <UilWind size={18} className="mr-1" />
            Wind: 
            <span className=' ml-1'>
              {speed.toFixed()} km/h
            </span>
          </div>
        </div>
      </div>
      {/* <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
        <UilSun/>
        <p className=' font-light'>
          Rise: <span className=' font-medium ml-1'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className=' font-light'>
          |
        </p>
        <UilSunset/>
        <p className=' font-light'>
          Set: <span className=' font-medium ml-1'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className=' font-light'>
          |
        </p>
        <UilSun/>
        <p className=' font-light'>
          High: <span className=' font-medium ml-1'>{temp_max.toFixed()}°</span>
        </p>
        <p className=' font-light'>
          |
        </p>
        <UilSun/>
        <p className=' font-light'>
          Low: <span className=' font-medium ml-1'>{temp_min.toFixed()}°</span>
        </p>
      </div> */}
      <hr className="my-2"/>
    </div>
  )
}

export default TemperatureAndDetail