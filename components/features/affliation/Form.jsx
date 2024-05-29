import React, { useRef, useState } from 'react';

function Form({ onSaveBankDetails }) {
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    // Reset the file input value to allow reselection of the same file
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSaveBankDetailsClick = () => {
    // Call the onSaveBankDetails function to trigger the loading state
    onSaveBankDetails();
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div className='input-container d-flex flex-column align-items-center'>
            <label htmlFor='file-input' className='file-label'>
              <input
                type='file'
                id='file-input'
                style={{ display: 'none' }}
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <div className='file-icon d-flex justify-content-center align-items-center' style={{ paddingTop: '70px' }}>
                <div className='icon d-flex justify-content-center align-items-center'>
                  <i className='fas fa-plus fa-2x'></i>
                </div>
              </div>
            </label>
            <p className='header-content'>Upload ID Proof</p>
            <p className='content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, assumenda dolore?
            </p>
          </div>
          {uploadedFile && (
            <div className='uploade'>
              <p>Uploaded File</p>
              <div className='uplode-content'>
                <div className="icon-container">
                  <img
                    src="images\icon\Vector documnt.svg"
                    alt="Uploaded Icon"
                  />
                </div>
                <div className="text-container">
                  <p>{uploadedFile.name}</p>
                </div>
                <i className="fas fa-times" onClick={handleRemoveFile}></i>
              </div>
            </div>
          )}
        </div>
        <div className='col-12 col-md-6'>
          <div className='form-container'>
            <div style={{ padding: '50px', marginTop: '10px' }}>
              <p className='form-header'>Submit your Bank Details</p>
              <div className='form-group'>
                <label>Holder Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Select Bank *</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Account Number *</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Reenter Account Number*</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Swift code</label>
                <input type='text' className='form-control' />
              </div>

              <button className='styled-button' onClick={handleSaveBankDetailsClick}>Save Bank Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;