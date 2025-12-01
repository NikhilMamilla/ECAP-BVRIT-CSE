import React, { useState } from 'react';

const StudentFeedback: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');

  // Mock feedback history
  const feedbackHistory = [
    { id: 1, subject: 'Compiler Design', faculty: 'MASTAN MOHAMMED', submittedDate: '2024-01-20', status: 'Submitted', rating: 4 },
    { id: 2, subject: 'Computer Networks', faculty: 'MRS GADDAM RAMANI', submittedDate: '2024-01-25', status: 'Submitted', rating: 5 },
    { id: 3, subject: 'Operating Systems', faculty: 'CH. SREEDEVI', submittedDate: '2024-02-01', status: 'Submitted', rating: 4 },
  ];

  const subjects = [
    'Compiler Design',
    'Computer Networks',
    'Operating Systems & System Architecture',
    'Fundamentals Of Design Thinking',
    'Constitution Of India',
    'Advanced Data Structures Through C',
    'Cloud Computing Techniques'
  ];

  const handleSubmit = () => {
    if (selectedSubject && rating > 0) {
      alert('Feedback submitted successfully!');
      setSelectedSubject('');
      setRating(0);
      setComments('');
    } else {
      alert('Please fill all required fields');
    }
  };

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
        Feedback
      </h2>

      {/* Submit Feedback Form */}
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', color: '#1e40af' }}>
          Submit New Feedback
        </h3>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Subject *</label>
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
            <option value="">Select Subject</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Rating *</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                style={{
                  fontSize: '24px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: star <= rating ? '#fbbf24' : '#d1d5db'
                }}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows={4}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif'
            }}
            placeholder="Enter your feedback comments..."
          />
        </div>

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
          Submit Feedback
        </button>
      </div>

      {/* Feedback History */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', color: '#1e40af' }}>
          Feedback History
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
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Subject</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Faculty</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Rating</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Submitted Date</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {feedbackHistory.map((feedback, index) => (
              <tr 
                key={feedback.id}
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                }}
              >
                <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                  {feedback.subject}
                </td>
                <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                  {feedback.faculty}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {new Date(feedback.submittedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </td>
                <td style={{ 
                  padding: '10px', 
                  textAlign: 'center', 
                  border: '1px solid #d1d5db',
                  color: '#10b981',
                  fontWeight: 'bold'
                }}>
                  {feedback.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentFeedback;

