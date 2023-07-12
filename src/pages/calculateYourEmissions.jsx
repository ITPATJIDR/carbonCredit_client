import Offset from "../components/offset";
import Calculate from "../components/calculate";
import { Link } from "react-router-dom";
import { ChevronRigth } from "../assets/image";

const CalculateYourEmissions = () => {
  return (
    <Offset>
      <div className="flex items-center flex-col justify-evenly h-[867px] md:h-[760px] 2xl:h-[867px] text-black w-full">
        <Calculate/>
      </div>
    </Offset>
  );
};

export default CalculateYourEmissions;
