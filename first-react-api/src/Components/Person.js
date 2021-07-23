import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function Person(props) {
  return (
    <div>
      <Grid.Column key={props.i}>
        <Card>
          <Card.Content>
            <Card.Header key={props.person.name}>
              {props.person.name}
            </Card.Header>
            <Card.Description>
              <strong>Height</strong>
              <p>{props.person.height} cm</p>
              <strong>Mass</strong>
              <p>{props.person.mass} kg</p>
              <strong>Eye Color</strong>
              <p>{props.person.eye_color} </p>
              <q>Made by {props.mijnNaam}</q>
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </div>
  );
}
