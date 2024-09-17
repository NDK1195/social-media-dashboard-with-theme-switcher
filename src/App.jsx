import { useState } from "react";
import iconDown from "./images/icon-down.svg";
import iconUp from "./images/icon-up.svg";
import iconFacebook from "./images/icon-facebook.svg";
import iconInstagram from "./images/icon-instagram.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconYoutube from "./images/icon-youtube.svg";
import Overview from "./Overview";
import OverviewToday from "./OverviewToday";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <div
      className={`${isLightMode ? "bg-white" : "bg-background-dark"} min-h-dvh`}
    >
      {/* top background */}
      <div
        className={`${isLightMode ? "bg-top-background-light" : "bg-top-background-dark"} absolute left-0 top-0 h-[235px] w-full rounded-b-[20px] lg:h-[244px]`}
      ></div>
      {/* top background */}

      <div className="relative mx-auto max-w-[1110px] px-6 py-9 xl:px-0">
        <header className="mb-10 flex flex-col lg:mb-[46px] lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <h1
              className={`${isLightMode ? "text-text-light-2" : "text-white"} mb-1 text-2xl font-bold leading-none lg:text-[28px]`}
            >
              Social Media Dashboard
            </h1>

            <p
              className={`${isLightMode ? "text-text-light-1" : "text-text-dark"} text-sm font-bold leading-none`}
            >
              Total Followers: 23,004
            </p>
          </div>

          <div className="mb-4 h-[1px] w-full bg-[#848BAB] lg:mb-0 lg:hidden"></div>

          <div className="flex items-center justify-between lg:justify-normal lg:gap-3">
            <span
              className={`${isLightMode ? "text-text-light-1" : "text-text-dark"} text-sm font-bold leading-none`}
            >
              Dark Mode
            </span>
            <div
              className={`${isLightMode ? "bg-toggle-light" : "bg-toggle-dark"} hover:bg-toggle-dark relative h-6 w-12 cursor-pointer rounded-xl`}
              onClick={() => setIsLightMode(!isLightMode)}
            >
              <div
                className={`${isLightMode ? "bg-card-background-light translate-x-1" : "translate-x-7 bg-[#333A55]"} absolute top-1/2 size-4 -translate-y-1/2 rounded-full transition-all duration-300`}
              ></div>
            </div>
          </div>
        </header>

        {/* overview */}
        <div className="mb-[46px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-[30px]">
          <Overview
            isLightMode={isLightMode}
            iconSocial={iconFacebook}
            borderTopColor={"border-[#178FF5]"}
            numberOfFollowers="1987"
            isGrowth={true}
            growthNumber="12"
            iconGrowth={iconUp}
            isYoutube={false}
            isInstagram={false}
          />
        </div>
        {/* overview */}

        {/* overview today */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-[30px] xl:gap-y-6">
          <OverviewToday />
        </div>
        {/* overview today */}
      </div>
    </div>
  );
}
export default App;
