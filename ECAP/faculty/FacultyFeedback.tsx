import React, { useState } from 'react';

const FacultyFeedback: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('CD');
  const [activeTab, setActiveTab] = useState<'summary' | 'respond'>('summary');

  // Mock feedback summary
  const feedbackSummary = [
    { subject: 'Compiler Design', totalResponses: 45, avgRating: 4.2, excellent: 20, good: 15, average: 8, poor: 2 },
    { subject: 'Computer Networks', totalResponses: 42, avgRating: 4.5, excellent: 25, good: 12, average: 4, poor: 1 },
    { subject: 'Operating Systems', totalResponses: 40, avgRating: 4.0, excellent: 18, good: 15, average: 6, poor: 1 },
  ];

  // Mock individual feedbacks
  const individualFeedbacks = [
    { id: 1, student: 'MAMILLA NIKHIL (23211A05M7)', subject: 'Compiler Design', rating: 4, comment: 'Good teaching, but need more examples', date: '2024-01-20', responded: false },
    { id: 2, student: 'RAJESH KUMAR (23211A05M8)', subject: 'Computer Networks', rating: 5, comment: 'Excellent explanation of concepts', date: '2024-01-22', responded: true },
    { id: 3, student: 'PRIYA SHARMA (23211A05M9)', subject: 'Operating Systems', rating: 3, comment: 'Could improve pace of teaching', date: '2024-01-25', responded: false },
  ];

  const subjects = ['CD', 'CN', 'OSSA', 'FDT', 'COI', 'ADSC', 'CCT'];

  const handleRespond = (id: number) => {
    alert('Response form will open...');
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
        Feedback Management
      </h2>

      {/* Tabs */}
      <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', gap: '5px', borderBottom: '2px solid #e5e7eb' }}>
        <button
          onClick={() => setActiveTab('summary')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'summary' ? '#2563eb' : '#f3f4f6',
            color: activeTab === 'summary' ? '#ffffff' : '#000',
            border: '1px solid #d1d5db',
            borderBottom: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: activeTab === 'summary' ? 'bold' : 'normal'
          }}
        >
          View Summary
        </button>
        <button
          onClick={() => setActiveTab('respond')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'respond' ? '#2563eb' : '#f3f4f6',
            color: activeTab === 'respond' ? '#ffffff' : '#000',
            border: '1px solid #d1d5db',
            borderBottom: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: activeTab === 'respond' ? 'bold' : 'normal'
          }}
        >
          Respond to Feedback
        </button>
      </div>

      {/* Summary Tab */}
      {activeTab === 'summary' && (
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
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
            {feedbackSummary.map((feedback, index) => (
              <div
                key={index}
                style={{
                  padding: '20px',
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '4px'
                }}
              >
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', color: '#1e40af' }}>
                  {feedback.subject}
                </h3>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Total Responses:</strong> {feedback.totalResponses}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Average Rating:</strong> 
                  <span style={{ color: '#2563eb', fontWeight: 'bold', marginLeft: '10px' }}>
                    {feedback.avgRating.toFixed(1)} / 5.0
                  </span>
                </div>
                <div style={{ fontSize: '11px', color: '#6b7280' }}>
                  <div>Excellent (5): {feedback.excellent}</div>
                  <div>Good (4): {feedback.good}</div>
                  <div>Average (3): {feedback.average}</div>
                  <div>Poor (1-2): {feedback.poor}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Respond Tab */}
      {activeTab === 'respond' && (
        <div>
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
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Student</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Subject</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Rating</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Comment</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {individualFeedbacks.map((feedback, index) => (
                <tr 
                  key={feedback.id}
                  style={{ 
                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                  }}
                >
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                    {feedback.student}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                    {feedback.subject}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', maxWidth: '300px' }}>
                    {feedback.comment}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(feedback.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    border: '1px solid #d1d5db',
                    color: feedback.responded ? '#10b981' : '#f59e0b',
                    fontWeight: 'bold'
                  }}>
                    {feedback.responded ? 'Responded' : 'Pending'}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {!feedback.responded && (
                      <button
                        onClick={() => handleRespond(feedback.id)}
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
                        Respond
                      </button>
                    )}
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

export default FacultyFeedback;
