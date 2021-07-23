import { React, useState, useEffect } from "react";
import axios from "axios";

export default function DataFetch() {
  const [people, setPeople] = useState([]); //state variable,initialize posts to empty array.
  const [starships, setStarships] = useState([]);
  //useEffect hook for fetch

  useEffect(() => {
    getData("https://swapi.dev/api/people");
    getShipData("https://swapi.dev/api/starships");
  }, []);

  const getData = (url) => {
    axios
      .get(url)
      .then((res) => {
        res.data.results.forEach((curResult) => {
          setPeople((prevPeople) => {
            return [...prevPeople, curResult];
          });
          console.log(curResult);
        });
        //!TODO TURN ON PAGINATION ON BUILD
        /* if (res.data.next) {
          getData(res.data.next);
        } */
      })
      //catch errors if necessary
      .catch((err) => {
        console.log(err);
      });
  };

  const getShipData = (url) => {
    axios
      .get(url)
      .then((res) => {
        res.data.results.forEach((curResult) => {
          setStarships((prevStarships) => {
            return [...prevStarships, curResult];
          });
          console.log(curResult);
        });
        //!TODO TURN ON PAGINATION ON BUILD
        /* if (res.data.next) {
          getData(res.data.next);
        } */
      })
      //catch errors if necessary
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ul>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
      <ul>
        {starships.map((ship) => (
          <li key={ship.name}>{ship.name}</li>
        ))}
      </ul>
    </div>
  );
}
