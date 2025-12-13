import React, { useState } from 'react';

const StudentEvents: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'registered' | 'past'>('all');

  // Mock events data
  const events = [
    { id: 1, title: 'Tech Fest 2024', date: '2024-03-15', time: '09:00 AM', venue: 'Main Auditorium', status: 'upcoming', registered: false },
    { id: 2, title: 'Hackathon Competition', date: '2024-03-20', time: '10:00 AM', venue: 'Computer Lab', status: 'upcoming', registered: true },
    { id: 3, title: 'Guest Lecture on AI', date: '2024-03-25', time: '02:00 PM', venue: 'Seminar Hall', status: 'upcoming', registered: false },
    { id: 4, title: 'Cultural Day', date: '2024-02-28', time: '09:00 AM', venue: 'Open Air Theatre', status: 'past', registered: true },
    { id: 5, title: 'Sports Meet', date: '2024-02-15', time: '08:00 AM', venue: 'Sports Ground', status: 'past', registered: false },
  ];

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return event.status === 'upcoming';
    if (filter === 'registered') return event.registered;
    if (filter === 'past') return event.status === 'past';
    return true;
  });

  const handleRegister = (eventId: number) => {
    console.log(`Registering for event ${eventId}`);
    alert('Registration successful!');
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
        Events
      </h2>

      {/* Filter Buttons */}
      <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', gap: '10px' }}>
        {(['all', 'upcoming', 'registered', 'past'] as const).map((filterOption) => (
          <button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            style={{
              padding: '8px 16px',
              backgroundColor: filter === filterOption ? '#2563eb' : '#f3f4f6',
              color: filter === filterOption ? '#ffffff' : '#000',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: filter === filterOption ? 'bold' : 'normal',
              textTransform: 'capitalize'
            }}
          >
            {filterOption}
          </button>
        ))}
      </div>

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
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
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
                  <td style={{
                    padding: '10px',
                    textAlign: 'center',
                    border: '1px solid #d1d5db',
                    color: event.status === 'upcoming' ? '#10b981' : '#6b7280',
                    fontWeight: 'bold'
                  }}>
                    {event.registered ? 'Registered' : event.status === 'upcoming' ? 'Open' : 'Past'}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {event.status === 'upcoming' && !event.registered ? (
                      <button
                        onClick={() => handleRegister(event.id)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#10b981',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '11px',
                          fontWeight: 'bold'
                        }}
                      >
                        Register
                      </button>
                    ) : event.registered ? (
                      <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓ Registered</span>
                    ) : (
                      <span style={{ color: '#6b7280' }}>-</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} style={{ padding: '20px', textAlign: 'center', border: '1px solid #d1d5db', color: '#6b7280' }}>
                  No events found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentEvents;

