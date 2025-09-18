import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { SettingsProvider } from './hooks/useSettings';
import LoginPage from './components/auth/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import ScreenShield from './components/common/ScreenShield';

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <HashRouter>
        <AuthProvider>
          <ScreenShield>
            <AppRoutes />
          </ScreenShield>
        </AuthProvider>
      </HashRouter>
    </SettingsProvider>
  );
};

const AppRoutes: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={currentUser ? <Navigate to="/" replace /> : <LoginPage />} />
      <Route path="/*" element={currentUser ? <Dashboard /> : <Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;