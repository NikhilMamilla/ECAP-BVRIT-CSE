import React from 'react';

const HallTicketPage: React.FC = () => {
  const hallTickets = [
    {
      examName: 'Mid-Term Examinations - March 2024',
      semester: '6th Semester',
      examDate: '2024-03-15',
      status: 'Available',
      downloadLink: '#'
    },
    {
      examName: 'End-Term Examinations - May 2024',
      semester: '6th Semester',
      examDate: '2024-05-10',
      status: 'Not Available',
      downloadLink: null
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Hall Tickets</h2>
        <p className="text-gray-600">Download your examination hall tickets</p>
      </div>

      <div className="space-y-4">
        {hallTickets.map((ticket, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{ticket.examName}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Semester:</span> {ticket.semester}</p>
                  <p><span className="font-medium">Exam Date:</span> {ticket.examDate}</p>
                  <p>
                    <span className="font-medium">Status:</span>{' '}
                    <span className={`inline-block px-2 py-1 rounded ${
                      ticket.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {ticket.status}
                    </span>
                  </p>
                </div>
              </div>
              <div className="ml-4">
                {ticket.status === 'Available' ? (
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                    Download Hall Ticket
                  </button>
                ) : (
                  <button 
                    disabled 
                    className="px-6 py-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium"
                  >
                    Not Available
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Important Instructions:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
          <li>Carry a printed copy of your hall ticket to the examination center</li>
          <li>Bring a valid ID proof along with the hall ticket</li>
          <li>Report to the examination center 30 minutes before the exam time</li>
          <li>Hall tickets will be available 3 days before the examination date</li>
        </ul>
      </div>
    </div>
  );
};

export default HallTicketPage;

