import React from 'react';

const DashboardHome: React.FC = () => {
  const stats = [
    { label: 'Current Semester', value: '6th Semester', icon: '📚' },
    { label: 'Upcoming Exams', value: '3', icon: '📝' },
    { label: 'Pending Results', value: '1', icon: '⏳' },
    { label: 'Notifications', value: '5', icon: '🔔' },
  ];

  const upcomingExams = [
    { subject: 'Database Management Systems', date: '2024-03-15', time: '9:00 AM' },
    { subject: 'Computer Networks', date: '2024-03-18', time: '9:00 AM' },
    { subject: 'Software Engineering', date: '2024-03-20', time: '9:00 AM' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
        <p className="text-gray-600">Welcome to your Academic & Exam Portal</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Exams */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Examinations</h3>
        <div className="space-y-4">
          {upcomingExams.map((exam, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">{exam.subject}</p>
                <p className="text-sm text-gray-600">Date: {exam.date} | Time: {exam.time}</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition text-left">
            <p className="font-semibold text-gray-900">Download Hall Ticket</p>
            <p className="text-sm text-gray-600 mt-1">Get your exam hall ticket</p>
          </button>
          <button className="p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition text-left">
            <p className="font-semibold text-gray-900">View Results</p>
            <p className="text-sm text-gray-600 mt-1">Check your exam results</p>
          </button>
          <button className="p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition text-left">
            <p className="font-semibold text-gray-900">Academic Records</p>
            <p className="text-sm text-gray-600 mt-1">View your academic history</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

