import { useEffect } from "react";
import Navbar from "../components/navbar"
import { changeMenu } from "../store/features/menu-slice";
import { useDispatch, useSelector } from "react-redux";
import { Image28Filp, Image24 } from "../assets/image";
import ChooseOffset from "../components/chooseOffset";


const Offset = () => {
  const {chooseMenu} = useSelector((state) => state.menu)

  const dispatch = useDispatch()

  const checkChooseMenu = () => {
    if (chooseMenu || chooseMenu !== "Offset") {
      dispatch(changeMenu("Offset"));
    }
  };

  useEffect(() => {
    checkChooseMenu();
  });
  return (
    <div className="relative">
      <Navbar />
	<div>
		tst
	</div>
      <div className="flex h-[20vh] w-full justify-between absolute top-[80vh]">
        <img className="w-[10vw]" src={Image28Filp} alt="image28" />
        <img src={Image24} alt="image28" />
      </div>
    </div>
  );
};

export default Offset
