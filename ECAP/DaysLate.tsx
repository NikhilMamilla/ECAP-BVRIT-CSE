import React from 'react';

const DaysLate: React.FC = () => {
  // Mock late days data
  const lateDays = [
    { date: '2024-01-10', day: 'Wednesday', subject: 'Compiler Design', time: '09:15 AM' },
    { date: '2024-01-22', day: 'Monday', subject: 'Computer Networks', time: '09:20 AM' },
    { date: '2024-02-08', day: 'Thursday', subject: 'Operating Systems', time: '09:10 AM' },
    { date: '2024-02-20', day: 'Tuesday', subject: 'Data Science Lab', time: '09:25 AM' },
    { date: '2024-03-05', day: 'Tuesday', subject: 'Cloud Computing', time: '09:18 AM' },
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
        Days Late Report
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
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Time</th>
          </tr>
        </thead>
        <tbody>
          {lateDays.length > 0 ? (
            lateDays.map((item, index) => (
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
                <td style={{ padding: '10px', border: '1px solid #d1d5db', color: '#f59e0b', fontWeight: 'bold' }}>
                  {item.time}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ padding: '20px', textAlign: 'center', border: '1px solid #d1d5db', color: '#6b7280' }}>
                No late days recorded
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontSize: '11px', color: '#92400e' }}>
          <strong>Total Late Days:</strong> {lateDays.length}
        </p>
      </div>
    </div>
  );
};

export default DaysLate;

