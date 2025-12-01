import React from 'react';

const DayWiseAttendance: React.FC = () => {
  // Mock day-wise attendance data
  const dayWiseData = [
    { date: '2024-01-15', day: 'Monday', status: 'Present', subjects: ['CD', 'CN', 'OSSA', 'FDT'] },
    { date: '2024-01-16', day: 'Tuesday', status: 'Present', subjects: ['COI', 'ADSC', 'CCT', 'DSL'] },
    { date: '2024-01-17', day: 'Wednesday', status: 'Absent', subjects: ['CD', 'CN'] },
    { date: '2024-01-18', day: 'Thursday', status: 'Late', subjects: ['OSSA', 'FDT', 'COI'] },
    { date: '2024-01-19', day: 'Friday', status: 'Present', subjects: ['ADSC', 'CCT', 'DSL', 'CNOSL'] },
    { date: '2024-01-22', day: 'Monday', status: 'Present', subjects: ['CD', 'CN', 'OSSA', 'FDT'] },
    { date: '2024-01-23', day: 'Tuesday', status: 'Present', subjects: ['COI', 'ADSC', 'CCT', 'DSL'] },
    { date: '2024-01-24', day: 'Wednesday', status: 'Present', subjects: ['CD', 'CN', 'OSSA'] },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Present': return '#10b981';
      case 'Absent': return '#ef4444';
      case 'Late': return '#f59e0b';
      default: return '#6b7280';
    }
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
        Day Wise Attendance Report
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
            <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Subjects</th>
          </tr>
        </thead>
        <tbody>
          {dayWiseData.map((item, index) => {
            const statusColor = getStatusColor(item.status);
            return (
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
                <td style={{ 
                  padding: '10px', 
                  textAlign: 'center', 
                  border: '1px solid #d1d5db',
                  color: statusColor,
                  fontWeight: 'bold'
                }}>
                  {item.status}
                </td>
                <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                  {item.subjects.join(', ')}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ marginTop: '15px', display: 'flex', gap: '15px', fontSize: '11px' }}>
        <div style={{ padding: '10px', backgroundColor: '#d1fae5', border: '1px solid #10b981', borderRadius: '4px', flex: 1 }}>
          <strong style={{ color: '#065f46' }}>Total Present Days:</strong> {dayWiseData.filter(d => d.status === 'Present').length}
        </div>
        <div style={{ padding: '10px', backgroundColor: '#fee2e2', border: '1px solid #ef4444', borderRadius: '4px', flex: 1 }}>
          <strong style={{ color: '#991b1b' }}>Total Absent Days:</strong> {dayWiseData.filter(d => d.status === 'Absent').length}
        </div>
        <div style={{ padding: '10px', backgroundColor: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '4px', flex: 1 }}>
          <strong style={{ color: '#92400e' }}>Total Late Days:</strong> {dayWiseData.filter(d => d.status === 'Late').length}
        </div>
      </div>
    </div>
  );
};

export default DayWiseAttendance;

