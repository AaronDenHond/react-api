import { React, useState, useEffect } from "react";
import axios from "axios";
import { Card, Grid } from "semantic-ui-react";

export default function DataFetchPeople() {
  const [people, setPeople] = useState([]); //state variable,initialize posts to empty array.

  //useEffect hook for fetch

  useEffect(() => {
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
            console.log("Getting next page!");
            getData(res.data.next);
          }
        })
        //catch errors if necessary
        .catch((err) => {
          console.log(err);
        });
    };
    getData("https://swapi.dev/api/people");
  }, []);

  return (
    <>
      <h1 className="textwhite">People</h1>
      <Grid columns={4}>
        {people.map((person, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header key={person.name}>{person.name}</Card.Header>
                  <Card.Description>
                    <strong>Height</strong>
                    <p>{person.height} cm</p>
                    <strong>Mass</strong>
                    <p>{person.mass} kg</p>
                    <strong>Eye Color</strong>
                    <p>{person.eye_color} </p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}

//start functie console.log met naam om te zien welke triggeren en wanneer, hoe lang...
