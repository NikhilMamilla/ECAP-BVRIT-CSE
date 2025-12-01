import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const FacultyDashboard: React.FC = () => {
  const [facultyInfo, setFacultyInfo] = useState<any>(null);
  const [activeMenu, setActiveMenu] = useState('attendance');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('ecap_token');
    const userName = localStorage.getItem('ecap_userName');
    const userType = localStorage.getItem('ecap_userType');
    
    if (!token || userType !== 'employee') {
      navigate('/ecap/login');
      return;
    }

    setFacultyInfo({
      name: userName || 'Faculty Member',
      userType: 'employee'
    });

    // Update active menu based on current route
    const path = location.pathname;
    if (path.includes('/faculty/attendance')) setActiveMenu('attendance');
    else if (path.includes('/faculty/marks')) setActiveMenu('marks');
    else if (path.includes('/faculty/timetable')) setActiveMenu('timetable');
    else if (path.includes('/faculty/resources')) setActiveMenu('resources');
    else if (path.includes('/faculty/feedback')) setActiveMenu('feedback');
    else if (path.includes('/faculty/events')) setActiveMenu('events');
    else if (path.includes('/faculty/profile')) setActiveMenu('profile');
    else if (path.includes('/faculty/examination')) setActiveMenu('examination');
    else if (path.includes('/faculty/internship')) setActiveMenu('internship');
    else if (path.includes('/faculty/regulations')) setActiveMenu('regulations');
    else if (path.includes('/faculty/announcements')) setActiveMenu('announcements');
    else if (path.includes('/faculty/services')) setActiveMenu('services');
    else setActiveMenu('attendance');
  }, [navigate, location]);

  const handleLogout = () => {
    localStorage.removeItem('ecap_token');
    localStorage.removeItem('ecap_userName');
    localStorage.removeItem('ecap_userType');
    navigate('/ecap/login');
  };

  const menuItems = [
    { id: 'attendance', label: 'ATTENDANCE', path: '/ecap/faculty/attendance', icon: '📊' },
    { id: 'marks', label: 'MARKS & GRADES', path: '/ecap/faculty/marks', icon: '📝' },
    { id: 'timetable', label: 'TIMETABLE', path: '/ecap/faculty/timetable', icon: '📅' },
    { id: 'resources', label: 'RESOURCES (PDFs)', path: '/ecap/faculty/resources', icon: '📄' },
    { id: 'feedback', label: 'FEEDBACK', path: '/ecap/faculty/feedback', icon: '💬' },
    { id: 'events', label: 'EVENTS', path: '/ecap/faculty/events', icon: '🎉' },
    { id: 'profile', label: 'PROFILE', path: '/ecap/faculty/profile', icon: '👤' },
    { id: 'examination', label: 'EXAMINATION', path: '/ecap/faculty/examination', icon: '📋' },
    { id: 'internship', label: 'INTERNSHIP/PROJECTS', path: '/ecap/faculty/internship', icon: '💼' },
    { id: 'regulations', label: 'REGULATIONS', path: '/ecap/faculty/regulations', icon: '📜' },
    { id: 'announcements', label: 'ANNOUNCEMENTS', path: '/ecap/faculty/announcements', icon: '📢' },
    { id: 'services', label: 'MISCELLANEOUS SERVICES', path: '/ecap/faculty/services', icon: '🔧' },
  ];

  if (!facultyInfo) {
    return (
      <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #2563eb', borderRadius: '50%', width: '48px', height: '48px', animation: 'spin 1s linear infinite', margin: '0 auto' }}></div>
          <p style={{ marginTop: '16px', color: '#4b5563' }}>Loading...</p>
        </div>
      </div>
    );
  }

  const displayName = `Hi...${facultyInfo.name.toUpperCase()}`;

  return (
    <div style={{ backgroundColor: '#FFFFFF', margin: 0, padding: '10px 0', minHeight: '100vh' }}>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .menuLink {
          display: block;
          padding: 10px 12px;
          text-decoration: none;
          color: #000;
          font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
          font-size: 12px;
          border-bottom: 1px solid #e5e7eb;
          cursor: pointer;
          transition: all 0.2s;
        }
        .menuLink:hover {
          background-color: #f3f4f6;
        }
        .menuLink.active {
          background-color: #dbeafe;
          color: #1e40af;
          font-weight: bold;
          border-left: 4px solid #2563eb;
        }
        .welcomeLink {
          color: #0066cc;
          text-decoration: none;
          font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
          font-size: 12px;
        }
        .welcomeLink:hover {
          text-decoration: underline;
        }
      `}</style>
      <center>
        <div style={{ backgroundColor: '#fff', padding: '10px', width: '1220px', maxWidth: '100%' }}>
          <table border={0} cellPadding={0} cellSpacing={0} style={{ width: '1200px', maxWidth: '100%', margin: '0 auto' }}>
            {/* Header Image */}
            <tr>
              <td>
                <img 
                  src="/collegeimages/title_head.jpg" 
                  width="1200" 
                  height="100" 
                  alt="Header" 
                  style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                />
              </td>
            </tr>

            {/* News/Marquee */}
            <tr>
              <td style={{ 
                fontFamily: 'Verdana', 
                fontSize: '12px', 
                fontWeight: 'bold', 
                color: 'blue',
                padding: '5px 0'
              }}>
                <marquee scrollDelay={150} trueSpeed>
                  Please contact Examination Branch for knowing your marks & backlogs
                </marquee>
              </td>
            </tr>

            <tr><td style={{ height: '10px' }}>&nbsp;</td></tr>

            {/* User Info Bar */}
            <tr>
              <td style={{ 
                fontFamily: 'Verdana', 
                fontSize: '12px',
                padding: '5px 0'
              }}>
                <table width="100%" cellPadding={0} cellSpacing={0}>
                  <tr>
                    <td align="left" style={{ width: '50%' }}>
                      <span style={{ fontWeight: 'bold', color: '#000' }}>{displayName}</span>
                    </td>
                    <td style={{ width: '30%', textAlign: 'center' }}>
                      <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); /* TODO: Implement change password */ }}
                        className="welcomeLink"
                      >
                        Change Password
                      </a>
                    </td>
                    <td align="right">
                      <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); handleLogout(); }}
                        className="welcomeLink"
                      >
                        Logout
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr><td style={{ height: '10px' }}>&nbsp;</td></tr>

            {/* Main Content Area */}
            <tr>
              <td>
                <table width="100%" cellSpacing={0} cellPadding={0}>
                  <tr>
                    {/* Left Sidebar Menu */}
                    <td style={{ 
                      width: '220px', 
                      paddingLeft: '4px', 
                      backgroundColor: '#f9fafb',
                      verticalAlign: 'top',
                      border: '1px solid #e5e7eb'
                    }} align="left" valign="top">
                      <div style={{ 
                        padding: '10px 0',
                        backgroundColor: '#f3f4f6',
                        borderBottom: '2px solid #2563eb',
                        paddingLeft: '8px',
                        marginBottom: '5px'
                      }}>
                        <strong style={{ 
                          fontFamily: 'Verdana', 
                          fontSize: '13px', 
                          color: '#1e40af' 
                        }}>FACULTY MENU</strong>
                      </div>
                      <div>
                        {menuItems.map((item) => (
                          <a
                            key={item.id}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveMenu(item.id);
                              navigate(item.path);
                            }}
                            className={`menuLink ${activeMenu === item.id ? 'active' : ''}`}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px'
                            }}
                          >
                            <span style={{ fontSize: '16px' }}>{item.icon}</span>
                            <span>{item.label}</span>
                          </a>
                        ))}
                      </div>
                    </td>

                    {/* Spacer */}
                    <td style={{ width: '5px' }}>&nbsp;</td>

                    {/* Main Content Area */}
                    <td valign="top" style={{ 
                      border: '1px solid #e5e7eb',
                      backgroundColor: '#ffffff',
                      padding: '10px',
                      minHeight: '500px'
                    }}>
                      <div style={{ width: '100%' }}>
                        <Outlet />
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </div>
  );
};

export default FacultyDashboard;

