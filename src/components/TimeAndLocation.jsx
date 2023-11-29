import { formatToLocalTime } from "../services/weatherService"
import {
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons'

// eslint-disable-next-line react/prop-types
function TimeAndLocation({weather: { temp_min, temp_max, sunset, sunrise, timezone, name, country}}) {
  return (
    <div>
      {/* <div className='flex items-center justify-center my-10'>
        <p className='text-white text-xl font-extralight'>
          {formatToLocalTime(dt, timezone)}
        </p> 
      </div> */}
      <div className='flex flex-row items-center justify-center space-x-2 text-white text-xs sm:text-sm py-3 xsm:my-10 my-0'>
        <UilSun/>
        <p className=' font-semibold'>
          Rise: <span className=' font-semibold ml-1'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className=' font-semibold'>
          |
        </p>
        <UilSunset/>
        <p className=' font-semibold'>
          Set: <span className=' font-semibold ml-1'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className=' font-semibold'>
          |
        </p>
        <UilSun/>
        <p className=' font-semibold'>
          High: <span className=' font-semibold ml-1'>{temp_max.toFixed()}°</span>
        </p>
        <p className=' font-semibold'>
          |
        </p>
        <UilSun/>
        <p className=' font-semibold'>
          Low: <span className=' font-semibold ml-1'>{temp_min.toFixed()}°</span>
        </p>
      </div>

      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-bold'>
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  )
}

export default TimeAndLocation