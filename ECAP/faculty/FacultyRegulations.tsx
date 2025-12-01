import React, { useState } from 'react';

const FacultyRegulations: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRegulation, setSelectedRegulation] = useState<number | null>(null);

  // Mock regulations data
  const [regulations, setRegulations] = useState([
    { id: 1, title: 'Academic Regulations 2024', category: 'Academic', lastUpdated: '2024-01-01', editable: true, content: 'Academic regulations content...' },
    { id: 2, title: 'Examination Regulations', category: 'Examination', lastUpdated: '2024-01-15', editable: true, content: 'Examination regulations content...' },
    { id: 3, title: 'Attendance Policy', category: 'Academic', lastUpdated: '2024-01-20', editable: true, content: 'Attendance policy content...' },
    { id: 4, title: 'Disciplinary Rules', category: 'General', lastUpdated: '2024-02-01', editable: false, content: 'Disciplinary rules content...' },
    { id: 5, title: 'Fee Structure 2024', category: 'Financial', lastUpdated: '2024-01-10', editable: false, content: 'Fee structure content...' },
    { id: 6, title: 'Hostel Regulations', category: 'Hostel', lastUpdated: '2024-01-25', editable: false, content: 'Hostel regulations content...' },
  ]);

  const handleEdit = (id: number) => {
    setSelectedRegulation(id);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (selectedRegulation) {
      alert('Regulation updated successfully!');
      setIsEditing(false);
      setSelectedRegulation(null);
    }
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
        Regulations Management
      </h2>

      {isEditing && selectedRegulation ? (
        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e40af' }}>
              Edit Regulation: {regulations.find(r => r.id === selectedRegulation)?.title}
            </h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setSelectedRegulation(null);
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#6b7280',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#10b981',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
          <textarea
            defaultValue={regulations.find(r => r.id === selectedRegulation)?.content}
            rows={15}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif'
            }}
          />
        </div>
      ) : (
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
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Title</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Category</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Last Updated</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Editable</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {regulations.map((regulation, index) => (
                <tr 
                  key={regulation.id}
                  style={{ 
                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                  }}
                >
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                    {regulation.title}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      backgroundColor: '#dbeafe',
                      color: '#1e40af'
                    }}>
                      {regulation.category}
                    </span>
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {new Date(regulation.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    border: '1px solid #d1d5db',
                    color: regulation.editable ? '#10b981' : '#6b7280',
                    fontWeight: 'bold'
                  }}>
                    {regulation.editable ? 'Yes' : 'No'}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                      <button
                        onClick={() => alert('Viewing regulation...')}
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
                      {regulation.editable && (
                        <button
                          onClick={() => handleEdit(regulation.id)}
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
                          Edit
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontSize: '11px', color: '#1e40af' }}>
          <strong>Note:</strong> You can view and edit limited regulations. Some regulations are restricted and cannot be edited.
        </p>
      </div>
    </div>
  );
};

export default FacultyRegulations;
