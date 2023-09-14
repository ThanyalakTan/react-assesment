import { useState } from "react";
import AdminHome from "../component/AdminHome";
import UserHome from "../component/UserHome";
import './Home.css'

const Home = ({mockData}) => {

  const [ selectHome, setSelectHome ] = useState('');
  // console.log(selectHome);

  // สร้าง state เพราะมันจะ render เมื่อมีการเปลี่ยนแปลงค่า ซึ่งเมื่อกด delete เเล้ว state จะถูกอัพเดทเเล้ว component จะถูก render
  const [ data, setData ] = useState(mockData);
  // console.log(data)

  return (
    <div className="main-home">
      <div className="home-sector">
        {
          selectHome === 'user' ?
          <h1>User Homepage</h1>
          : null
        }
        {
          selectHome === 'admin' ?
          <h1>Admin Homepage</h1>
          : null
        }
        {
          selectHome === '' ?
          <h1>This is Homepage</h1>
          : null
        }
      </div>
      <div className="select-home-button">
        <div class="user-home">
          <button onClick={() => setSelectHome('user')}>
            User Homepage
          </button>
        </div>
        <div class="admin-home">
          <button onClick={() => setSelectHome('admin')}>
            Admin Homepage
          </button>
        </div>
      </div>
      <div>
        {
          selectHome === 'user' ?
          <UserHome data={data} />
          : null
        }
        {
          selectHome === 'admin' ?
          <AdminHome data={data} setData={setData} />
          : null
        }
      </div>
    </div>
  )
}

export default Home;