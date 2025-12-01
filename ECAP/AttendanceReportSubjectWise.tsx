import React, { useState } from 'react';

const AttendanceReportSubjectWise: React.FC = () => {
  // Mock attendance data - replace with actual API data
  const [attendanceData] = useState([
    { slNo: 1, subCode: 'CD', subjectName: 'Compiler Design', facultyName: 'MASTAN MOHAMMED', held: 60, present: 37, percentage: 61.67 },
    { slNo: 2, subCode: 'CN', subjectName: 'Computer Networks', facultyName: 'MRS GADDAM RAMANI', held: 75, present: 67, percentage: 89.33 },
    { slNo: 3, subCode: 'OSSA', subjectName: 'Operating Systems & System Architecture', facultyName: 'CH. SREEDEVI', held: 80, present: 70, percentage: 87.50 },
    { slNo: 4, subCode: 'FDT', subjectName: 'Fundamentals Of Design Thinking', facultyName: 'MANIKANDAN J', held: 60, present: 52, percentage: 86.67 },
    { slNo: 5, subCode: 'COI', subjectName: 'Constitution Of India', facultyName: 'MAHALAKSHMI K V', held: 23, present: 12, percentage: 52.17 },
    { slNo: 6, subCode: 'ADSC', subjectName: 'Advanced Data Structures Through C', facultyName: 'T SUBBAREDDY', held: 60, present: 52, percentage: 86.67 },
    { slNo: 7, subCode: 'CCT', subjectName: 'Cloud Computing Techniques', facultyName: 'PRATHYUSHA G', held: 70, present: 61, percentage: 87.14 },
    { slNo: 8, subCode: 'DSL', subjectName: 'Data Science Lab', facultyName: 'NIROSHA V', held: 30, present: 26, percentage: 86.67 },
    { slNo: 9, subCode: 'CNOSL', subjectName: 'Computer Networks And Operating Systems Lab', facultyName: 'SRIVIDYA YENUMULA', held: 30, present: 26, percentage: 86.67 },
    { slNo: 10, subCode: 'CC', subjectName: 'Coding Classes', facultyName: 'MANIKANDAN J', held: 30, present: 22, percentage: 73.33 },
    { slNo: 11, subCode: 'LIB', subjectName: 'LIBRARY', facultyName: '-', held: 0, present: 0, percentage: 0.00 },
    { slNo: 12, subCode: 'COUN', subjectName: 'COUNSELLING', facultyName: '-', held: 0, present: 0, percentage: 0.00 },
    { slNo: 13, subCode: 'SPO', subjectName: 'SPORTS', facultyName: '-', held: 0, present: 0, percentage: 0.00 },
  ]);

  const totalHeld = attendanceData.reduce((sum, item) => sum + item.held, 0);
  const totalPresent = attendanceData.reduce((sum, item) => sum + item.present, 0);
  const totalPercentage = totalHeld > 0 ? ((totalPresent / totalHeld) * 100).toFixed(2) : '0.00';

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 75) return '#10b981'; // green
    if (percentage >= 65) return '#f59e0b'; // orange
    return '#ef4444'; // red
  };

  return (
    <div style={{ fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif', fontSize: '12px' }}>
      {/* Table */}
      <h3 style={{ 
        color: '#1e40af', 
        fontSize: '16px', 
        fontWeight: 'bold', 
        marginBottom: '10px',
        marginTop: '10px'
      }}>
        Attendance Report - Subject Wise
      </h3>

      <table 
        border={1} 
        cellPadding={5} 
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
            <th style={{ padding: '8px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Sl.No.</th>
            <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Sub Short Code</th>
            <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Subject Name</th>
            <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Faculty Name</th>
            <th style={{ padding: '8px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Held</th>
            <th style={{ padding: '8px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Present</th>
            <th style={{ padding: '8px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>%</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((item, index) => {
            const percentageColor = getPercentageColor(item.percentage);
            return (
              <tr 
                key={index}
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                }}
              >
                <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {item.slNo}
                </td>
                <td style={{ padding: '8px', textAlign: 'left', border: '1px solid #d1d5db' }}>
                  {item.subCode}
                </td>
                <td style={{ padding: '8px', textAlign: 'left', border: '1px solid #d1d5db' }}>
                  {item.subjectName}
                </td>
                <td style={{ padding: '8px', textAlign: 'left', border: '1px solid #d1d5db' }}>
                  {item.facultyName}
                </td>
                <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {item.held}
                </td>
                <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {item.present}
                </td>
                <td style={{ 
                  padding: '8px', 
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
          {/* Total Row */}
          <tr style={{ backgroundColor: '#dbeafe', fontWeight: 'bold' }}>
            <td colSpan={4} style={{ padding: '8px', textAlign: 'right', border: '1px solid #d1d5db' }}>
              TOTAL
            </td>
            <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #d1d5db' }}>
              {totalHeld}
            </td>
            <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #d1d5db' }}>
              {totalPresent}
            </td>
            <td style={{ 
              padding: '8px', 
              textAlign: 'center', 
              border: '1px solid #d1d5db',
              color: getPercentageColor(parseFloat(totalPercentage)),
              fontWeight: 'bold'
            }}>
              {totalPercentage}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceReportSubjectWise;

