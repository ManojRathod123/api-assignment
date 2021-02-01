import React, {useState, useEffect} from "react";
import {customers} from '../API_CALLS/customers_axios';

const Customers = () => {
    const [cdata, setdata] = useState([]);

  useEffect(async () => {
    setdata(await customers);
  }, []);

  return (
    <>
      <h1 className=" title">Customers API</h1>
      <div>
        <ul>
          <div>
            <table className="table">
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>phone</th>
                <th>isGold</th>
              </tr>
              {cdata.map((val, index) => (
                <tr key={index}>
                  <td>{val._id}</td>
                  <td>{val.name}</td>
                  <td>{val.phone}</td>
                  <td>{val.isGold}</td>
                </tr>
              ))}
            </table>
          </div>
        </ul>
      </div>
    </>
  );
}
export default Customers;