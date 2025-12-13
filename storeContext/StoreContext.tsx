/// <reference types="vite/client" />
import { createContext, useEffect, useState } from "react";

// export const StoreContext = createContext(null);
interface StoreContextType {
    url: string;
    newsEventsList: any[];
    heroList: any[];
    announcementList: any[];
    departmentList: any[];
    placementList: any[];
    setDepartmentList: React.Dispatch<React.SetStateAction<any[]>>;
}

export const StoreContext = createContext<StoreContextType>({
    url: "",
    newsEventsList: [],
    heroList: [],
    announcementList: [],
    departmentList: [],
    placementList: [],
    setDepartmentList: () => { },
});

const API_BASE_URL = (() => {
    const envUrl = import.meta.env.VITE_API_URL?.trim();
    if (envUrl) {
        return envUrl.endsWith("/") ? envUrl.slice(0, -1) : envUrl;
    }
    console.warn("VITE_API_URL is not set. Falling back to relative /api requests.");
    return "";
})();

const StoreContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const url = API_BASE_URL;

    const [newsEventsList] = useState<any[]>([]);
    const [heroList] = useState<any[]>([]);
    const [announcementList] = useState<any[]>([]);
    const [departmentList, setDepartmentList] = useState<any[]>([]);
    const [placementList] = useState<any[]>([]);



    useEffect(() => {
        // API calls disabled - no backend configured
        // This prevents CORS errors from attempting to fetch from non-existent API
        // If you need to enable API calls in the future, uncomment the lines below
        // and configure VITE_API_URL in your .env file

        // newsListFetchData();
        // heroListFetchData();
        // announcementListFetchData();
        // placementListFetchData();
    }, []);

    const contextValue = {
        url,
        newsEventsList,
        heroList,
        announcementList,
        setDepartmentList,
        departmentList,
        placementList,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;


