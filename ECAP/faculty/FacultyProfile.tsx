import React, { useState } from 'react';

const FacultyProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const userName = localStorage.getItem('ecap_userName') || 'Faculty Member';

  // Mock profile data
  const [profileData, setProfileData] = useState({
    employeeId: 'EMP001',
    name: userName,
    email: 'faculty@bvrit.ac.in',
    phone: '9876543210',
    department: 'Computer Science and Engineering',
    designation: 'Assistant Professor',
    qualification: 'Ph.D. in Computer Science',
    experience: '8 years',
    dateOfBirth: '1985-05-15',
    address: '123 Faculty Street, City, State - 500001',
    bloodGroup: 'O+',
    emergencyContact: '9876543211',
    emergencyName: 'Emergency Contact Name'
  });

  const handleSave = () => {
    alert('Profile updated successfully!');
    setIsEditing(false);
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
          Profile Management
        </h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            Edit Profile
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setIsEditing(false)}
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
        )}
      </div>

      <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Personal Information */}
        <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', color: '#1e40af' }}>
            Personal Information
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Employee ID</label>
              <input
                type="text"
                value={profileData.employeeId}
                disabled
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: '#e5e7eb'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Name</label>
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: isEditing ? '#ffffff' : '#f3f4f6'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Email</label>
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: isEditing ? '#ffffff' : '#f3f4f6'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Phone</label>
              <input
                type="tel"
                value={profileData.phone}
                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: isEditing ? '#ffffff' : '#f3f4f6'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Date of Birth</label>
              <input
                type="date"
                value={profileData.dateOfBirth}
                onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: isEditing ? '#ffffff' : '#f3f4f6'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Blood Group</label>
              <input
                type="text"
                value={profileData.bloodGroup}
                onChange={(e) => setProfileData({...profileData, bloodGroup: e.target.value})}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: isEditing ? '#ffffff' : '#f3f4f6'
                }}
              />
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', color: '#1e40af' }}>
            Professional Information
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Department</label>
              <input
                type="text"
                value={profileData.department}
                disabled
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: '#e5e7eb'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Designation</label>
              <input
                type="text"
                value={profileData.designation}
                disabled
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: '#e5e7eb'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Qualification</label>
              <input
                type="text"
                value={profileData.qualification}
                onChange={(e) => setProfileData({...profileData, qualification: e.target.value})}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: isEditing ? '#ffffff' : '#f3f4f6'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Experience</label>
              <input
                type="text"
                value={profileData.experience}
                onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: isEditing ? '#ffffff' : '#f3f4f6'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Address</label>
              <textarea
                value={profileData.address}
                onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                disabled={!isEditing}
                rows={3}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: isEditing ? '#ffffff' : '#f3f4f6',
                  fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Emergency Contact Name</label>
              <input
                type="text"
                value={profileData.emergencyName}
                onChange={(e) => setProfileData({...profileData, emergencyName: e.target.value})}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: isEditing ? '#ffffff' : '#f3f4f6'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Emergency Contact</label>
              <input
                type="tel"
                value={profileData.emergencyContact}
                onChange={(e) => setProfileData({...profileData, emergencyContact: e.target.value})}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: isEditing ? '#ffffff' : '#f3f4f6'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
