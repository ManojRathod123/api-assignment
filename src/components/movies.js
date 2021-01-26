import React,{useState, useEffect} from 'react';
import {movies} from '../API_CALLS/movies_axios';

const Movies = () =>{
    const [mdata, setdata] = useState([]);

    useEffect(async () => {
      setdata(await movies);
    }, []);
  
    return (
      <>
        <h1 className=" title">Movies API</h1>
        <div>
          {" "}
          <ul>
            <div>
              <table className="table">
                <tr>
                  <th>User ID</th>
                  <th>title</th>
                  <th>numberInStock</th>
                  <th>dailyRentalRate</th>
                </tr>
                {mdata.map((val, index) => (
                  <tr key={index}>
                    <td>{val._id}</td>
                    <td>{val.title}</td>
                    <td>{val.numberInStock}</td>
                    <td>{val.dailyRentalRate}</td>
                  </tr>
                ))}
              </table>
            </div>
          </ul>
        </div>
      </>
    );
}
export default Movies;