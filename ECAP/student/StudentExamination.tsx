import React, { useState } from 'react';

const StudentExamination: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hallticket' | 'results' | 'apply'>('hallticket');

  // Mock hall tickets
  const hallTickets = [
    { id: 1, exam: 'Mid-Term Examinations', date: '2024-02-10', status: 'Available', downloadLink: '#' },
    { id: 2, exam: 'End Semester Examinations', date: '2024-04-15', status: 'Not Available', downloadLink: null },
  ];

  // Mock results
  const results = [
    { id: 1, exam: 'Mid-Term Examinations', date: '2024-02-15', status: 'Published', viewLink: '#' },
    { id: 2, exam: 'Internal Assessment 1', date: '2024-01-20', status: 'Published', viewLink: '#' },
  ];

  // Mock applications
  const applications = [
    { id: 1, type: 'Revaluation', subject: 'Compiler Design', submittedDate: '2024-02-20', status: 'Pending', fee: 500 },
    { id: 2, type: 'Supplementary Exam', subject: 'Constitution Of India', submittedDate: '2024-02-25', status: 'Approved', fee: 1000 },
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
        Examination
      </h2>

      {/* Tabs */}
      <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', gap: '5px', borderBottom: '2px solid #e5e7eb' }}>
        {(['hallticket', 'results', 'apply'] as const).map((tab) => (
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
            {tab === 'hallticket' ? 'Hall Tickets' : tab === 'results' ? 'Results' : 'Apply for Exams'}
          </button>
        ))}
      </div>

      {/* Hall Tickets Tab */}
      {activeTab === 'hallticket' && (
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
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Examination</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {hallTickets.map((ticket, index) => (
                <tr key={ticket.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{ticket.exam}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(ticket.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    border: '1px solid #d1d5db',
                    color: ticket.status === 'Available' ? '#10b981' : '#6b7280',
                    fontWeight: 'bold'
                  }}>
                    {ticket.status}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {ticket.status === 'Available' ? (
                      <button
                        onClick={() => alert('Downloading hall ticket...')}
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
                        Download
                      </button>
                    ) : (
                      <span style={{ color: '#6b7280' }}>-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Results Tab */}
      {activeTab === 'results' && (
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
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Examination</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={result.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{result.exam}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(result.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    border: '1px solid #d1d5db',
                    color: '#10b981',
                    fontWeight: 'bold'
                  }}>
                    {result.status}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <button
                      onClick={() => alert('Viewing results...')}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#10b981',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '11px',
                        fontWeight: 'bold'
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Apply Tab */}
      {activeTab === 'apply' && (
        <div>
          <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px' }}>
            <p style={{ margin: 0, fontSize: '11px', color: '#1e40af' }}>
              <strong>Note:</strong> You can apply for revaluation, supplementary examinations, and other exam-related services here.
            </p>
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
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Application Type</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Subject</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Submitted Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Fee</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={app.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{app.type}</td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>{app.subject}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(app.submittedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>₹{app.fee}</td>
                  <td style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    border: '1px solid #d1d5db',
                    color: app.status === 'Approved' ? '#10b981' : '#f59e0b',
                    fontWeight: 'bold'
                  }}>
                    {app.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={() => alert('Application form will open...')}
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
              Apply for New Examination
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentExamination;

