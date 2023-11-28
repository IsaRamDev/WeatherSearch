import { iconUrlFromCode } from "../services/weatherService";

// eslint-disable-next-line react/prop-types
function Forcast({title, items}) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className=" text-white font-medium uppercase">
          {title}
        </p>
      </div>
      <hr className="my-2"/>
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div key="" className="flex flex-col items-center justify-center">
          <p className=" font-light text-sm">
            {item.title}
          </p>
          <img className='w-12 my1' src={iconUrlFromCode(item.icon)} alt="" />
          <p className=" font-medium">`${item.temp}°`</p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Forcast