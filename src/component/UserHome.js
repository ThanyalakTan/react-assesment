import './UserHome.css'

const UserHome = ({data}) => {
  console.log(data)
  return (
    <div className="table-data">
      <table className="custom-table">
        <thead className="table-thead">
          <tr className="table-th">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>            
        </thead>
        <tbody className="table-tbody">
          {
            data.map((e) =>
              <tr key={e.id} className="table-td">
                <td>{e.id}</td>
                <td>{e.firstname}</td>
                <td>{e.lastname}</td>
                <td>{e.position}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserHome;