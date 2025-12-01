import { createContext, useEffect, useState } from "react";
import axios from "axios";

// export const StoreContext = createContext(null);
interface StoreContextType {
    newsEventsList: any[]; // Replace `any` with your proper type
    heroList: any[];
    announcementList: any[];
    departmentList: any[];
    placementList: any[];
}

export const StoreContext = createContext<StoreContextType>({
    newsEventsList: [],
    heroList: [],
    announcementList: [],
    departmentList: [],
    placementList: [],
});

const API_BASE_URL = (() => {
    const envUrl = import.meta.env.VITE_API_URL?.trim();
    if (envUrl) {
        return envUrl.endsWith("/") ? envUrl.slice(0, -1) : envUrl;
    }
    console.warn("VITE_API_URL is not set. Falling back to relative /api requests.");
    return "";
})();

const StoreContextProvider = (props) => {
    const url = API_BASE_URL;

    const [newsEventsList, setNewsEventsList] = useState([]);
    const [heroList, setHeroList] = useState([]);
    const [announcementList, setAnnouncementList] = useState([]);
    const [departmentList, setDepartmentList] = useState([]);
    const [placementList, setPlacementList] = useState([]);

    const newsListFetchData = async () => {
        try {
            const res = await axios.get(`${url}/api/newsEvents/list`);
            // console.log("API Response:", res.data); // Add this
            setNewsEventsList((prevData) => {
                if (JSON.stringify(prevData) !== JSON.stringify(res.data)) {
                    return res.data;
                }
                return prevData;
            });
        } catch (err) {
            console.error("Error fetching newsEvents data:", err);
        }
    };

    const heroListFetchData = async () => {
        try {
            const res = await axios.get(`${url}/api/heroImage/list`);
            console.log("API Response:", res.data); // Add this
            setHeroList((prevData) => {
                if (JSON.stringify(prevData) !== JSON.stringify(res.data)) {
                    return res.data;
                }
                return prevData;
            });
        } catch (err) {
            console.error("Error fetching heroImages data:", err);
        }
    };

    const announcementListFetchData = async () => {
        try {
            const res = await axios.get(`${url}/api/announcement/list`);
            console.log("API Response:", res.data); // Add this
            setAnnouncementList((prevData) => {
                if (JSON.stringify(prevData) !== JSON.stringify(res.data)) {
                    return res.data;
                }
                return prevData;
            });
        } catch (err) {
            console.error("Error fetching announcements data:", err);
        }
    };

    const placementListFetchData = async () => {
        try {
            const res = await axios.get(`${url}/api/placement/list`);
            console.log("API Response:", res.data); // Add this
            setPlacementList((prevData) => {
                if (JSON.stringify(prevData) !== JSON.stringify(res.data)) {
                    return res.data;
                }
                return prevData;
            });
        } catch (err) {
            console.error("Error fetching departments data:", err);
        }
    };

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


