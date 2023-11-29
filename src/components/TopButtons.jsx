
function TopButtons({setQuery}) {
  const cities = [{
    id:1,
    title:"London"
  },
  {
    id:2,
    title:"Sydney"
  },
  {
    id:3,
    title:"Tokyo"
  },
  {
    id:4,
    title:"Toronto"
  },
  {
    id:5,
    title:"Paris"
  }];

  return (
    <div className='flex items-center justify-around sm:my-6 xxsm:m-3 m-1'>
        {cities.map((city) => (
          <div 
          key={`${city}`} 
          className="relative flex flex-col items-center justify-center sm:p-4 xxsm:p-2 p-1 rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
          onMouseEnter={(e) => e.currentTarget.firstChild.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.firstChild.style.opacity = '0.0'}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-500 to-white rounded-lg transition-opacity duration-300 ease-in-out" style={{ opacity: '0.2' }}></div>
            <div className="relative z-10">
              <button key={city.id} onClick={() => setQuery({ q: city.title})} className='text-white  md:text-xl xxsm:text-small text-xs font-bold '>
                {city.title}
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default TopButtons