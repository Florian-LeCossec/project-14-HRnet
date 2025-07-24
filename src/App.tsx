import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EmployeeForm } from "./pages/EmployeeForm";
import { EmployeeList } from "./pages/EmployeeList";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { enUS } from 'date-fns/locale';
import "./App.css";

function App() {
  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
        <div className="app">
          <main>
            <Routes>
              <Route path="/" element={<EmployeeForm />} />
              <Route path="/employee-list" element={<EmployeeList />} />
            </Routes>
          </main>
        </div>
      </LocalizationProvider>
    </Router>
  );
}

export default App;
