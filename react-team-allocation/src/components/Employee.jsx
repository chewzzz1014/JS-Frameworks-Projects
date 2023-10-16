import TeamDropDown from './TeamDropDown'
import TeamMembers from './TeamMembers'

function Employee({employees, selectedTeam, handleChangeTeam, handleEmployeeCardClick}) {
    return (
        <main className="container">
            <TeamDropDown
                selectedTeam={selectedTeam}
                handleChangeTeam={handleChangeTeam}
            />
            
            <TeamMembers
                employees={employees}
                selectedTeam={selectedTeam}
                handleEmployeeCardClick={handleEmployeeCardClick}
            />
        </main>
    )
}

export default Employee