import { cloud } from "../assets/image";

const StatCarbon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img src={cloud} alt="cloud" className="w-[180px] h-[180px]" />
      </div>
      <div>
        <p className="text-1lg sm:text-1xl text-black font-bold">
          Amount of carbon offset
        </p>
      </div>
      <div>
        <p className="text-1lg sm:text-2xl text-[#E1A303] font-bold">
          2,435,321 tonCO2eq
        </p>
      </div>
    </div>
  );
};
export default StatCarbon;