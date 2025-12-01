import React, { useState } from 'react';

const FacultyExamination: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'marks' | 'info'>('marks');
  const [selectedSubject, setSelectedSubject] = useState('CD');
  const [selectedExam, setSelectedExam] = useState('midterm');
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
  const subjects = ['CD', 'CN', 'OSSA', 'FDT', 'COI', 'ADSC', 'CCT'];
  const examTypes = [
    { value: 'midterm', label: 'Mid-Term Examination', maxMarks: 50 },
    { value: 'internal1', label: 'Internal Assessment 1', maxMarks: 30 },
    { value: 'internal2', label: 'Internal Assessment 2', maxMarks: 30 },
    { value: 'endsem', label: 'End Semester Examination', maxMarks: 70 },
  ];

  const selectedExamData = examTypes.find(e => e.value === selectedExam);

  const handleMarksChange = (rollNo: string, marks: number) => {
    const maxMarks = selectedExamData?.maxMarks || 50;
    if (marks <= maxMarks && marks >= 0) {
      setMarksData({ ...marksData, [rollNo]: marks });
    }
  };

  const handleSubmit = () => {
    const enteredCount = Object.keys(marksData).length;
    alert(`Examination marks updated successfully for ${enteredCount} students!`);
    setMarksData({});
  };

  // Mock examination info
  const examInfo = [
    { exam: 'Mid-Term Examinations', date: '2024-02-10', duration: '3 hours', subjects: ['CD', 'CN', 'OSSA'], status: 'Scheduled' },
    { exam: 'End Semester Examinations', date: '2024-04-15', duration: '3 hours', subjects: ['All Subjects'], status: 'Scheduled' },
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
        Examination Management
      </h2>

      {/* Tabs */}
      <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', gap: '5px', borderBottom: '2px solid #e5e7eb' }}>
        <button
          onClick={() => setActiveTab('marks')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'marks' ? '#2563eb' : '#f3f4f6',
            color: activeTab === 'marks' ? '#ffffff' : '#000',
            border: '1px solid #d1d5db',
            borderBottom: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: activeTab === 'marks' ? 'bold' : 'normal'
          }}
        >
          Update Marks
        </button>
        <button
          onClick={() => setActiveTab('info')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'info' ? '#2563eb' : '#f3f4f6',
            color: activeTab === 'info' ? '#ffffff' : '#000',
            border: '1px solid #d1d5db',
            borderBottom: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: activeTab === 'info' ? 'bold' : 'normal'
          }}
        >
          Examination Info
        </button>
      </div>

      {/* Update Marks Tab */}
      {activeTab === 'marks' && (
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
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Exam Type *</label>
                <select
                  value={selectedExam}
                  onChange={(e) => setSelectedExam(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}
                >
                  {examTypes.map((exam) => (
                    <option key={exam.value} value={exam.value}>{exam.label} (Max: {exam.maxMarks})</option>
                  ))}
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
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Marks (Max: {selectedExamData?.maxMarks})</th>
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
                      max={selectedExamData?.maxMarks || 50}
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

      {/* Examination Info Tab */}
      {activeTab === 'info' && (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => alert('Create new examination schedule...')}
              style={{
                padding: '10px 20px',
                backgroundColor: '#10b981',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            >
              Create Examination Schedule
            </button>
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
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Examination</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Duration</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Subjects</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {examInfo.map((exam, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{exam.exam}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(exam.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>{exam.duration}</td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>{exam.subjects.join(', ')}</td>
                  <td style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    border: '1px solid #d1d5db',
                    color: '#10b981',
                    fontWeight: 'bold'
                  }}>
                    {exam.status}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <button
                      onClick={() => alert('Editing examination info...')}
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FacultyExamination;
