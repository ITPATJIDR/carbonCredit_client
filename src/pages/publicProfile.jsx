import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import {
  tree1,
  tree2,
  tree3,
  tree4,
  tree5,
  tree6,
  tree7,
  tree8,
  tree9,
  tree10,
} from "../assets/tree";

const PublicProfile = () => {

  const { tree } = useParams();
  console.log(typeof tree)

  const getTree = () => {
    if (Number(tree) === 1) {
      return {
        image: tree1,
        width: "340px",
      };
    } else if (Number(tree) === 2) {
      return {
        image: tree2,
        width: "310px",
      };
    } else if (Number(tree) === 3) {
      return {
        image: tree3,
        width: "280px",
      };
    } else if (Number(tree) === 4) {
      return {
        image: tree4,
        width: "260px",
      };
    } else if (Number(tree) === 5) {
      return {
        image: tree5,
        width: "260px",
      };
    } else if (Number(tree) === 6) {
      return {
        image: tree6,
        width: "260px",
      };
    } else if (Number(tree) === 7) {
      return {
        image: tree7,
        width: "260px",
      };
    } else if (Number(tree) === 8) {
      return {
        image: tree8,
        width: "260px",
      };
    } else if (Number(tree) === 9) {
      return {
        image: tree9,
        width: "260px",
      };
    } else if (Number(tree) === 10) {
      return {
        image: tree10,
        width: "250px",
      };
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#F2F4F8] flex items-center justify-center h-[98vh]">
        <img
          src={getTree().image}
          style={{ width: getTree().width }}
          alt="Tree Image"
        />
      </div>
    </>
  );
};

export default PublicProfile;
