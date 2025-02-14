import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, Package, Users as UsersIcon, Settings as SettingsIcon } from 'lucide-react';

function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-2">Total Orders</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold">$45,678</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-2">Active Users</h3>
          <p className="text-3xl font-bold">890</p>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Products Management</h2>
      {/* Product management UI will go here */}
    </div>
  );
}

function UserManagement() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      {/* User management UI will go here */}
    </div>
  );
}

function AdminSettings() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Settings</h2>
      {/* Settings UI will go here */}
    </div>
  );
}

export default function Admin() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <Link
            to="/admin"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            <LayoutDashboard className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          <Link
            to="/admin/products"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            <Package className="h-5 w-5 mr-3" />
            Products
          </Link>
          <Link
            to="/admin/users"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            <UsersIcon className="h-5 w-5 mr-3" />
            Users
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            <SettingsIcon className="h-5 w-5 mr-3" />
            Settings
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="settings" element={<AdminSettings />} />
        </Routes>
      </div>
    </div>
  );
}