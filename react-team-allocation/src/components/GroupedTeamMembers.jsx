import { useState } from "react"

function GroupedTeamMembers({employees, selectedTeam, setSelectedTeam}) {

    const [groupedEmployee, setGroupedEmployee] = useState(groupTeamMembers())

    function groupTeamMembers() {
        let teams = []
        let teamNames = ['TeamA', 'TeamB', 'TeamC', 'TeamD']

        teamNames.forEach(team => {
            teams.push({
                team,
                members: employees.filter(employee => employee.teamName === team),
                collapsed: selectedTeam === team
            })
        })
        return teams
    }

    function handleTeamClick(e) {
        let newGroupData = groupedEmployee.map(data => data.team === e.currentTarget.id ? {...data, collapsed: !data.collapsed} : data)
        setGroupedEmployee(newGroupData)
        setSelectedTeam(e.currentTarget.id)
    }

  return (
    <main className="container">
        {
            groupedEmployee.map((ele) => {
                return (
                    <div key={ele.team} className="card mt-2" style={{cursor: "pointer"}} onClick={handleTeamClick}>
                        <h4 id={ele.team} className="card-header text-secondary bg-white">
                            Team Name: {ele.team}
                        </h4>
                        <div id={`collapse_${ele.team}`} className={!ele.collapsed ? 'collapse' : ''}>
                            <hr />
                            {
                                ele.members.map(member => {
                                    return (
                                        <div key={member.id} className="mt-2">
                                            <h5 className="card-title mt-2">
                                                <span className="text-dark">
                                                    Full Name: {member.fullName}
                                                </span>
                                            </h5>
                                            <p>Designation: {member.designation}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
        }
    </main>
  )
}

export default GroupedTeamMembers
