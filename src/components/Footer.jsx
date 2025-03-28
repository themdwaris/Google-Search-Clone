import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
  return (
    <div className="footer bg-[#F2F2F2]">
      <div className="bb flex items-center p-[10px] md:px-[30px] border-b-2 border-[#dbdcdd]">
        <span className="text-[#70767a] text-[14px] md:text-[14px] leading-none pt-1">India</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-[15px] md:px-[30px] ">
        <div className="flex gap-3 items-center py-[10px] md:py-[0]">
            {
                quickLinks.map((currElme,index)=>{
                    return(
                        <span key={index} className="text-[#70767a] text-[14px] md:text-[14px] leading-none cursor-pointer hover:underline">{currElme}</span>
                    )
                })
            }
        </div>
        <div className="flex gap-3 items-center">
            {
                settingMenu.map((currElme,index)=>{
                    return(
                        <span key={index} className="text-[#70767a] text-[14px] leading-none cursor-pointer hover:underline">{currElme}</span>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Footer;
