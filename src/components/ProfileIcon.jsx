// import { TbGridDots } from "react-icons/tb";
import Profile from "../assets/pro1.png";
import ProfileRing from "../assets/profile-ring.svg";
import { CgMenuGridO } from "react-icons/cg";

const ProfileIcon = () => {
    return <div className="flex gap-1 ml-3 md:ml-0">
         <span className="hidden h-10 w-10 md:flex justify-center items-center hover:text-black/[0.7] cursor-pointer gap-2">
          <CgMenuGridO size={25} color="#737373"/>
        </span>
        <span className="h-10 w-10 flex justify-center items-center relative cursor-pointer">
            <img  className="absolute" src={ProfileRing}/>
            <span className="w-8 h-8 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src={Profile}/>
            </span>
        </span>
    </div>;
};

export default ProfileIcon;
