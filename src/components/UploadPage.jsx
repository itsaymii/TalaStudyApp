import React from 'react';
import { useNavigate } from 'react-router-dom';
import pdf from './Images/pdf.png';

const UploadPage = () => {
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
    }
  };

  const styles = {
    uploadPage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'white',
    },
    uploadPageH1: {
      fontSize: '40px',
      marginBottom: '100px',
      marginTop: '-100px',
      color: '#6C21DC',
    },
    uploadContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      maxWidth: '600px',
      padding: '20px',
      borderRadius: '8px',
      borderColor: '#ccc',
      borderWidth: '2px',
      borderStyle: 'dashed',
    },
    browseButton: {
      padding: '10px 20px',
      fontSize: '16px',
      color: '#333',
      backgroundColor: 'white',
      borderColor: '#ccc',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '29px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    browseButtonHover: {
      backgroundColor: '#f2f3f4',
    },

  };

  return (
    <div style={styles.uploadPage}>

      <h1 style={styles.uploadPageH1}>Upload Files Here</h1>
      <div style={styles.uploadContainer}>
        <img src={pdf} alt="Pdf" style={{ width: '60px', height: '60px', marginBottom: '20px' }} />
        <p>Upload files at a time up to 25MB (.pdf)</p>
        <label
          htmlFor="file-upload"
          style={styles.browseButton}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.browseButtonHover.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
        >
          Browse File
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".pdf"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
      </div>
    </div>
  );
};

export default UploadPage;