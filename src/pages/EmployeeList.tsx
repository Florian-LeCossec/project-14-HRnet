import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';

export const EmployeeList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const employees = useAppSelector((state) => state.employees.employees);
  const totalPages = Math.ceil(employees.length / 10);


  return (
    <div className="employee-list">
      <h1>Current Employees</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th className="sortable">
                First Name
              </th>
              <th className="sortable">
                Last Name
              </th>
              <th className="sortable">
                Start Date
              </th>
                <th className="sortable">
                Department
              </th>
              <th className="sortable">
                Date of Birth
              </th>
              <th className="sortable">
                Street
              </th>
              <th className="sortable">
                City
              </th>
              <th className="sortable">
                State
              </th>
                <th className="sortable">
                Zip Code
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {employees.length > 1 && (
        <div className="pagination">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            Previous
          </button>
          
          <span className="pagination-info">
            Page {currentPage} of {totalPages} ({employees.length} employees)
          </span>
          
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === employees.length}
            className="pagination-btn"
          >
            Next
          </button>
        </div>
      )}

      <div className="home-link">
        <button 
          type="button" 
          onClick={() => navigate('/')}
          className="home-btn"
        >
          Home
        </button>
      </div>
    </div>
  );
}; 