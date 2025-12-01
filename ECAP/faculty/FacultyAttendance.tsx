import React, { useState } from 'react';

const FacultyAttendance: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('CD');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendanceData, setAttendanceData] = useState<Record<string, 'present' | 'absent'>>({});

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
    { code: 'CD', name: 'Compiler Design' },
    { code: 'CN', name: 'Computer Networks' },
    { code: 'OSSA', name: 'Operating Systems & System Architecture' },
    { code: 'FDT', name: 'Fundamentals Of Design Thinking' },
  ];

  const handleAttendanceChange = (rollNo: string, status: 'present' | 'absent') => {
    setAttendanceData({ ...attendanceData, [rollNo]: status });
  };

  const handleSubmit = () => {
    const presentCount = Object.values(attendanceData).filter(s => s === 'present').length;
    const absentCount = Object.values(attendanceData).filter(s => s === 'absent').length;
    alert(`Attendance marked successfully!\nPresent: ${presentCount}\nAbsent: ${absentCount}`);
    setAttendanceData({});
  };

  // Mock attendance view data
  const attendanceView = [
    { rollNo: '23211A05M7', name: 'MAMILLA NIKHIL', totalClasses: 60, present: 37, absent: 23, percentage: 61.67 },
    { rollNo: '23211A05M8', name: 'RAJESH KUMAR', totalClasses: 60, present: 52, absent: 8, percentage: 86.67 },
    { rollNo: '23211A05M9', name: 'PRIYA SHARMA', totalClasses: 60, present: 55, absent: 5, percentage: 91.67 },
    { rollNo: '23211A05M0', name: 'AMIT SINGH', totalClasses: 60, present: 48, absent: 12, percentage: 80.00 },
    { rollNo: '23211A05M1', name: 'SITA DEVI', totalClasses: 60, present: 50, absent: 10, percentage: 83.33 },
  ];

  const [activeTab, setActiveTab] = useState<'mark' | 'view'>('mark');

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
        Attendance Management
      </h2>

      {/* Tabs */}
      <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', gap: '5px', borderBottom: '2px solid #e5e7eb' }}>
        <button
          onClick={() => setActiveTab('mark')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'mark' ? '#2563eb' : '#f3f4f6',
            color: activeTab === 'mark' ? '#ffffff' : '#000',
            border: '1px solid #d1d5db',
            borderBottom: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: activeTab === 'mark' ? 'bold' : 'normal'
          }}
        >
          Mark Attendance
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
          View All Attendance
        </button>
      </div>

      {/* Mark Attendance Tab */}
      {activeTab === 'mark' && (
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
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Date *</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}
                />
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
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.rollNo} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{student.rollNo}</td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>{student.name}</td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                      <button
                        onClick={() => handleAttendanceChange(student.rollNo, 'present')}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: attendanceData[student.rollNo] === 'present' ? '#10b981' : '#f3f4f6',
                          color: attendanceData[student.rollNo] === 'present' ? '#ffffff' : '#000',
                          border: '1px solid #d1d5db',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '11px',
                          fontWeight: 'bold'
                        }}
                      >
                        Present
                      </button>
                      <button
                        onClick={() => handleAttendanceChange(student.rollNo, 'absent')}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: attendanceData[student.rollNo] === 'absent' ? '#ef4444' : '#f3f4f6',
                          color: attendanceData[student.rollNo] === 'absent' ? '#ffffff' : '#000',
                          border: '1px solid #d1d5db',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '11px',
                          fontWeight: 'bold'
                        }}
                      >
                        Absent
                      </button>
                    </div>
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
              Submit Attendance
            </button>
          </div>
        </div>
      )}

      {/* View All Attendance Tab */}
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
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Total Classes</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Present</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Absent</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Percentage</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {attendanceView.map((student, index) => {
                const percentageColor = student.percentage >= 75 ? '#10b981' : student.percentage >= 65 ? '#f59e0b' : '#ef4444';
                return (
                  <tr key={student.rollNo} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                    <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>{student.rollNo}</td>
                    <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>{student.name}</td>
                    <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>{student.totalClasses}</td>
                    <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db', color: '#10b981', fontWeight: 'bold' }}>{student.present}</td>
                    <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db', color: '#ef4444', fontWeight: 'bold' }}>{student.absent}</td>
                    <td style={{ 
                      padding: '10px', 
                      textAlign: 'center', 
                      border: '1px solid #d1d5db',
                      color: percentageColor,
                      fontWeight: 'bold'
                    }}>
                      {student.percentage.toFixed(2)}%
                    </td>
                    <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                      <button
                        onClick={() => alert(`Viewing detailed attendance for ${student.name}`)}
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
                        View Details
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

export default FacultyAttendance;
