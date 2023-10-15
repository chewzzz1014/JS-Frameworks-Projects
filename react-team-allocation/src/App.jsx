import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Employee from './components/Employee'
import Footer from './components/Footer'

function App() {
    const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB')
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }])

    useEffect(() => {
      localStorage.setItem('employeeList', JSON.stringify(employees))
    }, [employees])
    
    useEffect(() => {
      localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
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
    <div>
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter(e => e.teamName === selectedTeam).length} 
        />
      <Employee 
        employees={employees}
        selectedTeam={selectedTeam}
        handleChangeTeam={handleChangeTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        />
      <Footer />
    </div>
  )
}

export default App
