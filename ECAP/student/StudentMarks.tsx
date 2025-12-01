import React from 'react';

const StudentMarks: React.FC = () => {
  // Mock marks data
  const marksData = [
    { subject: 'Compiler Design', code: 'CD', internal: 28, external: 45, total: 73, grade: 'A', credits: 3 },
    { subject: 'Computer Networks', code: 'CN', internal: 30, external: 48, total: 78, grade: 'A+', credits: 3 },
    { subject: 'Operating Systems & System Architecture', code: 'OSSA', internal: 29, external: 47, total: 76, grade: 'A+', credits: 3 },
    { subject: 'Fundamentals Of Design Thinking', code: 'FDT', internal: 27, external: 44, total: 71, grade: 'A', credits: 2 },
    { subject: 'Constitution Of India', code: 'COI', internal: 25, external: 40, total: 65, grade: 'B+', credits: 1 },
    { subject: 'Advanced Data Structures Through C', code: 'ADSC', internal: 28, external: 46, total: 74, grade: 'A', credits: 3 },
    { subject: 'Cloud Computing Techniques', code: 'CCT', internal: 29, external: 45, total: 74, grade: 'A', credits: 3 },
    { subject: 'Data Science Lab', code: 'DSL', internal: 28, external: 0, total: 28, grade: 'A', credits: 2 },
    { subject: 'Computer Networks And Operating Systems Lab', code: 'CNOSL', internal: 29, external: 0, total: 29, grade: 'A+', credits: 2 },
  ];

  const totalCredits = marksData.reduce((sum, item) => sum + item.credits, 0);
  const totalPoints = marksData.reduce((sum, item) => {
    const gradePoints: Record<string, number> = { 'A+': 10, 'A': 9, 'B+': 8, 'B': 7, 'C+': 6, 'C': 5, 'D': 4, 'F': 0 };
    return sum + (gradePoints[item.grade] || 0) * item.credits;
  }, 0);
  const sgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';

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
        Marks & Grades
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
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Subject Code</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Subject Name</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Internal</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>External</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Total</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Grade</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Credits</th>
            </tr>
          </thead>
          <tbody>
            {marksData.map((item, index) => (
              <tr 
                key={index}
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                }}
              >
                <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                  {item.code}
                </td>
                <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                  {item.subject}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {item.internal}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {item.external}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                  {item.total}
                </td>
                <td style={{ 
                  padding: '10px', 
                  textAlign: 'center', 
                  border: '1px solid #d1d5db',
                  color: item.grade === 'A+' ? '#10b981' : item.grade === 'A' ? '#3b82f6' : '#f59e0b',
                  fontWeight: 'bold'
                }}>
                  {item.grade}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {item.credits}
                </td>
              </tr>
            ))}
            <tr style={{ backgroundColor: '#dbeafe', fontWeight: 'bold' }}>
              <td colSpan={6} style={{ padding: '10px', textAlign: 'right', border: '1px solid #d1d5db' }}>
                Total Credits / SGPA
              </td>
              <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                {totalCredits} / {sgpa}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontSize: '11px', color: '#1e40af' }}>
          <strong>Note:</strong> You can view your marks and grades here. For any discrepancies, please contact the examination branch.
        </p>
      </div>
    </div>
  );
};

export default StudentMarks;

