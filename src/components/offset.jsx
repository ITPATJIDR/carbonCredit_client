import Navbar from "./navbar";
import { Image28Filp, Image24 } from "../assets/image";

const Offset = ({ children }) => {
  return (
    <div className="relative bg-[#F2F4F8]">
      <Navbar />
      {children}
      <img
        className="absolute bottom-0 w-[240px] "
        src={Image28Filp}
        alt="image28"
      />
      <img
        className="absolute bottom-0 right-7 w-[235px] "
        src={Image24}
        alt="image24"
      />
    </div>
  );
};

export default Offset;
