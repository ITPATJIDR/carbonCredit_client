import Navbar from "../components/navbar";
import "../css/main.css";
import "../css/homepage.css";
import { changeMenu } from "../store/features/menu-slice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Calculate from "../components/calculate";
import StatCarbon from "../components/statCarbon";
import StatTree from "../components/statTree";
import {
  homebg,
  leaf1,
  leaf2,
  circle1,
  plantCam,
  eduCam,
  calculate,
  money,
  manyTree,
  taxCam,
  bigTreecut,
  pineTree,
  mission,
  vision,
  stragy,
  arr1,
  arr2,
  carbonJour,
  cert,
  point,
  growTree,
} from "../assets/image";
import { logo } from "../assets/icons";
import {
  Image24,
  Image25,
  Image26,
  Image27,
  Image28,
  Image29,
} from "../assets/image";
import axios from "axios";

const Homepage = () => {
  const { chooseMenu } = useSelector((state) => state.menu);
  const { isAuth } = useSelector((state) => state.auth);
  const homeRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const part3Ref = useRef(null);
  const [ccBank, setCCBank] = useState({});

  const checkChooseMenu = () => {
    if (chooseMenu || chooseMenu !== "Home") {
      dispatch(changeMenu("Home"));
    }
  };

  const scrollToHome = () => {
    const homeElement = homeRef.current;
    if (homeElement) {
      homeElement.scrollIntoView({
        behavior: "smooth",
      });
      dispatch(changeMenu("AboutUs"));
    }
  };

  const handleStartNow = () => {
    if (isAuth) {
      navigate("/chooseOffset");
    } else {
      window.my_modal_1.showModal();
    }
  };

  const scrollToPart3 = () => {
    const part3Element = part3Ref.current;
    if (part3Element) {
      part3Element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const getCCBank = async () => {
    const res = await axios.get(
      "https://carboncredit-api.azurewebsites.net/carbon/getCCBank"
    );
    setCCBank(res.data.data[0]);
  };

  useEffect(() => {
    checkChooseMenu();
  });

  useEffect(() => {
    getCCBank();
  }, []);

  useEffect(() => {
    checkChooseMenu();

    if (location.hash === "#part3") {
      scrollToPart3();
    }
  }, []);
  console.log(ccBank);

  return (
    <div className="bg-container">
      <Navbar scrollToHome={scrollToHome} />
      <div className="flex flex-col w-[98vw] h-[4900px]">
        {/* part 1 */}
        <section className="w-[98vw] h-[90vh] flex justify-between">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 flex items-center ml-[180px]">
            <div className="mb-[10vh]">
              <div>
                <p className="text-[30px] text-black font-bold">Welcome to</p>
              </div>

              <div>
                <h1 className="text-8xl font-bold leading-normal text-black">
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

              <div className="flex items-center mt-8 ">
                <button
                  className="w-[8vw] btn h-[4vh] capitalize rounded-3xl bg-[#068758] text-white border-none hover:bg-[#79C258]"
                  onClick={handleStartNow}
                >
                  Start now
                </button>
                <div>
                  <p className="px-8">or</p>
                </div>
                <button
                  className="w-[8vw] btn h-[4vh] capitalize rounded-3xl bg-[#FFFFFF] text-[#068758] border-slate-200 hover:bg-[#B5D653] hover:border-transparent"
                  onClick={scrollToPart3}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="bg-img1">
            <img src={homebg} alt="Home Page" />
          </div>
        </section>
        {/* part 2 */}
        <section
          className="w-[98vw] h-[50vh] flex justify-center mt-10"
          style={{ marginBottom: "2rem" }}
        >
          <div className="w-[900px] flex flex-row justify-between">
            {/* cloud */}
            <StatCarbon data={{ compensate_CC: ccBank?.compensate_CC_main }} />
            {/* pine tree */}
            <StatTree data={{ growth_a_tree: ccBank?.growth_a_tree_main }} />
          </div>
        </section>
        {/* part 3 */}
        <section
          ref={part3Ref}
          className="w-[98.9vw] h-[100vh] flex justify-between mb-[3rem]"
        >
          <div className="flex-col">
            <p className="ml-[10rem] my-[3rem] font-bold text-black text-[30px]">
              Our Campaign
            </p>
            <div className="carousel w-[60vw] h-[70vh] rounded-[2rem] ml-[8rem]">
              {/* img 1 */}
              <div id="slide1" className="carousel-item relative w-full">
                <img src={taxCam} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              {/* img 2 */}
              <div id="slide2" className="carousel-item relative w-full">
                <img src={plantCam} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              {/* img 3 */}
              <div id="slide3" className="carousel-item relative w-full">
                <img src={eduCam} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* img background */}
          <div>
            <img
              src={bigTreecut}
              alt="big tree"
              className="w-[38vw] mt-[5.5rem]"
            />
          </div>
        </section>
        {/* part 4 */}
        <section className="w-[98vw] h-[100vh] flex flex-col justify-center items-center">
          <div>
            <p className="text-black text-[30px] font-bold">
              How do carbon offsets work?
            </p>
          </div>
          <div className="flex flex-row mb-[4rem]">
            {/* calculator */}
            <div className="card w-[53vh] h-[70vh] mt-[3rem] bg-[#F2F4F8]">
              <figure>
                <img
                  src={calculate}
                  alt="calculator"
                  className="mt-7 w-[125px] h-[150px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-black">
                  Calculate Your Carbon Footprint
                </h2>
                <p className="text-center text-black">
                  Use our user-friendly carbon footprint calculator, assess
                  emissions from different activities, be it travel or energy
                  use. This is a good way to gain valuable insights into your
                  personal or organizational impact, setting the foundation for
                  an effective way.
                </p>
              </div>
            </div>
            {/* money */}
            <div className="card w-[53vh] h-[70vh] mt-[3rem] mx-[2rem] bg-[#F2F4F8]">
              <figure>
                <img
                  src={money}
                  alt="money"
                  className="mt-7 w-[125px] h-[150px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-black">
                  Purchase Verified Carbon Offsets
                </h2>
                <p className="text-center text-black">
                  Explore our curated selection of verified carbon
                  offsets,supporting certified projects that actively reduce
                  greenhouse gas emissions.Choose initiatives aligned with your
                  values and sustainability goals, making a meaningful
                  investment in a greener future.
                </p>
              </div>
            </div>
            {/* tree */}
            <div className="card w-[53vh] h-[70vh] mt-[3rem] bg-[#F2F4F8]">
              <figure>
                <img
                  src={manyTree}
                  alt="Tree"
                  className="mt-7 w-[130px] h-[150px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-black">
                  Offset and Track Your Impact
                </h2>
                <p className="text-center text-black">
                  Stay engaged with the progress of your chosen offset projects,
                  accessing real-time data and updates on their environmental
                  impact.Witness firsthand the positive change your
                  contributions are making, reinforcing to sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* part 5 */}
        <section className="w-[98vw] h-[100vh] flex flex-col justify-center items-center mb-[100px]">
          <div>
            <p className="text-black text-[30px] font-bold">
              Calculate your Emissions
            </p>
          </div>
          <div className="relative">
            <Calculate />
            <img
              className="absolute w-[15vw] top-[180px] right-[-120px]"
              src={Image24}
              alt="image24"
            />
            <img
              className="absolute top-[-25px] right-[-70px] "
              src={Image25}
              alt="image25"
            />
            <img
              className="absolute w-[115px] top-[-185px] right-[-10px]"
              src={Image26}
              alt="image26"
            />
            <img
              className="absolute w-[100px] top-[-85px] right-[-250px] "
              src={Image27}
              alt="image27"
            />
            <img
              className="absolute w-[15vw] top-[-85px] left-[-125px]"
              src={Image28}
              alt="image28"
            />
            <img
              className="absolute w-[15vw] bottom-[10px] left-[-155px]"
              src={Image29}
              alt="image29"
            />
          </div>
        </section>

        {/* part 6 */}
        <section className="w-[98vw] h-[80vh] flex flex-col justify-center items-center mb-[3rem]">
          <div>
            <p className="text-black text-[30px] font-bold">
              Your Carbon Journey
            </p>
          </div>
          <div className="relative">
            <img
              className="absolute w-[20vw] top-[120px] left-[-190px]"
              src={leaf1}
              alt="leaf1"
            />
            <img
              className="absolute w-[20vw] top-[150px] right-[-185px]"
              src={leaf2}
              alt="leaf2"
            />
            <div className="flex flex-row">
              <div className="card w-[55vw] h-[55vh] bg-white shadow-xl my-[3rem]">
                <div className="card-body justify-center">
                  <div className="flex flex-row justify-center">
                    {/* 1 */}
                    <div className="flex flex-col mx-[1rem] items-center">
                      <figure>
                        <img
                          src={carbonJour}
                          alt="Carbon offset"
                          className="w-[120px] h-[140px]"
                        />
                      </figure>
                      <figcaption className="text-black">
                        Carbon offset
                      </figcaption>
                    </div>
                    {/* 2 */}
                    <div className="flex flex-col items-center">
                      <figure>
                        <img
                          src={arr1}
                          alt="arrow"
                          className="w-[100px] h-[100px] mt-[4rem]"
                        />
                      </figure>
                      <figure>
                        <img
                          src={cert}
                          alt="certification"
                          className="w-[120px] h-[140px]"
                        />
                      </figure>
                      <figcaption className="text-black">
                        Get Certificate
                      </figcaption>
                    </div>
                    {/* 3 */}
                    <div className="flex flex-col items-center ml-[2rem] mr-[1rem]">
                      <figure>
                        <img
                          src={point}
                          alt="point"
                          className="w-[120px] h-[140px]"
                        />
                      </figure>
                      <figcaption className="text-black">Get Points</figcaption>
                      <figure>
                        <img
                          src={arr2}
                          alt="arrow"
                          className="w-[100px] h-[100px] mt-[1rem]"
                        />
                      </figure>
                    </div>
                    {/* 4 */}
                    <div className="flex flex-col items-center">
                      <figure>
                        <img
                          src={arr1}
                          alt="arrow"
                          className="w-[100px] h-[100px] mt-[4rem]"
                        />
                      </figure>
                      <figure>
                        <img
                          src={growTree}
                          alt="Growing Tree"
                          className="w-[120px] h-[140px]"
                        />
                      </figure>
                      <figcaption className="text-black">
                        Tree in your profile grow
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute w-[120px] top-[-10px] right-[-60px] "
              src={circle1}
              alt="circle1"
            />
          </div>
        </section>

        {/* part 7 */}
        <section
          ref={homeRef}
          className="w-[98vw] h-[100vh] flex flex-col justify-center items-center mb-[3rem]"
        >
          <div>
            <p className="text-black text-[30px] font-bold">
              For the better world
            </p>
          </div>
          <div className="flex flex-row">
            {/* mission */}
            <div className="card w-[50vh] h-[65vh] bg-white shadow-xl mt-[3rem]">
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
            <div className="card w-[50vh] h-[65vh] bg-white shadow-xl mt-[3rem] mx-[3rem]">
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
            <div className="card w-[50vh] h-[65vh] bg-white shadow-xl mt-[3rem]">
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
        {/* footer */}
        <section className="w-[98.9vw] h-[15vh] bg-white mt-10">
          <div className="flex flex-row">
            <div className="mt-[2.6rem] ml-[3rem]">
              <img src={logo} className="w-[15vw]" />
            </div>
            <div className="mt-[3rem] ml-[52rem]">
              <p className="text-[15px] font-bold font-medium">
                Copyright © 2023 Greenie | All for the better world{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
