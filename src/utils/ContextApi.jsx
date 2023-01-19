import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [images,setImages] = useState(false)
    const [loading,setLoading] = useState(true)
    return(
        <AppContext.Provider value={{images,setImages,loading,setLoading}}>
            {children}
        </AppContext.Provider>
    );
};

export const useYourContext = () =>{
    return useContext(AppContext)
}

