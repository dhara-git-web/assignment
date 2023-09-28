import React from 'react';
import ListView from '../ListView/ListView';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <>
        <main>
            <div className='container'>
                
                <ListView />
            </div>
        </main>
    </>
  );
};

export default Dashboard;
