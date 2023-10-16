import './App.css'
import { useState, useEffect } from 'react'
import { employeeList } from './data'
import { 
  getSelectedTeamFromLocal,
  storeSelectedTeamToLocal,
  getEmployeeListFromLocal,
  storeEmployeeListToLocal 
} from './utils'
import NotFound from './components/NotFound'
import Nav from './components/Nav'
import Header from './components/Header'
import Employee from './components/Employee'
import Footer from './components/Footer'
import GroupedTeamMembers from './components/GroupedTeamMembers'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
    const [selectedTeam, setSelectedTeam] = useState(getSelectedTeamFromLocal() || 'TeamB')
    const [employees, setEmployees] = useState(getEmployeeListFromLocal() || employeeList)

    useEffect(() => {
      storeEmployeeListToLocal(employees)
    }, [employees])
    
    useEffect(() => {
      storeSelectedTeamToLocal(selectedTeam)
    }, [selectedTeam])

    function handleEmployeeCardClick(e) {
        // toogle employee
        const transformedEmployee = employees.map((employee) => 
            (employee.id === parseInt(e.currentTarget.id)) ? 
            (employee.teamName === selectedTeam) ?
            {...employee, teamName: ''} : 
            {...employee, teamName: selectedTeam} : 
            employee
        )
        setEmployees(transformedEmployee)
    }

    function handleChangeTeam(e) {
        setSelectedTeam(e.target.value)
    }

  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter(e => e.teamName === selectedTeam).length} 
      />
      <Routes>
        <Route 
          path='/'
          element={
            <Employee 
              employees={employees}
              selectedTeam={selectedTeam}
              handleChangeTeam={handleChangeTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
            />
          }
          >
        </Route>
        <Route
          path='/GroupedTeamMembers'
          element={
            <GroupedTeamMembers 
              employees={employees}
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
            />
          }
          >
        </Route>
        <Route
          path='*'
          element={<NotFound />}
          >
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
