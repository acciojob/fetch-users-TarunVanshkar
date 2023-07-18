
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserList = () => {
    setLoading(true);
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        setUserList(data.data);
        setLoading(false);
      }
    )
  };
  return (
    <div className="container App">
      <h4>Blue Whales</h4>
      <button
        className="btn"
        onClick={getUserList}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get User List"}
      </button>
      {/* <div className="clearfix"></div> */}

      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((x, i) => (
            <tr key={i}>
              <td>{x.first_name}</td>
              <td>{x.last_name}</td>
              <td>{x.email}</td>
              <td>
                <img src={x.avatar} width="50" height="50" alt={x.avatar} />
              </td>
            </tr>
          ))}
          {userList.length === 0 && (
            <tr>
              <td>
                <b>No data found to display.</b>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App
