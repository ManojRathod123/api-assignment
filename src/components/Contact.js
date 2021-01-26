import React, { useEffect, useState } from "react";
import { registration } from "../API_CALLS/registration_axios";

const Contact = () => {
  const [data, setdata] = useState([]);

  useEffect(async () => {
    setdata(await registration);
  }, []);

  return (
    <>
      <h1 className=" title">Registration API</h1>
      <div>
        {" "}
        <ul>
          <div>
            <table className="table">
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
              {data.map((val, index) => (
                <tr key={index}>
                  <td>{val._id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                </tr>
              ))}
            </table>
          </div>
        </ul>
      </div>
    </>
  );
};
export default Contact;
