import React, { useState } from 'react';

const StudentInternship: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'apply' | 'upload' | 'track'>('apply');

  // Mock internship applications
  const applications = [
    { id: 1, company: 'Tech Corp', position: 'Software Development Intern', appliedDate: '2024-01-15', status: 'Under Review' },
    { id: 2, company: 'Data Systems', position: 'Data Science Intern', appliedDate: '2024-01-20', status: 'Accepted' },
  ];

  // Mock uploaded projects
  const projects = [
    { id: 1, title: 'E-Commerce Website', type: 'Project', uploadedDate: '2024-02-10', status: 'Approved', faculty: 'MASTAN MOHAMMED' },
    { id: 2, title: 'Machine Learning Model', type: 'Internship Report', uploadedDate: '2024-02-15', status: 'Pending', faculty: 'PRATHYUSHA G' },
  ];

  // Mock tracking data
  const tracking = [
    { id: 1, company: 'Tech Corp', startDate: '2024-03-01', endDate: '2024-05-31', status: 'Ongoing', progress: 60 },
    { id: 2, company: 'Data Systems', startDate: '2024-01-01', endDate: '2024-03-31', status: 'Completed', progress: 100 },
  ];

  return (
    <div style={{ fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif', fontSize: '12px' }}>
      <h2 style={{ 
        color: '#1e40af', 
        fontSize: '18px', 
        fontWeight: 'bold', 
        marginBottom: '15px',
        borderBottom: '2px solid #2563eb',
        paddingBottom: '5px'
      }}>
        Internship/Projects
      </h2>

      {/* Tabs */}
      <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', gap: '5px', borderBottom: '2px solid #e5e7eb' }}>
        {(['apply', 'upload', 'track'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === tab ? '#2563eb' : '#f3f4f6',
              color: activeTab === tab ? '#ffffff' : '#000',
              border: '1px solid #d1d5db',
              borderBottom: 'none',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              textTransform: 'capitalize'
            }}
          >
            {tab === 'apply' ? 'Apply' : tab === 'upload' ? 'Upload' : 'Track'}
          </button>
        ))}
      </div>

      {/* Apply Tab */}
      {activeTab === 'apply' && (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => alert('Application form will open...')}
              style={{
                padding: '10px 20px',
                backgroundColor: '#10b981',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            >
              Apply for New Internship
            </button>
          </div>
          <table 
            border={1} 
            cellPadding={8} 
            cellSpacing={0} 
            style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d1d5db',
              fontSize: '11px'
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#2563eb', color: '#ffffff' }}>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Company</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Position</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Applied Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={app.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{app.company}</td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>{app.position}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(app.appliedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    border: '1px solid #d1d5db',
                    color: app.status === 'Accepted' ? '#10b981' : '#f59e0b',
                    fontWeight: 'bold'
                  }}>
                    {app.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Upload Tab */}
      {activeTab === 'upload' && (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => alert('Upload form will open...')}
              style={{
                padding: '10px 20px',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            >
              Upload New Project/Report
            </button>
          </div>
          <table 
            border={1} 
            cellPadding={8} 
            cellSpacing={0} 
            style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d1d5db',
              fontSize: '11px'
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#2563eb', color: '#ffffff' }}>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Title</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Type</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Uploaded Date</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Faculty</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{project.title}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>{project.type}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(project.uploadedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>{project.faculty}</td>
                  <td style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    border: '1px solid #d1d5db',
                    color: project.status === 'Approved' ? '#10b981' : '#f59e0b',
                    fontWeight: 'bold'
                  }}>
                    {project.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Track Tab */}
      {activeTab === 'track' && (
        <div>
          <table 
            border={1} 
            cellPadding={8} 
            cellSpacing={0} 
            style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d1d5db',
              fontSize: '11px'
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#2563eb', color: '#ffffff' }}>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Company</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Start Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>End Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Progress</th>
              </tr>
            </thead>
            <tbody>
              {tracking.map((item, index) => (
                <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{item.company}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(item.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(item.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    border: '1px solid #d1d5db',
                    color: item.status === 'Completed' ? '#10b981' : '#2563eb',
                    fontWeight: 'bold'
                  }}>
                    {item.status}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ flex: 1, height: '20px', backgroundColor: '#e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
                        <div style={{ 
                          width: `${item.progress}%`, 
                          height: '100%', 
                          backgroundColor: item.progress === 100 ? '#10b981' : '#2563eb',
                          transition: 'width 0.3s'
                        }}></div>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 'bold' }}>{item.progress}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentInternship;

