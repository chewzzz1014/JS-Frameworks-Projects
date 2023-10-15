import femaleProfile from '../images/femaleProfile.jpg'
import maleProfile from '../images/maleProfile.jpg'

function Employee({employees, selectedTeam, handleChangeTeam, handleEmployeeCardClick}) {
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleChangeTeam}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {employees.map((e) => (
                            <div key={e.id} id={e.id} className={(e.teamName === selectedTeam) ? 'card m-2 standout' : 'card m-2'} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                                <img src={e.gender === 'male' ? maleProfile : femaleProfile} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Full Name: {e.fullName}</h5>
                                    <p className="card-text">
                                        <b>Designation: </b> {e.designation}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employee