import React from 'react';

const AcademicRecordsPage: React.FC = () => {
  const academicHistory = [
    {
      year: '2023-2024',
      semester: '5th Semester',
      cgpa: '8.5',
      credits: '24',
      status: 'Completed'
    },
    {
      year: '2023-2024',
      semester: '4th Semester',
      cgpa: '8.2',
      credits: '24',
      status: 'Completed'
    },
    {
      year: '2022-2023',
      semester: '3rd Semester',
      cgpa: '8.0',
      credits: '24',
      status: 'Completed'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Academic Records</h2>
        <p className="text-gray-600">View your complete academic history and performance</p>
      </div>

      {/* Overall Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Overall CGPA</p>
          <p className="text-3xl font-bold text-blue-600">8.3</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Total Credits</p>
          <p className="text-3xl font-bold text-green-600">144</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Semesters Completed</p>
          <p className="text-3xl font-bold text-purple-600">5</p>
        </div>
      </div>

      {/* Academic History */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Semester-wise Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Academic Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Semester</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">CGPA</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Credits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {academicHistory.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{record.year}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{record.semester}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{record.cgpa}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{record.credits}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Download Options */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Download Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition text-left">
            <p className="font-semibold text-gray-900">📄 Transcript</p>
            <p className="text-sm text-gray-600 mt-1">Download your complete academic transcript</p>
          </button>
          <button className="p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition text-left">
            <p className="font-semibold text-gray-900">📋 Grade Sheet</p>
            <p className="text-sm text-gray-600 mt-1">Download semester-wise grade sheets</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicRecordsPage;

