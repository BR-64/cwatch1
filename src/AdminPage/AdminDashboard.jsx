import React, { useState } from 'react';
import Widget from './Widget';
import AdminMenu from './AdminMenu';
import AdminCaseList from './AdminCaseList';

const AdminDashboardPage = () => {
  return (
    <div className='container'>
      <Widget />
      <AdminMenu />
      <AdminCaseList />
    </div>
  );
};

export default AdminDashboardPage;
