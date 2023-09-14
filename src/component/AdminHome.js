import { useState } from "react";
import './AdminHome.css';

const AdminHome = ({data, setData}) => {

  const [ firstname, setFirstname ] = useState('');
  const [ lastname, setLastname ] = useState('');
  const [ position, setPosition ] = useState('');

  console.log(firstname, lastname, position)

  const removeData = (id) => {
    // console.log(id)
    const newData = data.filter((e) => e.id !== id)
    // console.log(newData)
    setData(newData)
  }

  const addData = (e) => {
    // ไม่ให้หน้าจอมัน refresh เพราะมันมีการส่งค่าจาก form ถ้ากด submit แล้วมันจะ refresh ทันที
    e.preventDefault();
    // console.log(`Adding success`)
    const findId = data.map((e) => e.id)
    const newId = Math.max(...findId) + 1
    const newData = {
      id:newId, firstname, lastname, position 
    }
    console.log(newData)
    setData((prev) => [...prev, newData])
  }

  return (
    <div className="admin-home">
      <div className="form">
        <h4> Create User Here : </h4>
        <form className="create-user-form" onSubmit={addData}>
          <div className="firstname">
            <input type="text" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} />
          </div>
          <div className="lastname">
            <input type="text" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} />
          </div>
          <div className="position">
            <input type="text" placeholder="Position" onChange={(e) => setPosition(e.target.value)} />
          </div>
          <div className="submit-button">
            <button type="submit"> Save </button>
          </div>
        </form>
      </div>
      <div className="table-data">
        <table className="custom-table">
          <thead className="table-thead">
              <th> ID </th>
            {/* </div> */}
            {/* <div className="table-head"> */}
              <th> First Name </th>
            {/* </div> */}
            {/* <div className="table-head"> */}
              <th> Last Name </th>
            {/* </div>
            <div className="table-head"> */}
              <th> Position </th>
            {/* </div>
            <div className="table-head"> */}
              <th> Action </th>
            {/* </div> */}
          </thead>
          <tbody className="table-tbody">
          {
            data.map((e) =>
              <tr key = {e.id}>
                <td> {e.id} </td>
                <td> {e.firstname} </td>
                <td> {e.lastname} </td>
                <td> {e.position} </td>
                <td>
                  <button onClick={() => removeData(e.id)}> Delete </button>
                </td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminHome;