import { React, useState, useEffect } from "react";
import axios from "axios";

export default function DataFetchPeople() {
  const [starships, setStarships] = useState([]);
  //useEffect hook for fetch

  useEffect(() => {
    getShipData("https://swapi.dev/api/starships");
  }, []);

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
        {starships.map((ship) => (
          <li key={ship.name}>{ship.name}</li>
        ))}
      </ul>
    </div>
  );
}
