import React, { useState } from 'react';

const FacultyEvents: React.FC = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    venue: '',
    description: ''
  });

  // Mock events
  const events = [
    { id: 1, title: 'Tech Fest 2024', date: '2024-03-15', time: '09:00 AM', venue: 'Main Auditorium', registrations: 45, status: 'Active' },
    { id: 2, title: 'Hackathon Competition', date: '2024-03-20', time: '10:00 AM', venue: 'Computer Lab', registrations: 32, status: 'Active' },
    { id: 3, title: 'Guest Lecture on AI', date: '2024-03-25', time: '02:00 PM', venue: 'Seminar Hall', registrations: 28, status: 'Active' },
    { id: 4, title: 'Cultural Day', date: '2024-02-28', time: '09:00 AM', venue: 'Open Air Theatre', registrations: 60, status: 'Completed' },
  ];

  const handleCreate = () => {
    if (eventData.title && eventData.date && eventData.time && eventData.venue) {
      alert(`Event "${eventData.title}" created successfully!`);
      setEventData({ title: '', date: '', time: '', venue: '', description: '' });
      setShowCreateForm(false);
    } else {
      alert('Please fill all required fields');
    }
  };

  const handleManage = (id: number, action: string) => {
    alert(`${action} event ID: ${id}`);
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
          Events Management
        </h2>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          style={{
            padding: '8px 16px',
            backgroundColor: showCreateForm ? '#6b7280' : '#10b981',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          {showCreateForm ? 'Cancel' : 'Create New Event'}
        </button>
      </div>

      {/* Create Event Form */}
      {showCreateForm && (
        <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', color: '#1e40af' }}>
            Create New Event
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Event Title *</label>
              <input
                type="text"
                value={eventData.title}
                onChange={(e) => setEventData({...eventData, title: e.target.value})}
                placeholder="Enter event title"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Date *</label>
                <input
                  type="date"
                  value={eventData.date}
                  onChange={(e) => setEventData({...eventData, date: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Time *</label>
                <input
                  type="time"
                  value={eventData.time}
                  onChange={(e) => setEventData({...eventData, time: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Venue *</label>
                <input
                  type="text"
                  value={eventData.venue}
                  onChange={(e) => setEventData({...eventData, venue: e.target.value})}
                  placeholder="Enter venue"
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
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Description</label>
              <textarea
                value={eventData.description}
                onChange={(e) => setEventData({...eventData, description: e.target.value})}
                rows={3}
                placeholder="Enter event description"
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
              onClick={handleCreate}
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
              Create Event
            </button>
          </div>
        </div>
      )}

      {/* Events List */}
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
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Event Title</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Date</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Time</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Venue</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Registrations</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr 
                key={event.id}
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                }}
              >
                <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                  {event.title}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  {event.time}
                </td>
                <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                  {event.venue}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db', color: '#2563eb', fontWeight: 'bold' }}>
                  {event.registrations}
                </td>
                <td style={{ 
                  padding: '10px', 
                  textAlign: 'center', 
                  border: '1px solid #d1d5db',
                  color: event.status === 'Active' ? '#10b981' : '#6b7280',
                  fontWeight: 'bold'
                }}>
                  {event.status}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                  <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                    <button
                      onClick={() => handleManage(event.id, 'Edit')}
                      style={{
                        padding: '4px 8px',
                        backgroundColor: '#2563eb',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '10px',
                        fontWeight: 'bold'
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleManage(event.id, 'View Registrations')}
                      style={{
                        padding: '4px 8px',
                        backgroundColor: '#10b981',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '10px',
                        fontWeight: 'bold'
                      }}
                    >
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyEvents;
