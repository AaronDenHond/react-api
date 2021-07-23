import { React, useState, useEffect } from "react";
import axios from "axios";
import { Card, Grid } from "semantic-ui-react";
import Person from "./Person";

export default function DataFetchPeople() {
  const [people, setPeople] = useState([]); //state variable,initialize posts to empty array.
  //make sure to only update one state at a time

  //useEffect hook for fetch

  useEffect(() => {
    console.log("Starting the person fetch");
    const getData = (url) => {
      axios
        .get(url)
        .then((res) => {
          res.data.results.forEach((curResult) => {
            setPeople((prevPeople) => {
              return [...prevPeople, curResult];
            });
          });
          //!TODO TURN ON PAGINATION ON BUILD
          if (res.data.next) {
            console.log("Getting next person page!");
            getData(res.data.next);
          }
        })
        //catch errors if necessary
        .catch((err) => {
          console.log(err);
        });
      console.log("Person fetch done, waiting for result");
      //REALLY USEFUL CONSOLE.LOGS TO CHECK
    };
    getData("https://swapi.dev/api/people");
  }, []);

  return (
    <>
      <h1 className="textwhite">People</h1>
      <Grid columns={4}>
        {people.map((person, i) => {
          return <Person person={person} i={i} mijnNaam={"Aaron"} />;
        })}
      </Grid>
    </>
  );
}

//start functie console.log met naam om te zien welke triggeren en wanneer, hoe lang...
