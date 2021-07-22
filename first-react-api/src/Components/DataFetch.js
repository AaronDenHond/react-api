import { React, useState, useEffect } from "react";
import axios from "axios";

export default function DataFetch() {
  const [people, setPeople] = useState([]); //state variable,initialize posts to empty array.

  //useEffect hook for fetch

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        //get request returns a promise
        console.log(res);
        setPeople(res.data.results);
      })
      //catch errors if necessary
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}
