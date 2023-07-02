import Navbar from "../components/navbar";
import "../css/main.css";
import "../css/homepage.css";
import homebg from "../assets/image/homebg.png";
import cloud from "../assets/image/cloud.png";
import pineTree from "../assets/image/pine-tree.png";
import mission from "../assets/image/mission.svg";
import vision from "../assets/image/vision.svg";
import stragy from "../assets/image/strategy.svg";

const Homepage = () => {
  return (
    <div className="bg-container">
      <Navbar />
      <div className="flex flex-col w-[98vw] h-[6748px]">
        {/* part 1 */}
        <section className="w-[98vw] h-[90vh] flex justify-between">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 flex items-center justify-center">
            <div className="mb-[19vh]">
              <div>
                <p className="text-1lg sm:text-3xl text-black font-bold">
                  Welcome to
                </p>
              </div>

              <div>
                <h1 className="text-3xl sm:text-8xl font-bold leading-normal text-black">
                  Greenie
                </h1>
              </div>

              <div className="mb-3 mt-5">
                <p className="text-black font-bold ">
                  Your Carbon Offset Solution!
                </p>
              </div>

              <div className="w-[500px]">
                <p className=" text-black">
                  Take a step towards a greener future with Greenie, your
                  trusted partner in carbon offsetting. We believe that every
                  individual and organization has the power to make a positive
                  impact on the planet, and we're here to make it easy for you
                  to do so.
                </p>
              </div>

              <div className="flex items-center mt-5 ">
                <button className="w-[8vw] btn h-[4vh] capitalize rounded-3xl bg-[#068758] text-white border-none">
                  Start now
                </button>
                <div>
                  <p className="px-8">or</p>
                </div>
                <button className="w-[8vw] btn h-[4vh] capitalize rounded-3xl bg-[#FFFFFF] text-[#068758] border-slate-200">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="bg-img">
            <img src={homebg} alt="Home Page" />
          </div>
        </section>
        {/* part 2 */}
        <section
          className="w-[98vw] h-[50vh] flex justify-between"
          style={{ marginBottom: "2rem" }}
        >
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div>
              <img src={cloud} alt="cloud" className="w-[180px] h-[180px]" />
            </div>
            <div>
              <p className="text-1lg sm:text-1xl text-black font-bold">
                Amount of carbon offset
              </p>
            </div>
            <div>
              <p className="text-1lg sm:text-2xl text-[#E1A303] font-bold">
                2,435,321 tonCO2eq
              </p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div>
              <img
                src={pineTree}
                alt="pine tree"
                className="w-[180px] h-[180px]"
              />
            </div>
            <div>
              <p className="text-1lg sm:text-1xl text-black font-bold">
                Equivalent to planting
              </p>
            </div>
            <div>
              <p className="text-1lg sm:text-2xl text-[#E1A303] font-bold">
                1,000,143 Big trees
              </p>
            </div>
          </div>
        </section>
        {/* part 3 */}
        <section className="w-[98vw] h-[100vh] flex flex-col justify-center items-center mb-[3rem]">
          <div>
            <p className="text-black text-[30px] font-bold">
              For the better world
            </p>
          </div>
          {/* mission */}
          <div className="flex flex-row">
            <div className="card w-[50vh] h-[70vh] bg-white shadow-xl mt-[3rem]">
              <figure>
                <img
                  src={mission}
                  alt="Our Vision"
                  className="mt-6 w-[130px] h-[150px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-black">
                  Our Mission
                </h2>
                <p className="text-center text-black">
                  At Greenie, our mission is to empower individuals and
                  businesses to take meaningful climate action by offsetting
                  their carbon footprint. We believe that collective efforts, no
                  matter how small, can significantly impact the planet. We aim
                  to foster a sustainable future and inspire a global movement
                  towards environment.
                </p>
              </div>
            </div>
            {/* vision */}
            <div className="card w-[50vh] h-[70vh] bg-white shadow-xl mt-[3rem] mx-[3rem]">
              <figure>
                <img
                  src={vision}
                  alt="Our Vision"
                  className="mt-6 w-[130px] h-[150px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-black">
                  Our Vision
                </h2>
                <p className="text-center text-black">
                  A world where every individual and organization care about
                  carbon neutrality and actively participates in mitigating
                  climate change. We envision a future where sustainable
                  practices are deeply ingrained in our daily lives. Through our
                  platform, we strive to create a sustainable and resilient
                  world for future generations.
                </p>
              </div>
            </div>
            {/* strategy */}
            <div className="card w-[50vh] h-[70vh] bg-white shadow-xl mt-[3rem]">
              <figure>
                <img
                  src={stragy}
                  alt="Our mission"
                  className="mt-6 w-[130px] h-[150px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-black">
                  Our strategy
                </h2>
                <p className="text-center text-black">
                  We are committed to making carbon offsetting accessible and
                  affordable for all. By selling carbon credits in smaller
                  units. we ensure that even small businesses and individuals
                  can contribute to the global carbon reduction effort without
                  breaking the bank. We believe that sustainability should be
                  within reach for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* part 4 */}
        <section className="w-[98vw] h-[80vh] flex flex-col justify-center items-center mb-[3rem] bg-[#FFD9D9]">
          <div>
            <p className="text-black text-[30px] font-bold">
              Your Carbon Journey
            </p>
          </div>
          <div className="flex flex-row">
            <div className="card w-[110vh] h-[50vh] bg-white shadow-xl my-[2rem]">
              <div className="card-body"></div>
            </div>
          </div>
        </section>
        {/* part 5 */}
        <section></section>
      </div>
    </div>
  );
};

export default Homepage;
