import React, { useState } from 'react';

const FacultyInternship: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'review' | 'approve' | 'track'>('review');
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  // Mock internship applications for review
  const applications = [
    { id: 1, student: 'MAMILLA NIKHIL (23211A05M7)', company: 'Tech Corp', position: 'Software Development Intern', appliedDate: '2024-01-15', status: 'Pending', documents: 3 },
    { id: 2, student: 'RAJESH KUMAR (23211A05M8)', company: 'Data Systems', position: 'Data Science Intern', appliedDate: '2024-01-20', status: 'Pending', documents: 2 },
    { id: 3, student: 'PRIYA SHARMA (23211A05M9)', company: 'Cloud Solutions', position: 'Cloud Intern', appliedDate: '2024-01-25', status: 'Approved', documents: 4 },
  ];

  // Mock projects for approval
  const projects = [
    { id: 1, student: 'MAMILLA NIKHIL (23211A05M7)', title: 'E-Commerce Website', type: 'Project', uploadedDate: '2024-02-10', status: 'Pending', faculty: 'MASTAN MOHAMMED' },
    { id: 2, student: 'RAJESH KUMAR (23211A05M8)', title: 'Machine Learning Model', type: 'Internship Report', uploadedDate: '2024-02-15', status: 'Pending', faculty: 'PRATHYUSHA G' },
  ];

  // Mock tracking data
  const tracking = [
    { id: 1, student: 'MAMILLA NIKHIL (23211A05M7)', company: 'Tech Corp', startDate: '2024-03-01', endDate: '2024-05-31', status: 'Ongoing', progress: 60 },
    { id: 2, student: 'RAJESH KUMAR (23211A05M8)', company: 'Data Systems', startDate: '2024-01-01', endDate: '2024-03-31', status: 'Completed', progress: 100 },
  ];

  const filteredApplications = applications.filter(app => {
    if (filter === 'all') return true;
    return app.status.toLowerCase() === filter;
  });

  const handleAction = (id: number, action: 'approve' | 'reject' | 'review') => {
    alert(`${action} application ID: ${id}`);
  };

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
        Internship/Projects Management
      </h2>

      {/* Tabs */}
      <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', gap: '5px', borderBottom: '2px solid #e5e7eb' }}>
        <button
          onClick={() => setActiveTab('review')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'review' ? '#2563eb' : '#f3f4f6',
            color: activeTab === 'review' ? '#ffffff' : '#000',
            border: '1px solid #d1d5db',
            borderBottom: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: activeTab === 'review' ? 'bold' : 'normal'
          }}
        >
          Review Applications
        </button>
        <button
          onClick={() => setActiveTab('approve')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'approve' ? '#2563eb' : '#f3f4f6',
            color: activeTab === 'approve' ? '#ffffff' : '#000',
            border: '1px solid #d1d5db',
            borderBottom: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: activeTab === 'approve' ? 'bold' : 'normal'
          }}
        >
          Approve Projects
        </button>
        <button
          onClick={() => setActiveTab('track')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'track' ? '#2563eb' : '#f3f4f6',
            color: activeTab === 'track' ? '#ffffff' : '#000',
            border: '1px solid #d1d5db',
            borderBottom: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: activeTab === 'track' ? 'bold' : 'normal'
          }}
        >
          Track Internships
        </button>
      </div>

      {/* Review Applications Tab */}
      {activeTab === 'review' && (
        <div>
          <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
            {(['all', 'pending', 'approved', 'rejected'] as const).map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: filter === filterOption ? '#2563eb' : '#f3f4f6',
                  color: filter === filterOption ? '#ffffff' : '#000',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontWeight: filter === filterOption ? 'bold' : 'normal',
                  textTransform: 'capitalize'
                }}
              >
                {filterOption}
              </button>
            ))}
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
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Student</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Company</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Position</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Applied Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Documents</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((app, index) => (
                <tr key={app.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{app.student}</td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>{app.company}</td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>{app.position}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(app.appliedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>{app.documents}</td>
                  <td style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    border: '1px solid #d1d5db',
                    color: app.status === 'Approved' ? '#10b981' : app.status === 'Pending' ? '#f59e0b' : '#ef4444',
                    fontWeight: 'bold'
                  }}>
                    {app.status}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                      <button
                        onClick={() => handleAction(app.id, 'review')}
                        style={{
                          padding: '4px 8px',
                          backgroundColor: '#2563eb',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '10px',
                          fontWeight: 'bold'
                        }}
                      >
                        Review
                      </button>
                      {app.status === 'Pending' && (
                        <>
                          <button
                            onClick={() => handleAction(app.id, 'approve')}
                            style={{
                              padding: '4px 8px',
                              backgroundColor: '#10b981',
                              color: '#ffffff',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '10px',
                              fontWeight: 'bold'
                            }}
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleAction(app.id, 'reject')}
                            style={{
                              padding: '4px 8px',
                              backgroundColor: '#ef4444',
                              color: '#ffffff',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '10px',
                              fontWeight: 'bold'
                            }}
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Approve Projects Tab */}
      {activeTab === 'approve' && (
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
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Student</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Title</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Type</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Uploaded Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{project.student}</td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>{project.title}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>{project.type}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(project.uploadedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    border: '1px solid #d1d5db',
                    color: project.status === 'Approved' ? '#10b981' : '#f59e0b',
                    fontWeight: 'bold'
                  }}>
                    {project.status}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                      <button
                        onClick={() => alert('Viewing project...')}
                        style={{
                          padding: '4px 8px',
                          backgroundColor: '#2563eb',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '10px',
                          fontWeight: 'bold'
                        }}
                      >
                        View
                      </button>
                      {project.status === 'Pending' && (
                        <>
                          <button
                            onClick={() => alert('Approving project...')}
                            style={{
                              padding: '4px 8px',
                              backgroundColor: '#10b981',
                              color: '#ffffff',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '10px',
                              fontWeight: 'bold'
                            }}
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => alert('Rejecting project...')}
                            style={{
                              padding: '4px 8px',
                              backgroundColor: '#ef4444',
                              color: '#ffffff',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '10px',
                              fontWeight: 'bold'
                            }}
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Track Internships Tab */}
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
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Student</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Company</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Start Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>End Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Progress</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {tracking.map((item, index) => (
                <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{item.student}</td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>{item.company}</td>
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
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <button
                      onClick={() => alert('Viewing detailed tracking...')}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#2563eb',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '11px',
                        fontWeight: 'bold'
                      }}
                    >
                      View Details
                    </button>
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

export default FacultyInternship;
