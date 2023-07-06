import { useEffect } from "react";
import Navbar from "../components/navbar"
import { changeMenu } from "../store/features/menu-slice";
import { useDispatch, useSelector } from "react-redux";

const AboutUs = () => {
  const { chooseMenu } = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  const checkChooseMenu = () => {
    if (chooseMenu || chooseMenu !== "AboutUs") {
      dispatch(changeMenu("AboutUs"));
    }
  };

  useEffect(() => {
    checkChooseMenu();
  });

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default AboutUs;