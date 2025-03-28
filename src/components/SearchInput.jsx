import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const { querySearch } = useParams();
  const [query, setQuery] = useState(querySearch || "");
  const navigate = useNavigate();

  const queryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/${query}/${1}`);
    }
  };
  return (
    <div className="inputBox h-[46px] w-full md:w-[570px] flex items-center px-4 gap-3 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:border-0 focus-within:shadow-c focus-within:border-0">
      <AiOutlineSearch color="#9AA0A6" className="text-[25px] md:text-[22px]" />
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyUp={queryHandler}
        placeholder="Search"
        autoComplete="off"
        className="grow outline-0 w-[80%]"
      />
      <div className="flex items-center gap-2">
        {query !== "" ? (
          <IoMdClose
            color="#9AA0A6"
            className="cursor-pointer text-[50px] md:text-[28px]"
            onClick={() => setQuery("")}
          />
        ) : null}
        <img className="w-[22px] cursor-pointer" src={MicIcon} alt="mic" />
        <img className="w-[22px] cursor-pointer" src={ImageIcon} alt="lens" />
      </div>
    </div>
  );
};

export default SearchInput;
