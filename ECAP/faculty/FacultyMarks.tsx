import React, { useState } from 'react';

const FacultyMarks: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('CD');
  const [examType, setExamType] = useState('internal');
  const [marksData, setMarksData] = useState<Record<string, number>>({});

  // Mock student list
  const students = [
    { rollNo: '23211A05M7', name: 'MAMILLA NIKHIL' },
    { rollNo: '23211A05M8', name: 'RAJESH KUMAR' },
    { rollNo: '23211A05M9', name: 'PRIYA SHARMA' },
    { rollNo: '23211A05M0', name: 'AMIT SINGH' },
    { rollNo: '23211A05M1', name: 'SITA DEVI' },
  ];

  // Mock subjects
  const subjects = [
    { code: 'CD', name: 'Compiler Design', maxInternal: 30, maxExternal: 70 },
    { code: 'CN', name: 'Computer Networks', maxInternal: 30, maxExternal: 70 },
    { code: 'OSSA', name: 'Operating Systems & System Architecture', maxInternal: 30, maxExternal: 70 },
  ];

  const handleMarksChange = (rollNo: string, marks: number) => {
    const maxMarks = examType === 'internal' 
      ? subjects.find(s => s.code === selectedSubject)?.maxInternal || 30
      : subjects.find(s => s.code === selectedSubject)?.maxExternal || 70;
    
    if (marks <= maxMarks && marks >= 0) {
      setMarksData({ ...marksData, [rollNo]: marks });
    }
  };

  const handleSubmit = () => {
    const enteredCount = Object.keys(marksData).length;
    alert(`Marks updated successfully for ${enteredCount} students!`);
    setMarksData({});
  };

  // Mock marks view data
  const marksView = [
    { rollNo: '23211A05M7', name: 'MAMILLA NIKHIL', internal: 28, external: 45, total: 73, grade: 'A' },
    { rollNo: '23211A05M8', name: 'RAJESH KUMAR', internal: 30, external: 48, total: 78, grade: 'A+' },
    { rollNo: '23211A05M9', name: 'PRIYA SHARMA', internal: 29, external: 50, total: 79, grade: 'A+' },
    { rollNo: '23211A05M0', name: 'AMIT SINGH', internal: 27, external: 46, total: 73, grade: 'A' },
    { rollNo: '23211A05M1', name: 'SITA DEVI', internal: 28, external: 47, total: 75, grade: 'A' },
  ];

  const [activeTab, setActiveTab] = useState<'update' | 'view'>('update');
  const selectedSubjectData = subjects.find(s => s.code === selectedSubject);
  const maxMarks = examType === 'internal' ? selectedSubjectData?.maxInternal || 30 : selectedSubjectData?.maxExternal || 70;

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
        Marks & Grades Management
      </h2>

      {/* Tabs */}
      <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', gap: '5px', borderBottom: '2px solid #e5e7eb' }}>
        <button
          onClick={() => setActiveTab('update')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'update' ? '#2563eb' : '#f3f4f6',
            color: activeTab === 'update' ? '#ffffff' : '#000',
            border: '1px solid #d1d5db',
            borderBottom: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: activeTab === 'update' ? 'bold' : 'normal'
          }}
        >
          Update Marks
        </button>
        <button
          onClick={() => setActiveTab('view')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'view' ? '#2563eb' : '#f3f4f6',
            color: activeTab === 'view' ? '#ffffff' : '#000',
            border: '1px solid #d1d5db',
            borderBottom: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: activeTab === 'view' ? 'bold' : 'normal'
          }}
        >
          View All Marks
        </button>
      </div>

      {/* Update Marks Tab */}
      {activeTab === 'update' && (
        <div>
          <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Select Subject *</label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}
                >
                  {subjects.map((sub) => (
                    <option key={sub.code} value={sub.code}>{sub.code} - {sub.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Exam Type *</label>
                <select
                  value={examType}
                  onChange={(e) => setExamType(e.target.value as 'internal' | 'external')}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}
                >
                  <option value="internal">Internal (Max: {selectedSubjectData?.maxInternal})</option>
                  <option value="external">External (Max: {selectedSubjectData?.maxExternal})</option>
                </select>
              </div>
            </div>
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
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Roll No</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Student Name</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Marks (Max: {maxMarks})</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.rollNo} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{student.rollNo}</td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>{student.name}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <input
                      type="number"
                      min="0"
                      max={maxMarks}
                      value={marksData[student.rollNo] || ''}
                      onChange={(e) => handleMarksChange(student.rollNo, parseInt(e.target.value) || 0)}
                      placeholder="Enter marks"
                      style={{
                        width: '100px',
                        padding: '6px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '12px',
                        textAlign: 'center'
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <button
              onClick={handleSubmit}
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
              Submit Marks
            </button>
          </div>
        </div>
      )}

      {/* View All Marks Tab */}
      {activeTab === 'view' && (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Select Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              style={{
                width: '300px',
                padding: '8px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '12px'
              }}
            >
              {subjects.map((sub) => (
                <option key={sub.code} value={sub.code}>{sub.code} - {sub.name}</option>
              ))}
            </select>
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
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Roll No</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Student Name</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Internal</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>External</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Total</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Grade</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {marksView.map((student, index) => {
                const gradeColor = student.grade === 'A+' ? '#10b981' : student.grade === 'A' ? '#3b82f6' : '#f59e0b';
                return (
                  <tr key={student.rollNo} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                    <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{student.rollNo}</td>
                    <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>{student.name}</td>
                    <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>{student.internal}</td>
                    <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>{student.external}</td>
                    <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{student.total}</td>
                    <td style={{ 
                      padding: '10px', 
                      textAlign: 'center', 
                      border: '1px solid #d1d5db',
                      color: gradeColor,
                      fontWeight: 'bold'
                    }}>
                      {student.grade}
                    </td>
                    <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                      <button
                        onClick={() => alert(`Editing marks for ${student.name}`)}
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
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FacultyMarks;
