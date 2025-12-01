import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ECAPDashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('ecap_token');
    const userType = localStorage.getItem('ecap_userType');
    
    if (!token) {
      navigate('/ecap/login');
      return;
    }

    // Route based on user type
    if (userType === 'employee') {
      // Faculty/Employee - redirect to faculty dashboard
      navigate('/ecap/faculty/attendance', { replace: true });
    } else if (userType === 'student' || userType === 'parent') {
      // Student/Parent - redirect to student dashboard
      navigate('/ecap/student/academic-calendar', { replace: true });
    }
  }, [navigate]);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div style={{ textAlign: 'center' }}>
        <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #2563eb', borderRadius: '50%', width: '48px', height: '48px', animation: 'spin 1s linear infinite', margin: '0 auto' }}></div>
        <p style={{ marginTop: '16px', color: '#4b5563' }}>Loading...</p>
      </div>
    </div>
  );
};

export default ECAPDashboard;
