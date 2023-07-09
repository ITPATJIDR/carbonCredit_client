import Offset from "../components/offset";
import Calculate from "../components/calculate";

const CalculateYourEmissions = () => {
  return (
    <Offset>
      <div className="flex items-center justify-evenly h-[867px] text-black w-full">
        <Calculate/>
      </div>
    </Offset>
  );
};

export default CalculateYourEmissions;
