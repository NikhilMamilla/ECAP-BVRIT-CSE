import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacultyResources: React.FC = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploadData, setUploadData] = useState({
    title: '',
    course: '',
    file: null as File | null
  });
  const [filteredResources, setFilteredResources] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false); // controls table visibility
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [facultyName, setFacultyName] = useState('');

  const courses = ['CD', 'CN', 'OSSA', 'FDT', 'COI', 'ADSC', 'CCT', 'DSL', 'CNOSL'];

  const API_BASE_URL = 'http://localhost:8080';

  const fetchResources = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('ecap_token');
      const currentFacultyName = localStorage.getItem('ecap_userName') || facultyName;
      const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

      let response;
      if (currentFacultyName) {
        response = await axios.get(
          `${API_BASE_URL}/resources/faculty/${encodeURIComponent(currentFacultyName)}`,
          {
            headers,
            timeout: 10000
          }
        );
      } else {
        response = await axios.get(
          `${API_BASE_URL}/resources`,
          {
            headers,
            timeout: 10000
          }
        );
      }

      if (Array.isArray(response.data)) {
        setResources(response.data);
      } else {
        setResources([]);
      }
    } catch (err: any) {
      console.error('FETCH ERROR:', err);
      if (err.response?.status === 401) {
        localStorage.removeItem('ecap_token');
      }
      setResources([]);
    } finally {
      setLoading(false);
    }
  };

  // if searchTerm becomes empty, hide data again
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredResources([]);
      setHasSearched(false);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    const term = searchTerm.trim();
    if (!term) {
      // nothing typed, just ensure hidden
      setFilteredResources([]);
      setHasSearched(false);
      return;
    }

    const filtered = resources.filter((res) =>
      res.title.toLowerCase().includes(term.toLowerCase()) ||
      res.course.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredResources(filtered);
    setHasSearched(true); // now show table (even if zero results)
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredResources([]);
    setHasSearched(false); // hide table again
  };

  useEffect(() => {
    const storedName = localStorage.getItem('ecap_userName') || "Faculty User";
    setFacultyName(storedName);
    fetchResources();
  }, []);

  const handleUpload = async () => {
    if (!uploadData.title || !uploadData.course || !uploadData.file) {
      alert('Please fill all fields');
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem('ecap_token');
      if (!token) {
        alert('Please login to upload resources');
        return;
      }

      const formData = new FormData();
      formData.append('file', uploadData.file);
      formData.append('filename', uploadData.file.name);
      formData.append('type', 'resources');

      const uploadResponse = await axios.post(`${API_BASE_URL}/upload/file`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const { filePath, fileSize } = (uploadResponse.data || {}) as any;
      if (!filePath) {
        throw new Error('Upload failed: filePath missing from server response');
      }

      const resourceData = {
        title: uploadData.title,
        course: uploadData.course,
        fileType: 'PDF',
        fileSize: fileSize || `${(uploadData.file.size / (1024 * 1024)).toFixed(2)} MB`,
        filePath,
        facultyName: facultyName,
        uploadDate: new Date().toISOString(),
        downloads: 0
      };

      const response = await axios.post(`${API_BASE_URL}/resources/add`, resourceData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data) {
        alert('File uploaded successfully!');
        setUploadData({ title: '', course: '', file: null });
        setShowUploadForm(false);
        fetchResources();
      } else {
        alert('Upload failed - no response from server');
      }
    } catch (err: any) {
      console.error('Upload error:', err);
      if (err.response?.status === 401) {
        alert('Authentication failed. Please login again.');
        localStorage.removeItem('ecap_token');
      } else if (err.response?.status >= 400 && err.response?.status < 500) {
        alert(`Upload failed: ${err.response.data?.message || err.message || 'Invalid request'}`);
      } else if (err.response?.status >= 500) {
        alert('Server error. Please try again later.');
      } else {
        alert('Upload failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this resource?')) {
      try {
        const token = localStorage.getItem('ecap_token');
        if (!token) {
          alert('Please login to delete resources');
          return;
        }

        await axios.delete(`${API_BASE_URL}/resources/delete/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          timeout: 10000
        });

        alert('Resource deleted successfully!');
        fetchResources();
      } catch (error: any) {
        console.error('Error deleting resource:', error);

        if (error.code === 'ECONNABORTED') {
          alert('Request timed out. Please try again.');
        } else if (error.response?.status === 401) {
          alert('Authentication failed. Please login again.');
          localStorage.removeItem('ecap_token');
        } else if (error.response?.status === 404) {
          alert('Resource not found. It may have already been deleted.');
          fetchResources();
        } else {
          alert('Failed to delete resource. Please try again.');
        }
      }
    }
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
          Resources (PDFs) Management
        </h2>
        <button
          onClick={() => setShowUploadForm(!showUploadForm)}
          style={{
            padding: '8px 16px',
            backgroundColor: showUploadForm ? '#6b7280' : '#10b981',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          {showUploadForm ? 'Cancel' : 'Upload New Resource'}
        </button>
      </div>

      {/* Search Bar */}
      <div
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}
      >
        <input
          type="text"
          placeholder="Search by title or course"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            padding: '6px 8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            fontSize: '12px'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '6px 12px',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          Search
        </button>
        <button
          onClick={handleClearSearch}
          style={{
            padding: '6px 12px',
            backgroundColor: '#6b7280',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          Clear
        </button>
      </div>

      {/* Upload Form */}
      {showUploadForm && (
        <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', color: '#1e40af' }}>
            Upload New Resource
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Title *</label>
              <input
                type="text"
                value={uploadData.title}
                onChange={(e) => setUploadData({ ...uploadData, title: e.target.value })}
                placeholder="Enter resource title"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Course Code *</label>
              <select
                value={uploadData.course}
                onChange={(e) => setUploadData({ ...uploadData, course: e.target.value })}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}
              >
                <option value="">Select Course</option>
                {courses.map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>File (PDF) *</label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setUploadData({ ...uploadData, file: e.target.files?.[0] || null })}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}
              />
            </div>
            <button
              onClick={handleUpload}
              style={{
                padding: '10px 20px',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 'bold',
                alignSelf: 'flex-start'
              }}
            >
              Upload Resource
            </button>
          </div>
        </div>
      )}

      {/* Resources List - only after search */}
      <div style={{ marginTop: '20px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>Loading resources...</p>
          </div>
        ) : !hasSearched ? (
          // Before any search OR when search cleared, show nothing / hint
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>Type in the search box and click Search to view resources.</p>
          </div>
        ) : filteredResources.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>No resources match your search.</p>
          </div>
        ) : (
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
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Course</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Type</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Size</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Upload Date</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Downloads</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredResources.map((resource, index) => (
                <tr
                  key={resource.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                  }}
                >
                  <td style={{ padding: '10px', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                    {resource.title}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                    {resource.course}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {resource.fileType || 'PDF'}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {resource.fileSize}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    {resource.uploadDate
                      ? new Date(resource.uploadDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })
                      : 'N/A'}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db', color: '#2563eb', fontWeight: 'bold' }}>
                    {resource.downloads || 0}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                      <button
                        onClick={() => alert('Editing resource...')}
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
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(resource.id)}
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
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default FacultyResources;
