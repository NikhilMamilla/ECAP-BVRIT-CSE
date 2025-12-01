import React from 'react';

const NotificationsPage: React.FC = () => {
  const notifications = [
    {
      id: 1,
      title: 'Mid-Term Examination Schedule Released',
      message: 'The time table for Mid-Term Examinations (March 2024) has been published. Please check your timetable section.',
      date: '2024-03-01',
      type: 'exam',
      read: false
    },
    {
      id: 2,
      title: 'Hall Tickets Available for Download',
      message: 'Hall tickets for Mid-Term Examinations are now available. Download from the Hall Tickets section.',
      date: '2024-03-12',
      type: 'hallticket',
      read: false
    },
    {
      id: 3,
      title: '5th Semester Results Published',
      message: 'Results for End-Term Examinations (December 2023) have been published. Check your results section.',
      date: '2024-01-15',
      type: 'results',
      read: true
    },
    {
      id: 4,
      title: 'Important: Examination Guidelines',
      message: 'Please read the examination guidelines carefully before appearing for exams. Guidelines are available in the dashboard.',
      date: '2024-02-28',
      type: 'general',
      read: true
    },
    {
      id: 5,
      title: 'Academic Calendar Updated',
      message: 'The academic calendar for the current semester has been updated. Please review the important dates.',
      date: '2024-02-20',
      type: 'academic',
      read: true
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      exam: 'bg-blue-100 text-blue-800',
      hallticket: 'bg-green-100 text-green-800',
      results: 'bg-purple-100 text-purple-800',
      academic: 'bg-yellow-100 text-yellow-800',
      general: 'bg-gray-100 text-gray-800'
    };
    return colors[type] || colors.general;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h2>
        <p className="text-gray-600">Stay updated with important announcements and updates</p>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-lg shadow-sm p-6 border ${
              notification.read ? 'border-gray-200' : 'border-blue-300 bg-blue-50'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className={`text-lg font-semibold ${notification.read ? 'text-gray-900' : 'text-blue-900'}`}>
                    {notification.title}
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(notification.type)}`}>
                    {notification.type}
                  </span>
                  {!notification.read && (
                    <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs font-medium">
                      New
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-3">{notification.message}</p>
                <p className="text-sm text-gray-500">Date: {notification.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.filter(n => !n.read).length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">No new notifications</p>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;

