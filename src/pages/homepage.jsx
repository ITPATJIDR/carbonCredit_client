import Navbar from "../components/navbar";
import "../css/main.css";
import homebg from "../assets/image/homebg.png";

const Homepage = () => {
  return (
    <div className="bg-container">
      <Navbar />
      <div className="flex w-[99vw] h-screen">
        <div className="bg-img">
          <img src={homebg} alt="Home Page" />
        </div>
        <div className="greenie mx-auto items-center flex flex-wrap">
          <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div class="pt-32 sm:pt-0">
              <p className="text-1lg sm:text-3xl py-3 text-black font-bold">
                Welcome to
              </p>
              <h1 className="text-3xl sm:text-8xl font-bold leading-normal text-black">
                Greenie
              </h1>
              <p className="text-black py-4">Your Carbon Offset Solution!</p>
              <p className="py-1 text-black">
                Take a step towards a greener future with Greenie, your trusted
                partner in carbon offsetting. We believe that every individual
                and organization has the power to make a positive impact on the
                planet, and we're here to make it easy for you to do so.
              </p>
            </div>
            <div className="homebtn">
              <button className="btn btn-g">Start now</button>
              <button className="btn btn-w">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;