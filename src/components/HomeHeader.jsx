import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="h-16 w-full flex justify-between md:justify-end px-5 gap-4 items-center">
      <div className="flex gap-4 items-center justify-end">
        <span className="text-[13px] text-[#272727] line-height hover:underline cursor-pointer">
          Gamil
        </span>
        <span className="text-[13px] text-[#272727] line-height hover:underline cursor-pointer">
          Images
        </span>
      </div>
      <ProfileIcon/>
    </header>
  );
};

export default HomeHeader;
