import React from "react";
import { Group46, moptrolog } from "../assets/images";
import ProgressBar from "@ramonak/react-progress-bar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-end m-3">
          <img src={Group46} alt="" className=" cursor-pointer" />
        </div>
        <div className="flex justify-center relative">
        <div className="w-7 h-7 rounded-full bg-[#5E5E5EB5] text-[#36A546] absolute px-2 right-40">4</div>
          <img src={moptrolog} alt="moptrologo" />
        </div>
        <div>
          <div className="flex justify-center mt-8 bg-[#1A2C2C99] mx-5 rounded-lg px-5 py-2">
            Employee Productivity Dashboard
          </div>
          <div>
            <div className="mt-5">
              <div className="flex justify-between px-10 py-3 ">
                <div>
                  <div>Productivity on Monday</div>
                  <div>
                    <ProgressBar
                      completed={4}
                      height="12px"
                      baseBgColor="transparent"
                      maxCompleted={20}
                      isLabelVisible={false}
                      bgColor="#36A546"
                    />
                  </div>
                </div>
                <div>4%</div>
              </div>
            </div>
            <div>
            <div className="flex justify-between px-10 py-3">
                <div>
                  <div>Productivity on Tuesday</div>
                  <div>
                    <ProgressBar
                      completed={92}
                      height="12px"
                      baseBgColor="transparent"
                      isLabelVisible={false}
                      bgColor="#36A546"
                      width="200px"
                    />
                  </div>
                </div>
                <div>92%</div>
              </div>
            </div>
            <div>
            <div className="flex justify-between px-10 py-3">
                <div>
                  <div>Productivity on Wednesday</div>
                  <div>
                    <ProgressBar
                      completed={122}
                      height="12px"
                      baseBgColor="transparent"
                      width="240px"
                      isLabelVisible={false}
                      bgColor="#36A546"
                    />
                  </div>
                </div>
                <div>122%</div>
              </div>
            </div>
            <div>
            <div className="flex justify-between px-10 py-3">
                <div>
                  <div>Productivity on Thursday</div>
                  <div>
                    <ProgressBar
                      completed={93}
                      height="12px"
                      baseBgColor="transparent"
                      width="220px"
                      isLabelVisible={false}
                      bgColor="#36A546"
                    />
                  </div>
                </div>
                <div>93%</div>
              </div>
            </div>
            <div>
            <div className="flex justify-between px-10 py-3">
                <div>
                  <div>Productivity on Friday</div>
                  <div>
                    <ProgressBar
                      completed={89}
                      height="12px"
                      baseBgColor="transparent"
                      width='190px'
                      isLabelVisible={false}
                      bgColor="#36A546"
                    />
                  </div>
                </div>
                <div>89%</div>
              </div>
            </div>
            <div>
            <div className="flex justify-between px-10 py-3">
                <div>
                  <div>Productivity on Saturday</div>
                  <div>
                    <ProgressBar
                      completed={98}
                      height="12px"
                      baseBgColor="transparent"
                      width="220px"
                      isLabelVisible={false}
                      bgColor="#36A546"
                    />
                  </div>
                </div>
                <div>98%</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
