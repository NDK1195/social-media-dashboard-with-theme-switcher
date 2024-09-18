function OverviewToday({
  isLightMode,
  title,
  iconSocial,
  numberOfInteract,
  isGrowth,
  growthPercent,
  iconGrowth,
}) {
  return (
    <div
      className={`${isLightMode ? "bg-card-background-light hover:bg-[#E1E4F0]" : "bg-card-background-dark hover:bg-[#333A55]"} grid cursor-pointer grid-cols-2 place-content-between place-items-center gap-y-6 rounded-[5px] pb-[19px] pl-6 pr-[31px] pt-6 transition-colors`}
    >
      <p
        className={`${isLightMode ? "text-text-light-1" : "text-text-dark"} place-self-start text-sm font-bold leading-none`}
      >
        {title}
      </p>

      <img src={iconSocial} alt="icon socical" className="place-self-end" />

      <p
        className={`${isLightMode ? "text-text-light-2" : "text-white"} place-self-start text-[32px] font-bold leading-none`}
      >
        {numberOfInteract}
      </p>

      <div
        className={`${isGrowth ? "text-lime-green" : "text-bright-red"} flex items-center gap-1 place-self-end`}
      >
        <img src={iconGrowth} alt="icon growth" />

        <span className="text-xs font-bold leading-none">{growthPercent}%</span>
      </div>
    </div>
  );
}
export default OverviewToday;
