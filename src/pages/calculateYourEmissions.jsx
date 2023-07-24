import Offset from "../components/offset";
import Calculate from "../components/calculate";
import { Link } from "react-router-dom";
import { ChevronRigth } from "../assets/image";

const CalculateYourEmissions = () => {
  return (
    <Offset>
      <div className="flex flex-col h-[867px] md:h-[760px] 2xl:h-[867px] text-black w-full p-20">
        <div className="flex h-14 w-[55vw] w-full justify-center items-center">
          <div className="text-[40px] font-bold">Carbon Calculator</div>
        </div>
        <div className="flex items-center flex-col justify-evenly h-[867px] md:h-[760px] 2xl:h-[867px] text-black w-full mb-[100px]">
          <Calculate />
        </div>
      </div>
    </Offset>
  );
};

export default CalculateYourEmissions;
