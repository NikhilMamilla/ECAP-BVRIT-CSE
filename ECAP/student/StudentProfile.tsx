import React, { useState } from 'react';

const StudentProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const rollNumber = localStorage.getItem('ecap_rollNumber') || '23211A05M7';
  const userName = localStorage.getItem('ecap_userName') || 'Student Name';

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const [profileData, setProfileData] = useState({
    rollNumber: rollNumber,
    name: user.name || userName.replace('Student ', ''),
    email: user.email || 'student@bvrit.ac.in',
    phone: user.phone || '9876543210',
    course: 'B.Tech Computer Science and Engineering',
    semester: user.semester || '6th Semester',
    year: '3rd Year',
    section: 'A',
    dateOfBirth: user.dateOfBirth || '2004-05-15',
    address: user.address || '123 Main Street, City, State - 500001',
    parentName: user.parentName || 'Parent Name',
    parentPhone: user.parentPhone || '9876543211',
    bloodGroup: user.bloodGroup || 'O+',
    aadharNumber: user.aadharNumber || '1234 5678 9012'
  });

  const handleSave = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const updatedUser = { ...user, ...profileData };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    localStorage.setItem('ecap_userName', profileData.name);
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
          Profile
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
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Roll Number</label>
              <input
                type="text"
                value={profileData.rollNumber}
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

        {/* Academic Information */}
        <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', color: '#1e40af' }}>
            Academic Information
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Course</label>
              <input
                type="text"
                value={profileData.course}
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
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Semester</label>
              <input
                type="text"
                value={profileData.semester}
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
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Year</label>
              <input
                type="text"
                value={profileData.year}
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
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Section</label>
              <input
                type="text"
                value={profileData.section}
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
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Parent Name</label>
              <input
                type="text"
                value={profileData.parentName}
                onChange={(e) => setProfileData({...profileData, parentName: e.target.value})}
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
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '11px' }}>Parent Phone</label>
              <input
                type="tel"
                value={profileData.parentPhone}
                onChange={(e) => setProfileData({...profileData, parentPhone: e.target.value})}
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

export default StudentProfile;

