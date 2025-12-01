import React from 'react';

const MonthlyAttendance: React.FC = () => {
  // Mock monthly attendance data
  const monthlyData = [
    { month: 'January 2024', totalDays: 22, present: 18, absent: 4, percentage: 81.82 },
    { month: 'February 2024', totalDays: 20, present: 17, absent: 3, percentage: 85.00 },
    { month: 'March 2024', totalDays: 21, present: 19, absent: 2, percentage: 90.48 },
    { month: 'April 2024', totalDays: 22, present: 20, absent: 2, percentage: 90.91 },
  ];

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 75) return '#10b981';
    if (percentage >= 65) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div style={{ fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif', fontSize: '12px' }}>
      <h3 style={{ 
        color: '#1e40af', 
        fontSize: '16px', 
        fontWeight: 'bold', 
        marginBottom: '10px',
        marginTop: '10px'
      }}>
        Monthly Attendance Report
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
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Month</th>
            <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Total Days</th>
            <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Present</th>
            <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Absent</th>
            <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Attendance %</th>
          </tr>
        </thead>
        <tbody>
          {monthlyData.map((item, index) => {
            const percentageColor = getPercentageColor(item.percentage);
            return (
              <tr 
                key={index}
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                }}
              >
                <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                  {item.month}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {item.totalDays}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db', color: '#10b981', fontWeight: 'bold' }}>
                  {item.present}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db', color: '#ef4444', fontWeight: 'bold' }}>
                  {item.absent}
                </td>
                <td style={{ 
                  padding: '10px', 
                  textAlign: 'center', 
                  border: '1px solid #d1d5db',
                  color: percentageColor,
                  fontWeight: 'bold'
                }}>
                  {item.percentage.toFixed(2)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyAttendance;

