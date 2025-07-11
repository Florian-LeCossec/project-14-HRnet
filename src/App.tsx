import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EmployeeForm } from "./pages/EmployeeForm";
import { EmployeeList } from "./pages/EmployeeList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<EmployeeForm />} />
            <Route path="/employee-list" element={<EmployeeList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
