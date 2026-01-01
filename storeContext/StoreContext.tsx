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
    statsData: any[];
    placementsData: any[];
}

export const StoreContext = createContext<StoreContextType>({
    url: "",
    newsEventsList: [],
    heroList: [],
    announcementList: [],
    departmentList: [],
    placementList: [],
    setDepartmentList: () => { },
    statsData: [],
    placementsData: [],
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
        { student: 'THADA REVANTH', company: 'Flipkart', package: '32 LPA', image: { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' }, companyLogo: { url: '/images/companies/flipkart.png' } },
        { student: 'PININTI JHANSI', company: 'Optum', package: '18.56 LPA', image: { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' }, companyLogo: { url: '/images/companies/optum.png' } },
        { student: 'CHIRUMANI SHRAVAN KUMAR', company: 'Porter', package: '17 LPA', image: { url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400' }, companyLogo: { url: '/images/companies/porter.png' } },
        { student: 'SHAIK SUMAYYA', company: 'Bank of America', package: '12 LPA', image: { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' }, companyLogo: { url: '/images/companies/bankofamerica.png' } }
    ]);


    const [placementsData, setPlacementsData] = useState<any[]>(() => {
        const cached = localStorage.getItem('cse_website_placements_page');
        return cached ? JSON.parse(cached) : [];
    });

    const [statsData, setStatsData] = useState<any[]>(() => {
        const cached = localStorage.getItem('cse_website_stats');
        return cached ? JSON.parse(cached) : [];
    });

    const fetchSheetData = async (sheetUrl: string) => {
        try {
            const response = await fetch(`${sheetUrl}&t=${new Date().getTime()}`);
            const text = await response.text();

            const rows = text.split(/\r?\n/).map(row => {
                const result = [];
                let cell = "";
                let inQuotes = false;
                for (let i = 0; i < row.length; i++) {
                    const char = row[i];
                    if (char === '"') {
                        inQuotes = !inQuotes;
                    } else if (char === ',' && !inQuotes) {
                        result.push(cell.trim());
                        cell = "";
                    } else {
                        cell += char;
                    }
                }
                result.push(cell.trim().replace(/^"|"$/g, ''));
                return result;
            });

            const headers = rows[0].map(h => h.toLowerCase()); // Normalize headers to lowercase
            return rows.slice(1).map(row => {
                const obj: any = {};
                headers.forEach((header, index) => {
                    obj[header] = row[index];
                });
                return obj;
            });
        } catch (error) {
            console.error("Error fetching sheet data:", error);
            return null;
        }
    };

    useEffect(() => {
        const statsUrl = 'https://docs.google.com/spreadsheets/d/1pPK9lF0pwOCrZsB0xictxm8fpCMOG_S_eBRfanheGmg/export?format=csv';
        const placementsUrl = 'https://docs.google.com/spreadsheets/d/1jiOXfH0rUwbDy7cbFwLbZWKKe0rQ1YF0eTH30llqS7E/export?format=csv';

        const loadData = async () => {
            const stats = await fetchSheetData(statsUrl);
            if (stats) {
                setStatsData(stats);
                localStorage.setItem('cse_website_stats', JSON.stringify(stats));
            }

            if (placementsUrl) {
                const placements = await fetchSheetData(placementsUrl);
                if (placements) {
                    setPlacementsData(placements);
                    localStorage.setItem('cse_website_placements_page', JSON.stringify(placements));
                }
            }
        };

        loadData();
        const interval = setInterval(loadData, 5000); // Poll every 5 seconds for instant updates

        return () => clearInterval(interval);
    }, []);

    const contextValue = {
        url,
        newsEventsList,
        heroList,
        announcementList,
        setDepartmentList,
        departmentList,
        placementList,
        statsData,
        placementsData,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;


