import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ModulePage from './pages/ModulePage'
import ReferenceLibrary from './pages/ReferenceLibrary'
import FileLibrary from './pages/FileLibrary'
import AdminDashboard from './pages/AdminDashboard'
import AdminCohorts from './pages/AdminCohorts'
import AdminSessions from './pages/AdminSessions'
import AdminCandidates from './pages/AdminCandidates'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Candidate routes */}
          <Route path="/dashboard" element={
            <PrivateRoute><Dashboard /></PrivateRoute>
          } />
          <Route path="/module/:moduleId" element={
            <PrivateRoute><ModulePage /></PrivateRoute>
          } />
          <Route path="/reference-library" element={
            <PrivateRoute><ReferenceLibrary /></PrivateRoute>
          } />
          <Route path="/file-library" element={
            <PrivateRoute><FileLibrary /></PrivateRoute>
          } />

          {/* Admin routes */}
          <Route path="/admin" element={
            <AdminRoute><AdminDashboard /></AdminRoute>
          } />
          <Route path="/admin/cohorts" element={
            <AdminRoute><AdminCohorts /></AdminRoute>
          } />
          <Route path="/admin/sessions" element={
            <AdminRoute><AdminSessions /></AdminRoute>
          } />
          <Route path="/admin/candidates" element={
            <AdminRoute><AdminCandidates /></AdminRoute>
          } />
          <Route path="/admin/files" element={
            <AdminRoute><FileLibrary /></AdminRoute>
          } />

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
