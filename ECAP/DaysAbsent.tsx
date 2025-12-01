import React from 'react';

const DaysAbsent: React.FC = () => {
  // Mock absent days data
  const absentDays = [
    { date: '2024-01-15', day: 'Monday', subject: 'Compiler Design', reason: 'Medical' },
    { date: '2024-01-18', day: 'Thursday', subject: 'Computer Networks', reason: 'Personal' },
    { date: '2024-02-05', day: 'Monday', subject: 'Operating Systems', reason: 'Medical' },
    { date: '2024-02-12', day: 'Monday', subject: 'Constitution Of India', reason: 'Personal' },
    { date: '2024-03-10', day: 'Sunday', subject: 'Data Science Lab', reason: 'Medical' },
  ];

  return (
    <div style={{ fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif', fontSize: '12px' }}>
      <h3 style={{ 
        color: '#1e40af', 
        fontSize: '16px', 
        fontWeight: 'bold', 
        marginBottom: '10px',
        marginTop: '10px'
      }}>
        Days Absent Report
      </h3>

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
            <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Sl.No.</th>
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Date</th>
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Day</th>
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Subject</th>
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Reason</th>
          </tr>
        </thead>
        <tbody>
          {absentDays.length > 0 ? (
            absentDays.map((item, index) => (
              <tr 
                key={index}
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                }}
              >
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {index + 1}
                </td>
                <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                  {new Date(item.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </td>
                <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                  {item.day}
                </td>
                <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                  {item.subject}
                </td>
                <td style={{ padding: '10px', border: '1px solid #d1d5db', color: '#ef4444', fontWeight: 'bold' }}>
                  {item.reason}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ padding: '20px', textAlign: 'center', border: '1px solid #d1d5db', color: '#6b7280' }}>
                No absent days recorded
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontSize: '11px', color: '#991b1b' }}>
          <strong>Total Absent Days:</strong> {absentDays.length}
        </p>
      </div>
    </div>
  );
};

export default DaysAbsent;

