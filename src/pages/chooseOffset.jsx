import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Frame16, Frame17 } from "../assets/image";
import Offset from "../components/offset";
import { changeMenu } from "../store/features/menu-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChooseOffset = ({ setOffsetState }) => {
  const { chooseMenu } = useSelector((state) => state.menu);
  const { isAuth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkChooseMenu = () => {
    if (chooseMenu || chooseMenu !== "Offset") {
      dispatch(changeMenu("Offset"));
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  });

  useEffect(() => {
    checkChooseMenu();
  });

  return (
    <Offset>
      <div className="flex items-center justify-evenly h-[95vh] text-black">
        <div className="w-[30vw] h-[60vh] bg-white rounded-3xl flex items-center flex-col">
          <div className="w-[15vw] h-[28vh] mt-[25px]">
            <div className="flex items-center h-full justify-center">
              <img className="w-[300px]" src={Frame16} alt="picture" />
            </div>
          </div>
          <div className=" w-full h-[13vh] flex items-center justify-center flex-col">
            <div className="text-[20px] font-bold">Carbon calculator</div>
            <div className="w-[25vw] mt-2 flex justify-center">
              <p className="mx-[25px] text-center">
                Use our online carbon calculator to calculate and offset
                emissions from flights and foods.
              </p>
            </div>
          </div>
          <div className="h-[10vh] w-full flex items-center justify-center">
            <Link to="/calculateOffset">
              <button className="w-[15vw] h-[6vh] rounded-3xl text-white bg-[#068758] hover:bg-[#057049] transition flex items-center justify-center">
                Calculate Footprint
                <img className="ml-2" src={ArrowRight} alt="arrow" />
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[30vw] h-[60vh] bg-white rounded-3xl flex items-center flex-col">
          <div className="w-[15vw] h-[28vh] mt-[25px]">
            <div className="flex items-center h-full justify-center">
              <img className="w-[300px]" src={Frame17} alt="picture" />
            </div>
          </div>
          <div className=" w-full h-[13vh] flex items-center justify-center flex-col">
            <div className="text-[20px] font-bold">Offset by Retail CC</div>
            <div className="w-[25vw] mt-1 flex justify-center">
              <p className="mx-[25px] text-center">
                Already know how much carbon you want to offset? Purchase carbon
                offsets by Retail CC
              </p>
            </div>
          </div>
          <div className="h-[10vh] w-full flex items-center justify-center">
            <Link to="/offsetByRetailCC">
              <button className="w-[15vw] h-[6vh] rounded-3xl text-white bg-[#068758] hover:bg-[#057049] transition flex items-center justify-center">
                Offset Now
                <img className="ml-2" src={ArrowRight} alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Offset>
  );
};
export default ChooseOffset;
