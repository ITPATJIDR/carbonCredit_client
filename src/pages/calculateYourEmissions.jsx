import Offset from "../components/offset";
import Calculate from "../components/calculate";
import { Link } from "react-router-dom";
import { ChevronRigth } from "../assets/image";

const CalculateYourEmissions = () => {
  return (
    <Offset>
      <div className="flex flex-col h-[95vh] text-black w-full">
        <div className="flex h-14 w-[55vw] w-full justify-center items-center mt-[50px]">
          <div className="text-[40px] font-bold">Carbon Calculator</div>
        </div>
        <div className="flex items-center mb-[50px] flex-col justify-evenly h-[867px] md:h-[760px] 2xl:h-[867px] text-black w-full">
          <Calculate />
        </div>
      </div>
    </Offset>
  );
};

export default CalculateYourEmissions;
