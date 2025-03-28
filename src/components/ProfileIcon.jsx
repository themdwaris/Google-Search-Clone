// import { TbGridDots } from "react-icons/tb";
import Profile from "../assets/pro1.png";
import ProfileRing from "../assets/profile-ring.svg";
import { CgMenuGridO } from "react-icons/cg";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

const ProfileIcon = () => {
    const [mode,setMode] = useState("lightMode")
    const [isMode,setIsMode] = useState(false)

    const modeChanger = () =>{
        if(mode==="darkMode"){
            setMode("lightMode")
            setIsMode(!isMode)
        }else{
            setMode("darkMode")
            setIsMode(!isMode)
        }
    }
    useEffect(()=>{
        document.body.className = mode
    },[mode])

    return <div className="flex gap-3 md:gap-1 ml-3 md:ml-0">
        <span className="flex justify-center items-center">
           {
            isMode?<span className="modeBtn cursor-pointer"><MdLightMode size={25} onClick={modeChanger}/></span>:<span className="modeBtn cursor-pointer"><MdDarkMode size={25} onClick={modeChanger}/></span>
           }

        </span>
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
