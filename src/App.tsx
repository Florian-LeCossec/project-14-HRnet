import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { enUS } from 'date-fns/locale';
import { Suspense, lazy } from "react";

// Lazy loading des composants de pages
const EmployeeForm = lazy(() => import("./pages/EmployeeForm").then(module => ({ default: module.EmployeeForm })));
const EmployeeList = lazy(() => import("./pages/EmployeeList").then(module => ({ default: module.EmployeeList })));

// Composant de chargement
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: '1.2rem'
  }}>
    Chargement...
  </div>
);

function App() {
  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
        <div className="app">
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<EmployeeForm />} />
                <Route path="/employee-list" element={<EmployeeList />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </LocalizationProvider>
    </Router>
  );
}

export default App;
