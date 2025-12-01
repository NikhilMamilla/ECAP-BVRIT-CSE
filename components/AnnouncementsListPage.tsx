import React, { useContext } from 'react';
import { StoreContext } from '../storeContext/StoreContext';
import { useNavigate } from 'react-router-dom';

// A simple page that lists all announcements in two columns: Title and Link
const AnnouncementsListPage: React.FC = () => {
  const { announcementList } = useContext(StoreContext);
  const navigate = useNavigate();
  const announcements = Array.isArray(announcementList) ? announcementList : [];

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between gap-2 sm:gap-6 mb-6 min-w-0">
          <h1 className="flex-1 truncate text-2xl sm:text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
            Announcements
          </h1>
          <button
            onClick={handleBack}
            className="group inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 border border-blue-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 transition-all duration-200 text-xs sm:text-sm whitespace-nowrap shrink-0"
            aria-label="Go back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 sm:h-4 sm:w-4 transform transition-transform duration-200 group-hover:-translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className="font-semibold tracking-wide">Back</span>
          </button>
        </div>

        {announcements.length === 0 ? (
          <div className="text-gray-500">No announcements available.</div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {announcements.map((item: any, idx: number) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {item.title || '-'}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {item?.path ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          Open
                        </a>
                      ) : (
                        <span className="text-gray-400">No link</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnnouncementsListPage;
