import React from "react";
import { useState, useEffect } from "react";
//Using useEffect
export default function AppFetchUsers(){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((actualData) => {
            setData(actualData);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setData(null);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);

    return (
        <div className="AppFetchUsers">
          <h1>Fetched Users</h1>
          {loading && <div>A moment please...</div>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
          <ul>
            {data &&
              data.map(({ id, name, email }) => (
                <li key={id}>
                  {name} || {email}
                </li>
              ))}
          </ul>
        </div>
      );
}