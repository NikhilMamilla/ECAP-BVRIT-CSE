import React, { useState } from 'react';

const FacultyServices: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  // Mock service requests
  const services = [
    { id: 1, student: 'MAMILLA NIKHIL (23211A05M7)', type: 'Bonafide Certificate', appliedDate: '2024-01-15', status: 'Pending', purpose: 'Bank Account Opening' },
    { id: 2, student: 'RAJESH KUMAR (23211A05M8)', type: 'Hostel Application', appliedDate: '2024-01-20', status: 'Pending', purpose: 'Hostel Accommodation' },
    { id: 3, student: 'PRIYA SHARMA (23211A05M9)', type: 'Transport Request', appliedDate: '2024-02-01', status: 'Approved', purpose: 'Bus Pass' },
    { id: 4, student: 'AMIT SINGH (23211A05M0)', type: 'Fee Concession', appliedDate: '2024-02-05', status: 'Under Review', purpose: 'Scholarship Application' },
    { id: 5, student: 'SITA DEVI (23211A05M1)', type: 'No Objection Certificate', appliedDate: '2024-02-10', status: 'Approved', purpose: 'Internship' },
  ];

  const filteredServices = services.filter(service => {
    if (filter === 'all') return true;
    if (filter === 'pending') return service.status === 'Pending' || service.status === 'Under Review';
    if (filter === 'approved') return service.status === 'Approved';
    if (filter === 'rejected') return service.status === 'Rejected';
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return '#10b981';
      case 'Pending': return '#f59e0b';
      case 'Under Review': return '#3b82f6';
      case 'Rejected': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const handleAction = (id: number, action: 'approve' | 'reject' | 'view') => {
    alert(`${action} service request ID: ${id}`);
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
        Miscellaneous Services Management
      </h2>

      {/* Filter Buttons */}
      <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', gap: '10px' }}>
        {(['all', 'pending', 'approved', 'rejected'] as const).map((filterOption) => (
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
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Student</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Service Type</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Purpose</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Applied Date</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Status</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <tr 
                  key={service.id}
                  style={{ 
                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                  }}
                >
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                    {service.student}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                    {service.type}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                    {service.purpose}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(service.appliedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    border: '1px solid #d1d5db',
                    color: getStatusColor(service.status),
                    fontWeight: 'bold'
                  }}>
                    {service.status}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                      <button
                        onClick={() => handleAction(service.id, 'view')}
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
                        View
                      </button>
                      {(service.status === 'Pending' || service.status === 'Under Review') && (
                        <>
                          <button
                            onClick={() => handleAction(service.id, 'approve')}
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
                            Approve
                          </button>
                          <button
                            onClick={() => handleAction(service.id, 'reject')}
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
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} style={{ padding: '20px', textAlign: 'center', border: '1px solid #d1d5db', color: '#6b7280' }}>
                  No service requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontSize: '11px', color: '#1e40af' }}>
          <strong>Note:</strong> You can approve and manage student service requests like bonafide certificates, hostel applications, transport requests, etc.
        </p>
      </div>
    </div>
  );
};

export default FacultyServices;
