import { iconUrlFromCode } from "../services/weatherService";

// eslint-disable-next-line react/prop-types
function Forcast({title, items}) {
  return (
    <div>
      <div className="flex items-center justify-center sm:my-6 xxsm:my-2 my-1">
        <p className=" text-white font-bold uppercase">
          {title}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between text-white">
      {items.map((item) => (
        <div 
          key={`${item.title}`} 
          className="relative flex flex-col items-center justify-center sm:p-4 xxsm:p-2 p-1 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
          onMouseEnter={(e) => e.currentTarget.firstChild.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.firstChild.style.opacity = '0.2'}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-500 to-white rounded-lg transition-opacity duration-300 ease-in-out" style={{ opacity: '0.2' }}></div>
          <div className="relative z-10">
            <p className="font-medium text-xs sm:text-sm">
              {item.title}
            </p>
            <img className='sm:w-12 w-10 sm:my-1 my-0' src={iconUrlFromCode(item.icon)} alt="" />
            <p className="font-medium text-sm">{item.temp}°</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Forcast