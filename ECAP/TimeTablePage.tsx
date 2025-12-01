import React from 'react';

const TimeTablePage: React.FC = () => {
  const timetables = [
    {
      title: 'Mid-Term Examinations - March 2024',
      semester: '6th Semester',
      date: '2024-03-10',
      subjects: [
        { code: 'CS601', name: 'Database Management Systems', date: '2024-03-15', time: '9:00 AM - 12:00 PM' },
        { code: 'CS602', name: 'Computer Networks', date: '2024-03-18', time: '9:00 AM - 12:00 PM' },
        { code: 'CS603', name: 'Software Engineering', date: '2024-03-20', time: '9:00 AM - 12:00 PM' },
      ]
    },
    {
      title: 'End-Term Examinations - May 2024',
      semester: '6th Semester',
      date: '2024-05-01',
      subjects: [
        { code: 'CS601', name: 'Database Management Systems', date: '2024-05-10', time: '9:00 AM - 12:00 PM' },
        { code: 'CS602', name: 'Computer Networks', date: '2024-05-12', time: '9:00 AM - 12:00 PM' },
        { code: 'CS603', name: 'Software Engineering', date: '2024-05-15', time: '9:00 AM - 12:00 PM' },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Examination Time Tables</h2>
        <p className="text-gray-600">View and download your exam schedules</p>
      </div>

      {timetables.map((timetable, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{timetable.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{timetable.semester}</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
              Download PDF
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Subject Code</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Subject Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {timetable.subjects.map((subject, subIndex) => (
                  <tr key={subIndex} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{subject.code}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{subject.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{subject.date}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{subject.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeTablePage;

