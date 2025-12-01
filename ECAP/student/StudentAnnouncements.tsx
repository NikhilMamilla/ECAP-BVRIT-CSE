import React from 'react';

const StudentAnnouncements: React.FC = () => {
  // Mock announcements data
  const announcements = [
    { id: 1, title: 'Mid-Term Examination Schedule Released', category: 'Examination', date: '2024-02-01', priority: 'high', author: 'Examination Branch' },
    { id: 2, title: 'Tech Fest 2024 Registration Open', category: 'Events', date: '2024-02-05', priority: 'medium', author: 'Student Activities' },
    { id: 3, title: 'Library Timings Extended', category: 'General', date: '2024-02-10', priority: 'low', author: 'Library' },
    { id: 4, title: 'Fee Payment Deadline Reminder', category: 'Financial', date: '2024-02-12', priority: 'high', author: 'Accounts Office' },
    { id: 5, title: 'Guest Lecture on AI Tomorrow', category: 'Academic', date: '2024-02-15', priority: 'medium', author: 'CSE Department' },
    { id: 6, title: 'Sports Meet Registration', category: 'Events', date: '2024-02-18', priority: 'medium', author: 'Sports Committee' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
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
        Announcements
      </h2>

      <div style={{ marginTop: '20px' }}>
        {announcements.map((announcement, index) => (
          <div
            key={announcement.id}
            style={{
              marginBottom: '15px',
              padding: '15px',
              backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
              borderLeft: `4px solid ${getPriorityColor(announcement.priority)}`
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
              <h3 style={{ 
                margin: 0, 
                fontSize: '14px', 
                fontWeight: 'bold', 
                color: '#1e40af' 
              }}>
                {announcement.title}
              </h3>
              <span style={{
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '10px',
                fontWeight: 'bold',
                backgroundColor: getPriorityColor(announcement.priority),
                color: '#ffffff',
                textTransform: 'uppercase'
              }}>
                {announcement.priority}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '15px', fontSize: '11px', color: '#6b7280', marginBottom: '8px' }}>
              <span><strong>Category:</strong> {announcement.category}</span>
              <span><strong>Date:</strong> {new Date(announcement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span><strong>Author:</strong> {announcement.author}</span>
            </div>
            <p style={{ margin: 0, fontSize: '11px', color: '#4b5563', lineHeight: '1.5' }}>
              This is a sample announcement content. In the actual implementation, this would contain the full announcement details and description.
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontSize: '11px', color: '#1e40af' }}>
          <strong>Note:</strong> All important announcements from various departments are displayed here. Please check regularly for updates.
        </p>
      </div>
    </div>
  );
};

export default StudentAnnouncements;

