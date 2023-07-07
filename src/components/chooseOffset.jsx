import { ArrowRight, Frame16 ,Frame17} from "../assets/image";


const ChooseOffset = () => {
  return (
    <div className="flex items-center justify-around h-[60vh] text-black">
      <div className="w-[35vw] h-[50vh] bg-white rounded-3xl flex items-center flex-col">
        <div className=" w-full h-[28vh]">
          <div className="flex items-center h-full justify-center">
            <img className="w-[300px]" src={Frame16} alt="picture" />
          </div>
        </div>
        <div className=" w-full h-[13vh] flex items-center justify-center flex-col">
          <div className="text-[20px] font-bold">Carbon calculator</div>
          <div className="w-[25vw] mt-1 flex justify-center">
            <p>
              Use our online carbon calculator to calculate and offset emissions
              from flights and foods.
            </p>
          </div>
        </div>
        <div className="h-[10vh] w-full flex items-center justify-center">
          <button className="w-[15vw] h-[5vh] rounded-3xl text-white bg-[#068758] hover:bg-[#057049] transition flex items-center justify-center">
            Calculate Footprint
            <img className="ml-2" src={ArrowRight} alt="arrow" />
          </button>
        </div>
      </div>
      <div className="w-[35vw] h-[50vh] bg-white rounded-3xl flex items-center flex-col">
        <div className=" w-full h-[28vh]">
          <div className="flex items-center h-full justify-center">
            <img className="w-[300px]" src={Frame17} alt="picture" />
          </div>
        </div>
        <div className=" w-full h-[13vh] flex items-center justify-center flex-col">
          <div className="text-[20px] font-bold">Offset by Retail CC</div>
          <div className="w-[25vw] mt-1 flex justify-center">
            Already know how much carbon you want to offset? Purchase carbon
            offsets by Retail CC
          </div>
        </div>
        <div className="h-[10vh] w-full flex items-center justify-center">
          <button className="w-[15vw] h-[5vh] rounded-3xl text-white bg-[#068758] hover:bg-[#057049] transition flex items-center justify-center">
            Offset Now
            <img className="ml-2" src={ArrowRight} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChooseOffset;
