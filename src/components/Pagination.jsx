import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import Logo from "../assets/google-pagination-logo.png";
import { pagination } from "../utils/Constants";

const Pagination = ({ queries }) => {

  const { query } = useParams();
  const [page, setPage] = useState(pagination[0].startIndex);
  const navigate = useNavigate();

  useEffect(() => {
    setPage(pagination[0].startIndex);
  }, [query]);

  const onPaginationClick = (startIndex) => {
    setPage(startIndex);
    navigate(`/${query}/${startIndex}`);
  };
  return (
    <div className="flex flex-col py-14 items-center max-w-[700px]">
      <div className="relative text-[#4285F4]">
        {queries.previousPage && (
          <div
            className="absolute left-[-30px] md:left-[-40px] top-[-10px]"
            onClick={() =>
              onPaginationClick(queries.previousPage[0].startIndex)
            }
          >
            <FiChevronLeft size={20} className="cursor-pointer" />
            <div className="absolute left-[-5px] top-[30px] hidden md:block cursor-pointer">
              Prev
            </div>
          </div>
        )}
        <img className="w-[250px] md:w-[300px]" src={Logo} />
        {queries.nextPage && (
          <div
            className="absolute right-[-30px] md:right-[-40px] top-[-10px]"
            onClick={() => onPaginationClick(queries.nextPage[0].startIndex)}
          >
            <FiChevronRight size={20} className="cursor-pointer" />
            <div className="absolute right-[-5px] top-[30px] hidden md:block cursor-pointer">
              Next
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-3 text-sm text-[#4285F4]">
       {
        pagination.map((p)=>{
            return <span key={p.page} className={`cursor-pointer ${page===p.startIndex?"text-[#000] font-bold":""}`} onClick={()=>onPaginationClick(p.startIndex)}>{p.page}</span>
        })
       }
      </div>
    </div>
  );
};

export default Pagination;
