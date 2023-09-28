import React from 'react';
import './DeleteModal.css';

const DeleteModal = ({ onCancel, onConfirm }) => {
  return (
    <>
        <div className='delete-modal'>
              <div className='close-modal' onClick={onCancel}><img src="/Assets/images/close.png" alt='' /></div>
              <h2>Are you sure you want to delete?</h2>
              <div className='action-buttons'>
                <button className='secondary' onClick={onCancel}>
                  Cancel
                </button>
                <button className='primary delete' onClick={onConfirm}>
                  Delete
                </button>
              </div>
        </div>
    </>
  );
};

export default DeleteModal;
