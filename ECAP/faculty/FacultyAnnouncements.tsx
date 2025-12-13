import React, { useState } from 'react';

const FacultyAnnouncements: React.FC = () => {
  const [showPostForm, setShowPostForm] = useState(false);
  const [announcementData, setAnnouncementData] = useState({
    title: '',
    category: 'General',
    priority: 'medium',
    content: ''
  });

  // Mock announcements posted by faculty
  const announcements = [
    { id: 1, title: 'Mid-Term Examination Schedule Released', category: 'Examination', date: '2024-02-01', priority: 'high', views: 145 },
    { id: 2, title: 'Guest Lecture on AI Tomorrow', category: 'Academic', date: '2024-02-15', priority: 'medium', views: 98 },
    { id: 3, title: 'Assignment Submission Deadline Extended', category: 'Academic', date: '2024-02-20', priority: 'medium', views: 76 },
  ];

  const categories = ['General', 'Academic', 'Examination', 'Events', 'Important'];
  const priorities = ['low', 'medium', 'high'];

  const handlePost = () => {
    if (announcementData.title && announcementData.content) {
      alert(`Announcement "${announcementData.title}" posted successfully!`);
      setAnnouncementData({ title: '', category: 'General', priority: 'medium', content: '' });
      setShowPostForm(false);
    } else {
      alert('Please fill all required fields');
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this announcement?')) {
      console.log(`Deleting announcement ${id}`);
      alert('Announcement deleted successfully!');
    }
  };

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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h2 style={{
          color: '#1e40af',
          fontSize: '18px',
          fontWeight: 'bold',
          borderBottom: '2px solid #2563eb',
          paddingBottom: '5px',
          margin: 0
        }}>
          Announcements Management
        </h2>
        <button
          onClick={() => setShowPostForm(!showPostForm)}
          style={{
            padding: '8px 16px',
            backgroundColor: showPostForm ? '#6b7280' : '#10b981',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          {showPostForm ? 'Cancel' : 'Post New Announcement'}
        </button>
      </div>

      {/* Post Announcement Form */}
      {showPostForm && (
        <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', color: '#1e40af' }}>
            Post New Announcement
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Title *</label>
              <input
                type="text"
                value={announcementData.title}
                onChange={(e) => setAnnouncementData({ ...announcementData, title: e.target.value })}
                placeholder="Enter announcement title"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Category</label>
                <select
                  value={announcementData.category}
                  onChange={(e) => setAnnouncementData({ ...announcementData, category: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Priority</label>
                <select
                  value={announcementData.priority}
                  onChange={(e) => setAnnouncementData({ ...announcementData, priority: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}
                >
                  {priorities.map((pri) => (
                    <option key={pri} value={pri}>{pri.charAt(0).toUpperCase() + pri.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Content *</label>
              <textarea
                value={announcementData.content}
                onChange={(e) => setAnnouncementData({ ...announcementData, content: e.target.value })}
                rows={5}
                placeholder="Enter announcement content"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif'
                }}
              />
            </div>
            <button
              onClick={handlePost}
              style={{
                padding: '10px 20px',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 'bold',
                alignSelf: 'flex-start'
              }}
            >
              Post Announcement
            </button>
          </div>
        </div>
      )}

      {/* Announcements List */}
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
              <div style={{ display: 'flex', gap: '5px' }}>
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
                <button
                  onClick={() => handleDelete(announcement.id)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#ef4444',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '10px',
                    fontWeight: 'bold'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px', fontSize: '11px', color: '#6b7280', marginBottom: '8px' }}>
              <span><strong>Category:</strong> {announcement.category}</span>
              <span><strong>Date:</strong> {new Date(announcement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span><strong>Views:</strong> {announcement.views}</span>
            </div>
            <p style={{ margin: 0, fontSize: '11px', color: '#4b5563', lineHeight: '1.5' }}>
              This is a sample announcement content. In the actual implementation, this would contain the full announcement details and description.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyAnnouncements;
