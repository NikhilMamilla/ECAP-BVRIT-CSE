import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Resource {
  id: number;
  title: string;
  course: string;
  fileType: string;
  fileSize: string;
  uploadDate: string;
  downloads: number;
  facultyName: string;
}

const StudentResources: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const API_BASE_URL = 'http://localhost:8080';

  // Get JWT token from localStorage
  const getAuthToken = () => {
    return localStorage.getItem('ecap_token') || '';
  };

  // Fetch all resources
  const fetchResources = async () => {
    try {
      setLoading(true);
      setError('');

      const token = getAuthToken();
      if (!token) {
        setError('Please login to view resources');
        setLoading(false);
        return;
      }

      const response = await axios.get(`${API_BASE_URL}/resources`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      setResources(response.data as Resource[]);
      setHasSearched(true);
    } catch (error: any) {
      console.error('Error fetching resources:', error);
      if (error.response?.status === 401) {
        setError('Please login to view resources');
      } else {
        setError('Failed to load resources. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle resource download
  const handleDownload = async (resourceId: number) => {
    try {
      const token = getAuthToken();
      if (!token) {
        alert('Please login to download resources');
        return;
      }

      // Increment download count
      await axios.put(`${API_BASE_URL}/resources/download/${resourceId - 1}`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      // Download the actual file
      const downloadResponse = await axios.get(`${API_BASE_URL}/resources/file/${resourceId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        responseType: 'blob' // Important for file download
      });

      // Get the resource details to determine filename
      const resource = resources.find(r => r.id === resourceId);
      const filename = resource?.title || `resource_${resourceId}`;
      const fileType = resource?.fileType || 'application/pdf';

      // Create blob and download
      const blob = new Blob([downloadResponse.data as BlobPart], { type: fileType });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}.pdf`; // Default to PDF extension
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Refresh resources after download
      fetchResources();

      alert('Resource downloaded successfully!');
    } catch (error: any) {
      console.error('Error downloading resource:', error);
      if (error.response?.status === 401) {
        alert('Please login to download resources');
      } else {
        alert('Failed to download resource. Please try again.');
      }
    }
  };

  // Removed automatic fetching - resources will only be fetched when search is performed

  // Search filtering
  const getFilteredResources = () => {
    let filtered = resources;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.facultyName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setHasSearched(false);
    }
  }, [searchTerm]);

  // Handle search - fetch resources when search is performed
  const handleSearch = () => {
    if (searchTerm.trim()) {
      fetchResources();
    }
  };

  // Handle clear search
  const handleClearSearch = () => {
    setSearchTerm('');          // clears input
    setResources([]);           // clears data
    setHasSearched(false);      // hides table & shows “use search” message
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
        Resources (PDFs)
      </h2>

      {/* Search Section */}
      <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Search by title or faculty name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif',
            fontWeight: 'bold'
          }}
        >
          Search
        </button>
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            style={{
              padding: '10px 15px',
              backgroundColor: '#ef4444',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
              fontFamily: 'Verdana, Geneva, Arial, Helvetica, sans-serif'
            }}
          >
            Clear Search
          </button>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        {!hasSearched ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
            <p>Please use the search options above to find resources.</p>
          </div>
        ) : loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Loading resources...</p>
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#ef4444' }}>
            <p>{error}</p>
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
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Subject Code</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Type</th>

                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Upload Date</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #1e40af', fontWeight: 'bold' }}>Faculty</th>
                <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #1e40af', fontWeight: 'bold' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredResources().length > 0 ? (
                getFilteredResources().map((resource, index) => (
                  <tr
                    key={resource.id}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
                    }}
                  >
                    <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                      {resource.title}
                    </td>
                    <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db', fontWeight: 'bold' }}>
                      {resource.course}
                    </td>
                    <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                      {resource.fileType || 'PDF'}
                    </td>

                    <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                      {resource.uploadDate ? new Date(resource.uploadDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A'}
                    </td>
                    <td style={{ padding: '10px', border: '1px solid #d1d5db' }}>
                      {resource.facultyName}
                    </td>
                    <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #d1d5db' }}>
                      <button
                        onClick={() => handleDownload(resource.id)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#2563eb',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '11px',
                          fontWeight: 'bold'
                        }}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '20px', textAlign: 'center', border: '1px solid #d1d5db', color: '#6b7280' }}>
                    No resources found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontSize: '11px', color: '#1e40af' }}>
          <strong>Note:</strong> You can view, download, and search for course resources uploaded by faculty members.
        </p>
      </div>
    </div>
  );
};

export default StudentResources;

