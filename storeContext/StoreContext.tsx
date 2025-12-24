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

    const [newsEventsList] = useState<any[]>([
        { title: "Annual Technical Symposium 2024", date: "Jan 15, 2024", description: "Join us for a day of innovation and technology.", image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=800" },
        { title: "Industry Workshop: Cloud Computing", date: "Feb 02, 2024", description: "Expert-led session on modern cloud architectures.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" }
    ]);
    const [heroList] = useState<any[]>([
        { id: 1, title: "Expansive 110-Acre Green Campus", url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920", description: "Experience learning in a serene and inspiring environment." },
        { id: 2, title: "State-of-the-Art Infrastructure", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920", description: "100+ advanced labs and smart e-classrooms for future-ready learning." },
        { id: 3, title: "Knowledge Hub", url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1920", description: "Extensive collection of books and journals in a modern library." },
        { id: 4, title: "Vibrant Student Life", url: "https://images.unsplash.com/photo-1523050335456-adaba3290bb7?auto=format&fit=crop&q=80&w=1920", description: "Numerous clubs, cultural festivals, and sports for holistic growth." },
        { id: 5, title: "Exceptional Placements", url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1920", description: "A legacy of success with a highest package of 52 LPA." }
    ]);
    const [announcementList] = useState<any[]>([
        { title: "B.Tech Admissions Open 2024-25", path: "#" },
        { title: "Semester Exam Schedule Released", path: "#" },
        { title: "Campus Recruitment Drive starts next week", path: "#" }
    ]);
    const [departmentList, setDepartmentList] = useState<any[]>([]);
    const [placementList] = useState<any[]>([
        { student: 'Vasu Surisetty', company: 'Meesho', package: '37 LPA', image: { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' }, companyLogo: { url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Meesho_Logo_Full.png' } },
        { student: 'Ankit Sharma', company: 'Microsoft', package: '42 LPA', image: { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' }, companyLogo: { url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' } },
        { student: 'Sneha Reddy', company: 'Amazon', package: '44 LPA', image: { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' }, companyLogo: { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' } }
    ]);



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


