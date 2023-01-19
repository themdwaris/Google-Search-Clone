import { Link } from "react-router-dom";
import {useState, useEffect } from "react";
import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { useYourContext } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { setImages } = useYourContext();

  useEffect(() => {
    return () => setImages(false);
  },[]);
  const menuHandler = (name) => {
    let imageType = name === "Images";
    // console.log(imageType)
    setSelectedMenu(name);
    setImages(imageType ? true : false);
  };
  return (
    <div className="p-[14px] pb-0 md:pr-5 md:pl-20 md:pt-7 flex md:block flex-col items-center sticky top-0 bg-white border border-[#ebebeb]">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start grow gap-2 md:gap-5">
          <Link to="/">
            <img src={Logo} className=" hidden w-[92px] md:block" />
          </Link>
          <SearchInput />
        </div>
        <div>
          <ProfileIcon />
        </div>
      </div>
      <div className="flex justify-start ml-[12px] mt-3">
        {menu.map((menuItem, index) => {
          const { name, icon } = menuItem;
          return (
            <span
              className={`flex items-center gap-2 mr-5 p-1 pt-0 text-[14px] text-[#5f6368] cursor-pointer relative text-left ${
                selectedMenu === name ? "text-[#4e73f9]" : ""
              }`}
              key={index}
              onClick={() => menuHandler(name)}
            >
              <span className="hidden md:block">{icon}</span>
              <span>{name}</span>
              {selectedMenu === name && (
                <span className="h-[3px] w-[100%] absolute bottom-0 left-[0] md:left-[10px] bg-[#4e73f9] rounded-full" />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultHeader;
