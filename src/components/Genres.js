import React, { useEffect, useState } from "react";
import { genres } from "../API_CALLS/genres_axios";

const Genres = () => {
  const [gdata, setdata] = useState([]);

  useEffect(async () => {
    setdata(await genres);
  }, []);

  return (
    <>
      <h1 className=" title">Genres API</h1>
      <div>
        {" "}
        <ul>
          <div>
            <table className="table">
              <tr>
                <th>User ID</th>
                <th>Name</th>
              </tr>
              {gdata.map((val, index) => (
                <tr key={index}>
                  <td>{val._id}</td>
                  <td>{val.name}</td>
                </tr>
              ))}
            </table>
          </div>
        </ul>
      </div>
    </>
  );
};
export default Genres;
