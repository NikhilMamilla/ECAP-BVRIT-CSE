import React from 'react';

const StudentRegulations: React.FC = () => {
  // Mock regulations data
  const regulations = [
    { id: 1, title: 'Academic Regulations 2024', category: 'Academic', lastUpdated: '2024-01-01', downloadLink: '#' },
    { id: 2, title: 'Examination Regulations', category: 'Examination', lastUpdated: '2024-01-15', downloadLink: '#' },
    { id: 3, title: 'Attendance Policy', category: 'Academic', lastUpdated: '2024-01-20', downloadLink: '#' },
    { id: 4, title: 'Disciplinary Rules', category: 'General', lastUpdated: '2024-02-01', downloadLink: '#' },
    { id: 5, title: 'Fee Structure 2024', category: 'Financial', lastUpdated: '2024-01-10', downloadLink: '#' },
    { id: 6, title: 'Hostel Regulations', category: 'Hostel', lastUpdated: '2024-01-25', downloadLink: '#' },
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
        Regulations
      </h2>

      <div style={{ marginTop: '20px' }}>
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
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Category</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Last Updated</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {regulations.map((regulation, index) => (
              <tr 
                key={regulation.id}
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                }}
              >
                <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                  {regulation.title}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af'
                  }}>
                    {regulation.category}
                  </span>
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {new Date(regulation.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  <button
                    onClick={() => alert('Downloading regulation document...')}
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
                    View/Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontSize: '11px', color: '#1e40af' }}>
          <strong>Note:</strong> You can view and download all college regulations. Please read them carefully and ensure compliance.
        </p>
      </div>
    </div>
  );
};

export default StudentRegulations;

