function Overview({
  isLightMode,
  iconSocial,
  borderTopColor,
  numberOfFollowers,
  isGrowth,
  growthNumber,
  iconGrowth,
  isYoutube,
  isInstagram,
}) {
  return (
    <div
      className={`${isLightMode ? "bg-card-background-light" : "bg-card-background-dark"} ${borderTopColor} relative flex w-full flex-col items-center rounded-[5px] border-t-4 pb-6 pt-7 text-center`}
    >
      <div className="mb-7 flex items-center gap-2">
        <img src={iconSocial} alt="icon social" />
        <span
          className={`text-xs font-bold leading-none ${isLightMode ? "text-text-light-1" : "text-text-dark"}`}
        >
          {isInstagram ? "@realnathanf" : isYoutube ? "Nathan F." : "@nathanf"}
        </span>
      </div>

      <h2
        className={`${isLightMode ? "text-text-light-2" : "text-white"} mb-[9px] text-[56px] font-bold leading-[48px] tracking-[-2px]`}
      >
        {numberOfFollowers}
      </h2>

      <p
        className={`${isLightMode ? "text-text-light-1" : "text-text-dark"} mb-[25px] text-xs leading-none tracking-[5px]`}
      >
        {isYoutube ? "SUBSCRIBERS" : "FOLLOWERS"}
      </p>

      <div
        className={`${isGrowth ? "text-lime-green" : "text-bright-red"} flex items-center gap-1`}
      >
        <img src={iconGrowth} alt="icon growth" />
        <span className="text-xs font-bold leading-none">
          {growthNumber} Today
        </span>
      </div>
    </div>
  );
}
export default Overview;
