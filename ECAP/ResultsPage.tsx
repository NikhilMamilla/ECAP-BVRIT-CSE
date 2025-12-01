import React from 'react';

const ResultsPage: React.FC = () => {
  const results = [
    {
      semester: '5th Semester',
      examType: 'End-Term Examinations',
      date: 'December 2023',
      status: 'Published',
      subjects: [
        { code: 'CS501', name: 'Operating Systems', grade: 'A', marks: '85' },
        { code: 'CS502', name: 'Data Structures', grade: 'A+', marks: '92' },
        { code: 'CS503', name: 'Algorithm Design', grade: 'A', marks: '88' },
      ],
      cgpa: '8.5'
    },
    {
      semester: '4th Semester',
      examType: 'End-Term Examinations',
      date: 'May 2023',
      status: 'Published',
      subjects: [
        { code: 'CS401', name: 'Computer Organization', grade: 'B+', marks: '78' },
        { code: 'CS402', name: 'Discrete Mathematics', grade: 'A', marks: '87' },
      ],
      cgpa: '8.2'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Examination Results</h2>
        <p className="text-gray-600">View your academic performance and grades</p>
      </div>

      {results.map((result, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{result.semester}</h3>
              <p className="text-sm text-gray-600 mt-1">{result.examType} - {result.date}</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                {result.status}
              </span>
              <p className="text-sm text-gray-600 mt-2">CGPA: <span className="font-bold text-lg">{result.cgpa}</span></p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Subject Code</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Subject Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Grade</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {result.subjects.map((subject, subIndex) => (
                  <tr key={subIndex} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{subject.code}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{subject.name}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded font-medium">{subject.grade}</span>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{subject.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
              Download Result Sheet
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsPage;

