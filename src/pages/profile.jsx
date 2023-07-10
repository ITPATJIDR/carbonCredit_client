import Navbar from "../components/navbar";

const Profile = () => {
  return (
    <div className="bg-[#F2F4F8]">
      <Navbar />
      <div className="flex flex-col w-[98vw] h-[100vh] justify-center items-center">
        <div className="bg-black w-[1200px] h-[680px]">
          <div className="flex flex-row justify-between">
            <div className="p-4 text-white bg-red-500 rounded w-[350px] h-[680px]">
              1
            </div>
            <div className="p-4 text-white bg-red-500 rounded w-[470px] h-[680px]">
              2
            </div>
            <div className="p-4 text-white bg-red-500  rounded w-[350px] h-[680px]">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
