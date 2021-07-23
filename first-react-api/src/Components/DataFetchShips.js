import { React, useState, useEffect } from "react";
import axios from "axios";
import { Card, Grid } from "semantic-ui-react";

export default function DataFetchShips() {
  const [starships, setStarships] = useState([]);
  //useEffect hook for fetch

  useEffect(() => {
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
          if (res.data.next) {
            getShipData(res.data.next);
          }
        })
        //catch errors if necessary
        .catch((err) => {
          console.log(err);
        });
    };
    getShipData("https://swapi.dev/api/starships");
  }, []);

  return (
    <>
      <h1 className="textwhite">Starships</h1>
      <Grid columns={4}>
        {starships.map((starship, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header key={starship.name}>{starship.name}</Card.Header>
                  <Card.Description>
                    <strong>Name</strong>
                    <p>{starship.name} </p>
                    <strong>Length</strong>
                    <p>{starship.length} m</p>
                    <strong>Price</strong>
                    <p>{starship.cost_in_credits} credits </p>
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
