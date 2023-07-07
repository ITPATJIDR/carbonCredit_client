import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { changeMenu } from "../store/features/menu-slice";
import { useDispatch, useSelector } from "react-redux";
import { Image28Filp, Image24 } from "../assets/image";
import ChooseOffset from "../components/chooseOffset";

const Offset = () => {
  const { chooseMenu } = useSelector((state) => state.menu);
  const [offSetState, setOffSetState] = useState("ChooseOffset")

  const dispatch = useDispatch();

  const checkChooseMenu = () => {
    if (chooseMenu || chooseMenu !== "Offset") {
      dispatch(changeMenu("Offset"));
    }
  };

  const checkOffsetState = () => {
    if (offSetState === "ChooseOffset") {
      return <ChooseOffset />;
    }
  };

  useEffect(() => {
    checkChooseMenu();
  });
  return (
    <div className="relative bg-[#F2F4F8]">
      <Navbar />
      <div className="p-20">
        {checkOffsetState()}
      </div>
      <div className="flex h-[20vh] w-full justify-between absolute top-[80vh] bg-[#F2F4F8]">
        <img className="w-[200px]" src={Image28Filp} alt="image28" />
        <img className="w-[200px]" src={Image24} alt="image28" />
      </div>
    </div>
  );
};

export default Offset;
