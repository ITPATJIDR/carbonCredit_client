import { pineTree } from "../assets/image";

const StatTree = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img src={pineTree} alt="pine tree" className="w-[180px] h-[180px]" />
      </div>
      <div>
        <p className="text-1lg sm:text-1xl text-black font-bold">
          Equivalent to planting
        </p>
      </div>
      <div>
        <p className="text-1lg sm:text-2xl text-[#E1A303] font-bold">
          1,000,143 Big trees
        </p>
      </div>
    </div>
  );
};

export default StatTree;
