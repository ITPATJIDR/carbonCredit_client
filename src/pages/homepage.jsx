import Navbar from "../components/navbar";
import "../css/main.css";
import "../css/homepage.css";
import homebg from "../assets/image/homebg.png";
import cloud from "../assets/image/cloud.png";
import pineTree from "../assets/image/pine-tree.png";

const Homepage = () => {
  return (
    <div className="bg-container">
      <Navbar />
      <div className="flex w-[98vw] h-screen">
        {/* Part 1 */}
        <div className="bg-img">
          <img src={homebg} alt="Home Page" />
        </div>
        <section className="greenie mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
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
        </section>

        {/* Part 2 */}
        <section
          className="stat container mx-auto px-4 pb-32 pt-48 absolute bottom-0"
          style={{ marginBottom: "6rem" }}
        >
          <div className="w-1/2 flex justify-start">
            <img src={cloud} alt="cloud" className="w-8 h-8 ml-2" />
          </div>
          <div className="w-1/2 flex justify-end">
            <img src={pineTree} alt="pine tree" className="w-8 h-8 mr-2" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
