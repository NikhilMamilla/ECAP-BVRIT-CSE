import React from 'react';

const AcademicCalendar: React.FC = () => {
  // Mock calendar data - replace with actual API data
  const calendarEvents = [
    { date: '2024-01-15', event: 'Semester Begins', type: 'academic' },
    { date: '2024-02-10', event: 'Mid-Term Examinations', type: 'exam' },
    { date: '2024-02-15', event: 'Mid-Term Examinations End', type: 'exam' },
    { date: '2024-03-20', event: 'Holiday - Holi', type: 'holiday' },
    { date: '2024-04-15', event: 'End Semester Examinations Begin', type: 'exam' },
    { date: '2024-05-01', event: 'End Semester Examinations End', type: 'exam' },
    { date: '2024-05-15', event: 'Semester Ends', type: 'academic' },
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
        Academic Calendar
      </h2>

      <div style={{ marginTop: '20px' }}>
        <table 
          border={1} 
          cellPadding={8} 
          cellSpacing={0} 
          style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            border: '1px solid #d1d5db'
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#2563eb', color: '#ffffff' }}>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af' }}>Date</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af' }}>Event</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af' }}>Type</th>
            </tr>
          </thead>
          <tbody>
            {calendarEvents.map((event, index) => (
              <tr 
                key={index}
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                }}
              >
                <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </td>
                <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                  {event.event}
                </td>
                <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    backgroundColor: event.type === 'exam' ? '#fee2e2' : event.type === 'holiday' ? '#fef3c7' : '#dbeafe',
                    color: event.type === 'exam' ? '#991b1b' : event.type === 'holiday' ? '#92400e' : '#1e40af'
                  }}>
                    {event.type.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontSize: '11px', color: '#1e40af' }}>
          <strong>Note:</strong> This calendar is subject to change. Please check regularly for updates.
        </p>
      </div>
    </div>
  );
};

export default AcademicCalendar;

