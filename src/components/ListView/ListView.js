import React, { useState } from 'react';
import initialAccordionData from './Data';
import SearchBar from '../SearchBar/SearchBar';
import DeleteModal from '../DeleteModal/DeleteModal';
import './ListView.css';

const ListView = () => {
  const [accordionData, setAccordionData] = useState(initialAccordionData);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [editingAccordionId, setEditingAccordionId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };

  const handleDelete = (id) => {
    setItemToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setAccordionData(accordionData.filter((item) => item.id !== itemToDelete));
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  const enterEditMode = (id) => {
    setEditingAccordionId(id);
    const itemToEdit = accordionData.find((item) => item.id === id);
    setEditedData(itemToEdit);
    setEditMode(true);
  };
  
  const exitEditMode = () => {
    setEditingAccordionId(null);
    setEditMode(false);
    setEditedData({});
  };

  const saveChanges = () => {
    setAccordionData((prevData) =>
      prevData.map((item) =>
        item.id === editedData.id ? { ...item, ...editedData } : item
      )
    );
    exitEditMode();
  };

  const filteredAccordionData = accordionData.filter((item) =>
    item.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>      
      <div className='list-view-container'>
        <h2>List View</h2>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className='accordin'>
          {filteredAccordionData.map((item) => (
            <div className='accordin-card' key={item.id}>
              <div
                className={`title ${activeAccordion === item.id ? 'active' : ''}`}
                onClick={() => toggleAccordion(item.id)}
              >
                <div className='user'>
                  <div className='user-photo'>
                    <img src={item.userPhoto} alt='' />
                  </div>
                  <>
                  {editingAccordionId === item.id ? (
                    <div className='field'>
                    <input
                      className='form-control'
                      type="text"
                      placeholder="User Name"
                      value={editedData.userName}
                      onChange={(e) => {
                        console.log('Editing Name:', e.target.value);
                        setEditedData({ ...editedData, userName: e.target.value });
                      }}
                      />
                  </div>                  
                  ) : (
                    <div className='user-name'>{item.userName}</div>
                  )}
                  </>
                </div>
                <div className='arrow'>
                  <img
                    src='/Assets/images/arrow-down.png'
                    alt=''
                    className={activeAccordion === item.id ? 'rotate' : ''}
                  />
                </div>
              </div>
              {activeAccordion === item.id && (
                <div className='content'>
                  <div className='user-details'>
                    <div className='group'>
                      <label>Age</label>
                      
                      {editingAccordionId === item.id ? (
                      <div className='field'>
                        <input
                          className='form-control'
                          type="text"
                          placeholder="Age"
                          value={editedData.age}
                          onChange={(e) => setEditedData({ ...editedData, age: e.target.value })}
                          />
                      </div>
                      ) : ( 
                        <div className='val'>{item.age}</div>
                      )}
                    </div>
                    <div className='group'>
                      <label>Gender</label>
                      {editingAccordionId === item.id ? (
                      <div className='field'>
                      <select className='form-control' value={editedData.gender}
            onChange={(e) => setEditedData({ ...editedData, gender: e.target.value })}>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    ) : ( 
                      <div className='val'>{item.gender}</div>  
                      )}                    
                    </div>
                    <div className='group'>
                      <label>Country</label>                      
                      {editingAccordionId === item.id ? (
                      <div className='field'>
                      <input
                        className='form-control'
                        type="text"
                        placeholder="Country"
                        value={item.country}
                        onChange={(e) => setEditedData({ ...editedData, country: e.target.value })}
                        />
                    </div>
                    ) : (
                      <div className='val'>{item.country}</div>
                     )}
                    </div>
                  </div>
                  <div className='description'>
                    <label>Description</label>
                    {editingAccordionId === item.id ? (
                    <div className='field'>
                      <textarea
                        className='form-control'
                        placeholder="Country"
                        value={editedData.Description}
                        onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
                        />
                    </div>
                    ) : ( 
                    <p>{item.description}</p>
                    )}
                  </div>
                  {editingAccordionId === item.id ? (
                    <div className='action-buttons'>
                    <button className='bnone' onClick={exitEditMode}>
                      <img src='/Assets/images/close-circle.png' alt='' />
                    </button>
                    <button className='bnone' onClick={saveChanges}>
                      <img src='/Assets/images/correct.png' alt='' />
                    </button>
                  </div>
                  ) : ( 
                    <div className='action-buttons'>
                    <button className='bnone' onClick={() => handleDelete(item.id)}>
                      <img src='/Assets/images/delete.png' alt='' />
                    </button>
                    <button className='bnone' onClick={() => enterEditMode(item.id)}>
                      <img src='/Assets/images/edit.png' alt='' />
                    </button>
                  </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        {showDeleteModal && (
        <DeleteModal
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
        />
      )}
      </div>
    </>
  );
};

export default ListView;
