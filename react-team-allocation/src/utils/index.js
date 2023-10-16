export const getSelectedTeamFromLocal = () => {
    return JSON.parse(localStorage.getItem('selectedTeam'))
}

export const storeSelectedTeamToLocal = (selectedTeam) => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
}

export const getEmployeeListFromLocal = () => {
    return JSON.parse(localStorage.getItem('employeeList'))
}

export const storeEmployeeListToLocal = (employees) => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
}